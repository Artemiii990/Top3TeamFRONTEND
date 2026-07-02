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
        <p>1. Сповіщення про гіпертензію не призначені для користувачів віком до 22 років, людей, у яких раніше було діагностовано гіпертонію, і вагітних жінок. </p>
        <p>2. Сповіщення про апное вві сні доступні на Apple Watch Series 9 і Apple Watch Ultra 2 та новіших моделях, а також на Apple Watch SE 3. Ця функція призначена 
          для виявлення ознак апное помірного чи тяжкого ступеня в людей віком від 18 років без діагнозу апное вві сні. </p>
        <p>3. Додаток «ЕКГ» доступний на Apple Watch Series 4 та новіших моделях (крім Apple Watch SE) і може створювати ЕКГ, подібну до електрокардіограми в одному 
          відведенні. Призначено для користувачів віком від 22 років. </p>
        <p>4. Для сповіщень про порушений серцевий ритм потрібні останні версії watchOS та iOS. Ця функція не призначена для користувачів віком до 22 років, а також 
          для людей, у яких діагностували фібриляцію передсердь (ФП).</p>
        <p>5. Додаток «Життєві показники» призначено лише для загального оцінювання здоров’я, а не для медичного використання. </p>
        <p>6. Функція моніторингу температури не призначена для медичного використання. Моніторинг температури доступний лише на Apple Watch Series 8 і новіших 
          моделях, на Apple Watch SE 3, а також на всіх моделях Apple Watch Ultra.</p>
        <p>7. Додаток «Кисень у крові» призначено лише для загального оцінювання здоров’я, а не для медичного використання.</p>
        <p>8. Додаток «Відстеження циклу» не слід використовувати для запобігання вагітності чи встановлення діагнозу.</p>
        <p>9. Apple Watch SE 3 та Apple Watch Series 11 захищено від води під час занурення на глибину до 50 метрів, згідно зі стандартом ISO 22810:2010. Тобто їх можна 
          надівати під час неглибоких занурень (як‑от плавання в басейні чи морі). Однак Apple Watch SE 3 та Apple Watch Series 11 не можна використовувати під час 
          дайвінгу, катання на водних лижах та інших занять, які передбачають контакт із водою на високій швидкості. Apple Watch Ultra 3 має водонепроникність 
          100 метрів за стандартом ISO 22810:2010. Його можна використовувати під час занять швидкісними водними видами спорту і непрофесійного підводного 
          плавання (із сумісним стороннім додатком із App Store) на глибині до 40 метрів. Його не рекомендується використовувати під час занурення на глибину понад 
          40 метрів. Водонепроникність не є сталою величиною, тому з часом може знижуватися. Детальніше на <MenuLink href='/support/watch-protection-from-water'> support.apple.com/uk‑ua/109522 </MenuLink>.</p>
        <p>10. Apple Watch Series 11 та Apple Watch Ultra 3 мають захист від пилу класу IP6X. </p>
        <p>11. Для роботи функції «Сигнал SOS» потрібна мобільна мережа або можливість виклику за допомогою Wi‑Fi з підключенням до інтернету через Apple Watch 
          або iPhone. Ви можете робити екстрені виклики з моделей Apple Watch із підтримкою GPS + Cellular в багатьох місцях, де доступний мобільний зв’язок. Деякі 
          мобільні мережі можуть відхиляти екстрені виклики з вашого Apple Watch, якщо пристрій не активовано або він не сумісний із певною мережею, 
          не налаштований для роботи в ній чи для мобільного зв’язку, а також якщо мобільна мережа не підтримує екстрені виклики через IMS. Детальніше 
          на <MenuLink href='/suppport/emergency-call-sos'> support.apple.com/uk-ua/108374 </MenuLink> і <MenuLink href='/watch/cellular'> apple.com/ua/watch/cellular </MenuLink>. </p>
        <p>12. Коли нахилено під кутом від користувача, як порівняти з Apple Watch Ultra або Ultra 2. </p>
        <p>13. Час роботи від акумулятора протягом кількох днів, зокрема з увімкненою функцією відстеження сну, розраховано за такого використання: 600 перевірок часу, 
          180 повідомлень, 30 хвилин використання додатків і 60‑хвилинне тренування з відтворенням музики з Apple Watch через Bluetooth, а також 6 годин відстеження 
          сну (усе це протягом 42 годин); використання Apple Watch Ultra 3 охоплює загалом 8 годин підключення до мережі мобільного звʼязку та 34 години підʼєднання 
          до iPhone через Bluetooth (усе це протягом 42 годин). Час роботи від акумулятора в режимі економії заряду, зокрема з увімкненою функцією відстеження сну, 
          розраховано за такого використання: 900 перевірок часу, 270 повідомлень, 45 хвилин використання додатків і два 60‑хвилинні тренування із відтворенням 
          музики з Apple Watch через Bluetooth, а також 18 годин відстеження сну (усе це протягом 72 годин); використання Apple Watch Ultra 3 охоплює підключення 
          до мережі мобільного звʼязку за запитом та 60 годин підʼєднання до iPhone через Bluetooth (усе це протягом 72 годин). Тестування проводила компанія Apple 
          у липні та серпні 2025 року на контрольних зразках Apple Watch Ultra 3, під’єднаних до iPhone; на всіх випробовуваних пристроях було встановлено версію 
          програмного засобу, яка готувалася до випуску. Фактична тривалість роботи від акумулятора може не збігатися з указаною, оскільки залежить від умов 
          використання, конфігурації, мобільної мережі, потужності сигналу та багатьох інших факторів. </p>
        <p>14. Продуктивність GPS оцінювалася на основі точності карт маршруту в складних міських умовах під час тренувань з бігу та ходьби надворі. Продукт порівнювався 
          з провідними двочастотними GPS‑годинниками для спорту, наявними в продажу на момент тестування в серпні 2025 року. </p>
        <p>15. Для використання мобільного зв’язку потрібен тарифний план для бездротового зв’язку. За додатковими відомостями звертайтеся до свого оператора. 
          Стабільність підключення може змінюватися залежно від доступності мережі. Ознайомитися з доступними операторами бездротового зв’язку й умовами участі 
          у програмі можна на <MenuLink href='/watch/cellular'> apple.com/ua/watch/cellular </MenuLink>. Детальніше про налаштування дивіться на <MenuLink href='/support/setting-up-cellular-on-the-applewatch'> support.apple.com/uk-ua/HT207578 </MenuLink>. </p>
        <p>16. Щоб користуватися Apple Music, потрібна передплата. </p>
        <p>17. Доступно лише з вибраними партнерами та в певних регіонах і підтримується не на всіх пристроях і не в усіх версіях операційної системи. </p>
        <p>Щоб користуватись Oceanic+, потрібна передплата. Доступно в App Store. З Apple Watch Series 11 можна займатися снорклінгом на глибині до 6 метрів, 
          а з Apple Watch Ultra 3 занурюватися на глибину до 40 метрів. Завжди дотримуйтеся протоколів занурень, занурюйтеся з напарником і майте при собі додатковий 
          пристрій. </p>
        <p>Для Apple Watch Ultra 3, Apple Watch Series 11 та Apple Watch SE 3 потрібен iPhone 11 або новішої моделі з iOS 26 або новішої версії. </p>
        <p>Функції можуть змінюватися. Деякі функції, додатки та сервіси доступні не всіма мовами та не в усіх регіонах. Перегляньте повний <MenuLink href='https://www.apple.com/watchos/feature-availability/'> перелік </MenuLink>. </p>
        <p>Наявність певних ремінців не гарантовано. </p>
        <p>Щоб користуватись Apple Pay, потрібна підтримувана картка від емітента, що бере участь у програмі. Щоб перевірити, чи ваша картка сумісна з Apple Pay, зверніться 
          до її емітента. </p>
        <p>Сервіс Apple Pay недоступний у деяких країнах і регіонах. <MenuLink href='https://www.apple.com/watchos/feature-availability/#apple-wallet-apple-pay'> Перегляньте перелік країн і регіонів, де підтримується Apple Pay </MenuLink>.  </p>
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
        {/* <a href="/mac" className={s.crumbActive}>Mac</a> */}
        <a className={s.crumbActive}>Watch</a>
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
