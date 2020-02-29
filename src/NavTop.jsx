import React, { useState, useCallback } from 'react';
import './styles/NavTop.css';
import openIcon from './assets/icons/open-menu.svg';
import closeIcon from './assets/icons/close.svg';

export default function NavTop({
  scrollTo,
  current,
  disableScroll,
  enableScroll,
}) {
  const [open, setOpen] = useState(false);
  const openMenu = useCallback(() => {
    setOpen(true);
    disableScroll();
  }, [setOpen, disableScroll]);
  const closeMenu = useCallback(() => {
    setOpen(false);
    enableScroll();
  }, [setOpen, enableScroll]);

  const goTo = useCallback(
    section => () => {
      closeMenu();
      setTimeout(scrollTo(section), 50);
    },
    [scrollTo]
  );

  return (
    <>
      <div id="nav-wrap" className="nav-mobile">
        <img src={openIcon} alt="open menu" onClick={openMenu} />
      </div>
      <div id={`nav-mobile-expand`} className={open ? 'open' : 'closed'}>
        <img src={closeIcon} alt="open menu" onClick={closeMenu} />
        <div
          id="nav-home"
          onClick={goTo('home')}
          className={`nav-link ${current === 'home'}`}>
          HOME
        </div>
        <div
          onClick={goTo('about')}
          className={`nav-link ${current === 'about'}`}>
          ABOUT
        </div>
        <div
          onClick={goTo('projects')}
          className={`nav-link ${current === 'projects'}`}>
          PROJECTS
        </div>
        <div
          onClick={goTo('contact')}
          className={`nav-link ${current === 'contact'}`}>
          CONTACT
        </div>
      </div>
    </>
  );
}
