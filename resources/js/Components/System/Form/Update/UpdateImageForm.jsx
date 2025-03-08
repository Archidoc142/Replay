import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../../../UI/AddImage";

export default function UpdateImageForm({ SMF, entity }) {

    const [meta, setMeta] = useState({
        img_couverture: entity.meta.img_couverture,
        type: entity.meta.type,
    });

    const { data, setData, put, processing } = useForm({
        title: entity.title,
        meta: JSON.stringify(meta),
    })

    function submit(e) {
        e.preventDefault()

        const route = '/entity/modify/' + entity.id
        put(route, {
            data,
            onError: () => { SMF(3, "L'image n'a pas été modifié") },
            onSuccess: () => {
                SMF(1, "L'image a été modifié")
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
                {/* Image de couverture*/}
                <AddImage
                    filename={meta.img_couverture}
                    title="Image de couverture"
                    className="w-[45%]"
                    src={"/img/" + meta.img_couverture}
                    disabled={true}
                />

                <div className="pl-4 w-full flex flex-col gap-2 max-w-[55%]">
                    {/* Titre de l'image*/}
                    <div className="form__group field">
                        <input value={data.title} type="text" className="form__field" placeholder="" required onChange={(e) => { setData("title", e.target.value) }} />
                        <label htmlFor="title" className="form__label">Titre de l'image</label>
                    </div>

                    {/* Dessinateur*/}
                    <div className="form__group field">
                        <input disabled type="text" className="form__field" placeholder="" required />
                        <label htmlFor="realisateur" className="form__label">Dessinateur (Ne peut pat être modifié)</label>
                    </div>

                    <label className="mt-4" htmlFor="type">Type de l'image</label>
                    <select
                        className="text-gray-800 w-full cursor-pointer bg-gray-300 font-bold"
                        name="type"
                        onChange={(e) => updateMeta("type", e.target.value)}
                        value={meta.type}
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
