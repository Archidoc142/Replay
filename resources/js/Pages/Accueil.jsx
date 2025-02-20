import Image from "@/Components/Common/Image";
import Carrousel from "@/Components/UI/Carrousel";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Accueil({ leftNav, last_items }) {

    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        setItemsToShow(leftNav ? 3 : 4);
    }, [leftNav])

    return (
        <>
            <Head title="Accueil" />

            <Image
                src="/img/citlali.webp"
                alt="Home Page - Main IMG"
                className="bg-blue-600 w-full h-[610px] object-cover object-center"
            />

            <Carrousel
                title="Les Dernières Sorties"
                nb_items={itemsToShow}
                datas={last_items.data}
            >
                <svg width="40" height="40" stroke="white" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </Carrousel>

        </>
    )
}
