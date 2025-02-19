import { Head } from "@inertiajs/react";
import { useState } from "react";
import LivreForm from "../../Components/System/Form/LivreForm";
import VideoForm from "../../Components/System/Form/VideoForm";
import MusiqueForm from "../../Components/System/Form/MusiqueForm";
import SerieForm from "../../Components/System/Form/SerieFilm";
import ImageForm from "../../Components/System/Form/ImageForm";
import JeuForm from "../../Components/System/Form/JeuForm";
import FilmForm from "../../Components/System/Form/FilmForm";
import AnimeForm from "@/Components/System/Form/AnimeForm";

export default function CreateEntityForms({ categories, tags }) {

    const [selectedCat, setSelectedCat] = useState(0)

    function renderContent() {
        switch (selectedCat) {
            case "1":
                return <LivreForm category={selectedCat} tags={tags}/>;
            case "2":
                return <VideoForm category={selectedCat}/>;
            case "3":
                return <MusiqueForm category={selectedCat}/>;
            case "4":
                return <JeuForm category={selectedCat} tags={tags}/>;
            case "5":
                return <FilmForm category={selectedCat} tags={tags}/>;
            case "6":
                return <SerieForm category={selectedCat} tags={tags}/>;
            case "7":
                return <ImageForm category={selectedCat}/>;
            case "8":
                return <AnimeForm category={selectedCat} tags={tags}/>;
            default:
                return null;
        }
    }

    return (
        <>
            <Head title="Création Entité" />

            <div className="flex justify-center py-10">
                <div className="bg-gray-800 w-1/2 rounded-xl min-w-[800px]">
                    <h1 className="text-4xl p-6 text-[#ff5e00]">Créer une ressource</h1>

                    <select
                        className="text-gray-800 w-full h-20 text-2xl px-8 cursor-pointer bg-gray-300 font-bold"
                        value={selectedCat}
                        onChange={(e) => setSelectedCat(e.target.value)}
                    >
                        <option className="bg-[#14151a] text-gray-500" value={0}>Choisir une catégorie</option>
                        {
                            categories.map(category => (
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

                    <div className="min-h-24">

                        {selectedCat != 0 ?
                        <div>
                            <h2 className="p-6 text-3xl">{categories[selectedCat - 1].name}</h2>
                            <hr className="border-gray-500 mx-6" />
                        </div> : null}

                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    )
}
