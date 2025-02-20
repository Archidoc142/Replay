import Image from "@/Components/Common/Image";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function MusicNamecard({ data }) {

    const [hover, setHover] = useState(false)

    return (
        <Link
            href={"/entity/" + data.category + "/" + data.id}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image
                src={"/img/" + data.meta.img_couverture}
                alt="Music Namecard"
            />
        </Link>
    );
}
