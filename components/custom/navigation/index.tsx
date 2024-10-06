"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/custom/mode-toggle";

// import MenuIcon from "./menu-icon/menu-icon";
import Logo from "@/assets/icons/logo.png";

export default function Navigation({ className }: { className?: string }) {
  return (
    <div className="xs:px-10 px-3">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Jordan Janakievski Logo"
            width={80}
            className="mt-2 mb-2"
          />
        </Link>
        {/* <ModeToggle /> */}
      </div>
      <div className="flex xs:flex-row-reverse flex-col items-center">
        <div className="flex flex-row space-x-6">
          <Link href="/about">
            <h6 className="font-heading text-lg border-t border-transparent hover:border-blue-500 transition-border duration-300 ease-in-out delay-200">
              About
            </h6>
          </Link>
          <h6 className="font-heading text-lg">/</h6>
          <Link href="/projects">
            <h6 className="font-heading text-lg border-t border-transparent hover:border-blue-500 transition-border duration-300 ease-in-out delay-200">
              Projects
            </h6>
          </Link>
          <h6 className="font-heading text-lg">/</h6>
          <Link href="/contact">
            <h6 className="font-heading text-lg border-t border-transparent hover:border-blue-500 transition-border duration-300 ease-in-out delay-200">
              Contact
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
}
