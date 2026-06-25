'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './Lineup.module.css';

type Model = {
  name: string;
  tag?: string; // e.g. "Новий"
  description: string;
  colors: string[]; // swatch colors, first = currently shown
  image: string; // path under /public
  moreHref: string;
  buyHref: string;
};

const MODELS: Model[] = [
  {
    name: 'iPhone 17 Pro',
    description: 'Інноваційний дизайн для чудової продуктивності й тривалого часу роботи від акумулятора.',
    colors: ['#3a3a3c', '#2c3e75', '#e8e8ed'],
    image: '/images/iPhone/iphone-17pro_more.jpg',
    moreHref: '/iphone/17-pro',
    buyHref: '/buy?iphone=17-pro',
  },
  {
    name: 'iPhone Air',
    description: 'Найтонший серед iPhone. З професійною потужністю.',
    colors: ['#bcd4e6', '#e3c89a', '#f2f2f2', '#2c2c2e'],
    image: '/images/iphone/iphone-air_more.jpg',
    moreHref: '/iphone/air',
    buyHref: '/buy?iphone=air',
  },
  {
    name: 'iPhone 17',
    description: 'Ще неймовірніший. Ще надійніший.',
    colors: ['#c9b6e0', '#9cb88a', '#a9c3dd', '#f2f2f2', '#2c2c2e'],
    image: '/images/iphone/iphone-17_more.jpg',
    moreHref: '/iphone/17',
    buyHref: '/buy?iphone=17',
  },
  {
    name: 'iPhone 17e',
    tag: 'Новий',
    description: 'Огоздібний. Оцетаквигідний.',
    colors: ['#f4c9ce', '#f2f2f2', '#2c2c2e'],
    image: '/images/iphone/iphone-17e_more.jpg',
    moreHref: '/iphone/17e',
    buyHref: '/buy?iphone=17e',
  },
  {
    name: 'iPhone 16',
    description: 'Неймовірна продуктивність. Надійний дизайн.',
    colors: ['#5b6ee8', '#8fcf9a', '#f2b8c6', '#f2f2f2', '#2c2c2e'],
    image: '/images/iphone/iphone-16_more.jpg',
    moreHref: '/iphone/16',
    buyHref: '/buy?iphone=16',
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

  // Run once on mount (covers the case where content doesn't overflow at all),
  // and again on resize since card-per-view changes with viewport width.
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

        <a href="/iphone/compare" className={s.compareLink}>
          Порівняйте всі моделі <span aria-hidden="true">›</span>
        </a>
      </div>

      <ul
        className={s.track}
        ref={trackRef}
        onScroll={updateEdges}
      >
        {MODELS.map(model => (
          <li key={model.name} className={s.card}>
            <div className={s.photoWrap}>
              <Image
                src={model.image}
                alt={model.name}
                width={680}
                height={680}
                className={s.photo}
              />
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
              <a href={model.moreHref} className={s.btnPrimary}>Детальніше</a>
              <a href={model.buyHref} className={s.btnLink}>
                Купити <span aria-hidden="true">›</span>
              </a>
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