"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to true if you want the video to stay paused once it's out of view
  });

  return (
    <div>
      <div className="flex min-h-[100vh] flex-col items-center justify-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl xl:text-9xl">
          Jordan Janakievski
        </h1>
      </div>
      <div ref={ref} className="relative mt-[10vh] mb-[10vh]">
        {ReactPlayer && (
          <ReactPlayer
            url="videos/movement.mp4"
            playing={inView}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="auto"
            className=" blur"
          />
        )}
        {/* <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        /> */}
        <div className="absolute inset-0 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 blur" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h2 className="text-4xl">Words on Video</h2>
          {/* Add more text elements here */}
        </div>
      </div>
      <div className="h-[100vh]">
        <p className="text-2xl">Hello World</p>
      </div>
      <div className="h-dvh">
        <p className="text-2xl">Hello World</p>
      </div>
    </div>
  );
}
