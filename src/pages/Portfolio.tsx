import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'LuxuryTech Platform',
      category: 'E-Commerce',
      description: 'Premium e-commerce platform for luxury technology products with advanced filtering and AR preview capabilities.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'AR.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'MindfulSpace App',
      category: 'Mobile App',
      description: 'Meditation and wellness mobile application with personalized sessions and progress tracking.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'FinanceFlow Dashboard',
      category: 'Web Application',
      description: 'Comprehensive financial dashboard for investment tracking with real-time data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'EcoTour Platform',
      category: 'Travel & Tourism',
      description: 'Sustainable travel booking platform connecting eco-conscious travelers with green accommodations.',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Stripe', 'Supabase', 'Mapbox'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'HealthLink Network',
      category: 'Healthcare',
      description: 'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'WebRTC', 'AWS', 'HIPAA Compliance'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'CreativeHub Studio',
      category: 'Creative Portfolio',
      description: 'Interactive portfolio platform for creative professionals with dynamic project showcases.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Gatsby', 'Three.js', 'Framer Motion', 'Contentful'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-white min-h-screen"
    >
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tighter">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects and the innovative solutions we've crafted for our clients
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-light rounded-2xl p-8 premium-hover group overflow-hidden">
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-primary-500 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gray-100 border border-gray-200 rounded-full text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="glass-light rounded-2xl p-8 premium-hover">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tighter">
              Ready to Start Your Project?
            </h2>
            <p className="text-base text-gray-600">
              Let's collaborate to bring your vision to life with the same level of excellence and attention to detail.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-lg text-white font-semibold transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Portfolio;