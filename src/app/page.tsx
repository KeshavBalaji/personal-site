import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Publications } from "@/components/Publications";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Publications />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
