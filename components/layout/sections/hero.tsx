"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Vote } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full bg-contain bg-hero-image dark:bg-hero-image-dark">

      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New!</Badge>
            </span>
            <a href="#"><span>We are live on Scroll</span></a>
            <img src="/scroll-logomark.svg" className="h-5 w-auto ml-1" alt="Scroll ZKP Logo" />
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60 leading-tight">
            Verifiable Randomness (VRF) for all EVMs
          </h1>

          <p className="text-lg dark:text-slate-300 mb-6 aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
            Open-source, decentralized randomness powered by <a href="https://drand.love/" className="underline decoration-1 hover:decoration-2" target="_blank">drand</a>.<br />
            Get started for free!
          </p>

          <div className="hidden sm:block mb-14">
            <span className="text-slate-500 text-xs font-bold font-mono">Celebrate Scroll EVM launch with us!</span>
            <div className="mb-6">
              <div className="inline-flex relative before:absolute">
                <a target="_blank" rel="noopener noreferrer" className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-slate-800 before:rounded-lg before:pointer-events-none flex flex-col items-center" href="http://dice.anyrand.com/">
                  <span className="relative inline-flex items-center">
                    <span className="mr-2" style={{ userSelect: "none", WebkitUserSelect: "none" }}>🎲</span>
                    <pre>Mint commemorative NFT</pre>
                    <span className="ml-2" style={{ userSelect: "none", WebkitUserSelect: "none" }}>🎲</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-8 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              View docs
              <ArrowUpRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 md:w-1/4 group/arrow"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Vote next EVM
                <Vote className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
