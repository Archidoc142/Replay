import Image from "@/Components/Common/Image";
import { useState } from "react";

export default function ImageNamecard({ data, handleOpenForm, inGrid = false }) {

    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative max-w-[580px]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setHover(false)}
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

                        {handleOpenForm ?
                            <button className="pointer-events-auto" onClick={() => handleOpenForm(data.id, data.id_category)}>
                                <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </button> : null
                        }
                    </div>
                    : null
            }
        </div>
    )
}
