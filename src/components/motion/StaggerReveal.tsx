import { createContext, useContext, type CSSProperties, type ReactNode } from "react";
import { ANIMATION_MODE } from "../../motion/config";
import "../../motion/scroll-reveal.css";
import { staggerDelay, variantClass, type MotionVariant } from "../../motion/presets";
import { useInView } from "../../motion/useInView";

const StaggerContext = createContext(false);

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function StaggerReveal({ children, className, style }: StaggerRevealProps) {
  const { ref, inView } = useInView();
  const mode =
    ANIMATION_MODE === "legacy" ? "stagger--legacy" : "stagger--premium";

  return (
    <StaggerContext.Provider value={inView}>
      <div
        ref={ref}
        className={["stagger", mode, inView && "stagger--in", className]
          .filter(Boolean)
          .join(" ")}
        style={style}
      >
        {children}
      </div>
    </StaggerContext.Provider>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  variant?: MotionVariant;
  className?: string;
  style?: CSSProperties;
  index?: number;
};

export function StaggerItem({
  children,
  variant = "fadeUp",
  className,
  style,
  index = 0,
}: StaggerItemProps) {
  const inView = useContext(StaggerContext);
  const mode =
    ANIMATION_MODE === "legacy" ? "reveal--legacy" : "reveal--premium";

  return (
    <div
      className={[
        "stagger-item",
        "reveal",
        mode,
        variantClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          ...style,
          "--stagger-delay": inView ? `${index * staggerDelay}s` : "0s",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
