const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Загружаем переменные окружения из .env файла
const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL || 'https://science-show.example.com';

// Проверяем наличие BOT_TOKEN
if (!BOT_TOKEN) {
  console.error('❌ Ошибка: BOT_TOKEN не найден в .env файле!');
  console.error('Создай файл .env в папке bot/ с переменной BOT_TOKEN');
  process.exit(1);
}

// Создаём экземпляр бота
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

console.log('🤖 Science Show Bot запущен...');

// Команда /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🎪 Открыть Веб-Приложение',
            web_app: { url: WEBAPP_URL }
          }
        ],
        [
          {
            text: '📋 Забронировать Шоу',
            callback_data: 'book_show'
          },
          {
            text: 'ℹ️ О нас',
            callback_data: 'about'
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 
    '🌟 Добро пожаловать в Science Show Da Nang!\n\n' +
    '✨ Невероятная Научная Магия от Виктора Вальмонта\n\n' +
    'Выберите действие:', 
    keyboard
  );
});

// Команда /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,
    '📚 Доступные команды:\n' +
    '/start - Главное меню\n' +
    '/shows - Посмотреть все шоу\n' +
    '/book - Забронировать шоу\n' +
    '/contact - Контактная информация\n' +
    '/help - Справка'
  );
});

// Команда /shows
bot.onText(/\/shows/, (msg) => {
  const chatId = msg.chat.id;
  const showsMessage = 
    '🎪 *Наши Шоу:*\n\n' +
    '❄️ *Взрыв Сухого Льда* - Завораживающие эффекты дыма\n' +
    '🧊 *Волшебство Жидкого Азота* - Экстремальные холодные демонстрации\n' +
    '⚡ *Молния Катушки Тесла* - Высоковольтное электричество\n' +
    '🔥 *Химический Огонь* - Спектакулярные огненные эффекты\n\n' +
    'Нажми кнопку ниже чтобы забронировать!';
  
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '📋 Открыть форму бронирования',
            web_app: { url: `${WEBAPP_URL}#booking` }
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, showsMessage, { parse_mode: 'Markdown', ...keyboard });
});

// Команда /contact
bot.onText(/\/contact/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,
    '📞 *Контактная информация:*\n\n' +
    '📧 Email: viktorvalmontshow@example.com\n' +
    '📱 Телефон: +84 xxx xxx xxx\n' +
    '📍 Адрес: Da Nang, Vietnam\n\n' +
    'Работаем ежедневно с 10:00 до 22:00',
    { parse_mode: 'Markdown' }
  );
});

// Обработка callback кнопок
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  
  switch(query.data) {
    case 'book_show':
      bot.answerCallbackQuery(query.id, { text: '📋 Откроется форма бронирования...' });
      const bookingKeyboard = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '📋 Перейти к бронированию',
                web_app: { url: `${WEBAPP_URL}#booking` }
              }
            ]
          ]
        }
      };
      bot.sendMessage(chatId, 'Нажми кнопку чтобы забронировать шоу:', bookingKeyboard);
      break;
      
    case 'about':
      bot.answerCallbackQuery(query.id);
      const aboutKeyboard = {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '🌐 Больше информации',
                web_app: { url: WEBAPP_URL }
              }
            ]
          ]
        }
      };
      bot.sendMessage(chatId, 
        '🎪 *Science Show Da Nang*\n\n' +
        'Невероятная Научная Магия от Виктора Вальмонта\n\n' +
        '✨ Зрелищные химические демонстрации\n' +
        '⚡ Интерактивные эффекты\n' +
        '🎨 UV/Неоновое оформление\n\n' +
        'Идеально для:\n' +
        '🎓 Образовательных мероприятий\n' +
        '🎉 Детских праздников\n' +
        '👨‍👩‍👧‍👦 Семейных событий\n' +
        '🎯 Корпоративных мероприятий',
        { parse_mode: 'Markdown', ...aboutKeyboard }
      );
      break;
  }
});

// Обработка ошибок
bot.on('polling_error', (error) => {
  console.log('❌ Ошибка polling:', error);
});

bot.on('error', (error) => {
  console.log('❌ Ошибка бота:', error);
});

console.log('✅ Бот запущен. Используй /help для справки.');
