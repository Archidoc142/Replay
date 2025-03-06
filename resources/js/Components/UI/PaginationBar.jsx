import { Link } from "@inertiajs/react";

export default function PaginationBar({ links, params = null }) {

    function buildUrl(link) {
        if (!params) return link

        const url = new URL(link, window.location.origin)
        const existingParams = new URLSearchParams(url.search)
        const newParams = new URLSearchParams(params)

        newParams.forEach((value, key) => {
            existingParams.set(key, value)
        });

        url.search = existingParams.toString()

        return url.toString()
    }

    return (
        links.length > 3 ?
            <div className="py-6 text-center">
                {links.map((link, i) => (
                    link.url ? (
                        <Link
                            key={link.label}
                            href={buildUrl(link.url)}
                            className={`winston border-2 border-[#424242] px-4 py-2 mx-1 font-bold ${link.active ? 'text-white bg-[#ff5e00]' : (isNaN(link.label) ? 'bg-[#ff5e00] text-white' : 'text-gray-500')}`}
                        >
                            {i == 0 ? "«" : i == links.length - 1 ? "»" : link.label}
                        </Link>
                    ) : null
                ))}
            </div>
            : null
    )
}
