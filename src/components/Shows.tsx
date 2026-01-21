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
                y: -15, 
                boxShadow: '0 0 60px rgba(57, 255, 20, 0.6)',
                scale: 1.02
              }}
              className={`bg-gradient-to-br ${show.color} p-[3px] rounded-2xl overflow-hidden cursor-pointer group relative`}
            >
              <div className="bg-gradient-to-br from-neon-dark to-neon-darker px-10 py-12 rounded-2xl h-full relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-150 group-hover:rotate-12 transition-all duration-300 inline-block">
                  {show.icon}
                </div>
                <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text mb-4 group-hover:animate-pulse transition-all">
                  {show.title}
                </h3>
                <p className="text-neon-blue opacity-90 group-hover:opacity-100 font-semibold transition-opacity text-lg leading-relaxed">
                  {show.description}
                </p>
                
                {/* Animated border effect */}
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute inset-0 rounded-2xl pointer-events-none border-2 ${
                    show.id === 'tesla' ? 'border-neon-blue' :
                    show.id === 'liquidNitrogen' ? 'border-neon-purple' :
                    show.id === 'chemicalFire' ? 'border-neon-green' : 'border-neon-blue'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
