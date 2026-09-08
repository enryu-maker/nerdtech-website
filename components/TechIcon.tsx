import { TECH_ICON_PATHS, type TechIconKey } from "@/lib/techStack";

type TechIconProps = {
  icon: TechIconKey;
  color: string;
  className?: string;
};

export default function TechIcon({ icon, color, className }: TechIconProps) {
  const hex = `#${color}`;


  const path = TECH_ICON_PATHS[icon] ?? (icon === "reactnative" ? TECH_ICON_PATHS.react : undefined);

  if (path) {
    return (
      <svg viewBox="0 0 24 24" fill={hex} className={className} aria-hidden="true">
        <path d={path} />
      </svg>
    );
  }

  if (icon === "java") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M8.5 15.2c-1.1.55-1.1 1.2 0 1.75 1.8.9 6.2.9 8 0 1.1-.55 1.1-1.2 0-1.75"
          stroke={hex}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9.3 12.6c-.75.4-.75.95 0 1.35 1.35.7 4.1.7 5.4 0 .75-.4.75-.95 0-1.35"
          stroke={hex}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M10.5 3.5c1.2.9 1.2 1.9 0 2.9-1.7 1.4-1.7 2.7 0 4.1"
          stroke={hex}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9 10.7c-2.6.3-4.4 1-4.4 1.85 0 1.12 3.35 2.03 7.4 2.03s7.4-.91 7.4-2.03c0-.85-1.8-1.55-4.4-1.85"
          stroke={hex}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "objectivec") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" stroke={hex} strokeWidth="1.4" />
        <text
          x="12"
          y="13.2"
          textAnchor="middle"
          fontSize="5.6"
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
          fill={hex}
        >
          OBJ-C
        </text>
      </svg>
    );
  }

  return null;
}