import { Link } from "@inertiajs/react";

export default function ItemPanel({children, route}) {
    return (
        <Link href={route}
            className="hover:bg-[#23252b] text-lg px-4 py-[12px]"
        >
            {children}
        </Link>
    );
}
