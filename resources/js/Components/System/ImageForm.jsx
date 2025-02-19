import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../UI/AddImage"

export default function ImageForm({ category }) {

    const [meta, setMeta] = useState({
        img_couverture: "",
        type: "",
    });

    const { data, setData, post, processing } = useForm({
        title: "",
        meta: JSON.stringify(meta),
        id_category: category,
        author_name: "",
        img_couverture: null,
    })

    function submit(e) {
        e.preventDefault();
        if (meta['type'] != "") {
            post('/entity', {
                forceFormData: true
            });
        }
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
                {/* Image de couverture*/}
                <AddImage
                    onFileUpload={(file) => handleFileUpload('img_couverture', file)}
                    filename={meta.img_couverture}
                    setFilename={(value) => updateMeta("img_couverture", value)}
                    title="Image de couverture"
                    className="w-[45%]"
                />

                <div className="pl-4 w-full flex flex-col gap-2 max-w-[55%]">
                    {/* Titre de l'image*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" onChange={(e) => { setData("title", e.target.value) }} />
                        <label htmlFor="title" className="form__label">Titre de l'image</label>
                    </div>

                    {/* Dessinateur*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" required onChange={(e) => { setData("author_name", e.target.value) }} />
                        <label htmlFor="realisateur" className="form__label">Dessinateur</label>
                    </div>

                    <label className="mt-4" htmlFor="type">Type de l'image</label>
                    <select
                        className="text-gray-800 w-full cursor-pointer bg-gray-300 font-bold"
                        name="type"
                        onChange={(e) => updateMeta("type", e.target.value)}
                    >
                        <option value="">Choisir une catégorie</option>
                        <option value="desktop">Wallpaper Desktop</option>
                        <option value="phone">Wallpaper Téléphone</option>
                        <option value="fan_art">Fan Art</option>
                        <option value="other">Autres</option>
                    </select>
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
