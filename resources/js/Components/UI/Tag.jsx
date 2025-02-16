import { useState } from "react";

export default function Tag({ id, text, isClickable = false, setData, data }) {

    const [active, setActive] = useState(false)

    function handleClick() {
        if (isClickable) {
            setActive(!active)
        }

        if (isClickable && !active) {
            {/* Tag Activé*/}
            setData("tags_form", [...new Set([...(data.tags_form || []), id])]);
        } else {
            {/* Tag Désactivé*/}
            setData("tags_form", data.tags_form.filter(t => t !== id));
        }
    }

    return (
        <p
            className={`
                unselectable cursor-pointer py-[2px] px-[6px] rounded-xl border-2 border-gray-700
                ${isClickable ? ' hover:bg-gray-500 ' : ''}
                ${ active ? 'border-blue-500 bg-gray-500' : ' bg-gray-600'}
            `}
            onClick={handleClick}
        >
            {text}
        </p>
    );
}
