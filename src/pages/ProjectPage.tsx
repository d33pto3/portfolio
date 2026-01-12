import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial hero animation
      tl.fromTo(
        ".project-hero-content > *",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          delay: 0.2,
        }
      );

      // Scroll animations for other sections
      gsap.utils.toArray(".fade-up").forEach((elem: any) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project not found</h1>
        <Link to="/work" className="back-link">
          Return to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="project-page" ref={containerRef}>
      {/* 1. Title & 2. Short Summary */}
      <section className="project-hero-content">
        <div className="project-header">
          <span className="project-category-label">
            {project.category} — {project.year}
          </span>
          <h1 className="project-title">{project.title}</h1>
        </div>
        <h2 className="project-summary">{project.summary}</h2>
      </section>

      <div className="project-details-grid">
        {/* 3. Technical Stack */}
        <section className="project-tech-stack fade-up">
          <h3 className="section-label">Technical Stack</h3>
          <div className="tech-stack-container">
            {project.technicalStack.map((stack, index) => (
              <div key={index} className="tech-category">
                <h4 className="tech-category-title">{stack.category}</h4>
                <ul className="tech-list">
                  {stack.items.map((item, i) => (
                    <li key={i} className="tech-item">
                      <span className="tech-tool">{item.tool}</span>
                      <span className="tech-purpose">{item.purpose}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Description */}
        <section className="project-description-section fade-up">
          <h3 className="section-label">Deep Dive</h3>
          <div className="description-content">
            {project.description.map((paragraph, index) => (
              <p key={index} className="description-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* 5. Images */}
      <section className="project-images-section fade-up">
        {project.images.map((img, index) => (
          <div key={index} className="project-image-wrapper">
            <img
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="project-image"
            />
          </div>
        ))}
      </section>

      {/* 6. Future Roadmap */}
      <section className="project-roadmap fade-up">
        <div className="roadmap-content">
          <h3 className="section-label">Future Roadmap</h3>
          <ul className="roadmap-list">
            {project.futureRoadmap.map((item, index) => (
              <li key={index} className="roadmap-item">
                <span className="roadmap-bullet">•</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="project-navigation fade-up">
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
