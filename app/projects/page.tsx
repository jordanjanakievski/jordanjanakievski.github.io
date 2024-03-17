"use client";

import data from "@/data/projects.json";
import { ProjectsSection } from "@/components/sections/projects";

export default async function Projects() {
  return <ProjectsSection data={data}/>;
}
