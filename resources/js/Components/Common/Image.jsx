import { useState } from "react"
import ShadowScreen from "../UI/ShadowScreen"

export default function Image({ src, alt, isExpandable = false, classname }) {

    const [bigImg, setBigImg] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleSize() {
        setIsExpanded((prev) => !prev);
    }

    return (
        <>
            <img
                src={src ? src : "/img/placeholder_img.png"}
                alt={alt ? alt : "Image"}
                className={"cursor-pointer " + classname}
                onClick={() => setBigImg(true)}
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
                                    <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center">
                                        <img className={`cursor-pointer fixed z-50 ${isExpanded ? "w-auto" : "max-w-[55%]"}`} src={src} alt="Image Expanded" onClick={toggleSize} />
                                    </div>
                                </> : null
                        }
                    </>
                : null
            }
        </>
    )
}
