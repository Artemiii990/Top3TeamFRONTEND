// Category data for the "Де купити" (Where to buy) page.
// one product grid per category, swapped
// by the filter pill bar. Colors are approximate swatches standing
// in for real product photography — see Card.tint for the photo
// placeholder and Card.colors for the dot row under each photo.

export type Swatch = string | { a: string; b: string }; // string = flat dot, {a,b} = split dot

export type Card = {
  id: string;
  tag?: string; // e.g. "Новий"
  name: string;
  description: string;
  colors?: Swatch[];
  tint: string; // CSS background standing in for the product photo
};

export type Category = {
  id: string;
  label: string; // pill label
  heading: string; // "Доступні в Україні моделі X."
  subheading: string;
  cards: Card[];
};

export const CATEGORIES: Category[] = [
  {
    id: 'mac',
    label: 'Mac',
    heading: 'Доступні в Україні моделі Mac.',
    subheading: 'У партнерів Apple можуть бути в наявності інші моделі комп’ютерів Mac і дисплеїв.',
    cards: [
      {
        id: 'macbook-neo',
        tag: 'Новий',
        name: 'MacBook Neo',
        description: 'Магія Mac за дивовижною ціною.',
        colors: ['#e3e3e6', '#e7c9c9', '#e3d98f', '#33415c'],
        tint: 'linear-gradient(160deg, #cfe6a6, #8fd0c9 55%, #5a8fbf)',
      },
      {
        id: 'macbook-air',
        tag: 'Новий',
        name: 'MacBook Air 13″ і 15″',
        description: 'Тонкий. Швидкий. Потужний і портативний.',
        colors: ['#bcd4e6', '#e3e3e6', '#e3c89a', '#2c2c2e'],
        tint: 'linear-gradient(160deg, #9ec2e0, #3a5f8a 60%, #1c2c40)',
      },
      {
        id: 'macbook-pro',
        tag: 'Новий',
        name: 'MacBook Pro 14″ і 16″',
        description: 'Найсучасніші ноутбуки Mac для ресурсоємних завдань.',
        colors: ['#1c1c1e', '#e3e3e6'],
        tint: 'linear-gradient(160deg, #2a2a2c, #050505)',
      },
      {
        id: 'imac',
        name: 'iMac',
        description: 'Універсальний настільний компʼютер для креативності та продуктивності.',
        // Two-tone dots: case color (a) + matching keyboard/stand accent (b)
        colors: [
          { a: '#5b7fd6', b: '#bcd0f0' },
          { a: '#7d5ba6', b: '#d8c7e8' },
          { a: '#d6536e', b: '#f2c9d2' },
          { a: '#e08a3c', b: '#f6d9b8' },
          { a: '#e0c23c', b: '#f6ecb8' },
          { a: '#5fae6e', b: '#c7e6cc' },
          { a: '#d8d8da', b: '#f2f2f3' },
        ],
        tint: 'linear-gradient(160deg, #eef3f6, #9cc5e8 55%, #5b8fcf)',
      },
      {
        id: 'mac-mini',
        name: 'Mac mini',
        description: 'Найкомпактніший і найдоступніший настільний компʼютер Mac.',
        colors: ['#e3e3e6'],
        tint: 'linear-gradient(160deg, #f1f1f3, #cfcfd2)',
      },
      {
        id: 'mac-studio',
        name: 'Mac Studio',
        description: 'Чудова продуктивність і можливості підключення для професіоналів.',
        colors: ['#e3e3e6'],
        tint: 'linear-gradient(160deg, #f1f1f3, #cfcfd2)',
      },
      {
        id: 'studio-display',
        tag: 'Новий',
        name: 'Studio Display',
        description: 'Дисплей Retina 5К, ідеальний для Mac.',
        colors: ['#e3e3e6'],
        tint: 'linear-gradient(160deg, #f1f1f3, #cfcfd2)',
      },
      {
        id: 'pro-display-xdr',
        tag: 'Новий',
        name: 'Studio Display XDR',
        description: 'Неперевершений дисплей Retina XDR 5К для творчих і професійних завдань.',
        colors: ['#1c1c1e'],
        tint: 'linear-gradient(160deg, #2a2a2c, #050505)',
      },
    ],
  },

  {
    id: 'ipad',
    label: 'iPad',
    heading: 'Доступні в Україні моделі iPad.',
    subheading: 'У партнерів Apple можуть бути в наявності інші моделі iPad.',
    cards: [
      {
        id: 'ipad-pro',
        name: 'iPad Pro',
        description: 'Передовий iPad із нашими найсучаснішими технологіями.',
        colors: ['#1c1c1e', '#e3e3e6'],
        tint: 'linear-gradient(160deg, #2a2a2c, #050505)',
      },
      {
        id: 'ipad-air',
        tag: 'Новий',
        name: 'iPad Air',
        description: 'Серйозна продуктивність у витонченому корпусі.',
        colors: ['#bcd4e6', '#e3e3e6', '#d8c7e8', '#1c1c1e'],
        tint: 'linear-gradient(160deg, #9ec2e0, #5a8fbf)',
      },
      {
        id: 'ipad',
        name: 'iPad',
        description: 'Барвистий, повноекранний iPad для щоденних справ.',
        colors: ['#5b7fd6', '#d6536e', '#e0c23c', '#e3e3e6'],
        tint: 'linear-gradient(160deg, #f2c9d2, #5b7fd6 70%)',
      },
      {
        id: 'ipad-mini',
        name: 'iPad mini',
        description: 'Усі можливості iPad в ультракомпактному корпусі.',
        colors: ['#f2c9d2', '#e8b88f', '#d8c7e8', '#1c1c1e'],
        tint: 'linear-gradient(160deg, #f6d9b8, #d6536e 70%)',
      },
    ],
  },

  {
    id: 'iphone',
    label: 'iPhone',
    heading: 'Доступні в Україні моделі iPhone.',
    subheading: 'У партнерів Apple можуть бути в наявності інші моделі iPhone.',
    cards: [
      {
        id: 'iphone-17-pro',
        name: 'iPhone 17 Pro',
        description: 'Інноваційний дизайн для чудової продуктивності й тривалого часу роботи від акумулятора.',
        colors: ['#c8631f', '#2c3e75', '#e3e3e6'],
        tint: 'linear-gradient(160deg, #d98a3f, #1a1a1a 70%)',
      },
      {
        id: 'iphone-air',
        name: 'iPhone Air',
        description: 'Найтонший серед iPhone. З професійною потужністю.',
        colors: ['#bcd4e6', '#e3c89a', '#f2f2f3', '#1c1c1e'],
        tint: 'linear-gradient(160deg, #aac3d6, #7d97ab)',
      },
      {
        id: 'iphone-17',
        name: 'iPhone 17',
        description: 'Ще неймовірніший. Ще надійніший.',
        colors: ['#c9b6e0', '#9cb88a', '#a9c3dd', '#f2f2f3', '#1c1c1e'],
        tint: 'linear-gradient(160deg, #d6c3e8, #b39bce)',
      },
      {
        id: 'iphone-17e',
        tag: 'Новий',
        name: 'iPhone 17e',
        description: 'Огоздібний. Оцетаквигідний.',
        colors: ['#f4c9ce', '#f2f2f3', '#1c1c1e'],
        tint: 'linear-gradient(160deg, #f7d3d8, #ecb0b8)',
      },
      {
        id: 'iphone-16',
        name: 'iPhone 16',
        description: 'Неймовірна продуктивність. Надійний дизайн.',
        colors: ['#5b6ee8', '#8fcf9a', '#f2b8c6', '#f2f2f3', '#1c1c1e'],
        tint: 'linear-gradient(160deg, #6b7fe0, #4a5bc7)',
      },
    ],
  },

  {
    id: 'watch',
    label: 'Watch',
    heading: 'Доступні в Україні моделі Watch.',
    subheading: 'У партнерів Apple можуть бути в наявності інші моделі Apple Watch.',
    cards: [
      {
        id: 'watch-series-11',
        name: 'Apple Watch Series 11',
        description: 'Чудовий спосіб стежити за своїм здоров’ям.',
        // aluminum case colors + stainless steel colors, combined row
        colors: ['#2c2c2e', '#f2f2f3', '#d8d8da', '#e8b0b8', '#c0392b', '#5a5a5e', '#bfae8e'],
        tint: 'linear-gradient(160deg, #3a3a3c, #0c0c0d 70%)',
      },
      {
        id: 'watch-se-3',
        name: 'Apple Watch SE 3',
        description: 'Корисні функції для здоров’я за чудовою ціною.',
        colors: ['#2c2c2e', '#f2f2f3'],
        tint: 'linear-gradient(160deg, #2c2c2e, #0c0c0d 70%)',
      },
      {
        id: 'watch-ultra-3',
        name: 'Apple Watch Ultra 3',
        description: 'Ідеальний годинник для спорту й пригод.',
        colors: ['#bfae8e', '#2c2c2e'],
        tint: 'linear-gradient(160deg, #8fae6e, #2c2c2e 70%)',
      },
    ],
  },

  {
    id: 'airpods',
    label: 'AirPods',
    heading: 'Доступні в Україні моделі AirPods.',
    subheading: 'У партнерів Apple можуть бути в наявності інші моделі AirPods.',
    cards: [
      {
        id: 'airpods-4',
        name: 'AirPods 4',
        description: 'Стрімка еволюція звучання та комфорту.',
        tint: 'linear-gradient(160deg, #f7f7f8, #d6d6da)',
      },
      {
        id: 'airpods-4-anc',
        name: 'AirPods 4',
        description: 'Стрімка еволюція звучання, комфорту й контролю шуму.',
        tint: 'linear-gradient(160deg, #f7f7f8, #d6d6da)',
      },
      {
        id: 'airpods-pro-3',
        tag: 'Новий',
        name: 'AirPods Pro 3',
        description: 'Неймовірне активне поглинання шуму та відстеження серцевого ритму під час тренувань.',
        tint: 'linear-gradient(160deg, #f7f7f8, #d6d6da)',
      },
      {
        id: 'airpods-max',
        name: 'AirPods Max',
        description: 'Виняткові повнорозмірні навушники з персоналізованим звучанням.',
        tint: 'linear-gradient(160deg, #4c5170, #1c1e26)',
      },
    ],
  },

  {
    id: 'tv',
    label: 'TV',
    heading: 'Доступні в Україні моделі Apple TV 4K.',
    subheading: 'У партнерів Apple можуть бути в наявності інші моделі Apple TV 4K.',
    cards: [
      {
        id: 'appletv-wifi',
        name: 'Apple TV 4K',
        description: 'з Wi‑Fi',
        tint: 'linear-gradient(160deg, #2c2c2e, #0c0c0d)',
      },
      {
        id: 'appletv-ethernet',
        name: 'Apple TV 4K',
        description: 'з Wi‑Fi та Ethernet',
        tint: 'linear-gradient(160deg, #2c2c2e, #0c0c0d)',
      },
    ],
  },
];