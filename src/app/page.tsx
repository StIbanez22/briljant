import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Testimonial from "@/components/sections/testimonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="grow">
        {/* Your main content goes here */}
        <Hero />
        <Services />
        <About />
       {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
