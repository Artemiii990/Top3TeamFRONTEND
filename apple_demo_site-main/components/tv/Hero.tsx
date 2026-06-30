import s from './Hero.module.css';

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.logoRow}>
        <span className={s.logo} aria-hidden="true">
          <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0729 17.6825A3.61 3.61 0 0 0 11.3 20.7235c.0331 2.5022 2.2092 3.4338 2.2999 3.4641-.0376.107-.3641 1.1777-1.1656 2.2898-.7008.9683-1.4275 1.9376-2.5755 1.9579-1.1389.0224-1.5023-.6705-2.7935-.6705-1.2902 0-1.6868.6481-2.7644.6929-1.1117.0418-1.9477-1.0454-2.6557-2.0102C.5067 24.5096-.6045 20.8911.7986 18.4452c.7038-1.2231 1.9619-1.9954 3.3266-2.0177 1.0884-.0223 2.1209.7345 2.7905.7345.6695 0 1.9229-.9089 3.2418-.7763.5527.0227 2.1015.2237 3.0992 1.6856-.0816.0508-1.8531 1.0848-1.838 3.2113" />
            <path
              transform="translate(0 1.8)"
              d="M9.9301 13.4151c.5921-.7166 1.0014-1.7184.8856-2.7167-.8536.0359-1.9009.5703-2.5187 1.2814-.5491.6324-1.0455 1.6539-.9148 2.6308.9536.0703 1.9268-.4707 2.5479-1.1955"
            />
          </svg>
        </span>
        <span className={s.wordmark}>
          tv<span>4K</span>
        </span>
      </div>

      <h1 className={s.headline}>
        Найкраще від Apple. Кінематографічно в усіх сенсах.
      </h1>

      <div className={s.ctaRow}>
        <a href="/buy?category=tv" className={s.btnPrimary}>Купити</a>
        <a href="/apple-tv-4k/specs" className={s.btnLink}>
          Докладніше <span aria-hidden="true">›</span>
        </a>
      </div>

      <div className={s.stage}>
        <div className={s.stageImage} aria-hidden="true">
          <span className={s.deviceMark}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2 1 21h22L12 2z" opacity="0" />
              <path d="M16.5 12c0-2.5-2-4.5-4.5-4.5S7.5 9.5 7.5 12s2 4.5 4.5 4.5 4.5-2 4.5-4.5z" opacity="0" />
              <path d="M12 4.2c4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8S4.2 16.3 4.2 12 7.7 4.2 12 4.2zm0-1.8C6.6 2.4 2.4 6.6 2.4 12S6.6 21.6 12 21.6 21.6 17.4 21.6 12 17.4 2.4 12 2.4z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}