'use client';

import { useEffect, useRef, useState } from 'react';
import s from './MeetIpad.module.css';

type Block = {
  lead: string; // bold lead-in phrase
  body: string; // rest of the paragraph
};

type Card = {
  id: string;
  eyebrow: string;
  headline: string; // can contain \n for a manual line break
  subtext?: string; //напис: Доступно не всіма мовами
  tint: string; // placeholder background for the card photo
  blocks: Block[]; // one modal section per block, each with its own photo
};

const CARDS: Card[] = [
  {
    id: 'ipados-apps',
    eyebrow: 'iPadOS і додатки',
    headline: 'Гнучка система вікон.\nРобіть усе й одразу.',
    tint: 'linear-gradient(165deg, #4a4f63, #14151c 70%)',
    blocks: [
      {
        lead: 'Усе починається з дотику.',
        body: 'iPadOS, яка створена для великого дисплея Multi‑Touch, пропонує революційні можливості, що роблять iPad неймовірно потужним і простим у вико­рис­танні. З дизайном Liquid Glass усе, що ви бачите й чого торкаєтеся, неймовірно яскраве та приємне оку.',
      },
      {
        lead: 'Мультизадачність — це просто.',
        body: 'Інтуїтивно зрозуміла й гнучка система вікон дає змогу легко керувати всіма додатками й перемикатися між ними так, як вам зручно. Відкривайте кілька вікон одночасно, змінюйте їх розмір і розташування відповідно до потреб робочого процесу.',
      },
      {
        lead: 'Понад мільйон захопливих можливостей.',
        body: 'Додатки з App Store перетворюють iPad на навчальну аудиторію, робочу станцію, професійну студію звукозапису або будь‑що інше. Серед понад мільйона додатків, розроблених для iPad, ви точно знайдете той, що підійде саме вам.',
      },
    ],
  },
  {
    id: 'productivity',
    eyebrow: 'Продуктивність',
    headline: 'Офіс може бути\nде завгодно.',
    tint: 'linear-gradient(165deg, #3a3a3c, #0c0c0d 70%)',
    blocks: [
      {
        lead: 'Універсальність як стандарт.',
        body: 'Працювати з iPad — саме задоволення. Підтримка Multi‑Touch дає змогу швидко й легко виконувати навігацію простими жестами. Додайте Apple Pencil, щоб занотувати чи замалювати свої ідеї. Або приєднайте клавіатуру, щоб миттю відповісти на електронні листи.Footnote 1 Все це завдяки неймовірно потужному чипу Apple.',
      },
      {
        lead: 'Працюйте будь‑де.',
        body: 'Спілкуйтеся з близькими, друзями й колегами, хоч би де ви були. Завдяки швидкому Wi‑Fi можна заван­та­жу­вати й передавати всі потрібні документи, папки та файли звідусіль. А з 5G ви залишати­метеся на звʼязку навіть без підключення до Wi‑Fi.Footnote 2',
      },
      {
        lead: 'Усе в одному місці. Знайти потрібне легко.',
        body: 'Впорядковуйте, діліться та переглядайте будь‑які матеріали в додатку «Файли». Легко знаходьте й керуйте всім, що зберігається у вас на iPad, в iCloud і хмарних сервісах, як‑от Box.',
      },
    ],
  },
  {
    id: 'creativity',
    eyebrow: 'Творчість',
    headline: 'Дайте волю уяві.',
    tint: 'linear-gradient(165deg, #6b3f63, #1c0f1c 70%)',
    blocks: [
      {
        lead: 'Ще більше місця для ідей.',
        body: 'Імерсивний сенсорний екран iPad — це полотно для найсміливіших проявів вашої творчості. Створюйте анімації у FlipaClip, робіть ескізи для нових ідей у Нотатках або малюйте справжні шедеври в Procreate — з iPad оживають ваші найкреативніші ідеї.',
      },
      {
        lead: 'Apple Pencil. Створений творити.',
        body: 'З Apple Pencil ви можете легко малювати аквареллю в Adobe Fresco чи робити архітектурні креслення в SketchUp.Footnote 1',
      },
      {
        lead: 'Робіть найкращі фото. І відео.',
        body: 'Завдяки потужним камерам на передній і задній панелях iPad ви можете знімати відео, робити знімки високої якості чи створювати інший чудовий контент. У додатках, як‑от Final Cut Pro та Adobe Lightroom, можна знімати, редагувати, а потім ділитися контентом — і все це на одному портативному пристрої.',
      },
    ],
  },
  {
    id: 'learning',
    eyebrow: 'Навчання',
    headline: 'Візьміть клас\nіз собою.',
    tint: 'linear-gradient(165deg, #2f5e52, #0b160f 70%)',
    blocks: [
      {
        lead: 'Навчання без перешкод.',
        body: 'Інтегровані камери, швидкісний Wi‑Fi та мобільний звʼязок — усе, що потрібно для безпе­реш­код­ного спіл­ку­вання на відстані. Навчайтеся онлайн, відвідуйте лекції в Zoom, працюйте над спільним проєктом у FaceTime або просто залишайтеся на звʼязку з колегами й однокласниками де завгодно.',
      },
      {
        lead: 'Першокласні аксесуари.',
        body: 'Робити нотатки та працювати над проєктами ще зручніше з аксе­суа­рами, ство­ре­ними спеціально для iPad.Footnote 1 З Apple Pencil можна писати цифрові конспекти від руки чи підʼєднати клавіатуру, щоб швидше відповісти на електронний лист або створити презентацію.',
      },
      {
        lead: 'Додатки для досліджень і відкриттів.',
        body: 'iPad — ідеальний помічник у навчанні. Ви можете вчитися готувати з покроковими рецептами в Kitchen Stories або досліджувати навколишній світ. Для кожного завдання та підходу знайдеться додаток, зокрема й з підтримкою доповненої реальності.',
      },
    ],
  },
  {
    id: 'entertainment',
    eyebrow: 'Дозвілля',
    headline: 'Дивіться. Грайте.\nВідпочивайте.',
    tint: 'linear-gradient(165deg, #2b3e6b, #05091a 70%)',
    blocks: [
      {
        lead: 'Візьміть улюблений контент із собою.',
        body: 'З iPad у вас завжди є доступ до улюблених фільмів, серіалів, книг і музики, хоч би де ви будете.',
      },
      {
        lead: 'Домашній кінотеатр у ваших руках.',
        body: 'Завдяки дивовижному дисплею, чудовим динамікам і передовим технологіям, як‑от ProMotion, увесь ваш контент вражає зобра­женням і звуком.Footnote 3',
      },
      {
        lead: 'А ще це ігровий майданчик.',
        body: 'Завдяки потужному чипу Apple у поєднанні з неймовірним дисплеєм iPad дає змогу повністю зануритися у гру. Додайте клавіатуру чи мишу — і ви вже на новому рівні. Ви навіть можете підʼєд­нати без­дро­товий контролер, щоб корис­ту­ва­тися пристроєм як пор­та­тивною консоллю.Footnote 1',
      },
    ],
  },
  {
    id: 'apple-pencil',
    eyebrow: 'Apple Pencil',
    headline: 'Є ідея? Запишіть.',
    tint: 'linear-gradient(165deg, #5a5a5e, #16171a 70%)',
    blocks: [
      {
        lead: 'З Apple Pencil пишіть, малюйте і нотуйте як ніколи раніше.',
        body: 'Ведіть щоденник, швидко складайте список продуктів і робіть конспекти своїх занять. На iPad легко записати усе, що спаде на думку.',
      },
      {
        lead: 'Запрошуємо усіх митців.',
        body: 'Створюєте щось прекрасне в Procreate, ретушуєте фотографії в Adobe Photoshop чи робите замальовки архітектури в Morpholio Trace? Apple Pencil допоможе втілити ваші творчі ідеї в життя з неймовірною точністю.',
      },
      {
        lead: 'Функції для роботи з насолодою.',
        body: 'Користуватися Apple Pencil з iPadOS так само зручно, як писати ручкою на папері. Ви можете легко підписувати документи, робити позначки на знімках екрана, а також додавати коментарі до додатків у швидких нотатках.',
      },
    ],
  },
  {
    id: 'apple-intelligence',
    eyebrow: 'Створений для Apple Intelligence',
    headline: 'Просто корисна.\nЩодня.',
    subtext: 'Доступно не всіма мовами',
    tint: 'linear-gradient(165deg, #4a3f63, #14111c 70%)',
    blocks: [
      {
        lead: 'Геніальність на дотик.',
        body: 'Останні моделі iPad Pro, iPad Air та iPad mini створені для Apple Intelligence, що допомагає писати, проявляти індивідуальність і виконувати завдання без зусиль.Footnote 4 Pеволюційні засоби захисту конфіденційності надають упевненості, що ніхто не матиме доступу до ваших даних — навіть Apple.',
      },
      {
        lead: 'Спілкуйтеся різними мовами.',
        body: 'Увімкніть Live Translation, щоб авто­матично перекладати тексти в Повідомленнях,Footnote 5 пере­гля­дати пере­кладені субтитри розмов наживо у FaceTime та отримувати усні переклади викликів у додатку «Телефон».Footnote 6',
      },
      {
        lead: 'Висловлюйтеся візуально.',
        body: 'Перетворюйте ескіз на повʼязане зображення, що доповнює ваші нотатки, за допомогою засобу Чарівний пензлик. Створюйте Genmoji для будь‑якої розмови просто на клавіатурі тощо.',
      },
      {
        lead: 'Початок нової ери для Siri.',
        body: 'З новим дизайном, глибшим розу­мінням мови та все­біч­ними знаннями про ваші пристрої Siri стає ще корис­нішою, ніж будь‑коли раніше.',
      },
      {
        lead: 'Захист даних на кожному кроці.',
        body: 'Завдяки технології «Приватні хмарні обчислення» система може використовувати більші серверні моделі, розроблені Apple, що працюють на основі чипів Apple, для оброблення складніших запитів, захищаючи водночас вашу конфіденційність.', 
      }
    ],
  },
];

const SCROLL_STEP = 320;

export default function MeetIpad() {
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
        <h2 className={s.heading}>Познайомтеся з iPad.</h2>
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