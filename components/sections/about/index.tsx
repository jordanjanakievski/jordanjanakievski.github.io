"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="mt-10 mb-[20vh] flex flex-col items-center w-[80vw] max-w-[1400px] mx-auto">
      <h1 className="font-heading scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mb-10">
        About
      </h1>

      <div className="flex flex-col items-center justify-center">
        <div className="flex lg:flex-row items-center justify-around lg:pb-16 pb-8 flex-col">
          <div className="flex flex-col items-center pb-8 lg:pb-0">
            <Image
              src="/images/framed_profile.png"
              alt="framed photo of Jordan"
              width={200}
              height={200}
              className="w-[150px] lg:w-[200px]"
            />
            <Image
              src="images/walnut_slab.jpg"
              width={200}
              height={16}
              alt="desk"
              className="h-4 lg:w-[250px] w-[200px]"
              style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
            />
          </div>
          <div className="lg:w-1/2">
            <p>Hi, my name is Jordan!</p>
            <br />
            <p>
              I am an undergrad studying computer science at the University of
              Toronto. Having grown up in Seattle, it seems that{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline text-blue-600 hidden sm:inline">
                    tall observation towers
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border-2">
                    <div className="flex flex-col justify-center items-center text-black text-sm content-between">
                      <a
                        className="p-1"
                        href="https://en.wikipedia.org/wiki/Space_Needle"
                      >
                        Space Needle
                      </a>
                      <br />
                      <a
                        className="p-1"
                        href="https://en.wikipedia.org/wiki/CN_Tower"
                      >
                        CN Tower
                      </a>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <DropdownMenu>
                <DropdownMenuTrigger className="underline text-blue-600 sm:hidden">
                  tall observation towers
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-2">
                  <div className="flex flex-col justify-center items-center text-black text-sm content-between">
                    <a
                      className="p-1"
                      href="https://en.wikipedia.org/wiki/Space_Needle"
                    >
                      Space Needle
                    </a>
                    <br />
                    <a
                      className="p-1"
                      href="https://en.wikipedia.org/wiki/CN_Tower"
                    >
                      CN Tower
                    </a>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>{" "}
              are a common architectural theme in my life.
            </p>
            <br />
            <p>
              I like to solve hard problems that make a real difference. Whether
              it be improving the experience for a user or developing full
              systems with{" "}
              <a
                className="underline text-blue-600"
                href="https://uoftblueprint.org"
              >
                Blueprint
              </a>
              , I have seen first-hand how improvements in software can change
              the way one works. Because of this, I am constantly trying to hone
              my craft and find new opportunities to learn. Currently, I am
              looking into contributing to some of my favorite open-source
              projects.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row items-center justify-around flex-col">
          <div className="lg:w-1/2">
            <p>
              When away from the keyboard, I enjoy exploring the outdoors.
              Whether it be kayaking, SCUBA diving, or hiking, I find these
              activities to be extremely energizing. Sports are another great
              way to decompress. Both playing and officiating give me
              opportunities to stay active and connect with others.
            </p>
            <br />
            <p>
              I am also a budding{" "}
              <a
                className="underline text-blue-600"
                href="https://en.wikipedia.org/wiki/Chronometry"
              >
                horologist
              </a>
              . While I only have a small{" "}
              <a
                className="underline text-blue-600"
                href="https://community.hodinkee.com/members/JSquared"
              >
                collection
              </a>
              , I love learning about the movements and how each watch tells a
              unique story about its wearer. You often develop a symbiotic
              relationship with your timepieces, as they become a part of your
              daily routine and given life through use.
            </p>
            <br />
          </div>
          <div className="flex flex-col items-center lg:ml-8">
            <div className="flex items-end justify-center space-x-4">
              <Image
                src="/images/framed_watch.png"
                alt="framed photo of wrist watch"
                width={150}
                height={150}
                className="w-[100px] lg:w-[150px]"
              />
              <Image
                src="/images/framed_scuba.png"
                alt="framed photo of Jordan scuba diving"
                width={200}
                height={200}
                className="w-[150px] lg:w-[200px]"
              />
            </div>
            <Image
              src="images/walnut_slab.jpg"
              width={350}
              height={16}
              alt="desk"
              className="h-4 lg:w-[450px] w-[350px]"
              style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
