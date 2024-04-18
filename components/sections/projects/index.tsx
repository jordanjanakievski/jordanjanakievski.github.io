import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel as CarouselComponent } from "@/components/custom/carousel";

import { PiGithubLogoThin } from "react-icons/pi";

type ProjectType = {
  title: string;
  url: string;
  description: string;
};

export function ProjectsSection({ data }: { data: any }) {
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
          images={data.images}
          titles={data.titles}
          urls={data.urls}
        />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-16 mb-5">
          Additional Projects
        </h3>
        <Accordion
          type="single"
          collapsible
          className="w-[80vw] bg-background max-w-[var(--max-width)]"
        >
          {data.additional_projects.map(
            (project: ProjectType, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="m-2">
                  {project.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-row justify-between font-sans">
                  <div className="m-2">{project.description}</div>
                  <Link href={project.url} className="m-2">
                    <PiGithubLogoThin size={20} />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
}
