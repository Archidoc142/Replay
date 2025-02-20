import { usePage } from '@inertiajs/react';
import Nav from '../Components/Disposition/Nav';
import React, { useEffect, useRef, useState } from "react";
import LeftNav from '@/Components/Disposition/LeftNav';
import ProfilPanel from '@/Components/Disposition/ProfilPanel';
import LoadingScreen from '@/Components/System/LoadingScreen';


export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null;
    const genres = usePage().props.genres;

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const leftNavRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;

        const updateProgress = () => {
            loadedImages++;
            const progress = (loadedImages / images.length) * 100;
            setLoadingProgress(progress);

            if (loadedImages === images.length) {
                setIsLoading(false);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                updateProgress();
            } else {
                img.onload = updateProgress;
                img.onerror = updateProgress;
            }
        });

        if (images.length === 0) {
            setIsLoading(false);
        }
    }, []);

    return(
        <>
            {isLoading && <LoadingScreen progress={loadingProgress} />}

            <Nav
                setProfilPanel={setProfilPanel}
                setLeftNav={setLeftNav}
                leftNav={leftNav}
                profilPanel={profilPanel}
                icon_img={user?.icon_profil?.file_name || null}
                leftNavRef={leftNavRef}
                mainRef={mainRef}
            />

            {/* Left Nav*/}
            <LeftNav ref={leftNavRef} genres={genres}/>
            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main ref={mainRef}>
                {React.cloneElement(children, { leftNav })}
            </main>
        </>
    )
}
