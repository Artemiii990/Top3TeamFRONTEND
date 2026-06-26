'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './MeetIphone.module.css';

type Block = {
  lead: string; // bold lead-in phrase
  body: string; // rest of the paragraph
  image: string; // path under /public, one photo per modal block
};

type Card = {
  id: string;
  eyebrow: string;
  headline: string; // can contain \n for a manual line break
  image: string; // path under /public — card background photo
  blocks: Block[]; // one modal section per block, each with its own photo
};

const CARDS: Card[] = [
  {
    id: 'innovation',
    eyebrow: 'Інновація',
    headline: 'Створений міцним\nі прекрасним.',
    image: '/images/iPhone/meet_iphone-1.jpg',
    blocks: [
      {
        lead: 'Не має собі рівних.',
        body: 'iPhone відомий своїм впізнаваним дизайном і сучасними матеріалами — корпус із термокованого алюмінію забезпечує виняткову міцність, а апаратні й програмні засоби розроблені в тандемі для ідеальної злагодженості роботи.',
        image: '/images/iphone/meet-1-1.jpg',
      },
      {
        lead: 'Час на його боці.',
        body: 'Передню панель захищено міцним загартованим склом, стійким до подряпин і випадкових падінь, а пристрій захищено від бризок і випадкового контакту з водою.',
        image: '/images/iphone/meet-1-2.jpg',
      },
      {
        lead: 'Легкість використання.',
        body: 'Пристрої та програмні засоби розробляються одночасно, щоб забезпечити ідеальну сумісну роботу — нові аксесуари підключаються одним дотиком, а регулярні оновлення тримають систему завжди свіжою.',
        image: '/images/iphone/meet-1-3.jpg',
      },
    ],
  },
  {
    id: 'camera',
    eyebrow: 'Передові камери',
    headline: 'Тільки уявіть\nці фото та відео.',
    image: '/images/iphone/meet_iphone-2.jpg',
    blocks: [
      {
        lead: 'Просто приголомшливо.',
        body: 'Удосконалена система камер автоматично знімає вражаючі фотографії з насиченими кольорами та чіткою деталізацією, а нова фронтальна камера дає більше гнучкості під час кадрування селфі та групових знімків.',
        image: '/images/iphone/meet-2-1.jpg',
      },
      {
        lead: 'Зумте й зуумте.',
        body: 'Широкий діапазон фокусних відстаней дає виняткову гнучкість кадрування — від чітких великих планів до панорамних знімків, що дають змогу охопити більше простору без потреби відступати назад.',
        image: '/images/iphone/meet-2-2.jpg',
      },
      {
        lead: 'Знімайте відео, як у кіно.',
        body: 'Професійна якість відео з підтримкою сучасних форматів і режимів дає змогу знімати динамічні сцени та налаштовувати звучання голосів безпосередньо під час монтажу.',
        image: '/images/iphone/meet-2-3.jpg',
      },
    ],
  },
  {
    id: 'chip',
    eyebrow: 'Чип і робота від акумулятора',
    headline: 'Швидкість триває.',
    image: '/images/iphone/meet_iphone-3.jpg',
    blocks: [
      {
        lead: 'Надзвичайно ефективний.',
        body: 'Новий чип забезпечує високу продуктивність і тривалий час роботи від акумулятора, відкриваючи доступ до розширених функцій камери та ігор класу AAA.',
        image: '/images/iphone/meet-3-1.jpg',
      },
      {
        lead: 'Тривала робота від акумулятора.',
        body: 'Апаратні й програмні засоби працюють у тандемі, тому можна виконувати більше завдань без підзаряджання протягом усього дня.',
        image: '/images/iphone/meet-3-2.jpg',
      },
      {
        lead: 'Створено для 5G.',
        body: 'Висока швидкість з’єднання поєднується з інтелектуальним керуванням енергоспоживанням, яке заощаджує заряд акумулятора, коли максимальна швидкість не потрібна.',
        image: '/images/iphone/meet-3-3.jpg',
      },
      {
        lead: 'Заряджає на повну. Вмить.',
        body: 'Підтримка швидкого бездротового заряджання та сучасного порту дає змогу заряджати пристрій тим самим кабелем, що й інші продукти.',
        image: '/images/iphone/meet-3-4.jpg',
      },
    ],
  },
  {
    id: 'ios',
    eyebrow: 'iOS та інтелектуальні функції',
    headline: 'Новий вигляд.\nЩе більше можливостей.',
    image: '/images/iphone/meet_iphone-4.jpg',
    blocks: [
      {
        lead: 'Нечуваний стандарт насолоди.',
        body: 'Оновлений дизайн системи робить взаємодію з додатками послідовною й приємною, а нові фони дозволяють персоналізувати кожен чат.',
        image: '/images/iphone/meet-4-1.jpg',
      },
      {
        lead: 'Ще розумніше.',
        body: 'Персональні інтелектуальні функції допомагають писати, шукати інформацію та виконувати щоденні завдання швидше, працюючи безпосередньо на пристрої.',
        image: '/images/iphone/meet-4-2.jpg',
      },
      {
        lead: 'Візуальний інтелект.',
        body: 'Здійснюйте пошук, ставте запитання та розпізнавайте об’єкти просто з того, що відображається на екрані.',
        image: '/images/iphone/meet-4-3.jpg',
      },
      {
        lead: 'Інструмент очищення фото.',
        body: 'Прибирайте сторонні елементи з фотографій одним дотиком, зберігаючи оригінальне зображення недоторканим.',
        image: '/images/iphone/meet-4-4.jpg',
      },
      {
        lead: 'iPhone для всіх і кожного.',
        body: 'Інтегровані функції доступності допомагають користуватися пристроєм найзручнішим способом — голосом, жестами або підключеною клавіатурою.',
        image: '/images/iphone/meet-4-5.jpg',
      },
    ],
  },
  {
    id: 'privacy',
    eyebrow: 'Конфіденційність',
    headline: 'Ваші дані.\nТам, де вам потрібно.',
    image: '/images/iphone/meet_iphone-5.png',
    blocks: [
      {
        lead: 'Революційний захист конфіденційності.',
        body: 'Складніші запити обробляються з використанням технологій, що захищають конфіденційність користувача на кожному етапі.',
        image: '/images/iphone/meet-5-1.jpg',
      },
      {
        lead: 'Безпечний вхід.',
        body: 'Паролі, ключі доступу та коди двофакторної автентифікації надійно зберігаються безпосередньо на пристрої.',
        image: '/images/iphone/meet-5-2.jpg',
      },
      {
        lead: 'Захищений перегляд вебсторінок.',
        body: 'Браузер блокує відомі трекери та приховує зайві дані під час переходу за посиланнями.',
        image: '/images/iphone/meet-5-3.jpg',
      },
      {
        lead: 'Розрахунок без зайвих даних.',
        body: 'Під час оплати номери карток не зберігаються на пристрої й не передаються продавцям напряму.',
        image: '/images/iphone/meet-5-4.jpg',
      },
    ],
  },
  {
    id: 'environment',
    eyebrow: 'Довкілля',
    headline: 'Створений із турботою\nпро довкілля.',
    image: '/images/iphone/meet_iphone-6.jpg',
    blocks: [
      {
        lead: 'Більше перероблених матеріалів.',
        body: 'Виробництво активно розширює використання перероблених металів в акумуляторах, магнітах і платах.',
        image: '/images/iphone/meet-6-1.jpg',
      },
      {
        lead: 'Планетопозитивне пакування.',
        body: 'Пакування виготовлене майже повністю з паперових волокон, які легко переробити.',
        image: '/images/iphone/meet-6-2.jpg',
      },
      {
        lead: 'Інновації в турботі про довкілля.',
        body: 'Спеціалізовані роботи відновлюють цінні матеріали зі старих пристроїв для повторного використання.',
        image: '/images/iphone/meet-6-3.jpg',
      },
      {
        lead: 'На шляху до вуглецевої нейтральності.',
        body: 'Магазини, офіси та дата-центри вже досягли вуглецевої нейтральності, а робота над виробничим ланцюгом триває.',
        image: '/images/iphone/meet-6-4.jpg',
      },
    ],
  },
  {
    id: 'safety',
    eyebrow: 'Безпека',
    headline: 'Корисні функції.\nПро всяк випадок.',
    image: '/images/iphone/meet_iphone-7.jpg',
    blocks: [
      {
        lead: 'Для негайної допомоги.',
        body: 'Функції виявлення аварій і сигналу SOS можуть автоматично викликати допомогу та повідомити про місце перебування.',
        image: '/images/iphone/meet-7-1.jpg',
      },
      {
        lead: 'Заспокоєння на щодень.',
        body: 'Можливість безпечно ділитися місцем перебування з близькими та автоматично повідомляти про безпечне прибуття.',
        image: '/images/iphone/meet-7-2.jpg',
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
          <li key={card.id} className={s.card}>
            <Image
              src={card.image}
              alt={card.eyebrow}
              fill
              className={s.cardImage}
              sizes="296px"
            />

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
                  <div className={s.modalPhotoWrap}>
                    <Image
                      src={block.image}
                      alt={block.lead}
                      width={800}
                      height={480}
                      className={s.modalPhoto}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}