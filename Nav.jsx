// Nav.jsx — sticky top nav. Toggles dark when over imagery.
const { useState, useEffect } = React;

function Nav({ active, onNavigate, dark = false }) {
  const items = [
    { id: 'home',    label: 'Index' },
    { id: 'work',    label: 'Work' },
    { id: 'about',   label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav className={"va-nav" + (dark ? " dark" : "")}>
      <div className="va-nav-inner">
        <a className="va-nav-mark" onClick={() => onNavigate('home')} style={{cursor:'pointer'}}>VirtuAll</a>
        <div className="va-nav-links">
          {items.map(it => (
            <a key={it.id}
               className={"va-nav-link" + (active === it.id ? " active" : "")}
               onClick={() => onNavigate(it.id)}>
              {it.label}
            </a>
          ))}
        </div>
        <span className="va-nav-link" style={{opacity: 0.5}}>PT — EN</span>
      </div>
    </nav>
  );
}

window.Nav = Nav;
