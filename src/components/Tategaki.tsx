import React, { useRef } from "react";
import { useHorizontalScroll } from "../useHorizontalScroll";

const TATEGAKI_STYLE = {
  writingMode: "vertical-rl",
  textAlign: "left",
  width: "100%",
  overflowX: "auto",
} as const;
const TATEGAKI_WRAPPER_STYLE = {
  width: "100%",
  height: "480px",
  textAlign: "right",
} as const;

export function Tategaki({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useHorizontalScroll(ref);
  return (
    <div style={TATEGAKI_WRAPPER_STYLE} className={className}>
      <div ref={ref} style={TATEGAKI_STYLE}>
        {children}
      </div>
    </div>
  );
}
