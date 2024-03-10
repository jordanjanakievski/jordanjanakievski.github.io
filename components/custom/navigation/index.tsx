"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MenuIcon from "./menu-icon/menu-icon";
import { ModeToggle } from "@/components/custom/mode-toggle";
import Logo from "@/assets/icons/logo.png";

export default function Navigation({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row">
      <div>
        <Link href="/">
          <Image
            src={Logo}
            alt="Jordan Janakievski Logo"
            width={50}
            className="m-2"
          />
        </Link>
      </div>
      <div className="absolute top-0 right-0 m-4 flex flex-col items-end">
        <div className="flex flex-row absolute">
          <ModeToggle />
          <MenuIcon onClick={handleClick} />
          <div
            className={`absolute top-10 right-0 m-4 flex flex-col items-center transition-opacity duration-500 ease-in-out ${
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
        </div>
      </div>
    </div>
  );
}
