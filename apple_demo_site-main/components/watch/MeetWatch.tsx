'use client';

import { useEffect, useRef, useState } from 'react';
import s from './MeetWatch.module.css';

type Block = {
  lead: string;
  body: string;
};

type Card = {
  id: string;
  eyebrow: string;
  headline: string; // \n for manual line break
  tint: string; // placeholder background for the card photo
  blocks: Block[];
};

const CARDS: Card[] = [
  {
    id: 'health',
    eyebrow: 'Здоров’я',
    headline: 'Знає вас\nвід голови до п’ят.',
    tint: 'linear-gradient(165deg, #d9485c, #2c1014 70%)',
    blocks: [
      {
        lead: 'Отримуйте сповіщення про хронічно підвищений тиск.',
        body: 'Apple Watch може виявляти ознаки хронічно підви­щеного тиску й сповіщати про ймо­вір­ність гіпертензії.Footnote 11 Яким чином? Оптичний датчик збирає дані, які потім аналі­зу­ються за алгоритмом на наявність можливої гіпертензії: протягом 30‑денного періоду відстежується реакція судин на серцеві скорочення.',
      },
      {
        lead: 'Хто виспався, той молодець.',
        body: 'Функція «Оцінка якості сну» допомагає відстежувати, розуміти й покращувати ваш сон. Ви також можете скорис­та­тися додатком «Сон», щоб налаш­тувати режим сну з нага­ду­ваннями про час відпо­чинку. Apple Watch може навіть повідомити вас, якщо будуть ознаки можливого апное вві сні. Footnote 2',
      },
      {
        lead: 'Стежте за ритмом.',
        body: 'За допомогою додатка «ЕКГ» Apple Watch може створювати ЕКГ, подібну до електро­кардіо­грами в одному відведенні.Footnote 3 А додаток «Серцевий ритм» попередить вас про високий або низький чи порушений серцевий ритм.Footnote 4',
      },
      {
        lead: 'Відстежуйте стан свого здоров’я щодня.',
        body: 'Додаток «Життєві показники» допомагає щоденно стежити за змінами у здоров’ї.Footnote 5 Швидко перегля­дайте ключові нічні показники просто на зап’ястку — зокрема серцевий ритм, частоту дихання, темпе­ра­туру руки,Footnote 66 рівень кисню в кровіFootnote 7 й тривалість сну. ',
      },
      {
        lead: 'Докладне відстеження вашого циклу.',
        body: 'Apple Watch має передові датчики, які від­стежують вашу температуру під час сну.Footnote 6 Додаток «Відстеження циклу» вико­рис­товує ці дані для ретро­спек­тив­ного розрахунку ймовірної дати овуляції, що може бути корисним під час планування вагітності.Footnote 8 Показник темпе­ра­тури руки також може засто­со­ву­ватися для кращого прогно­зування циклу.',
      },
    ],
  },
  {
    id: 'fitness',
    eyebrow: 'Фітнес',
    headline: 'Кілометри мотивації.',
    tint: 'linear-gradient(165deg, #2f6b3c, #0c1f10 70%)',
    blocks: [
      {
        lead: 'Замкніть усі кільця.',
        body: 'Три кільця показують усі варіанти вашої активності й допо­ма­гають досягати цілей у категоріях «Рух», «Вправа» і «Стояння» щодня.',
      },
      {
        lead: 'Майстер спорту з усього.',
        body: 'Від бігу до високо­інтен­сивних інтер­валь­них вправ чи йоги — у вас є безліч способів тренуватися й можливість точно відстежу­вати всі показники, які хочете бачити.',
      },
      {
        lead: 'Мотивація до бігу.',
        body: 'Apple Watch має все потрібне для бігу. Ви можете вико­рис­то­вувати такий режим, як зони серцевого ритму, ставити конкретні часові цілі з відсте­женням темпу або займатися власними інтер­валь­ними тренуваннями.',
      },
      {
        lead: 'Вище. Далі. За межі.',
        body: 'Apple Watch захищено від води,Footnote 9 пилуFootnote 10 та тріщин. Тож ви можете плавати, ходити в походи й робити все що завгодно — без турбот.',
      },
    ],
  },
  {
    id: 'safety',
    eyebrow: 'Безпека',
    headline: 'Спокій у ваших руках.',
    tint: 'linear-gradient(165deg, #3a4a5e, #0b1117 70%)',
    blocks: [
      {
        lead: 'Екстрена допомога. Вже тут.',
        body: 'Apple Watch може виявити, якщо ви сильно впали або потрапили в cерйозну аварію, й авто­ма­тично викликати допомогу, повідомити ваше місце пере­бу­вання і сповістити ваших контактних осіб про надзви­чайну ситуацію.Footnote 11',
      },
      {
        lead: 'Спокій на вашому зап’ястку.',
        body: 'Функція «Супровід» може повідомити когось, коли ви прибудете до пункту при­значення. Плануєте пробіжку пізно ввечері? «Супровід» відстежує тривалість трену­вання й може сповістити вашого друга, коли ви завершите.',
      },
      {
        lead: 'Локатор. Оце так знахідка.',
        body: 'Додаток «Локатор» допоможе вам легко знайти друга в людному місці або поділитися своїм місцем пере­бу­вання, щоб зали­ша­тися на зв’язку. Ви також можете відшукати загублені або вкрадені пристрої.',
      },
      {
        lead: 'Звук рятує.',
        body: 'За допомогою функції «Сирена» на Apple Watch Ultra ви можете швидко попередити людей навколо про те, що вам потрібна допомога. Просто натисніть й утримуйте кнопку дії та дочекайтеся зворотного відліку.',
      },
    ],
  },
  {
    id: 'ultra-3',
    eyebrow: 'Apple Watch Ultra 3',
    headline: 'Ідеальний годинник\nдля спорту й пригод.',
    tint: 'linear-gradient(165deg, #11141a, #2a2f38 60%, #8ddc8a)',
    blocks: [
      {
        lead: 'Геніальний дисплей.',
        body: 'Наш най­більший і най­сучас­ніший дисплей Apple Watch випро­мінює більше світла під ширшим кутом,Footnote 12 що робить його ще яскра­вішим і зруч­нішим для перегляду даних наживо, коли ви бігаєте, подорожуєте, займаєтеся дайвінгом або дос­ліджуєте навколишній світ.',
      },
      {
        lead: 'Ще далі. Ще довше.',
        body: 'Apple Watch Ultra 3 працює до 42 годин у звичайному режимі та до 72 годин у режимі економії заряду.Footnote 13 Цього вистачить, щоб узяти участь у марафоні або триатлоні.',
      },
      {
        lead: 'Точний GPS.',
        body: 'Apple Watch Ultra 3 оснащено висок­оточним дво­частот­ним GPS.Footnote 14',
      },
      {
        lead: 'Час діяти.',
        body: 'Одне швидке натискання кнопки дії — і ви отримуєте точний контроль над різно­манітними функціями з можливістю налаш­ту­вання. Почи­найте трену­вання, вмикайте ліхтарик, скидайте пункт маршруту або зану­рюй­теся з аквалангом.',
      },
    ],
  },
  {
    id: 'connectivity',
    eyebrow: 'Можливості підключення',
    headline: 'Лишайтеся на зв’язку\nбудь-що.',
    tint: 'linear-gradient(165deg, #4a4f5c, #14161c 70%)',
    blocks: [
      {
        lead: 'Тримайте зв’язок.',
        body: 'Телефонуйте, текстуйте, оплачуйте покупки, слухайте музику та багато іншого — з Apple Watch ви можете робити все це на ходу. Завдяки мобільному звʼязку вам навіть не потрібен iPhone поруч.Footnote 15',
      },
      {
        lead: 'Музика для вух. І ще подкасти.',
        body: 'Вибирайте з‑поміж понад 100 мільйонів треків у Apple Music.Footnote 16 Завантажуйте подкасти та музичні добірки на свій годинник.Footnote 15 І слухайте все це через навушники AirPods або вмонтований динамік Apple Watch.',
      },
      {
        lead: 'Торкніться. Оплатіть. Готово.',
        body: 'Платіть просто із зап’ястка за все що завгодно за допо­мо­гою Apple Pay. Вико­рис­то­вуйте додаток «Гаманець» як квиток або посадковий талон.Footnote 17',
      },
    ],
  },
  {
    id: 'personalization',
    eyebrow: 'Персоналізація',
    headline: 'Зробіть його\nдійсно своїм.',
    tint: 'linear-gradient(165deg, #6b4f7a, #1c1320 70%)',
    blocks: [
      {
        lead: 'Ремінці, які вам до вподоби.',
        body: 'Ремінці для годинників доступні в широкому діапазоні кольорів, стилів і матеріалів, тому їх легко змінювати відповідно до вашого настрою.',
      },
      {
        lead: 'Циферблати на будь‑який смак.',
        body: 'Ви можете ство­рювати безліч комбі­націй цифер­блатів на Apple Watch — від «Фотографій» і «Снупі» до Nike. Нала­што­вуйте їх, комбінуйте й навіть діліться з друзями.',
      },
      {
        lead: 'App Store. Безліч можливостей.',
        body: 'App Store на Apple Watch надає доступ до десятків тисяч додатків просто на вашому зап’ястку, зокрема до Strava, Waterllama й SwingVision. Тож ви можете налашту­вати годинник для всього, що любите.',
      },
    ],
  },
  {
    id: 'apple-watch-and-iphone',
    eyebrow: 'Apple Watch + iPhone',
    headline: 'Динамічна команда.',
    tint: 'linear-gradient(165deg, #3f3f46, #0e0e10 70%)',
    blocks: [
      {
        lead: 'Як загубиться, то відразу знайдеться.',
        body: 'Телефон десь загубився? Достатньо подати сигнал, щоб почути, де він. А якщо затиснути кнопку, на iPhone засвітиться спалах.',
      },
      {
        lead: 'Світло. Камера. Пульт.',
        body: 'Зберіть друзів для групової фото­графії на iPhone, а потім скористай­теся годинником, щоб пере­глянути кадр, зробити знімок або вста­но­вити таймер. Це чудовий варіант для дис­тан­цій­ного керування камерою.',
      },
      {
        lead: 'Доведе, хоч би куди ви прямували.',
        body: 'Карти ведуть покроково й подають тактильний сигнал на зап’ясток, коли потрібно повернути. Це дуже зручно, якщо ви йдете жвавою вулицею або катаєтеся на вело­сипеді новим маршрутом.',
      },
    ],
  },
];

const SCROLL_STEP = 320;

export default function MeetWatch() {
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
        <h2 className={s.heading}>Познайомтеся з Apple Watch.</h2>
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