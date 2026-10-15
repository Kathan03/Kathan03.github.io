import { useEffect, useRef, useState } from 'react';
import { CheckIcon } from '@phosphor-icons/react';

export const themes = [
  { id: 'paper', name: 'Sun', image: '/assets/themes/paper.webp' },
  { id: 'fire', name: 'Fire', image: '/assets/themes/fire.webp' },
  { id: 'water', name: 'Water', image: '/assets/themes/water.webp' },
  { id: 'grass', name: 'Grass', image: '/assets/themes/grass.webp' },
  { id: 'dark', name: 'Dark', image: '/assets/themes/dark.webp' },
];

export function ThemePicker({ theme, onChange }) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const trigger = useRef(null);
  const options = useRef([]);
  const current = themes.find(item => item.id === theme) || themes[0];
  useEffect(() => {
    if (!open) return;
    const onPointer = event => { if (!container.current?.contains(event.target)) setOpen(false); };
    const onEscape = event => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onEscape);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onEscape); };
  }, [open]);
  const moveOption = (event, index) => {
    let next;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % themes.length;
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index + themes.length - 1) % themes.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = themes.length - 1;
    if (next !== undefined) { event.preventDefault(); onChange(themes[next].id); options.current[next]?.focus(); }
  };
  return <div className="theme-picker" ref={container}>
    <button ref={trigger} className="icon-control theme-trigger" aria-label={`Choose theme, current theme ${current.name}`} aria-expanded={open} aria-controls="theme-options" onClick={() => setOpen(!open)}><img src={current.image} alt="" width="30" height="30" /><span className="nav-tooltip" aria-hidden="true">Theme · {current.name}</span></button>
    {open && <div id="theme-options" className="theme-popover"><p id="theme-title">A change of atmosphere</p><div className="theme-options" role="radiogroup" aria-labelledby="theme-title">{themes.map((item, index) => <button key={item.id} ref={el => { options.current[index] = el; }} role="radio" aria-checked={theme === item.id} tabIndex={theme === item.id ? 0 : -1} className={`theme-option theme-option-${item.id}`} onClick={() => onChange(item.id)} onKeyDown={event => moveOption(event, index)}><img src={item.image} alt="" width="36" height="36" /><span>{item.name}</span>{theme === item.id && <CheckIcon className="theme-selected" size={12} aria-hidden="true" />}</button>)}</div></div>}
  </div>;
}

