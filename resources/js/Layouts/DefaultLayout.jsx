import { usePage } from '@inertiajs/react'
import Nav from '../Components/Disposition/Nav'
import React, { useRef, useState } from "react"
import LeftNav from '@/Components/Disposition/LeftNav'
import ProfilPanel from '@/Components/Disposition/ProfilPanel'


export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null
    const genres = usePage().props.genres

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(false)

    const leftNavRef = useRef(null)
    const mainRef = useRef(null)

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
            <LeftNav setVisibility={setProfilPanel} ref={leftNavRef} genres={genres}/>
            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main ref={mainRef}>
                {React.cloneElement(children, { leftNav })}
            </main>
        </>
    )
}
