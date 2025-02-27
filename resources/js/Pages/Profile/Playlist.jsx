import LoadingScreen from "@/Components/System/LoadingScreen";
import EntityNamecard from "@/Components/UI/Namecard/EntityNamecard";
import ImageNamecard from "@/Components/UI/Namecard/ImageNamecard";
import MusicNamecard from "@/Components/UI/Namecard/MusicNamecard";
import VideoNamecard from "@/Components/UI/Namecard/VideoNamecard";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Playlist({ entities, playlist }) {

    console.log(playlist)
    console.log(entities)

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    const genres = usePage().props.genres;


    function renderContent(data) {
        switch (playlist.id_category) {
            case 1:
            case 2:
            case 4:
            case 6:
            case 7:
                return <EntityNamecard key={data.id} genres={genres} data={data} isAnimated={false} />;
            case 3:
                return <MusicNamecard key={data.id} data={data} />;
            case 5:
                return <VideoNamecard key={data.id} data={data} />;
            case 8:
                return <ImageNamecard key={data.id} data={data} />;
            default:
                return null;
        }
    }

    return (
        <>
            <Head title={playlist.name} />

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
                                        renderContent(entity)
                                    ))
                                }
                            </div>

                        :
                            <div className="flex flex-wrap gap-8">
                                {
                                    entities.data.map((entity) => (
                                        renderContent(entity)
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
