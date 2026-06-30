'use client';

import { useState } from 'react';
import s from './Productshowcase.module.css';

type Model = {
  id: string;
  name: string;
  tagline: string;
  tint: string;
  onMedia: string;
  moreHref: string;
};

const MODELS: Model[] = [
  {
    id: 'max',
    name: 'AirPods Max 2',
    tagline: 'Нові розумні функції. Ще захопливіший звук.',
    tint: 'linear-gradient(155deg, #cdb6e0 0%, #ddd3c4 45%, #6b6b6d 100%)',
    onMedia: '#1d1d1f',
    moreHref: '/airpods/max',
  },
  {
    id: 'pro',
    name: 'AirPods Pro 3',
    tagline: 'Неймовірне активне поглинання шуму.',
    tint: 'linear-gradient(155deg, #f4f4f6 0%, #d9dade 55%, #aab0b8 100%)',
    onMedia: '#1d1d1f',
    moreHref: '/airpods/pro',
  },
  {
    id: '4',
    name: 'AirPods 4',
    tagline: 'Стрімка еволюція звучання та комфорту.',
    tint: 'linear-gradient(155deg, #e7e1ef 0%, #cfd6ea 55%, #9fb3d6 100%)',
    onMedia: '#1d1d1f',
    moreHref: '/airpods/4',
  },
];

export default function ProductShowcase() {
  const [playing, setPlaying] = useState<Record<string, boolean>>(
    () => Object.fromEntries(MODELS.map((m) => [m.id, true]))
  );

  const toggle = (id: string) =>
    setPlaying((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className={s.wrapper}>
      {MODELS.map((model) => {
        const isPlaying = playing[model.id];

        return (
          <section key={model.id} className={s.section}>
            <div className={s.card}>
              <div className={s.media} aria-hidden="true">
                <div
                  className={s.mediaGradient}
                  style={{
                    background: model.tint,
                    animationPlayState: isPlaying ? 'running' : 'paused',
                  }}
                />
              </div>

              <button
                type="button"
                className={s.toggleButton}
                aria-label={
                  isPlaying
                    ? `Призупинити відео: ${model.name}`
                    : `Відтворити відео: ${model.name}`
                }
                onClick={() => toggle(model.id)}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <rect
                      x="3"
                      y="2"
                      width="3.4"
                      height="12"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="9.6"
                      y="2"
                      width="3.4"
                      height="12"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M4 2.5v11l10-5.5-10-5.5z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>

              <div
                className={s.content}
                style={
                  {
                    '--on-media': model.onMedia,
                  } as React.CSSProperties
                }
              >
                <h2 className={s.modelName}>{model.name}</h2>

                <p className={s.tagline}>{model.tagline}</p>

                <div className={s.ctaRow}>
                  <a href={model.moreHref} className={s.btnPrimary}>
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}