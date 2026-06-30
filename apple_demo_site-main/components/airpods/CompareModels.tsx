import s from './CompareModels.module.css';

type FeatureCell =
  | { type: 'check' }
  | { type: 'dash' }
  | { type: 'text'; value: string }
  | { type: 'spec'; value: string; description: string };

type FeatureRow = {
  label?: string;
  cells: FeatureCell[]; // one per model column, same order as MODELS
};

type Model = {
  id: string;
  tag?: string; // e.g. "Нові"
  name: string;
  shortText?: string; //для Airpods 4 
  description: string;
  moreHref: string;
};

const MODELS: Model[] = [
  {
    id: 'airpods4',
    name: 'AirPods 4',
    description: 'Стрімка еволюція звучання та комфорту.',
    moreHref: '/airpods/airpods-4',
  },
  {
    id: 'airpods4anc',
    name: 'AirPods 4',
    shortText: 'Активне поглинання шуму',
    description: 'Стрімка еволюція звучання, комфорту й контролю шуму.',
    moreHref: '/airpods/airpods-4',
  },
  {
    id: 'airpodspro3',
    name: 'AirPods Pro 3',
    description: 'Неймовірне активне поглинання шуму та відстеження серцевого ритму під час тренувань.',
    moreHref: '/airpods/airpods-pro',
  },
  {
    id: 'airpodsmax2',
    tag: 'Нові',
    name: 'AirPods Max 2',
    description: 'Повнорозмірні навушники з персоналізованим звучанням.',
    moreHref: '/airpods/airpods-max',
  },
];

const ROWS: FeatureRow[] = [
  {
    label: 'Активне поглинання шуму',
    cells: [
      { type: 'dash' },
      { type: 'check' },
      { type: 'check' },
      { type: 'check' },
    ],
  },
  {
    label: 'Адаптивний звук та режим проникності',
    cells: [
      { type: 'dash' },
      { type: 'check' },
      { type: 'check' },
      { type: 'text', value: 'Лише режим проникності' },
    ],
  },
  {
    label: 'Персоналізоване просторове аудіо',
    cells: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' },
      { type: 'check' },
    ],
  },
  {
    label: 'Звук без втрат',
    cells: [
      { type: 'dash' },
      { type: 'dash' },
      { type: 'dash' },
      { type: 'check' },
    ],
  },
  {
    label: 'Відстеження серцевого ритму',
    cells: [
      { type: 'dash' },
      { type: 'dash' },
      { type: 'check' },
      { type: 'dash' },
    ],
  },
  {
    label: 'Усунення гучних звуків',
    cells: [
      { type: 'dash' },
      { type: 'dash' },
      { type: 'dash' },
      { type: 'check' },
    ],
  },
  {
    label: 'Час прослуховування',
    cells: [
      { type: 'spec', value: '5 год', description: 'До 5 годин прослуховування без заряджання' },
      { type: 'spec', value: '5 год', description: 'До 5 годин прослуховування без заряджання (4 год з з увімкненим активним поглинанням шуму)' },
      { type: 'spec', value: '8 год', description: 'До 8 годин прослуховування без заряджання з активним поглинанням шуму' },
      { type: 'spec', value: '20 год', description: 'До 20 годин прослуховування без заряджання з активним поглинанням шуму' },
    ],
  },
  {
    label: 'Зарядний футляр',
    cells: [
      { type: 'text', value: 'USB‑C' },
      { type: 'text', value: 'Бездротовий зарядний футляр (USB‑C) можна заряджати за допомогою зарядного пристрою для Apple Watch і зарядних пристроїв стандарту Qi; є динамік для Локатора' },
      { type: 'text', value: 'MagSafe (USB‑C) можна заряджати за допомогою зарядного пристрою для Apple Watch і зарядних пристроїв стандарту Qi; є петля для шнурка і динамік для Локатора' },
      { type: 'text', value: 'Чохол Smart Case' },
    ],
  },
  {
    label: 'Ізоляція голосу',
    cells: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' },
      { type: 'check' },
    ],
  },
];

function Cell({ cell }: { cell: FeatureCell }) {
  switch (cell.type) {
    case 'check':
      return (
        <svg className={s.check} viewBox="0 0 18 18" aria-label="Доступно">
          <path d="M3 9.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'dash':
      return <span className={s.dash} aria-label="Недоступно">—</span>;
    case 'text':
      return <span className={s.rowDescription}>{cell.value}</span>;
    case 'spec':
      return (
        <>
          <span className={s.specValue}>{cell.value}</span>
          <span className={s.specDescription}>{cell.description}</span>
        </>
      );
  }
}

export default function CompareModels() {
  return (
    <section className={s.section}>
      <h2 className={s.heading}>Порівняйте моделі AirPods</h2>

      <div className={s.scrollArea}>
        <div className={s.grid}>
          {MODELS.map((model, colIndex) => (
            <div key={model.id} className={s.col}>
              <div className={s.colHeader}>
                <span className={s.colTag}>{model.tag ?? ''}</span>
                <h3 className={s.colName}>{model.name}</h3>
                <p className={s.colDescription}>{model.description}</p>
                <a href={model.moreHref} className={s.colCta}>Детальніше ›</a>
              </div>

              {ROWS.map(row => (
                <div className={s.row} key={row.label}>
                  <span className={s.rowLabel}>{row.label}</span>
                  <Cell cell={row.cells[colIndex]} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={s.footerLinkRow}>
        <a href="/airpods/compare" className={s.footerLink}>Порівняйте всі моделі AirPods ›</a>
      </div>
    </section>
  );
}