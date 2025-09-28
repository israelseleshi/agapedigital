import { motion } from 'framer-motion';
import { Star, Zap, Handshake } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary designer with 10+ years crafting digital experiences that inspire and convert.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack architect passionate about building scalable, high-performance applications.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'UX Strategist',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'User experience expert focused on creating intuitive interfaces that delight users.'
    },
    {
      name: 'David Kim',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Infrastructure specialist ensuring our solutions are secure, scalable, and reliable.'
    }
  ];


  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We never compromise on quality and always strive for perfection in everything we create.',
      className: 'md:col-span-2',
      delay: 0.1
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.',
      className: 'md:col-span-1',
      delay: 0.2
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We believe in building long-term relationships based on trust, transparency, and mutual success.',
      className: 'md:col-span-1',
      delay: 0.3
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-8 bg-white min-h-screen"
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
            About Agape Digital
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of digital craftspeople dedicated to creating extraordinary experiences
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tighter">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2019, Agape Digital emerged from a simple belief: that every business deserves 
                a digital presence as unique and compelling as their vision. What started as a small team 
                of passionate developers and designers has grown into a full-service digital agency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We've had the privilege of working with startups, established businesses, and everything 
                in between, always with the same commitment to excellence and attention to detail that 
                sets us apart in the digital landscape.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tighter">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The talented individuals behind every successful project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass-light rounded-2xl p-8 premium-hover">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full mx-auto" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tighter">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision and define our approach to digital excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-red-600 rounded-2xl p-8 premium-hover flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-block">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed flex-grow">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.main>
  );
};

export default About;