import s from './Essentials.module.css';

type Promo = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  tint: string;
};

const PROMOS: Promo[] = [
  {
    id: 'airpods',
    title: 'AirPods',
    description: 'Дізнайтеся про всі моделі AirPods і виберіть, що вам до вподоби.',
    href: '/airpods',
    cta: 'Детальніше',
    tint: 'linear-gradient(135deg, #f1f1f3, #d8d8dc 60%, #b9bac0)',
  },
  {
    id: 'studio-display',
    eyebrow: 'Новий',
    title: 'Studio Display',
    description: '27-дюймовий дисплей Retina 5K ідеально підходить до будь-якої моделі Mac.',
    href: '/studio-display',
    cta: 'Детальніше',
    tint: 'linear-gradient(135deg, #eceef2, #c7cad3)',
  },
];

export default function Essentials() {
  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Найпотрібніше для Mac.</h2>
      </div>

      <div className={s.grid}>
        {PROMOS.map(promo => (
          <a key={promo.id} href={promo.href} className={s.card}>
            <div className={s.content}>
              {promo.eyebrow && <span className={s.eyebrow}>{promo.eyebrow}</span>}
              <h3 className={s.cardTitle}>{promo.title}</h3>
              <p className={s.cardDescription}>{promo.description}</p>
              <span className={s.cta}>{promo.cta}</span>
            </div>
            <div className={s.photo} style={{ background: promo.tint }} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}