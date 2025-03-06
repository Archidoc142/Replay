import { usePage } from '@inertiajs/react'
import Nav from '../Components/Disposition/Nav'
import React, { useEffect, useRef, useState } from "react"
import LeftNav from '@/Components/Disposition/LeftNav'
import ProfilPanel from '@/Components/Disposition/ProfilPanel'


export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null
    const genres = usePage().props.genres

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(false)

    const leftNavRef = useRef(null)
    const mainRef = useRef(null)

    const profilURLArray = ['/profile', '/playlists', '/playlist', '/liked', '/signet', '/history', '/modify']
    const [isProfile, setIsProfile] = useState(false)

    const { url } = usePage()

    useEffect(() => {
        const isInProfil = profilURLArray.some(prefix => url.startsWith(prefix))

        if (url.startsWith('/modify/entity/')) {
            document.body.style.backgroundColor = "#1f2a38";
        } else {
            document.body.style.backgroundColor = "black";
        }

        setIsProfile(isInProfil)
        setLeftNav(isInProfil)
    }, [url])

    return(
        <>
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
            <LeftNav
                setVisibility={setProfilPanel}
                ref={leftNavRef}
                genres={genres}
                isProfile={isProfile}
            />

            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main ref={mainRef}>
                {React.cloneElement(children, { leftNav })}
            </main>
        </>
    )
}
