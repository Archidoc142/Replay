import { Link } from "@inertiajs/react";

export default function PaginationBar({ links }) {
    return (
        <div className="py-6 text-center">
            {links.map((link, i) => (
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        className={`border px-4 py-2 mx-1 font-bold ${link.active ? 'text-white bg-[#7A163C]' : (isNaN(link.label) ? 'bg-[#7A163C] text-white' : 'text-gray-500')}`}
                    >
                        {i == 0 ? "«" :
                         i == links.length - 1 ? "»" :
                         link.label}
                    </Link>
                ) : null
            ))}
        </div>
    )
}
