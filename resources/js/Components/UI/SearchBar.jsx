export default function SearchBar({onChange, value, processing, className}) {
    return(
        <div className={"flex justify-center my-3 " + className}>
            <div className="flex items-center bg-[#3a3a3a88] w-[55%] max-w-[750px] rounded-full overflow-hidden py-1 px-4 border-2 border-[#ff5e00]">
                <input
                    className="w-full bg-transparent rounded-full border-0 text-white text-lg winston"
                    type="text"
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Rechercher..."
                    value={value}
                />

                <button type="submit" disabled={processing} className="group">
                    <svg className="group-hover:stroke-gray-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
            </div>
        </div>
    )
}
