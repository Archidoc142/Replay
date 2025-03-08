import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../../../UI/AddImage";
import Tag from "../../../UI/Tag";

export default function SerieForm({ SMF, category, tags }) {
    const [meta, setMeta] = useState({
        img_couverture: "",
        description: "",
        note: 0,
        video: ""
    });

    const { data, setData, post, processing } = useForm({
        title: "",
        meta: JSON.stringify(meta),
        id_category: category,
        author_name: "",
        tags_form: [],
        img_couverture: null,
    })

    function submit(e) {
        e.preventDefault();
        post('/entity', {
            forceFormData: true,
            onError: () => { SMF(3, "La série n'a pas été ajouté") },
            onSuccess: () => {
                SMF(1, "La série a été ajouté")
                wipeInputValue()
            }
        });
    }

    const [resetTags, setResetTags] = useState(0);

    function wipeInputValue() {
        setData({
            title: "",
            meta: JSON.stringify({
                img_couverture: "",
                description: "",
                note: 0,
                video: ""
            }),
            id_category: category,
            author_name: "",
            tags_form: [],
            img_couverture: null,
        });

        setMeta({
            img_couverture: "",
            description: "",
            note: 0,
            video: ""
        });

        document.querySelectorAll('input, textarea').forEach((el) => {
            el.value = ""
        })

        document.querySelectorAll('form img').forEach((el) => {
            el.src = "/img/placeholder_img.png"
        })

        setResetTags(!resetTags)
    }

    function updateMeta(key, value) {
        setMeta(prev => ({ ...prev, [key]: value }));
    }

    function handleFileUpload(key, file) {
        setData(key, file);
        setMeta(prev => ({ ...prev, [key]: file.name }));
    }

    useEffect(() => {
        setData('meta', JSON.stringify(meta));
    }, [meta])

    return (
        <form onSubmit={submit} className="p-6">
            <div className="flex gap-2">
                {/* Image de couverture de la Série*/}
                <AddImage
                    onFileUpload={(file) => handleFileUpload('img_couverture', file)}
                    filename={meta.img_couverture}
                    setFilename={(value) => updateMeta("img_couverture", value)}
                    title="Image de couverture"
                    className="w-[40%]"
                />

                <div className="pl-4 w-full flex flex-col gap-2 max-w-[60%]">

                    {/* Titre de la Série*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" required onChange={(e) => { setData("title", e.target.value) }} />
                        <label htmlFor="title" className="form__label">Titre de la série</label>
                    </div>

                    <div className="flex gap-6">
                        {/* Réalisateur de la Série*/}
                        <div className="form__group field !w-2/3">
                            <input type="text" className="form__field" placeholder="" onChange={(e) => { setData("author_name", e.target.value) }} />
                            <label htmlFor="realisateur" className="form__label">Réalisateur de la série</label>
                        </div>

                        {/* Note de la Série*/}
                        <div className="form__group field !w-1/3">
                            <input type="number" className="form__field" value={meta.note} min={0} max={100} placeholder="" required onChange={(e) => { updateMeta("note", e.target.value) }} />
                            <label htmlFor="note" className="form__label">Note de la série</label>
                        </div>
                    </div>

                    {/* Trailer de la Série*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" required onChange={(e) => { updateMeta("video", e.target.value) }} />
                        <label htmlFor="lien" className="form__label">Trailer de la série</label>
                    </div>

                    {/* Description de la Série*/}
                    <div className="mt-2">
                        <label htmlFor="description" className="font-bold">Description de la série</label><br />
                        <textarea
                            name="description"
                            placeholder="Insérer la description de la série..."
                            onChange={(e) => updateMeta("description", e.target.value)}
                            className="w-full min-h-24 rounded-br-3xl text-white bg-[#d1cfcf10] border-none"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl mt-4 mb-2">Genres de la série</h3>

                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <Tag
                            key={tag.id}
                            id={tag.id}
                            text={tag.name}
                            isClickable={true}
                            setData={setData}
                            data={data}
                            resetTrigger={resetTags}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-[#7A163C] py-2 px-4 rounded-md w-full hover:bg-[#88254b]"
                >
                    {processing ? 'Enregistrement en cours...' : 'Enregistrer'}
                </button>
            </div>
        </form>
    )
}
