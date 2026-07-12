import { Navbar } from "@/components/shared/navbar";
import { TypeMarquee } from "@/components/shared/type-marquee";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Platform } from "@/components/sections/platform";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Security } from "@/components/sections/security";
import { Differentials } from "@/components/sections/differentials";
import { Metrics } from "@/components/sections/metrics";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TypeMarquee />
        <Problem />
        <Platform />
        <HowItWorks />
        <Security />
        <Differentials />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
