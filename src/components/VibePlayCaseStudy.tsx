import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Project } from '../types';
import ProjectMedia from './ProjectMedia';
import { showcaseImages } from '../lib/projectImages';
import { vibeplayDecisions, vibeplayJourney } from '../data/vibeplayCaseStudy';

const contents = [
  ['idea', 'The idea'], ['experience', 'Experience'], ['architecture', 'Architecture'],
  ['decisions', 'Decisions'], ['evolution', 'Evolution'], ['lessons', 'Testing & lessons'],
];

function Chapter({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={`vibe-${id}`} className="vibe-chapter" aria-labelledby={`vibe-${id}-title`} tabIndex={-1}>
    <header><span className="eyebrow">{number} /</span><h2 id={`vibe-${id}-title`}>{title}</h2></header>
    {children}
  </section>;
}

export default function VibePlayCaseStudy({ project }: { project: Project }) {
  const source = `${project.link}/blob/main/docs/phase-6-release-readiness.md`;
  return (
    <article className="vibe-study">
      <div className="vibe-topbar"><Link to="/" className="text-action"><ArrowLeft size={16} aria-hidden="true" />Back to Portfolio</Link><span className="eyebrow">Product case study / 2026</span></div>
      <header className="vibe-hero">
        <p className="eyebrow">Personal project · Full-Stack Developer</p>
        <h1>VibePlay<span>.</span></h1>
        <div className="vibe-intro"><h2>Music that matches<br /><span>your mood.</span></h2>
          <div><p>A personal full-stack application for turning moods and musical preferences into a Spotify playlist you can review and make your own.</p>
            <p>I brought together the product interface, catalog selection, authentication, and save-recovery flows, then refined them through design iteration and automated testing.</p>
            <div className="vibe-links"><a className="primary-action" href={project.link} target="_blank" rel="noopener noreferrer">Explore the code <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-action" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit application <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          </div>
        </div>
        <ul className="vibe-stack" aria-label="Core technologies"><li>Next.js / React</li><li>TypeScript</li><li>Spotify Web API</li><li>Tailwind CSS</li></ul>
      </header>
      <ProjectMedia src={showcaseImages.vibeplay} alt="Redesigned VibePlay landing page with mood-led playlist creation and record artwork" caption="Redesigned local build · Authentic unauthenticated desktop capture" featured />
      <p className="vibe-status">This case study describes the repository implementation. Screenshots show local development previews; live Spotify login and saving acceptance remain pending. Account access may be restricted.</p>
      <nav className="vibe-contents" aria-label="Case study sections">{contents.map(([id,label]) => <a key={id} href={`#vibe-${id}`}>{label}</a>)}</nav>

      <Chapter id="idea" number="01" title="Start with a feeling, not a search box.">
        <div className="vibe-columns"><p className="vibe-lead">Building a playlist can become its own task. I wanted to explore a shorter path from “this is the mood” to a mix worth reviewing.</p>
          <div className="vibe-copy"><p>VibePlay began as a personal exploration of music discovery and Spotify integration. Choosing tracks one at a time can interrupt the moment you want to listen. A mood gives the experience a starting point; musical preferences give it direction.</p><p>The product idea was to make that first selection easier while leaving the listener in control. This is a personal project motivation, not a claim backed by user research or adoption data.</p></div></div>
      </Chapter>

      <Chapter id="experience" number="02" title="A starting point. Then, your choices.">
        <p className="vibe-section-intro">The implemented journey moves from preferences to review, with a deliberate save step. Spotify-dependent steps require an authorized account and still await live acceptance for this release.</p>
        <div className="vibe-journey-layout"><ol className="vibe-journey">{vibeplayJourney.map(([title,body],i)=><li key={title}><span aria-hidden="true">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
          <div className="vibe-mobile-preview"><ProjectMedia src="/images/projects/vibeplay-development-mobile.png" alt="VibePlay mobile landing page showing its playlist creation action and responsive record artwork" caption="Local build · Mobile landing preview" /></div></div>
        <aside className="vibe-note"><h3>A little more control</h3><p>The studio supports multiple moods and genres, length settings, explicit-content filtering, and reusable presets. Drafts and recent studio history stay in this browser; they are not a cloud-synchronized library. The image illustrates the mobile landing page, not an authenticated generation or save.</p></aside>
      </Chapter>

      <Chapter id="architecture" number="03" title="A clear boundary between interface and integration.">
        <p className="vibe-section-intro">Next.js and TypeScript connect the review experience to server routes that validate requests, manage sessions, and communicate with Spotify.</p>
        <ol className="vibe-architecture" aria-label="Application architecture, request and response flow">
          <li><span className="eyebrow">01 / Browser</span><h3>Choose & review</h3><p>React interface, preferences, track edits, and feedback.</p><small>Local storage: drafts, presets, history, save journal</small></li>
          <li><span className="eyebrow">02 / Next.js server</span><h3>Validate & coordinate</h3><p>PKCE callbacks, encrypted sessions, catalog selection, and signed save recovery.</p><small>Session refresh and Spotify requests happen here</small></li>
          <li><span className="eyebrow">03 / Spotify API</span><h3>Search & persist</h3><p>Catalog searches and track lookups; playlist creation and ordered track insertion.</p><small>Responses return through the server to the interface</small></li>
        </ol>
        <p className="vibe-architecture-caption">Preferences → server validation → Spotify catalog → selected tracks → browser review. Saving is a separate request after review. The encrypted session cookie travels with requests; browser JavaScript cannot read its tokens.</p>
      </Chapter>

      <Chapter id="decisions" number="04" title="The decisions behind a dependable experience.">
        <div className="vibe-decisions">{vibeplayDecisions.map((item,i)=><article key={item.title}><p className="eyebrow">Decision 0{i+1}</p><h3>{item.title}</h3><dl><dt>Problem</dt><dd>{item.problem}</dd><dt>Decision</dt><dd>{item.decision}</dd><dt>Why it matters</dt><dd>{item.value}</dd></dl></article>)}</div>
      </Chapter>

      <Chapter id="evolution" number="05" title="From a working form to a coherent product.">
        <p className="vibe-section-intro">The redesign gave VibePlay a clearer identity and a shared visual system across the landing page, generator, studio, and history. These captures show different screens from the earlier and redesigned experiences, not a production deployment comparison.</p>
        <div className="vibe-comparison"><ProjectMedia src="/images/projects/vibeplay-previous.png" alt="Previous Vibe Playlist generator with simple mood buttons, preference field, and generate action" caption="Previous interface · Generator · Existing portfolio capture" /><ProjectMedia src={showcaseImages.vibeplay} alt="Redesigned local VibePlay landing page with clearer typography and playlist creation action" caption="Redesigned local build · Landing page" /></div>
        <div className="vibe-evolution-notes"><div><h3>A recognizable identity</h3><p>Consistent navigation, typography, mood artwork, and clearer primary actions replaced disconnected screen styles.</p></div><div><h3>Review stays central</h3><p>Track rows, connection feedback, and persistent save or recovery messages make the next step easier to understand.</p></div><div><h3>Interaction is part of the design</h3><p>Visible focus, a keyboard-aware save dialog, reduced-motion support, and narrow-screen layouts received explicit attention.</p></div></div>
      </Chapter>

      <Chapter id="lessons" number="06" title="Testing the moments that interrupt the happy path.">
        <div className="vibe-columns"><div className="vibe-copy"><p>The release report records unit and integration coverage for authentication, selection rules, and save recovery, alongside browser scenarios in Chromium, Firefox, and WebKit.</p><p>Those checks cover interrupted saves, reload persistence, connection states, responsive layouts, keyboard behavior, and automated accessibility scans. Spotify catalog and successful save responses are mocked: passing those fixtures is not live Spotify certification.</p><a className="text-action" href={source} target="_blank" rel="noopener noreferrer">Read the verification evidence <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <aside className="vibe-reflection"><p className="eyebrow">What I take forward</p><h3>The uncertain states are part of the product.</h3><p>A polished interface needs more than a successful demo. It needs to preserve a draft when generation fails, explain when preferences return fewer tracks, and resist an unsafe retry when a save outcome is unknown.</p><p>Working across the interface and integration made those tradeoffs visible: the best recovery behavior has to be designed into both.</p></aside></div>
      </Chapter>
      <footer className="vibe-closing"><div><p className="eyebrow">Continue exploring</p><h2>See the thinking in the code.</h2></div><div className="vibe-links"><a className="text-action" href={project.link} target="_blank" rel="noopener noreferrer">VibePlay on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a><Link className="text-action" to="/">Back to the portfolio <ArrowRight size={16} aria-hidden="true" /></Link></div></footer>
    </article>
  );
}
