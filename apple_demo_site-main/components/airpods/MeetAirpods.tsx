'use client';

import { useState } from 'react';
import s from './MeetAirPods.module.css';

type Card = {
  id: string;
  eyebrow: string;
  headline: string;
  bodyText: string;
  imgSrc: string;
  imgAlt: string;
};

const CARDS: Card[] = [
  {
    id: 'heart-rate',
    eyebrow: 'Відстеження серцевого ритму',
    headline: 'Відстежуйте серцевий ритм і спалені калорії під час тренувань.',
    bodyText:
      'За допомогою AirPods Pro 3 ви можете відстежувати серцевий ритм і спалені калорії під час тренувань1. Завдяки світлодіодам, які випромінюють невидиме світло з частотою 256 разів на секунду, та об\u2019єднанню показників з акселерометрів AirPods Pro 3 надають надзвичайно точні дані в залі й на природі.',
    imgSrc: '/images/AirPods/meet-airpods_heart-rate.jpg',
    imgAlt: 'Відстеження серцевого ритму на iPhone з AirPods Pro 3',
  },
  {
    id: 'anc',
    eyebrow: 'Активне поглинання шуму',
    headline: 'Керуйте звуком.\nІ тишею.',
    bodyText:
      'Активне поглинання шуму усуває небажані звуки, щоб ви могли зануритись у те, що слухаєте, або просто зосередитися. А режим проникності дає змогу комфортно чути навколишній світ.',
    imgSrc: 'images/airpods/meet-airpods_active-noise.jpg',
    imgAlt: 'AirPods Pro 3 з активним поглинанням шуму',
  },
  {
    id: 'spatial-audio',
    eyebrow: 'Персоналізоване просторове аудіо',
    headline: 'Глибокий звук. Як вам подобається.',
    bodyText:
      'Персоналізоване просторове аудіо створює адаптований до форми вашого вуха тривимірний звук, як у кінотеатрі.2',
    imgSrc: 'images/airpods/meet-airpods_deep-sound.jpg',
    imgAlt: 'Силует людини, що слухає просторове аудіо в AirPods',
  },
];

function Card({ card }: { card: Card }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={s.card}>
      <span className={s.eyebrow}>{card.eyebrow}</span>
      <h3 className={s.headline}>
        {card.headline.split('\n').map((line, i) => (
          <span key={i} style={{ display: 'block' }}>{line}</span>
        ))}
      </h3>

      {/* Collapsed: show the image. Expanded: show the body copy
          in the same slot, so the card height stays consistent
          and nothing pops a modal/overlay. */}
      {!open ? (
        <div className={s.imageArea}>
          <img src={card.imgSrc} alt={card.imgAlt} draggable={false} />
        </div>
      ) : (
        <div className={s.body}>
          <p className={s.bodyText}>{card.bodyText}</p>
        </div>
      )}

      <button
        type="button"
        className={s.toggleButton}
        aria-expanded={open}
        aria-label={open ? `Згорнути: ${card.eyebrow}` : `Дізнатися більше: ${card.eyebrow}`}
        onClick={() => setOpen(o => !o)}
      >
        <svg
          className={`${s.toggleIcon} ${open ? s.toggleIconOpen : ''}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
    </li>
  );
}

export default function MeetAirPods() {
  return (
    <section className={s.section}>
      <h2 className={s.heading}>Познайомтеся з AirPods.</h2>

      <ul className={s.grid}>
        {CARDS.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
}