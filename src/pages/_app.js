import NavMenu from "@/components/header/NavMenu";
import SideMenu from "@/components/header/SideMenu";
import Head from "next/head";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Harun Biswas Rubel</title>
        <meta
          name="description"
          content="Harun Biswas Rubel | A portfolio web application | It's present by me. Created by Harun Biswas Rubel. Technology:- HTML, CSS, JavaScript, React.js, next.js, node.js, express.js, mongoDB and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <SideMenu />
      <NavMenu />
    </>
  );
}
