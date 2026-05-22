import { motion, type HTMLMotionProps } from "framer-motion";
import { getMotionPreset, viewport, type MotionVariant } from "../../motion/presets";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  variant?: MotionVariant;
  delay?: number;
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  ...props
}: ScrollRevealProps) {
  const preset = getMotionPreset(variant);

  return (
    <motion.div
      initial={preset.initial}
      whileInView={preset.animate}
      viewport={viewport}
      transition={{ ...preset.transition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
