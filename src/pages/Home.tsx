import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextType from '../components/TextType';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance that delivers exceptional user experiences across all devices.'
    },
    {
      icon: Star,
      title: 'Premium Design',
      description: 'Beautiful, modern interfaces crafted with attention to every detail and interaction.'
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Solutions designed around your users needs and business objectives.'
    }
  ];


  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-gray-900 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tighter text-gray-900"
              >
                <TextType
                  text={["Your Digital Partner", "Your Tech Partner"]}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                  textColors={["#1f2937", "#10b981"]}
                  className="inline-block"
                  loop={true}
                />
              </motion.div>

              <motion.p 
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We transform your ideas into powerful digital solutions. From innovative websites to cutting-edge applications, we're here to elevate your business to new heights.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 premium-button"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img 
                  src="/agape-digital-logo-.png" 
                  alt="Agape Digital" 
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                />
                {/* Floating particles around logo */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tighter">
            Why Choose Agape Digital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with creative excellence to deliver solutions that exceed expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass-light rounded-2xl p-8 premium-hover">
                <div className="text-center space-y-6">
                  <div className="inline-block">
                    <Icon className="w-12 h-12 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tighter">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to create something extraordinary. From concept to launch, 
              we'll be your trusted partner in digital success.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-600/25"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="px-10 py-5 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-gray-400 rounded-xl text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;