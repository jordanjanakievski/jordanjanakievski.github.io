import Link from "next/link";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] space-y-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading">
        404 - Page Not Found
      </h1>
      <Link href="/">
        <Button>Go back home</Button>
      </Link>
    </div>
  );
}
