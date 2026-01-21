import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface NavProps {
  onLanguageChange: (lang: string) => void;
}

export const Header = ({ onLanguageChange }: NavProps) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-neon-darker via-neon-dark to-neon-darker border-none shadow-neon-purple sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(179, 0, 255, 0.8)' }}
            className="font-black bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent animate-glow cursor-pointer flex items-center gap-2"
            style={{ fontSize: '1rem' }}
          >
            <span style={{ fontSize: '1.8rem', display: 'inline-block' }}>⚡</span>
            Science Show
          </motion.div>

          <nav className="hidden md:flex gap-8">
            {['home', 'shows', 'about', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ 
                  color: '#00D9FF',
                  textShadow: '0 0 15px rgba(0, 217, 255, 0.8)',
                  scale: 1.1
                }}
                className="text-neon-blue font-semibold hover:text-neon-green transition-all duration-300"
              >
                {t(`nav.${item}`)}
              </motion.a>
            ))}
          </nav>

          <div className="flex gap-2">
            {['en', 'ru', 'vi'].map((lang) => (
              <motion.button
                key={lang}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  onLanguageChange(lang);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  i18n.language === lang
                    ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple'
                    : 'bg-neon-darker text-neon-blue border-2 border-neon-blue hover:border-neon-purple hover:text-neon-purple hover:shadow-neon'
                }`}
              >
                {lang.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
