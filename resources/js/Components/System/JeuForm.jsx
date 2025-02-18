import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../UI/AddImage";
import Tag from "../UI/Tag";

export default function JeuForm({category, tags}) {

        const [meta, setMeta] = useState({
            img_couverture: "",
            img_vignette: "",
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
            img_vignette: null,
        })

        function submit(e) {
            e.preventDefault();
            post('/entity', {
                forceFormData: true
            });
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
                    {/* Image de couverture du Jeu*/}
                    <AddImage
                        onFileUpload={(file) => handleFileUpload('img_couverture', file)}
                        filename={meta.img_couverture}
                        setFilename={(value) => updateMeta("img_couverture", value)}
                        title="Image de couverture"
                        className="w-[40%]"
                    />

                    <div className="pl-4 w-full flex flex-col gap-2 max-w-[60%]">

                        {/* Titre du Jeu*/}
                        <div className="form__group field">
                            <input type="text" className="form__field" placeholder="" required="" onChange={(e) => { setData("title", e.target.value) }} />
                            <label htmlFor="title" className="form__label">Titre du Jeu</label>
                        </div>

                        <div className="flex gap-6">
                            {/* Studio de développement du Jeu*/}
                            <div className="form__group field !w-2/3">
                                <input type="text" className="form__field" placeholder="" required="" onChange={(e) => { setData("author_name", e.target.value) }} />
                                <label htmlFor="realisateur" className="form__label">Studio de développement du Jeu</label>
                            </div>

                            {/* Note du Jeu*/}
                            <div className="form__group field !w-1/3">
                                <input type="number" className="form__field" min={0} max={100} placeholder="" required="" onChange={(e) => { updateMeta("note", e.target.value) }} />
                                <label htmlFor="note" className="form__label">Note du jeu</label>
                            </div>
                        </div>

                        {/* Trailer du Jeu*/}
                        <div className="form__group field">
                            <input type="text" className="form__field" placeholder="" required="" onChange={(e) => { updateMeta("video", e.target.value) }} />
                            <label htmlFor="video" className="form__label">Iframe du trailer</label>
                        </div>

                        {/* Description du jeu*/}
                        <div className="mt-2">
                            <label htmlFor="description" className="font-bold">Description du jeu</label><br />
                            <textarea
                                name="description"
                                placeholder="Insérer la description du jeu..."
                                onChange={(e) => updateMeta("description", e.target.value)}
                                className="w-full min-h-24 rounded-br-3xl text-white bg-[#d1cfcf10] border-none"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div>
                    {/* Image de vignette du Jeu*/}
                    <AddImage
                        onFileUpload={(file) => handleFileUpload('img_vignette', file)}
                        filename={meta.img_vignette}
                        setFilename={(value) => updateMeta("img_vignette", value)}
                        title="Image de vignette"
                        className="mt-6 max-h-64"
                        isHorizontal={true}
                    />

                    <h3 className="text-2xl mt-4 mb-2">Genres du livre</h3>

                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <Tag
                                key={tag.id}
                                id={tag.id}
                                text={tag.name}
                                isClickable={true}
                                setData={setData}
                                data={data}
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
