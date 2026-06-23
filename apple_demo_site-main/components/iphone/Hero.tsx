import s from './Hero.module.css';

type Tile = {
  label: string;
  href: string;
  tag?: string; // e.g. "Новий"
};

const TILES: Tile[] = [
  { label: 'iPhone 17 Pro', href: '/iphone/17-pro' },
  { label: 'iPhone Air', href: '/iphone/air' },
  { label: 'iPhone 17', href: '/iphone/17' },
  { label: 'iPhone 17e', href: '/iphone/17e', tag: 'Новий' },
  { label: 'iPhone 16', href: '/iphone/16' },
  { label: 'Порівняйте', href: '/iphone/compare' },
];

export default function Hero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>iPhone</h1>

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