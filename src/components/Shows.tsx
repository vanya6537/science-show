import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Show {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  shadowColor: string;
}

export const Shows = () => {
  const { t } = useTranslation();

  const handleShowBooking = (showTitle: string) => {
    // Get existing message from sessionStorage
    const existingMessage = sessionStorage.getItem('bookingShowMessage') || '';
    
    // Check if this show is already in the message
    if (existingMessage.includes(showTitle)) {
      // Show is already added, just scroll to booking
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Append new show to the list
    const newMessage = existingMessage 
      ? existingMessage + `\n✓ ${showTitle}`
      : `Заинтересован в шоу:\n✓ ${showTitle}`;
    
    sessionStorage.setItem('bookingShowMessage', newMessage);
    
    // Dispatch custom event to notify Booking component
    window.dispatchEvent(new Event('showAdded'));
    
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shows: Show[] = [
    {
      id: 'dryIce',
      title: t('shows.dryIce'),
      description: t('shows.dryIceDesc'),
      icon: '❄️',
      color: 'from-neon-blue to-neon-purple',
      shadowColor: 'shadow-neon',
    },
    {
      id: 'liquidNitrogen',
      title: t('shows.liquidNitrogen'),
      description: t('shows.liquidNitrogenDesc'),
      icon: '🧊',
      color: 'from-neon-purple to-neon-green',
      shadowColor: 'shadow-neon-purple',
    },
    {
      id: 'tesla',
      title: t('shows.tesla'),
      description: t('shows.teslaDesc'),
      icon: '⚡',
      color: 'from-neon-green to-neon-blue',
      shadowColor: 'shadow-neon-green',
    },
    {
      id: 'chemicalFire',
      title: t('shows.chemicalFire'),
      description: t('shows.chemicalFireDesc'),
      icon: '🔥',
      color: 'from-neon-blue to-neon-green',
      shadowColor: 'shadow-neon',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="shows" className="py-20 bg-gradient-to-b from-neon-darker to-neon-dark relative overflow-hidden">
      {/* Background animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-center mb-16 bg-gradient-to-r from-neon-green via-neon-purple to-neon-blue bg-clip-text text-transparent animate-glow"
        >
          {t('shows.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {shows.map((show) => (
            <motion.div
              key={show.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                boxShadow: '0 8px 20px rgba(57, 255, 20, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
              className={`bg-neon-dark rounded-lg border-2 border-neon-blue/30 overflow-hidden cursor-pointer group relative h-full shadow-md`}
            >
              <div className="px-6 md:px-8 py-8 md:py-10 h-full flex flex-col">
                <motion.div
                  className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block"
                  whileHover={{ rotate: 5 }}
                >
                  {show.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-neon-green mb-3 group-hover:text-neon-blue transition-colors">
                  {show.title}
                </h3>
                <p className="text-neon-blue opacity-80 group-hover:opacity-100 font-medium transition-opacity text-sm md:text-base leading-relaxed flex-grow">
                  {show.description}
                </p>
                
                {/* Book button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleShowBooking(show.title)}
                  className="mt-6 w-full bg-neon-green text-neon-dark font-bold py-3 rounded-lg border-2 border-neon-green/50 hover:border-neon-green transition-all duration-300"
                >
                  📋 {t('shows.book') || 'Book'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
