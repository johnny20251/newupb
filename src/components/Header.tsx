import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Latest Song', path: '/new' },
  { name: 'My Journey', path: '/my-journey' },
  { name: 'Discography', path: '/discography' },
  { name: 'Videos', path: '/videos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Press Kit.PDF', url: 'https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf' },
  { name: 'Photos', path: '/photos' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    // Close menu if open
    setIsMenuOpen(false);
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Force page refresh if already on home page
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  const handleNavClick = () => {
    // Close menu
    setIsMenuOpen(false);
    // Scroll to top immediately
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-gradient-to-r from-black/90 via-black/70 to-black/90 backdrop-blur-md z-50 flex items-center px-4 shadow-lg border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="text-white font-extrabold text-2xl tracking-tight flex items-center gap-2 group"
        >
          <Music size={24} className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            Bruklin
          </span>
        </Link>

        <button
          ref={buttonRef}
          className="w-12 h-12 flex items-center justify-center text-white rounded-full 
                   hover:bg-white/20 active:bg-white/30 transition-all duration-200 z-50 ml-auto
                   touch-manipulation"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'menu'}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-[60px] left-0 right-0 bg-gradient-to-b from-black to-gray-900 z-50 max-h-[calc(100vh-60px)] overflow-y-auto border-b border-white/10"
            >
              <nav className="flex flex-col items-start pt-8 pb-12 px-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="text-white text-lg font-semibold tracking-wide 
                                 hover:text-blue-400 hover:bg-white/5 transition-all duration-300
                                 w-full py-2 block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path!}
                        onClick={handleNavClick}
                        className={`text-white text-lg font-semibold tracking-wide 
                                   hover:text-blue-400 hover:bg-white/5 transition-all duration-300
                                   w-full py-2 block ${
                                     location.pathname === link.path ? 'text-blue-400' : ''
                                   }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;