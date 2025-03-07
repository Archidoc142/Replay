import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Image from "../Common/Image";

export default function CharacterList({ characters, id_entity, charactersFromEntity, SMF }) {

    const { data, setData, put, processing } = useForm({
        id_character: null,
        id_entity: id_entity,
    });

    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false)

    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name))

    const filteredCharacters = search ? sortedCharacters.filter((char) => char.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5) : []

    function submit(e) {
        e.preventDefault();

        if (data.id_character) {
            put("/characterAdd", {
                data,
                onError: () => SMF(3, "Le personnage n'a pas été ajouté"),
                onSuccess: () => SMF(1, "Le personnage a été ajouté"),
            });
        }
    }

    const { delete: destroy } = useForm();

    function deleteCharacter(e, id) {
        e.preventDefault();
        e.stopPropagation();

        if (!confirm("Voulez-vous vraiment enlever ce personnage ?")) return;

        destroy(route("character.destroy", { id: id, id_entity: id_entity }),);
    }

    return (
        <div className="flex flex-col gap-4 items-center w-2/3 bg-[#16161696] pt-4 pb-8 rounded-xl border-4 border-[#5a5a5c]">
            <div className="flex gap-2 items-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff5e00" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <h3 className="unselectable text-4xl text-[#ff5e00]">Personnages</h3>
            </div>

            <div className="px-6 flex flex-wrap justify-center gap-4">
                {charactersFromEntity?.map((character) => {
                    const characterIndex = characters.findIndex((char) => char.id === character)

                    return(
                        <Link href={"/character/" + character} className="flex items-center justify-between w-[440px] border-4 border-[#5a5a5c] bg-[#27242493] hover:bg-[#3b393993] p-2 rounded-lg cursor-pointer" key={character}>
                            <Image
                                src={`/img/${characters[characterIndex]?.vignette}`}
                                alt={`/img/${characters[characterIndex]?.vignette}`}
                                className="h-[90px] max-w-[85px] rounded-md mr-4"
                            />

                            <p className="text-3xl winston">{characters[characterIndex].name}</p>

                            <svg onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                deleteCharacter(e, character);
                            }}
                                className="hover:stroke-[#88254B] p-1 rounded-lg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </Link>
                    )
                })}

                <form onSubmit={submit} className="relative w-[440px]">
                    <div className="flex items-center justify-between border-4 border-[#5a5a5c] bg-[#27242493] p-2 rounded-lg">
                        <Image
                            src={data.id_character ? `/img/${characters.find((c) => c.id === data.id_character)?.vignette}` : null}
                            alt={data.id_character ? `/img/${characters.find((c) => c.id === data.id_character)?.vignette}` : null}
                            className="h-[90px] max-w-[85px] rounded-md"
                        />

                        {/* Input de recherche */}
                        <input
                            type="text"
                            className="bg-transparent rounded-xl px-2 mx-4 py-1 w-full text-white"
                            placeholder="Rechercher un personnage..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Laisse le temps de cliquer
                        />

                        <button type="submit" disabled={processing} className="bg-[#7A163C] py-2 px-4 mr-2 rounded-md hover:bg-[#88254b]">
                            {processing ? "Ajout..." : "Ajouter"}
                        </button>
                    </div>

                    {/* Liste des personnages filtrés */}
                    {isFocused && filteredCharacters.length > 0 && (
                        <div className="absolute left-0 w-full bg-[#27242493] border-4 border-[#5a5a5c] mt-1 rounded-lg z-10">
                            {filteredCharacters.map((character) => (
                                <div
                                    key={character.id}
                                    className="flex items-center gap-2 p-2 hover:bg-[#333] cursor-pointer"
                                    onClick={() => {
                                        setData("id_character", character.id);
                                        setSearch(character.name); // Remplit l'input avec le nom sélectionné
                                        setIsFocused(false);
                                    }}
                                >
                                    <Image src={`/img/${character.vignette}`} alt={character.name} className="h-16 max-w-[85px]" />
                                    <span className="text-white ml-4 text-lg">{character.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
