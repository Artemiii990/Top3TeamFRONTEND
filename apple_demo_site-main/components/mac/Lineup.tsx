'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Lineup.module.css';
import MenuLink from './MenuLink';

type Category = 'all' | 'laptops' | 'desktops' | 'displays';

// A swatch is either a single flat color, or a two-tone "split" dot
// (diagonal half/half) like iMac's color options.
type Swatch =
  | { kind: 'solid'; color: string }
  | { kind: 'split'; colorA: string; colorB: string };

type Model = {
  id: string;
  category: Category[];
  name: string;
  tag?: string;
  description: string;
  swatches: Swatch[]; // can be empty — not every product has color options
  tint: string;
  moreHref: string;
  buyHref: string;
};

const TABS: { id: Category; label: string }[] = [
  { id: 'all', label: 'Усі продукти' },
  { id: 'laptops', label: 'Ноутбуки' },
  { id: 'desktops', label: 'Комп’ютери' },
  { id: 'displays', label: 'Дисплеї' },
];

const MODELS: Model[] = [
  {
    id: 'macbook-neo',
    category: ['all', 'laptops'],
    tag: 'Новий',
    name: 'MacBook Neo',
    description: 'Магія Mac за дивовижною ціною.',
    swatches: [
      { kind: 'solid', color: '#e3e4e6' },
      { kind: 'solid', color: '#f2d9d3' },
      { kind: 'solid', color: '#eef0c8' },
      { kind: 'solid', color: '#4b4f63' },
    ],
    tint: 'linear-gradient(160deg, #eceef2, #c7cad3)',
    moreHref: '/macbook-neo',
    buyHref: '/buy?mac=macbook-neo',
  },
  {
    id: 'macbook-air',
    category: ['all', 'laptops'],
    tag: 'Новий',
    name: 'MacBook Air 13″ і 15″',
    description: 'Тонкий. Швидкий. Потужний і портативний.',
    swatches: [
      { kind: 'solid', color: '#a9c3dd' },
      { kind: 'solid', color: '#e7e8ea' },
      { kind: 'solid', color: '#ece6d4' },
      { kind: 'solid', color: '#3a3c43' },
    ],
    tint: 'linear-gradient(160deg, #cfe0ee, #9db4cc)',
    moreHref: '/macbook-air',
    buyHref: '/buy?mac=macbook-air',
  },
  {
    id: 'macbook-pro',
    category: ['all', 'laptops'],
    tag: 'Новий',
    name: 'MacBook Pro 14″ і 16″',
    description: 'Найсучасніші ноутбуки Mac для ресурсоємних завдань.',
    swatches: [
      { kind: 'solid', color: '#2b2b2d' },
      { kind: 'solid', color: '#e7e8ea' },
    ],
    tint: 'linear-gradient(160deg, #3a3a3c, #0c0c0d)',
    moreHref: '/macbook-pro',
    buyHref: '/buy?mac=macbook-pro',
  },
  {
    id: 'imac',
    category: ['all', 'desktops'],
    name: 'iMac',
    description: 'Універсальний настільний комп’ютер для креативності та продуктивності.',
    swatches: [
      { kind: 'split', colorA: '#bcd2ea', colorB: '#3f6fb0' },
      { kind: 'split', colorA: '#d8cdec', colorB: '#7a59b3' },
      { kind: 'split', colorA: '#f3c9d6', colorB: '#d65a82' },
      { kind: 'split', colorA: '#f6d3b8', colorB: '#e0813a' },
      { kind: 'split', colorA: '#f5edb3', colorB: '#e0c23a' },
      { kind: 'split', colorA: '#c7e3c2', colorB: '#5fa75f' },
      { kind: 'solid', color: '#e7e8ea' },
    ],
    tint: 'linear-gradient(160deg, #6fa6d8, #3d6fa3)',
    moreHref: '/imac',
    buyHref: '/buy?mac=imac',
  },
  {
    id: 'mac-mini',
    category: ['all', 'desktops'],
    name: 'Mac mini',
    description: 'Найкомпактніший і найдоступніший настільний комп’ютер Mac.',
    swatches: [],
    tint: 'linear-gradient(160deg, #eceef2, #c7cad3)',
    moreHref: '/mac-mini',
    buyHref: '/buy?mac=mac-mini',
  },
  {
    id: 'mac-studio',
    category: ['all', 'desktops'],
    name: 'Mac Studio',
    description: 'Чудова продуктивність і можливості підключення для професіоналів.',
    swatches: [],
    tint: 'linear-gradient(160deg, #dde0e6, #b3b8c2)',
    moreHref: '/mac-studio',
    buyHref: '/buy?mac=mac-studio',
  },
  {
    id: 'studio-display',
    category: ['all', 'displays'],
    tag: 'Новий',
    name: 'Studio Display',
    description: 'Дисплей Retina 5К, ідеальний для Mac.',
    swatches: [],
    tint: 'linear-gradient(160deg, #f1f1f3, #cfd1d6)',
    moreHref: '/studio-display',
    buyHref: '/buy?mac=studio-display',
  },
  {
    id: 'studio-display-xdr',
    category: ['all', 'displays'],
    tag: 'Новий',
    name: 'Studio Display XDR',
    description: 'Неперевершений дисплей Retina XDR 5К для творчих і професійних завдань.',
    swatches: [],
    tint: 'linear-gradient(160deg, #3a3a3c, #111113)',
    moreHref: '/studio-display-xdr',
    buyHref: '/buy?mac=studio-display-xdr',
  },
];

const SCROLL_STEP = 320;

export default function Lineup() {
  const [active, setActive] = useState<Category>('all');
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const visible = MODELS.filter(m => m.category.includes(active));

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  };

  useEffect(() => {
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);

  // Whenever the filter changes: jump the track back to the start (so a
  // switch to a shorter list never leaves it scrolled past its end), then
  // re-measure edges against the new content width.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    updateEdges();
  }, [active]);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
  };

  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Дізнайтеся більше про лінійку.</h2>
      </div>

      {/* Tab track — one grey pill-shaped background; the active tab is a
          solid black pill that sits inside it */}
      <div className={s.tabTrack} role="tablist" aria-label="Категорії Mac">
        {TABS.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`${s.tab} ${active === tab.id ? s.tabActive : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul className={s.track} ref={trackRef} onScroll={updateEdges}>
        {visible.map(model => (
          <li key={model.id} className={s.card}>
            <div className={s.photoWrap}>
              <div className={s.photo} style={{ background: model.tint }} aria-hidden="true" />
            </div>

            {model.swatches.length > 0 && (
              <div className={s.swatches}>
                {model.swatches.map((sw, i) =>
                  sw.kind === 'solid' ? (
                    <span
                      key={i}
                      className={s.swatch}
                      style={{ '--swatch-color': sw.color } as React.CSSProperties}
                    />
                  ) : (
                    <span
                      key={i}
                      className={`${s.swatch} ${s.swatchSplit}`}
                      style={
                        {
                          '--swatch-color-a': sw.colorA,
                          '--swatch-color-b': sw.colorB,
                        } as React.CSSProperties
                      }
                    />
                  )
                )}
              </div>
            )}

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