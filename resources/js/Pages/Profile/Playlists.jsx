import PlaylistForm from "@/Components/System/Form/PlaylistForm";
import MessageFlash from "@/Components/System/MessageFlash";
import Playlist from "@/Components/UI/Playlist";
import PopUp from "@/Components/UI/PopUp";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Playlists({ playlists }) {

    const [showForm, setShowForm] = useState(false)

    // Message Flash
    const [message, setMessage] = useState("")
    const [messageV, setMessageV] = useState(false)
    const [messageS, setMessageS] = useState(false)

    const showMessageFlash = (status, message, visibility = true) => {
        setMessageS(status)
        setMessage(message)
        setMessageV(visibility)
    }

    return (
        <>
            <Head title="Playlists" />

            <MessageFlash
                status={messageS}
                message={message}
                visibility={messageV}
                setVisibility={setMessageV}
            />

            {showForm ?
                <PopUp setShow={setShowForm} className="min-w-[40%]">
                    <PlaylistForm SMF={showMessageFlash} setShow={setShowForm} />
                </PopUp>
                : null}

            <div className='p-8'>
                <div className="flex justify-between">
                    <h1 className="text-4xl font-medium">Vos Playlists</h1>

                    <button
                        className="mr-2"
                        onClick={() => setShowForm(true)}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>
                    </button>
                </div>

                <hr className="border-gray-500 mt-4" />

                {
                    playlists.map(pl => (
                        <Playlist
                            key={pl.id}
                            name={pl.name}
                            img_path={pl.file_path}
                            nb_items={pl.nb_items}
                        />
                    ))
                }
            </div>
        </>
    )
}
