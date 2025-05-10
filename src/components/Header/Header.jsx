import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import './styles.css'
import CV from '../../assets/Ramkumar_resume(2).pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <div className="header-fixed">
      <BrowserRouter>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Ramkumar "}</span>
          <span>{" Dehariya/>"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="toggleInput" 
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label className='toggleLabel' htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#education" onClick={closeMenu}>
            Education
          </NavHashLink>
          <NavHashLink smooth to="#experience" onClick={closeMenu}>
            Experience
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={CV} download className="button">
            Resume
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </BrowserRouter>
    </div>
  );
}