import { useEffect } from "react";
import AboutMe from "../components/home/AboutMe";
import Hero from "../components/home/Hero";
import ProjectList from "../components/home/ProjectList";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <ProjectList />
      <AboutMe />
    </div>
  );
}
