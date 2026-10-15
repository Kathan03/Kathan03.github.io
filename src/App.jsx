import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon, ListIcon, XIcon, PlusIcon, MinusIcon, TrophyIcon, FolderOpenIcon, BriefcaseIcon, ToolboxIcon, FlaskIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';
import { profile, caseStudies } from './content.js';
import { ProfileSections } from './components/ProfileSections.jsx';
import { SectionBanner } from './components/SectionBanner.jsx';
import { ThemePicker, themes } from './components/ThemePicker.jsx';
import { HeroInkField } from './components/HeroInkField.jsx';

const navigation = [['Hall of Fame', 'hall-of-fame', TrophyIcon], ['Projects', 'projects', FolderOpenIcon], ['Experience', 'experience', BriefcaseIcon], ['Field kit', 'skills', ToolboxIcon], ['Research', 'research', FlaskIcon], ['Contact', 'contact', EnvelopeSimpleIcon]];

function CaseStudy({ item }) {
  return <details className="case-card" id={`case-${item.id}`}>
    <summary>
      <img className="case-card-art" src={`/assets/art/${item.id}.png`} alt="" width="128" height="128" loading="lazy" decoding="async" />
      <div className="case-card-copy"><span className="case-category">{item.eyebrow}</span><h3>{item.name}</h3><p>{item.summary}</p><span className="case-read">Explore the work <span className="case-indicator" aria-hidden="true"><PlusIcon size={16} /><MinusIcon size={16} /></span></span></div>
    </summary>
    <div className="case-body">
      <div className="case-context"><span>{item.status}</span>{item.period && <span>{item.period}</span>}{item.repositoryUrl && <a className="text-link" href={item.repositoryUrl} target="_blank" rel="noreferrer">View repository<ArrowUpRightIcon size={16} aria-hidden="true" /></a>}</div>
      <div className="case-narrative"><div><h4>The problem</h4><p>{item.problem}</p><h4>What I owned</h4><p>{item.ownership}</p></div><div><h4>How I built it</h4><ul>{item.implementation.map(text => <li key={text}>{text}</li>)}</ul></div></div>
      <h4>Outcomes</h4><dl className="case-outcomes">{item.outcomes.map(outcome => <div key={outcome.label}><dt>{outcome.value}</dt><dd>{outcome.label}{outcome.detail && <small>{outcome.detail}</small>}</dd></div>)}</dl>
      <p className="case-technologies">{item.technologies.join(' · ')}</p>
    </div>
  </details>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [theme, setTheme] = useState(() => {
    try { const saved = localStorage.getItem('portfolio-theme'); return themes.some(item => item.id === saved) ? saved : 'dark'; } catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works when browser storage is unavailable. */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--paper').trim());
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-10% 0px -70% 0px' });
    navigation.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onEscape = event => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [menuOpen]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header id="top" className="site-header">
      <a className="wordmark" href="#top" aria-label="Kathan Joshi, home">{profile.name}</a>
      <div className="header-actions">
        <button ref={menuButton} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <XIcon size={25} /> : <ListIcon size={25} />}</button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">{navigation.map(([name, id, Icon]) => <a key={id} className="nav-icon" href={`#${id}`} aria-label={name} aria-current={activeSection === id ? 'location' : undefined} onClick={() => { setMenuOpen(false); setActiveSection(id); }}><Icon size={24} weight="regular" aria-hidden="true" /><span className="nav-tooltip" aria-hidden="true">{name}</span><span className="nav-mobile-label" aria-hidden="true">{name}</span></a>)}</nav>
        <ThemePicker theme={theme} onChange={setTheme} />
      </div>
    </header>
    <main id="main" tabIndex={-1}>
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="hero-label">Forward Deployed Engineering</p><h1 id="hero-title">Kathan Joshi</h1><p className="hero-intro">I build practical AI systems with the teams who use them.</p><div className="hero-person"><img className="portrait" src="/assets/portrait.png" alt="Kathan Joshi" width="72" height="72" fetchPriority="high" /><div><p>{profile.currentRole} at {profile.currentCompany}</p><span>{profile.location}</span></div></div><div className="hero-actions"><a className="button" href="#hall-of-fame">Explore the Hall of Fame<ArrowRightIcon size={18} aria-hidden="true" /></a></div></div>
        <div className="hero-visual"><HeroInkField /><img className="hero-compass" src="/assets/art/compass.png" alt="Hand-drawn compass with a network inside its dial" width="280" height="280" fetchPriority="high" decoding="async" /></div>
      </section>
      <section id="hall-of-fame" className="case-section page-width" aria-labelledby="case-heading"><SectionBanner id="case-heading" title="Hall of Fame" image="/assets/art/hall-of-fame-banner.webp" alt="An ink drawing of a trophy and laurel leaves on terracotta paper" /><p className="section-description">A closer look at the systems I build, and the problems behind them.</p><div className="case-list">{caseStudies.map(item => <CaseStudy key={item.id} item={item} />)}</div></section>
      <ProfileSections />
    </main>
  </>;
}
