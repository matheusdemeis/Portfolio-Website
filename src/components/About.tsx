import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About me" number="03">
      <div className="about-layout">
        <p className="about-heading">Thoughtful software.<br /><span>Shared ownership.</span></p>
        <div className="about-copy">
            <p>
              I’m a full-stack developer from Brazil, based in São Paulo. I
              completed the Full-Stack Web Development diploma at the British
              Columbia Institute of Technology (BCIT) in Canada, where I built
              applications across the frontend and backend.
            </p>

            <p>
              I’m interested in how technology and product decisions come
              together to solve everyday problems. My work spans a personal
              music-discovery project, a collaborative childcare scheduling
              capstone, and professional SaaS development for insurance advisors.
            </p>

            <p>
              These projects have taught me to think beyond individual features:
              understand the problem, work through tradeoffs with teammates, and
              take responsibility for how the pieces fit together. I value clear
              communication, thoughtful feedback, and improving the work through
              each iteration.
            </p>
          </div>
      </div>
    </Section>
  );
}
