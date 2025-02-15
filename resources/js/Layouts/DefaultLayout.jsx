import { usePage } from '@inertiajs/react';
import Nav from '../Components/Disposition/Nav';
import { useState } from "react";
import LeftNav from '@/Components/Disposition/LeftNav';
import ProfilPanel from '@/Components/Disposition/ProfilPanel';


export default function DefaultLayout({ children }) {

    const user = usePage().props.user?.data || null;
    const genres = usePage().props.genres;

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(false)

    return(
        <>
            <Nav
                setProfilPanel={setProfilPanel}
                setLeftNav={setLeftNav}
                leftNav={leftNav}
                profilPanel={profilPanel}
                icon_img={user?.icon_profil?.file_name || null}
            />

            {/* Left Nav*/}
            {leftNav ? <LeftNav genres={genres}/> : null}
            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel setVisibility={setProfilPanel} user={user} /> : null}

            <main className={`${leftNav ? "!ml-72" : ""}`}>{children}</main>
        </>
    )
}
