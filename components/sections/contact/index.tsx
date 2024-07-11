"use client";

import React from "react";

import { ContactForm } from "@/components/custom/contact-form";
import { Button } from "@/components/ui/button";
import { PiPaperPlaneTiltThin } from "react-icons/pi";
import Link from "next/link";

export function ContactSection() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center w-[80vw] max-w-[1400px] mx-auto">
      <h1 className="font-heading scroll-m-20 font-extrabold tracking-tight text-2xl xs:text-3xl sm:text-5xl lg:text-6xl mb-10">
        Send me a message!
      </h1>
      {/* on button click open an email address */}
      <Link href="mailto:jordan.a.janakievski@gmail.com">
        <Button>
          <PiPaperPlaneTiltThin size={20} className="mr-2" />
          Send
        </Button>
      </Link>
      {/* <ContactForm /> */}
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-8">
        Or find me below...
      </h4>
    </div>
  );
}
