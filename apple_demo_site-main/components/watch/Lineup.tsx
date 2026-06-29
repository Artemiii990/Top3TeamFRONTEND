'use client';

import { useRef } from 'react';
import s from './Lineup.module.css';

type Model = {
  name: string;
  description: string;
  colors: string[]; // swatch colors, first = currently shown
  tint: string; // placeholder background for the photo area — swap for real product photo
  moreHref: string;
  buyHref: string;
};

const MODELS: Model[] = [
  {
    name: 'Apple Watch Series 11',
    description: 'Чудовий спосіб стежити за своїм здоров’ям.',
    // Космічний сірий, Сріблястий, Рожеве золото, Агатовий чорний, Натуральний, Золотистий, «Сірий сланець»
    colors: ['#5b5d62', '#e4e4e6', '#f0d4c4', '#2c2c2e', '#cfc6b8', '#d9c08a', '#6b6f73'],
    tint: 'linear-gradient(160deg, #f3c9b0, #c97f9a 60%, #2c2c2e)',
    moreHref: '/apple-watch-series-11',
    buyHref: '/buy?watch=series-11',
  },
  {
    name: 'Apple Watch SE 3',
    description: 'Корисні функції для здоров’я за чудовою ціною.',
    // «Темна ніч», «Зіркове сяйво»
    colors: ['#2b2d33', '#e7e3da'],
    tint: 'linear-gradient(160deg, #2b2d33, #15161a)',
    moreHref: '/apple-watch-se-3',
    buyHref: '/buy?watch=se-3',
  },
  {
    name: 'Apple Watch Ultra 3',
    description: 'Ідеальний годинник для спорту й пригод.',
    // Натуральний, Чорний
    colors: ['#cfc6b8', '#1c1c1e'],
    tint: 'linear-gradient(160deg, #11141a, #2a2f38 60%, #8ddc8a)',
    moreHref: '/apple-watch-ultra-3',
    buyHref: '/buy?watch=ultra-3',
  },
];

export default function Lineup() {
  const trackRef = useRef<HTMLUListElement>(null);

  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Apple Watch</h2>

      </div>

      <ul className={s.track} ref={trackRef}>
        {MODELS.map(model => (
          <li key={model.name} className={s.card}>
            <div className={s.photoWrap}>
              <div className={s.photo} style={{ background: model.tint }} aria-hidden="true" />
            </div>

            <div className={s.swatches}>
              {model.colors.map((color, i) => (
                <span
                  key={color + i}
                  className={`${s.swatch} ${i === 0 ? s.swatchActive : ''}`}
                  style={{ '--swatch-color': color } as React.CSSProperties}
                />
              ))}
            </div>

            <h3 className={s.modelName}>{model.name}</h3>
            <p className={s.description}>{model.description}</p>

            <div className={s.ctaRow}>
              <a href={model.moreHref} className={s.btnPrimary}>Детальніше</a>
              <a href={model.buyHref} className={s.btnLink}>
                Купити <span aria-hidden="true">›</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}