// WorkGrid.jsx — portfolio grid of work cards.
function WorkCard({ work, onOpen }) {
  return (
    <a className="va-work" onClick={() => onOpen(work)}>
      <div className="va-work-still">
        <img src={work.still} alt={work.title} />
        <div className="va-work-corner">
          <span>{work.code}</span>
          <span>{work.format}</span>
        </div>
      </div>
      <div className="va-work-meta">
        <span className="va-work-client">{work.client} // {work.title}</span>
        <span className="va-work-strip">{work.year}</span>
      </div>
      <div className="va-work-strip" style={{padding: '8px 0', color: 'var(--fg-2)'}}>
        DIR. {work.director} · {work.format}
      </div>
    </a>
  );
}

const WORKS = [
  { id: 1, code: 'VA—24—042', client: 'Itaú',      title: 'A casa quieta',    director: 'C. Moreira',  format: '60s',  year: 2024, still: 'assets/imagery/placeholder-1.svg' },
  { id: 2, code: 'VA—24—038', client: 'Fiat',      title: 'Strada',           director: 'H. Kovensky', format: '30s',  year: 2024, still: 'assets/imagery/placeholder-2.svg' },
  { id: 3, code: 'VA—24—031', client: 'Natura',    title: 'Ekos',             director: 'C. Moreira',  format: '90s',  year: 2024, still: 'assets/imagery/placeholder-3.svg' },
  { id: 4, code: 'VA—23—088', client: 'Skol',      title: 'Domingo',          director: 'L. Ferraz',   format: '45s',  year: 2023, still: 'assets/imagery/placeholder-1.svg' },
  { id: 5, code: 'VA—23—061', client: 'Bradesco',  title: 'Conta nova',       director: 'H. Kovensky', format: '60s',  year: 2023, still: 'assets/imagery/placeholder-2.svg' },
  { id: 6, code: 'VA—23—042', client: 'Havaianas', title: 'Verão',            director: 'C. Moreira',  format: '15s',  year: 2023, still: 'assets/imagery/placeholder-3.svg' },
];

function WorkGrid({ onOpen }) {
  return (
    <section>
      <div className="bleed" style={{paddingTop: 96, paddingBottom: 32}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 48}}>
          <div>
            <div className="va-sec-eyebrow">INDEX · 2023 — 2024</div>
            <h2 className="va-sec-head" style={{marginTop: 8}}>Work.</h2>
          </div>
          <div style={{display:'flex', gap: 24}}>
            <span className="va-nav-link active">All</span>
            <span className="va-nav-link">2024</span>
            <span className="va-nav-link">2023</span>
            <span className="va-nav-link">Directors</span>
          </div>
        </div>
        <div className="va-grid">
          {WORKS.map(w => <WorkCard key={w.id} work={w} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}

window.WorkGrid = WorkGrid;
window.WORKS = WORKS;
