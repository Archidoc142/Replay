import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../UI/AddImage";
import Tag from "../UI/Tag";

export default function LivreForm({ category, tags }) {

    const [meta, setMeta] = useState({
        img_couverture: "",
        img_vignette: "",
        description: "",
        note: 0,
        lien: ""
    });

    const { data, setData, post } = useForm({
        title: "",
        meta: {},
        id_category: category,
        id_author: null,
        tags_form: []
    })

    function submit(e) {
        e.preventDefault();
        post('/entity');
    }

    function updateMeta(key, value) {
        setMeta(prev => ({ ...prev, [key]: value }));
    }

    useEffect(() => {
        setData('meta', JSON.stringify(meta));
        console.log(data.meta)
    }, [meta])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <form onSubmit={submit} className="p-6">
            <div className="flex">
                {/* Image de couverture du livre*/}
                <AddImage
                    filename={meta.img_couverture}
                    setFilename={(value) => updateMeta("img_couverture", value)}
                    setData={setData}
                    title="Image de couverture"
                />

                <div className="pl-4 w-full flex flex-col gap-2">
                    {/* Titre du livre*/}
                    <div>
                        <label htmlFor="title">Titre du livre</label><br />
                        <input
                            type="text"
                            name="title"
                            placeholder="Insérer le titre..."
                            required
                            onChange={(e) => { setData("title", e.target.value) }}
                            className="w-full"
                        />
                    </div>

                    <div className="flex gap-6">
                        {/* Note du livre*/}
                        <div className="w-3/4">
                            <label htmlFor="realisateur">Réalisateur du livre (facultatif)</label><br />
                            <input
                                type="text"
                                name="realisateur"
                                onChange={(e) => updateMeta("note", e.target.value)}
                                className="w-full"
                            />
                        </div>

                        {/* Note du livre*/}
                        <div className="w-1/4">
                            <label htmlFor="note">Note du livre</label><br />
                            <input
                                type="number"
                                name="note"
                                min={0}
                                max={100}
                                required
                                onChange={(e) => updateMeta("note", e.target.value)}
                                className="w-full"
                                placeholder="0 à 100"
                            />
                        </div>
                    </div>

                    {/* Lien vers le livre*/}
                    <div>
                        <label htmlFor="lien">Lien vers le livre</label><br />
                        <input
                            type="text"
                            name="lien"
                            placeholder="Insérer lien vers la lecture du livre..."
                            required
                            onChange={(e) => updateMeta("lien", e.target.value)}
                            className="w-full"
                        />
                    </div>

                    {/* Description du livre*/}
                    <div>
                        <label htmlFor="description">Lien vers le livre</label><br />
                        <textarea
                            name="description"
                            placeholder="Insérer la description du livre..."
                            onChange={(e) => { setData("description", e.target.value) }}
                            className="w-full"
                        ></textarea>
                    </div>
                </div>
            </div>

            <div>
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
                    className="bg-[#7A163C] py-2 px-4 rounded-md w-full hover:bg-[#88254b]"
                >
                    Enregistrer
                </button>
            </div>
        </form>
    )
}
