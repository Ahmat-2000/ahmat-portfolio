import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Resume />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
