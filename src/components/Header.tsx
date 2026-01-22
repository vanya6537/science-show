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
      className="sticky top-0 z-50 border-b border-white/10 bg-neon-darker/70 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(179, 0, 255, 0.8)' }}
            className="font-extrabold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent cursor-pointer flex items-center gap-2"
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
                className="text-white/75 font-medium hover:text-white transition-colors"
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
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  i18n.language === lang
                    ? 'bg-white text-neon-darker'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
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
