import Anime from "@/Components/System/Entities/Anime";
import Film from "@/Components/System/Entities/Film";
import Jeu from "@/Components/System/Entities/Jeu";
import Livre from "@/Components/System/Entities/Livre";
import Musique from "@/Components/System/Entities/Musique";
import Serie from "@/Components/System/Entities/Serie";
import Video from "@/Components/System/Entities/Video";
import { Head } from "@inertiajs/react";

export default function Entity({ categorie, informations }) {

    console.log(categorie)
    console.log(informations)

    function renderContent() {
        switch (categorie.id) {
            case 1:
                return <Livre book={informations.data}/>;
            case 2:
                return <Anime anime={informations.data}/>;
            case 3:
                return <Musique music={informations.data}/>;
            case 4:
                return <Jeu game={informations.data}/>;
            case 5:
                return <Video video={informations.data}/>;
            case 6:
                return <Serie serie={informations.data}/>;
            case 7:
                return <Film movie={informations.data}/>;
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
