import Image from "@/Components/Common/Image"
import LoadingScreen from "@/Components/System/LoadingScreen"
import Carrousel from "@/Components/UI/Carrousel"
import CarrouselImage from "@/Components/UI/CarrouselImage"
import VideoNamecard from "@/Components/UI/Namecard/VideoNamecard"
import { Head } from "@inertiajs/react"
import { useEffect, useState } from "react"

export default function Accueil({ leftNav, last_items, musics, images_d, images_f, video }) {

    const [itemsToShow, setItemsToShow] = useState(4)

    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)

    useEffect(() => {
        setItemsToShow(leftNav ? 3 : 4)
    }, [leftNav])

    return (
        <>
            {isLoading && <LoadingScreen setIsLoading={setIsLoading} setLoadingProgress={setLoadingProgress} progress={loadingProgress} />}

            <Head title="Accueil" />

            <Image
                src="/img/citlali.webp"
                alt="Home Page - Main IMG"
                className="w-full h-[610px] object-cover object-center"
            />

            <Carrousel
                title="Les Dernières Sorties"
                nb_items={itemsToShow}
                datas={last_items.data}
            >
                <svg width="40" height="40" stroke="white" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </Carrousel>

            {images_d.data.length > 0 ? <CarrouselImage images={images_d.data} title="Wallpaper à l'Affiche" /> : null}

            <Carrousel
                title="Musiques du Jour"
                nb_items={4}
                datas={musics.data}
                type="music"
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="15.5" r="2.5" /><path d="M8 17V5l12-2v12" /></svg>
            </Carrousel>

            {images_f.data.length > 0 ? <CarrouselImage images={images_f.data} title="Fan Art à l'Affiche" image_name={true} /> : null}

            { video.data.length > 0 ?
            <div className="my-6">
                <div className="flex justify-center gap-6 mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                    <h3 className="unselectable text-3xl text-[#ff5e00]">Vidéos à l'Affiche</h3>
                </div>

                <div className="flex flex-wrap gap-8 justify-center">
                    {
                        video.data.map((v) => (
                            <VideoNamecard
                                key={v.id}
                                data={v}
                            />
                        ))
                    }
                </div>
            </div> : null}
        </>
    )
}
