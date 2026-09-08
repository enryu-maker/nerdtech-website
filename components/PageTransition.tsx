"use client";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

type Phase = "idle" | "start" | "open" | "hold" | "fade";
type TransitionState = {
  active: boolean;
  phase: Phase;
  x: number;
  y: number;
};

type Ctx = {
  start: (x: number, y: number, href: string) => void;
};

const PageTransitionContext = createContext<Ctx | null>(null);
export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error(
      "usePageTransition must be used inside <PageTransitionProvider>"
    );
  }
  return ctx;
}

const OPEN_MS = 600; // fill expanding from the tap point
const RING_MS = 750; // how long each ripple ring takes to travel out
const HOLD_MS = 150; // fully covered, new route loads underneath
const FADE_MS = 420; // reveal the new page

const EASE = "cubic-bezier(0.65,0,0.35,1)";
const RING_EASE = "cubic-bezier(0.16,0.85,0.35,1)";
const ACCENT = "#0CAFFF"; // brand accent

const RINGS = [
  { delayMs: 0, sizeFactor: 0.55, opacity: 0.85 },
  { delayMs: 90, sizeFactor: 0.85, opacity: 0.55 },
  { delayMs: 180, sizeFactor: 1.15, opacity: 0.3 },
];

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [state, setState] = useState<TransitionState>({
    active: false,
    phase: "idle",
    x: 0,
    y: 0,
  });
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const start = useCallback(
    (x: number, y: number, href: string) => {
      clearTimers();

      setState({ active: true, phase: "start", x, y });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setState((s) => ({ ...s, phase: "open" }));
        });
      });

      timers.current.push(
        setTimeout(() => {
          router.push(href);
          setState((s) => ({ ...s, phase: "hold" }));
          timers.current.push(
            setTimeout(() => {
              setState((s) => ({ ...s, phase: "fade" }));
              timers.current.push(
                setTimeout(() => {
                  setState({ active: false, phase: "idle", x: 0, y: 0 });
                }, FADE_MS)
              );
            }, HOLD_MS)
          );
        }, OPEN_MS)
      );
    },
    [router]
  );

  const { active, phase, x, y } = state;
  const expanded = phase !== "start";

  const maxRadius =
    typeof window !== "undefined"
      ? Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        ) * 1.15
      : 2000;

  const fillStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 9998,
    pointerEvents: "none",

    background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.95) 0%, ${ACCENT} 38%, #0791cc 100%)`,
    opacity: phase === "fade" ? 0 : 1,
    clipPath: expanded
      ? `circle(${maxRadius}px at ${x}px ${y}px)`
      : `circle(0px at ${x}px ${y}px)`,
    transition: expanded
      ? `clip-path ${OPEN_MS}ms ${EASE}, opacity ${FADE_MS}ms ease`
      : "none",
  };

  return (
    <PageTransitionContext.Provider value={{ start }}>
      {children}

      {active && (
        <>
          <div aria-hidden style={fillStyle} />

          {RINGS.map((ring, i) => {
            const diameter = maxRadius * 2 * ring.sizeFactor;
            const style: React.CSSProperties = {
              position: "fixed",
              zIndex: 9999,
              pointerEvents: "none",
              top: y,
              left: x,
              width: diameter,
              height: diameter,
              marginLeft: -diameter / 2,
              marginTop: -diameter / 2,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.75)",
              boxShadow: "0 0 30px 6px rgba(12,175,255,0.35)",
              transform: expanded ? "scale(1)" : "scale(0)",
              opacity: expanded ? 0 : ring.opacity,
              transition: expanded
                ? `transform ${RING_MS}ms ${RING_EASE} ${ring.delayMs}ms, opacity ${RING_MS}ms ${RING_EASE} ${ring.delayMs}ms`
                : "none",
            };
            return <div key={i} aria-hidden style={style} />;
          })}
        </>
      )}
    </PageTransitionContext.Provider>
  );
}