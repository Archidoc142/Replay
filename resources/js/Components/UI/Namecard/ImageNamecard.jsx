import Image from "@/Components/Common/Image";
import { useState } from "react";

export default function ImageNamecard({ data }) {

    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setHover(false)}
        >
            <Image
                src={data.meta.img_couverture ? "/img/" + data.meta.img_couverture : null}
                alt={data.meta.img_couverture}
                isExpandable={true}
            />

            {
                hover ?
                    <div className="absolute inset-0 p-2 bg-[#181818bb] w-full h-full unselectable pointer-events-none">
                        <p>{data.title}</p>
                        {data.author ? <p>Par: {data.author}</p> : null}
                    </div>
                    : null
            }
        </div>
    )
}
