import Link from "next/link";
import { Button } from "@/components/ui/button";

import { PaperAirplane } from "@/components/custom/paper-airplane";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh] space-y-8">
      <PaperAirplane />
      <h1 className="font-heading text-3xl font-extrabold tracking-tight 2xs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
        Oops!
      </h1>
      <h2 className="font-heading text-xl font-extrabold tracking-tight 2xs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center">
        Looks like you have flown off course
      </h2>

      <Link href="/">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}
