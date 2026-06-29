'use client';

import { useEffect, useRef, useState } from 'react';
import s from './MeetMac.module.css';

type Block = {
  lead: string;
  body: string;
  subtext?: string; //рядок під фото
};

type Card = {
  id: string;
  eyebrow: string;
  headline: string; // \n for manual line break
  tint: string;
  blocks: Block[];
};

const CARDS: Card[] = [
  {
    id: 'performance-and-battery',
    eyebrow: 'Продуктивність і робота від акумулятора',
    headline: 'Працює довго.\nРобить швидко.',
    tint: 'linear-gradient(165deg, #2b2b2d, #050505 70%)',
    blocks: [
      {
        lead: 'З турбопотужністю чипа Apple.',
        body: 'Чип Apple дарує Mac революційні потужність і швидкість. Він інтегрує центральний і графічний процесори, а також систему Neural Engine в один енергоефективний чип, який прискорює всі ваші дії. А неймовірна продуктивність ШІ на Mac відкриває нові горизонти для творчості й ефективності.',
        subtext: 'Avid Pro Tools, Adobe InDesign, Vectorworks + Maxon Redshift, MATLAB,Footnote 1 \nCapture One Footnote 2',
      },
      {
        lead: 'Всі справи дня на одній зарядці.',
        body: 'Завдяки ефективності чипа Apple ноутбуки Mac можуть продуктивно працювати до 24 годин без підзаряджання незалежно від того, підключено їх до джерела живлення чи ні.Footnote 3',
      },
      {
        lead: 'Працюйте швидко й ефективно.',
        body: 'Потрібно створити неймовірну презентацію чи величезну електронну таблицю? З Mac ви можете швидше виконувати будь‑які завдання хоч у класі, хоч у власному офісі.',
        subtext: 'Keynote, Zoom, Microsoft PowerPoint, «Календар»Footnote 2',  
      },
      {
        lead: 'Творіть зі швидкістю уяви.',
        body: 'Від запису подкасту до редагування вашого першого повнометражного фільму — творіть абсолютно новими способами зі швидкістю й можливостями надпотужного Mac.',
        subtext: 'Affinity, Pixelmator Pro, GarageBand Footnote 2',  
      },
    ],
  },
  {
    id: 'built-for-ai',
    eyebrow: 'Створений для ШІ',
    headline: 'Інтелект. Безпека.\nНа вашому пристрої.',
    tint: 'linear-gradient(165deg, #4a3f63, #14111c 70%)',
    blocks: [
      {
        lead: 'Створений для ШІ від самого чипа.',
        body: 'Чип Apple і всі його основні компо­ненти розроблені для ШІ — від централь­ного й гра­фіч­ного процесорів із спе­ціа­лізо­ваними приско­рю­вачами Neural Accelerators до Neural Engine та об’єднаної пам’яті. Mac поєднує це інтелек­туальне облад­нання з глибоко інте­гро­ваними програм­ними засобами, фрейм­ворками для роз­роб­ників й еко­сис­темою додатків, що пере­творює його на потужну платформу для ШІ.',
      },
      {
        lead: 'Надійна екосистема додатків.',
        body: 'Завдяки вели­чез­ному вибору додатків із підтрим­кою ШІ та інстру­ментів ШІ з відкритим вихідним кодом, опти­мі­зо­ваних для чипа Apple, ШІ на Mac водночас доступ­ний і високо­ефек­тив­ний. А інте­гро­вані в macOS фрейм­ворки ШІ забез­пе­чують роботу інте­лек­ту­аль­них функцій у додатках, якими ви корис­ту­єтесь щодня. І ще в тисячах інших.',
      },
      {
        lead: 'Створений для оброблення даних на пристрої.',
        body: 'Сторонні розробники можуть вико­рис­то­вувати фрейм­ворки, розроблені Apple, для обробки даних ШІ на пристрої — від виконання повсяк­денних завдань до навчання локальних моделей транс­формерів, завдяки чому ваші персональні дані зали­ша­ються на вашому Mac.',
      },
    ],
  },
  {
    id: 'mac-and-iphone',
    eyebrow: 'Mac + iPhone',
    headline: 'Чудово працюють\nяк команда.',
    tint: 'linear-gradient(165deg, #6b7fe0, #2c3568 70%)',
    blocks: [
      {
        lead: 'Телефонуйте й надсилайте повідомлення з Mac.',
        body: 'Завдяки додатку «Телефон» ви можете здійснювати чи приймати виклики відразу на Mac. І повідомлення, що надходять на iPhone, також з’являються на Mac. Тож ваші розмови доступні на всіх ваших пристроях.Footnote 4',
      },
      {
        lead: 'Починайте тут. Продовжуйте там.',
        body: 'Почніть писати електронний лист на iPhone, а завершіть на Mac. Коли Mac та iPhone розташовані поруч, за допомогою функції Handoff ви можете легко переходити з одного пристрою на інший для роботи над одним завданням.Footnote 5',
      },
      {
        lead: 'Знімайте на iPhone. Дивіться на Mac.',
        body: 'З функцією «Неперервна камера» ви можете зробити знімок, записати відео чи відсканувати документ за допомогою iPhone, і ці файли автоматично з’являться на вашому Mac.',
      },
    ],
  },
  {
    id: 'compatibility',
    eyebrow: 'Сумісність',
    headline: 'На Mac працюють\nваші улюблені \nдодатки.',
    tint: 'linear-gradient(165deg, #3a3a3c, #0c0c0d 70%)',
    blocks: [
      {
        lead: 'Улюблені додатки. Просто на вашому Mac.',
        body: 'Від Microsoft 365 Copilot до Adobe Creative Cloud і Zoom Footnote 2 — усі ваші улюблені додатки працюють швидко на Mac.',
        subtext: 'Zoom, Microsoft Excel Footnote 2',
      },
      {
        lead: 'Ви маєте чудові звʼязки.',
        body: 'Mac оснащено портами для всіх ваших улюблених аксесуарів — зовнішніх дисплеїв, жорстких дисків, камер, принтерів тощо.',
      },
    ],
  },
  {
    id: 'apple-intelligence',
    eyebrow: 'macOS та Apple Intelligence',
    headline: 'Як їх не любити, коли \nз ними легко.',
    tint: 'linear-gradient(165deg, #5a5a5e, #16171a 70%)',
    blocks: [
      {
        lead: 'Робіть більше з macOS Tahoe.',
        body: 'Завдяки новому чудовому дизайну з Liquid Glass, інтуїтивним інструментам для продуктивності та інтегрованим функціям Apple Intelligence macOS Tahoe водночас нова та знайома.',
      },
      {
        lead: 'Створений для Apple Intelligence.',
        body: 'Apple Intelligence — це персональна інте­лек­ту­альна сис­тема, що допо­ма­гає писати, проявляти інди­ві­ду­аль­ність і вико­ну­вати зав­дання без зусиль. Революційні засоби захисту кон­фі­ден­цій­ності нада­дуть упевненості, що ніхто не матиме дос­тупу до ваших даних — навіть Apple. Footnote 6',
      },
      {
        lead: 'Усе просто, як і з iPhone.',
        body: 'Вам буде дуже легко користуватися Mac, адже на ньому багато тих самих додатків, що й на iPhone, як‑от «Повідомлення», «Фото», «Нотатки» й FaceTime.',
      },
      {
        lead: 'Все додано.',
        body: 'Розпочніть із таких щоденних додатків, як «Пошта», «Календар» і Safari. Якщо ж ви хочете створю­вати документи, електронні таблиці чи презентації, скорис­тай­теся потуж­ними вста­нов­ле­ними додатками для роботи, як‑от Pages, Numbers і Keynote.',
      },
      {
        lead: 'Просте налаштування.',
        body: 'Просто піднесіть iPhone до Mac, і Асистент налаш­ту­вання виконає вхід до мережі Wi‑Fi та в обліковий запис Apple. Ваші файли, фотографії, пові­дом­лення, паролі тощо буде перенесено з iCloud просто на ваш новий Mac. Не маєте iPhone? Не проблема. Завдяки Асистенту міграції налаштувати новий Mac досить швидко й легко, навіть якщо ви переносите дані з Windows.',
      },
    ],
  },
  {
    id: 'privacy-and-security',
    eyebrow: 'Конфіденційність і безпека',
    headline: 'Ваш бізнес тільки ваш.',
    tint: 'linear-gradient(165deg, #2f3e52, #0b0f16 70%)',
    blocks: [
      {
        lead: 'На захисті вашої конфіденційності.',
        body: 'Із Mac ви маєте свободу вибирати, як і чим ділитися, тож можете користуватися додатками безпечніше, захищати свої дані й бути в безпеці в мережі. Pево­лю­ційні засоби захисту кон­фі­ден­цій­ності Apple Intelligence нада­дуть упев­не­ності, що ніхто не матиме дос­тупу до ваших даних — навіть Apple. А завдяки технології «Приватні хмарні обчислення» ваші дані ніколи не зберігаються і вико­рис­то­ву­ються лише на ваші запити.',
      },
      {
        lead: 'Розширена безпека як стандарт на Mac.',
        body: 'Apple створює засоби захисту на Mac з нуля, інтегруючи Mac із чипом Apple і macOS. Кожен пристрій Mac оснащено наскрізним шифруванням і надійним захистом від вірусів. А безплатні автоматичні оновлення системи безпеки допомагають захищати ваш Mac.',
      },
      {
        lead: 'Розблокуйте все дотиком одного пальця.',
        body: 'Із Touch ID усі ваші паролі будуть на кінчику вашого пальця. Завдяки цьому ви можете розбло­ко­ву­вати Mac, отримувати доступ до ключів допуску й здійснювати платежі.',
      },
      {
        lead: 'Один додаток знайде все.',
        body: 'Якщо ви не можете знайти свій Mac або інші пристрої Apple, додаток «Локатор» допоможе з цим. Якщо ваш пристрій потрапить до чужих рук, ви можете ско­рис­та­тися додатком «Локатор», щоб забло­ку­вати його або видалити з нього дані на відстані.',
      },
    ],
  },
  {
    id: 'durability',
    eyebrow: 'Міцність',
    headline: 'Створено на роки.',
    tint: 'linear-gradient(165deg, #6b7280, #1c1f26 70%)',
    blocks: [
      {
        lead: 'З акцентом на довго­вічність.',
        body: 'Комп’ютери Mac виго­тов­лено з пере­роб­леного алюмінію, тож вони винятково міцні й готові практично до всього.',
      },
      {
        lead: 'Актуальні апдейти. Надійно.',
        body: 'Оновлення macOS відкри­вають доступ до най­но­ві­ших функцій та допо­ма­гають Mac і додаткам, на які ви покла­даєтесь, працювати плавно й безпечно. Оновлення безплатні й можуть заван­тажу­ва­тися авто­матично.',
      },
    ],
  },
  {
    id: 'apple-values',
    eyebrow: 'Цінності Apple',
    headline: 'Наші цінності в усьому, \nщо ми робимо.',
    tint: 'linear-gradient(165deg, #2c3e50, #0a0e14 70%)',
    blocks: [
      {
        lead: 'Заради кращого майбутнього.',
        body: 'Ми змінюємо підхід до вироб­ництва, скла­дання й пере­робки Mac. Для корпусів Mac mini, MacBook Air і MacBook Pro ми вико­рис­то­вуємо алюміній, на 100% отриманий із вторинної сировини. MacBook Air на понад 50% складається з пере­роб­лених матеріалів, а MacBook Neo — на 60%, це най­більший показник серед усіх продуктів Apple. Тому що планета не буде чекати. І ми теж.',
      },
      {
        lead: 'Доступність для всіх.',
        body: 'Mac оснащено інно­ва­цій­ними функціями, як‑от параметри дисплея, які можна змінювати, VoiceOver, Власний голос, Голосові швидкі команди тощо. Вони допо­ма­гають вам спілку­ва­тися, творити й робити те, що ви любите, у най­зруч­ні­ший для вас спосіб.',
      },
    ],
  },
];

const SCROLL_STEP = 320;

export default function MeetMac() {
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
        <h2 className={s.heading}>Познайомтеся з Mac.</h2>
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