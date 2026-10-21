import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("fill-current", className)}
      aria-hidden="true"
    >
      <path d="M4 27 L16 35 L7 33 Z" />
      <path d="M4 43 L16 35 L7 38 Z" />
      <ellipse cx="34" cy="36" rx="18" ry="10" />
      <ellipse cx="50" cy="33" rx="9" ry="7" />
      <path d="M28 28 L35 11 L42 28 Z" />
      <path d="M34 43 L48 55 L41 44 Z" />
      <circle cx="53" cy="31" r="1.5" className="fill-background" />
    </svg>
  );
}
