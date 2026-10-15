import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, CheckIcon, CursorClickIcon, MinusIcon, PlusIcon } from '@phosphor-icons/react';
import { experience } from '../content.js';
import { HighlightMetrics } from './HighlightMetrics.jsx';

const shortNames = { isro: 'ISRO', safal: 'Safal', 'penn-state': 'Penn State', winwin: 'WinWin', orbcomm: 'ORBCOMM' };

export function ExperienceTimeline() {
  const roles = [...experience].reverse();
  const [selected, setSelected] = useState(roles.length - 1);
  const [expanded, setExpanded] = useState(false);
  const tabs = useRef([]);
  const track = useRef(null);
  const selectRole = index => {
    if (index !== selected) setExpanded(false);
    setSelected(index);
  };
  useEffect(() => {
    const container = track.current;
    const tab = tabs.current[selected];
    if (!container || !tab) return;
    const alignSelected = () => {
      if (container.scrollWidth > container.clientWidth) container.scrollLeft = tab.offsetLeft - (container.clientWidth - tab.offsetWidth) / 2;
    };
    alignSelected();
    const observer = new ResizeObserver(alignSelected);
    observer.observe(container);
    return () => observer.disconnect();
  }, [selected]);
  const selectFromKey = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % roles.length;
    if (event.key === 'ArrowLeft') next = (index + roles.length - 1) % roles.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = roles.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectRole(next);
      tabs.current[next]?.focus({ preventScroll: true });
    }
  };
  return <div className="experience-timeline">
    <p className="timeline-instruction"><CursorClickIcon size={18} aria-hidden="true" /><span>Select a company to explore the role.<span className="timeline-mobile-instruction"> Swipe to browse the timeline.</span></span></p>
    <div ref={track} className="experience-track" role="tablist" aria-label="Experience timeline" aria-orientation="horizontal">{roles.map((role, index) => {
      const active = selected === index;
      const year = role.period.match(/\d{4}/)?.[0];
      const company = shortNames[role.id] || role.company;
      return <button key={role.id} ref={el => { tabs.current[index] = el; }} type="button" role="tab" id={`experience-tab-${role.id}`} aria-label={`${year} ${company}`} aria-controls={`experience-panel-${role.id}`} aria-selected={active} tabIndex={active ? 0 : -1} onClick={() => selectRole(index)} onKeyDown={event => selectFromKey(event, index)}>
        <span className="timeline-point" aria-hidden="true" />
        <span className="timeline-choice"><span className="timeline-year">{year}</span><span className="timeline-company">{company}</span><span className="timeline-choice-action" aria-hidden="true">{active ? <>Selected<CheckIcon size={14} /></> : <>View role<ArrowRightIcon size={14} /></>}</span></span>
      </button>;
    })}</div>
    {roles.map((role, index) => <div key={role.id} id={`experience-panel-${role.id}`} role="tabpanel" aria-labelledby={`experience-tab-${role.id}`} hidden={selected !== index} tabIndex={0} className="experience-panel">
      <header><p className="profile-role-meta">{role.period}{role.location && <> · {role.location}</>}</p><h3>{role.company}</h3><p className="timeline-role-title">{role.title}</p></header>
      <p className="timeline-role-summary">{role.summary}</p>
      <button type="button" className="experience-toggle" aria-expanded={selected === index && expanded} aria-controls={`experience-achievements-${role.id}`} aria-label={`${expanded ? 'Hide' : 'View'} achievements at ${role.company}`} onClick={() => setExpanded(!expanded)}><span>{expanded ? 'Hide achievements' : 'View achievements'}</span>{expanded ? <MinusIcon size={20} aria-hidden="true" /> : <PlusIcon size={20} aria-hidden="true" />}</button>
      <div id={`experience-achievements-${role.id}`} hidden={selected !== index || !expanded} className="timeline-role-body"><ul>{role.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}><HighlightMetrics text={bullet} /></li>)}</ul></div>
    </div>)}
  </div>;
}
