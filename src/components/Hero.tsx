import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Lightning from './Lightning';
import ElasticHueSlider from './ElasticHueSlider';

export const Hero = () => {
  const { t } = useTranslation();
  const [lightningHue, setLightningHue] = useState(155);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen bg-neon-darker overflow-hidden flex items-center py-4 sm:py-6 md:py-0">
      {/* Animated background lightning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neon-darker via-neon-dark to-neon-darker opacity-90"></div>

        {/* Glowing circle */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-neon-purple/30 to-neon-blue/10 blur-3xl"
        ></motion.div>

        {/* Central lightning beam */}
        <div className="absolute top-0 w-full left-1/2 transform -translate-x-1/2 h-full">
          <Lightning
            hue={lightningHue}
            xOffset={0}
            speed={1.6}
            intensity={0.7}
            size={2}
          />
        </div>

        {/* Additional glow effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-green rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-2 sm:mb-3 md:mb-8 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent animate-glow"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Interactive Hue Slider */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-3 sm:mb-4 md:mb-12"
          >
            <ElasticHueSlider
              value={lightningHue}
              onChange={setLightningHue}
              label="⚡ Настройка молнии"
              min={0}
              max={360}
              step={1}
            />
          </motion.div>

          {/* Neon style subtitle with word-by-word hover gradient effect */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-4 sm:mb-6 md:mb-12"
          >
            <div className="text-xl sm:text-2xl md:text-4xl font-black tracking-widest drop-shadow-2xl flex flex-wrap justify-center">
              {t('hero.neonSubtitle').split(' ').map((word, idx) => (
                <div key={idx} className={idx === 3 ? 'w-full flex justify-center' : ''}>
                  <motion.span
                    animate={{
                      backgroundImage: [
                        'linear-gradient(90deg, rgb(0, 217, 255), rgb(179, 0, 255), rgb(57, 255, 20))',
                        'linear-gradient(90deg, rgb(179, 0, 255), rgb(57, 255, 20), rgb(0, 217, 255))',
                        'linear-gradient(90deg, rgb(57, 255, 20), rgb(0, 217, 255), rgb(179, 0, 255))',
                        'linear-gradient(90deg, rgb(0, 217, 255), rgb(179, 0, 255), rgb(57, 255, 20))',
                      ],
                    }}
                    transition={{
                      duration: 6 + idx * 0.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    whileHover={{
                      scale: 1.08,
                      backgroundImage: 'linear-gradient(90deg, rgb(179, 0, 255), rgb(57, 255, 20), rgb(0, 217, 255))',
                      textShadow: '0 0 40px rgba(179, 0, 255, 1), 0 0 80px rgba(0, 217, 255, 1), 0 0 120px rgba(57, 255, 20, 0.8)',
                    }}
                    className="cursor-pointer inline-block origin-center mx-2 md:mx-3"
                    style={{
                      textShadow: `0 0 20px rgba(57, 255, 20, 0.8), 0 0 40px rgba(0, 217, 255, 0.5)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundImage: 'linear-gradient(90deg, rgb(0, 217, 255), rgb(179, 0, 255), rgb(57, 255, 20))',
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 40px rgba(57, 255, 20, 0.8), 0 0 80px rgba(0, 217, 255, 0.6)',
            }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToBooking}
            className="relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple text-neon-dark font-black text-base md:text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              🚀 {t('hero.cta')}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-green to-neon-blue opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              x: [0, Math.sin(i) * 20, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0
                ? 'bg-neon-blue shadow-neon'
                : i % 3 === 1
                  ? 'bg-neon-purple shadow-neon-purple'
                  : 'bg-neon-green shadow-neon-green'
            }`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${40 + i * 8}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
