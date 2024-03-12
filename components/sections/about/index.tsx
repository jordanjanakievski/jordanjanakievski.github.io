"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to true if you want the video to stay paused once it's out of view
  });

  return (
    <div ref={ref} className="relative mt-[10vh] mb-[10vh]">
      <div className="overflow-hidden">
        {ReactPlayer && (
          <ReactPlayer
            url="videos/movement.mp4"
            playing={inView}
            loop={true}
            muted={true}
            controls={false}
            width="100vw"
            height="100vh"
            className="blur"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h2 className="text-4xl">Words on Video</h2>
        {/* Add more text elements here */}
      </div>
    </div>
  );
}
