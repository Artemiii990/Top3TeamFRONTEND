import s from './Hero.module.css';

function HeroBanner() {
  return (
    <section className={`${s.section} ${s.hero}`}>
      <div className={s.content}>
        <h1 className={s.title}>iPhone</h1>
        <p className={s.subtitle}>Зустрічайте найновішу лінійку iPhone</p> 

        <div className={s.actions}>
          <button className='btn btn-primary'>Детальніше</button>
        </div>
      </div>

      <div className={s.media}>
        <img src="/images/iphone.webp" alt='iPhone' />
        {/* <img src="/images/iphone.png" alt='iPhone' /> */}
      </div>
    </section>
  );
}

function TabletBanner() {
  return (
    <section className={`${s.section} ${s.ipad}`}>
      <div className={s.content}>
        <h2 className={s.title}>iPad air</h2>
        <p className={s.subtitle}>Відтепер з турбопотужністю M4.</p>

        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
      </div>

      <div className={s.media}>
        <img src="/images/ipad.png" alt="iPad" />
      </div>
    </section>
  );
}

function MacBanner() {
  return (
    <section className={`${s.section} ${s.mac}`}>
      <div className={s.content}>
        <h2 className={s.title}>MacBook Air</h2>
        <p className={s.subtitle}>Відтепер з турбопотужністю M5.</p>

        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
      </div>

      <div className={s.media}>
        <img src="/images/macbook.png" alt="MacBook" />
      </div>
    </section>
  );
}

function GridSection() {
  return (
    <section className={s.grid}>
      <div className={s.card}>
        <img src="/images/airpods.png" />
        <h3>AirPods Max 2</h3>
        <p className={s.subtitle}>Звучання. У ремастерингу.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
      </div>

      <div className={s.card}>        
        <h3>MacBook Pro</h3>
        <p className={s.subtitle}>Тепер із M5, M5 Pro або M5 Max.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/macbook-pro.png" />
      </div>

      <div className={s.card}>        
        <h3>AirPods Pro 3</h3>
        <p className={s.subtitle}>Неймовірне активне поглинання шуму.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/airpods-pro.png" />
      </div>

      <div className={s.card}>
        <h3>Watch Ultra 3</h3>
        <p className={s.subtitle}>Ручний звір.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/watch.png" />
      </div>

      <div className={s.card}>
        <h3>iPad Pro</h3>
        <p className={s.subtitle}>Розширена продуктивність ШІ та можливості, що змінюють правила гри.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/ipad-pro.png" />
      </div>

      <div className={s.card}>
        <h3>Watch Series 11</h3>
        <p className={s.subtitle}>Чудовий спосіб стежити за своїм здоров'ям.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/watch-series.png" />
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <HeroBanner />
      <TabletBanner />
      <MacBanner />
      <GridSection />
    </>
  );
}
