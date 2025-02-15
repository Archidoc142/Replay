import Icon from "../UI/Icon";
import { Link } from '@inertiajs/react';

export default function Nav({setProfilPanel, setLeftNav, leftNav, icon_img}) {

    return(
        <nav className="bg-[#23252b] flex justify-between h-16 sticky top-0">
            <div className="flex items-center h-full">
                {/* Hamburger Icon*/}
                <div onClick={() => setLeftNav(!leftNav)} className="hover:bg-[#14151a] h-full w-16 center cursor-pointer">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>

                {/* Nom du site*/}
                <Link
                    href="/"
                    className="winston text-[28px] text-[#ff5e00] hover:text-white hover:bg-[#14151a] h-full center px-4"
                >
                    RE:PLAY
                </Link>
            </div>


            <div className="flex items-center h-full">
                {/* Loupe Icon*/}
                <Link
                    href="/search"
                    className="group hover:bg-[#14151a] h-full center px-4"
                >
                    <svg className="group-hover:stroke-gray-500" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </Link>

                {/* Signet Icon*/}
                <Link
                    href="/playlists"
                    className="group hover:bg-[#14151a] h-full center px-4"
                >
                    <svg className="group-hover:stroke-gray-500" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d9d9d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </Link>

                {/* Icone de profil*/}
                <div onClick={() => setProfilPanel(true)} className="hover:bg-[#14151a] h-full center gap-2 px-4 cursor-pointer">
                    <Icon
                        path={icon_img}
                        size="45"
                    />
                    <svg viewBox="0 0 32 32" width="24" height="32"><path fill="white" d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"></path></svg>
                </div>
            </div>
        </nav>
    )
}
