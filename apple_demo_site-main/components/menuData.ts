// Shape based on the real 2-column layout:
// Column 1: section title + bold "featured" links + a smaller "compare" link
// Column 2: secondary title + a couple of smaller regular links
export const MENU_DATA = {
  Store: {
    title: 'Магазин',
    featured: [
      'Переглянути магазин',
      'Mac',
      'iPhone',
      'iPad',
      'Apple Watch',
      'AirPods',
      'TV та дім',
    ],
    compareLink: null,
    moreTitle: 'Покупки в Apple',
    moreLinks: [
      'Спеціальні пропозиції',
      'Apple Trade In',
      'Фінансування',
      'Статус замовлення',
      'Допомога з покупкою',
    ],
  },

  Mac: {
    title: 'Дізнатися про Mac',
    featured: [
      'Переглянути всі моделі Mac',
      'MacBook Air',
      'MacBook Pro',
      'iMac',
      'Mac mini',
      'Mac Studio',
      'Дисплеї',
    ],
    compareLink: 'Порівняння моделей Mac',
    moreTitle: 'Більше від Mac',
    moreLinks: ['Підтримка Mac'],
  },

  iPad: {
    title: 'Переглянути iPad',
    featured: [
      'Переглянути всі моделі iPad',
      'iPad Pro',
      'iPad Air',
      'iPad',
      'iPad mini',
    ],
    compareLink: 'Порівняння моделей iPad',
    moreTitle: 'Більше від iPad',
    moreLinks: ['Apple Pencil', 'Клавіатури', 'Підтримка iPad'],
  },

  iPhone: {
    title: 'Переглянути всі моделі iPhone',
    featured: [
      'iPhone 17 Pro',
      'iPhone Air',
      'iPhone 17',
      'iPhone 17e',
      'iPhone 16',
    ],
    compareLink: 'Порівняння моделей iPhone',
    moreTitle: 'Більше від iPhone',
    moreLinks: ['Перехід на iPhone', 'Аксесуари до iPhone', 'Підтримка iPhone'],
  },

  Watch: {
    title: 'Переглянути Apple Watch',
    featured: [
      'Apple Watch Ultra 3',
      'Apple Watch Series 11',
      'Apple Watch SE',
    ],
    compareLink: 'Порівняння моделей Watch',
    moreTitle: 'Більше від Watch',
    moreLinks: ['Ремінці Apple Watch', 'Підтримка Watch'],
  },

  AirPods: {
    title: 'Переглянути AirPods',
    featured: ['AirPods 4', 'AirPods Pro 3', 'AirPods Max'],
    compareLink: 'Порівняння моделей AirPods',
    moreTitle: 'Більше від AirPods',
    moreLinks: ['Підтримка AirPods'],
  },

  TV: {
    title: 'Телебачення і дім',
    featured: ['Apple TV 4K', 'HomePod', 'HomePod mini'],
    compareLink: null,
    moreTitle: 'Більше від Apple',
    moreLinks: ['Apple TV+', 'Apple Music', 'Підтримка TV та дому'],
  },

  Сервіси: {
    title: 'Сервіси Apple',
    featured: ['Apple Music', 'Apple TV+', 'iCloud+', 'Apple Arcade'],
    compareLink: null,
    moreTitle: 'Більше сервісів',
    moreLinks: ['Apple One', 'Apple Fitness+', 'Керування підписками'],
  },

  Підтримка: {
    title: 'Підтримка Apple',
    featured: ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods'],
    compareLink: null,
    moreTitle: 'Ресурси',
    moreLinks: ['Спільнота Apple', 'Ремонт', 'Зв’язатися з підтримкою'],
  },

  'Де купити': {
    title: 'Де купити',
    featured: ['Знайти магазин', 'Офіційні продавці'],
    compareLink: null,
    moreTitle: 'Більше варіантів',
    moreLinks: ['Apple Premium Reseller'],
  },
} as const;