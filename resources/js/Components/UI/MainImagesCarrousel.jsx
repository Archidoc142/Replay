import { useEffect, useRef, useState } from "react";
import Image from "../Common/Image";
import gsap from "gsap";

export default function MainImagesCarrousel({ images }) {
    const [imagesIdShowed, setImagesIdShowed] = useState(0);
    const refs = useRef([]);
    const imageRefs = useRef([]);

    useEffect(() => {
        refs.current.forEach((el, index) => {
            if (index === imagesIdShowed) {
                gsap.to(el, {
                    width: "100%",
                    duration: 8,
                    ease: "none",
                    onComplete: moveInIndex,
                });
            } else {
                gsap.set(el, { width: "0%" });
            }
        });
    }, [imagesIdShowed]);

    function moveInIndex() {
        setImagesIdShowed((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
    }

    function moveToIndex(index) {
        if (imagesIdShowed !== index) {
            gsap.killTweensOf(refs.current[imagesIdShowed]);
        }
        setImagesIdShowed(index);
    }

    return (
        <div className="relative w-full h-[610px]">
            {/* Conteneur des images, positionnement absolu */}
            {images.map((image, i) => (
                <Image
                    key={i}
                    ref={(el) => (imageRefs.current[i] = el)}
                    src={`/img/${image.meta.img_couverture}`}
                    alt={`Home Page - image #${i}`}
                    className={"absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 " + (imagesIdShowed === i ? "opacity-100 z-10" : "opacity-0 z-0")}
                />
            ))}

            {/* Section des indicateurs de navigation */}
            <div className="absolute bottom-4 px-8 flex items-center gap-4 z-20">
                {images.map((img, i) => (
                    <div key={i} className={"bg-white w-12 h-2 rounded-full overflow-hidden cursor-pointer " + (imagesIdShowed === i ? "scale-y-125" : "scale-100")} onClick={() => moveToIndex(i)}>
                        <div ref={(el) => (refs.current[i] = el)} className="bg-[#ff5e00] h-2 w-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}
