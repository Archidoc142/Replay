import Carrousel from "@/Components/UI/Carrousel";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Accueil({ leftNav, books, musics, games, movies, series, animes }) {

    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        setItemsToShow(leftNav ? 3 : 4);
    }, [leftNav])

    return (
        <>
            <Head title="Accueil" />

            <Carrousel
                title="Anime"
                nb_items={itemsToShow}
                datas={animes.data}
            >
                <svg width="40" height="40" fill="white" stroke="black" strokeWidth={3} viewBox="0 0 122.88 114.57"><g><path class="st0" d="M3.34,30.91h46.22l-7.99-13.84c0.77-3.85,3.01-5.15,6.73-3.89l10.23,17.73h4.04L80.78,0.35 c3.51-0.9,6.12-0.23,6.74,3.89L71.64,30.91h47.91c1.84,0,3.34,1.5,3.34,3.34v76.98c0,1.83-1.5,3.34-3.34,3.34H3.34 c-1.84,0-3.34-1.5-3.34-3.34V34.25C0,32.42,1.5,30.91,3.34,30.91L3.34,30.91z M105.39,102.06c2.4,0,4.35,1.95,4.35,4.35 c0,2.4-1.95,4.35-4.35,4.35c-2.4,0-4.35-1.95-4.35-4.35C101.05,104.01,102.99,102.06,105.39,102.06L105.39,102.06z M9.03,103.01 h32.67c0.5,0,0.91,0.41,0.91,0.92v4.95c0,0.5-0.41,0.92-0.91,0.92H9.03c-0.5,0-0.91-0.41-0.91-0.92v-4.95 C8.12,103.43,8.53,103.01,9.03,103.01L9.03,103.01L9.03,103.01z M10.8,38.56h101.27c1.48,0,2.69,1.2,2.69,2.66v53.85 c0,1.46-1.21,2.66-2.69,2.66H10.8c-1.48,0-2.69-1.2-2.69-2.66V41.22C8.12,39.76,9.32,38.56,10.8,38.56L10.8,38.56z"/></g></svg>
            </Carrousel>

            <Carrousel
                title="Manga / Manhwa"
                nb_items={itemsToShow}
                datas={books.data}
            >
                <svg width="40" height="40" fill="white" viewBox="-32 0 512 512"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" /></svg>
            </Carrousel>

            <Carrousel
                title="Jeux vidéo"
                nb_items={itemsToShow}
                datas={games.data}
            >
                <svg width="60" height="60" viewBox="0 0 64 64"><circle fill="#fff" r="5" cy="37" cx="21"></circle><circle fill="#fff" r="5" cy="37" cx="43"></circle><path fill="#fff" d="M57.834 22a11.977 11.977 0 0 0-11.178-9.94l-.344-.06H18A12 12 0 0 0 6.166 22L2.15 43.555a7 7 0 0 0 12.656 5.355l2.633-3.646A8.993 8.993 0 0 1 16 29.522V26h-4v-4h4v-4h4v4h4v4h-4v2.06a8.85 8.85 0 0 1 1-.06 8.986 8.986 0 0 1 7.555 13.873h6.889a9 9 0 1 1 11.117 3.39l2.633 3.646A7 7 0 0 0 62 45c0-2-4.166-23-4.166-23zM39 26a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm10 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"></path></svg>
            </Carrousel>

            <Carrousel
                title="Films"
                nb_items={itemsToShow}
                datas={movies.data}
            >
                <svg width="50" height="50" fill="white" viewBox="0 0 100.49 122.88" ><g><path d="M4.38,62.41c-0.66-0.62-1.24-1.31-1.75-2.04c-1.62-2.33-2.45-5.12-2.6-7.98c-0.15-2.74,0.31-5.57,1.28-8.12 c0.8-2.11,1.96-4.05,3.42-5.64c-1.03-2.68-1.37-5.48-1.12-8.19c0.29-3.1,1.34-6.07,3-8.66c1.66-2.58,3.93-4.8,6.65-6.39 c2.47-1.44,5.31-2.35,8.4-2.52c1.71-4.66,4.97-8.02,8.92-10.15c2.43-1.31,5.12-2.14,7.87-2.5c2.71-0.36,5.48-0.26,8.09,0.28 c4.14,0.86,7.92,2.85,10.54,5.91c4.4-1.39,9.32-1.13,13.71,0.43c2.37,0.84,4.61,2.06,6.54,3.62c1.98,1.59,3.65,3.53,4.82,5.76 c1.47,2.8,2.17,6.01,1.74,9.5c2.87,0.77,5.5,2.21,7.79,4.15c2.76,2.33,5.02,5.39,6.56,8.84c1.53,3.43,2.35,7.25,2.23,11.12 c-0.15,4.86-1.75,9.78-5.23,14.1l-12.19,58.98H66.57l2.77-64.53h21.28c1.87-2.75,2.75-5.77,2.84-8.74c0.09-2.8-0.51-5.57-1.62-8.07 c-1.11-2.48-2.73-4.67-4.69-6.33c-2.2-1.86-4.84-3.03-7.63-3.12l-4.83-0.15l1.61-4.53c1.08-3.05,0.79-5.75-0.36-7.94 c-0.71-1.35-1.75-2.55-3-3.55c-1.3-1.04-2.83-1.88-4.47-2.46c-3.67-1.3-7.78-1.32-11.01,0.37l-3.08,1.62l-1.65-3.06 c-1.41-2.62-4.29-4.32-7.6-5.01c-1.85-0.38-3.82-0.45-5.75-0.2C37.46,7.43,35.6,8,33.92,8.91c-2.99,1.61-5.37,4.34-6.18,8.23 l-0.64,3.07l-3.12-0.29c-2.69-0.25-5.15,0.36-7.2,1.55c-1.73,1.01-3.19,2.43-4.25,4.1c-1.07,1.67-1.75,3.56-1.93,5.5 c-0.21,2.22,0.23,4.53,1.47,6.67l1.63,2.8l-2.66,1.85c-1.36,0.95-2.46,2.54-3.16,4.39C7.25,48.44,6.95,50.26,7.04,52 c0.09,1.61,0.52,3.14,1.37,4.35c0.57,0.82,1.36,1.51,2.37,2h0.75h18.47l5.34,64.53H16.82L4.38,62.41L4.38,62.41z M62.1,26.24 c2.51,0,4.55,2.04,4.55,4.55c0,2.51-2.04,4.55-4.55,4.55c-2.51,0-4.55-2.04-4.55-4.55C57.56,28.27,59.59,26.24,62.1,26.24 L62.1,26.24z M48.16,40.33c2.51,0,4.55,2.04,4.55,4.55c0,2.51-2.04,4.55-4.55,4.55c-2.51,0-4.55-2.04-4.55-4.55 C43.61,42.37,45.65,40.33,48.16,40.33L48.16,40.33z M28.46,31.69c2.51,0,4.55,2.04,4.55,4.55c0,2.51-2.04,4.55-4.55,4.55 s-4.55-2.04-4.55-4.55C23.91,33.73,25.94,31.69,28.46,31.69L28.46,31.69z M59.95,122.88H42l-5.34-64.53h26.06L59.95,122.88 L59.95,122.88z"/></g></svg>
            </Carrousel>

            <Carrousel
                title="Séries"
                nb_items={itemsToShow}
                datas={series.data}
            >
                <svg width="50" height="50" fill="white" viewBox="0 0 122.88 95.8"><g><path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z"/></g></svg>
            </Carrousel>
        </>
    )
}
