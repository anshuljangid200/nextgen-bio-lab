import type { TargetAndTransition, Transition } from "framer-motion";
import { ANIMATION_MODE } from "./config";

export type MotionVariant =
  | "fadeUp"
  | "fadeDown"
  | "scaleUp"
  | "slideLeft"
  | "slideRight"
  | "pop";

const premiumEase: Transition["ease"] = [0.16, 1, 0.3, 1];

export const viewport = {
  once: true,
  margin: "-80px",
  amount: 0.15,
} as const;

const premium: Record<
  MotionVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 56, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: premiumEase },
  },
  fadeDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease: premiumEase },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.88, y: 24 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.85, ease: premiumEase },
  },
  slideLeft: {
    initial: { opacity: 0, x: 48 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: premiumEase },
  },
  slideRight: {
    initial: { opacity: 0, x: -48 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: premiumEase },
  },
  pop: {
    initial: { opacity: 0, scale: 0.82, y: 32 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.34, 1.45, 0.64, 1] },
  },
};

const legacy: Record<
  MotionVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition; transition: Transition }
> = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  fadeDown: {
    initial: { opacity: 0, y: -12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: "easeOut" },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.45, ease: "easeOut" },
  },
  slideLeft: {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: "easeOut" },
  },
  slideRight: {
    initial: { opacity: 0, x: -16 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: "easeOut" },
  },
  pop: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function getMotionPreset(variant: MotionVariant = "fadeUp") {
  const set = ANIMATION_MODE === "legacy" ? legacy : premium;
  return set[variant];
}

export const staggerDelay = ANIMATION_MODE === "legacy" ? 0.08 : 0.14;
