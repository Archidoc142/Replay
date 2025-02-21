import Image from "@/Components/Common/Image";
import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import Tag from "../Tag";
import gsap from "gsap";

export default function EntityNamecard({ data, genres, isAnimated = false }) {
    const [hover, setHover] = useState(false);
    const [isVisble, setIsVisble] = useState(false);
    const container = useRef(null);

    useEffect(() => {
        setIsVisble(true);
        gsap.to(container.current, {
            width: hover ? 250 : 0,
            duration: isAnimated ? 0.3 : 0,
        });
    }, [hover]);

    return (
        <div
            className="flex flex-col gap-2 text-lg relative group max-w-[250px] hover:min-w-[500px] unselectable min-h-[429px] max-h-[429px]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image
                src={"/img/" + data.meta.img_couverture}
                alt="General Entity Namecard"
                className="cursor-pointer max-w-[250px] min-h-[365px] max-h-[365px] group-hover:rounded-tl-lg group-hover:grayscale-[0.2]"
            />

            {isVisble ? (
                <div className="hidden group-hover:flex absolute w-full h-full rounded-lg overflow-hidden min-w-[250px] group-hover:min-w-[500px]">
                    <div className="flex pt-2 pl-3 pb-3 flex-col justify-between w-[250px] bg-[#181818bb]">
                        <div>
                            <p className="">{data.title}</p>
                            <p>Par: {data.author}</p>
                            <div className="flex items-center gap-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="yellow" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <p className="">{data.meta.note / 20}</p>
                            </div>
                        </div>

                        <div>
                            {data.tags && data.tags.length > 0 ? (
                                <div className="mb-6">
                                    <p className="font-bold">Genres :</p>
                                    {data.tags.map(tag => (
                                        <div key={tag} className="flex gap-2 items-center">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                                            <Tag
                                                text={genres[tag - 1].name}
                                                className="bg-transparent border-none p-0 m-0"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            <div className="flex gap-2 items-center">
                                <Link href={"/entity/" + data.category + "/" + data.id}>
                                    <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </Link>

                                <button>
                                    <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                </button>

                                <button>
                                    <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div ref={container} className="absolute left-1/2 bg-[#181818f1] h-full overflow-hidden">
                        <div className="relative min-w-[250px]">
                            <p className="text-sm absolute inset-0 p-4">{data.meta.description}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>{data.title}</p>
            )}
        </div>
    );
}
