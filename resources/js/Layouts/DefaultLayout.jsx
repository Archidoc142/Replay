import { usePage } from '@inertiajs/react';
import Nav from '../Components/Disposition/Nav';
import { useState } from "react";
import LeftNav from '@/Components/Disposition/LeftNav';
import ProfilPanel from '@/Components/Disposition/ProfilPanel';


export default function DefaultLayout({ children }) {

    const icon_img = usePage().props.user?.data?.icon_profil?.file_name || null;
    const genres = usePage().props.genres;

    const [profilPanel, setProfilPanel] = useState(false)
    const [leftNav, setLeftNav] = useState(false)

    return(
        <>
            <Nav
                setProfilPanel={setProfilPanel}
                setLeftNav={setLeftNav}
                leftNav={leftNav}
                icon_img={icon_img}
            />

            {/* Left Nav*/}
            {leftNav ? <LeftNav genres={genres}/> : null}
            {/* Profil Panel*/}
            {profilPanel ? <ProfilPanel /> : null}

            <main>{children}</main>
        </>
    )
}
