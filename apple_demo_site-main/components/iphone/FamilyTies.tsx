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
    id: 'mac',
    title: 'iPhone і Mac',
    description:
      'Ви можете копіювати зображення, відео або текст із iPhone безпосередньо на Mac, а потім вставляти їх в інший додаток на сусідньому Mac, паралельно відповідаючи на дзвінки або повідомлення з iPhone. А завдяки iCloud ви можете отримати доступ до улюблених файлів на обох пристроях.',
    tint: 'linear-gradient(155deg, #d7dbe2, #aab1bd 60%, #6f7686)',
  },
  {
    id: 'watch',
    title: 'iPhone та Apple Watch',
    description:
      'Загубили свій iPhone? Apple Watch може показати приблизну відстань і напрямок, де його шукати. Коли ви відповідаєте на дзвінок на Apple Watch, просто торкніться iPhone, щоб продовжити розмову на ньому.',
    tint: 'linear-gradient(155deg, #2c2c2e, #0c0c0d 70%)',
  },
  {
    id: 'airpods',
    title: 'iPhone та AirPods',
    description:
      'Налаштуйте AirPods на iPhone одним дотиком. Вам сподобається технологія адаптивного аудіо, яка автоматично налаштовує шумоконтроль для найкращої якості прослуховування в будь-яких умовах і під час різних взаємодій протягом дня.',
    tint: 'linear-gradient(155deg, #f1f1f3, #d8d8dc 60%, #b9bac0)',
  },
];

export default function FamilyTies() {
  const [openId, setOpenId] = useState<string>(ROWS[0].id);

  const activeRow = ROWS.find(r => r.id === openId) ?? ROWS[0];

  return (
    <section className={s.section}>
      <h2 className={s.heading}>Родинні зв&rsquo;язки</h2>

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