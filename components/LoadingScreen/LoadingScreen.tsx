/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { VideoText } from "@/components/magicui/video-text";
import { ClientOnly } from "./ClientOnly";


export default function LoadingScreen({ children }: { children: React.ReactNode }) {
    const [step, setStep] = useState(0); // loading step
    const [visible, setVisible] = useState(true); // fade out loader
    const [showChildren, setShowChildren] = useState(false); // for fading in page

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 2000), // Show logo + loader
            setTimeout(() => {
                setVisible(false); // Fade out logo screen
                setTimeout(() => {
                    setStep(2); // Go to children
                    setShowChildren(true); // Trigger fade-in
                }, 700); // Match fade-out duration
            }, 4000),
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    // Step 0 + 1 combined screen
    if (step < 2) {
        return (
            <div className="relative h-screen w-full overflow-hidden bg-background">
                {/* Step 0 - VideoText welcome */}
                <div
                    className={clsx(
                        "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out",
                        step === 0 && visible ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"
                    )}
                >
                    <div className="relative h-full w-full max-w-7xl mx-auto bg-background">
                        <ClientOnly>
                            <VideoText src="https://cdn.magicui.design/ocean-small.webm">
                                WELCOME
                            </VideoText>
                        </ClientOnly>
                    </div>
                </div>

                {/* Step 1 - Logo + loader */}
                <div
                    className={clsx(
                        "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-background text-black",
                        step === 1 && visible ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"
                    )}
                >
                    <img src="/adnanLogo.svg" alt="Logo" className="w-48 h-48 mb-6 animate-fadeInUp" />
                    <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Step 2 - Fade in actual page content
    return (
        <div
            className={clsx(
                "transition-opacity duration-700 ease-in-out",
                showChildren ? "opacity-100" : "opacity-0"
            )}
        >
            {children}
        </div>
    );
}
