import { Head } from "@inertiajs/react";

export default function Character({ character }) {

    console.log(character)

    return(
        <>
            <Head title={character.data.name} />

        </>
    )
}
