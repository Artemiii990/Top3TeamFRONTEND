import s from './IpadNav.module.css';

export default function IPadNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>iPad</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про iPad</p>

            <a href="#">Переглянути всі моделі iPad</a>
            <a href="#">iPad Pro</a>
            <a href="#">iPad Air</a>
            <a href="#">iPad</a>
            <a href="#">iPad mini</a>
            <a href="#">Apple Pencil</a>
            <a href="#">Клавіатури</a>

            <a className={s.small} href="#">
              Порівняння моделей iPad
            </a>
          </div>

          <div className={s.right}>
            <p>Більше від iPad</p>

            <a href="#">Підтримка iPad</a>
          </div>
        </div>
      </div>
    </section>
  );
}