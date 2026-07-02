'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Lineup.module.css';
import MenuLink from './MenuLink';

type Model = {
  name: string;
  tag?: string; // e.g. "Новий"
  description: string;
  colors: string[]; // swatch colors, first = currently shown
  tint: string; // CSS background for the placeholder photo area
  moreHref: string;
  buyHref: string;
};

const MODELS: Model[] = [
  {
    name: 'iPad Pro',
    description: 'Передовий iPad із нашими найсучаснішими технологіями.',
    colors: ['#3a3a3c', '#e8e8ed'],
    tint: 'linear-gradient(160deg, #2c2c2e, #0c0c0d)',
    moreHref: '/ipad/pro',
    buyHref: '/buy?ipad=pro',
  },
  {
    name: 'iPad Air',
    tag: 'Новий',
    description: 'Серйозна продуктивність у витонченому корпусі.',
    colors: ['#8a8d92', '#aac3e0', '#b9a9d6', '#f2efe6'],
    tint: 'linear-gradient(160deg, #b9bec7, #8a8f9c)',
    moreHref: '/ipad/air',
    buyHref: '/buy?ipad=air',
  },
  {
    name: 'iPad',
    description: 'Барвистий, повноекранний iPad для щоденних справ.',
    colors: ['#a9d3e8', '#f2b8c6', '#f3e08a', '#e8e8ed'],
    tint: 'linear-gradient(160deg, #aed6ec, #7ab0d1)',
    moreHref: '/ipad/ipad',
    buyHref: '/buy?ipad=ipad',
  },
  {
    name: 'iPad mini',
    description: 'Усі можливості iPad в ультракомпактному корпусі.',
    colors: ['#8a8d92', '#aac3e0', '#b9a9d6', '#f2efe6'],
    tint: 'linear-gradient(160deg, #c7a9d8, #9b7ab3)',
    moreHref: '/ipad/mini',
    buyHref: '/buy?ipad=mini',
  },
];

const SCROLL_STEP = 320; // roughly one card width + gap

export default function Lineup() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
  };

  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Дізнайтеся більше про лінійку.</h2>

        <MenuLink href="/ipad/compare" className={s.compareLink}>
          Порівняйте всі моделі <span aria-hidden="true">›</span>
        </MenuLink>
      </div>

      <ul
        className={s.track}
        ref={trackRef}
        onScroll={updateEdges}
      >
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

            {model.tag && <span className={s.tag}>{model.tag}</span>}
            <h3 className={s.modelName}>{model.name}</h3>
            <p className={s.description}>{model.description}</p>

            <div className={s.ctaRow}>
              <MenuLink href={model.moreHref} className={s.btnPrimary}>Детальніше</MenuLink>
              <MenuLink href={model.buyHref} className={s.btnLink}>
                Купити <span aria-hidden="true">›</span>
              </MenuLink>
            </div>
          </li>
        ))}
      </ul>

      <div className={s.arrows}>
        <button
          type="button"
          className={s.arrow}
          aria-label="Попередній"
          disabled={atStart}
          onClick={() => scroll(-1)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M10 2 4 8l6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className={s.arrow}
          aria-label="Наступний"
          disabled={atEnd}
          onClick={() => scroll(1)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}