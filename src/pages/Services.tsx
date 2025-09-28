import { motion } from 'framer-motion';
import { Palette, Code, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites and bespoke software solutions built with cutting-edge technology and tailored to your unique business requirements.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'CMS Integration', 'API Development', 'Scalable Architecture']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Package',
      price: '25,000',
      description: 'Ideal for small businesses or portfolio sites',
      features: [
        '5-page website',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        '3 rounds of revisions',
        '1 month support'
      ],
      popular: false
    },
    {
      name: 'Standard Package',
      price: '45,000',
      description: 'Suitable for growing businesses that need more features',
      features: [
        '10-page website',
        'CMS integration',
        'Advanced SEO optimization',
        'E-commerce functionality',
        'Social media integration',
        '5 rounds of revisions',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '75,000',
      description: 'For large-scale projects requiring advanced functionality',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Performance optimization',
        'Security features',
        'Unlimited revisions',
        '6 months support'
      ],
      popular: false
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
            Website Design & Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Custom-built websites designed to elevate your brand and exceed your expectations
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-light rounded-2xl p-10 premium-hover h-full">
                <div className="space-y-8 h-full flex flex-col">
                  <div className="inline-block">
                    <Icon className="w-16 h-16 text-red-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                  </div>
                  
                  <div className={`${service.title === 'Website Development' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}`}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tighter">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our flexible packages are designed to fit your needs, from a simple website refresh to a complex e-commerce solution. All packages are fully customizable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-red-600 text-white scale-105 shadow-2xl' 
                  : 'glass-light'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-2 ${plan.popular ? 'text-red-100' : 'text-gray-600'}`}>
                    ETB
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-red-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-red-600'}`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-red-600 hover:bg-red-50'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default Services;