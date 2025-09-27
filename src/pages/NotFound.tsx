import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const NotFound = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12 text-center">
        <GlassCard>
          <div className="space-y-8">
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary-500/50 to-primary-300/50 bg-clip-text text-transparent">
              </h1>
              <h1 className="text-9xl md:text-[12rem] font-bold text-primary-500/50">
                404
              </h1>
              <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-white/5">
                404
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
                Page Not Found
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Oops! The page you're looking for seems to have vanished into the digital void. 
                But don't worry, we'll help you find your way back.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/"
                className="group flex items-center space-x-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-lg text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
            </motion.div>

            {/* Search Suggestions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-8 border-t border-white/10"
            >
              <p className="text-sm text-white/50 mb-4">Or explore these popular sections:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'Services', path: '/services' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/30 rounded-lg text-sm text-white/70 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </motion.main>
  );
};

export default NotFound;