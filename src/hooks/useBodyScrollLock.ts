import { useEffect } from "react";
import { lenis } from "../lib/lenis";

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    lenis.stop();

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    return () => {
      lenis.start();
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}
