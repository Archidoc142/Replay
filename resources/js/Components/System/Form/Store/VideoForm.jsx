import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../../../UI/AddImage";

export default function VideoForm({ SMF, category }) {

    const [meta, setMeta] = useState({
        video: "",
    });

    const { data, setData, post, processing } = useForm({
        title: "",
        meta: JSON.stringify(meta),
        id_category: category,
        author_name: "",
    })

    function submit(e) {
        e.preventDefault();
        post('/entity', {
            forceFormData: true,
            onError: () => { SMF(3, "La vidéo n'a pas été ajouté") },
            onSuccess: () => {
                SMF(1, "La vidéo a été ajouté")
                wipeInputValue()
            }
        });
    }

    function wipeInputValue() {
        setData({
            title: "",
            meta: JSON.stringify({
                video: "",
            }),
            id_category: category,
            author_name: "",
            img_couverture: null,
        });

        setMeta({
            video: "",
        });

        document.querySelectorAll('input, textarea').forEach((el) => {
            el.value = ""
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
            <div className="w-full flex flex-col gap-2">
                {/* Titre de la Vidéo*/}
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="" required onChange={(e) => { setData("title", e.target.value) }} />
                    <label htmlFor="title" className="form__label">Titre de la Vidéo</label>
                </div>

                {/* Réalisateur de la Vidéo*/}
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="" onChange={(e) => { setData("author_name", e.target.value) }} />
                    <label htmlFor="realisateur" className="form__label">Auteur de la Vidéo</label>
                </div>

                {/* Iframe de la Vidéo*/}
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="" required onChange={(e) => { updateMeta("video", e.target.value) }} />
                    <label htmlFor="video" className="form__label">Iframe de la Vidéo</label>
                </div>
            </div>

            <div className="flex justify-center mt-8">
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
