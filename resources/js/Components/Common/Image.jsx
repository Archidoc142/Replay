import { useState } from "react"
import ShadowScreen from "../UI/ShadowScreen"

export default function Image({ src, alt, isExpandable = false, className }) {

    const [bigImg, setBigImg] = useState(false)

    return (
        <>
            <img
                src={src || "/img/placeholder_img.png"}
                alt={alt ? alt : "Image"}
                className={`${isExpandable ? "cursor-pointer" : ""} ` + className}
                onClick={() => setBigImg(true)}
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
                                    <svg onClick={() => setBigImg(false)} className="fixed z-40 right-6 top-[10%] hover:stroke-gray-700 cursor-pointer" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    <div className="fixed inset-0 z-30 flex items-center justify-center">
                                        <img
                                            className="rounded-lg cursor-pointer max-h-[80%] max-w-[55%]"
                                            src={src}
                                            alt="Image Expanded"
                                            onClick={() => setBigImg(false)}
                                        />
                                    </div>
                                </> : null
                        }
                    </>
                    : null
            }
        </>
    )
}
