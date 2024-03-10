"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl xl:text-9xl font-heading">
          Jordan Janakievski
        </h1>
      </div>
      <div className="h-dvh">
        <p className="text-2xl">Hello World</p>
      </div>
    </div>
  );
}
