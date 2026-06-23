'use client';

import { useEffect, useRef, useState } from 'react';
import s from './MeetIphone.module.css';

type Block = {
  lead: string; // bold lead-in phrase
  body: string; // rest of the paragraph
};

type Card = {
  id: string;
  eyebrow: string;
  headline: string; // can contain \n for a manual line break
  tint: string; // placeholder background for the card photo
  blocks: Block[]; // one modal section per block, each with its own photo
};

const CARDS: Card[] = [
  {
    id: 'innovation',
    eyebrow: 'Інновація',
    headline: 'Створений міцним\nі прекрасним.',
    tint: 'linear-gradient(165deg, #c8631f, #1a1a1a 70%)',
    blocks: [
      {
        lead: 'Не має собі рівних.',
        body: 'iPhone відомий своїм впізнаваним дизайном і сучасними матеріалами — корпус із термокованого алюмінію забезпечує виняткову міцність, а апаратні й програмні засоби розроблені в тандемі для ідеальної злагодженості роботи.',
      },
      {
        lead: 'Час на його боці.',
        body: 'Передню панель захищено міцним загартованим склом, стійким до подряпин і випадкових падінь, а пристрій захищено від бризок і випадкового контакту з водою.',
      },
      {
        lead: 'Легкість використання.',
        body: 'Пристрої та програмні засоби розробляються одночасно, щоб забезпечити ідеальну сумісну роботу — нові аксесуари підключаються одним дотиком, а регулярні оновлення тримають систему завжди свіжою.',
      },
    ],
  },
  {
    id: 'camera',
    eyebrow: 'Передові камери',
    headline: 'Тільки уявіть\nці фото та відео.',
    tint: 'linear-gradient(165deg, #3a3a3c, #0c0c0d 70%)',
    blocks: [
      {
        lead: 'Просто приголомшливо.',
        body: 'Удосконалена система камер автоматично знімає вражаючі фотографії з насиченими кольорами та чіткою деталізацією, а нова фронтальна камера дає більше гнучкості під час кадрування селфі та групових знімків.',
      },
      {
        lead: 'Зумте й зуумте.',
        body: 'Широкий діапазон фокусних відстаней дає виняткову гнучкість кадрування — від чітких великих планів до панорамних знімків, що дають змогу охопити більше простору без потреби відступати назад.',
      },
      {
        lead: 'Знімайте відео, як у кіно.',
        body: 'Професійна якість відео з підтримкою сучасних форматів і режимів дає змогу знімати динамічні сцени та налаштовувати звучання голосів безпосередньо під час монтажу.',
      },
    ],
  },
  {
    id: 'chip',
    eyebrow: 'Чип і робота від акумулятора',
    headline: 'Швидкість триває.',
    tint: 'linear-gradient(165deg, #2b2b2d, #050505 70%)',
    blocks: [
      {
        lead: 'Надзвичайно ефективний.',
        body: 'Новий чип забезпечує високу продуктивність і тривалий час роботи від акумулятора, відкриваючи доступ до розширених функцій камери та ігор класу AAA.',
      },
      {
        lead: 'Тривала робота від акумулятора.',
        body: 'Апаратні й програмні засоби працюють у тандемі, тому можна виконувати більше завдань без підзаряджання протягом усього дня.',
      },
      {
        lead: 'Створено для 5G.',
        body: 'Висока швидкість з’єднання поєднується з інтелектуальним керуванням енергоспоживанням, яке заощаджує заряд акумулятора, коли максимальна швидкість не потрібна.',
      },
      {
        lead: 'Заряджає на повну. Вмить.',
        body: 'Підтримка швидкого бездротового заряджання та сучасного порту дає змогу заряджати пристрій тим самим кабелем, що й інші продукти.',
      },
    ],
  },
  {
    id: 'ios',
    eyebrow: 'iOS та інтелектуальні функції',
    headline: 'Новий вигляд.\nЩе більше можливостей.',
    tint: 'linear-gradient(165deg, #4a3f63, #14111c 70%)',
    blocks: [
      {
        lead: 'Нечуваний стандарт насолоди.',
        body: 'Оновлений дизайн системи робить взаємодію з додатками послідовною й приємною, а нові фони дозволяють персоналізувати кожен чат.',
      },
      {
        lead: 'Ще розумніше.',
        body: 'Персональні інтелектуальні функції допомагають писати, шукати інформацію та виконувати щоденні завдання швидше, працюючи безпосередньо на пристрої.',
      },
      {
        lead: 'Візуальний інтелект.',
        body: 'Здійснюйте пошук, ставте запитання та розпізнавайте об’єкти просто з того, що відображається на екрані.',
      },
      {
        lead: 'Інструмент очищення фото.',
        body: 'Прибирайте сторонні елементи з фотографій одним дотиком, зберігаючи оригінальне зображення недоторканим.',
      },
      {
        lead: 'iPhone для всіх і кожного.',
        body: 'Інтегровані функції доступності допомагають користуватися пристроєм найзручнішим способом — голосом, жестами або підключеною клавіатурою.',
      },
    ],
  },
  {
    id: 'privacy',
    eyebrow: 'Конфіденційність',
    headline: 'Ваші дані.\nТам, де вам потрібно.',
    tint: 'linear-gradient(165deg, #5a5a5e, #16171a 70%)',
    blocks: [
      {
        lead: 'Революційний захист конфіденційності.',
        body: 'Складніші запити обробляються з використанням технологій, що захищають конфіденційність користувача на кожному етапі.',
      },
      {
        lead: 'Безпечний вхід.',
        body: 'Паролі, ключі доступу та коди двофакторної автентифікації надійно зберігаються безпосередньо на пристрої.',
      },
      {
        lead: 'Захищений перегляд вебсторінок.',
        body: 'Браузер блокує відомі трекери та приховує зайві дані під час переходу за посиланнями.',
      },
      {
        lead: 'Розрахунок без зайвих даних.',
        body: 'Під час оплати номери карток не зберігаються на пристрої й не передаються продавцям напряму.',
      },
    ],
  },
  {
    id: 'environment',
    eyebrow: 'Довкілля',
    headline: 'Створений із турботою\nпро довкілля.',
    tint: 'linear-gradient(165deg, #6b7280, #1c1f26 70%)',
    blocks: [
      {
        lead: 'Більше перероблених матеріалів.',
        body: 'Виробництво активно розширює використання перероблених металів в акумуляторах, магнітах і платах.',
      },
      {
        lead: 'Планетопозитивне пакування.',
        body: 'Пакування виготовлене майже повністю з паперових волокон, які легко переробити.',
      },
      {
        lead: 'Інновації в турботі про довкілля.',
        body: 'Спеціалізовані роботи відновлюють цінні матеріали зі старих пристроїв для повторного використання.',
      },
      {
        lead: 'На шляху до вуглецевої нейтральності.',
        body: 'Магазини, офіси та дата-центри вже досягли вуглецевої нейтральності, а робота над виробничим ланцюгом триває.',
      },
    ],
  },
  {
    id: 'safety',
    eyebrow: 'Безпека',
    headline: 'Корисні функції.\nПро всяк випадок.',
    tint: 'linear-gradient(165deg, #2f3e52, #0b0f16 70%)',
    blocks: [
      {
        lead: 'Для негайної допомоги.',
        body: 'Функції виявлення аварій і сигналу SOS можуть автоматично викликати допомогу та повідомити про місце перебування.',
      },
      {
        lead: 'Заспокоєння на щодень.',
        body: 'Можливість безпечно ділитися місцем перебування з близькими та автоматично повідомляти про безпечне прибуття.',
      },
    ],
  },
];

const SCROLL_STEP = 320;

export default function MeetIphone() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

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

  // Lock body scroll + close on Escape while the modal is open, so the
  // page behind stays completely still and only the modal body scrolls.
  useEffect(() => {
    if (!activeId) return;

    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveId(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeId]);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' });
  };

  const activeCard = CARDS.find(c => c.id === activeId) ?? null;

  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Познайомтеся з iPhone.</h2>
      </div>

      <ul className={s.track} ref={trackRef} onScroll={updateEdges}>
        {CARDS.map(card => (
          <li key={card.id} className={s.card} style={{ background: card.tint }}>
            <div className={s.cardTop}>
              <span className={s.eyebrow}>{card.eyebrow}</span>
              <h3 className={s.headline}>
                {card.headline.split('\n').map((line, i) => (
                  <span key={i} className={s.headlineLine}>{line}</span>
                ))}
              </h3>
            </div>

            <button
              type="button"
              className={s.plusButton}
              aria-label={`Дізнатися більше: ${card.eyebrow}`}
              onClick={() => setActiveId(card.id)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
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

      {activeCard && (
        <div className={s.backdrop} onClick={() => setActiveId(null)}>
          <div
            className={s.modal}
            role="dialog"
            aria-modal="true"
            aria-label={activeCard.headline.replace('\n', ' ')}
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className={s.closeButton}
              aria-label="Закрити"
              onClick={() => setActiveId(null)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className={s.modalHead}>
              <span className={s.modalEyebrow}>{activeCard.eyebrow}</span>
              <h2 className={s.modalHeadline}>
                {activeCard.headline.split('\n').join(' ')}
              </h2>
            </div>

            <div className={s.modalBody}>
              {activeCard.blocks.map((block, i) => (
                <div className={s.modalPanel} key={i}>
                  <p className={s.modalText}>
                    <strong>{block.lead}</strong> {block.body}
                  </p>
                  <div className={s.modalPhoto} style={{ background: activeCard.tint }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}