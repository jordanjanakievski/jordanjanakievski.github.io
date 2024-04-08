import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  const [isLettersFading, setIsLettersFading] = useState(false);

  const nextImage = () => {
    setIsFading(true);
    setIsLettersFading(true);
    setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
      setCurrentImage(images[(currentImageIndex + 1) % images.length]);
      setIsFading(false);
    }, 700);
    setTimeout(() => {
      setIsLettersFading(false);
    }, 1500);
  };

  const prevImage = () => {
    setIsFading(true);
    setIsLettersFading(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
      setCurrentImage(
        images[(currentImageIndex - 1 + images.length) % images.length]
      );
      setIsFading(false);
    }, 700);
    setTimeout(() => {
      setIsLettersFading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <div className="flex items-center justify-center">
          <button onClick={prevImage}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2x"
              className="transition-colors duration-300 ease-in-out hover:border-primary border-background border-2 p-1"
            />
          </button>
        </div>
        <div className="flex items-center justify-center relative">
          <div style={{ width: "auto", height: "39.5vw", maxHeight: "700px" }}>
            <img
              className="absolute z-[-2]"
              src="images/empty.png"
              alt="empty"
              style={{ width: "auto", height: "40vw", maxHeight: "700px" }}
            />
            <div
              className={`text-secondary absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-opacity duration-[3s] ease-in-out ${
                isLettersFading ? "opacity-0" : "opacity-100"
              }`}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight mt-4">
                {titles[currentImageIndex]}
              </h2>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="mt-4 drop-shadow-lg"
              />
            </div>
            <Link href={urls[currentImageIndex]}>
              <img
                className={`transition-opacity duration-700 ease-in-out hover:opacity-0 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
                src={currentImage}
                alt="Project Image"
                style={{ width: "auto", height: "40vw", maxHeight: "700px" }}
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={nextImage}>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="2x"
              className="transition-colors duration-300 ease-in-out hover:border-primary border-background border-2 p-1"
            />
          </button>
        </div>
      </div>
      <img
        src="images/desk.jpg"
        alt="desk"
        className="w-[100vw] xs:h-6 sm:h-8 md:h-10 h-4"
      />
    </div>
  );
}
