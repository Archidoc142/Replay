import Image from "@/Components/Common/Image";
import ButtonAddList from "@/Components/UI/ButtonAddList";
import CharacterList from "@/Components/UI/CharacterList";
import PlaylistObject from "@/Components/UI/PlaylistObject";
import PopUp from "@/Components/UI/PopUp";
import SimilarContentList from "@/Components/UI/SimilarContentList";
import Tag from "@/Components/UI/Tag";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function EntityFormatTwo({ data, cat, characters, charactersFromEntity, SMF, plFromUser, simContent }) {

    const genres = usePage().props.genres

    const like_active = usePage().props.like_playlist_array?.includes(data.id)
    const signet_active = usePage().props.signet_playlist_array?.includes(data.id)

    const like_id = usePage().props.like_playlist_id
    const signet_id = usePage().props.signet_playlist_id

    const [showTrailer, setShowTrailer] = useState(false)

    return (
        <>
            {/* Vidéo*/}
            {data.meta.video ?
                showTrailer ?
                    <PopUp setShow={setShowTrailer}>
                        <h3 className="mb-4 text-3xl text-center max-w-[500px] mx-auto">Trailer de {data.title}</h3>
                        <div
                            dangerouslySetInnerHTML={{ __html: data.meta.video }}
                            className="flex justify-center rounded-lg overflow-hidden"
                        />
                    </PopUp>
                    : null
                : null}

            <div className="relative w-full min-h-screen">
                {/* Image BG*/}
                <Image
                    src={"/img/" + data.meta.img_vignette}
                    alt={data.meta.img_vignette}
                    className="w-screen absolute max-h-screen"
                />

                {/* Style BG*/}
                <div className="absolute top-[400px] bg-[#191a1c] opacity-[0.99] min-h-[calc(100vh+150px)] w-full"></div>
                <div className="absolute bg-[#191a1c] opacity-[0.8] h-screen w-full"></div>

                <div className="absolute py-8 px-10 w-full">
                    <div className="flex gap-8 mb-12">
                        <Image
                            src={"/img/" + data.meta.img_couverture}
                            alt={data.title}
                            isExpandable={true}
                            className="h-[422px] w-auto rounded-md"
                        />

                        <div className="flex flex-col justify-between">
                            {/* Informations*/}
                            <div>
                                <h1 className="text-7xl mb-2">{data.title}</h1>
                                <div className="flex flex-col gap-6">
                                    <div>
                                        {data.author ? <p className="text-2xl mb-2">Par: {data.author}</p> : null}

                                        <div className="flex items-center gap-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="yellow" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                            <p>{data.meta.note / 20}</p>
                                        </div>
                                    </div>

                                    <p>{data.meta.description}</p>
                                </div>
                            </div>

                            <div>
                                {/* Genres*/}
                                {data.tags.length > 0 ? <div className="flex gap-8 my-4 items-center">
                                    <p className="font-bold text-2xl">Genres :</p>
                                    {data.tags.map(tag => (
                                        <div key={tag} className="flex gap-2 items-center">
                                            <Tag
                                                text={genres[tag - 1].name}
                                                className="bg-transparent border-none text-lg"
                                            />
                                        </div>
                                    ))}
                                </div> : null}

                                {/* Options*/}
                                <div className="flex gap-8 items-center unselectable">
                                    <ButtonAddList
                                        type="like"
                                        id_entity={data.id}
                                        className="flex items-center gap-4 bg-[#4f4f4f] hover:bg-[#313235] py-2 px-4 rounded-md"
                                    >
                                        <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={like_active ? "#ff5e00" : "none"} stroke={like_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        <p>{like_active ? `Retirer le ${data.category} des favoris` : "Ajouter le livre aux favoris"}</p>
                                    </ButtonAddList>

                                    <ButtonAddList
                                        type="signet"
                                        id_entity={data.id}
                                        className="flex items-center gap-4 bg-[#4f4f4f] hover:bg-[#313235] py-2 px-4 rounded-md"
                                    >
                                        <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={signet_active ? "#ff5e00" : "none"} stroke={signet_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                        <p>{signet_active ? `Retirer le signet` : "Ajouter un signet"}</p>
                                    </ButtonAddList>

                                    {data.meta.lien ? <button className="group bg-[#4f4f4f] hover:bg-[#313235] py-2 px-6 rounded-md">
                                        <a href={data.meta.lien} target="_blank" className="flex items-center gap-4">
                                            {data.category === "Livre" ? <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.88 96.44"><path d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z" /></svg>
                                                : <svg className="group-hover:stroke-gray-500" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>}
                                            <p>Commencer à {data.category === "Livre" ? "lire" : "visionnez"}</p>
                                        </a>
                                    </button> : null}

                                    {data.meta.video ?
                                        <button onClick={() => setShowTrailer(true)} className="group bg-[#4f4f4f] hover:bg-[#313235] py-2 px-6 rounded-md flex items-center gap-4">
                                            <svg className="group-hover:stroke-gray-500" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                                            <p>Trailer</p>
                                        </button>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col w-[70%]">
                            <CharacterList
                                characters={characters}
                                id_entity={data.id}
                                SMF={SMF}
                                charactersFromEntity={charactersFromEntity}
                            />

                            <SimilarContentList simContent={simContent} cat_name={cat.name} />
                        </div>

                        <div className="flex flex-col gap-4 items-center w-[30%]">
                            {plFromUser.length > 2 ? <h3 className="text-2xl">Vos Playlists</h3> : null}
                            {
                                plFromUser.filter(pl => pl.id !== like_id && pl.id !== signet_id).map((pl) => (
                                    <PlaylistObject
                                        key={pl.id}
                                        id={pl.id}
                                        name={pl.name}
                                        img_path={pl.file_path}
                                        nb_items={pl.nb_items}
                                        category={cat}
                                        id_entity={data.id}
                                        SMF={SMF}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
