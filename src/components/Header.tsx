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
      className="bg-neon-darker border-b border-neon-blue shadow-neon sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent"
          >
            ⚡ Science Show
          </motion.div>

          <nav className="hidden md:flex gap-8">
            {['home', 'shows', 'about', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ color: '#00D9FF', textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' }}
                className="text-neon-blue hover:text-neon-green transition-colors"
              >
                {t(`nav.${item}`)}
              </motion.a>
            ))}
          </nav>

          <div className="flex gap-2">
            {['en', 'ru', 'vi'].map((lang) => (
              <motion.button
                key={lang}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  onLanguageChange(lang);
                }}
                className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
                  i18n.language === lang
                    ? 'bg-neon-purple text-white shadow-neon-purple'
                    : 'bg-neon-darker text-neon-blue border border-neon-blue hover:border-neon-purple'
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
