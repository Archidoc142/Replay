import { useForm, usePage } from "@inertiajs/react";

export default function ButtonAddList({ id_entity = 0, type, children, className }) {

    let id_playlist = null

    if (type === "like") {
        id_playlist = usePage().props.like_playlist_id
    } else if (type === "signet") {
        id_playlist = usePage().props.signet_playlist_id
    }

    const { data, setData, post } = useForm({
        id_entity: id_entity,
        id_playlist: id_playlist,
    })

    function submit(e) {
        e.preventDefault();
        post('/addToList', {
            forceFormData: true,
            preserveScroll: true,
            onError: () => { },
            onSuccess: () => { }
        })
    }

    return (
        <form onSubmit={submit} className="flex items-center">
            <button type="submit" className={className}>
                {children}
            </button>
        </form>
    );
}
