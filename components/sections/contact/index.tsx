"use client";

import React from "react";

import { ContactForm } from "@/components/custom/contact-form";

export function ContactSection() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center w-[80vw] max-w-[1400px] mx-auto">
      <h1 className="font-heading scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mb-10">
        Send me a message!
      </h1>
      <ContactForm />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4">
        Or find me below...
      </h4>
    </div>
  );
}
