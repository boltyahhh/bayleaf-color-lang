import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';
import ScrollIndicator from '../ScrollIndicator';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: "Address",
      content: "Wiesenhüttenplatz 25, 60329 Frankfurt am Main, Germany"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+49 (0) 69 123 456 78"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "info@madraspalace.de"
    },
    {
      icon: <Clock size={20} />,
      title: "Opening Hours",
      content: "Mon-Fri: 12:00 - 22:00\nSat-Sun: 12:00 - 23:00"
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover md:object-center object-[25%] min-h-screen min-w-full"
        >
          <source src="https://ik.imagekit.io/jacw2jgvs/spices_contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gray-900/60 z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold text-center mb-4">Contact Us</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto text-center mb-12">
            We'd love to hear from you! Make a reservation or send us your questions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur p-8 rounded-lg shadow-xl"
          >
            <h3 className="font-display text-2xl mb-6 text-gray-900">Book a Table</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-1">Time</label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                    required
                  >
                    <option value="">Select time</option>
                    {['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-gray-700 mb-1">Number of Guests</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                  <option value="7">6+ people</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Special Requests</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spice-500"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur p-8 rounded-lg shadow-xl"
          >
            <h3 className="font-display text-2xl mb-8 text-gray-900">Get in Touch</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-spice-100 p-3 rounded-full mr-4">
                    <span className="text-spice-600">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="font-medium text-gray-900 mb-4">Find Us</h4>
              <div className="h-[200px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.904658201547!2d8.663693376927796!3d50.10645487153371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea2c90708a9%3A0x79a6db59f4a51632!2sWiesenh%C3%BCttenpl.%2025%2C%2060329%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sus!4v1696456454015!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <ScrollIndicator 
        targetSection="footer"
        text={translations.common.continue[language]}
        theme="light"
      />
    </section>
  );
};

export default ContactSection;