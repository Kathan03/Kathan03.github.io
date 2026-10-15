import { ArrowUpRightIcon, DatabaseIcon, PlugsConnectedIcon, TreeStructureIcon, ShieldCheckIcon, UsersThreeIcon } from '@phosphor-icons/react';
import { projects, education, certifications, publications, profile } from '../content.js';
import '../profile-sections.css';
import { fieldKit } from '../fieldKit.js';
import { ExperienceTimeline } from './ExperienceTimeline.jsx';
import { Recommendation } from './Recommendation.jsx';
import { SectionBanner } from './SectionBanner.jsx';
import { AboutDetails, CredentialList } from './ProfilePersonalDetails.jsx';
import '../personal-details.css';

const capabilityIcons = { retrieval: DatabaseIcon, mcp: PlugsConnectedIcon, architecture: TreeStructureIcon, evaluation: ShieldCheckIcon, discovery: UsersThreeIcon };

function ExternalLink({ href, children, className = 'text-link', label }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}<ArrowUpRightIcon size={16} aria-hidden="true" /></a>;
}

function SectionIntro({ id, title, children }) {
  return <header className="profile-section-intro"><h2 id={id} className="section-heading">{title}</h2>{children && <p className="profile-section-description">{children}</p>}</header>;
}



function PublicationRow({ item }) {
  return <article className="profile-publication"><p className="profile-publication-status">{item.status}</p><h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title}<ArrowUpRightIcon size={17} aria-hidden="true" /></a> : item.title}</h3>{item.authors && <p className="profile-publication-authors">{item.authors}</p>}<p className="profile-publication-venue">{[item.venue, item.year].filter(Boolean).join(' · ')}</p></article>;
}

export function ProfileSections() {
  const published = publications.filter(item => !String(item.status).toLowerCase().includes('review'));
  const underReview = publications.filter(item => String(item.status).toLowerCase().includes('review'));

  return <>
    <section id="projects" className="profile-section page-width" aria-labelledby="projects-heading">
      <SectionBanner id="projects-heading" title="More projects" image="/assets/art/projects-banner.webp" alt="An ink drawing of a portfolio folder and scientific sketches on lavender paper" /><div className="section-overview"><p className="section-description">Experiments in machine learning, language, and useful software.</p><ExternalLink href={profile.github}>Browse GitHub</ExternalLink></div>
      <div className="profile-project-grid">{projects.map(project => <article className="profile-project" key={project.id}>
        <a className="profile-project-image" href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><img src={project.image} alt="" loading="lazy" decoding="async" /></a>
        <div className="profile-project-copy"><h3><a href={project.repositoryUrl} target="_blank" rel="noreferrer">{project.name}</a></h3><p>{project.description}</p><ExternalLink href={project.repositoryUrl} label={`View ${project.name} repository`}>View repository</ExternalLink></div>
      </article>)}</div>
    </section>

    <section id="experience" className="profile-section page-width" aria-labelledby="experience-heading">
      <SectionBanner id="experience-heading" title="Experience" image="/assets/art/experience-banner.webp" alt="An ink drawing of a winding path, milestones, and a compass on blue-green paper" /><p className="section-description">From research and manufacturing to AI products in everyday operations.</p>
      <ExperienceTimeline />
    </section>

    <section id="skills" className="profile-section page-width" aria-labelledby="skills-heading">
      <SectionBanner id="skills-heading" title="Field kit" image="/assets/art/field-kit-banner.webp" alt="An ink drawing of a builder’s tool roll and connected nodes on blue paper" /><p className="section-description">Tools and patterns for building AI with people, and putting it to work.</p>
      <ul className="field-kit-grid">{fieldKit.map(skill => { const Icon = capabilityIcons[skill.icon]; return <li className="field-skill" key={skill.id}><div className={`field-skill-symbol${skill.logos ? ' has-brand' : ''}${skill.wideLogo ? ' is-wide' : ''}`}>{skill.logos ? skill.logos.map(logo => <img key={logo} src={`/assets/logos/${logo}`} alt="" width="40" height="40" loading="lazy" />) : <Icon size={40} weight="regular" aria-hidden="true" />}</div><h3>{skill.name}</h3>{skill.note && <p className="field-skill-note">{skill.note}</p>}</li>; })}</ul>
    </section>

    <section id="education" className="profile-section page-width" aria-labelledby="education-heading">
      <SectionBanner id="education-heading" title="Education" image="/assets/art/education-banner.webp" alt="An ink drawing of books and a graduation cap on sage paper" />
      <div className="education-grid">{education.map(item => <article className="education-card" key={item.id}><h3>{item.school}</h3><p className="profile-degree">{item.degree}</p><p className="profile-education-meta">{item.period}{item.gpa && <> · GPA {item.gpa}</>}</p></article>)}</div>
    </section>
    <section id="credentials" className="profile-section page-width" aria-labelledby="credentials-heading">
      <SectionBanner id="credentials-heading" title="Credentials" image="/assets/art/credentials-banner.webp" alt="An ink drawing of a diploma and ribbon seal on ochre paper" />
      <CredentialList items={certifications} />
    </section>

    <section id="research" className="profile-section page-width" aria-labelledby="research-heading">
      <SectionBanner id="research-heading" title={<>Research &amp;<br /> publications</>} image="/assets/art/book-banner.png" alt="Hand-drawn books on a warm orange background" />
      <div className="profile-research-overview"><p>Papers, experiments, and ongoing research.</p><ExternalLink href={profile.scholar} label="View Kathan Joshi’s Google Scholar profile">View my Google Scholar profile</ExternalLink></div><div className="profile-research-list"><h3 className="profile-research-label">Published papers</h3>{published.map(item => <PublicationRow key={item.id} item={item} />)}{underReview.length > 0 && <div className="profile-under-review"><h3 className="profile-research-label">Work in progress</h3>{underReview.map(item => <PublicationRow key={item.id} item={item} />)}</div>}</div>
    </section>

    <section id="about" className="profile-section page-width profile-about" aria-labelledby="about-heading">
      <SectionIntro id="about-heading" title="A little more about me" />
      <AboutDetails name={profile.name} paragraphs={profile.about} />
    </section>

    <Recommendation />

    <section id="contact" className="profile-section page-width profile-contact" aria-labelledby="contact-heading"><div className="profile-contact-inner"><div><h2 id="contact-heading" className="section-heading">Let’s talk.</h2><p>Have a problem worth working on?<br />I would be glad to hear about it.</p></div><div className="profile-contact-links"><a className="button" href={`mailto:${profile.email}`}>Say hello<ArrowUpRightIcon size={17} aria-hidden="true" /></a><a className="profile-contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="profile-social-links"><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink></div></div></div></section>
    <footer className="profile-footer page-width"><p>© 2026 {profile.name}</p><a href="#top" className="text-link">Back to top<span aria-hidden="true">↑</span></a></footer>
  </>;
}