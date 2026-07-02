import s from './AirpodsHero.module.css';
import MenuLink from './MenuLink';

type Tile = {
  label: string;
  href: string;
  tag?: string;
  // the real file in /public/airpods/ 
  // Recommended: transparent PNG, ~180px wide × 130px tall @2x.
  imgSrc: string;
  imgAlt: string;
};

const TILES: Tile[] = [
  {
    label: 'AirPods',
    href: '/airpods/airpods-4',
    imgSrc: 'images/airpods/airpods.png',
    imgAlt: 'AirPods 4',
  },
  {
    label: 'AirPods Pro',
    href: '/airpods/airpods-pro',
    imgSrc: 'images/airpods/airpods_pro.png',
    imgAlt: 'AirPods Pro 3',
  },
  {
    label: 'AirPods Max',
    href: '/airpods/max',
    tag: 'Нові',
    imgSrc: 'images/airpods/airpods_max.png',
    imgAlt: 'AirPods Max 2',
  },
  {
    label: 'Порівняйте',
    href: '/airpods/compare',
    imgSrc: 'images/airpods/compare.png',
    imgAlt: 'Порівняти моделі AirPods',
  },
  {
    label: 'Apple Music',
    href: 'https://www.apple.com/apple-music/',
    imgSrc: 'images/airpods/apple-music.png',
    imgAlt: 'Apple Music',
  },
];

export default function AirPodsHero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>AirPods</h1>

      <ul className={s.tiles}>
        {TILES.map(tile => (
          <li key={tile.label} className={s.tile}>
            <MenuLink href={tile.href} className={s.tileLink}>
              <img
                src={tile.imgSrc}
                alt={tile.imgAlt}
                className={s.tileImg}
                draggable={false}
              />
              <span className={s.tileLabel}>{tile.label}</span>
              {tile.tag && <span className={s.tileTag}>{tile.tag}</span>}
            </MenuLink>
          </li>
        ))}
      </ul>
    </section>
  );
}