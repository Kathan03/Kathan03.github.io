import { useEffect, useRef } from 'react';

export function HeroInkField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const hero = canvas.closest('.hero');
    const visual = canvas.parentElement;
    const motion = window.matchMedia('(min-width: 801px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let enabled = motion.matches;
    let points = [];
    let colors = [];
    let width = 0;
    let height = 0;
    let pointer = null;
    let frame = 0;
    let lastTime = 0;
    const refreshColors = () => {
      const styles = getComputedStyle(document.documentElement);
      colors = ['--muted', '--blue', '--text-accent'].map(token => styles.getPropertyValue(token).trim());
    };
    const paint = () => {
      context.clearRect(0, 0, width, height);
      for (const point of points) {
        context.globalAlpha = point.opacity;
        context.fillStyle = colors[point.color];
        context.beginPath();
        context.ellipse(point.x, point.y, point.radius, point.radius * .72, point.angle, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    };
    const tick = time => {
      frame = 0;
      const elapsed = lastTime ? Math.min(time - lastTime, 40) : 16;
      lastTime = time;
      const ease = 1 - Math.exp(-elapsed / 85);
      let unsettled = false;
      let displacement = 0;
      for (const point of points) {
        let targetX = point.baseX;
        let targetY = point.baseY;
        if (pointer && enabled) {
          const dx = point.baseX - pointer.x;
          const dy = point.baseY - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 110 && distance > .01) {
            const push = Math.pow(1 - distance / 110, 2) * 16;
            targetX += dx / distance * push;
            targetY += dy / distance * push;
          }
        }
        targetX = Math.max(3, Math.min(width - 3, targetX));
        targetY = Math.max(3, Math.min(height - 3, targetY));
        point.x += (targetX - point.x) * ease;
        point.y += (targetY - point.y) * ease;
        if (Math.hypot(targetX - point.x, targetY - point.y) > .03) unsettled = true;
        displacement = Math.max(displacement, Math.hypot(point.x - point.baseX, point.y - point.baseY));
      }
      canvas.dataset.displacement = displacement.toFixed(2);
      canvas.dataset.motionState = unsettled ? 'moving' : displacement > .03 ? 'held' : 'resting';
      paint();
      if (unsettled) frame = requestAnimationFrame(tick);
      else lastTime = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const resize = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      pointer = null;
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const density = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * density);
      canvas.height = Math.round(height * density);
      context.setTransform(density, 0, 0, density, 0, 0);
      const innerWidth = visual.clientWidth;
      const innerHeight = visual.clientHeight;
      points = Array.from({ length: 28 }, (_, index) => {
        const angle = index * Math.PI * 2 / 28 + .12;
        const variation = (index * 37 % 17) / 17;
        const baseX = width / 2 + Math.cos(angle) * (innerWidth / 2 + 12 + variation * 11);
        const baseY = height / 2 + Math.sin(angle) * (innerHeight / 2 + 22 + variation * 13);
        return {baseX, baseY, x:baseX, y:baseY, angle, radius:.85 + variation * .85, opacity:.19 + variation * .12, color:index % 3};
      });
      canvas.dataset.motion = enabled ? 'interactive' : 'static';
      canvas.dataset.motionState = 'resting';
      canvas.dataset.displacement = '0.00';
      refreshColors();
      paint();
    };
    const onPointerMove = event => {
      if (!enabled || event.pointerType !== 'mouse') return;
      const bounds = canvas.getBoundingClientRect();
      pointer = { x:event.clientX - bounds.left, y:event.clientY - bounds.top };
      schedule();
    };
    const onPointerLeave = () => { pointer = null; if (enabled) schedule(); };
    const onMotionChange = () => { enabled = motion.matches; resize(); };
    const observer = new ResizeObserver(resize);
    const themeObserver = new MutationObserver(() => { refreshColors(); paint(); });
    observer.observe(visual);
    themeObserver.observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
    motion.addEventListener('change', onMotionChange);
    hero.addEventListener('pointermove', onPointerMove, {passive:true});
    hero.addEventListener('pointerleave', onPointerLeave);
    resize();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      motion.removeEventListener('change', onMotionChange);
      hero.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);
  return <canvas ref={canvasRef} className="hero-ink-field" aria-hidden="true" />;
}
