"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image"; // Importing the Next.js Image component

interface sponsorsProps {
  image: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    image: "/logo-eth.svg", // Paths should be relative to the public folder
    name: "mainnet coming soon",
  },
  {
    image: "/logo-base.svg",
    name: "base coming soon",
  },
  {
    image: "/logo-scroll.svg",
    name: "live on Scroll",
  },
  {
    image: "/logo-gnosis.svg",
    name: "gnosis coming soon",
  },
  {
    image: "/logo-op.svg",
    name: "optimism coming soon",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container w-full mt-20 mb-20">
      <h2 className="tracking-tight text-xl md:text-2xl text-center mb-8 font-medium">
        Anyrand VRF coming next to
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem] [--duration:60s]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ image, name }) => (
            <div
              key={name}
              className="flex items-center text-lg md:text-xl"
            >
              <Image
                src={image}
                alt={name}
                width={24}  // Set image width
                height={24} // Set image height
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
