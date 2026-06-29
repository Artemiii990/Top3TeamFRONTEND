'use client';

import { useState } from 'react';
import s from './MadeToWorkTogether.module.css';

type Row = {
  id: string;
  title: string;
  description: string;
  tint: string; // placeholder gradient standing in for the real product photo
};

const ROWS: Row[] = [
  {
    id: 'iphone',
    title: 'Apple Watch та iPhone',
    description:
      'Поєднання Apple Watch та iPhone відкриває безліч функцій, які покращують роботу кожного з цих пристроїв. Ви можете розпочати велотренування з Apple Watch, і воно автоматично з’явиться у діях наживо на вашому iPhone.',
    tint: 'linear-gradient(155deg, #2c2c2e, #0c0c0d 70%)',
  },
  {
    id: 'airpods',
    title: 'Apple Watch та AirPods',
    description:
      'За допомогою Apple Watch та AirPods можна так багато зробити — і все це без iPhone. Відповідайте на виклики, слухайте музику та подкасти, отримуйте сповіщення про повідомлення.',
    tint: 'linear-gradient(155deg, #f1f1f3, #d8d8dc 60%, #b9bac0)',
  },
];

export default function MadeToWorkTogether() {
  const [openId, setOpenId] = useState<string>(ROWS[0].id);

  const activeRow = ROWS.find(r => r.id === openId) ?? ROWS[0];

  return (
    <section className={s.section}>
      <h2 className={s.heading}>Створені для співпраці.</h2>

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