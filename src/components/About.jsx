import Title from "./Title";
import {BiUser} from 'react-icons/bi'

export default function About(){
    return(
        <section id="about" className="about">
            <Title data={{icon: <BiUser />, text: "about"}} />
        </section>
    )
}