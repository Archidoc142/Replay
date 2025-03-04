import PlaylistForm from "@/Components/System/Form/Store/PlaylistForm";
import LoadingScreen from "@/Components/System/LoadingScreen";
import MessageFlash from "@/Components/System/MessageFlash";
import PlaylistObject from "@/Components/UI/PlaylistObject";
import PopUp from "@/Components/UI/PopUp";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Playlists({ playlists, categories }) {

    const [showForm, setShowForm] = useState(false)

    // Message Flash
    const [message, setMessage] = useState("")
    const [messageV, setMessageV] = useState(false)
    const [messageS, setMessageS] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    const showMessageFlash = (status, message, visibility = true) => {
        setMessageS(status)
        setMessage(message)
        setMessageV(visibility)
    }

    return (
        <>
            <Head title="Playlists" />

            {isLoading && <LoadingScreen setIsLoading={setIsLoading} setLoadingProgress={setLoadingProgress} progress={loadingProgress} />}

            <MessageFlash
                status={messageS}
                message={message}
                visibility={messageV}
                setVisibility={setMessageV}
            />

            {showForm ?
                <PopUp setShow={setShowForm} className="min-w-[50%]">
                    <PlaylistForm
                        SMF={showMessageFlash}
                        setShow={setShowForm}
                        categories={categories}
                    />
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

                <div className="mt-8 flex flex-wrap gap-8">
                    {
                        playlists.length > 0 ?
                            playlists.map(pl => (
                                <PlaylistObject
                                    key={pl.id}
                                    id={pl.id}
                                    name={pl.name}
                                    img_path={pl.file_path}
                                    nb_items={pl.nb_items}
                                    category={categories[pl.id_category - 1]}
                                />
                            )) :
                            <div className="text-4xl text-gray-600 font-bold">
                                <p>Aucune playlist</p>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
