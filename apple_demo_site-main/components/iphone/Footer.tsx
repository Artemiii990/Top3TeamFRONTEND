import s from './Footer.module.css';
import MenuLink from './MenuLink';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const COLUMNS: FooterColumn[] = [
  {
    heading: 'Продукти',
    links: [
      { label: 'Mac', href: '/mac' }, 
      { label: 'iPad', href: '/ipad' },
      { label: 'iPhone', href: '/iphone' },
      { label: 'Watch', href: '/watch' },
      { label: 'AirPods', href: '/airpods' }, 
      { label: 'TV', href: '/tv' },
      { label: 'AirTag', href: '/airtag' }, 
    ],
  },
  {
    heading: 'Обліковий запис',
    links: [
      { label: 'Керування обліковим записом Apple', href: '/apple-account' }, 
      { label: 'iCloud.com', href: 'https://www.icloud.com/' } ,
    ]
  },
  {
    heading: 'Сервіси',
    links: [
      { label: 'Apple One', href: 'https://www.apple.com/apple-one/' }, 
      { label: 'Apple TV', href: 'https://tv.apple.com/ua' }, 
      { label: 'Apple Music', href: 'https://www.apple.com/apple-music/' }, 
      { label: 'Apple Arcade', href: 'https://www.apple.com/apple-arcade/' }, 
      { label: 'Apple Podcasts', href: 'https://www.apple.com/apple-podcasts/' }, 
      { label: 'Apple Books', href: 'https://www.apple.com/apple-books/' },
      { label: 'App Store', href: 'https://www.apple.com/app-store/' }, 
    ],
  },
  {
    heading: 'Для бізнесу',
    links: [
      { label: 'Apple і бізнес', href: 'https://www.apple.com/business/' },
    ]
  },
  {
    heading: 'Цінності Apple',
    links: [
      { label: 'Доступність', href: '/accessibility' },
      { label: 'Довкілля', href: 'https://www.apple.com/environment/' },
      { label: 'Конфіденційність', href: 'https://www.apple.com/privacy/' },
    ]
  },
  {
    heading: 'Про компанію Apple',
    links: [
      { label: 'Вакансії', href: 'https://www.apple.com/careers/ua/' },
      { label: 'Інвесторам', href: 'https://investor.apple.com/investor-relations/default.aspx' },
      { label: 'Етика й відповідність', href: 'https://www.apple.com/compliance/' },
    ],
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
          Швидкість залежить від оператора й умов зв’язку. Детальну інформацію про підтримку 5G можна отримати в оператора мобільного зв’язку, а також на <MenuLink href='https://www.apple.com/iphone/cellular/'>  apple.com/iphone/cellular. </MenuLink></p>
        <p>6. Аксесуари продаються окремо. </p>
        <p>7. Доступна бета-версія Apple Intelligence. Деякі функції доступні не всіма мовами й не в усіх регіонах. Інформацію про доступність функцій і мов, а також системні 
          вимоги дивіться на <MenuLink href='/support/how-to-get-apple-intelligent-functions'> support.apple.com/uk-ua/121115. </MenuLink></p>
        <p>8. Функція «Переклад наживо» в Повідомленнях доступна мовами з підтримкою Apple Intelligence, коли ввімкнено Apple Intelligence на сумісному пристрої iPhone, 
          iPad або Mac, а також на Apple Watch Series 9 і новіших моделях, Apple Watch Ultra 2 і новіших моделях та Apple Watch SE 3 у парі з iPhone із підтримкою Apple 
          Intelligence. Підтримувані мови наведено на<MenuLink href='/support/how-to-get-apple-intelligent-functions'> support.apple.com/uk-ua/121115. </MenuLink></p>
        <p>9. Візуальний інтелект доступний на будь-якій моделі iPhone із підтримкою Apple Intelligence. Деякі функції доступні не всіма мовами та не в усіх регіонах. 
          Детальніше дивіться на <MenuLink href='/support/how-to-get-apple-intelligent-functions#visual-intelligence'>  support.apple.com/uk-ua/121115#visual-intelligence. </MenuLink></p>
        <p>10. Доступна бета-версія функції «Гумка». Сумісні пристрої та системні вимоги можна переглянути на <MenuLink href='/support/elasticband-function-in-photos'>  support.apple.com/uk-ua/121429. </MenuLink></p>
        <p>11. Відповідно до розподілу масового балансу. </p>
        <p>12. Моделі iPhone 14 і новіші можуть розпізнавати серйозні автомобільні аварії та викликати допомогу. Потрібна мобільна мережа або можливість виклику 
          за допомогою Wi-Fi. </p>
        <p id='footnote-13'>
          13. Потрібні iPhone і Apple Watch із чипом надширокосмугового зв’язку другого покоління. 
          Доступність надширокосмугового зв’язку залежить від регіону. 
        </p>
        <p> Щоб користуватися Apple Pay, потрібна підтримувана картка від емітента, що бере участь у програмі. Щоб перевірити, чи ваша картка сумісна з Apple Pay, зверніться
          до її емітента.</p>
        <p> Сервіс Apple Pay недоступний у деяких країнах і регіонах. <MenuLink href='/support/countries-and-regions-with-applepay'>  Переглянути країни та регіони Apple Pay. </MenuLink></p>
        <p> Функції можуть змінюватися. Деякі функції, додатки та сервіси доступні не всіма мовами й не в усіх регіонах і можуть потребувати певних апаратних і програмних
          засобів. Докладніше можна дізнатися в розділі<MenuLink href='https://www.apple.com/ios/feature-availability/#apple-wallet-apple-pay'>  Доступність функцій. </MenuLink></p>
        <p> Arknights: Endfield вийде на iOS. Дата випуску може змінитися, актуальну інформацію можна переглянути на сайті розробника. </p>
      </div>

      {/* FOOTER-BREADCRUMBS */}
      <div className={s.breadcrumbs}>
        <MenuLink href="/" className={s.logo} aria-label="Apple">
          <svg
            viewBox="0 0 14 44"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M13.0729 17.6825A3.61 3.61 0 0 0 11.3 20.7235c.0331 2.5022 2.2092 3.4338 2.2999 3.4641-.0376.107-.3641 1.1777-1.1656 2.2898-.7008.9683-1.4275 1.9376-2.5755 1.9579-1.1389.0224-1.5023-.6705-2.7935-.6705-1.2902 0-1.6868.6481-2.7644.6929-1.1117.0418-1.9477-1.0454-2.6557-2.0102C.5067 24.5096-.6045 20.8911.7986 18.4452c.7038-1.2231 1.9619-1.9954 3.3266-2.0177 1.0884-.0223 2.1209.7345 2.7905.7345.6695 0 1.9229-.9089 3.2418-.7763.5527.0227 2.1015.2237 3.0992 1.6856-.0816.0508-1.8531 1.0848-1.838 3.2113" />
            <path
              transform="translate(0 1.8)"
              d="M9.9301 13.4151c.5921-.7166 1.0014-1.7184.8856-2.7167-.8536.0359-1.9009.5703-2.5187 1.2814-.5491.6324-1.0455 1.6539-.9148 2.6308.9536.0703 1.9268-.4707 2.5479-1.1955"
            />
          </svg>
        </MenuLink>
        <span className={s.separator} aria-hidden="true">&rsaquo;</span>
        <a className={s.crumbActive}>iPhone</a>
      </div>

      <div className={s.links}>

        {/* Column 1 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[0].heading}</h6>
            {COLUMNS[0].links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
        </div>

        {/* Column 2 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[1].heading}</h6>
            {COLUMNS[1].links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[2].heading}</h6>
            {COLUMNS[2].links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
        </div>

        {/* Column 3 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[3].heading}</h6>
            {COLUMNS[3].links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
        </div>

        {/* Column 4 */}
        <div className={s.column}>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[4].heading}</h6>
            {COLUMNS[4].links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
          <div className={s.sectionBlock}>
            <h6>{COLUMNS[5].heading}</h6>
            {COLUMNS[5].links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
        </div>
      </div>

      <div className={s.partnerText}>
        <MenuLink href='https://locate.apple.com/ua/en/'>Знайти поруч</MenuLink> магазин офіційного партнера.
      </div>
        
      <div className={s.copyrightBlock}>
        <div className={s.copyrightText}>
          © 2026 Apple Inc. Усі права застережено.
        </div>
        <div className={s.copyrightLinks}>
          <MenuLink href='https://www.apple.com/legal/privacy/uk/'>Політика конфіденційності</MenuLink>
          <MenuLink href='https://www.apple.com/legal/'>Юридична інформація</MenuLink>
          <MenuLink href='/sitemap'>Карта сайту</MenuLink>
          <MenuLink href='https://www.apple.com/choose-country-region/' className={s.langLink}>Україна</MenuLink>
        </div>
      </div>
    </footer>
  );
}
