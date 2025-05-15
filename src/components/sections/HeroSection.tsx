import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Utensils, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';
import ScrollIndicator from '../ScrollIndicator';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (quoteRef.current) {
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full"
    >
      {/* Background Video */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover md:object-center object-[25%] min-h-screen min-w-full"
        >
          <source src="src\assests\desktop.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/10 z-0"></div>
      </div>

      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-16 md:left-24 lg:left-32 text-white">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-spice-400 flex items-center mb-6"
          >
            <Utensils className="mr-2" size={20} />
            <span className="uppercase tracking-widest text-sm">
              {translations.hero.tagline[language]}
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            {translations.hero.title[language]}
          </h1>

          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            {translations.hero.description[language]}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="btn-primary"
            >
              {translations.hero.exploreMenu[language]}
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="bg-white text-spice-500 py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-all"
            >
              {translations.hero.bookTable[language]}
            </Link>
          </div>

          <div 
            ref={quoteRef}
            className="bg-white/20 p-6 rounded-lg border border-white/30 shadow-lg max-w-md"
          >
            <div className="flex items-start">
              <Quote className="text-spice-400 mr-3 flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-white font-medium italic text-lg md:text-xl mb-3">
                  {translations.hero.quote[language]}
                </p>
                <p className="text-white/100 text-sm text-right">
                  - Chef Ranveer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator 
        targetSection="about"
        text={translations.hero.scrollDown[language]}
        theme="light"
      />
    </section>
  );
};