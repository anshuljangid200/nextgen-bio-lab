import type { TargetAndTransition, Transition } from "framer-motion";
import { ANIMATION_MODE } from "./config";

export type MotionVariant =
  | "fadeUp"
  | "fadeDown"
  | "scaleUp"
  | "slideLeft"
  | "slideRight"
  | "pop";

export const variantClass: Record<MotionVariant, string> = {
  fadeUp: "reveal--fade-up",
  fadeDown: "reveal--fade-down",
  scaleUp: "reveal--scale-up",
  slideLeft: "reveal--slide-left",
  slideRight: "reveal--slide-right",
  pop: "reveal--pop",
};

/** Framer-only (hover / modal) — scroll uses CSS in ScrollReveal */
export const viewport = {
  once: false,
  margin: "-6% 0px -6% 0px",
  amount: 0.12,
} as const;

const snapEase: Transition["ease"] = [0.22, 1, 0.36, 1];

const premium: Record<
  MotionVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.42, ease: snapEase },
  },
  fadeDown: {
    initial: { opacity: 0, y: -14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: snapEase },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.94, y: 12 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.42, ease: snapEase },
  },
  slideLeft: {
    initial: { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.42, ease: snapEase },
  },
  slideRight: {
    initial: { opacity: 0, x: -24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.42, ease: snapEase },
  },
  pop: {
    initial: { opacity: 0, scale: 0.92, y: 14 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.38, ease: [0.34, 1.15, 0.64, 1] },
  },
};

const legacy: Record<
  MotionVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.32, ease: "easeOut" },
  },
  fadeDown: {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.32, ease: "easeOut" },
  },
  slideLeft: {
    initial: { opacity: 0, x: 12 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.32, ease: "easeOut" },
  },
  slideRight: {
    initial: { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.32, ease: "easeOut" },
  },
  pop: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export function getMotionPreset(variant: MotionVariant = "fadeUp") {
  const set = ANIMATION_MODE === "legacy" ? legacy : premium;
  return set[variant];
}

export const staggerDelay = ANIMATION_MODE === "legacy" ? 0.05 : 0.06;
