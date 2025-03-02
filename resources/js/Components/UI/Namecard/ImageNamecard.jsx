import Image from "@/Components/Common/Image";
import { useState } from "react";
import ButtonAddList from "../ButtonAddList";
import { usePage } from "@inertiajs/react";

export default function ImageNamecard({ data, handleOpenForm, inGrid = false }) {

    const [hover, setHover] = useState(false);
    const like_active = usePage().props.like_playlist_array?.includes(data.id)

    return (
        <div
            className="relative max-w-[580px]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) => {
                if (!e.target.closest('.prevent-click')) {
                    setHover(false);
                }
            }}
        >
            <Image
                src={data.meta.img_couverture ? `/img/${data.meta.img_couverture}` : null}
                alt={data.meta.img_couverture || "Image"}
                isExpandable={true}
                className={!inGrid ? "max-h-[400px]" : ""}
                lazy={true}
            />

            {
                hover ?
                    <div className="flex flex-col justify-between absolute inset-0 p-2 bg-[#181818bb] w-full h-full unselectable pointer-events-none">
                        <div>
                            <p>{data.title}</p>
                            {data.author ? <p>Par: {data.author}</p> : null}
                        </div>

                        <div className="flex items-center gap-2">
                            <ButtonAddList className="pointer-events-auto prevent-click" type="like" id_entity={data.id}>
                                <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={like_active ? "#ff5e00" : "none"} stroke={like_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </ButtonAddList>

                            {handleOpenForm ?
                                <button className="pointer-events-auto" onClick={() => handleOpenForm(data.id, data.id_category)}>
                                    <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </button> : null
                            }
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}
