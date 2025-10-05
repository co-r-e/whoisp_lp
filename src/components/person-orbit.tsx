"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { getAssetPath } from "@/lib/site-config";

type OrbitNode = {
  src: string;
  alt: string;
  size: number;
  top: string;
  left: string;
};

const RINGS_INSETS = ["0px", "32px", "68px", "108px", "150px"];
const ORBIT_DURATION_MS = 120_000;

type OrbitVariables = CSSProperties & {
  "--orbit-angle"?: string;
  "--orbit-angle-inverse"?: string;
};

const ORBIT_NODES: OrbitNode[] = [
  {
    src: "https://i.pravatar.cc/160?img=12",
    alt: "Investigator portrait",
    size: 72,
    top: "3%",
    left: "53%",
  },
  {
    src: "https://i.pravatar.cc/160?img=7",
    alt: "Research analyst portrait",
    size: 60,
    top: "18%",
    left: "88%",
  },
  {
    src: "https://i.pravatar.cc/160?img=32",
    alt: "Security lead portrait",
    size: 64,
    top: "45%",
    left: "96%",
  },
  {
    src: "https://i.pravatar.cc/160?img=5",
    alt: "Compliance officer portrait",
    size: 56,
    top: "78%",
    left: "87%",
  },
  {
    src: "https://i.pravatar.cc/160?img=44",
    alt: "Policy expert portrait",
    size: 62,
    top: "95%",
    left: "55%",
  },
  {
    src: "https://i.pravatar.cc/160?img=14",
    alt: "Data scientist portrait",
    size: 58,
    top: "82%",
    left: "18%",
  },
  {
    src: "https://i.pravatar.cc/160?img=47",
    alt: "Due diligence specialist portrait",
    size: 64,
    top: "52%",
    left: "5%",
  },
  {
    src: "https://i.pravatar.cc/160?img=26",
    alt: "Risk manager portrait",
    size: 56,
    top: "20%",
    left: "13%",
  },
  {
    src: "https://i.pravatar.cc/160?img=59",
    alt: "Finance auditor portrait",
    size: 48,
    top: "32%",
    left: "65%",
  },
  {
    src: "https://i.pravatar.cc/160?img=18",
    alt: "Field researcher portrait",
    size: 52,
    top: "38%",
    left: "35%",
  },
  {
    src: "https://i.pravatar.cc/160?img=61",
    alt: "Background checker portrait",
    size: 46,
    top: "56%",
    left: "74%",
  },
  {
    src: "https://i.pravatar.cc/160?img=9",
    alt: "Insights lead portrait",
    size: 44,
    top: "63%",
    left: "36%",
  },
  {
    src: "https://i.pravatar.cc/160?img=28",
    alt: "Policy reviewer portrait",
    size: 50,
    top: "70%",
    left: "62%",
  },
  {
    src: "https://i.pravatar.cc/160?img=51",
    alt: "Legal advisor portrait",
    size: 46,
    top: "47%",
    left: "24%",
  },
  {
    src: "https://i.pravatar.cc/160?img=2",
    alt: "Investigations partner portrait",
    size: 44,
    top: "26%",
    left: "48%",
  },
];

export function PersonOrbit({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frameId = 0;
    const duration = ORBIT_DURATION_MS;
    const start = performance.now();

    const tick = (now: number) => {
      if (!root) return;
      const elapsed = (now - start) % duration;
      const angle = (elapsed / duration) * 360;
      root.style.setProperty("--orbit-angle", `${angle}deg`);
      root.style.setProperty("--orbit-angle-inverse", `${-angle}deg`);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const customProperties: OrbitVariables = {
    "--orbit-angle": "0deg",
    "--orbit-angle-inverse": "0deg",
  };

  const containerClassName = [
    "relative mx-auto aspect-square w-full max-w-[620px]",
    "rounded-full border border-neutral-200/60 bg-gradient-to-br from-white via-white to-neutral-50",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={rootRef} className={containerClassName} style={customProperties}>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(15,15,15,0.04),_transparent_55%)]" />
      {RINGS_INSETS.map((inset) => (
        <div
          key={inset}
          className="pointer-events-none absolute rounded-full border border-neutral-200/70"
          style={{ inset }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{ transform: "rotate(var(--orbit-angle))" }}
      >
        {ORBIT_NODES.map((node, index) => (
          <div
            key={`${node.src}-${index}`}
            className="absolute"
            style={{
              top: node.top,
              left: node.left,
              width: `${node.size}px`,
              height: `${node.size}px`,
              transform:
                "translate(-50%, -50%) rotate(var(--orbit-angle-inverse))",
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-white bg-neutral-200 shadow-[0_22px_60px_rgba(15,15,15,0.16)]">
              <Image
                src={node.src}
                alt={node.alt}
                width={node.size}
                height={node.size}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 128px, 64px"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-[0_18px_55px_rgba(15,15,15,0.12)]">
        <Image
          src={getAssetPath("/favicon.svg")}
          alt="WhoisP mark"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-100/60 via-white/40 to-transparent blur-2xl -z-10" />
    </div>
  );
}

export default PersonOrbit;
