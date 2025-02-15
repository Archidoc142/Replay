export default function Icon({ path, size = 80 }) {
    return (
        <img
            className="rounded-full bg-slate-200 cursor-pointer"
            style={{ width: `${size}px`, height: `${size}px` }}
            src={path ? `/img/icons/${path}` : "/img/icons/default_profil.png"}
            alt="icon"
        />
    );
}
