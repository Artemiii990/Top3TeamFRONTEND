import s from './Hero.module.css';

export default function Hero() {
  return (
    <section className={s.hero}>
      <h1 className={s.headline}>
        <span className={s.l1}>iPhone</span>
        <div className={s.price}>Зустрічайте найновішу лінійку iPhone</div>
      </h1>
      <div className={s.meta}>
        {/* <div className={s.price}>
          FROM <strong>$1,099</strong> · AVAILABLE 19.09
        </div> */}
        <div className={s.ctas}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
      </div>
    </section>
  );
}
