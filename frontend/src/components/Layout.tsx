import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    [
      'departure-mono text-[1.00rem] sm:text-[1.10rem] font-medium uppercase tracking-[0.34em] transition-colors duration-200',
      isActive ? 'text-white' : 'text-zinc-300 hover:text-white',
    ].join(' ');

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 text-[0.9rem] sm:gap-8 sm:text-[1rem]">
        <NavLink to="/" className={linkClassName} end>
          HOME
        </NavLink>
        <NavLink to="/projects" className={linkClassName}>
          PROJECTS
        </NavLink>
        <NavLink to="/blog" className={linkClassName}>
          BLOG
        </NavLink>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return null;
};
