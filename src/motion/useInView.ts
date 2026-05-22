import { useEffect, useRef, useState } from "react";

const defaultRootMargin = "0px 0px -8% 0px";
const defaultThreshold = 0.1;

export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: defaultRootMargin, threshold: defaultThreshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
