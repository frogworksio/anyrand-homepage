import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is VRF?",
    answer: "A Verifiable Random Function (VRF) is a cryptographic tool that generates a public random output that is mathematically verifiable and cannot be tampered with. It ensures both unpredictability and verifiability, making it essential for applications that require fair and unbiased random numbers. Use cases include onchain games, decentralised lotteries, sortition-based governance, and any dApp needing a secure randomness source.",
    value: "item-1",
  },
  {
    question: "What is drand?",
    answer:
      "drand is an open-source project that provides decentralised, verifiable randomness through threshold cryptography. Instead of relying on a single third party, multiple third parties work together to generate a random number. It exploits the fact that a hash of a BLS (https://en.wikipedia.org/wiki/BLS_digital_signature) signature is uniformly distributed and conveniently comes with proof that the signature was produced over a specific input message. Due to the way drand distributes keys (https://evervault.com/blog/shamir-secret-sharing), no party ever has the whole secret key, and as such, no single party can predict the signature generated for public randomness.",
    value: "item-2",
  },
  {
    question:
      "What is anyrand?",
    answer:
      "The process of leveraging drands randomness for a dApp can be a hassle for some devs. anyrand is a service that packages this randomness into a VRF that is easy to integrate into any dApp. It does so by automatically computing a future beacon round and then fetching and fulfilling the randomness beacon on behalf of the dApp. Developers can use anyrand's service for a small premium, with the always available manual option to integrate the BLS library into any contract and perform the fulfillment without paying the premium. Both methods are explained on anyrand docs.",
    value: "item-3",
  },
  {
    question: "Is anyrand production-ready?",
    answer: "anyrand has been audited once, and is running on a freshly deployed drand v2 containing our BLS-on-BN254 scheme by the League of Entropy.",
    value: "item-4",
  },
  {
    question: "How much does it cost?",
    answer: "We have open-sourced a Solidity library (https://github.com/kevincharm/bls-bn254) which you can use to to verify BLS signatures on BN254 as produced by the random beacons, for free. If you don't want to go through the hassle, you can use our anyrand VRF fulfilment service for a small fee based on required gas.",
    value: "item-5",
  },
  {
    question: "How can I get VRF on an unsupported network?",
    answer: "We constantly add new networks to anyrand, and WE WANT YOU to pick the next one here (https://form.typeform.com/to/u4x7HLFx). We'd be happy to provide deployment services and set up your network with our VRF keeper for a fee. Just contact us!",
    value: "item-6",
  },
  {
    question: "Is anyrand open-source?",
    answer: "anyrand is completely open-source! Our contracts which can be found on our GitHub.",
    value: "item-7",
  },
  {
    question: "I'm running into a problem! Where can I get support?",
    answer: "If you are facing a technical issue with one of our deployed contracts, please message in our Telegram Developer Support Group.",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
