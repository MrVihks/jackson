import "../../styles/styles.css";
import Hero from "./components/Hero";
import ServicesCards from "./components/ServicesCards";
import About from "./components/About";
import Contact from "./components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <main className="home-container">
      <Head>
        <title>Luh&apos;s cleaning service</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        />
      </Head>
      <Hero />
      <ServicesCards />
      <About />
      <Contact />
    </main>
  );
}
