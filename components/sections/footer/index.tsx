import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function FooterSection() {
  return (
    <div className="bg-background mt-10 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row space-x-4">
          <Link
            href="https://github.com/jordanjanakievski"
            className="drop-shadow-lg hover:drop-shadow-xl"
          >
            <FontAwesomeIcon icon={faGithub} color="#6e5494 " className="h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/jordan-janakievski"
            className="drop-shadow-lg"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#0077B5"
              className="h-6"
            />
          </Link>
          <Link
            href="https://gitlab.com/jordanjanakievski"
            className="drop-shadow-lg"
          >
            <FontAwesomeIcon
              icon={faGitlab}
              color="orange"
              className="h-6 drop-shadow-sm"
            />
          </Link>
          <Link
            href="https://github.com/jordanjanakievski/jordanjanakievski.github.io"
            className="drop-shadow-lg"
          >
            <FontAwesomeIcon
              icon={faCodeBranch}
              color="#6cc644"
              className="h-6"
            />
          </Link>
          <Link
            href="mailto:jordan.Link.janakievski@gmail.com"
            className="drop-shadow-lg"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#FF2929"
              className="h-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
