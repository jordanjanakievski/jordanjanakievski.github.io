"use client";

import React, { useState } from "react";

import MenuIcon from "./menu-icon/menu-icon";
import { ModeToggle } from "@/components/custom/mode-toggle";

export default function Navigation({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className} flex flex-col items-end`}>
      <div className="flex flex-col absolute">
        <MenuIcon onClick={() => setIsOpen(!isOpen)} />
        {isOpen ? (
          <div className="flex flex-col items-start">
            Menu
            <ModeToggle />
            Menu Menu Menu
          </div>
        ) : null}
      </div>
    </div>
  );
}
