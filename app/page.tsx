// /app/page.tsx
import RevealSection from '@/components/RevealSection'
import Image from 'next/image'


export default function HomePage() {
  return (
    <>
      <RevealSection id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-left">
          <h1 className="hero-title">
            Hello — I'm<br />
          <span className="name">John Bryx Jovellanos</span>
        </h1>
            
            <p className="hero-sub">
              Aspiring Website Developer and Full Stack Developer from St. Paul University Philippines
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact</a>
            </div>
          </div>

          <div className="hero-inner">
  <div className="hero-left">
    {/* ...your text content... */}
  </div>
  <div className="profile-container">
  <div className="photo-placeholder">
    <Image
      src="/bryxxx.jpg"
      alt="Profile"
      fill
      sizes="(max-width: 600px) 80vw, 280px"
      style={{ objectFit: "cover", borderRadius: "15px" }}
    />
  </div>
</div>
</div>
        </div>
      </RevealSection>

     {/* <!-- START ABOUT ME --> */}
     <RevealSection id="aboutme" className="container">
  <h2 className="section-title">About Me</h2>
  <div className="about-columns">
    <div className="about-main-box">
      <p>
        Graduating IT student majoring in Website Development and Full-Stack Development. Passionate about technology and creating meaningful digital solutions. Skilled in building responsive websites, developing both front-end and back-end features, managing databases, and delivering user-focused web applications. Driven by continuous learning and dedicated to using technology to build smarter, more efficient systems that contribute to a better tomorrow.
      </p>
    </div>
    <div className="about-side">
      <div className="about-side-box">
        <h3>Education</h3>
        <p>Bachelor of Science in Information Technology</p>
      </div>
      <div className="about-side-box">
        <h3>Specialization</h3>
        <p>Website Development & Full Stack Development</p>
      </div>
      <div className="about-side-box">
        <h3>Passion</h3>
        <p>Building accessible, user-friendly interfaces and learning new technologies.</p>
      </div>
    </div>
  </div>
  </RevealSection>
{/* <!-- END ABOUT ME --> */}

      {/* <!-- START SKILLS --> */}
      <RevealSection id="skills" className="container">
  <h2 className="section-title">Skills</h2>
  <div className="skills-grid">
    <div className="skill-box">
      <h3>Website Development</h3>
      <p>Experienced in building modern, responsive, and accessible websites from scratch.</p>
    </div>
    <div className="skill-box">
      <h3>Frontend Development</h3>
      <p>Proficient in React, HTML, CSS, and JavaScript to create engaging user interfaces.</p>
    </div>
    <div className="skill-box">
      <h3>Backend Development</h3>
      <p>Skilled in Node.js and Express for building robust server-side applications and APIs.</p>
    </div>
    <div className="skill-box">
      <h3>Database Development</h3>
      <p>Experienced with SQL and NoSQL databases for efficient data storage and retrieval.</p>
    </div>
    <div className="skill-box">
      <h3>Tools & Technologies</h3>
      <p>Familiar with Git, VS Code, REST APIs, and deployment tools for streamlined workflows.</p>
    </div>
    <div className="skill-box">
      <h3>Soft Skills</h3>
      <p>Strong communicator, team player, and quick learner dedicated to continuous improvement.</p>
    </div>
  </div>
  </RevealSection>
{/* <!-- END SKILLS --> */}

{/* <!-- START PROJECTS --> */}
<RevealSection id="projects" className="container">
  <h2 className="section-title">Projects</h2>
  <div className="project-box">
    <h3>University Clearance Management System With Decision Support</h3>
    <p>Streamline the clearance process at St. Paul University Philippines.</p>
    <div className="tech-badges">
      <span className="tech-badge">PHP</span>
      <span className="tech-badge">Laravel</span>
      <span className="tech-badge">Python</span>
      <span className="tech-badge">MySQL</span>
    </div>
  </div>
</RevealSection>
{/* <!-- END PROJECTS --> */}

<RevealSection id="contact" className="container">
  <h2 className="section-title">Contact</h2>
  <div className="contact-box">
    <h3>Feel free to reach out via any of the platforms below:</h3>
    <div className="contact-socials">
      <span>
        📧 Email: 
      </span>
      <span> 
        johnbryxjovellanos@gmail.com
        </span>
      <a href="https://www.linkedin.com/in/john-bryx-jovellanos-731872397/" className="contact-social" target="_blank" rel="noopener noreferrer">
        🔗 LinkedIn
      </a>
      <a href="https://github.com/Bryxxx88" className="contact-social" target="_blank" rel="noopener noreferrer">
        💻 GitHub
      </a>
      <a href="https://www.facebook.com/johnbryx.jovellanos88" className="contact-social" target="_blank" rel="noopener noreferrer">
        📘 Facebook
      </a>
    </div>
  </div>
</RevealSection>

    </>
  )
}