import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowRight, BookOpen } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Resources', path: '/resources' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <footer className="relative mt-32 py-20">
      <div className="absolute inset-0 bg-white border-t border-gray-200" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-consistent rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get the latest insights on web development, design trends, and digital strategy delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link to="/" className="mb-6 group flex items-center space-x-3">
              <img 
                src="/agape-digital-logo-.png" 
                alt="Agape Digital" 
                className="h-20 w-auto transition-all duration-300 group-hover:opacity-80"
              />
              <span className="text-2xl font-normal text-gray-900 tracking-tighter">
                Agape Digital
              </span>
            </Link>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-lg">
              Creating exceptional digital experiences with premium design and cutting-edge technology. 
              Transform your vision into reality with our expert team.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-600 hover:text-primary-500 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary-500 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.path}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-primary-500 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span>{link.name}</span>
                      {link.name === 'Blog' && <BookOpen className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                      {link.name !== 'Blog' && <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
                <a href="mailto:contact@agapedigital.com.et" className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  contact@agapedigital.com.et
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
                <a href="tel:+251-920-19-04-38" className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  +251-920-19-04-38
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">Addis Ababa, Ethiopia</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-500 text-sm">
                © 2024 Agape Digital. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <motion.a 
                  href="#" 
                  whileHover={{ y: -1 }}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -1 }}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -1 }}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Sitemap
                </motion.a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">Crafted with precision and passion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;