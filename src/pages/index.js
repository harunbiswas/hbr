import Title from "@/components/Title";
import RotedBtn from "@/styles/sass/components/RotedBtn";
import { BiHome } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <main className="home">
        <section className="introduce">
          <Title data={{ text: "INTRODUCE", icon: <BiHome /> }} />

          <h1>
            Say hi form <span>HBR.</span>,
          </h1>
          <h1>MERN stack web developer</h1>
          <p className="text">
            I design and develop, code beautifully simple things and i love what
            i do. <br /> Just simple like that!
          </p>

          <RotedBtn />
        </section>
      </main>
    </>
  );
}
