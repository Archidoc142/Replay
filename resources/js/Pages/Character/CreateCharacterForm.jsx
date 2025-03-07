import MessageFlash from "@/Components/System/MessageFlash";
import AddImage from "@/Components/UI/AddImage";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function CreateCharacterForm() {

    const [meta, setMeta] = useState([])
    const [images, setImages] = useState([])

    // Message Flash
    const [message, setMessage] = useState("")
    const [messageV, setMessageV] = useState(false)
    const [messageS, setMessageS] = useState(false)

    const showMessageFlash = (status, message, visibility = true) => {
        setMessageS(status)
        setMessage(message)
        setMessageV(visibility)
    }

    const { data, setData, post, processing } = useForm({
        theme_color: "#deb76c",
        name: "",
        meta: JSON.stringify(meta),
        description: "",
        images: JSON.stringify(images),
        vignette: null,
        img_vignette: null,
    })

    function submit(e) {
        e.preventDefault()

        post('/character', {
            onError: () => showMessageFlash(3, "Le personnage n'a pas été ajouté"),
            onSuccess: () => showMessageFlash(1, "Le personnage a été ajouté")
        })
    }

    function addImageField() {
        setImages((prev) => [...prev, { name: "", img: "", file: null }])
    }

    function addMetaField() {
        setMeta((prev) => [...prev, { title: "", html: "" }])
    }

    function updateImage(index, key, value) {
        const updatedImages = [...images];
        updatedImages[index][key] = value;
        setImages(updatedImages);
    }

    function updateMeta(index, key, value) {
        const updatedMeta = [...meta];
        updatedMeta[index][key] = value;
        setMeta(updatedMeta);
    }

    function removeImageField(index) {
        setImages((prev) => prev.filter((_, i) => i !== index))
    }

    function removeMetaField(index) {
        setMeta((prev) => prev.filter((_, i) => i !== index))
    }

    useEffect(() => {
        setData((prev) => ({ ...prev, meta: JSON.stringify(meta) }));
    }, [meta]);

    useEffect(() => {
        setData((prev) => ({ ...prev, images: JSON.stringify(images) }));
    }, [images]);

    return (
        <>
            <Head title="Création de personnage" />

            <MessageFlash
                status={messageS}
                message={message}
                visibility={messageV}
                setVisibility={setMessageV}
            />

            <div className='p-8'>
                <h1 className="text-4xl font-medium">Création de personnage</h1>

                <hr className="border-gray-500 mt-4 mb-8" />

                <form onSubmit={submit}>
                    <div className="flex gap-8">
                        <AddImage
                            onFileUpload={(file) => setData('img_vignette', file)}
                            setFilename={(value) => setData("vignette", value)}
                            filename={data.vignette}
                            title="Image de vignette"
                            className="w-[40%]"
                        />

                        <div className="flex flex-col gap-2 w-[55%]">
                            <div className="form__group field">
                                <input value={data.name} name="name" type="text" className="form__field" placeholder="" required onChange={(e) => { setData("name", e.target.value) }} />
                                <label htmlFor="name" className="form__label">Nom du personnage</label>
                            </div>

                            <div className="form__group field">
                                <input value={data.theme_color} name="theme_color" type="text" className="form__field" placeholder="" maxLength="7" required onChange={(e) => { setData("theme_color", e.target.value) }} />
                                <label htmlFor="theme_color" className="form__label">Couleur du thème</label>
                            </div>

                            <div className="mt-2">
                                <label htmlFor="description" className="font-bold">Description du personnage</label><br />
                                <textarea
                                    value={data.description}
                                    name="description"
                                    placeholder="Insérer la description du personnage..."
                                    onChange={(e) => setData("description", e.target.value)}
                                    className="w-full min-h-24 rounded-br-3xl text-white bg-[#d1cfcf10] border-none"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-3xl font-bold mb-6">Images du personnage (facultatif)</h3>
                        <div className="flex flex-wrap gap-6">
                            {images.map((image, index) => (
                                <div key={index} className="min-w-[470px] max-w-[32%] bg-[#1f2937] px-4 pb-2 rounded-xl flex flex-col gap-4">
                                    <div className="relative">
                                        <div className="form__group field">
                                            <input value={image.name} name="name" type="text" className="form__field" placeholder="" required onChange={(e) => { updateImage(index, "name", e.target.value) }} />
                                            <label htmlFor="name" className="form__label">Titre de l’image #{index + 1}</label>
                                        </div>
                                        <svg onClick={() => removeImageField(index)} className="cursor-pointer absolute top-4 right-2 bg-[#585353c7] hover:stroke-gray-400 p-1 rounded-lg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    </div>

                                    <AddImage filename={image.img} title={`Image #${index + 1}`} onFileUpload={(file) => updateImage(index, 'file', file)} setFilename={(value) => updateImage(index, "img", value)} />
                                </div>
                            ))}
                        </div>

                        <button type="button" className="mt-4 bg-blue-700 hover:bg-blue-600 text-white px-8 py-2 rounded-md" onClick={addImageField}>Ajouter une image</button>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-3xl font-bold mb-6">Ajout de sections HTML (facultatif)</h3>
                        <div className="flex flex-wrap gap-6">
                            {meta.map((bloc, index) => (
                                <div key={index} className="min-w-[470px] max-w-[32%] bg-[#1f2937] px-4 pb-2 rounded-xl flex flex-col gap-4">
                                    <div className="relative">
                                        <div className="form__group field">
                                            <input value={bloc.name} name="section" type="text" className="form__field" placeholder="" required onChange={(e) => { updateMeta(index, "title", e.target.value) }} />
                                            <label htmlFor="section" className="form__label">Titre de la section #{index + 1}</label>
                                        </div>
                                        <svg onClick={() => removeMetaField(index)} className="cursor-pointer absolute top-4 right-2 bg-[#585353c7] hover:stroke-gray-400 p-1 rounded-lg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="html" className="font-bold">Section HTML</label><br />
                                        <textarea
                                            value={bloc.html}
                                            name="html"
                                            placeholder="Insérer le contenu..."
                                            onChange={(e) => updateMeta(index, "html", e.target.value)}
                                            className="w-full min-h-24 rounded-br-3xl text-white bg-[#d1cfcf10] border-none"
                                        ></textarea>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button type="button" className="mt-4 bg-blue-700 hover:bg-blue-600 text-white px-8 py-2 rounded-md" onClick={addMetaField}>Ajouter une section</button>
                    </div>

                    <button type="submit" disabled={processing} className="bg-[#7A163C] py-2 px-4 rounded-md w-full hover:bg-[#88254b] mt-6">
                        {processing ? 'Enregistrement en cours...' : 'Enregistrer'}
                    </button>
                </form>
            </div>
        </>
    )
}
