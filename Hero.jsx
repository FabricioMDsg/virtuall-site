// Hero.jsx — full-bleed reel hero with cinema bars and a fake video player.
const { useState: useStateHero, useEffect: useEffectHero } = React;

function Hero({ onPlay }) {
  const [tc, setTc] = useStateHero('00:01:24:18');
  useEffectHero(() => {
    let frame = 18 * 24 + 24 * 24 + 60 * 24;
    const id = setInterval(() => {
      frame = (frame + 1) % (60 * 60 * 24);
      const h = String(Math.floor(frame / (60*60*24))).padStart(2, '0');
      const m = String(Math.floor((frame % (60*60*24)) / (60*24))).padStart(2, '0');
      const s = String(Math.floor((frame % (60*24)) / 24)).padStart(2, '0');
      const f = String(frame % 24).padStart(2, '0');
      setTc(`${h}:${m}:${s}:${f}`);
    }, 1000 / 24);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="va-hero">
      <div className="va-hero-still">
        <img src="assets/imagery/placeholder-1.svg" alt="reel still" />
      </div>
      <div className="va-hero-bar top">
        <span>VA · REEL 2024</span>
        <span className="va-rec"><span className="va-rec-dot" /> NOW PLAYING</span>
        <span>{tc} / 00:03:42:00</span>
      </div>
      <div className="va-hero-content">
        <h1 className="va-hero-title">Films<br/>for brands<br/>that matter.</h1>
      </div>
      <div className="va-hero-controls">
        <button className="va-icon-btn" onClick={onPlay} aria-label="Play reel">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button className="va-icon-btn" aria-label="Mute">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
        </button>
        <button className="va-icon-btn" aria-label="Fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/></svg>
        </button>
      </div>
      <div className="va-hero-bar bot">
        <span>São Paulo · Brasil</span>
        <span>240 FILMES · 15 ANOS · 1 SALA</span>
        <span>VA—24—042</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
