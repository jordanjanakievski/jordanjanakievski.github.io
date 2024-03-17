import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface CarouselProps {
  images: string[];
}

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

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
      setCurrentImage(images[(currentImageIndex + 1) % images.length]);
      setIsFading(false);
    }, 500);
  };

  const prevImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
      setCurrentImage(
        images[(currentImageIndex - 1 + images.length) % images.length]
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <button onClick={prevImage}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className="transition-colors duration-300 ease-in-out hover:border-primary border-2 border-[#F2f2f2] p-1"
          />
        </button>
        <div className="flex items-center justify-center relative">
          <img
            className="absolute z-[-1]"
            src="images/empty.png"
            alt="empty"
            style={{ width: "auto", height: "40vw", maxHeight: "700px"}}
          />
          <img
            className={`transition-opacity duration-500 ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            src={currentImage}
            alt="Project Image"
            style={{ width: "auto", height: "40vw", maxHeight: "700px"}}
          />
        </div>
        <button onClick={nextImage}>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            className="transition-colors duration-300 ease-in-out hover:border-primary border-2 border-[#F2f2f2] p-1"
          />
        </button>
      </div>
      <h2
        className={`text-4xl font-semibold tracking-tight mt-4 transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {titles[currentImageIndex]}
      </h2>
      <div>
        <Link href={urls[currentImageIndex]}>
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="mt-2 drop-shadow-lg"
          />
        </Link>
      </div>
    </div>
  );
}
