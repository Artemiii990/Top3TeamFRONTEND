import s from './Hero.module.css';
import MenuLink from './MenuLink';

type Tile = {
  label: string;
  href: string;
  tag?: string;
};

const TILES: Tile[] = [
  { label: 'MacBook Neo', href: '/macbook-neo', tag: 'Новий' },
  { label: 'MacBook Air', href: '/macbook-air', tag: 'Новий' },
  { label: 'MacBook Pro', href: '/macbook-pro', tag: 'Новий' },
  { label: 'iMac', href: '/imac' },
  { label: 'Mac mini', href: '/mac-mini' },
  { label: 'Mac Studio', href: '/mac-studio' },
  { label: 'Порівняйте', href: '/mac/compare' },
  { label: 'Дисплеї', href: '/displays', tag: 'Новий' },
];

export default function Hero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>Mac</h1>

      <ul className={s.tiles}>
        {TILES.map(tile => (
          <li key={tile.label} className={s.tile}>
            <MenuLink href={tile.href} className={s.tileLink}>
              <span className={s.imagePlaceholder} aria-hidden="true" />
              <span className={s.tileLabel}>{tile.label}</span>
              {tile.tag && <span className={s.tileTag}>{tile.tag}</span>}
            </MenuLink>
          </li>
        ))}
      </ul>
    </section>
  );
}