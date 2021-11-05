import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({
  value,
  to,
  closeMenu
}: {
  value: ReactNode;
  to: string;
  closeMenu: () => void;
}) => (
  <Link className='nav-item text-center px-4' to={to} onClick={closeMenu}>
    {value}
  </Link>
);

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const openMenu = () => setIsActive(true);
  const closeMenu = () => setIsActive(false);
  const toggleMenu = () => (isActive ? closeMenu() : openMenu());

  return (
    <nav
      className='header header-fixed header-animated'
      role='navigation'
      aria-label='nav bar'
      style={{ height: '5vh' }}
    >
      <div className='header-brand w-10 px-4'>
        <Link className='nav-item no-hover w-100' to='/'>
          <img
            src='../../assets/logo_white_background-logo_text.png'
            alt='Ogamba Creates: Success Through Failure'
          />
        </Link>
        <button
          className={`nav-item nav-btn px-4 ${isActive ? 'is-active' : ''}`}
          aria-expanded={isActive}
          onClick={toggleMenu}
        >
          <span aria-hidden />
          <span aria-hidden />
          <span aria-hidden />
        </button>
      </div>
      <div className={`header-nav ${isActive ? 'is-active' : ''}`}>
        <div className='nav-left'>
          <MenuItem value='Home' to='/' closeMenu={closeMenu} />
          <MenuItem value='Posts' to='/posts' closeMenu={closeMenu} />
          <MenuItem value='New Post' to='/posts/new' closeMenu={closeMenu} />
        </div>
      </div>
    </nav>
  );
};
