import s from './SupportHero.module.css';

type ProductTile = {
  label: string;
  href: string;
  // Placeholder shape standing in for the real product photo —
  // swap the inner <span> for an <img> later; layout won't need to change.
  shape: 'phone' | 'laptop' | 'tablet' | 'watch' | 'earbuds';
};

const PRODUCT_TILES: ProductTile[] = [
  { label: 'iPhone', href: '/support/iphone', shape: 'phone' },
  { label: 'Mac', href: '/support/mac', shape: 'laptop' },
  { label: 'iPad', href: '/support/ipad', shape: 'tablet' },
  { label: 'Watch', href: '/support/watch', shape: 'watch' },
  { label: 'AirPods', href: '/support/airpods', shape: 'earbuds' },
];

type HelpCard = {
  id: string;
  label: string;
  href: string;
  iconColor: 'helpIconBlue' | 'helpIconRed' | 'helpIconGreen';
  icon: 'chat' | 'calendar' | 'receipt';
};

const HELP_CARDS: HelpCard[] = [
  {
    id: 'reset-password',
    label: 'Скидання пароля Облікового запису Apple',
    // href: 'https://iforgot.apple.com/',
    href: '/account/iforgot',
    iconColor: 'helpIconBlue',
    icon: 'chat',
  },
  {
    id: 'manage-subscription',
    label: 'Змініть підписку',
    href: '/account/subscriptions',
    iconColor: 'helpIconRed',
    icon: 'calendar',
  },
  {
    id: 'billing',
    label: 'Виставлення рахунків і платежі',
    href: '/support/billing',
    iconColor: 'helpIconGreen',
    icon: 'receipt',
  },
];

function ProductShape({ shape }: { shape: ProductTile['shape'] }) {
  // Simple line-art silhouettes standing in for real product photography.
  switch (shape) {
    case 'phone':
      return (
        <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <rect x="18" y="4" width="20" height="48" rx="6" stroke="currentColor" strokeWidth="2" />
          <rect x="24" y="9" width="8" height="2" rx="1" fill="currentColor" />
        </svg>
      );
    case 'laptop':
      return (
        <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <rect x="10" y="12" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M6 40h44l-3 6H9l-3-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'tablet':
      return (
        <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <rect x="12" y="6" width="32" height="44" rx="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'watch':
      return (
        <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <rect x="18" y="16" width="20" height="24" rx="7" stroke="currentColor" strokeWidth="2" />
          <path d="M22 16v-6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M22 40v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'earbuds':
      return (
        <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
          <path d="M20 22v14a6 6 0 0 1-12 0v-8a14 14 0 0 1 28 0v8a6 6 0 0 1-12 0V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

function HelpIcon({ icon }: { icon: HelpCard['icon'] }) {
  switch (icon) {
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 21l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8" cy="11.5" r="1.1" fill="currentColor" />
          <circle cx="12" cy="11.5" r="1.1" fill="currentColor" />
          <circle cx="16" cy="11.5" r="1.1" fill="currentColor" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'receipt':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 3h14v18l-2.5-1.6L14 21l-2.5-1.6L9 21l-2.5-1.6L4 21V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function SupportHero() {
  return (
    <section className={s.section}>
      <div className={s.iconWrap}>
        <div className={s.icon} aria-hidden="true">
          <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
            <path d="M138.7 100.2c-2.4 5.2-3.6 7.5-6.7 12-4.3 6.3-10.4 14.1-17.9 14.1-6.7 0-8.4-4.4-17.5-4.3-9 0-10.9 4.4-17.6 4.3-7.5-.1-13.3-7.1-17.6-13.4-12-17.7-13.3-38.6-5.9-49.6 5.3-7.9 13.6-12.5 21.4-12.5 8 0 13 4.4 19.6 4.4 6.4 0 10.3-4.4 19.6-4.4 7 0 14.4 3.8 19.7 10.4-17.3 9.5-14.5 34.2 2.9 39Z" fill="currentColor" />
            <path d="M104.3 47.5c4.3-5.2 7.6-12.6 6.4-20.2-6.5.4-14.1 4.5-18.6 9.9-4.1 4.9-7.8 12.4-6.4 19.5 7.1.2 14.4-4 18.6-9.2Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <h1 className={s.heading}>Служба підтримки Apple</h1>
      <p className={s.subheading}>Потрібна допомога? Почніть тут.</p>

      <ul className={s.tiles}>
        {PRODUCT_TILES.map(tile => (
          <li key={tile.label} className={s.tile}>
            <a href={tile.href} className={s.tileLink}>
              <span className={s.tileIcon} aria-hidden="true">
                <ProductShape shape={tile.shape} />
              </span>
              <span className={s.tileLabel}>{tile.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className={s.helpRow}>
        {HELP_CARDS.map(card => (
          <li key={card.id} className={s.helpCard}>
            <span className={`${s.helpIcon} ${s[card.iconColor]}`} aria-hidden="true">
              <HelpIcon icon={card.icon} />
            </span>
            <a href={card.href} className={s.helpLink}>
              {card.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}