import EntityFormatOne from "@/Components/System/Entities/EntityFormatOne";
import EntityFormatTwo from "@/Components/System/Entities/EntityFormatTwo";
import MessageFlash from "@/Components/System/MessageFlash";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Entity({ categorie, informations, plFromUser, characters, charactersFromEntity, simContent }) {

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
        switch (categorie.id) {
            case 1: {/* Livre*/ }
            case 2: {/* Anime*/ }
            case 6: {/* Série*/ }
            case 7: {/* Film*/ }
                return <EntityFormatOne
                            data={informations.data}
                            cat={categorie}
                            characters={characters.data}
                            SMF={showMessageFlash}
                            charactersFromEntity={charactersFromEntity}
                            plFromUser={plFromUser}
                            simContent={simContent}
                        />;
            case 4: {/* Jeu*/ }
                return <EntityFormatTwo
                            data={informations.data}
                            cat={categorie}
                            characters={characters.data}
                            SMF={showMessageFlash}
                            charactersFromEntity={charactersFromEntity}
                            plFromUser={plFromUser}
                            simContent={simContent}
                        />;
            default:
                return null;
        }
    }

    return (
        <>
            <Head title={informations.data.title} />

            <MessageFlash
                status={messageS}
                message={message}
                visibility={messageV}
                setVisibility={setMessageV}
            />

            {renderContent()}
        </>
    )
}
