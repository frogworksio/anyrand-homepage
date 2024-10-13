import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20 bg-slate-200 dark:bg-slate-950 rounded">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <DiscordIcon />
                <div>
                  Developer
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#2197D4] to-primary bg-clip-text">
                    Support
                  </span> chat
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join our anyrand VRF Developer Support Telegram group! Get first-hand support from our team. Connect and let&apos;s chat about your verifiable randomness 🎲 use case with us!
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://t.me/anyrandVRF" target="_blank">
                  Join on Telegram
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
