let loadingPromise = null;

function loadConfettiScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.confetti) return Promise.resolve();
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return loadingPromise;
}

export async function confettiBurst(options = {}) {
  await loadConfettiScript();
  if (!window.confetti) return;

  const base = {
    particleCount: 120,
    spread: 70,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.5 }, // centre de la page
    ticks: 200,
    gravity: 0.9,
    ...options,
  };

  // Deux salves pour un effet plus rempli
  window.confetti({ ...base, angle: 60 });
  window.confetti({ ...base, angle: 120 });
}

