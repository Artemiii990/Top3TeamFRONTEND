// Each menu has a flexible number of columns (1-3, confirmed varies by section).
// Column 1 is always: title + bold "featured" links + an optional smaller "bottom" link.
// menulink helps with redirections for MegaMenu
type MenuLink = {
  label: string;
  href: string;
};
// Extra columns are plain { title, links[] } groups.
type ExtraColumn = {
  title: string;
  links: MenuLink[];
};

type MenuEntry = {
  title: string;
  featured: MenuLink[];
  bottomLink?: MenuLink; // e.g. "Порівняння моделей Mac" / "Дізнатися про підтримку" / "Переглянути всі варіанти"
  columns?: ExtraColumn[]; // 0, 1, or 2 extra columns
};

export const MENU_DATA: Record<string, MenuEntry> = {
  Store: {
    title: 'Магазин',
    featured: [
      { label: 'Переглянути магазин', href: '/' },
      { label: 'Mac', href: '/mac' }, 
      { label: 'iPad', href: '/ipad' },
      { label: 'iPhone', href: '/iphone' },
      { label: 'Apple Watch', href: '/watch' },
      { label: 'AirPods', href: '/airpods' },
      { label: 'TV', href: '/tv' },
    ],
    columns: [
      {
        title: 'Покупки в Apple',
        links: [
          { label: 'Спеціальні пропозиції', href: '/' }, 
          { label: 'Apple Trade In', href: 'https://www.apple.com/uk/shop/trade-in' },
          { label: 'Фінансування', href: 'https://www.apple.com/uk/shop/browse/financing' },
        ],
      },
      {
        title: 'Допомога',
        links: [
          { label: 'Статус замовлення', href: 'https://secure8.store.apple.com/uk/shop/signIn/orders?ssi=4AAABnxtMISsBIJaZj0q0IJAQhLNQ2Wk-XsQoJCDvzqrjMfqqw62XY1WqAAAANWh0dHBzOi8vc2VjdXJlOC5zdG9yZS5hcHBsZS5jb20vdWsvc2hvcC9vcmRlci9saXN0fHx8AAIBBZosom47EtVVNsYMnYfM1RYsdfStLLZTiy5P71V-IGM' },
          { label: 'Допомога з покупкою', href: 'https://www.apple.com/uk/shop/help' },
        ],
      },
    ],
  },

  //MACBOOK
  Mac: {
    title: 'Дізнатися про Mac',
    featured: [
      { label: 'Переглянути всі моделі Mac', href: '/mac' },
      { label: 'MacBook Neo', href: '/macbook-neo' },
      { label: 'MacBook Air', href: '/macbook-air' },
      { label: 'MacBook Pro', href: '/macbook-pro' },
      { label: 'iMac', href: '/imac' },
      { label: 'Mac mini', href: '/mac-mini' },
      { label: 'Mac Studio', href: '/mac-studio' },
      { label: 'Дисплеї', href: '/displays' },
    ],
    bottomLink: {
      label: 'Порівняння моделей Mac',
      href: '/mac/compare', 
    },
    columns: [
      {
        title: 'Більше від Mac',
        links: [ 
          { 
            label: 'Підтримка Mac',
            href: '/support/mac', 
          }
        ],
      },
    ],
  },

  //iPAD
  iPad: {
    title: 'Дізнатися про iPad',
    featured: [
      { label: 'Переглянути всі моделі iPad', href: '/ipad' },
      { label: 'iPad Pro', href: '/ipad-pro' },
      { label: 'iPad Air', href: '/ipad-air' },
      { label: 'iPad', href: '/ipad-11' },
      { label: 'iPad mini', href: '/ipad-mini' },
      { label: 'Apple Pencil', href: '/apple-pencil' },
      { label: 'Клавіатури', href: '/ipad-keyboards' },
    ],
    bottomLink: {
      label: 'Порівняння моделей iPad',
      href: '/ipad/compare', 
    },
    columns: [
      {
        title: 'Більше від iPad',
        links: [ 
          { 
            label: 'Підтримка iPad',
            href: '/support/ipad', 
          }
        ],
      },
    ],
  },

  //iPHONE
  iPhone: {
    title: 'Дізнатися про iPhone',
    featured: [
      { label: 'Переглянути всі моделі iPhone', href: '/iphone' },
      { label: 'iPhone 17 Pro', href: '/iphone-17-pro' },
      { label: 'iPhone Air', href: '/iphone-air' },
      { label: 'iPhone 17', href: '/iphone-17' },
      { label: 'iPhone 17e', href: '/iphone-17e' },
      { label: 'iPhone 16', href: '/iphone-16/specs' },
    ],
    bottomLink: {
      label: 'Порівняння моделей iPhone', 
      href: '/iphone/compare'
    },
    columns: [
      {
        title: 'Більше від iPhone',
        links: [ 
          { 
            label: 'Підтримка iPhone', 
            href: '/support/iphone', 
          }, 
        ],
      },
    ],
  },

  //WATCH
  Watch: {
    title: 'Дізнатися про Watch',
    featured: [
      { label: 'Переглянути всі моделі Apple Watch', href: '/watch' },
      { label: 'Apple Watch Series 11', href: '/apple-watch-series-11' },
      { label: 'Apple Watch SE 3', href: '/apple-watch-se-3' },
      { label: 'Apple Watch Ultra 3', href: '/apple-watch-ultra-3' },
    ],
    bottomLink: {
      label: 'Порівняння моделей Watch', href: '/watch/compare' 
    },
    columns: [
      {
        title: 'Більше від Watch',
        links: [ 
          { label: 'Підтримка Apple Watch', href: '/support/watch' }
        ],
      },
    ],
  },

  //AIRPODS
  AirPods: {
    title: 'Дізнатися про AirPods',
    featured: [
      { label: 'Переглянути всі моделі AirPods', href: '/airpods' },
      { label: 'AirPods 4', href: '/airpods-4' },
      { label: 'AirPods Pro 3', href: '/airpods-pro' },  
      { label: 'AirPods Max 2', href: '/airpods-max' },
    ],
    bottomLink: {
      label: 'Порівняння моделей AirPods', href: '/airpods/compare', 
    },
    columns: [
      {
        title: 'Більше від AirPods',
        links: [ 
          { label: 'Підтримка AirPods', href: '/support/airpods' },
        ],
      },
    ],
  },

  //TV
  TV: {
    title: 'Дізнатися про TV',
    featured: [
      { label: 'Дізнатися про TV', href: '/tv' },
      { label: 'Apple TV 4K', href: '/apple-tv-4k/specs' },
    ],
    columns: [
      {
        title: 'Більше від TV',
        links: [
          { label: 'Підтримка Apple TV', href: '/support/tv' }, 
        ],
      },
    ],
  },

  //SERVICES
  Сервіси: {
    title: 'Дізнатися про сервіси',
    featured: [
      { label: 'Переглянути сервіси', href: 'https://www.apple.com/services/' },
      { label: 'Apple One', href: 'https://www.apple.com/apple-one/' },
      { label: 'Apple TV', href: 'https://tv.apple.com/ua' },
      { label: 'Apple Music', href: 'https://www.apple.com/apple-music/' }, 
      { label: 'Apple Arcade', href: 'http://apple.com/apple-arcade/' },
      { label: 'Apple Podcasts', href: 'https://www.apple.com/apple-podcasts/' },
      { label: 'App Store', href: 'https://www.apple.com/app-store/' },
    ],
    columns: [
      {
        title: 'Підтримка',
        links: [
          { label: 'Підтримка Apple TV', href: '/support/tv' },
          { label: 'Підтримка Apple Music', href: '/support/music' }, 
        ],
      },
    ],
  },

  // SUPPORT
  Підтримка: {
    title: 'Дізнатися про підтримку',
    featured: [
      { label: 'iPhone', href: '/support/iphone' },
      { label: 'Mac', href: '/support/mac' },
      { label: 'iPad', href: '/support/ipad' }, 
      { label: 'Watch', href: '/support/watch' },
      { label: 'AirPods', href: '/support/airpods' },
      { label: 'Music', href: '/support/music' },
      { label: 'TV', href: '/support/tv' },
    ],
    bottomLink: {
      label: 'Дізнатися про підтримку', href: '/support' 
    },
    columns: [
      {
        title: 'Допомога',
        links: [ 
          { label: 'Спільнота', href: 'https://discussions.apple.com/welcome?cid=gn-com-community-lp-get_help' }, 
          { label: 'Перевірити програму підтримки', href: '/support/checkcoverage-get_help' }, 
        ],
      },
      {
        title: 'Корисні теми',
        links: [
          { label: 'Обліковий запис Apple і пароль', href: '/support/apple-account' },
          { label: 'Виставлення рахунків і підписки', href: '/support/billing' },
          { label: 'Доступність', href: '/support/accessibility' },
        ],
      },
    ],
  },

  // BUY
  'Де купити': {
    title: 'Огляд',
    featured: [
      { label: 'Офіційні партнери', href: 'https://locate.apple.com/ua/en/sales' },
      { label: 'Обслуговування та підтримка', href: 'https://locate.apple.com/ua/en/service' },
    ],
    bottomLink: { 
      label: 'Переглянути всі варіанти', href: '/buy' },
    columns: [],
  },
};