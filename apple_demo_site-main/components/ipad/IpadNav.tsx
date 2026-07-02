import s from './IpadNav.module.css';
import MenuLink from './MenuLink';

export default function IPadNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>iPad</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про iPad</p>

            <MenuLink href="/ipad">Переглянути всі моделі iPad</MenuLink>
            <MenuLink href="/ipad/ipad-pro">iPad Pro</MenuLink>
            <MenuLink href="/ipad/ipad-air">iPad Air</MenuLink>
            <MenuLink href="/ipad/ipad-11">iPad</MenuLink>
            <MenuLink href="/ipad/ipad-mini">iPad mini</MenuLink>
            <MenuLink href="/ipad/ipad-pencil">Apple Pencil</MenuLink>
            <MenuLink href="/ipad/keyboards">Клавіатури</MenuLink>

            <MenuLink className={s.small} href="/ipad/compare">
              Порівняння моделей iPad
            </MenuLink>
          </div>

          <div className={s.right}>
            <p>Більше від iPad</p>

            <MenuLink href="/support/ipad">Підтримка iPad</MenuLink>
          </div>
        </div>
      </div>
    </section>
  );
}