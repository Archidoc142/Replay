import { Head } from "@inertiajs/react";

export default function ShowEntityForm({ entity }) {
    return (
        <>
            <Head title={"Modification : " + entity.title} />

            <div className="p-8">
                <h1 className="text-4xl">{entity.title}</h1>

                <hr className="border-gray-500 mt-4 mb-8" />
            </div>
        </>
    )
}
