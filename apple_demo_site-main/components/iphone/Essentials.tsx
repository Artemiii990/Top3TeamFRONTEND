import s from './Essentials.module.css';

type Tile = { gradient: string };

type Card = {
  id: string;
  title: string;
  description: string;
  tiles: Tile[]; // placeholder "photos" — gradient blocks standing in for product shots
};

const CARDS: Card[] = [
  {
    id: 'accessories',
    title: 'Аксесуари для iPhone',
    description: 'Убезпечте і персоналізуйте свій iPhone за допомогою нових аксесуарів, як-от яскраві чохли чи нові ремінці через плече тощо.',
    tiles: [
      { gradient: 'linear-gradient(160deg, #5c7a4a, #2e3d24)' }, // green case
      { gradient: 'linear-gradient(160deg, #f7d9d9, #ecb3b8)' }, // pink case
      { gradient: 'linear-gradient(160deg, #eef3f6, #c3d3dc)' }, // light blue/white case
    ],
  },
  {
    id: 'airtag',
    title: 'AirTag',
    description: 'Прикріпіть один AirTag до своїх ключів, а інший покладіть у рюкзак. Якщо загубили їх, просто скористайтеся Локатором.',
    tiles: [
      { gradient: 'linear-gradient(160deg, #44485a, #1c1e26)' },
      { gradient: 'linear-gradient(160deg, #db8a3f, #a8551a)' },
      { gradient: 'linear-gradient(160deg, #5c7a4a, #2e3d24)' },
      { gradient: 'linear-gradient(160deg, #44485a, #1c1e26)' },
      { gradient: 'linear-gradient(160deg, #4c5170, #262a3d)' },
      { gradient: 'linear-gradient(160deg, #f7f7f8, #d6d6da)' },
      { gradient: 'linear-gradient(160deg, #db8a3f, #a8551a)' },
      { gradient: 'linear-gradient(160deg, #4c5170, #262a3d)' },
    ],
  },
];

export default function Essentials() {
  return (
    <section className={s.section}>
      <div className={s.headerRow}>
        <h2 className={s.heading}>Усе, що потрібно для iPhone.</h2>
      </div>

      <ul className={s.track}>
        {CARDS.map(card => (
          <li key={card.id} className={s.card}>
            <h3 className={s.cardTitle}>{card.title}</h3>
            <p className={s.cardDescription}>{card.description}</p>

            <div className={s.tileGrid} data-count={card.tiles.length}>
              {card.tiles.map((tile, i) => (
                <div
                  key={i}
                  className={s.tile}
                  style={{ background: tile.gradient }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}