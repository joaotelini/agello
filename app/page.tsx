import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Demo } from "@/components/sections/Demo";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Benefits />
      <Pricing />
      <Roadmap />
      <FAQ />
      <FinalCTA />
    </>
  );
}
