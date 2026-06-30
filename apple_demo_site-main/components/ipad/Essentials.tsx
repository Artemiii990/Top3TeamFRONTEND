import s from './Essentials.module.css';

type Card = {
  id: string;
  title: string;
  description: string;
  tint: string; // placeholder gradient standing in for the real product photo
  moreHref: string;
};

const CARDS: Card[] = [
  {
    id: 'apple-pencil',
    title: 'Apple Pencil',
    description: 'Є ідея? Запишіть.',
    tint: 'linear-gradient(160deg, #e8e8ed, #b9bac0)',
    moreHref: '/apple-pencil',
  },
  {
    id: 'keyboards',
    title: 'Клавіатури для iPad',
    description: 'Занотуйте. І заберіть із собою.',
    tint: 'linear-gradient(160deg, #4c5170, #1c1e26)',
    moreHref: '/ipad-keyboards',
  },
];

export default function Essentials() {
  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Найнеобхідніше для iPad.</h2>
      </div>

      <ul className={s.track}>
        {CARDS.map(card => (
          <li key={card.id} className={s.card}>
            <h3 className={s.cardTitle}>{card.title}</h3>
            <p className={s.cardDescription}>{card.description}</p>

            <div className={s.photo} style={{ background: card.tint }} aria-hidden="true" />

            <div className={s.linkRow}>
              <a href={card.moreHref} className={s.btnLink}>
                Детальніше <span aria-hidden="true">›</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}