import React from "react";
import Link from "next/link";
import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiGitlabLogoThin } from "react-icons/pi";
import { PiGitBranchThin } from "react-icons/pi";
import { PiEnvelopeThin } from "react-icons/pi";

export function FooterSection() {
  return (
    <div className="bg-background mt-10 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row space-x-4">
          <Link
            href="https://github.com/jordanjanakievski"
            className="drop-shadow-lg hover:drop-shadow-xl"
          >
            <PiGithubLogoThin size={30}/>
          </Link>
          <Link
            href="https://linkedin.com/in/jordan-janakievski"
            className="drop-shadow-lg"
          >
            <PiLinkedinLogoThin size={30}/>
          </Link>
          <Link
            href="https://gitlab.com/jordanjanakievski"
            className="drop-shadow-lg"
          >
            <PiGitlabLogoThin size={30}/>
          </Link>
          <Link
            href="https://github.com/jordanjanakievski/jordanjanakievski.github.io"
            className="drop-shadow-lg"
          >
            <PiGitBranchThin size={30}/>
          </Link>
          <Link
            href="mailto:jordan.Link.janakievski@gmail.com"
            className="drop-shadow-lg"
          >
            <PiEnvelopeThin size={30}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
