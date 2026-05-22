import Lenis from "lenis";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const lenis = new Lenis({
  duration: 1.05,
  lerp: 0.09,
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1,
  infinite: false,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)