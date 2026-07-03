import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GithubActivity from "./components/GithubActivity";
import About from "./components/About";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  return (
    <>
      <div className="scanline-bg" />
      <CursorGlow />
      <Nav />
      <Hero />
      <Dashboard />
      <Skills />
      <Experience />
      <GithubActivity />
      <About />
      <Contact />
    </>
  );
}
