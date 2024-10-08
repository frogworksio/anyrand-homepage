"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">

<div className="pt-48 pb-48 md:pt-48 md:pb-36 xl:pt-64 xl:pb-36">
  <div className="max-w-3xl mx-auto text-center">
    <div className="mb-10 aos-init aos-animate" data-aos="fade-down">
      <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-700 before:bg-opacity-80 before:blur-lg px-2 rounded-full">
        <span>
          <a href="https://www.ycombinator.com/companies/stack-auth" target="_blank">
            <span className="relative inline-flex items-center">
              Backed by 
              <img src="https://stack-auth.com/images/yc-expanded-orange.svg" className="h-5 w-auto ml-2" alt="Y Combinator Logo" />
            </span>
          </a>
        </span>
      </div>
    </div>
    
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-200/60 dark:via-slate-200 dark:to-slate-200/60 pb-4 leading-tight aos-init aos-animate" data-aos="fade-down">
      The&nbsp;open-source Auth0&nbsp;alternative.
    </h1>
    
    <p className="text-lg dark:text-slate-300 mb-6 aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
      We build your sign in page so you don't have to.<br />
      AuthN, authZ, and user management in just 5 minutes.
    </p>
    
    <div className="hidden sm:block mb-14 aos-init aos-animate" data-aos="fade-down" data-aos-delay="400">
      <span className="text-slate-400 text-xs font-bold font-mono">Next.js setup wizard:</span>
      <div className="mb-6 aos-init aos-animate" data-aos="fade-down">
        <div className="inline-flex relative before:absolute">
          <a target="_blank" rel="noopener noreferrer" className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-slate-800 before:rounded-lg before:pointer-events-none flex flex-col items-center" href="https://docs.stack-auth.com/getting-started/setup">
            <span className="relative inline-flex items-center">
              <span className="mr-2" style={{ userSelect: "none", WebkitUserSelect: "none" }}>$</span>
              <pre>npx @stackframe/init-stack@latest</pre>
            </span>
          </a>
        </div>
      </div>
    </div>
    
    <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 aos-init aos-animate" data-aos="fade-down" data-aos-delay="600">
      <div>
        <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group text-base" href="https://docs.stack-auth.com/getting-started/setup">
          Get Started <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
        </a>
      </div>
      <div>
        <a className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out text-base" href="https://discord.stack-auth.com/">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
          </svg>
          <span className="ml-2">Join Discord</span>
        </a>
      </div>
    </div>
    
    <a target="_blank" className="sm:block mt-4 text-sm text-white aos-init" data-aos="fade-down" data-aos-delay="600" href="https://docs.stack-auth.com">
      <span className="hover:underline">Visit docs</span> 
      <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
    </a>
  </div>
</div>



      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Experience the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Shadcn
              </span>
              landing page
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`We're more than just a tool, we're a community of passionate
            creators. Get access to exclusive resources, tutorials, and support.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
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
