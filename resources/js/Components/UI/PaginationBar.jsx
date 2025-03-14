import { Link, usePage } from "@inertiajs/react";

export default function PaginationBar({ links, params = null }) {

    const { url } = usePage()
    const searchParams = new URLSearchParams(new URL(window.location.origin + url).search)
    const pageNo = parseInt(searchParams.get("page") || 1, 10)

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

    function formatLinks() {
        if (links.length < 13) return links

        let paginatedLinks = [];
        const isInDefault = pageNo < 3 || pageNo > links.length - 3

        const firstLinks = links.slice(1, 3)
        const lastLinks = links.slice(-3, -1)

        const leftMidLinks = isInDefault
            ? links.slice(3, 5)
            : pageNo - 2 < 3
                ? links.slice(3, pageNo)
                : links.slice(pageNo - 2, pageNo)

        const rightMidLinks = isInDefault
            ? links.slice(-5, -3)
            : pageNo + 3 > links.length - 3
                ? links.slice(pageNo + 1, -3)
                : links.slice(pageNo + 1, pageNo + 3)

        paginatedLinks.push(links[0])
        paginatedLinks.push(...firstLinks)

        if (leftMidLinks.length > 0 && (parseInt(leftMidLinks[0].label) != 3)) paginatedLinks.push({ label: '...', url: null })

        paginatedLinks.push(...leftMidLinks)

        if (pageNo > 2 && pageNo < links.length - 3) paginatedLinks.push(links[pageNo]);
        if (rightMidLinks.length > 0 && (pageNo + 1 != parseInt(rightMidLinks[0].label))) paginatedLinks.push({ label: '...', url: null })

        paginatedLinks.push(...rightMidLinks)

        if (rightMidLinks.length > 0 && lastLinks.length > 0 && (parseInt(rightMidLinks[rightMidLinks.length - 1].label) + 1 != parseInt(lastLinks[0].label))) paginatedLinks.push({ label: '...', url: null })

        paginatedLinks.push(...lastLinks)
        paginatedLinks.push(links[links.length - 1])

        return paginatedLinks
    }

    const displayedLink = formatLinks(links)

    return (
        links.length > 3 ?
            <div className="py-6 text-center">
                {displayedLink.map((link, i) => (
                    link.label != "..." ? (
                        link.url ? (
                            <Link
                                key={i}
                                href={buildUrl(link.url)}
                                className={`winston border-2 border-[#424242] px-4 py-2 mx-1 font-bold ${link.active ? 'text-white bg-[#ff5e00]' : (isNaN(link.label) ? 'bg-[#ff5e00] text-white' : 'text-gray-500')}`}
                            >
                                {i == 0 ? "«" : i == displayedLink.length - 1 ? "»" : link.label}
                            </Link>
                        ) : null
                    ) : (<span key={i} className="mx-1">{link.label}</span>)
                ))}
            </div>
            : null
    )
}
