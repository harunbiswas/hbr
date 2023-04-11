import Title from "../Title";
import {MdElectricalServices} from 'react-icons/md'
import TitleMain from "../TitleMain";

export default function Services(){
    return(
        <section className="services" id="services">
            <Title data={{text: "Services", icon: <MdElectricalServices />}} />
            <TitleMain data={{text1: "My", text2: "Specializations"}} />
        </section>
    )
}