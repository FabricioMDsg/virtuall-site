// Contact.jsx — brief form. Submits to console only.
const { useState: useStateContact } = React;

function Contact() {
  const [form, setForm] = useStateContact({ name: '', email: '', brand: '', brief: '' });
  const [sent, setSent] = useStateContact(false);

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <section className="bleed" style={{paddingTop: 96, paddingBottom: 96}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 96}}>
        <div>
          <div className="va-sec-eyebrow">CONTATO · BRIEFING</div>
          <h2 className="va-sec-head" style={{marginTop: 16}}>Mande<br/>seu briefing.</h2>
          <p className="va-body" style={{marginTop: 32, maxWidth: 360, color: 'var(--fg-2)'}}>
            Respondemos em 24h. Se quiser pular o formulário,
            escreva direto para <a style={{borderBottom:'1px solid currentColor'}}>contato@virtuall.com.br</a>.
          </p>
          <div style={{marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--ink)'}}>
            <div className="va-sec-eyebrow">SÃO PAULO</div>
            <div className="va-body" style={{marginTop: 8}}>R. Aspicuelta, 200<br/>Vila Madalena · 05433</div>
          </div>
        </div>

        {sent ? (
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding: 48, boxShadow: 'var(--shadow-inset-strong)'}}>
            <div className="va-sec-eyebrow">RECEBIDO · 200</div>
            <h3 style={{fontFamily:'var(--font-sans)', fontWeight: 900, fontSize: 56, lineHeight: 0.9, letterSpacing: '-0.04em', textTransform:'lowercase', marginTop: 16}}>
              Obrigado.<br/>Voltamos em 24h.
            </h3>
            <a className="va-btn va-btn-ghost" style={{marginTop: 32}} onClick={() => setSent(false)}>← Mandar outro</a>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="va-field">
              <label>NOME</label>
              <input className="va-input" value={form.name} onChange={e => upd('name', e.target.value)} placeholder="Carolina Moreira" />
            </div>
            <div className="va-field">
              <label>EMAIL</label>
              <input className="va-input" value={form.email} onChange={e => upd('email', e.target.value)} placeholder="carol@brand.co" />
            </div>
            <div className="va-field">
              <label>MARCA / AGÊNCIA</label>
              <input className="va-input" value={form.brand} onChange={e => upd('brand', e.target.value)} placeholder="Itaú · Africa" />
            </div>
            <div className="va-field">
              <label>BRIEFING</label>
              <textarea className="va-input" rows="6" value={form.brief} onChange={e => upd('brief', e.target.value)} placeholder="60s · TV + digital · entrega em 8 semanas. Diretor preferido: Carol." />
            </div>
            <button type="submit" className="va-btn va-btn-primary">Mandar briefing →</button>
          </form>
        )}
      </div>
    </section>
  );
}

window.Contact = Contact;
