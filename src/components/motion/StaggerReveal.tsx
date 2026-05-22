import { motion } from "framer-motion";
import { getMotionPreset, staggerDelay, viewport, type MotionVariant } from "../../motion/presets";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
};

export function StaggerReveal({
  children,
  className,
  style,
  stagger = staggerDelay,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  variant?: MotionVariant;
  className?: string;
  style?: React.CSSProperties;
};

export function StaggerItem({
  children,
  variant = "fadeUp",
  className,
  style,
}: StaggerItemProps) {
  const preset = getMotionPreset(variant);

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: preset.initial,
        visible: {
          ...preset.animate,
          transition: preset.transition,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
