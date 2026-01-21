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
    <section id="shows" className="py-20 bg-neon-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent"
        >
          {t('shows.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {shows.map((show) => (
            <motion.div
              key={show.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)' }}
              className={`bg-gradient-to-br ${show.color} p-[2px] rounded-xl overflow-hidden cursor-pointer group`}
            >
              <div className="bg-neon-darker px-8 py-10 rounded-xl h-full">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {show.icon}
                </div>
                <h3 className="text-2xl font-bold text-neon-blue mb-3 group-hover:text-neon-green transition-colors">
                  {show.title}
                </h3>
                <p className="text-neon-blue opacity-80 group-hover:opacity-100 transition-opacity">
                  {show.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
