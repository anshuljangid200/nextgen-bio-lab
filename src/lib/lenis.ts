import Lenis from "lenis";

export const lenis = new Lenis({
  duration: 1.05,
  lerp: 0.09,
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1,
  infinite: false,
});

export function startLenisLoop() {
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
