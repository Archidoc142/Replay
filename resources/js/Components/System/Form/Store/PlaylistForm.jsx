import AddImage from "@/Components/UI/AddImage";
import { useForm } from "@inertiajs/react";

export default function PlaylistForm({ SMF, setShow, categories }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        id_category: 0,
        filename: '',
        file: null,
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.id_category != 0) {
            post(route('createPlaylist'), {
                onError: () => { SMF(3, "La playlist n'a pas été créée") },
                onSuccess: () => {
                    SMF(1, "La playlist a bien été créée"),
                    setShow(false)
                }
            });
        }
    };

    function handleFileUpload(key, file) {
        setData(key, file);
    }

    return (
        <>
            <h3 className="text-4xl font-medium">
                Modifier le profil
            </h3>

            <hr className="border-gray-500 my-4" />

            <form onSubmit={submit}>
                <div className="flex">
                    <AddImage
                        onFileUpload={(file) => handleFileUpload('file', file)}
                        setFilename={(value) => setData("filename", value)}
                        filename={data.filename}
                        title="Image de couverture"
                        isImgExpandable={false}
                        className="w-[45%]"
                    />

                    <div className="flex flex-col gap-6 pl-4 w-[55%]">
                        <div className="form__group field">
                            <input name="name" type="text" className="form__field" placeholder="" required onChange={(e) => { setData("name", e.target.value) }} />
                            <label htmlFor="name" className="form__label">Nom de la playlist</label>
                        </div>

                        <select
                            className="text-gray-800 bg-gray-300 font-bold"
                            value={data.id_category}
                            onChange={(e) => setData('id_category', e.target.value)}
                        >
                            <option className="bg-[#14151a] text-gray-500" value={0}>Choisir une catégorie</option>
                            {
                                categories?.map(category => (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                        className="bg-[#14151a] text-gray-500"
                                    >
                                        {category.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
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
        </>
    )
}
