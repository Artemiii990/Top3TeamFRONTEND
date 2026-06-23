import s from './Footer.module.css';

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: 'Продукти',
    links: ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV', 'AirTag'],
  },
  {
    heading: 'Обліковий запис',
    links: ['Керування обліковим записом Apple', 'iCloud.com']
  },
  {
    heading: 'Сервіси',
    links: ['Apple One', 'Apple TV', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books', 'App Store'],
  },
  {
    heading: 'Для бізнесу',
    links: ['Apple і бізнес']
  },
  {
    heading: 'Цінності Apple',
    links: ['Доступність', 'Довкілля', 'Конфіденційність']
  },
  {
    heading: 'Про компанію Apple',
    links: ['Вакансії', 'Інвесторам', 'Етика й відповідність'],
  },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      {/* примітки зверху футера */}
      <div className={s.notes}>
        <p>1. Порівняно з iPhone попереднього покоління. </p>
        <p>2. iPhone 17e, iPhone 17, iPhone Air та iPhone 17 Pro захищено від бризок, води й пилу. Тестування пристроїв у контрольованих лабораторних умовах показало 
          їх відповідність класу захисту IP68 згідно зі стандартом IEC 60529 (занурення щонайбільше на 6 метрів протягом 30 хвилин). Ступінь захисту від бризок, води 
          й пилу не є сталою величиною, тому може знижуватися внаслідок звичайного зношування. Не заряджайте iPhone, якщо він мокрий. Інформацію про очищення 
          й просушування пристрою дивіться в інструкції користувача. Гарантія не поширюється на пошкодження від вологи. </p>
        <p>3. Режим «Швидкий рух» доступний на моделях iPhone 14 і пізніших, за винятком iPhone SE, iPhone 16e та iPhone 17e. Функція «Аудіомікс» доступна на моделях 
          iPhone 16 і пізніших. Контролер камери доступний на моделях iPhone 16 і пізніших, за винятком iPhone 16e та iPhone 17e. Фронтальна камера Center Stage 
          доступна в iPhone 17, iPhone 17 Pro, iPhone 17 Pro Max та iPhone Air. </p>
        <p>4. Тестування проводила компанія Apple у липні 2025 року на контрольних зразках iPhone 17, iPhone Air, iPhone 17 Pro й iPhone 17 Pro Max із версіями програмних 
          засобів, що готується до виходу, і підключенням до мереж LTE та 5G. Додаткове тестування iPhone Air проводилося з використанням контрольних зразків 
          акумулятора MagSafe для iPhone Air та версій програмних засобів, що готуються до виходу. Безперервно відтворювався фільм у форматі HDR тривалістю 
          2 години 23 хвилини, придбаний в iTunes Store. У потоковому режимі безперервно відтворювався фільм у форматі HDR тривалістю 3 години 1 хвилину, 
          придбаний в iTunes Store. Використовувалися стандартні параметри, окрім наведених далі: через Bluetooth було підключено навушники; ввімкнено мережу 
          Wi‑Fi; вимкнено функції «Питати про приєднання» для мереж Wi‑Fi, «Автояскравість» і True Tone. </p>
        <p>5. Потрібен тарифний план для передавання даних. Технологія 5G доступна не в усіх країнах і лише в деяких операторів мобільного зв’язку.
          Швидкість залежить від оператора й умов зв’язку. Детальну інформацію про підтримку 5G можна отримати в оператора мобільного зв’язку, а також на <a href='#'>  apple.com/iphone/cellular. </a></p>
        <p>6. Аксесуари продаються окремо. </p>
        <p>7. Доступна бета-версія Apple Intelligence. Деякі функції доступні не всіма мовами й не в усіх регіонах. Інформацію про доступність функцій і мов, а також системні 
          вимоги дивіться на <a href='#'> support.apple.com/uk-ua/121115. </a></p>
        <p>8. Функція «Переклад наживо» в Повідомленнях доступна мовами з підтримкою Apple Intelligence, коли ввімкнено Apple Intelligence на сумісному пристрої iPhone, 
          iPad або Mac, а також на Apple Watch Series 9 і новіших моделях, Apple Watch Ultra 2 і новіших моделях та Apple Watch SE 3 у парі з iPhone із підтримкою Apple 
          Intelligence. Підтримувані мови наведено на<a href='#'> support.apple.com/uk-ua/121115. </a></p>
        <p>9. Візуальний інтелект доступний на будь-якій моделі iPhone із підтримкою Apple Intelligence. Деякі функції доступні не всіма мовами та не в усіх регіонах. 
          Детальніше дивіться на <a href='#'>  support.apple.com/uk-ua/121115#visual-intelligence. </a></p>
        <p>10. Доступна бета-версія функції «Гумка». Сумісні пристрої та системні вимоги можна переглянути на <a href='#'>  support.apple.com/uk-ua/121429. </a></p>
        <p>11. Відповідно до розподілу масового балансу. </p>
        <p>12. Моделі iPhone 14 і новіші можуть розпізнавати серйозні автомобільні аварії та викликати допомогу. Потрібна мобільна мережа або можливість виклику 
          за допомогою Wi-Fi. </p>
        <p>13. Потрібні iPhone і Apple Watch із чипом надширокосмугового зв’язку другого покоління. Доступність надширокосмугового зв’язку залежить від регіону. </p>
        <p> Щоб користуватися Apple Pay, потрібна підтримувана картка від емітента, що бере участь у програмі. Щоб перевірити, чи ваша картка сумісна з Apple Pay, зверніться
          до її емітента.</p>
        <p> Сервіс Apple Pay недоступний у деяких країнах і регіонах. <a href='#'>  Переглянути країни та регіони Apple Pay. </a></p>
        <p> Функції можуть змінюватися. Деякі функції, додатки та сервіси доступні не всіма мовами й не в усіх регіонах і можуть потребувати певних апаратних і програмних
          засобів. Докладніше можна дізнатися в розділі<a href='#'>  Доступність функцій. </a></p>
        <p> Arknights: Endfield вийде на iOS. Дата випуску може змінитися, актуальну інформацію можна переглянути на сайті розробника. </p>
      </div>

      <div className={s.links}>

        {/* Column 1 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[0].heading}</h6>
            {COLUMNS[0].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>

        {/* Column 2 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[1].heading}</h6>
            {COLUMNS[1].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[2].heading}</h6>
            {COLUMNS[2].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>

        {/* Column 3 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[3].heading}</h6>
            {COLUMNS[3].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>

        {/* Column 4 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[4].heading}</h6>
            {COLUMNS[4].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[5].heading}</h6>
            {COLUMNS[5].links.map(label => <a key={label} href="#">{label}</a>)}
          </div>
        </div>
      </div>

      <div className={s.partnerText}>
        <a href='#'>Знайти поруч</a> магазин офіційного партнера.
      </div>
        
      <div className={s.copyrightBlock}>
        <div className={s.copyrightText}>
          © 2026 Apple Inc. Усі права застережено.
        </div>
        <div className={s.copyrightLinks}>
          <a href='#'>Політика конфіденційності</a>
          <a href='#'>Юридична інформація</a>
          <a href='#'>Карта сайту</a>
          <a href='#' className={s.langLink}>Україна</a>
        </div>
      </div>
    </footer>
  );
}
