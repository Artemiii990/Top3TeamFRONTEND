import s from './SupportPromo.module.css';

const APPLE_SUPPORT_APP_URL =
  'https://apps.apple.com/ua/app/%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%BF%D1%96%D0%B4%D1%82%D1%80%D0%B8%D0%BC%D0%BA%D0%B8-apple/id1130498044?l=uk';

export default function SupportPromo() {
  return (
    <section className={s.section}>
      {/* Apple Support app card */}
      <div className={s.appCard}>
        <div className={s.appCardText}>
          <h2 className={s.cardHeading}>Програма «Підтримка Apple»</h2>
          <p className={s.cardBody}>
            Отримайте допомогу з усіма своїми продуктами Apple в одній програмі або зверніться до фахівця.
          </p>
          <a
            href={APPLE_SUPPORT_APP_URL}
            className={s.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Завантаження <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Placeholder for the app's promo artwork — swap for the real image later */}
        <div className={s.appImageArea} aria-hidden="true">
          <div className={s.appIcon}>
            <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
              <path d="M138.7 100.2c-2.4 5.2-3.6 7.5-6.7 12-4.3 6.3-10.4 14.1-17.9 14.1-6.7 0-8.4-4.4-17.5-4.3-9 0-10.9 4.4-17.6 4.3-7.5-.1-13.3-7.1-17.6-13.4-12-17.7-13.3-38.6-5.9-49.6 5.3-7.9 13.6-12.5 21.4-12.5 8 0 13 4.4 19.6 4.4 6.4 0 10.3-4.4 19.6-4.4 7 0 14.4 3.8 19.7 10.4-17.3 9.5-14.5 34.2 2.9 39Z" />
              <path d="M104.3 47.5c4.3-5.2 7.6-12.6 6.4-20.2-6.5.4-14.1 4.5-18.6 9.9-4.1 4.9-7.8 12.4-6.4 19.5 7.1.2 14.4-4 18.6-9.2Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Counterfeit parts warning card */}
      <div className={s.warningCard}>
        <h2 className={s.warningHeading}>Остерігайтеся підроблених запасних частин</h2>
        <p className={s.warningBody}>
          Деякі підроблені та сторонні адаптери живлення й акумулятори можуть мати неправильну
          конструкцію та призводити до проблем із безпекою. Щоб гарантовано отримати оригінальний
          акумулятор Apple під час заміни, рекомендуємо відвідати{' '}
          <a href="/support/locate">авторизованого постачальника послуг Apple</a>. Якщо вам потрібен
          адаптер на заміну, щоб заряджати пристрій Apple, рекомендуємо придбати адаптер живлення Apple.
        </p>
        <p className={s.warningBody}>
          Крім того, неоригінальні дисплеї на заміну можуть мати погіршену якість зображення та не
          працювати належним чином. Ремонти екрана, сертифіковані компанією Apple, виконують перевірені
          фахівці, які використовують оригінальні запасні частини Apple.
        </p>
      </div>
    </section>
  );
}