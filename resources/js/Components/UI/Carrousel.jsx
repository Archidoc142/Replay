import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import EntityNamecard from "./Namecard/EntityNamecard";
import MusicNamecard from "./Namecard/MusicNamecard";
import { usePage } from "@inertiajs/react";
import Icon from "./Icon";
import ListToggleButton from "./ListToggleButton";
import PopUp from "./PopUp";

export default function Carrousel({ title, nb_items, datas, type = "", children, className, setData, setShow, noGradient = false, border = false }) {

    const [musicId, setMusicId] = useState(null)
    const [selectedMusic, setSelectedMusic] = useState(null)
    const [showMusic, setShowMusic] = useState(false)

    useEffect(() => {
        setSelectedMusic(datas.filter(data => data.id === musicId)[0])
        setShowMusic(true)
    }, [musicId])

    useEffect(() => {
        if (!showMusic) {
            setMusicId(null)
        }
    }, [showMusic])

    const [index, setIndex] = useState(0);
    const carrouselRef = useRef(null);
    const genres = usePage().props.genres;

    const moveLeft = () => {
        let newIndex = 0
        if (index - nb_items > 0) { newIndex = index - nb_items }
        else if (index != 0) { newIndex = 0 }
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

    if (datas.length === 0) return null;

    return (
        <div className={"mt-4 overflow-hidden " + (border ? "border-4 border-[#5a5a5c] rounded-xl overflow-hidden pt-2 " : "") + className}>

            <ListToggleButton setShowForm={setShowForm} showForm={showForm} id_entity={id_entity} id_category={id_category} />

            {/* Musique*/}
            {type === "music" ?
                selectedMusic?.meta.video ?
                    showMusic ?
                        <PopUp setShow={setShowMusic}>
                            <h3 className="mb-4 text-3xl text-center max-w-[500px] mx-auto">{selectedMusic?.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: selectedMusic?.meta.video }}
                                className="flex justify-center rounded-lg overflow-hidden"
                            />
                        </PopUp>
                        : null
                    : null
                : null}

            <div className={"ml-6 mt-2 flex items-center " + (!border ? "gap-6" : "")}>
                {children}
                <h3 className="unselectable text-3xl text-[#ff5e00]">{title}</h3>
            </div>

            <div className={"flex " + (!noGradient ? "carrousel-container " : "")}>
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
                                <MusicNamecard key={data.id} data={data} handleOpenForm={handleOpenForm} inCarrousel={true} setMusicId={setMusicId} />
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
