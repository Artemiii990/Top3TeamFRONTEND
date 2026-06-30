'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Showcase.module.css';

type Scene = {
  id: string;
  // gradient stands in for the real clip's poster/first-frame art
  tint: string;
  badge: string; // e.g. "Apple Music", "Apple Arcade", "Apple TV"
  title?: string; // e.g. show/artist name shown next to the badge
};

const SCENES: Scene[] = [
  {
    id: 'music',
    tint: 'radial-gradient(circle at 30% 70%, #6a3a1f 0%, #1a0f08 60%, #050302 100%)',
    badge: 'Music',
    title: 'Hozier',
  },
  {
    id: 'arcade',
    tint: 'linear-gradient(160deg, #f5b94d 0%, #e08a2e 55%, #b85a1a 100%)',
    badge: 'Arcade',
    title: 'WHAT THE CLASH?',
  },
  {
    id: 'tv',
    tint: 'linear-gradient(155deg, #3a2c1f 0%, #1c140d 60%, #0a0705 100%)',
    badge: 'TV',
    title: 'The Studio',
  },
];

const SCENE_DURATION = 6000;

const SERVICES: {
  id: string;
  wordmark: string;
  description: string;
  href: string;
  ctaLabel: string;
}[] = [
  {
    id: 'tv',
    wordmark: 'tv',
    description:
      'Першокласні фільми й серіали Apple Originals. Онлайн і на будь-якому екрані.',
    href: 'https://tv.apple.com/ua',
    ctaLabel: 'Отримати Apple TV',
  },
  {
    id: 'music',
    wordmark: 'Music',
    description: 'Ваша музика. Неймовірно висока якість аудіо. І ніякої реклами.',
    href: 'https://music.apple.com/ua/new',
    ctaLabel: 'Отримати Apple Music',
  },
  {
    id: 'arcade',
    wordmark: 'Arcade',
    description: 'Найкраща колекція мобільних ігор для кожного геймера.',
    href: 'https://apps.apple.com/ua/arcade',
    ctaLabel: 'Отримати Apple Arcade',
  },
];

function AppleGlyph() {
  return (
    <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M13.0729 17.6825A3.61 3.61 0 0 0 11.3 20.7235c.0331 2.5022 2.2092 3.4338 2.2999 3.4641-.0376.107-.3641 1.1777-1.1656 2.2898-.7008.9683-1.4275 1.9376-2.5755 1.9579-1.1389.0224-1.5023-.6705-2.7935-.6705-1.2902 0-1.6868.6481-2.7644.6929-1.1117.0418-1.9477-1.0454-2.6557-2.0102C.5067 24.5096-.6045 20.8911.7986 18.4452c.7038-1.2231 1.9619-1.9954 3.3266-2.0177 1.0884-.0223 2.1209.7345 2.7905.7345.6695 0 1.9229-.9089 3.2418-.7763.5527.0227 2.1015.2237 3.0992 1.6856-.0816.0508-1.8531 1.0848-1.838 3.2113" />
      <path
        transform="translate(0 1.8)"
        d="M9.9301 13.4151c.5921-.7166 1.0014-1.7184.8856-2.7167-.8536.0359-1.9009.5703-2.5187 1.2814-.5491.6324-1.0455 1.6539-.9148 2.6308.9536.0703 1.9268-.4707 2.5479-1.1955"
      />
    </svg>
  );
}

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance scenes while playing; pausing freezes on the current one.
  useEffect(() => {
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveIndex(i => (i + 1) % SCENES.length);
    }, SCENE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing]);

  const activeScene = SCENES[activeIndex];

  return (
    <section className={s.section}>
      <h2 className={s.heading}>Дивіться, співайте, грайте. На великому екрані.</h2>

      <div className={s.player}>
        <div className={`${s.frame} ${!playing ? s.framePaused : ''}`}>
          {SCENES.map((scene, i) => (
            <div
              key={scene.id}
              className={`${s.scene} ${i === activeIndex ? s.sceneActive : ''}`}
              aria-hidden={i !== activeIndex}
            >
              <div className={s.sceneBg} style={{ background: scene.tint }} />
            </div>
          ))}

          <div className={s.sceneCaption}>
            <span className={s.glyph}><AppleGlyph /></span>
            <span className={s.title}>{activeScene.badge}</span>
            {activeScene.title && (
              <>
                <span className={s.divider} aria-hidden="true" />
                <span className={s.title}>{activeScene.title}</span>
              </>
            )}
          </div>

          <button
            type="button"
            className={s.toggle}
            aria-label={playing ? 'Призупинити відео' : 'Відтворити відео'}
            aria-pressed={playing}
            onClick={() => setPlaying(p => !p)}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 4.5v15l13-7.5-13-7.5z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={s.services}>
        {SERVICES.map(service => (
          <div key={service.id} className={s.service}>
            <div className={s.serviceLogoRow}>
              <span className={s.glyph}><AppleGlyph /></span>
              <span className={s.serviceWordmark}>{service.wordmark}</span>
            </div>
            <p className={s.serviceText}>{service.description}</p>
            <a
              href={service.href}
              className={s.serviceBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {service.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}