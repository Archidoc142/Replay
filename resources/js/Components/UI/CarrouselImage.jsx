import { useState } from "react"
import Image from "../Common/Image"

export default function CarrouselImage({ images }) {

    const [index, setIndex] = useState(0)
    const [imageDimensions, setImageDimensions] = useState(
        new Array(images.length).fill({ width: null, height: null })
    );

    const handleImageLoad = (e, i) => {
        const { naturalWidth, naturalHeight } = e.target;
        setImageDimensions(prevDims => {
            const newDims = [...prevDims];
            newDims[i] = { width: naturalWidth, height: naturalHeight };
            return newDims;
        });
    };

    function goRight() {
        setIndex(index !== images.length - 1 ? index + 1 : 0)
    }

    function goLeft() {
        setIndex(index > 0 ? index - 1 : images.length - 1)
    }

    function moveToIndex(newIndex) {
        setIndex(newIndex)
    }

    return (
        <div className="bg-[#5050502d] pt-8 pb-6">
            <div className="center gap-4 mb-4">
                <svg className="fill-white" width="60" height="60" viewBox="0 0 122.879 96.568"><g><path d="M5.535,15.447h98.221c1.527,0,2.891,0.62,3.883,1.611c0.99,0.991,1.611,2.396,1.611,3.882v70.134 c0,1.528-0.621,2.891-1.611,3.883c-0.082,0.082-0.166,0.165-0.289,0.247c-0.951,0.868-2.23,1.363-3.635,1.363H5.494 c-1.528,0-2.892-0.619-3.883-1.61S0,92.562,0,91.075V20.941c0-1.528,0.62-2.891,1.611-3.882s2.396-1.611,3.883-1.611H5.535 L5.535,15.447z M28.218,34.489c4.354,0,7.882,3.528,7.882,7.882s-3.528,7.883-7.882,7.883c-4.354,0-7.882-3.529-7.882-7.883 C20.335,38.018,23.864,34.489,28.218,34.489L28.218,34.489z M61.389,68.316l15.766-27.258l16.748,42.363l-78.165-0.001v-5.254 l6.57-0.327l6.567-16.093l3.282,11.496h9.855l8.537-22.004L61.389,68.316L61.389,68.316z M21.891,6.525 c-1.817,0-3.263-1.486-3.263-3.263C18.628,1.445,20.115,0,21.891,0h97.726c1.816,0,3.262,1.487,3.262,3.263v68.895 c0,1.818-1.486,3.264-3.262,3.264c-1.818,0-3.264-1.487-3.264-3.264V6.567H21.891V6.525L21.891,6.525z M102.723,21.974H6.567 v68.027h96.155V21.974L102.723,21.974z" /></g></svg>
                <h3 className="text-[#ff5e00] text-4xl">Wallpaper à l'affiche</h3>
            </div>

            <div className="center gap-8">
                <button onClick={goLeft}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>

                <div className="flex min-w-[60%] max-w-[60%] relative"> {/* À changer pour le type d'image*/}
                    {
                        images.map((img, i) => (
                            <Image
                                key={img.id}
                                src={"/img/" + img.meta.img_couverture}
                                alt={img.meta.img_couverture}
                                className={"rounded-xl " + (index !== i ? "hidden" : "")}
                                onLoad={(e) => handleImageLoad(e, i)}
                            />
                        ))
                    }

                    <div className="absolute bottom-2 left-2 bg-[#3838389d] p-2 rounded-lg unselectable">
                        <p>Par : {images[index].author}</p>
                        <p>Dimensions : {imageDimensions[index].width} x {imageDimensions[index].height}</p>
                    </div>
                </div>

                <button onClick={goRight}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
            </div>

            <div className='center gap-4 mt-6'>
                {images.map((item, i) => (
                    <span
                        key={i}
                        onClick={() => moveToIndex(i)}
                        className={"bg-[#706e6e] w-2 h-2 rounded-full cursor-pointer" + (index === i ? " !bg-white" : "")}
                    ></span>
                ))}
            </div>
        </div>
    )
}
