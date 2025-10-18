let cleanupFns = [];

function isInternalLink(a) {
  try {
    const u = new URL(a.href, window.location.origin);
    return u.origin === window.location.origin && !a.target && !a.hasAttribute('download');
  } catch { return false; }
}

function setupViewTransitions() {
  if (!document.startViewTransition) return () => {};
  const onClick = (e) => {
    const a = e.target.closest('a');
    if (!a || !isInternalLink(a)) return;
    e.preventDefault();
    const url = a.getAttribute('href');
    if (!url) return;
    document.startViewTransition(() => {
      history.pushState({}, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  };
  document.addEventListener('click', onClick, true);
  return () => document.removeEventListener('click', onClick, true);
}

function setupScrollProgress() {
  const bar = document.querySelector('.scroll-progress__bar');
  if (!bar) return () => {};
  const supports = CSS.supports('animation-timeline: scroll()') || CSS.supports('animation-timeline: scroll(root)');
  if (supports) return () => {};
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) : 0;
    bar.style.width = `${Math.min(100, Math.max(0, p * 100))}%`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}


function setupMagneticButtons() {
  const nodes = Array.from(document.querySelectorAll('[data-magnetic]'));
  const listeners = [];
  nodes.forEach((el) => {
    const strength = parseFloat(el.getAttribute('data-magnetic')) || 8;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
    };
    const leave = () => { el.style.transform = 'translate(0,0)'; };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    listeners.push(() => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); });
  });
  return () => listeners.forEach((fn) => fn());
}

function setupRipple() {
  const onClick = (e) => {
    const target = e.target.closest('[data-ripple]');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const ink = document.createElement('span');
    ink.className = 'ripple-ink';
    ink.style.left = `${x}px`; ink.style.top = `${y}px`;
    target.appendChild(ink);
    ink.addEventListener('animationend', () => ink.remove(), { once: true });
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}

function setupCursorHalo() {
  try {
    const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduce) return () => {};
  } catch {}
  const container = document.querySelector('[data-halo-container]');
  const halo = document.querySelector('[data-halo]');
  if (!container || !halo) return () => {};
  let ticking = false;
  let lastX = 0, lastY = 0;
  const onMove = (e) => {
    lastX = e.clientX; lastY = e.clientY;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const r = container.getBoundingClientRect();
      const x = lastX - r.left; const y = lastY - r.top;
      halo.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
      ticking = false;
    });
  };
  container.addEventListener('mousemove', onMove, { passive: true });
  container.addEventListener('mouseleave', () => { halo.style.opacity = '0'; });
  container.addEventListener('mouseenter', () => { halo.style.opacity = '1'; });
  return () => { container.removeEventListener('mousemove', onMove); };
}

function setupParallax() {
  const nodes = Array.from(document.querySelectorAll('[data-parallax]'));
  if (!nodes.length) return () => {};
  const onScroll = () => {
    const vh = window.innerHeight;
    nodes.forEach((el) => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - vh / 2;
      const offset = Math.max(-40, Math.min(40, center * 0.05));
      el.style.transform = `translateY(${offset}px)`;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}

export function initVisualEffects() {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
  cleanupFns.push(setupViewTransitions());
  cleanupFns.push(setupScrollProgress());
  
  cleanupFns.push(setupMagneticButtons());
  cleanupFns.push(setupRipple());
  cleanupFns.push(setupCursorHalo());
  cleanupFns.push(setupParallax());
}
