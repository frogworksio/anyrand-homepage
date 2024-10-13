import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Anyrand VRF",
  description: "Free, verifiable randomness for all EVM compatible blockchains.",
  keywords: [
    "verifiable randomness", 
    "blockchain", 
    "EVM", 
    "randomness", 
    "VRF", 
    "free VRF",
    "VRF on Scroll ZKP",
    "VRF on Base L2",
    "VRF on Ethereum Mainnet",
    "VRF on Optimism",
    "VRF on Gnosis Chain",
    "VRF on Degen L3",
  ],
  // Language Settings
  language: "en",  // Page language
  "Content-Language": "en", // Meta tag for specifying the content language

  // Set metadataBase to your production URL
  metadataBase: new URL("https://anyrand.com"),

  // For SEO
  canonical: "https://anyrand.com",  // Canonical URL for the page
  robots: {
    index: true,  // Allow the page to be indexed
    follow: true, // Allow links on the page to be followed
  },
  openGraph: {
    type: "website",
    url: "https://anyrand.com",
    title: "Anyrand VRF - Free, Verifiable Randomness for All EVM Chains",
    description: "Anyrand VRF provides free, verifiable randomness for all EVM-compatible blockchains. Ensure fairness and transparency in decentralized applications.",
    images: [
      {
        url: "/opengraph-image.png", // This will now be resolved using metadataBase
        width: 1200,
        height: 630,
        alt: "Anyrand VRF",
      },
    ],
    site_name: "Anyrand VRF", // Name of the website
  },
};



export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      {/* <ServicesSection />  */}
      <TestimonialSection />
      <CommunitySection />
      {/* <PricingSection />  */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
