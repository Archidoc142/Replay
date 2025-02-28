import LoadingScreen from "@/Components/System/LoadingScreen";
import ListToggleButton from "@/Components/UI/ListToggleButton";
import EntityNamecard from "@/Components/UI/Namecard/EntityNamecard";
import ImageNamecard from "@/Components/UI/Namecard/ImageNamecard";
import MusicNamecard from "@/Components/UI/Namecard/MusicNamecard";
import VideoNamecard from "@/Components/UI/Namecard/VideoNamecard";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Playlist({ entities, playlist }) {

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    const genres = usePage().props.genres;

    const { data, setData, post } = useForm({
        id_entity: null,
        id_playlist: playlist.id,
    })

    function submit(e) {
        e.preventDefault();

        post('/addToList', {
            forceFormData: true,
            preserveScroll: true,
        })
    }

    function renderContent(data, inGrid) {
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
                return <ImageNamecard data={data} handleOpenForm={handleOpenForm} inGrid={inGrid} />;
            default:
                return null;
        }
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

    return (
        <>
            <Head title={playlist.name} />

            <ListToggleButton setShowForm={setShowForm} showForm={showForm} id_entity={id_entity} id_category={id_category}/>

            {isLoading && <LoadingScreen setIsLoading={setIsLoading} setLoadingProgress={setLoadingProgress} progress={loadingProgress} />}

            <div className='p-8'>
                <h1 className="text-4xl font-medium">{playlist.name}</h1>

                <hr className="border-gray-500 mt-4 mb-8" />

                {
                    entities.data.length > 0 ?
                        playlist.id_category === 8 ?
                            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                                {
                                    entities.data.map((entity) => (
                                        <div className="relative" key={entity.id}>
                                            {renderContent(entity, true)}

                                            <form onSubmit={submit}>
                                                <button type="submit" className="bg-[#585353c7] p-1 rounded-full absolute top-2 right-2 group" onClick={() => setData('id_entity', entity.id)}>
                                                    <svg className="group-hover:stroke-[#ff5e00]" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                </button>
                                            </form>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <div className="flex flex-wrap gap-8">
                                {
                                    entities.data.map((entity) => (
                                        <div className="relative" key={entity.id}>
                                            {renderContent(entity, false)}

                                            <form onSubmit={submit}>
                                                <button type="submit" className="bg-[#585353c7] p-1 rounded-full absolute top-2 right-2 group" onClick={() => setData('id_entity', entity.id)}>
                                                    <svg className="group-hover:stroke-[#ff5e00]" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                </button>
                                            </form>
                                        </div>
                                    ))
                                }
                            </div>
                        :
                        <div className="flex justify-center items-center absolute inset-0 text-4xl text-gray-600 font-bold">
                            <p>Aucun élément</p>
                        </div>
                }
            </div>
        </>
    )
}
