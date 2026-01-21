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
    
    // Бизнес логика: отправка данных
    const bookingData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Booking submitted:', bookingData);
    
    // Здесь можно добавить API запрос
    // await fetch('/api/bookings', { method: 'POST', body: JSON.stringify(bookingData) })
    
    setSubmitted(true);
    setFormData({ name: '', email: '', date: '', guests: '1', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
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
    <section id="booking" className="py-24 bg-gradient-to-b from-neon-dark to-neon-darker relative overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        animate={{ x: [-50, 50, -50], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl opacity-15"
      />
      <motion.div
        animate={{ x: [50, -50, 50] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-neon-green rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green bg-clip-text text-transparent"
          >
            {t('booking.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neon-green font-semibold opacity-90"
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
          className="bg-neon-dark rounded-lg border-2 border-neon-purple/30 shadow-md overflow-hidden"
        >
          <div className="p-8 md:p-12 space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-neon-green font-bold mb-3 text-lg">
                {t('booking.name')} ✨
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neon-dark border-2 border-neon-blue rounded-xl px-5 py-4 text-neon-blue placeholder-neon-blue placeholder-opacity-50 focus:outline-none focus:border-neon-green focus:shadow-neon-green focus:shadow-lg transition-all font-semibold text-lg"
                placeholder={t('booking.placeholders.name')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-neon-green font-bold mb-3 text-lg">
                {t('booking.email')} 📧
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neon-dark border-2 border-neon-blue rounded-xl px-5 py-4 text-neon-blue placeholder-neon-blue placeholder-opacity-50 focus:outline-none focus:border-neon-green focus:shadow-neon-green focus:shadow-lg transition-all font-semibold text-lg"
                placeholder={t('booking.placeholders.email')}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-neon-green font-bold mb-3 text-lg">
                  {t('booking.date')} 📅
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-neon-dark border-2 border-neon-blue rounded-xl px-5 py-4 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green focus:shadow-lg transition-all font-semibold text-lg"
                />
              </div>
              <div>
                <label className="block text-neon-green font-bold mb-3 text-lg">
                  {t('booking.guests')} 👥
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-neon-dark border-2 border-neon-blue rounded-xl px-5 py-4 text-neon-blue focus:outline-none focus:border-neon-green focus:shadow-neon-green focus:shadow-lg transition-all font-semibold text-lg"
                >
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i + 1 === 1 ? t('booking.guestSingular') : t('booking.guestPlural')}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-neon-green font-bold mb-3 text-lg">
                {t('booking.message')} 💬
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-neon-dark border-2 border-neon-blue rounded-xl px-5 py-4 text-neon-blue placeholder-neon-blue placeholder-opacity-50 focus:outline-none focus:border-neon-green focus:shadow-neon-green focus:shadow-lg transition-all resize-none font-semibold text-lg leading-relaxed"
                placeholder={t('booking.placeholders.message')}
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-neon-green text-neon-dark font-bold py-4 rounded-lg border-2 border-neon-green/50 hover:border-neon-green transition-all duration-300 text-lg"
            >
              🚀 {t('booking.submit')}
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-gradient-to-r from-neon-green to-neon-blue text-neon-dark p-6 rounded-xl font-black text-center text-lg shadow-neon-green"
              >
                ✨ {t('booking.success')} ✨
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};
