import type { RefObject } from "react";
import { useLayoutEffect } from "react";

export function useHorizontalScroll(ref: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    const scrollEl = ref.current!;
    function wheelHandler(ev: WheelEvent): void {
      const { deltaX, deltaY, deltaZ, deltaMode } = ev;
      if (deltaX === 0 && deltaZ === 0 && deltaY !== 0) {
        ev.preventDefault();
        scrollEl.scroll({
          left: scrollEl.scrollLeft - deltaY,
          behavior: "auto",
        });
      }
    }
    scrollEl.addEventListener("wheel", wheelHandler, { passive: false });
    return () => scrollEl.removeEventListener("wheel", wheelHandler);
  }, [ref]);
}
