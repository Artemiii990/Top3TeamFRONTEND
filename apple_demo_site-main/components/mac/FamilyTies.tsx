'use client';

import { useState } from 'react';
import s from './FamilyTies.module.css';

type Row = {
  id: string;
  title: string;
  description: string;
  tint: string;
};

const ROWS: Row[] = [
  {
    id: 'iphone',
    title: 'Mac та iPhone',
    description:
      'Відповідайте на виклики й повідомлення з iPhone безпосередньо на Mac. За допомогою універсального буфера обміну копіюйте зображення, відео чи текст на iPhone і вставляйте їх у інший додаток на своєму Mac. А завдяки iCloud ви можете отримати доступ до файлів на обох пристроях. І це ще далеко не все.',
    tint: 'linear-gradient(155deg, #6b7fe0, #2c3568 70%)',
  },
  {
    id: 'ipad',
    title: 'Mac та iPad',
    description:
      'Зробіть ескіз на iPad і миттєво відобразіть його на Mac. Або використовуйте iPad як другий дисплей, щоб працювати на одному екрані, одночасно орієнтуючись на інший. Ви можете навіть почати роботу на iPad — наприклад, над презентацією чи електронним листом — і далі працювати над ними на Mac.',
    tint: 'linear-gradient(155deg, #f1f1f3, #d8d8dc 60%, #b9bac0)',
  },
  {
    id: 'watch',
    title: 'Mac та Apple Watch',
    description:
      'Автоматично входьте на Mac, коли носите Apple Watch, з автоматичним відмиканням. Пароль вводити не потрібно.',
    tint: 'linear-gradient(155deg, #2c2c2e, #0c0c0d 70%)',
  },
];

export default function FamilyTies() {
  const [openId, setOpenId] = useState<string>(ROWS[0].id);

  const activeRow = ROWS.find(r => r.id === openId) ?? ROWS[0];

  return (
    <section className={s.section}>
      <h2 className={s.heading}>Відкрийте світ Apple.</h2>

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