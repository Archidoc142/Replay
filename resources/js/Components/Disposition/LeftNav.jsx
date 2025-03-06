import { useRef, useImperativeHandle, forwardRef, useState, useEffect } from "react";
import ItemPanel from "../UI/ItemPanel";
import { Link, usePage } from "@inertiajs/react";

const LeftNav = forwardRef(({ genres, setVisibility, isProfile }, ref) => {

    const [secondaryPanel, setSecondaryPanel] = useState(false)

    const divRef = useRef(null);

    useImperativeHandle(ref, () => ({
        getDiv: () => divRef.current,
    }));

    const like_playlist_id = usePage().props?.like_playlist_id || 0
    const signet_playlist_id = usePage().props?.signet_playlist_id || 0


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

                            <ItemPanel route="/modify/1" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.88 96.44"><path d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z" /></svg>
                                <p>Modifier un livre</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/2" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.74 122.88"><g><path d="M0,0c0,8.77,5.74,14.51,8.77,17.53c3.03,3.03,7.39,1.86,7.39,4.14c0,0,1.38,4.62,5.76,4.62h10.96 c0,2.52,2.19,4.38,2.19,4.38s-2.19,1.23-2.19,4.38H21.92c-4.38,0-4.38,2.19-4.38,4.38c0,4.62,0,8.77,0,8.77 c0,2.1,2.03,4.38,4.38,4.38c2.36,0,10.96,0,10.96,0v8.77H26.3c0,3.56,2.37,6.41,6.58,8.77c0,2.77,0,48.22,0,48.22 c0,5.77,13.15,6.27,13.15,0V52.6h30.69v65.75c0,6.07,13.15,5.64,13.15,0c0,0,0-45.45,0-48.22c4.2-2.73,6.58-5.19,6.58-8.77h-6.58 V52.6c0,0,8.6,0,10.96,0c1.94,0,4.38-2.28,4.38-4.38c0,0,0-4.38,0-8.77c0-4.38-2.41-4.38-4.38-4.38H89.87 c0.21-2.31-2.19-4.38-2.19-4.38s2.19-1.86,2.19-4.38h10.96c4.38,0,4.38-4.38,4.38-4.38c0-2.07,5.11-1.21,8.77-4.38 c3.66-3.17,8.77-8.77,8.77-17.53C70.14,8.77,43.84,8.77,0,0L0,0z M46.03,26.3c0,0,8.77,0,8.77,0v8.77h-8.77 c0-2.52-2.19-4.38-2.19-4.38S46.03,29.03,46.03,26.3L46.03,26.3L46.03,26.3z M67.95,26.3h8.77c0,2.32,2.19,4.38,2.19,4.38 s-2.19,2.07-2.19,4.38h-8.77V26.3L67.95,26.3z"/></g></svg>
                                <p>Modifier un anime</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/3" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 43.52 122.88"><path d="M11.35,45.61q3.72-4.22,7.69-8a45.71,45.71,0,0,1-2.19-12c-.23-7.24.88-14.93,5-21C23,2.79,25-.25,27.17,0,29,.24,30,2.83,30.72,4.32c4.92,10,5.93,20.54.25,31.93a46,46,0,0,1-7.84,10.8l2.38,12.12a8.74,8.74,0,0,1,.87-.14,14.2,14.2,0,0,1,8.56,1.41c5.6,3,9.08,10.57,8.52,16.83-.5,5.5-3,9.3-7.15,12.63a23.92,23.92,0,0,1-4.24,2.78l2.87,14.62a28.07,28.07,0,0,1,.12,3.74c-.35,7.71-6.35,12.16-13.78,11.82-5.72-.36-11.67-4.9-11.7-10.64-.06-11.13,15-10.6,13.9-.42-.32,3-2.51,5.65-7.21,5.82,3.79,6.28,15.51,1.79,16.31-6.44a17.52,17.52,0,0,0-.69-6.24L29.72,93.65a17.7,17.7,0,0,1-3.07.67A23.71,23.71,0,0,1,8.5,88.66a26,26,0,0,1-8-24.34C2,56.69,6.39,51.26,11.35,45.61Zm9.81-9.53C19.09,28.55,19.4,19,24.73,12.76S35.94,15,28.18,27.42a48.8,48.8,0,0,1-7,8.66Zm0,13c-.67.67-1.36,1.34-2.06,2-4,3.85-8,7.52-11,13a20.65,20.65,0,0,0-1.5,17.23c2.4,7.49,14,12.21,22.65,9.94L24.72,67.63a9.82,9.82,0,0,0-7.09,8,8.7,8.7,0,0,0,3.08,7.81,16.74,16.74,0,0,0,1.81,1.36c1.24.82.63,1.41-.53,1.06-3.87-1.3-6.19-3.44-7.43-6.17-3.67-8.08.83-17.08,8.66-19.92L21.16,49.07ZM31.63,90.43,27.09,67.24a9,9,0,0,1,4.53,1,12,12,0,0,1,6.62,8.23c1.2,5.57-1.7,11.72-6.49,13.94l-.12.05Z"/></svg>
                                <p>Modifier une musique</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/4" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.88 95.17"><g><path d="M104.42,21.23h0.27c0.78,0,1.47,0.36,1.93,0.91c11.41,11.74,17.4,37.23,16.07,54.29c-0.37,4.73-1.3,8.89-2.83,12.03 c-1.74,3.58-4.25,5.93-7.61,6.55c-4.28,0.79-9.63-1.47-16.06-8.02c-0.83-0.84-1.69-1.69-2.57-2.56c-3-2.95-6.16-6.06-8.83-9.81 H38.08c-2.68,3.78-5.84,6.89-8.85,9.84c-0.87,0.86-1.73,1.7-2.55,2.53c-6.43,6.55-11.78,8.81-16.06,8.02 c-3.36-0.62-5.88-2.97-7.61-6.55c-1.53-3.15-2.46-7.3-2.83-12.03C-1.15,59.29,4.9,33.65,16.4,21.98c0.49-0.5,1.13-0.75,1.78-0.75 v-0.01h0.28c1.41-1.94,3.16-3.5,5.13-4.68c2.99-1.79,6.47-2.68,9.93-2.68c3.47,0,6.95,0.89,9.93,2.68c1.96,1.17,3.71,2.73,5.1,4.67 h7.91C55.85,6.29,60,2.54,66.13,2.12c2.22-0.15,4.57,0.24,7.03,0.65c4.65,0.77,9.79,1.62,13.44-2.03c0.98-0.98,2.56-0.98,3.54,0 c0.98,0.98,0.98,2.56,0,3.54C84.67,9.74,78.2,8.67,72.35,7.7c-2.16-0.36-4.22-0.7-5.89-0.59c-3.31,0.22-5.51,2.98-4.99,14.12h12.87 c1.4-1.94,3.16-3.51,5.12-4.68c2.99-1.79,6.47-2.68,9.92-2.68s6.93,0.9,9.92,2.68C101.26,17.72,103.02,19.28,104.42,21.23 L104.42,21.23z M90.87,51.95c1.84,1.84,1.84,4.81,0,6.65c-1.84,1.84-4.81,1.84-6.65,0c-1.84-1.84-1.84-4.81,0-6.65 C86.05,50.12,89.03,50.12,90.87,51.95L90.87,51.95z M101.33,42.57c1.84,1.84,1.84,4.81,0,6.65c-1.84,1.84-4.81,1.84-6.65,0 c-1.84-1.84-1.84-4.81,0-6.65C96.52,40.73,99.49,40.73,101.33,42.57L101.33,42.57z M80.4,42.57c1.84,1.84,1.84,4.81,0,6.65 c-1.84,1.84-4.81,1.84-6.65,0c-1.84-1.84-1.84-4.81,0-6.65C75.59,40.73,78.57,40.73,80.4,42.57L80.4,42.57z M90.87,34.19 c1.84,1.84,1.84,4.81,0,6.65c-1.84,1.84-4.81,1.84-6.65,0c-1.84-1.84-1.84-4.81,0-6.65C86.05,32.36,89.03,32.36,90.87,34.19 L90.87,34.19z M26.85,35.03h8.17v8.33h8.33v8.17h-8.33v8.33h-8.17v-8.33h-8.33v-8.17h8.33V35.03L26.85,35.03z M103.62,26.24h-0.54 v-0.01c-0.85,0-1.68-0.43-2.14-1.22c-1.07-1.78-2.53-3.18-4.21-4.18c-2.19-1.31-4.76-1.96-7.36-1.96c-2.59,0-5.17,0.65-7.36,1.96 c-1.63,0.97-3.05,2.32-4.11,4.02c-0.41,0.82-1.26,1.38-2.24,1.38H47.22v-0.01c-0.85,0-1.68-0.43-2.14-1.22 c-1.06-1.78-2.52-3.17-4.19-4.17c-2.2-1.32-4.78-1.98-7.37-1.98c-2.59,0-5.17,0.66-7.37,1.98c-1.63,0.98-3.06,2.32-4.12,4.02 c-0.41,0.82-1.26,1.38-2.24,1.38h-0.54C9.19,37.25,3.95,60.38,5.17,76.06c0.32,4.12,1.09,7.67,2.34,10.23 c1.04,2.13,2.37,3.51,4.01,3.81c2.67,0.49,6.47-1.39,11.6-6.61c0.85-0.86,1.72-1.72,2.61-2.59c3.08-3.02,6.33-6.22,8.83-9.96 c0.42-0.79,1.25-1.32,2.21-1.32h49.34v0.01c0.81,0,1.6,0.39,2.08,1.12c2.54,3.84,5.83,7.08,8.94,10.14 c0.9,0.88,1.78,1.75,2.63,2.62c5.12,5.22,8.93,7.1,11.6,6.61c1.64-0.3,2.98-1.68,4.01-3.81c1.25-2.57,2.02-6.11,2.34-10.23 C118.93,60.38,113.69,37.25,103.62,26.24L103.62,26.24z"/></g></svg>
                                <p>Modifier un jeu vidéo</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/5" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:stroke-gray-500" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                                <p>Modifier une vidéo</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/6" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.88 88.39"><g><path d="M87.51,21.16c5.26,1.45,10.79,1.84,16.58,1.18c1.42-0.16,2.81-0.35,4.16-0.53c6.46-0.84,11.86-1.32,13.78,3.52 c3.39,8.55-4.28,27.07-8.32,34.56c-8.32,15.43-24.9,32.69-44.08,27.57c-2.99-0.8-5.68-2.1-8.08-3.86 c6.3-3.51,11.28-8.9,15.13-15.24l-0.01,0.02c4.77,0.26,9.73,2.78,14.27,5.44c0.33-5.99-5.46-9.97-10.62-12.45 c4.14-9.29,6.33-19.72,7.01-29.03C87.53,29.46,87.64,25.53,87.51,21.16L87.51,21.16z M2.61,6.51c1.56-1.48,3.92-1.87,6.6-1.7 c5.03,0.31,10.23,1.86,15.11,3.18c10.61,2.86,20.99,1.93,31.1-2.74c1.36-0.63,2.69-1.28,3.98-1.9C65.56,0.37,70.8-1.9,74.31,2.3 c6.21,7.42,4.68,28.44,3.13,37.25c-3.2,18.15-14.03,40.87-34.88,42.1c-11.06,0.65-20.49-5.57-28.61-17.32 c-5.17-8-8.9-16.22-11.18-24.67C1.13,33.5-2.46,11.34,2.61,6.51L2.61,6.51z M12.94,34.3c-1.91-0.5-3.01-1.12-3.38-1.85 c-1.47-2.92,10.66-10.29,19.22-3.52C40.95,38.4,17.26,35.58,12.94,34.3L12.94,34.3z M32.63,62.79c-3.23-2.31-4.96-5.16-5.9-9.02 c10.67,5.4,20.66,5.01,29.96-2.42c-0.37,3.29-1.44,6.24-3.28,8.83C47.98,67.83,40.04,68.08,32.63,62.79L32.63,62.79z M67.07,30.06 c1.79-0.84,2.76-1.65,2.99-2.44c0.92-3.14-12.35-8.19-19.54,0.03C40.27,39.18,63.06,32.1,67.07,30.06L67.07,30.06z M90.82,42.07 c5.04-4.04,11.94-3.22,16.74,0.73c1.22,1.01,4.57,3.95,2.64,5.56c-0.53,0.44-1.41,0.69-2.63,0.75c-2.98,0.34-7.32-0.28-10.78-1.71 C94.07,46.3,92.01,44.83,90.82,42.07L90.82,42.07z"/></g></svg>
                                <p>Modifier une série</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/7" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.88 87.93"><path d="M3.2,34.79h97.89l1.53,1.34L102,38.94h0a.09.09,0,0,0,0,.05.23.23,0,0,0,.23.23.27.27,0,0,0,.12,0l2.48-1.48,2.47,1.47a.17.17,0,0,0,.12,0,.23.23,0,0,0,.23-.23v-.05L107,36.12l1.53-1.33h11.18a3.22,3.22,0,0,1,3.2,3.21V51.24a10.42,10.42,0,0,0,0,20.25V84.73a3.21,3.21,0,0,1-3.2,3.2H107.17l-.2-.87,2.18-1.9h0a.25.25,0,0,0,.08-.18.23.23,0,0,0-.21-.22l-2.88-.26L105,81.85a.23.23,0,0,0-.21-.14.23.23,0,0,0-.22.14l-1.13,2.65-2.87.25a.23.23,0,0,0-.21.23.24.24,0,0,0,.07.18l2.18,1.9-.2.87H3.2A3.21,3.21,0,0,1,0,84.73V71.56a10.42,10.42,0,0,0,8.32-10.2A10.42,10.42,0,0,0,0,51.16V38a3.21,3.21,0,0,1,3.2-3.21Zm27.47,27.9L31,65.94a8.14,8.14,0,0,1-3.05.5A9.11,9.11,0,0,1,25,66.05a3.6,3.6,0,0,1-1.75-1.21,4.82,4.82,0,0,1-.89-2,12.68,12.68,0,0,1-.25-2.76,12.94,12.94,0,0,1,.25-2.78,4.76,4.76,0,0,1,.89-2c.82-1.07,2.34-1.6,4.54-1.6a11.63,11.63,0,0,1,1.73.14,6.22,6.22,0,0,1,1.48.36l-.58,3a11,11,0,0,0-2.3-.27,3.73,3.73,0,0,0-1.45.19.78.78,0,0,0-.41.77V63a7.86,7.86,0,0,0,1.53.15,8.48,8.48,0,0,0,2.92-.46Zm2.08,3.46V54.07h3.87V66.15Zm13.33,0-3-4.29a2.09,2.09,0,0,1-.19-.93h-.08v5.22H39V54.07h3.63l3,4.29a2,2,0,0,1,.19.93h.08V54.07h3.87V66.15Zm13.74-4.56H56v1.47h4.74v3.09h-8.6V54.07h8.5l-.48,3.09H56v1.62h3.87v2.81Zm6.51,4.56h-4L63,54.07h5l1.51,6.14h.13l1.51-6.14h5L77,66.15H73l-.23-5.86h-.14l-1.47,5.86h-3l-1.49-5.86h-.12l-.23,5.86Zm15.44,0H77.69l3.13-12.08h6l3.13,12.08H85.85l-.45-1.91H82.21l-.44,1.91Zm1.93-8.37-.79,3.38h1.78l-.78-3.38ZM20.29.13l99.15,29.73A3.25,3.25,0,0,1,121.08,31H74L32.89,17.39A3.7,3.7,0,0,0,28.28,20L25.22,31H16.06A10.41,10.41,0,0,0,12.81,15L16.34,2.35A3.2,3.2,0,0,1,20.29.13ZM105,64.87l1.13,2.65,2.88.26a.23.23,0,0,1,.13.4h0L107,70.08l.65,2.81v0a.23.23,0,0,1-.23.24.25.25,0,0,1-.12,0l-2.47-1.48-2.48,1.48a.28.28,0,0,1-.12,0A.23.23,0,0,1,102,73a.13.13,0,0,1,0-.06h0l.64-2.81-2.18-1.9a.22.22,0,0,1-.07-.17.23.23,0,0,1,.21-.23l2.87-.26,1.13-2.65a.23.23,0,0,1,.22-.14.23.23,0,0,1,.21.14Zm0-17,1.13,2.65,2.88.26a.23.23,0,0,1,.21.23.21.21,0,0,1-.08.17h0L107,53.1l.65,2.81V56a.23.23,0,0,1-.23.23.25.25,0,0,1-.12,0l-2.47-1.48-2.48,1.49-.12,0A.23.23,0,0,1,102,56a.07.07,0,0,1,0,0h0l.64-2.82-2.18-1.9a.21.21,0,0,1-.07-.17.23.23,0,0,1,.21-.23l2.87-.26,1.13-2.65a.25.25,0,0,1,.22-.14.24.24,0,0,1,.21.14Zm-85-.81h71.8a3.75,3.75,0,0,1,3.74,3.73V69.93a3.76,3.76,0,0,1-3.74,3.74H20a3.75,3.75,0,0,1-3.73-3.74V50.81A3.74,3.74,0,0,1,20,47.08Z"/></svg>
                                <p>Modifier un film</p>
                            </ItemPanel>

                            <ItemPanel route="/modify/8" onClick={() => setVisibility(false)} className="text-gray-400 hover:text-white flex items-center gap-4 group">
                                <svg className="group-hover:fill-gray-500" width="28" height="28" fill="#d9d9d9" viewBox="0 0 122.879 96.568"><g><path d="M5.535,15.447h98.221c1.527,0,2.891,0.62,3.883,1.611c0.99,0.991,1.611,2.396,1.611,3.882v70.134 c0,1.528-0.621,2.891-1.611,3.883c-0.082,0.082-0.166,0.165-0.289,0.247c-0.951,0.868-2.23,1.363-3.635,1.363H5.494 c-1.528,0-2.892-0.619-3.883-1.61S0,92.562,0,91.075V20.941c0-1.528,0.62-2.891,1.611-3.882s2.396-1.611,3.883-1.611H5.535 L5.535,15.447z M28.218,34.489c4.354,0,7.882,3.528,7.882,7.882s-3.528,7.883-7.882,7.883c-4.354,0-7.882-3.529-7.882-7.883 C20.335,38.018,23.864,34.489,28.218,34.489L28.218,34.489z M61.389,68.316l15.766-27.258l16.748,42.363l-78.165-0.001v-5.254 l6.57-0.327l6.567-16.093l3.282,11.496h9.855l8.537-22.004L61.389,68.316L61.389,68.316z M21.891,6.525 c-1.817,0-3.263-1.486-3.263-3.263C18.628,1.445,20.115,0,21.891,0h97.726c1.816,0,3.262,1.487,3.262,3.263v68.895 c0,1.818-1.486,3.264-3.262,3.264c-1.818,0-3.264-1.487-3.264-3.264V6.567H21.891V6.525L21.891,6.525z M102.723,21.974H6.567 v68.027h96.155V21.974L102.723,21.974z"/></g></svg>
                                <p>Modifier une image</p>
                            </ItemPanel>
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
