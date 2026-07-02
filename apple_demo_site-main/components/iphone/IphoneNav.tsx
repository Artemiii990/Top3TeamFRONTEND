import s from './iPhoneNav.module.css';
import MenuLink from './MenuLink';

export default function IPhoneNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>iPhone</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про iPhone</p>

            <MenuLink href="/iphone">Переглянути всі моделі iPhone</MenuLink>
            <MenuLink href="/iphone/iphone-17-pro">iPhone 17 Pro</MenuLink>
            <MenuLink href="/iphone/iphone-air">iPhone Air</MenuLink>
            <MenuLink href="/iphone/iphone-17">iPhone 17</MenuLink>
            <MenuLink href="/iphone/iphone-17e">iPhone 17e</MenuLink>
            <MenuLink href="/iphone/iphone-16">iPhone 16</MenuLink>

            <MenuLink className={s.small} href="/iphone/compare">
              Порівняння моделей iPhone
            </MenuLink>
          </div>

          <div className={s.right}>
            <p>Більше від iPhone</p>

            <MenuLink href="/support/iphone">Підтримка iPhone</MenuLink>
          </div>
        </div>
      </div>
    </section>
  );
}