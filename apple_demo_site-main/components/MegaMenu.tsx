'use client';

import s from './MegaMenu.module.css';
import { MENU_DATA } from './menuData';

type MenuKey = keyof typeof MENU_DATA;

type Props = {
  activeMenu: string | null;
  onClose: () => void;
};

export default function MegaMenu({
  activeMenu,
  onClose,
}: Props) {
  if (!activeMenu) return null;

  const menu =
    MENU_DATA[activeMenu as MenuKey];

  if (!menu) return null;

  return (
    <>
      <div
        className={s.backdrop}
        onMouseEnter={onClose}
      />

      <div
        className={s.menu}
        onMouseLeave={onClose}
      >
        <div className={s.inner}>
          <div className={s.column}>
            <div className={s.label}>
              {menu.title}
            </div>

            {menu.featured.map(item => (
              <a
                key={item}
                href="#"
                className={s.featured}
              >
                {item}
              </a>
            ))}
          </div>

          <div className={s.column}>
            <div className={s.label}>
              Досліджуйте
            </div>

            {menu.secondary.map(item => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>

          <div className={s.column}>
            <div className={s.label}>
              Додатково
            </div>

            {menu.support.map(item => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}