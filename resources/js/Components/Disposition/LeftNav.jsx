import { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react";
import ItemPanel from "../UI/ItemPanel";
import { Link, usePage } from "@inertiajs/react";

const LeftNav = forwardRef(({ genres, setVisibility }, ref) => {

    const [secondaryPanel, setSecondaryPanel] = useState(false)

    const divRef = useRef(null);

    useImperativeHandle(ref, () => ({
        getDiv: () => divRef.current,
    }));

    const profilURLArray = ['/profile', '/playlists', '/playlist', '/liked', '/signet', '/history']
    const [isProfile, setIsProfile] = useState(false)
    const { url } = usePage()

    const like_playlist_id = usePage().props?.like_playlist_id || 0
    const signet_playlist_id = usePage().props?.signet_playlist_id || 0

    useEffect(() => {
        setIsProfile(profilURLArray.some(prefix => url.startsWith(prefix)))
    }, [url])

    return (
        <div ref={divRef} className="fixed h-screen z-40 w-0 bg-[#14151a] overflow-x-hidden font-bold whitespace-nowrap">
            {
                isProfile ?
                    <>  {/* Version Profil*/}
                        <h3 className="m-4 text-lg">Naviguer le profil</h3>

                        <div className="flex flex-col">
                            <ItemPanel route="/profile" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                                <p>Modifier le profil</p>
                            </ItemPanel>

                            <hr className="border-gray-500 m-2" />

                            <ItemPanel route="/playlists" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                <p>Listes de lecture</p>
                            </ItemPanel>

                            <ItemPanel route={"/playlist/" + like_playlist_id} onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                <p>Contenus aimés</p>
                            </ItemPanel>

                            <ItemPanel route={"/playlist/" + signet_playlist_id} onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                <p>Mes signets</p>
                            </ItemPanel>

                            <hr className="border-gray-500 m-2" />

                        </div>
                    </>

                    :

                    <>  {/* Version Générale*/}
                        <h3 className="m-4 text-lg">Naviguer</h3>

                        <div className="flex flex-col">
                            <ItemPanel route="/populaire">Populaire</ItemPanel>
                            <ItemPanel route="/later">À regarder plus tard</ItemPanel>

                            {/* Genres*/}
                            <div onClick={() => setSecondaryPanel(!secondaryPanel)} className="hover:bg-[#23252b] text-lg px-6 py-[12px] cursor-pointer flex items-center justify-between">
                                <p className="unselectable">Genre</p>
                                <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path></svg>
                            </div>
                            {secondaryPanel && (
                                <div className="flex flex-col">
                                    {genres.map(genre => (
                                        <Link className="hover:bg-[#23252b] bg-[#2f3138] px-4 py-[6px]" key={genre.id}>
                                            {genre.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <hr className="border-gray-500 m-2" />

                        <div className="flex flex-col">
                            <ItemPanel route="/animes">Anime</ItemPanel>
                            <ItemPanel route="/jeux">Jeux Vidéo</ItemPanel>
                            <ItemPanel route="/livres">Livre</ItemPanel>
                            <ItemPanel route="/musiques">Musique</ItemPanel>
                            <ItemPanel route="/films">Film</ItemPanel>
                            <ItemPanel route="/series">Série</ItemPanel>
                        </div>
                    </>
            }
        </div>
    );
})

export default LeftNav;
