// CaseStudy.jsx — long-form case page for a single work.
function CaseStudy({ work, onBack }) {
  if (!work) return null;
  return (
    <article>
      <div className="va-case-hero">
        <img src={work.still} alt={work.title} />
        <div className="va-hero-bar top">
          <span>{work.code}</span>
          <span className="va-rec"><span className="va-rec-dot" /> CASE STUDY</span>
          <span>{work.year}</span>
        </div>
        <div className="va-hero-bar bot">
          <span>{work.client}</span>
          <span>{work.format} · 16:9</span>
          <span>São Paulo</span>
        </div>
      </div>

      <div className="bleed" style={{paddingTop: 64}}>
        <a className="va-btn va-btn-ghost" onClick={onBack}>← Back to work</a>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 96, marginTop: 64, marginBottom: 64}}>
          <div>
            <div className="va-sec-eyebrow">{work.client} // {work.format}</div>
            <h1 className="va-sec-head" style={{marginTop: 16}}>{work.title}.</h1>
          </div>
          <div className="va-body" style={{paddingTop: 8}}>
            <p>{work.format} para {work.client}. Rodado em uma única locação em São Paulo, em três dias. Direção de {work.director}, com diretor de fotografia Hugo Kovensky.</p>
            <p style={{marginTop: 16}}>O filme estreou em TV aberta em {work.year} e teve cortes adicionais para digital e cinema.</p>
          </div>
        </div>

        <div className="va-case-meta">
          <div className="cell"><span className="lab">Code</span><span className="val mono">{work.code}</span></div>
          <div className="cell"><span className="lab">Client</span><span className="val">{work.client}</span></div>
          <div className="cell"><span className="lab">Director</span><span className="val">{work.director}</span></div>
          <div className="cell"><span className="lab">Format</span><span className="val mono">{work.format} · 16:9</span></div>
          <div className="cell"><span className="lab">Year</span><span className="val mono">{work.year}</span></div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8, marginTop: 64}}>
          <img src="assets/imagery/placeholder-2.svg" style={{width:'100%', display:'block'}} />
          <img src="assets/imagery/placeholder-3.svg" style={{width:'100%', display:'block'}} />
        </div>

        <div style={{marginTop: 96}}>
          <div className="va-sec-eyebrow">CREDITS</div>
          <div className="va-case-credits">
            {[
              ['Director', work.director],
              ['DP', 'Hugo Kovensky'],
              ['Producer', 'Ana Paula Souza'],
              ['1st AC', 'Tiago Lima'],
              ['Editor', 'Bruna Ferreira'],
              ['Colorist', 'Júlia Schmidt'],
              ['Sound design', 'Cabeça / SP'],
              ['Agency', 'Africa · São Paulo'],
            ].map(([role, name]) => (
              <div className="va-case-credit" key={role}>
                <span className="role">{role.toUpperCase()}</span>
                <span className="name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

window.CaseStudy = CaseStudy;
