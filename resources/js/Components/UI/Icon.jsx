export default function Icon({ path, size = 80, className, onClick = null }) {
    return (
        <img
            className={"rounded-full cursor-pointer " + className}
            style={{ width: `${size}px`, height: `${size}px` }}
            src={path ? `/img/icons/${path}` : "/img/icons/default_profil.png"}
            alt="icon"
            onClick={onClick}
        />
    );
}
