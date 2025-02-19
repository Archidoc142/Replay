import { useState } from "react"
import ShadowScreen from "../UI/ShadowScreen"

export default function Image({ src, alt, isExpandable = false, className }) {

    const [bigImg, setBigImg] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    function handleClick() {
        setBigImg(true)
        setIsExpanded(false)
    }

    function toggleSize() {
        setIsExpanded((prev) => !prev);
    }

    return (
        <>
            <img
                src={src ? src : "/img/placeholder_img.png"}
                alt={alt ? alt : "Image"}
                className={"cursor-pointer " + className}
                onClick={handleClick}
                loading="lazy"
            />

            {
                isExpandable ?
                    <>
                        <div onClick={() => setBigImg(false)}>
                            {
                                bigImg ?
                                    <>
                                        <ShadowScreen />
                                    </> : null
                            }
                        </div>

                        {
                            bigImg ?
                                <>
                                    <div className="absolute inset-0 center">
                                        <img className={`cursor-pointer fixed z-50 max-h-[80%] ${isExpanded ? "w-auto max-w-[80%]" : "max-w-[55%]"}`} src={src} alt="Image Expanded" onClick={toggleSize} />
                                    </div>
                                </> : null
                        }
                    </>
                : null
            }
        </>
    )
}
