import s from './SupportFooter.module.css';
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
    heading: 'Підтримка продуктів',
    links: [
      { label: 'iPhone', href: '/support/iphone' },
      { label: 'Mac', href: '/support/mac' },
      { label: 'iPad', href: '/support/ipad' },
      { label: 'Watch', href: '/support/watch' },
      { label: 'AirPods', href: '/support/airpods' },
      { label: 'Music', href: '/support/music' },
      { label: 'TV', href: '/support/tv' },
      { label: 'Карта вебсайту служби підтримки', href: '/support/sitemap' },
    ],
  },
  {
    heading: 'Ремонт і обслуговування',
    links: [ 
      { label: 'Гарантії на апаратне забезпечення', href: 'https://www.apple.com/legal/warranty/' },
      { label: 'Ліцензійні угоди про використання ПЗ', href: 'https://www.apple.com/legal/sla/' },
      { label: 'Безкоштовна підтримка', href: '/support/free-support' },
    ],
  },
  {
    heading: 'Ресурси',
    links: [ 
      { label: 'Моя підтримка', href: '/support/my-support' },
      { label: 'Документація до продуктів', href: '/support/docs' },
      { label: 'Відео служби підтримки Apple', href: 'https://www.youtube.com/applesupport' },
      { label: 'Доступність', href: '/support/accessibility' }, 
    ],
  },
  {
    heading: 'Контакти',
    links: [ 
      { label: 'Зверніться до нас', href: '/support/contact' },
      { label: 'Програма «Підтримка Apple»', href: 'https://apps.apple.com/ua/app/%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%BF%D1%96%D0%B4%D1%82%D1%80%D0%B8%D0%BC%D0%BA%D0%B8-apple/id1130498044?l=uk' }, 
      { label: 'Спільнота Apple', href: 'https://discussions.apple.com/welcome' }, 
    ],
  },
];

export default function SupportFooter() {
  return (
    <footer className={s.footer}>
      {/* FOOTER BREADCRUMBS */}
      <div className={s.breadcrumbs}>
        <MenuLink href="/" className={s.logo} aria-label="Apple">
          <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M13.0729 17.6825A3.61 3.61 0 0 0 11.3 20.7235c.0331 2.5022 2.2092 3.4338 2.2999 3.4641-.0376.107-.3641 1.1777-1.1656 2.2898-.7008.9683-1.4275 1.9376-2.5755 1.9579-1.1389.0224-1.5023-.6705-2.7935-.6705-1.2902 0-1.6868.6481-2.7644.6929-1.1117.0418-1.9477-1.0454-2.6557-2.0102C.5067 24.5096-.6045 20.8911.7986 18.4452c.7038-1.2231 1.9619-1.9954 3.3266-2.0177 1.0884-.0223 2.1209.7345 2.7905.7345.6695 0 1.9229-.9089 3.2418-.7763.5527.0227 2.1015.2237 3.0992 1.6856-.0816.0508-1.8531 1.0848-1.838 3.2113" />
            <path
              transform="translate(0 1.8)"
              d="M9.9301 13.4151c.5921-.7166 1.0014-1.7184.8856-2.7167-.8536.0359-1.9009.5703-2.5187 1.2814-.5491.6324-1.0455 1.6539-.9148 2.6308.9536.0703 1.9268-.4707 2.5479-1.1955"
            />
          </svg>
        </MenuLink>
        <span className={s.separator} aria-hidden="true">&rsaquo;</span>
        <MenuLink href="/support" className={s.crumbActive}>Підтримка</MenuLink>
      </div>

      <div className={s.links}>
        {COLUMNS.map(col => (
          <div className={s.column} key={col.heading}>
            <h6>{col.heading}</h6>
            {col.links.map(link => (<MenuLink key={link.href} href={link.href}>{link.label}</MenuLink>))}
          </div>
        ))}
      </div>

      <div className={s.copyrightBlock}>
        <div className={s.copyrightText}>
          © Apple Inc., 2026 р. Усі права захищено.
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