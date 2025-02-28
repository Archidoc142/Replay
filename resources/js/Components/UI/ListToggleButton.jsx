import { useForm, usePage } from "@inertiajs/react"
import PopUp from "./PopUp"
import { useEffect } from "react";

export default function ListToggleButton({ setShowForm, showForm, id_entity, id_category }) {

    const playlists = usePage().props.playlistsFromUser?.data

    const { data, setData, post } = useForm({
        id_entity: id_entity,
        id_playlist: null,
    })

    function submit(e) {
        e.preventDefault();

        post('/addToList', {
            forceFormData: true,
            preserveScroll: true,
        })
    }

    useEffect(() => {
        setData('id_entity', id_entity)
    }, [id_entity])

    return (
        <>
            {showForm ?
                <PopUp setShow={setShowForm} className="min-w-[400px] min-h-[200px] pt-5 ">
                    <h3>Enregistrer dans...</h3>
                    <div className="flex flex-col gap-2 mt-3">
                    {
                        playlists?.map((pl) => (
                            pl.id_category === 9 || pl.id_category === id_category ?
                                <form onSubmit={submit} key={pl.id}>
                                    <button type="submit" className="flex items-center gap-4" onClick={() => setData('id_playlist', pl.id)}>
                                        {
                                            !pl.entities.some(entity => entity.id === id_entity) ?
                                                <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                : <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>

                                        }
                                        <p>{pl.name} - {pl.nb_items}</p>
                                    </button>
                                </form>
                                : null
                        ))
                    }
                    </div>
                </PopUp>
                : null}
        </>
    )
}
