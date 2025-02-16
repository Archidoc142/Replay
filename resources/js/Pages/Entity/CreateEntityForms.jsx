import { Head } from "@inertiajs/react";
import { useState } from "react";
import LivreForm from "../../Components/System/LivreForm";
import VideoForm from "../../Components/System/VideoForm";
import MusiqueForm from "../../Components/System/MusiqueForm";
import SerieForm from "../../Components/System/SerieFilm";
import ImageForm from "../../Components/System/ImageForm";
import JeuForm from "../../Components/System/JeuForm";
import FilmForm from "../../Components/System/FilmForm";

export default function CreateEntityForms({categories}) {

    const [selectedCat, setSelectedCat] = useState(0)

    function renderContent() {
        switch (selectedCat) {
            case "1":
                return <LivreForm/>;
            case "2":
                return <VideoForm/>;
            case "3":
                return <MusiqueForm/>;
            case "4":
                return <JeuForm/>;
            case "5":
                return <FilmForm/>;
            case "6":
                return <SerieForm/>;
            case "7":
                return <ImageForm/>;
            default:
                return null;
        }
    }

    return(
        <>
            <Head title="Création Entité" />

            <div className="flex justify-center py-10">
                <div className="bg-gray-800 w-1/2">
                    <h1 className="text-4xl p-6">Créer une ressource</h1>

                    <select
                        className="text-black w-full h-20 text-2xl px-8 cursor-pointer"
                        value={selectedCat}
                        onChange={(e) => setSelectedCat(e.target.value)}
                    >
                        <option value={0}>Choisir une catégorie</option>
                        {
                            categories.map(category => (
                                <option value={category.id} key={category.id}>{category.name}</option>
                            ))
                        }
                    </select>

                    <div className="min-h-24">
                        <h2 className="p-6 text-3xl">{selectedCat != 0 ? categories[selectedCat - 1].name : null}</h2>

                        <hr className="border-gray-500 mx-6" />

                        { renderContent() }
                    </div>
                </div>
            </div>
        </>
    )
}
