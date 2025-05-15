import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';
import ScrollIndicator from '../ScrollIndicator';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Traditional Masala Dosa",
    imageUrl: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    category: "food",
    description: "Our signature crispy dosa served with authentic sambar and chutneys"
  },
  {
    id: "2",
    title: "Main Dining Area",
    imageUrl: "https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg",
    category: "restaurant",
    description: "Elegant dining space with traditional South Indian elements"
  },
  {
    id: "3",
    title: "Chef's Special Curry",
    imageUrl: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    category: "food",
    description: "Aromatic curry prepared with hand-ground spices"
  },
  {
    id: "4",
    title: "Cultural Events",
    imageUrl: "https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg",
    category: "events",
    description: "Regular cultural performances and traditional music"
  },
  {
    id: "5",
    title: "South Indian Thali",
    imageUrl: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    category: "food",
    description: "Complete meal with variety of curries, rice, and accompaniments"
  },
  {
    id: "6",
    title: "Private Dining",
    imageUrl: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
    category: "restaurant",
    description: "Intimate dining space for special occasions"
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState('all');
  const { language } = useLanguage();
  
  const textRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const categories = ['all', 'food', 'restaurant', 'events'];

  return (
    <section id="gallery" className="relative py-24 bg-cream-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={textRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <Image className="mr-2 text-spice-600" size={20} />
            <span className="uppercase tracking-widest text-sm text-spice-600">Our Visual Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Take a visual journey through our restaurant, cuisine, and cultural events
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center flex-wrap gap-4 my-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === category 
                  ? 'bg-spice-600 text-white shadow' 
                  : 'bg-cream-200 text-gray-700 hover:bg-spice-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <motion.img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-white font-display text-xl mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Scroll Down Indicator */}
        <ScrollIndicator 
          targetSection="contact"
          text={translations.common.continue[language]}
          theme="dark"
        />

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-display mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                  <span className="text-sm text-gray-500 mt-2 block capitalize">
                    Category: {selectedImage.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;