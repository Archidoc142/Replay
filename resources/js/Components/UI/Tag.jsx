import { useEffect, useState } from "react";

export default function Tag({ id, text, isClickable = false, setData, data, className, resetTrigger = null, isActive = false }) {

    const [active, setActive] = useState(isActive)

    function handleClick() {
        if (isClickable) {
            setActive(!active)
        }

        if (isClickable && !active) {
            {/* Tag Activé*/}
            setData("tags_form", [...new Set([...(data.tags_form || []), id])]);
        } else if (isClickable && active) {
            {/* Tag Désactivé*/}
            setData("tags_form", data.tags_form.filter(t => t !== id));
        }
    }

    useEffect(() => {
        if (resetTrigger) {
            setActive(false)
        }
    }, [resetTrigger])

    return (
        <p
            className={`
                unselectable py-[2px] px-[6px] rounded-xl border-2
                ${isClickable ? ' hover:bg-gray-500 cursor-pointer ' : ''}
                ${ active ? ' border-blue-500 bg-gray-500' : ' border-gray-700 bg-gray-600'} ` + className }
            onClick={handleClick}
        >
            {text}
        </p>
    );
}
