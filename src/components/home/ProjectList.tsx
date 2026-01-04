import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { projects } from '../../data/projects';
import './ProjectList.css';

export default function ProjectList() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const previewInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP quickTo for smooth lagging follow effect
    const xMove = gsap.quickTo(previewRef.current, "left", { duration: 0.8, ease: "power3" });
    const yMove = gsap.quickTo(previewRef.current, "top", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      // We want the image to be centered on the cursor or slightly offset
      xMove(e.clientX);
      yMove(e.clientY);
      
      // Calculate "tilt" or inertia based on movement speed could go here, 
      // but simple quickTo is often enough for the "floating" feel.
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate presence of the preview image
    if (activeProject && previewRef.current) {
        gsap.to(previewRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    } else if (previewRef.current) {
        gsap.to(previewRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        });
    }
  }, [activeProject]);

  return (
    <section className="project-list-section">
      <div className="project-list">
        {projects.map((project) => (
          <Link 
            to={`/work/${project.id}`} 
            key={project.id}
            className="project-item"
            onMouseEnter={() => setActiveProject(project.image)}
            onMouseLeave={() => setActiveProject(null)}
            data-hover="true"
          >
            <span className="project-title">{project.title}</span>
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </Link>
        ))}
      </div>

      {/* Floating Preview */}
      <div className="project-preview-wrapper" ref={previewRef}>
        <div 
          className="project-preview-inner" 
          ref={previewInnerRef}
          style={{ backgroundImage: `url(${activeProject})` }}
        ></div>
      </div>
    </section>
  );
}
