import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react'
import AddImage from "../../../UI/AddImage";

export default function UpdateVideoForm({ SMF, entity }) {

    const [meta, setMeta] = useState({
        video: entity.meta.video,
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
            onError: () => { SMF(3, "La vidéo n'a pas été modifié") },
            onSuccess: () => {
                SMF(1, "La vidéo à été modifié")
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
            <div className="w-full flex flex-col gap-2">
                {/* Titre de la Vidéo*/}
                <div className="form__group field">
                    <input value={data.title} type="text" className="form__field" placeholder="" required onChange={(e) => { setData("title", e.target.value) }} />
                    <label htmlFor="title" className="form__label">Titre de la Vidéo</label>
                </div>

                {/* Réalisateur de la Vidéo*/}
                <div className="form__group field">
                    <input disabled type="text" className="form__field" placeholder="" />
                    <label htmlFor="realisateur" className="form__label">Auteur de la Vidéo (Ne peut pat être modifié)</label>
                </div>

                {/* Iframe de la Vidéo*/}
                <div className="form__group field">
                    <input value={meta.video} type="text" className="form__field" placeholder="" required onChange={(e) => { updateMeta("video", e.target.value) }} />
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
