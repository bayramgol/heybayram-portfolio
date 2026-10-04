import Nav from "./components/Nav";
import Explorer from "./components/Explorer";
import CvCard from "./components/CvCard";
import FloatingPortrait from "./components/FloatingPortrait";
import StatusBar from "./components/StatusBar";
import Gutter from "./components/Gutter";
import Hero from "./components/Hero";
import ProfileJson from "./components/ProfileJson";
import Skills from "./components/Skills";
import GithubActivity from "./components/GithubActivity";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Explorer />
      <CvCard />
      <FloatingPortrait />
      <div className="editor">
        <Gutter />
        <main id="main" tabIndex={-1}>
          <Hero />
          <ProfileJson />
          <Skills />
          <GithubActivity />
          <About />
          <Contact />
        </main>
      </div>
      <StatusBar />
    </>
  );
}
