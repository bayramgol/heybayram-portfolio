import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProfileJson from "./components/ProfileJson";
import Skills from "./components/Skills";
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
      <ProfileJson />
      <Skills />
      <GithubActivity />
      <About />
      <Contact />
    </>
  );
}
