"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Vote } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme, resolvedTheme } = useTheme();
  const [drandLogo, setDrandLogo] = useState("/logo-drand.svg"); // Default/fallback logo

  // Update the logo when the theme is resolved
  useEffect(() => {
    if (resolvedTheme === "dark") {
      setDrandLogo("/logo-drand-white.svg");
    } else if (resolvedTheme === "light") {
      setDrandLogo("/logo-drand.svg");
    }
  }, [resolvedTheme]); // Run this effect when the resolvedTheme changes

  return (
    <section className="container w-full bg-contain bg-hero-image dark:bg-hero-image-dark">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-20 md:pt-32 pb-10 md:pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New!</Badge>
            </span>
            <a
              href="https://scroll.io/blog"
              target="_blank"
              className="hover:underline hover:decoration-2"
            >
              <span>We are live on Scroll</span>
            </a>
            <Image
              src="/scroll-logomark.svg"
              width={50}
              height={20}
              alt="Scroll ZKP Logo"
              className="h-5 w-auto ml-1"
            />
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60 leading-tight">
            Verifiable Randomness (VRF) for all EVMs
          </h1>

          <p
            className="text-lg dark:text-slate-300 mb-6 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Open-source, decentralized randomness powered by{" "}
            <a
              href="https://drand.love/"
              className="underline decoration-1 hover:decoration-2"
              target="_blank"
            >
              drand
            </a>
            .<br />
            Get started for free!
          </p>

          <div className="space-y-4 md:space-y-8 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="https://docs.anyrand.com/" target="_blank">
                View docs
                <ArrowUpRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 md:w-1/4 group/arrow"
            >
              <Link href="https://form.typeform.com/to/u4x7HLFx" target="_blank">
                Vote next EVM
                <Vote className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <h2 className="mt-10 tracking-tight">Powered by</h2>
        <div className="bg-slate-100/30 dark:bg-slate-950/30 backdrop-blur py-4 rounded">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-2">
              <div className="bg-slate-400/5 dark:bg-slate-900/5 p-8 sm:p-10">
                <a href="https://leagueofentropy.org/" target="_blank">
                  <Image
                    alt="Logo League of Entropy"
                    src="/logo-loe.png"
                    width={150}
                    height={80}
                    className="max-h-20 w-full object-contain"
                  />
                </a>
              </div>
              <div className="bg-slate-400/5 dark:bg-slate-900/5 p-6 sm:p-10">
                <a href="https://drand.love/" target="_blank">
                  <Image
                    alt="Logo drand"
                    src={drandLogo} // Dynamic logo based on the theme
                    width={150}
                    height={80}
                    className="max-h-20 w-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
