import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="scanline-bg"></div>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
