import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <>
      <div className="scanline-bg"></div>
      <CursorGlow />
      <Nav />
      <Hero />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
