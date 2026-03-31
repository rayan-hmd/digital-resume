import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Notes', path: '/notes' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tighter text-white">
              <Cloud className="h-6 w-6 text-indigo-400" />
              <span>RAYANHAMEED.COM</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    location.pathname === link.path ? "text-white" : "text-zinc-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-white/5 bg-zinc-950">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  location.pathname === link.path ? "bg-zinc-900 text-white" : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Rayan Hameed.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/rayan-hmd" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/rayanhameed" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:rayanhameedd@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
