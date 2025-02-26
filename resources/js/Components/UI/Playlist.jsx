export default function Playlist({name, img_path, nb_items}) {
    return(
        <div>
            <p>{name}</p>
            <p>{img_path}</p>
            <p>{nb_items}</p>
        </div>
    )
}
