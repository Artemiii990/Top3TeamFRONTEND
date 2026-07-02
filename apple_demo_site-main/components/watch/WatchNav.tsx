import MenuLink from './MenuLink';
import s from './WatchNav.module.css';

export default function WatchNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>Apple Watch</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про Watch</p>

            <MenuLink href="/watch">Переглянути всі моделі Apple Watch</MenuLink>
            <MenuLink href="/watch/apple-watch-series-11">Apple Watch Series 11</MenuLink>
            <MenuLink href="/watch/apple-watch-se-3">Apple Watch SE 3</MenuLink>
            <MenuLink href="/watch/apple-watch-ultra-3">Apple Watch Ultra 3</MenuLink>

            <MenuLink className={s.small} href="/watch/compare">
              Порівняння моделей Watch
            </MenuLink>
          </div>

          <div className={s.right}>
            <p>Більше від Watch</p>

            <MenuLink href="/support/watch">Підтримка Apple Watch</MenuLink>
          </div>
        </div>
      </div>
    </section>
  );
}