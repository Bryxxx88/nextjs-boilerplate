// /app/page.tsx
import RevealSection from '@/components/RevealSection'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <RevealSection id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">Hello — I'm <span className="name">John Bryx Jovellanos</span></h1>
            <p className="hero-sub">
              I build elegant, high-quality digital products. Welcome to my professional portfolio.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact</a>
            </div>
          </div>

          <div className="hero-right">
            {/* Local uploaded screenshot image */}
            <img
              src="/mnt/data/AEE16F08-F407-46F6-94BA-7211EC61602F.jpeg"
              alt="project screenshot"
              className="hero-image"
            />
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="container">
        <h2 className="section-title">About</h2>
        <p className="muted">[ YOUR ABOUT CONTENT WILL GO HERE — paste later ]</p>
      </RevealSection>

      <RevealSection id="experience" className="container">
        <h2 className="section-title">Experience</h2>
        <p className="muted">[ YOUR EXPERIENCE CONTENT WILL GO HERE — paste later ]</p>
      </RevealSection>

      <RevealSection id="projects" className="container">
        <h2 className="section-title">Projects</h2>
        <p className="muted">[ YOUR PROJECTS CONTENT WILL GO HERE — paste later ]</p>
      </RevealSection>

      <RevealSection id="skills" className="container">
        <h2 className="section-title">Skills</h2>
        <p className="muted">[ YOUR SKILLS LIST WILL GO HERE — paste later ]</p>
      </RevealSection>

      <RevealSection id="education" className="container">
        <h2 className="section-title">Education</h2>
        <p className="muted">[ YOUR EDUCATION DETAILS WILL GO HERE — paste later ]</p>
      </RevealSection>

      <RevealSection id="contact" className="container">
        <h2 className="section-title">Contact</h2>
        <p className="muted">[ YOUR CONTACT INFO WILL GO HERE — paste later ]</p>
      </RevealSection>
    </>
  )
}