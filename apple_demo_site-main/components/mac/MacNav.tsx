import s from './MacNav.module.css';
import MenuLink from './MenuLink';

export default function MacNav() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h1>Mac</h1>

        <div className={s.columns}>
          <div className={s.left}>
            <p>Дізнатися про Mac</p>

            <MenuLink href="/mac">Переглянути всі моделі Mac</MenuLink>
            <MenuLink href="/mac/macbook-neo">MacBook Neo</MenuLink>
            <MenuLink href="/mac/macbook-air">MacBook Air</MenuLink>
            <MenuLink href="/mac/macbook-pro">MacBook Pro</MenuLink>
            <MenuLink href="/mac/imac">iMac</MenuLink>
            <MenuLink href="/mac/mac-mini">Mac mini</MenuLink>
            <MenuLink href="/mac/mac-studio">Mac Studio</MenuLink>
            <MenuLink href="/mac/displays">Дисплеї</MenuLink>

            <MenuLink className={s.small} href="/mac/compare">
              Порівняння моделей Mac
            </MenuLink>
          </div>

          <div className={s.right}>
            <p>Більше від Mac</p>

            <MenuLink href="/support/mac">Підтримка Mac</MenuLink>
          </div>
        </div>
      </div>
    </section>
  );
}