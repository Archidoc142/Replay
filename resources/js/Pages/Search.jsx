import ListToggleButton from "@/Components/UI/ListToggleButton";
import EntityNamecard from "@/Components/UI/Namecard/EntityNamecard";
import ImageNamecard from "@/Components/UI/Namecard/ImageNamecard";
import MusicNamecard from "@/Components/UI/Namecard/MusicNamecard";
import VideoNamecard from "@/Components/UI/Namecard/VideoNamecard";
import PaginationBar from "@/Components/UI/PaginationBar";
import SearchBar from "@/Components/UI/SearchBar";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Search({ results }) {

    const genres = usePage().props.genres;

    const { data, setData, get, processing } = useForm({
        search: "",
        book: true,
        anime: true,
        music: true,
        game: true,
        video: true,
        serie: true,
        movie: true,
        image: true,
    })

    function submit(e) {
        e.preventDefault();
        get('/search', {
            preserveState: true,
            replace: true,
            preserveScroll: true,
        });
    }

    // Ajout aux playlists
    const [showForm, setShowForm] = useState(false)
    const [id_entity, setId_entity] = useState(0)
    const [id_category, setId_Category] = useState(0)

    function handleOpenForm(id_entity, id_category) {
        setShowForm(true)
        setId_entity(id_entity)
        setId_Category(id_category)
    }

    function renderContent(data) {
        switch (data.id_category) {
            case 1:
            case 2:
            case 4:
            case 6:
            case 7:
                return <EntityNamecard genres={genres} data={data} isAnimated={false} handleOpenForm={handleOpenForm} />;
            case 3:
                return <MusicNamecard data={data} handleOpenForm={handleOpenForm} />;
            case 5:
                return <VideoNamecard data={data} handleOpenForm={handleOpenForm} />;
            case 8:
                return <ImageNamecard data={data} handleOpenForm={handleOpenForm} inGrid={false} />;
            default:
                return null;
        }
    }

    return (
        <>
            <Head title="Recherche" />

            <ListToggleButton setShowForm={setShowForm} showForm={showForm} id_entity={id_entity} id_category={id_category}/>

            <form onSubmit={submit}>
                <SearchBar
                    onChange={(value) => setData('search', value)}
                    value={data.search}
                    processing={processing}
                />

                <div className="center gap-2 mb-2">
                    <input type="checkbox" id="books" name="books" checked={data.book} onChange={(e) => setData('book', e.target.checked)} />
                    <label className="mr-4" htmlFor="books">Livres</label>

                    <input type="checkbox" id="anime" name="anime" checked={data.anime} onChange={(e) => setData('anime', e.target.checked)} />
                    <label className="mr-4" htmlFor="anime">Animes</label>

                    <input type="checkbox" id="music" name="music" checked={data.music} onChange={(e) => setData('music', e.target.checked)} />
                    <label className="mr-4" htmlFor="music">Musiques</label>

                    <input type="checkbox" id="game" name="game" checked={data.game} onChange={(e) => setData('game', e.target.checked)} />
                    <label className="mr-4" htmlFor="game">Jeux vidéo</label>

                    <input type="checkbox" id="video" name="video" checked={data.video} onChange={(e) => setData('video', e.target.checked)} />
                    <label className="mr-4" htmlFor="video">Vidéos</label>

                    <input type="checkbox" id="serie" name="serie" checked={data.serie} onChange={(e) => setData('serie', e.target.checked)} />
                    <label className="mr-4" htmlFor="serie">Séries</label>

                    <input type="checkbox" id="movie" name="movie" checked={data.movie} onChange={(e) => setData('movie', e.target.checked)} />
                    <label className="mr-4" htmlFor="movie">Films</label>

                    <input type="checkbox" id="image" name="image" checked={data.image} onChange={(e) => setData('image', e.target.checked)} />
                    <label className="mr-4" htmlFor="image">Images</label>
                </div>
            </form>

            <div className="center flex-wrap gap-8 p-2">
                {
                    results.data.map((entity) => (
                        <div className="relative" key={entity.id}>
                            {renderContent(entity)}
                        </div>
                    ))
                }
            </div>

            <PaginationBar links={results.meta.links} />
        </>
    )
}
