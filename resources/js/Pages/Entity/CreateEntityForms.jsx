import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import LivreForm from "../../Components/System/Form/LivreForm";
import VideoForm from "../../Components/System/Form/VideoForm";
import MusiqueForm from "../../Components/System/Form/MusiqueForm";
import SerieForm from "../../Components/System/Form/SerieFilm";
import ImageForm from "../../Components/System/Form/ImageForm";
import JeuForm from "../../Components/System/Form/JeuForm";
import FilmForm from "../../Components/System/Form/FilmForm";
import AnimeForm from "@/Components/System/Form/AnimeForm";
import MessageFlash from "@/Components/System/MessageFlash";

export default function CreateEntityForms({ categories }) {

    const genres = usePage().props.genres

    const [selectedCat, setSelectedCat] = useState(0)

    // Message Flash
    const [message, setMessage] = useState("")
    const [messageV, setMessageV] = useState(false)
    const [messageS, setMessageS] = useState(false)

    const showMessageFlash = (status, message, visibility = true) => {
        setMessageS(status)
        setMessage(message)
        setMessageV(visibility)
    }

    function renderContent() {
        switch (selectedCat) {
            case "1":
                return <LivreForm SMF={showMessageFlash} category={selectedCat} tags={genres}/>;
            case "2":
                return <AnimeForm SMF={showMessageFlash} category={selectedCat} tags={genres}/>;
            case "3":
                return <MusiqueForm SMF={showMessageFlash} category={selectedCat}/>;
            case "4":
                return <JeuForm SMF={showMessageFlash} category={selectedCat} tags={genres}/>;
            case "5":
                return <VideoForm SMF={showMessageFlash} category={selectedCat}/>;
            case "6":
                return <SerieForm SMF={showMessageFlash} category={selectedCat} tags={genres}/>;
            case "7":
                return <FilmForm SMF={showMessageFlash} category={selectedCat} tags={genres}/>;
            case "8":
                return <ImageForm SMF={showMessageFlash} category={selectedCat}/>;
            default:
                return null;
        }
    }

    return (
        <>
            <Head title="Création Entité" />

            <MessageFlash
                status={messageS}
                message={message}
                visibility={messageV}
                setVisibility={setMessageV}
            />

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
