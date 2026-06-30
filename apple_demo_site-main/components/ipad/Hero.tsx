import s from './Hero.module.css';

type Tile = {
  label: string;
  href: string;
  tag?: string; // e.g. "Новий"
};

const TILES: Tile[] = [
  { label: 'iPad Pro', href: '/ipad/ipad-pro' },
  { label: 'iPad Air', href: '/ipad/ipad-air', tag: 'Новий' },
  { label: 'iPad', href: '/ipad/ipad' },
  { label: 'iPad mini', href: '/ipad/ipad-mini' },
  { label: 'Порівняйте', href: '/ipad/compare' },
  { label: 'Apple Pencil', href: '/apple-pencil' },
  { label: 'Клавіатури', href: '/ipad-keyboards' },
];

export default function Hero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>iPad</h1>

      <ul className={s.tiles}>
        {TILES.map(tile => (
          <li key={tile.label} className={s.tile}>
            <a href={tile.href} className={s.tileLink}>
              <span className={s.imagePlaceholder} aria-hidden="true" />
              <span className={s.tileLabel}>{tile.label}</span>
              {tile.tag && <span className={s.tileTag}>{tile.tag}</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}