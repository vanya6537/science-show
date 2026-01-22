import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Lightning from './Lightning';
import { LightningWishControl } from './LightningWishControl';
import { NeonBackdrop } from './NeonBackdrop';

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

  const scrollToShows = () => {
    const showsSection = document.getElementById('shows');
    if (showsSection) {
      showsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <NeonBackdrop intensity="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[88vh] md:min-h-screen grid grid-cols-1 md:grid-cols-12 gap-3 items-center py-10 md:py-16"
        >
          <div className="md:col-span-7">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-6 -inset-y-4 blur-2xl opacity-50"
                  style={{
                    background:
                      'radial-gradient(60% 80% at 50% 50%, rgba(0,217,255,0.22), rgba(179,0,255,0.18), rgba(57,255,20,0.10), transparent 70%)',
                  }}
                />
                <span className="relative bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(179,0,255,0.35)]">
                {t('hero.title')}
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToBooking}
                className="px-6 py-3 rounded-xl bg-white text-neon-darker font-semibold border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                {t('hero.cta')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToShows}
                className="px-6 py-3 rounded-xl bg-white/5 text-white/90 font-semibold border border-white/10 hover:bg-white/10"
              >
                {t('nav.shows')}
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <LightningWishControl
                  value={lightningHue}
                  onChange={setLightningHue}
                  label={t('hero.lightningSettings')}
                  min={0}
                  max={360}
                  step={1}
                />
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 opacity-90">
                <Lightning hue={lightningHue} xOffset={0} speed={1.2} intensity={0.55} size={2.2} />
              </div>
              <div className="relative p-6 md:p-8 h-[30vh] md:h-[60vh]">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-white/80">
                  <span className="text-neon-blue">⚡</span>
                  {t('hero.lightningSettings')}
                </div>
                <div className="mt-4 text-white/80 text-sm leading-relaxed">
                  {t('hero.neonSubtitle')}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
