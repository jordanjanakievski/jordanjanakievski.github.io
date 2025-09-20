import React, { useCallback, useEffect, useRef, useState } from "react";

import { PiArrowLeft } from "react-icons/pi";
import { PiArrowRight } from "react-icons/pi";

import Link from "next/link";
import Image from "next/image";

export function Carousel({
    images,
    titles,
    urls,
}: {
    images: string[];
    titles: string[];
    urls: string[];
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [isFading, setIsFading] = useState(false);

    // Ref to store interval ID
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Helper to clear and restart interval
    const resetInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            nextImage(true); // true = auto
        }, 10000);
    }, []);

    // Next image handler
    const nextImage = useCallback(
        (auto = false) => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % images.length;
                    setCurrentImage(images[nextIndex]);
                    setIsFading(false);
                    return nextIndex;
                });
            }, 700);

            // Only reset timer if user clicked (not auto)
            if (!auto) resetInterval();
        },
        [images, resetInterval],
    );

    // Previous image handler
    const prevImage = useCallback(() => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex =
                    (prevIndex - 1 + images.length) % images.length;
                setCurrentImage(images[nextIndex]);
                setIsFading(false);
                return nextIndex;
            });
        }, 700);

        resetInterval();
    }, [images, resetInterval]);

    // Set up interval on mount and cleanup
    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [resetInterval]);

    return (
        <div className="flex flex-col items-center justify-center">
            <h4
                className={`transition-opacity duration-700 ease-in-out mt-4 text-lg sm:text-xl italic ${
                    isFading ? "opacity-0" : "opacity-100"
                }`}
            >
                {titles[currentImageIndex]}
            </h4>
            <div className="flex flex-row">
                <div className="flex items-center justify-center">
                    <button onClick={prevImage}>
                        <PiArrowLeft
                            size={50}
                            className="
                    w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                    xl:w-[50px] xl:h-[50px]transition-colors duration-300
                    ease-in-out hover:border-primary border-background border-2
                    p-1
                  "
                        />
                    </button>
                </div>
                <div className="flex items-center justify-center relative">
                    <div className="w-auto h-[39.5vw] max-h-[694px]">
                        <Image
                            className="absolute z-[-1]"
                            src="images/empty.png"
                            alt="Blank MacBook Pro"
                            style={{
                                height: "40vw",
                                maxHeight: "700px",
                                width: "auto",
                            }}
                            width={500}
                            height={300}
                        />
                        <Link href={urls[currentImageIndex]}>
                            <Image
                                className={`transition-opacity duration-700 ease-in-out ${
                                    isFading ? "opacity-0" : "opacity-100"
                                }`}
                                src={currentImage}
                                alt="Project Image on MacBook Pro"
                                style={{
                                    height: "40vw",
                                    maxHeight: "700px",
                                    width: "auto",
                                }}
                                width={500}
                                height={300}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={() => nextImage()}>
                        <PiArrowRight
                            size={50}
                            className="
                    w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[50px] xl:h-[50px]
                    transition-colors duration-300 ease-in-out
                    hover:border-primary border-background border-2 p-1
                  "
                        />
                    </button>
                </div>
            </div>
            <Image
                src="images/walnut_slab.jpg"
                alt="desk"
                width={500}
                height={300}
                className="w-[100vw] xs:h-6 sm:h-8 md:h-10 h-4"
                style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
            />
        </div>
    );
}
