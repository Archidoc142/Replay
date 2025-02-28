import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import EntityNamecard from "./Namecard/EntityNamecard";
import MusicNamecard from "./Namecard/MusicNamecard";
import { usePage } from "@inertiajs/react";
import Icon from "./Icon";
import ListToggleButton from "./ListToggleButton";

export default function Carrousel({ title, nb_items, datas, type = "", children, className, setData, setShow }) {

    const [index, setIndex] = useState(0);
    const carrouselRef = useRef(null);
    const genres = usePage().props.genres;

    const moveLeft = () => {
        let newIndex = 0
        if (index - nb_items > 0) { newIndex = index - nb_items }
        else if (index != 0){ newIndex = 0 }
        else if (datas.length - nb_items > 0) { newIndex = datas.length - nb_items + 1 }

        setIndex(newIndex)
        animateCarrousel(newIndex)
    };

    const moveRight = () => {
        const newIndex = index < datas.length - nb_items ? index + nb_items : 0
        setIndex(newIndex)
        animateCarrousel(newIndex)
    };

    const animateCarrousel = (newIndex) => {
        if (carrouselRef.current) {
            const itemWidth = carrouselRef.current.children[0]?.offsetWidth || 0
            const offset = -newIndex * itemWidth

            gsap.to(carrouselRef.current, {
                x: offset,
                duration: 0.5,
                ease: "power2.out",
            })
        }
    }

    function handleIconClick(id) {
        setShow(false)
        setData('id_img', id)
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
        <div className={"mt-4 overflow-hidden " + className}>

            <ListToggleButton setShowForm={setShowForm} showForm={showForm} id_entity={id_entity} id_category={id_category}/>

            <div className=" ml-6 mt-2 flex items-center gap-6">
                {children}
                <h3 className="unselectable text-3xl text-[#ff5e00]">{title}</h3>
            </div>

            <div className="flex carrousel-container">
                <button onClick={moveLeft}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="flex justify-between w-full py-6 overflow-hidden">
                    <div
                        ref={carrouselRef}
                        className="flex gap-4"
                    >
                        {datas.map((data) =>
                            type === "icon" ? (
                                <Icon key={data.id} path={data.file_name} onClick={() => handleIconClick(data.id)} className="hover:grayscale-[0.6]" />
                            ) : type !== "music" ? (
                                <EntityNamecard key={data.id} data={data} genres={genres} isAnimated={true} handleOpenForm={handleOpenForm} />
                            ) : (
                                <MusicNamecard key={data.id} data={data} handleOpenForm={handleOpenForm} />
                            )

                        )}
                    </div>
                </div>

                <button onClick={moveRight}>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
