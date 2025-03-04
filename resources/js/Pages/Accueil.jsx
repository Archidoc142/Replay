import Image from "@/Components/Common/Image"
import LoadingScreen from "@/Components/System/LoadingScreen"
import Carrousel from "@/Components/UI/Carrousel"
import CarrouselImage from "@/Components/UI/CarrouselImage"
import { Head } from "@inertiajs/react"
import { useEffect, useState } from "react"

export default function Accueil({ leftNav, last_items, musics, images }) {

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

            { images.length > 0 ? <CarrouselImage images={images.data} /> : null}

            <Carrousel
                title="Musiques du Jour"
                nb_items={4}
                datas={musics.data}
                type="music"
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>
            </Carrousel>

            <div className="center py-40 text-9xl bg-gray-800 rounded-t-3xl">
                <h1>Coming Soon</h1>
            </div>
        </>
    )
}
