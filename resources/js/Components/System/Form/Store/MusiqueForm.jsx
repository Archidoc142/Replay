import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../../../UI/AddImage";

export default function MusiqueForm({ SMF, category }) {

    const [meta, setMeta] = useState({
        img_couverture: "",
        video: "",
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
        post('/entity', {
            forceFormData: true,
            onError: () => { SMF(3, "La musique n'a pas été ajouté") },
            onSuccess: () => {
                SMF(1, "La musique à été ajouté")
                wipeInputValue()
            }
        });
    }

    function wipeInputValue() {
        setData({
            title: "",
            meta: JSON.stringify({
                img_couverture: "",
                video: "",
            }),
            id_category: category,
            author_name: "",
            img_couverture: null,
        });

        setMeta({
            img_couverture: "",
            video: "",
        });

        document.querySelectorAll('input, textarea').forEach((el) => {
            el.value = ""
        })

        document.querySelectorAll('form img').forEach((el) => {
            el.src = "/img/placeholder_img.png"
        })
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
                {/* Image de couverture du livre*/}
                <AddImage
                    onFileUpload={(file) => handleFileUpload('img_couverture', file)}
                    filename={meta.img_couverture}
                    setFilename={(value) => updateMeta("img_couverture", value)}
                    title="Image de couverture"
                    className="w-[45%]"
                />

                <div className="pl-4 w-full flex flex-col gap-2 max-w-[55%]">

                    {/* Titre de la Musique*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" required onChange={(e) => { setData("title", e.target.value) }} />
                        <label htmlFor="title" className="form__label">Titre de la musique</label>
                    </div>

                    {/* Réalisateur de la Musique*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" onChange={(e) => { setData("author_name", e.target.value) }} />
                        <label htmlFor="realisateur" className="form__label">Auteur de la musique</label>
                    </div>

                    {/* Iframe de la Musique*/}
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="" required onChange={(e) => { updateMeta("video", e.target.value) }} />
                        <label htmlFor="video" className="form__label">Iframe de la musique</label>
                    </div>
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
