import EntityFormatOne from "@/Components/System/Entities/EntityFormatOne";
import EntityFormatTwo from "@/Components/System/Entities/EntityFormatTwo";
import { Head } from "@inertiajs/react";

export default function Entity({ categorie, informations }) {

    function renderContent() {
        switch (categorie.id) {
            case 1: {/* Livre*/}
            case 2: {/* Anime*/}
            case 6: {/* Série*/}
            case 7: {/* Film*/}
                return <EntityFormatOne data={informations.data} id_cat={categorie.id}/>;
            case 4: {/* Jeu*/}
                return <EntityFormatTwo data={informations.data}/>;
            default:
                return null;
        }
    }

    return (
        <>
            <Head title={informations.data.title} />

            {renderContent()}
        </>
    )
}
