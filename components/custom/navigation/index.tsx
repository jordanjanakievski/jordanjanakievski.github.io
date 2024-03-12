"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/custom/mode-toggle";

// import MenuIcon from "./menu-icon/menu-icon";
import Logo from "@/assets/icons/logo.png";

export default function Navigation({ className }: { className?: string }) {
  return (
    <div className="w-[var(--max-width)] w-[50vw] min-w-full">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Jordan Janakievski Logo"
            width={80}
            className="m-2"
          />
        </Link>
        <ModeToggle />
      </div>
      {/* <div className="m-4 flex flex-col items-end">
        <div className="flex flex-row absolute">
          <MenuIcon onClick={handleClick} />
          <div
            className={`top-10 right-0 m-4 flex flex-col items-center transition-opacity duration-500 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              href="/about"
              className="transition-opacity duration-500 ease-in-out delay-200 opacity-0"
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="transition-opacity duration-500 ease-in-out delay-400 opacity-0"
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="transition-opacity duration-500 ease-in-out delay-600 opacity-0"
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              Contact
            </Link>
          </div>
        </div> */}
      <div className="flex flex-row-reverse">
        <div className="flex flex-row space-x-6">
          <Link href="/about">
            <h6 className="font-heading text-lg border-t border-transparent hover:border-red-500 transition-border duration-700 ease-in-out delay-200">
              About
            </h6>
          </Link>
          <h6 className="font-heading text-lg">/</h6>
          <Link href="/projects">
            <h6 className="font-heading text-lg border-t border-transparent hover:border-red-500 transition-border duration-700 ease-in-out delay-200">
              Projects
            </h6>
          </Link>
          <h6 className="font-heading text-lg">/</h6>
          <Link href="/contact">
            <h6 className="font-heading text-lg border-t border-transparent hover:border-red-500 transition-border duration-700 ease-in-out delay-200">
              Contact
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
}
