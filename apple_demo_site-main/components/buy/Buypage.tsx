'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './Buy.module.css';
import { CATEGORIES, type Swatch } from './buyData';

// ----------------------------------------------------------------
// Filter-pill icons — simplified line glyphs matching the look of
// Apple's chapter-nav icons (laptop / phone outline / phone / watch
// / earbuds / tv). Kept as inline SVG so they inherit currentColor
// and recolor instantly with the button's active state.
// ----------------------------------------------------------------
const ICONS: Record<string, JSX.Element> = {
  mac: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="1.2" />
      <path d="M2 19h20" strokeLinecap="round" />
    </svg>
  ),
  ipad: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18.5h.01" strokeLinecap="round" />
    </svg>
  ),
  iphone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2.4" />
      <path d="M11.5 4.6h1" strokeLinecap="round" />
    </svg>
  ),
  watch: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7.5" y="7" width="9" height="10" rx="2.6" />
      <path d="M9.5 7V4.6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V7M9.5 17v2.4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V17M16.5 10.3h1.3" strokeLinecap="round" />
    </svg>
  ),
  airpods: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3.5c1.7 0 2.6 1.2 2.6 3v8.6a2.4 2.4 0 0 1-2.4 2.4 2.2 2.2 0 0 1-2.2-2.2c0-1.1.8-1.8 1.8-2.1V6.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.5c-1.7 0-2.6 1.2-2.6 3v8.6a2.4 2.4 0 0 0 2.4 2.4 2.2 2.2 0 0 0 2.2-2.2c0-1.1-.8-1.8-1.8-2.1V6.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" aria-hidden="true" data-fill="true">
      <rect x="2" y="5" width="20" height="13" rx="2.6" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  ),
};

const SCROLL_STEP = 280;

function isSplit(c: Swatch): c is { a: string; b: string } {
  return typeof c === 'object';
}

export default function BuyPage() {
  const searchParams = useSearchParams();

  // Deep-link support: /buy?category=tv (or any CATEGORIES id) opens
  // straight onto that pill instead of always defaulting to Mac.
  // Falls back to the first category if the param is missing or invalid,
  // e.g. someone landing on plain /buy.
  const requestedCategory = searchParams.get('category');
  const initialCategory =
    CATEGORIES.find(c => c.id === requestedCategory)?.id ?? CATEGORIES[0].id;

  const [activeId, setActiveId] = useState(initialCategory);
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  // If the query param changes after mount (e.g. navigating from one
  // product's "Купити" button to another without a full page reload),
  // keep the active pill in sync with it.
  useEffect(() => {
    const next = CATEGORIES.find(c => c.id === requestedCategory)?.id;
    if (next && next !== activeId) {
      setActiveId(next);
    }
  }, [requestedCategory]);

  const activeCategory = CATEGORIES.find(c => c.id === activeId) ?? CATEGORIES[0];

  // Re-measure edges whenever the category changes (new grid, new scrollWidth) and on resize.
  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(max <= 1 || el.scrollLeft >= max - 1);
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [activeId]);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
  };

  return (
    <>
      <div className={s.head}>
        <h1 className={s.headline}>Де купити.</h1>
        <p className={s.subhead}>Купуйте онлайн або в магазинах партнерів Apple поруч із вами.</p>
      </div>

      {/* FILTER PILL BAR */}
      <div className={s.filterWrap}>
        <div className={s.filterBar} role="tablist" aria-label="Категорія продукту">
          {CATEGORIES.map(cat => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${s.filterBtn} ${isActive ? s.filterBtnActive : ''}`}
                onClick={() => setActiveId(cat.id)}
              >
                <span className={s.filterIcon}>{ICONS[cat.id]}</span>
                <span className={s.filterLabel}>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE CATEGORY SECTION */}
      <section className={s.section} key={activeCategory.id}>
        <div className={s.sectionInner}>
          <h2 className={s.sectionHeading}>{activeCategory.heading}</h2>
          <p className={s.sectionSubheading}>{activeCategory.subheading}</p>

          <ul className={s.grid} ref={trackRef} onScroll={updateEdges}>
            {activeCategory.cards.map(card => (
              <li key={card.id} className={s.card}>
                <div className={s.photoWrap}>
                  <div className={s.photo} style={{ background: card.tint }} aria-hidden="true" />
                </div>

                {card.colors && card.colors.length > 0 && (
                  <div className={s.swatches}>
                    {card.colors.map((color, i) =>
                      isSplit(color) ? (
                        <span
                          key={i}
                          className={`${s.swatch} ${s.swatchSplit}`}
                          style={{ '--swatch-a': color.a, '--swatch-b': color.b } as React.CSSProperties}
                        />
                      ) : (
                        <span key={i} className={s.swatch} style={{ '--swatch-a': color } as React.CSSProperties} />
                      )
                    )}
                  </div>
                )}

                {card.tag && <span className={s.tag}>{card.tag}</span>}
                <h3 className={s.modelName}>{card.name}</h3>
                <p className={s.description}>{card.description}</p>
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
        </div>
      </section>

      {/* LOCATOR CTA */}
      <div className={s.locator}>
        <h2 className={s.locatorHeading}>Поруч із вами є продавець.</h2>
        <p className={s.locatorText}>
          Придбайте {activeCategory.label} у найближчого до вас офіційного партнера Apple.
        </p>
        <a
          href="https://locate.apple.com/ua/en/sales"
          target="_blank"
          rel="noopener noreferrer"
          className={s.locatorBtn}
        >
          Знайти продавця
        </a>
      </div>
    </>
  );
}