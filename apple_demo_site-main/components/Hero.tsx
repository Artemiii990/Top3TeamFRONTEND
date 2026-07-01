import s from './Hero.module.css';
import MenuLink from './MenuLink';

function HeroBanner() {
  return (
    <section className={`${s.section} ${s.hero}`}>
      <div className={s.content}>
        <h1 className={s.title}>iPhone</h1>
        <p className={s.subtitle}>Зустрічайте найновішу лінійку iPhone</p>

        <div className={s.actions}>
          <MenuLink href='/iphone' className={s.cta}>Детальніше</MenuLink>
        </div>
      </div>

      <div className={s.media}>
        <img src="/images/iphone.jpg" alt="iPhone" />
      </div>
    </section>
  );
}

function TabletBanner() {
  return (
    <section className={`${s.section} ${s.ipad}`}>
      <div className={s.content}>
        <h2 className={s.title}>iPad <span className={s.airText}>air</span></h2>
        <p className={s.subtitle}>Відтепер з турбопотужністю M4.</p>

        <div className={s.actions}>
          <MenuLink href='/ipad-air' className={s.cta}>Детальніше</MenuLink>
        </div>
      </div>

      <div className={s.media}>
        <img src="/images/apple-ipad-air.jpg" alt="iPad" />
      </div>
    </section>
  );
}

function MacBanner() {
  return (
    <section className={`${s.section} ${s.mac}`}>
      <div className={s.content}>
        <h2 className={s.title}>MacBook Air</h2>
        <p className={s.subtitle}>Відтепер з турбопотужністю M5.</p>

        <div className={s.actions}>
          <MenuLink href='/macbook-air' className={s.cta}>Детальніше</MenuLink>
        </div>
      </div>

      <div className={s.media}>
        <img src="/images/macbook-air.jpg" alt="MacBook" />
      </div>
    </section>
  );
}

type Card = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  theme: 'light' | 'dark';
  href: string;
};

const CARDS: Card[] = [
  {
    id: 'airpods-max',
    title: 'AirPods Max 2',
    subtitle: 'Звучання. У ремастерингу.',
    image: '/images/airpods.jpeg',
    theme: 'light',
    href: '/airpods-max', 
  },
  {
    id: 'macbook-pro',
    title: 'MacBook Pro',
    subtitle: 'Тепер із M5, M5 Pro або M5 Max.',
    image: '/images/macbook-pro.jpg',
    theme: 'dark',
    href: '/macbook-pro', 
  },
  {
    id: 'airpods-pro',
    title: 'AirPods Pro 3',
    subtitle: 'Неймовірне активне поглинання шуму.',
    image: '/images/airpods-pro.jpg',
    theme: 'light',
    href: '/airpods-pro', 
  },
  {
    id: 'watch-ultra',
    title: 'Watch Ultra 3',
    subtitle: 'Ручний звір.',
    image: '/images/watch.jpg',
    theme: 'dark',
    href: '/apple-watch-ultra-3', 
  },
  {
    id: 'ipad-pro',
    title: 'iPad Pro',
    subtitle: 'Розширена продуктивність ШІ та можливості, що змінюють правила гри.',
    image: '/images/ipad-pro.jpg',
    theme: 'dark',
    href: '/ipad-pro', 
  },
  {
    id: 'watch-series',
    title: 'Watch Series 11',
    subtitle: "Чудовий спосіб стежити за своїм здоров'ям.",
    image: '/images/watch-series.jpg',
    theme: 'light',
    href: '/apple-watch-series-11', 
  },
];

function GridSection() {
  return (
    <section className={s.grid}>
      {CARDS.map((card) => (
        <article
          key={card.id}
          className={`${s.card} ${card.theme === 'dark' ? s.cardDark : s.cardLight}`}
        >
          <div className={s.cardText}>
            <h3 className={s.cardTitle}>{card.title}</h3>
            <p className={s.cardSubtitle}>{card.subtitle}</p>
            <div className={s.actions}>
              <MenuLink href={card.href} className={s.cta}>Детальніше</MenuLink>
            </div>
          </div>

          <div className={s.cardMedia}>
            <img src={card.image} alt={card.title} loading="lazy" />
          </div>
        </article>
      ))}
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <HeroBanner />
      <TabletBanner />
      <MacBanner />
      <GridSection />
    </>
  );
}