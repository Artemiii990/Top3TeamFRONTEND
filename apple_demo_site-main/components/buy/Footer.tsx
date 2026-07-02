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
        <p>Продукти можуть бути доступні не в усіх регіонах. Уточнюйте наявність у місцевих продавців. </p>
        <p>◊ У 4 рази ефективніше активне поглинання шуму порівняно з першими AirPods Pro та AirPods 4 з активним поглинанням шуму. Неймовірне активне поглинання шуму 
          було протестовано відповідно до стандарту IEC 60268-24 в липні 2025 року. Модель порівнювалася з найпопулярнішими бездротовими навушниками-вкладками, 
          доступними в продажу.</p>
        <p>◊◊ Інтегрований монітор серцевого ритму призначений для використання під час тренувань із додатком «Фітнес» і сумісними сторонніми додатками на iPhone 
          з iOS 26 та новішої версії. Детальніше на <MenuLink href='/support/how-to-check-your-heart-rate'> support.apple.com/uk‑ua/123184 </MenuLink>. </p>
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
        <a className={s.crumbActive}>Де купити</a>
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
