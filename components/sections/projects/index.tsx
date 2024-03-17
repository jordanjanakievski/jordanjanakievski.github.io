"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel as CarouselComponent } from "@/components/custom/carousel";

export function ProjectsSection() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="font-heading scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mb-5">
        Projects
      </h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Featured Projects
      </h3>
      <div className="flex flex-col items-center justify-center">
        <CarouselComponent
          images={[
            "images/ontolome.png",
            "images/medscrybe.png",
            "images/tces.png",
            "images/plankton_eye.png",
            "images/executive_llama.png",
          ]}
          titles={[
            "OntoloMe",
            "MedScrybe",
            "TCES CRM",
            "Plankton Eye",
            "Executive Llama",
          ]}
          urls={[
            "https://github.com/jordanjanakievski/ontolome",
            "https://github.com/jordanjanakievski/MedScrybe",
            "https://github.com/uoftblueprint/tces",
            "https://github.com/jordanjanakievski/plankton_eye",
            "https://github.com/jordanjanakievski/executive_llama",
          ]}
        />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-5 mb-5">
          Additional Projects
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-[80vw] bg-background max-w-[var(--max-width)]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="m-2">
              MIPS Assembly Breakout
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="m-2">UToronto Chess</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="m-2">
              UofT Blueprint Website
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="m-2">
              Portfolio Website
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
