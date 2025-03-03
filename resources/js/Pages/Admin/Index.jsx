import PaginationBar from "@/Components/UI/PaginationBar";
import SearchBar from "@/Components/UI/SearchBar";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ entities, category }) {

    const { data, setData, get, processing } = useForm({
        search: "",
    })

    function submit(e) {
        e.preventDefault();

        const route = "/modify/" + category.id

        get(route, {
            preserveState: true,
            replace: true,
            preserveScroll: true,
        });
    }

    return (
        <>
            <Head title="Modification d'entité" />

            <div className="p-8">
                <h1 className="text-4xl">Modifier la table {category.name}</h1>

                <hr className="border-gray-500 mt-4 mb-8" />

                <form onSubmit={submit}>
                    <SearchBar
                        onChange={(value) => setData('search', value)}
                        value={data.search}
                        processing={processing}
                        className="mb-8"
                    />
                </form>

                {
                    entities.data.length > 0 ?

                        <table className="mx-auto w-[90%] table-auto border rounded-lg overflow-hidden">
                            <thead>
                                <tr className="h-16 text-lg bg-[#332d2d93]">
                                    <th className="border border-[#ff5e00]">Titre</th>
                                    <th className="border border-[#ff5e00]">Auteur</th>
                                    {entities?.data[0]?.meta.description && <th className="border border-[#ff5e00]">Description</th>}
                                    {entities?.data[0]?.meta.img_couverture && <th className="border border-[#ff5e00]">Image</th>}
                                    {entities?.data[0]?.meta.note && <th className="border border-[#ff5e00] px-4">Note</th>}
                                    <th className="border border-[#ff5e00] px-4">Modifier</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    entities?.data?.map((entity) => (
                                        <tr className="text-center odd:bg-[#3b3b3b] even:bg-[#302f2f]" key={entity.id}>
                                            <td className="p-2 border border-[#ff5e00]">{entity.title}</td>
                                            <td className="p-2 border border-[#ff5e00]">{entity?.author ? entity.author : "N/A"}</td>
                                            {entities?.data[0]?.meta.description && <td className="p-2 border border-[#ff5e00]">{entity.meta.description.slice(0, 60)}...</td>}
                                            {entities?.data[0]?.meta.img_couverture && <td className="p-2 border border-[#ff5e00]">{entity.meta.img_couverture}</td>}
                                            {entities?.data[0]?.meta.note && <td className="p-2 border border-[#ff5e00]">{entity.meta.note}</td>}
                                            <td className="p-2 border border-[#ff5e00]">
                                                <Link href={"/modify/entity/" + entity.id}>
                                                    <svg className="mx-auto cursor-pointer hover:stroke-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        :

                        <div className="flex justify-center items-center h-[300px] text-4xl text-gray-600 font-bold">
                            <p>Aucun élément</p>
                        </div>
                }

                <PaginationBar links={entities.meta.links} />
            </div>

        </>
    )
}
