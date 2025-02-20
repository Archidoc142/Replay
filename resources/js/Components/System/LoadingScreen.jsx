import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ progress }) => {
    const spinnerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            spinnerRef.current,
            { rotation: 0 },
            { rotation: 360, repeat: -1, duration: 1, ease: 'linear' }
        );
    }, []);

    return (
        <div className="fixed inset-0 center flex-col bg-black z-50 unselectable">
            <div
                ref={spinnerRef}
                className="w-12 h-12 border-4 border-gray-200 border-t-[#ff5e00] rounded-full"
            ></div>
            <p className="mt-4 font-semibold">
                Chargement... {Math.round(progress)}%
            </p>
        </div>
    );
};

export default LoadingScreen;
