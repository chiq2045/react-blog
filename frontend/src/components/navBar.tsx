import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBarBurger = ({
  isActive,
  toggleMenu
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) => (
  <button
    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
    aria-expanded={isActive}
    onClick={toggleMenu}
  >
    <span aria-hidden />
    <span aria-hidden />
    <span aria-hidden />
  </button>
);

const MenuItem = ({
  value,
  to,
  closeMenu
}: {
  value: ReactNode;
  to: string;
  closeMenu: () => void;
}) => (
  <Link className='navbar-item' to={to} onClick={closeMenu}>
    {value}
  </Link>
);

const NavBarMenu = ({
  isActive,
  closeMenu
}: {
  isActive: boolean;
  closeMenu: () => void;
}) => (
  <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
    <div className='navbar-start'>
      <MenuItem value='Home' to='/' closeMenu={closeMenu} />
      <MenuItem value='Posts' to='/posts' closeMenu={closeMenu} />
      <MenuItem value='New Post' to='/posts/new' closeMenu={closeMenu} />
    </div>
  </div>
);

const NavBarBrand = ({
  isActive,
  toggleMenu
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) => (
  <div className='navbar-brand'>
    <Link className='navbar-item' to='/'>
      <img
        src='../../assets/logo_white_background-logo_text.png'
        alt='Ogamba Creates: Success Through Failure'
        style={{ height: '9vh' }}
      />
    </Link>
    <NavBarBurger isActive={isActive} toggleMenu={toggleMenu} />
  </div>
);

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const openMenu = () => setIsActive(true);
  const closeMenu = () => setIsActive(false);
  const toggleMenu = () => (isActive ? closeMenu() : openMenu());

  return (
    <nav className='navbar' role='navigation' aria-label='nav bar'>
      <NavBarBrand isActive={isActive} toggleMenu={toggleMenu} />
      <NavBarMenu isActive={isActive} closeMenu={closeMenu} />
    </nav>
  );
};
