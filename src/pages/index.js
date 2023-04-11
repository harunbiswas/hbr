import Counter from "@/components/Counter";
import Title from "@/components/Title";
import RotedBtn from "@/components/RotedBtn";
import { BiHome } from "react-icons/bi";
import Instraction from "@/components/section/Instraction";
import About from "../components/section/About";
import Resume from "@/components/section/Resume";
import Services from "@/components/section/Services";

export default function Home() {
  return (
    <>
      <main className="home">
        <Instraction />
        <About />
        <Resume />
        <Services />
      </main>
    </>
  );
}
