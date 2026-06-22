'use client';

import s from './MegaMenu.module.css';
import { MENU_DATA } from './menuData';

type MenuKey = keyof typeof MENU_DATA;

type Props = {
  activeMenu: string | null;
  onClose: () => void;
  onKeepOpen: () => void;
};

export default function MegaMenu({
  activeMenu,
  onClose,
  onKeepOpen,
}: Props) {
  if (!activeMenu) return null;

  const menu = MENU_DATA[activeMenu as MenuKey];

  if (!menu) return null;

  return (
    <>
      <div className={s.backdrop} onMouseEnter={onClose} />

      <div
        className={s.menu}
        onMouseEnter={onKeepOpen}
        onMouseLeave={onClose}
      >
        <div className={s.inner}>
          {/* Column 1: title + bold featured links + compare link */}
          <div className={s.column}>
            <div className={s.label}>{menu.title}</div>

            {menu.featured.map((item, i) => (
              <a
                key={item}
                href="#"
                className={s.featured}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item}
              </a>
            ))}

            {menu.compareLink && (
              <a href="#" className={s.compare}>
                {menu.compareLink}
              </a>
            )}
          </div>

          {/* Column 2: secondary title + smaller links */}
          <div className={s.column}>
            <div className={s.label}>{menu.moreTitle}</div>

            {menu.moreLinks.map(item => (
              <a key={item} href="#" className={s.secondary}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}