import Instraction from "@/components/section/Instraction";
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
      </main>
    </>
  );
}
