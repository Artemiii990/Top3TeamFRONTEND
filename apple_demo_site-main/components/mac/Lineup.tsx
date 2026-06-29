'use client';

import { useState } from 'react';
import s from './Lineup.module.css';

type Category = 'all' | 'laptops' | 'desktops' | 'displays';

type Swatch = { color: string };

type Model = {
  id: string;
  category: Category[]; // a model can appear in more than one tab (e.g. always in "all")
  name: string;
  tag?: string; // e.g. "Новий"
  description: string;
  swatches: Swatch[];
  tint: string; // placeholder background for the product photo
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
      { color: '#e3e4e6' },
      { color: '#f2d9d3' },
      { color: '#eef0c8' },
      { color: '#4b4f63' },
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
      { color: '#a9c3dd' },
      { color: '#e7e8ea' },
      { color: '#ece6d4' },
      { color: '#3a3c43' },
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
    swatches: [{ color: '#2b2b2d' }, { color: '#e7e8ea' }],
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
      { color: '#5b8bc7' },
      { color: '#8a6fc0' },
      { color: '#e08aa3' },
      { color: '#e0934f' },
      { color: '#e0cf4f' },
      { color: '#6fae6f' },
      { color: '#e7e8ea' },
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
    swatches: [{ color: '#e7e8ea' }],
    tint: 'linear-gradient(160deg, #eceef2, #c7cad3)',
    moreHref: '/mac-mini',
    buyHref: '/buy?mac=mac-mini',
  },
  {
    id: 'mac-studio',
    category: ['all', 'desktops'],
    name: 'Mac Studio',
    description: 'Чудова продуктивність і можливості підключення для професіоналів.',
    swatches: [{ color: '#e7e8ea' }],
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
    swatches: [{ color: '#e7e8ea' }],
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
    swatches: [{ color: '#2b2b2d' }],
    tint: 'linear-gradient(160deg, #3a3a3c, #111113)',
    moreHref: '/studio-display-xdr',
    buyHref: '/buy?mac=studio-display-xdr',
  },
];

export default function Lineup() {
  const [active, setActive] = useState<Category>('all');

  const visible = MODELS.filter(m => m.category.includes(active));

  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Дізнайтеся більше про лінійку.</h2>
      </div>

      <div className={s.tabRow} role="tablist" aria-label="Категорії Mac">
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

      <ul className={s.grid}>
        {visible.map(model => (
          <li key={model.id} className={s.card}>
            <div className={s.photoWrap}>
              <div className={s.photo} style={{ background: model.tint }} aria-hidden="true" />
            </div>

            <div className={s.swatches}>
              {model.swatches.map((sw, i) => (
                <span key={i} className={s.swatch} style={{ '--swatch-color': sw.color } as React.CSSProperties} />
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
    </section>
  );
}