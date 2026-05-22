# Site animations

## Premium mode (default)
Scroll par fade-up, blur, pop, stagger — corporate sites (Adani-style) jaisa feel.

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
