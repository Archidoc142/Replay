import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function LoadingScreen({ setIsLoading, setLoadingProgress, progress }) {
    const spinnerRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            spinnerRef.current,
            { rotation: 0 },
            { rotation: 360, repeat: -1, duration: 1, ease: 'linear' }
        )
    }, [])

    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImages = 0;

        const updateProgress = () => {
            loadedImages++;
            const progress = (loadedImages / images.length) * 100;
            setLoadingProgress(progress);

            if (loadedImages === images.length) {
                setIsLoading(false);
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                updateProgress();
            } else {
                img.onload = updateProgress;
                img.onerror = updateProgress;
            }
        });

        if (images.length === 0) {
            setIsLoading(false);
        }

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [setIsLoading, setLoadingProgress]);

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
    )
}
