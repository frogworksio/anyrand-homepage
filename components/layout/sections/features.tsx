import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Swords",
    title: "Onchain Games",
    description:
      "Use anyrand VRF to provide secure, verifiable randomness in games, ensuring fairness in mechanics like loot drops, random events, or matchmaking.",
    colorClass: "text-red-500",  // Color for this icon
  },
  {
    icon: "Clover",
    title: "Decentralized Lotteries",
    description:
      "anyrand VRF enables transparent and tamper-proof random number generation for lottery systems, ensuring that results are fair and publicly verifiable.",
    colorClass: "text-green-500", // Color for this icon
  },
  {
    icon: "UsersRound",
    title: "Sortition for DAOs",
    description:
      "In decentralized governance models, anyrand VRF can be used to randomly select committee members or voters, ensuring unbiased and secure participation.",
    colorClass: "text-blue-500", // Color for this icon
  },
  {
    icon: "ImagePlus",
    title: "NFT Minting",
    description:
      "anyrand VRF can introduce verifiable randomness for minting NFTs with random traits, adding uniqueness and rarity in a transparent and fair manner.",
    colorClass: "text-yellow-500", // Color for this icon
  },
  {
    icon: "Gift",
    title: "Randomized Airdrops",
    description:
      "Projects can use anyrand VRF to randomly select wallet addresses for airdrops, providing a fair and verifiable distribution process for tokens or rewards.",
    colorClass: "text-purple-500", // Color for this icon
  },
  {
    icon: "Gavel",
    title: "Secure Auctions",
    description:
      "anyrand VRF can be used to introduce verifiable randomness in auction processes, ensuring fair and transparent winner selection or tie-breaking in decentralized bidding systems.",
    colorClass: "text-orange-500", // Color for this icon
  },
];


export const FeaturesSection = () => {
  return (
    <section id="features" className="container bg-slate-50 dark:bg-slate-900/50 rounded py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2">
        Use Cases
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Unlock the Power of Verifiable Randomness
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        anyrand VRF offers a secure and verifiable randomness solution essential for applications such as games, lotteries, and decentralized governance.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description, colorClass }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className={`bg-white dark:bg-black p-2 rounded-full ring-4 ring-primary/5 mb-4 ${colorClass}`}>
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    className={`${colorClass}`} />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};