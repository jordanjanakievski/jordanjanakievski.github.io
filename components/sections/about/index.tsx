"use client";

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
            <img
              src="images/walnut_slab.jpg"
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
              Toronto. Having grown up in Seattle, it seems that tall
              observation towers are a common architectural theme in my life.
            </p>
            <br />
            <p>
              My passion is to continue making a difference by developing
              software to improve people&apos;s lives. Whether it be direct
              impact through a software solution or contributing to a company
              that serves to better its community, I believe software can
              empower change and lead people and organizations to achieve the
              best possible outcomes.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row items-center justify-around flex-col">
          <div className="lg:w-1/2">
            <p>
              When away from the computer, I enjoy exploring the outdoors.
              Whether it be kayaking, SCUBA diving, or rock climbing, I find
              nature to be extremely energizing. I also enjoy playing tennis and
              soccer as well as being a referee for youth soccer on the
              weekends.
            </p>
            <br />
            <p>
              I am also a budding horologist. While I only have a small
              collection, I love learning about the mechanisms of a watch and
              how each one tells a unique story of its wearer. One really
              develops a symbiotic relationship with their timepiece, as it
              becomes a part of their daily routine and given life through use.
            </p>
            <br />
          </div>
          <div className="flex flex-col items-center lg:ml-8">
            <div className="flex items-end justify-center space-x-4">
              <Image
                src="/images/framed_turtle.png"
                alt="framed photo of Jordan"
                width={150}
                height={150}
                className="w-[100px] lg:w-[150px]"
              />
              <Image
                src="/images/framed_watch.png"
                alt="framed photo of Jordan"
                width={200}
                height={200}
                className="w-[150px] lg:w-[200px]"
              />
            </div>
            <img
              src="images/walnut_slab.jpg"
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
