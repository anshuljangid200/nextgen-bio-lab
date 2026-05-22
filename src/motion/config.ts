/**
 * Animation mode — revert ke liye 'legacy' kar do (pehle jaisa simple).
 * Premium = Adani-style scroll reveal (fade, pop, stagger).
 */
export type AnimationMode = "premium" | "legacy";

export const ANIMATION_MODE: AnimationMode =
  (import.meta.env.VITE_ANIMATION_MODE as AnimationMode) || "premium";
