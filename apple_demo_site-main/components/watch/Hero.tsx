import s from './Hero.module.css';
import MenuLink from './MenuLink';

type Tile = {
  label: string;
  href: string;
  compare?: boolean; // true only for the "Порівняйте" tile
};

const TILES: Tile[] = [
  { label: 'Apple Watch Series 11', href: '/apple-watch-series-11' },
  { label: 'Apple Watch SE 3', href: '/apple-watch-se-3' },
  { label: 'Apple Watch Ultra 3', href: '/apple-watch-ultra-3' },
  { label: 'Порівняйте', href: '/watch/compare', compare: true },
];

// One shared "watch case" glyph — a rounded-rect body with a small crown nub on the right, used for every model tile.
function WatchGlyph() {
  return (
    <svg className={s.watchGlyph} viewBox="0 0 56 68" fill="none" aria-hidden="true">
      <rect x="14" y="6" width="28" height="56" rx="10" fill="currentColor" />
      <rect x="40" y="28" width="6" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

// "Compare" gets two thin dashed outlines side by side instead of a solid glyph, echoing the real site's empty/compare icon.
function CompareGlyph() {
  return (
    <span className={s.compareGlyph} aria-hidden="true">
      <svg width="22" height="60" viewBox="0 0 22 60" fill="none">
        <rect x="2" y="2" width="18" height="56" rx="8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <svg width="22" height="60" viewBox="0 0 22 60" fill="none">
        <rect x="2" y="2" width="18" height="56" rx="8" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 4" />
      </svg>
    </span>
  );
}

export default function Hero() {
  return (
    <section className={s.hero}>
      <ul className={s.tiles}>
        {TILES.map(tile => (
          <li key={tile.label} className={s.tile}>
            <MenuLink href={tile.href} className={s.tileLink}>
              {tile.compare ? <CompareGlyph /> : <WatchGlyph />}
              <span className={s.tileLabel}>{tile.label}</span>
            </MenuLink>
          </li>
        ))}
      </ul>
    </section>
  );
}