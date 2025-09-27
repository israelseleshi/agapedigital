import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // close mobile menu on route change
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-200 supports-[backdrop-filter]:bg-white/60 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Far Left Side */}
          <div className="flex-shrink-0 -ml-2">
            <Link to="/" className="group relative flex items-center space-x-3">
              <img 
                src="/agape-digital-logo-.png" 
                alt="Agape Digital" 
                className="h-16 w-auto transition-all duration-300 group-hover:opacity-80"
              />
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-900 tracking-tight leading-tight">
                  Agape Digital
                </span>
                <span className="text-xs text-red-600 font-medium tracking-tighter">
                  Your Digital Partner!
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-5 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-5 right-5 h-0.5 bg-primary-500 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden py-6 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
