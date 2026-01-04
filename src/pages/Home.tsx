import Hero from '../components/home/Hero';
import ProjectList from '../components/home/ProjectList';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <ProjectList />
      <div style={{ height: '50vh' }}></div> {/* Spacing for scroll feeling */}
    </div>
  );
}
