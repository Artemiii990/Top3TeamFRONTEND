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
        <img src="/images/ipad.jpg" alt="iPad" />
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
        <img src="/images/macbook.jpg" alt="MacBook" />
      </div>
    </section>
  );
}

function GridSection() {
  return (
    <section className={s.grid}>
      <div className={s.card}>
        <img src="/images/airpods.jpg" />
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
        <img src="/images/macbook.jpg" />
      </div>

      <div className={s.card}>        
        <h3>AirPods Pro 3</h3>
        <p className={s.subtitle}>Неймовірне активне поглинання шуму.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/airpods.jpg" />
      </div>

      <div className={s.card}>
        <h3>Watch Ultra 3</h3>
        <p className={s.subtitle}>Ручний звір.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/watch.jpg" />
      </div>

      <div className={s.card}>
        <h3>iPad Pro</h3>
        <p className={s.subtitle}>Розширена продуктивність ШІ та можливості, що змінюють правила гри.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/ipad.jpg" />
      </div>

      <div className={s.card}>
        <h3>Watch Series 11</h3>
        <p className={s.subtitle}>Чудовий спосіб стежити за своїм здоров'ям.</p>
        <div className={s.actions}>
          <button className="btn btn-primary">Детальніше</button>
        </div>
        <img src="/images/watch.jpg" />
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

// export default function Hero() {
//   return (
    // <section className={s.hero}>
    //   <h1 className={s.headline}>
    //     <span className={s.l1}>iPhone</span>
    //     <div className={s.price}>Зустрічайте найновішу лінійку iPhone</div>
    //   </h1>
    //   <div className={s.meta}>
        {/* <div className={s.price}>
          FROM <strong>$1,099</strong> · AVAILABLE 19.09
        </div> */}
    //     <div className={s.ctas}>
    //       <button className="btn btn-primary">Детальніше</button>
    //     </div>
    //   </div>
    // </section>
//   );
// }
