import { Link, usePage } from "@inertiajs/react";

export default function ItemPanel({children, route, onClick, className}) {

    const url = usePage().url;

    return (
        <Link
            href={route}
            className={"hover:bg-[#23252b] text-lg px-6 py-[12px] unselectable " + className + ` ${url?.includes(`${route}`) ? 'text-[#ff5e00]' : null}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
