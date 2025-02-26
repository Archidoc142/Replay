import { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react";
import ItemPanel from "../UI/ItemPanel";
import { Link, usePage } from "@inertiajs/react";

const LeftNav = forwardRef(({ genres }, ref) => {

    const [secondaryPanel, setSecondaryPanel] = useState(false)

    const divRef = useRef(null);

    useImperativeHandle(ref, () => ({
        getDiv: () => divRef.current,
    }));

    const profilURLArray = ['/profile', '/playlists', '/liked', '/signet', '/history']
    const [isProfile, setIsProfile] = useState(false)
    const { url } = usePage()

    useEffect(() => {
        setIsProfile(profilURLArray.includes(url))
    }, [url])

    return (
        <div ref={divRef} className="fixed h-screen z-40 w-0 bg-[#14151a] overflow-x-hidden font-bold whitespace-nowrap">
            {
                isProfile ?
                    <>  {/* Version Profil*/}
                        <h3 className="m-4 text-lg">Naviguer le profil</h3>

                        <div className="flex flex-col">
                            <ItemPanel route="/profile">Modifier le profil</ItemPanel>

                            <hr className="border-gray-500 m-2" />

                            <ItemPanel route="/playlists">Listes de lecture</ItemPanel>
                            <ItemPanel route="/liked">Contenus aimés</ItemPanel>
                            <ItemPanel route="/signet">Mes signets</ItemPanel>
                            <ItemPanel route="/history">Historique</ItemPanel>

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
