import Image from "@/Components/Common/Image";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Character({ character }) {

    const char = character.data
    const meta = JSON.parse(char.meta);
    const images = JSON.parse(char.images);

    const lightenColor = (hex, percent) => {
        let num = parseInt(hex.replace("#", ""), 16);
        let r = (num >> 16) + Math.round((255 - (num >> 16)) * percent);
        let g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * percent);
        let b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * percent);

        return `#${(1 << 24 | (r << 16) | (g << 8) | b).toString(16).slice(1).padStart(6, '0')}`;
    };

    const hoverColor = lightenColor(char.theme_color, 0.2);
    const menuSize = 100 / (meta.length + 1) + "%"

    const [selectedCharId, setSelectedCharId] = useState(0)

    return (
        <div className="flex justify-center py-12">
            <Head title={char.name} />

            <div className={`w-2/3 bg-[#1B1D24] p-8 border-y-[5px] rounded-lg`}
                style={{
                    borderColor: char.theme_color,
                }}>

                <h1 className="text-3xl">{char.name}</h1>

                <ul className="flex justify-between gap-8 text-center text-lg winston overflow-hidden mt-4 mb-8 unselectable">
                    {char?.description ?
                        <li
                            className={`cursor-pointer py-2 rounded-md flex items-center justify-center`}
                            style={{
                                backgroundColor: char.theme_color,
                                width: menuSize,
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = char.theme_color}
                        >
                            <a href="#section-0">Description</a>
                        </li> : null}
                    {
                        meta.map((bloc, i) => (
                            <li
                                key={i}
                                className={`cursor-pointer py-2 rounded-md flex items-center justify-center`}
                                style={{
                                    backgroundColor: char.theme_color,
                                    width: menuSize,
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = char.theme_color}
                            >
                                <a href={"#section-" + (i + 1)}>{bloc.title}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex gap-8">
                    {/* Blocs des informations*/}
                    <div className="w-3/5 flex flex-col gap-8">
                        {char?.description ?
                            <div id="section-0" className="flex flex-col gap-2 text-justify">
                                <h3 className="text-2xl">Description</h3>
                                <p>{char.description}</p>
                            </div> : null}

                        {
                            meta.map((bloc, i) => (
                                <div key={i} id={"section-" + (i + 1)} className="flex flex-col gap-2 text-justify">
                                    <h3 className="text-2xl">{bloc.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: bloc.html }} />
                                </div>
                            ))
                        }
                    </div>

                    {/* Blocs des images*/}
                    <div className="w-2/5">
                        <h2 className="text-3xl text-center rounded-t-lg py-2"
                            style={{
                                backgroundColor: char.theme_color,
                            }}
                        >{char.name}</h2>

                        <div className="flex flex-col text-center rounded-b-lg overflow-hidden border border-[#4c5067]">
                            <div className="flex flex-wrap justify-between">
                                <p
                                    className={"flex items-center justify-center text-xl winston cursor-pointer py-2 px-2 flex-grow bg-[#353847] " + (selectedCharId === 0 ? "border-b-2" : "")}
                                    style={{ flexBasis: "calc(50% - 0.5rem)", maxWidth: "100%", borderColor: char.theme_color }}
                                    onClick={() => setSelectedCharId(0)}
                                >Vignette</p>
                                {images.map((image, i) => (
                                    <p
                                        key={i}
                                        className={"flex items-center justify-center text-xl winston cursor-pointer py-2 px-2 flex-grow bg-[#353847] " + (selectedCharId === i + 1 ? "border-b-2" : "")}
                                        style={{ flexBasis: "calc(50% - 0.5rem)", maxWidth: "100%", borderColor: char.theme_color }}
                                        onClick={() => setSelectedCharId(i + 1)}
                                    >
                                        {image.name}
                                    </p>
                                ))}
                            </div>

                            <Image src={"/img/" + char.vignette} alt={char.vignette} isExpandable={true} className={"bg-[#111216] " + (selectedCharId !== 0 ? "hidden" : "")} />
                            {images.map((image, i) => (
                                <Image
                                    key={i}
                                    src={"/img/" + image.img}
                                    alt={image.img}
                                    className={"bg-[#111216] " + (selectedCharId !== i + 1 ? "hidden" : "")}
                                    isExpandable={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
