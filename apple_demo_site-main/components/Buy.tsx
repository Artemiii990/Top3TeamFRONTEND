// 'use client';

// import { useEffect, useRef } from 'react';
// import s from './Buy.module.css';

// export default function Buy() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll-scrubbed playback: as the user scrolls through this section the
  // iPhone slides in from the left edge. By the time the section's bottom
  // hits the viewport bottom, the video is at its final frame.
//   useEffect(() => {
//     const section = sectionRef.current;
//     const video = videoRef.current;
//     if (!section || !video) return;

//     video.pause();

//     let rafPending = false;
//     let knownDuration = 0;

//     const applyScrub = () => {
//       rafPending = false;
//       const dur = knownDuration || video.duration;
//       if (!dur || !isFinite(dur)) return;

//       const rect = section.getBoundingClientRect();
//       const vh = window.innerHeight;
//       // Scrub starts when the section's top edge enters the viewport from
//       // below (rect.top === vh) and finishes when the sticky pin engages
//       // (rect.top === 0). After that the video sits on its end frame while
//       // the user reads the price + CTAs.
//       const progress = Math.min(1, Math.max(0, (vh - rect.top) / vh));
//       const target = progress * dur;

//       if (Math.abs(video.currentTime - target) > 0.04) {
//         try {
//           video.currentTime = target;
//         } catch {
//           /* seek may throw before metadata is ready */
//         }
//       }
//     };

//     const onScroll = () => {
//       if (!rafPending) {
//         rafPending = true;
//         requestAnimationFrame(applyScrub);
//       }
//     };

//     const onMetadata = () => {
//       knownDuration = video.duration;
//       applyScrub();
//     };

//     video.addEventListener('loadedmetadata', onMetadata);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onScroll, { passive: true });

//     return () => {
//       video.removeEventListener('loadedmetadata', onMetadata);
//       window.removeEventListener('scroll', onScroll);
//       window.removeEventListener('resize', onScroll);
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className={s.buy} aria-label="Pre-order">
//       <div className={s.pin}>
//         <div className={s.bg}>
//           <video
//             ref={videoRef}
//             muted
//             playsInline
//             preload="auto"
//             poster="/media/buy-poster.jpg?v=2"
//             aria-hidden="true"
//             disablePictureInPicture
//             disableRemotePlayback
//           >
//             <source src="/media/buy-loop.mp4?v=2" type="video/mp4" />
//           </video>
//         </div>
//         <div className={s.content}>
//           <span className={s.price}>$1,099</span>
//           <div className={s.finance}>
//             OR $45.79/MO. FOR 24 MONTHS · 0% APR
//           </div>
//           <div className={s.ctas}>
//             <button className="btn btn-primary">Pre-order →</button>
//             <button className="btn btn-ghost">Configure →</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
