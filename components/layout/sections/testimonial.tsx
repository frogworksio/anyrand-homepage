"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "testimonial-lottopgf.png",
    name: "LottoPGF",
    userName: "lottopgf.org",
    comment:
      "LottoPGF allows anyone to incentivise funding of public goods through customisable, fully onchain “Lottos” (number lotteries), all secured on Ethereum.",
    rating: 5.0,
  },
  {
    image: "testimonial-octant.png",
    name: "Octant",
    userName: "octant.build",
    comment:
      "Octant Public Goods Sweepstakes uses Anyrand VRF to run a fair, verifiable raffle that rewards stakers of their $GLM token which is used to channel ETH staking rewards towards public goods.",
    rating: 4.8,
  },

  {
    image: "testimonial-onchainlotteria.png",
    name: "CryptoConexión",
    userName: "cryptoconexion.com",
    comment:
      "CryptoConexión community on Farcaster launched Onchain Lotería Farcaster Frame, a decentralized lottery game that uses anyrand VRF to ensure fair and transparent results.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          VRF in Action
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Projects using anyrand VRF
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-slate-200 dark:bg-card">
                <CardContent className="pt-6 pb-0">
{/*                   <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`size-4 ${
                          index < Math.round(review.rating)
                            ? "fill-primary text-primary"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div> */}
                  {`${review.comment}`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>
                        {review.userName || "Anonymous User"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};