import { usePage } from "@inertiajs/react";
import ButtonAddList from "../ButtonAddList";

export default function VideoNamecard({ data, handleOpenForm }) {

    const like_active = usePage().props.like_playlist_array?.includes(data.id)
    const signet_active = usePage().props.signet_playlist_array?.includes(data.id)

    return (
        <div>
            <div className="relative">
                <div dangerouslySetInnerHTML={{ __html: data.meta.video }} />
                <div className="absolute bottom-1/2 right-2 flex flex-col gap-2 items-center">
                    <ButtonAddList type="like" id_entity={data.id} className="prevent-click">
                        <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={like_active ? "#ff5e00" : "none"} stroke={like_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </ButtonAddList>

                    <ButtonAddList type="signet" id_entity={data.id} className="prevent-click">
                        <svg className="hover:stroke-[#ff5e00]" width="28" height="28" viewBox="0 0 24 24" fill={signet_active ? "#ff5e00" : "none"} stroke={signet_active ? "#ff5e00" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </ButtonAddList>

                    {handleOpenForm ?
                        <button className="pointer-events-auto" onClick={() => handleOpenForm(data.id, data.id_category)}>
                            <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button> : null
                    }
                </div>
            </div>

            <p className="winston text-lg mt-1">{data.title}</p>
            {data.author ? <p>Par: {data.author}</p> : null}
        </div>
    )
}
