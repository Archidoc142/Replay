import { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MessageFlash({ status, message, visibility, duration = 3, setVisibility }) {

    const [visible, setVisible] = useState(false)
    const container = useRef()


    useEffect(() => {
        setVisible(visibility)
    }, [visibility])

    useGSAP(() => {
        if (visible) {
            gsap.timeline().fromTo(
                container.current,
                {
                    x: window.innerWidth,
                    opacity: 0
                },
                {
                    x: (window.innerWidth * 0.95) - container.current.offsetWidth,
                    opacity: 1,
                    ease: "elastic.out(1, 0.5)",
                    duration: duration - 1,
                }
            )
            .to(container.current, {
                opacity: 0,
                duration: 1,
                delay: duration - 1,
                ease: "power1.in",
                onComplete: () => {
                    setVisible(false);
                    setVisibility(false);
                }
            });
        }
    }, [visible])

    return (

        <div ref={container} className="fixed left-2 top-20 min-w-[350px] z-50">
        {visible ?
            <div className={`flex gap-4 items-center px-4 rounded-[15px] text-center text-white text-lg bg-gradient-to-r from-[#041a37] to-[#0d3466] border-2 top-[8%] py-3
             ${status === 1 ? "border-[#1f8444]" :
                    status === 2 ? "border-[#dcb43a]" :
                        status === 3 ? "border-[#86211f]" : null
                }`}>

                {status === 1 ?
                    <svg width="20" height="20" fill="#1f8444" className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                    </svg>
                    :
                    status === 2 ?
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#a38322" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01"></path>
                        </svg> :
                        status === 3 ?
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2 A10 10 0 1 1 12 22 A10 10 0 1 1 12 2 M15 9 L9 15 M9 9 L15 15" stroke="#86211f" strokeWidth={2} />
                            </svg>
                            : null}

                <p>{message}</p>
            </div> : null}
        </div>
    )
}
