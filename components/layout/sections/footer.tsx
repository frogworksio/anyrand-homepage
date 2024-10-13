"use client";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react"; // Add useState to manage the notification visibility

export const FooterSection = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <footer id="footer" className="container py-24 sm:py-32">
        <div className="p-10 bg-card border border-secondary rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8">
            <div className="col-span-full xl:col-span-2">
              <Link href="https://docs.anyrand.com/" target="_blank" className="flex font-bold items-center">
                <h3 className="text-2xl">🎲</h3>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Development</h3>
              <div>
                <Link href="https://dice.anyrand.com/" target="_blank" className="opacity-60 hover:opacity-100">
                  Documentation
                </Link>
              </div>
              <div>
                <Link href="https://github.com/frogworksio/anyrand" target="_blank" className="opacity-60 hover:opacity-100">
                  GitHub
                </Link>
              </div>
              <div>
                <Link href="#" className="opacity-60 hover:opacity-100">
                  TX Explorer <Badge variant="secondary">coming soon</Badge>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Contact</h3>
              <div>
                <Link href="https://x.com/anyrandVRF" target="_blank" className="opacity-60 hover:opacity-100">
                  Twitter/X
                </Link>
              </div>
              <div>
                <Link href="https://t.me/anyrandVRF" target="_blank" className="opacity-60 hover:opacity-100">
                  Telegram
                </Link>
              </div>
              <div>
                <Link href="mailto:gm@anyrand.com" target="_blank" className="opacity-60 hover:opacity-100">
                  Email
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <section className="">
            <h3 className="">
              &copy; 2024 Made by
              <Link
                target="_blank"
                href="https://frogworks.io"
                className="text-primary transition-all underline decoration-1 hover:decoration-2 ml-1"
              >
                Frogworks
              </Link>
            </h3>
          </section>
        </div>
      </footer>

      {/* Notification Bar */}
      {visible && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gradient-to-r from-slate-900 to-slate-500 bg-slate-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-white">
              <a href="http://dice.anyrand.com/">
                <strong className="font-semibold">Mint NOW!</strong>
                &nbsp;🎲&nbsp;Celebrate Scroll EVM launch with us and mint commemorative dice NFT!&nbsp;🎲
              </a>
            </p>
            <button
              type="button"
              onClick={() => setVisible(false)} // Hide notification on click
              className="-m-1.5 flex-none p-1.5"
            >
              <span className="sr-only">Dismiss</span>
              <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
