import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../../../UI/AddImage";
import Tag from "../../../UI/Tag";

export default function UpdateSerieForm({ SMF, tags, entity }) {

    const [meta, setMeta] = useState({
        img_couverture: entity.meta.img_couverture,
        description: entity.meta.description,
        note: entity.meta.note,
        video: entity.meta.video
    });

    const { data, setData, put, processing } = useForm({
        title: entity.title,
        meta: JSON.stringify(meta),
        tags_form: entity.tags,
    })

    function submit(e) {
        e.preventDefault()

        const route = '/entity/modify/' + entity.id
        put(route, {
            data,
            onError: () => { SMF(3, "La série n'a pas été modifié") },
            onSuccess: () => {
                SMF(1, "La série à été modifié")
            }
        })
    }

    const [resetTags, setResetTags] = useState(0);

    function updateMeta(key, value) {
        setMeta(prev => ({ ...prev, [key]: value }));
    }

    useEffect(() => {
        setData('meta', JSON.stringify(meta));
    }, [meta])

    return (
        <form onSubmit={submit} className="p-6">
            <div className="flex gap-2">
                {/* Image de couverture de la série*/}
                <AddImage
                    filename={meta.img_couverture}
                    title="Image de couverture"
                    className="w-[40%]"
                    src={"/img/" + meta.img_couverture}
                    disabled={true}
                />

                <div className="pl-4 w-full flex flex-col gap-2 max-w-[60%]">

                    {/* Titre de la série*/}
                    <div className="form__group field">
                        <input value={data.title} name="title" type="text" className="form__field" placeholder="" required onChange={(e) => { setData("title", e.target.value) }} />
                        <label htmlFor="title" className="form__label">Titre de la série</label>
                    </div>

                    <div className="flex gap-6">
                        {/* Réalisateur de la série*/}
                        <div className="form__group field !w-2/3">
                            <input disabled name="realisateur" type="text" className="form__field" placeholder="" />
                            <label htmlFor="realisateur" className="form__label">Réalisateur (Ne peut pat être modifié)</label>
                        </div>

                        {/* Note de la série*/}
                        <div className="form__group field !w-1/3">
                            <input name="note" type="number" className="form__field" value={meta.note} min={0} max={100} placeholder="" required onChange={(e) => { updateMeta("note", e.target.value) }} />
                            <label htmlFor="note" className="form__label">Note de la série</label>
                        </div>
                    </div>

                    {/* Lien vers de la série*/}
                    <div className="form__group field">
                        <input value={meta.video} name="lien" type="text" className="form__field" placeholder="" required onChange={(e) => { updateMeta("video", e.target.value) }} />
                        <label htmlFor="lien" className="form__label">Trailer de la série</label>
                    </div>

                    {/* Description de la série*/}
                    <div className="mt-2">
                        <label htmlFor="description" className="font-bold">Description de la série</label><br />
                        <textarea
                            value={meta.description}
                            name="description"
                            placeholder="Insérer la description de l'anime..."
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
                            isActive={entity.tags.includes(tag.id)}
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
