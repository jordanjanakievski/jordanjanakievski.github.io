"use client";

import { PaperAirplane } from "./paper-airplane";

export function Hero() {
  return (
    <div className="flex items-center justify-center min-h-[75vh]">
      <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl xl:text-9xl">
        Jordan Janakievski
      </h1>
      <PaperAirplane />
    </div>
  );
}
