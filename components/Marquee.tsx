import { stack } from "@/lib/data";

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-6 bg-surface/40">
      <div className="flex animate-marquee whitespace-nowrap gap-16">
        {[...stack, ...stack].map((it, i) => (
          <span
            key={i}
            className="font-display text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            {it.name}
          </span>
        ))}
      </div>
    </div>
  );
}
