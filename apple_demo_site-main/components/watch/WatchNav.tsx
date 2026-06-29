import s from './WatchNav.module.css';

export default function WatchNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>Apple Watch</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про Watch</p>

            <a href="#">Переглянути всі моделі Apple Watch</a>
            <a href="#">Apple Watch Series 11</a>
            <a href="#">Apple Watch SE 3</a>
            <a href="#">Apple Watch Ultra 3</a>

            <a className={s.small} href="#">
              Порівняння моделей Watch
            </a>
          </div>

          <div className={s.right}>
            <p>Більше від Watch</p>

            <a href="#">Підтримка Apple Watch</a>
          </div>
        </div>
      </div>
    </section>
  );
}