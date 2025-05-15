import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';
import ScrollIndicator from '../ScrollIndicator';

const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  const stats = [
    { ...translations.about.stats.experience, color: 'spice' },
    { ...translations.about.stats.recipes, color: 'leaf' },
    { ...translations.about.stats.customers, color: 'chili' }
  ];

  const features = [
    {
      ...translations.about.features.ingredients,
      color: 'spice'
    },
    {
      ...translations.about.features.recipes,
      color: 'leaf'
    },
    {
      ...translations.about.features.ambiance,
      color: 'chili'
    }
  ];

  return (
    <section id="about" className="relative py-24 pb-32 overflow-hidden bg-black/10">
      <div className="container mx-auto px-4 pr-6 box-border relative z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-spice-400 scrollbar-track-cream-100">
        <div ref={textRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <BookOpen className="mr-2 text-spice-600" size={20} />
            <span className="uppercase tracking-widest text-sm text-spice-600">
              {translations.about.subtitle[language]}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            {translations.about.title[language]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {translations.about.description[language]}
          </motion.p>
        </div>
        
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pr-8"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-6 text-white">
              {translations.about.legacy.title[language]}
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {translations.about.legacy.story[language]}
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              {translations.about.legacy.continuation[language]}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label[language]}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="flex items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600 mr-4`}>
                    <span className="text-2xl font-bold">{stat.number}+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{stat.label[language]}</h4>
                    <p className="text-sm text-white/60">{stat.subtext[language]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[600px] canvas-container rounded-lg overflow-hidden shadow-xl scrollbar-none"
          >
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title[language]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`bg-${feature.color}-50/10 p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl backdrop-blur-sm`}
              >
                <div className={`w-12 h-12 rounded-full bg-${feature.color}-500 text-white flex items-center justify-center mb-4`}>
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl mb-3 text-white">
                  {feature.title[language]}
                </h3>
                <p className="text-white/80">
                  {feature.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <ScrollIndicator 
        targetSection="menu"
        text={translations.about.cta[language]}
        theme="light"
      />
    </section>
  );
};

export default AboutSection;