import { Link, useForm } from "@inertiajs/react";
import Image from "../Common/Image";

export default function PlaylistObject({ id, name, img_path, nb_items, category }) {

    const catName = category.id !== 9 ? category.name.toLowerCase() : "éléments"

    const { delete: destroy } = useForm();

    function deletePlaylist(e) {
        e.preventDefault();

        if (!confirm("Voulez-vous vraiment supprimer cette playlist ?")) return;

        destroy(route("playlist.destroy", id));
    }

    return (
        <Link href={"playlist/" + id} className="cursor-pointer bg-[#383636c7] hover:bg-[#292727c7] p-2 rounded-lg">
            <div className="relative">
                <Image
                    src={img_path ? "/img/" + img_path : null}
                    alt={"Playlist Image " + img_path}
                    className="w-[320px] h-[180px] rounded-lg"
                />
                <p className="absolute bottom-2 right-2 bg-[#585353c7] px-2 rounded-full">{nb_items} {catName}</p>
                <svg onClick={deletePlaylist} className="absolute top-2 right-2 bg-[#585353c7] hover:stroke-gray-400 p-1 rounded-lg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>

            <p className="mt-1 text-lg winston">{name}</p>
            <p className="">Type: {catName}</p>
        </Link>
    )
}
