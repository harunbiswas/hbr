import Counter from "@/components/Counter";
import Title from "@/components/Title";
import RotedBtn from "@/components/RotedBtn";
import { BiHome } from "react-icons/bi";
import Instraction from "@/components/section/Instraction";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <main className="home">
        <Instraction />
        <About />
      </main>
    </>
  );
}
