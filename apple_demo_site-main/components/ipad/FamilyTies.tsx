'use client';

import { useState } from 'react';
import s from './FamilyTies.module.css';

type Row = {
  id: string;
  title: string;
  description: string;
  tint: string; // placeholder gradient standing in for the real product photo
};

const ROWS: Row[] = [
  {
    id: 'iphone',
    title: 'iPad та iPhone',
    description:
      'iPad ідеально підходить для обробки контенту, знятого на iPhone. Знімайте фото або відео на iPhone, а потім монтуйте, додавайте анімації та багато іншого на великому дисплеї iPad. Завдяки функції Handoff ви зможете продовжити роботу саме з того місця, на якому зупинилися.',
    tint: 'linear-gradient(155deg, #d7dbe2, #aab1bd 60%, #6f7686)',
  },
  {
    id: 'mac',
    title: 'iPad та Mac',
    description:
      'iPad і Mac разом — це повноцінна творча студія. Зробіть скетч на iPad і перегляньте його на Mac завдяки функції Sidecar. Використайте iPad для малювання чи редагування з Apple Pencil або як додатковий дисплей. Працюйте на двох пристроях відразу, а функція «Універсальний контроль» забезпечить безперешкодне керування за допомогою однієї миші або трекпеда.',
    tint: 'linear-gradient(155deg, #c9ccd2, #8a8f9c 60%, #4a4f5c)',
  },
  {
    id: 'watch',
    title: 'iPad та Apple Watch',
    description:
      'На iPad дуже зручно переглядати детальні дані про здоров’я, зібрані на Apple Watch, а також аналізувати тенденції і ключові показники в додатку «Здоров’я» на великому екрані. Ви також можете попросити своїх близьких поділитися з вами даними про здоров’я, щоб бути в курсі їхнього стану й почуватися спокійніше.',
    tint: 'linear-gradient(155deg, #2c2c2e, #0c0c0d 70%)',
  },
];

export default function FamilyTies() {
  const [openId, setOpenId] = useState<string>(ROWS[0].id);

  const activeRow = ROWS.find(r => r.id === openId) ?? ROWS[0];

  return (
    <section className={s.section}>
      <h2 className={s.heading}>Родинні зв'язки</h2>

      <div className={s.panel}>
        <div className={s.accordion}>
          {ROWS.map(row => {
            const isOpen = row.id === openId;
            return (
              <div key={row.id} className={s.item}>
                <button
                  type="button"
                  className={s.itemHeader}
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(row.id)}
                >
                  <span className={s.itemTitle}>{row.title}</span>
                  <svg
                    className={`${s.chevron} ${isOpen ? s.chevronOpen : ''}`}
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  className={s.itemBody}
                  style={{ maxHeight: isOpen ? '320px' : '0px' }}
                  aria-hidden={!isOpen}
                >
                  <p className={s.itemDescription}>{row.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={s.imageArea} aria-hidden="true">
          <div className={s.image} style={{ background: activeRow.tint }} />
        </div>
      </div>
    </section>
  );
}