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

            <ListToggleButton setShowForm={setShowForm} showForm={showForm} id_entity={id_entity} id_category={id_category} />

            <form onSubmit={submit}>
                <SearchBar
                    onChange={(value) => setData('search', value)}
                    value={data.search}
                    processing={processing}
                />

                <div className="center flex-wrap gap-4 mb-2 mx-16 unselectable">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.book} onChange={(e) => setData('book', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.book ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Livres
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.anime} onChange={(e) => setData('anime', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.anime ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Animes
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.music} onChange={(e) => setData('music', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.music ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Musiques
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.game} onChange={(e) => setData('game', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.game ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Jeux vidéo
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.video} onChange={(e) => setData('video', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.video ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Vidéos
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.serie} onChange={(e) => setData('serie', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.serie ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Séries
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.movie} onChange={(e) => setData('movie', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.movie ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Films
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input className="hidden peer" checked={data.image} onChange={(e) => setData('image', e.target.checked)} type="checkbox" />
                        <div className="border-2 border-[#ff5e00] rounded-md p-[3px] bg-black peer-checked:bg-[#8c1c1c]">
                            <svg className={data.image ? "opacity-100 pr-[1.5px]" : "opacity-0"} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="square" strokeLinejoin="arcs"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        Images
                    </label>
                </div>
            </form>

            <div className="center flex-wrap gap-8 p-2">
                {
                    results.data.length > 0 ?
                        results.data.map((entity) => (
                            <div className="relative" key={entity.id}>
                                {renderContent(entity)}
                            </div>
                        ))
                        :
                        <div className="flex justify-center items-center h-[300px] text-4xl text-gray-600 font-bold">
                            <p>Aucun élément</p>
                        </div>
                }
            </div>

            <PaginationBar links={results.meta.links} />
        </>
    )
}
