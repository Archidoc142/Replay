import { Link, useForm, usePage } from "@inertiajs/react";
import Image from "../Common/Image";

export default function PlaylistObject({ id, name, img_path, nb_items, category, id_entity = null, SMF = null }) {

    const catName = category.id !== 9 ? category.name.toLowerCase() : "éléments"
    const playlists = usePage().props.playlistsFromUser?.data

    const { delete: destroy } = useForm();

    function deletePlaylist(e) {
        e.preventDefault();

        if (!confirm("Voulez-vous vraiment supprimer cette playlist ?")) return;

        destroy(route("playlist.destroy", id));
    }

    const { data, setData, post } = useForm({
        id_entity: id_entity,
        id_playlist: id,
    })

    function submit(e) {
        e.preventDefault()
        e.stopPropagation()

        post('/addToList', {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => { SMF(1, "L'élément a été ajouté") },
            onError: () => { SMF(3, "L'élément n'a pas été ajouté") }
        })
    }


    return (
        <Link href={"/playlist/" + id} className="cursor-pointer bg-[#383636c7] hover:bg-[#292727c7] p-2 rounded-lg relative" >
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
            <p>Type: {category.id !== 9 ? catName : "toutes"}</p>

            {id_entity ?
                <button onClick={submit} className="absolute bottom-2 right-2">
                    {
                        playlists.filter(pl => pl.id === id)[0].entities.some(entity => entity.id === id_entity) ?
                            <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            : <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    }
                </button>
                : null
            }
        </Link >
    )
}
