import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Decentralized",
    description:
      "Randomness is generated through drand’s threshold cryptography, ensuring it cannot be manipulated or predicted.",
  },
  {
    icon: "LineChart",
    title: "Low-cost",
    description:
      "Use anyrand service for a small premium, or access the underlying randomness directly at no additional cost beyond gas fees.",
  },
  {
    icon: "LockKeyholeOpen",
    title: "Permissionless",
    description:
      "Open source and available as a public good for EVM networks, get easy access to VRF without centralized services.",
  },
  {
    icon: "Globe",
    title: "Made for EVMs",
    description:
      "Optimized for EVM chains using the new drand beacon network on the BN254 curve, for seamless integration into your EVM dApps.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2">Key Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is anyrand VRF
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          anyrand is a verifiable random number generator for EVM-compatible networks, providing developers with a decentralized and reliable source of randomness. Built on drand’s randomness beacon and optimized for EVM chains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-white dark:bg-card transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
