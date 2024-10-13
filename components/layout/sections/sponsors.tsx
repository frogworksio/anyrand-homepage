"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface sponsorsProps {
  image: string; // Updated from 'icon' to 'image'
  name: string;
}

// Replace the 'icon' field with 'image', pointing to the images in the public folder
const sponsors: sponsorsProps[] = [
  {
    image: "logo-eth.svg",
    name: "mainnet coming soon",
  },
  {
    image: "logo-base.svg",
    name: "base coming soon",
  },
  {
    image: "logo-scroll.svg",
    name: "live on Scroll",
  },
  {
    image: "logo-gnosis.svg",
    name: "gnosis coming soon",
  },
  {
    image: "logo-op.svg",
    name: "optimism coming soon",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container w-full mt-20 mb-20">
      <h2 className="tracking-tight text-lg md:text-xl text-center mb-8">
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
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <img
                src={image}
                alt={name}
                className="mr-2"
                height={24}
                width={24}
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
