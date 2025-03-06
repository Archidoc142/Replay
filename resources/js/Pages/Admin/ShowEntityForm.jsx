import UpdateAnimeForm from "@/Components/System/Form/Update/UpdateAnimeForm";
import UpdateFilmForm from "@/Components/System/Form/Update/UpdateFilmForm";
import UpdateImageForm from "@/Components/System/Form/Update/UpdateImageForm";
import UpdateJeuForm from "@/Components/System/Form/Update/UpdateJeuForm";
import UpdateLivreForm from "@/Components/System/Form/Update/UpdateLivreForm";
import UpdateMusicForm from "@/Components/System/Form/Update/UpdateMusicForm";
import UpdateSerieForm from "@/Components/System/Form/Update/UpdateSerieForm";
import UpdateVideoForm from "@/Components/System/Form/Update/UpdateVideoForm";
import MessageFlash from "@/Components/System/MessageFlash";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function ShowEntityForm({ entity }) {

    const genres = usePage().props.genres

    const { delete: destroy } = useForm();

    function deleteEntity(e) {
        e.preventDefault();

        if (!confirm("Voulez-vous vraiment supprimer cette entité ?")) return;

        destroy(route("entity.destroy", { id: entity.data.id, id_category: entity.data.id_category }));
    }

    // Message Flash
    const [message, setMessage] = useState("")
    const [messageV, setMessageV] = useState(false)
    const [messageS, setMessageS] = useState(false)

    const showMessageFlash = (status, message, visibility = true) => {
        setMessageS(status)
        setMessage(message)
        setMessageV(visibility)
    }

    function renderContent() {
        switch (entity.data.id_category) {
            case 1:
                return <UpdateLivreForm entity={entity.data} SMF={showMessageFlash} tags={genres} />;
            case 2:
                return <UpdateAnimeForm entity={entity.data} SMF={showMessageFlash} tags={genres} />;
            case 3:
                return <UpdateMusicForm entity={entity.data} SMF={showMessageFlash} />;
            case 4:
                return <UpdateJeuForm entity={entity.data} SMF={showMessageFlash} tags={genres} />;
            case 5:
                return <UpdateVideoForm entity={entity.data} SMF={showMessageFlash} />;
            case 6:
                return <UpdateSerieForm entity={entity.data} SMF={showMessageFlash} tags={genres} />;
            case 7:
                return <UpdateFilmForm entity={entity.data} SMF={showMessageFlash} tags={genres} />;
            case 8:
                return <UpdateImageForm entity={entity.data} SMF={showMessageFlash} />;
            default:
                return null;
        }
    }

    document.body.style.backgroundColor = "#1f2a38";

    return (
        <>
            <Head title={"Modification : " + entity.data.title} />

            <MessageFlash
                status={messageS}
                message={message}
                visibility={messageV}
                setVisibility={setMessageV}
            />

            <div className="p-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl">{entity.data.title}</h1>
                    <button className="group" onClick={deleteEntity}>
                        <svg className="group-hover:stroke-[#7a163d]" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div>

                <hr className="border-gray-500 mt-4 mb-8" />

                {renderContent()}
            </div>
        </>
    )
}
