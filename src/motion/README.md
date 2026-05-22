# Site animations

## Premium mode (default)
Scroll par fast fade / pop / stagger (CSS + GPU). **Har baar repeat** — up/down scroll par dubara animate.

## Performance
Scroll sections Framer `whileInView` ki jagah lightweight CSS use karte hain (kam lag).

## Pehle wala simple animation wapas lana
`src/motion/config.ts` mein change karo:

```ts
export const ANIMATION_MODE = "legacy";
```

Ya `.env` file:
```
VITE_ANIMATION_MODE=legacy
```

## Files
- `config.ts` — mode switch
- `presets.ts` — timing, easing, distance
- `ScrollReveal.tsx` — single block
- `StaggerReveal.tsx` — list / cards stagger
