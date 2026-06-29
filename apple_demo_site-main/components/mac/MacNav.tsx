import s from './MacNav.module.css';

export default function MacNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>Mac</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про Mac</p>

            <a href="#">Переглянути всі моделі Mac</a>
            <a href="#">MacBook Neo</a>
            <a href="#">MacBook Air</a>
            <a href="#">MacBook Pro</a>
            <a href="#">iMac</a>
            <a href="#">Mac mini</a>
            <a href="#">Mac Studio</a>
            <a href="#">Дисплеї</a>

            <a className={s.small} href="#">
              Порівняння моделей Mac
            </a>
          </div>

          <div className={s.right}>
            <p>Більше від Mac</p>

            <a href="#">Підтримка Mac</a>
          </div>
        </div>
      </div>
    </section>
  );
}