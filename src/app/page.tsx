import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatBot } from "@/components/ChatBot";
import { MetaPixel } from "@/components/MetaPixel";
import { UnicornBackground } from "@/components/UnicornBackground";

export default function Home() {
  return (
    <>
      <UnicornBackground />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Guarantee />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
      <MetaPixel />
    </>
  );
}
