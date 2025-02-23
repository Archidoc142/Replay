import ShadowScreen from "./ShadowScreen";

export default function PopUp({ setShow, children }) {


    return (
        <>
            <div onClick={() => setShow(false)}>
                <ShadowScreen />
            </div>

            <div className="fixed flex flex-col z-40 bg-gray-800 rounded-xl p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg onClick={() => setShow(false)} className="absolute right-6 top-6 hover:stroke-[#4f4f4f] cursor-pointer" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                {children}
            </div>
        </>
    );
}
