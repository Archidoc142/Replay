import Dropdown from "@/Components/Breeze/Dropdown";
import EntityNamecard from "@/Components/UI/Namecard/EntityNamecard";
import { Head } from "@inertiajs/react";

export default function Accueil({ books, musics, games, movies, series, animes }) {

    return (
        <>
            <Head title="Accueil" />

            <div className="p-20 flex gap-8">
                <EntityNamecard data={books.data[0]}/>
                <EntityNamecard data={games.data[0]}/>
            </div>
        </>
    )
}
