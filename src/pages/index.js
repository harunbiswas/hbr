import Blogs from "@/components/section/Blogs";
import Instraction from "@/components/section/Instraction";
import Pricing from "@/components/section/Pricing";
import Projects from "@/components/section/Projects";
import Resume from "@/components/section/Resume";
import Services from "@/components/section/Services";
import Skills from "@/components/section/Skills";
import About from "../components/section/About";

export default function Home() {
  return (
    <>
      <main className="home">
        <Instraction />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Pricing />
        <Blogs />
      </main>
    </>
  );
}
