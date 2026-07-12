import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Platform } from "@/components/sections/platform";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Security } from "@/components/sections/security";
import { Differentials } from "@/components/sections/differentials";
import { Metrics } from "@/components/sections/metrics";
import { Contact } from "@/components/sections/contact";

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
