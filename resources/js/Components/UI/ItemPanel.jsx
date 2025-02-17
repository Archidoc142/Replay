import { Link, usePage } from "@inertiajs/react";

export default function ItemPanel({children, route, onClick, className}) {

    const url = usePage().url;

    return (
        <Link
            href={route}
            className={"hover:bg-[#23252b] text-lg px-6 py-[12px] unselectable " + className + ` ${url?.startsWith(`${route}`) ? '!text-[#ff5e00]' : ""}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
