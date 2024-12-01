import Image from "next/image";
import { Hero } from "@/components/hero";
import { Envelope, Telephone } from "@mynaui/icons-react";
export default function Home() {
  return (
    <main>
      <Hero ><><div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        <Image
          className="invert dark:invert-0"
          src="/vavicom-logo-1_white.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Kompleksowa obsługa księgowa
          <p className="text-center flex items-center justify-center gap-1">
            <Telephone />+48 884 267 820
          </p>
          <p className="text-center flex items-center justify-center gap-1">
            <Envelope />info@vavicom.pl
          </p>
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          KONTAKT
        </button>
      </>
      </Hero>
    </main>
  );
}

