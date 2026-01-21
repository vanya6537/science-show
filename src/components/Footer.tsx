import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-neon-darker border-t border-neon-purple py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            whileHover={{ x: 5 }}
            className="text-neon-blue"
          >
            <h3 className="text-lg font-bold text-neon-green mb-3">
              ⚡ Science Show Da Nang
            </h3>
            <p className="opacity-70">
              Mind-blowing chemical demonstrations with spectacular visual effects.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            className="text-neon-blue"
          >
            <h3 className="text-lg font-bold text-neon-green mb-3">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-2 opacity-70">
              <li>📧 info@scienceshow.vn</li>
              <li>📱 +84 xxx xxx xxx</li>
              <li>📍 Da Nang, Vietnam</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            className="text-neon-blue"
          >
            <h3 className="text-lg font-bold text-neon-green mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {['f', 'i', 't'].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#00D9FF' }}
                  className="text-neon-purple text-xl hover:text-neon-green transition-colors"
                >
                  {icon === 'f' && '👍'}
                  {icon === 'i' && '📷'}
                  {icon === 't' && '𝕏'}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8 origin-left"
        />

        <div className="text-center text-neon-blue opacity-60 text-sm">
          <p>
            © {currentYear} Science Show Da Nang. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
