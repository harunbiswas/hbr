import { FaBlog } from "react-icons/fa";
import Title from "../Title";
import TitleMain from "../TitleMain";

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <Title data={{ text: "BLogs", icon: <FaBlog /> }} />
      <TitleMain data={{ text1: "Tech", text2: "News" }} />
    </section>
  );
}
