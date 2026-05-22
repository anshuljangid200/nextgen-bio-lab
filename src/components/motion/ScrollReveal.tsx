import type { CSSProperties, ReactNode } from "react";
import { ANIMATION_MODE } from "../../motion/config";
import "../../motion/scroll-reveal.css";
import { variantClass, type MotionVariant } from "../../motion/presets";
import { useInView } from "../../motion/useInView";

type ScrollRevealProps = {
  children: ReactNode;
  variant?: MotionVariant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  style,
}: ScrollRevealProps) {
  const { ref, inView } = useInView();
  const mode =
    ANIMATION_MODE === "legacy" ? "reveal--legacy" : "reveal--premium";

  return (
    <div
      ref={ref}
      className={[
        "reveal",
        mode,
        variantClass[variant],
        inView && "reveal--in",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
