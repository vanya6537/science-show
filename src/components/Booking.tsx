import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Booking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', date: '', guests: '1', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="booking" className="py-20 bg-neon-dark relative overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent"
          >
            {t('booking.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-neon-blue opacity-90"
          >
            {t('booking.subtitle')}
          </motion.p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-neon-blue to-neon-purple p-[2px] rounded-2xl"
        >
          <div className="bg-neon-darker p-8 md:p-12 rounded-2xl space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-neon-green font-semibold mb-2">
                {t('booking.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neon-dark border-2 border-neon-blue rounded-lg px-4 py-3 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green transition-all"
                placeholder="Your name..."
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-neon-green font-semibold mb-2">
                {t('booking.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neon-dark border-2 border-neon-blue rounded-lg px-4 py-3 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green transition-all"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-neon-green font-semibold mb-2">
                  {t('booking.date')}
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-neon-dark border-2 border-neon-blue rounded-lg px-4 py-3 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green transition-all"
                />
              </div>
              <div>
                <label className="block text-neon-green font-semibold mb-2">
                  {t('booking.guests')}
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-neon-dark border-2 border-neon-blue rounded-lg px-4 py-3 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green transition-all"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i + 1 === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-neon-green font-semibold mb-2">
                {t('booking.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-neon-dark border-2 border-neon-blue rounded-lg px-4 py-3 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green transition-all resize-none"
                placeholder="Tell us about your event..."
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-neon-green to-neon-blue text-neon-dark font-bold py-4 rounded-lg shadow-neon-green hover:shadow-neon transition-all duration-300"
            >
              {t('booking.submit')}
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-neon-green text-neon-dark p-4 rounded-lg font-semibold text-center"
              >
                ✓ {t('booking.success')}
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};
