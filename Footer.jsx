// Footer.jsx — blackline-topped footer with giant wordmark.
function Footer() {
  return (
    <footer className="va-footer">
      <div className="bleed">
        <div className="va-footer-mark">VirtuAll</div>
        <div className="va-footer-row">
          <div>
            <div className="va-footer-col-lab">CONTATO</div>
            <div className="va-footer-col">
              <a>contato@virtuall.com.br</a>
              <a>+55 11 3000—0000</a>
            </div>
          </div>
          <div>
            <div className="va-footer-col-lab">SÃO PAULO</div>
            <div className="va-footer-col">
              <a>R. Aspicuelta, 200</a>
              <a>Vila Madalena · 05433</a>
            </div>
          </div>
          <div>
            <div className="va-footer-col-lab">SOCIAL</div>
            <div className="va-footer-col">
              <a>Instagram ↗</a>
              <a>Vimeo ↗</a>
              <a>LinkedIn ↗</a>
            </div>
          </div>
          <div>
            <div className="va-footer-col-lab">DIRETORIA</div>
            <div className="va-footer-col">
              <a>Carolina Moreira</a>
              <a>Hugo Kovensky</a>
              <a>Lucas Ferraz</a>
              <a>+ 9 directors</a>
            </div>
          </div>
        </div>
        <div className="va-footer-bottom">
          <span>© VirtuAll · 2010 — 2024</span>
          <span>Feito em São Paulo</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
