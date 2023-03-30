import Link from "next/link";
import { items } from "./NavMenu";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.url}>
              {item.icon} <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
