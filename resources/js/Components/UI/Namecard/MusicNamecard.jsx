import Image from "@/Components/Common/Image";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import ButtonAddList from "../ButtonAddList";
import PopUp from "../PopUp";

export default function MusicNamecard({ data, handleOpenForm }) {

    const [hover, setHover] = useState(false);
    const [showMusic, setShowMusic] = useState(false)

    const like_active = usePage().props.like_playlist_array?.includes(data.id)
    const signet_active = usePage().props.signet_playlist_array?.includes(data.id)

    return (
        <div className="flex-col">
            <div
                className="flex flex-col gap-2 text-lg relative group max-w-[250px] unselectable group"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {/* Vidéo*/}
                {data.meta.video ?
                    showMusic ?
                        <PopUp setShow={setShowMusic}>
                            <h3 className="mb-4 text-3xl text-center max-w-[500px] mx-auto">{data.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: data.meta.video }}
                                className="flex justify-center rounded-lg overflow-hidden"
                            />
                        </PopUp>
                        : null
                    : null}

                <Image
                    src={"/img/" + data.meta.img_couverture}
                    alt="General Entity Namecard"
                    className="max-w-[250px] group-hover:grayscale-[0.2]"
                />

                {hover ?
                    <div className="hidden group-hover:flex absolute w-full h-full cursor-pointer min-w-[250px]" onClick={(e) => {
                        // Vérifier si le clic vient des boutons pour ne pas ouvrir le popup
                        if (!e.target.closest('.prevent-click')) {
                            setShowMusic(true);
                        }
                    }}>
                        <div className="flex pt-2 pl-3 pb-3 flex-col justify-between w-[250px] bg-[#181818bb]">
                            <div>
                                <p>{data.title}</p>
                                {data.author ? <p>Par: {data.author}</p> : null}
                            </div>

                            {/* Options*/}
                            <div className="flex gap-2 items-center">
                                <ButtonAddList type="like" id_entity={data.id} className="prevent-click">
                                    <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={like_active ? "#ff5e00" : "none"} stroke={like_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </ButtonAddList>

                                <ButtonAddList type="signet" id_entity={data.id} className="prevent-click">
                                    <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={signet_active ? "#ff5e00" : "none"} stroke={signet_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </ButtonAddList>

                                {handleOpenForm ?
                                    <button className="prevent-click" onClick={() => handleOpenForm(data.id, data.id_category)}>
                                        <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button> : null
                                }
                            </div>
                        </div>

                        {/* Play svg*/}
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        </div>
                    </div>
                : null}

            </div>
            {!showMusic ? <p className="text-center mt-2">{data.title}</p> : null}
        </div>
    );
}
