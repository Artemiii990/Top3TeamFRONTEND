import s from './ServicePrograms.module.css';

const PROGRAMS = [
  {
    label: 'Програма обслуговування Mac mini з проблемою відсутності живлення',
    href: '/support/mac-mini-2023-service-program-for-no-power-issue',
  },
  {
    label: 'Програма обслуговування iPhone 14 Plus у разі проблеми із задньою камерою',
    href: '/support/iphone-14-plus-service-program-for-rear-camera-issue',
  },
];

export default function ServicePrograms() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <h2 className={s.heading}>Програми обслуговування Apple</h2>

        <ul className={s.list}>
          {PROGRAMS.map(program => (
            <li key={program.href} className={s.item}>
              <a href={program.href} className={s.link}>
                {program.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/support/service-programs" className={s.viewAll}>
          Переглянути всі програми <span aria-hidden="true">›</span>
        </a>
      </div>
    </section>
  );
}