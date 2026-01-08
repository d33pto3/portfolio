import AboutMe from "../components/home/AboutMe";
import Hero from "../components/home/Hero";
import ProjectList from "../components/home/ProjectList";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ProjectList />
      <AboutMe />
    </div>
  );
}
