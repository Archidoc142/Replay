import AddImage from "@/Components/UI/AddImage";
import { useForm } from "@inertiajs/react";

export default function PlaylistForm({ SMF, setShow }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        filename: '',
        file: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('createPlaylist'), {
            onError: () => { SMF(3, "La playlist n'a pas été créée") },
            onSuccess: () => {
                SMF(1, "La playlist a bien été créée"),
                setShow(false)
            }
        });
    };

    function handleFileUpload(key, file) {
        setData(key, file);
    }

    return (
        <form onSubmit={submit}>
            <AddImage
                onFileUpload={(file) => handleFileUpload('file', file)}
                setFilename={(value) => setData("filename", value)}
                filename={data.filename}
                title="Image de couverture"
                isImgExpandable={false}
            />

            <div className="form__group field">
                <input name="name" type="text" className="form__field" placeholder="" required onChange={(e) => { setData("name", e.target.value) }} />
                <label htmlFor="name" className="form__label">Nom de la playlist</label>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-[#7A163C] py-2 px-4 rounded-md w-full hover:bg-[#88254b]"
                >
                    {processing ? 'Création en cours...' : 'Créer la playlist'}
                </button>
            </div>
        </form>
    )
}
