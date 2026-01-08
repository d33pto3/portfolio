import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Self-Employed",
      period: "2023 — Present",
    },
    { role: "Frontend Developer", company: "Freelance", period: "2022 — 2023" },
    {
      role: "Junior Web Developer",
      company: "Tech Solutions",
      period: "2021 — 2022",
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "University of Dhaka",
      period: "2019 — 2023",
    },
  ];

  const disciplines = [
    "Web Development",
    "UI/UX Design",
    "Mobile Applications",
    "Design Systems",
    "Backend Architecture",
    "Motion Design",
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="about-intro-text">
          I'm Rakin Farhan, a Full Stack Developer from Bangladesh crafting
          seamless digital experiences through code and design.
        </h1>
      </div>

      <main className="about-main-content">
        <section className="about-bio-section">
          <p className="about-bio-text">
            With over 3 years of experience in the industry, I specialize in
            building robust and scalable web applications. My approach combines
            technical expertise with a deep understanding of user experience,
            ensuring that every project is both functional and visually
            compelling.
          </p>
          <p className="about-bio-text">
            I am passionate about clean code, performance optimization, and
            staying at the forefront of emerging technologies. I believe that
            great software is born from curiosity, collaboration, and a
            relentless pursuit of excellence.
          </p>
        </section>

        <section className="about-experience-section">
          <h2 className="data-section-title">Professional Experience</h2>
          <ul className="data-list">
            {experiences.map((exp, index) => (
              <li key={index} className="data-item">
                <span className="item-main">
                  {exp.role} @ {exp.company}
                </span>
                <span className="item-sub">{exp.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-education-section">
          <h2 className="data-section-title">Education</h2>
          <ul className="data-list">
            {education.map((edu, index) => (
              <li key={index} className="data-item">
                <span className="item-main">{edu.degree}</span>
                <span className="item-sub">{edu.institution}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-disciplines-section">
          <h2 className="data-section-title">How I can help</h2>
          <div className="disciplines-list">
            {disciplines.map((item, index) => (
              <div key={index} className="discipline-item">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
