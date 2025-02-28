export default function VideoNamecard({ data, handleOpenForm }) {
    return (
        <div>
            <div className="relative">
                <div dangerouslySetInnerHTML={{ __html: data.meta.video }} />
                {handleOpenForm ?
                    <button className="pointer-events-auto absolute bottom-2 right-2" onClick={() => handleOpenForm(data.id, data.id_category)}>
                        <svg className="hover:stroke-[#ff5e00]" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button> : null
                }
            </div>

            <p className="winston text-lg mt-1">{data.title}</p>
            {data.author ? <p>Par: {data.author}</p> : null}
        </div>
    )
}
