import { projects } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function Work() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Products that earned their keep."
          sub="A handful of projects I've designed, built, and shipped — picked because they solved real problems for real people."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl glass p-8 overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div
                className={`absolute -top-24 -right-24 size-72 rounded-full bg-linear-to-br ${p.accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity`}
              />

              <div className="relative">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    <Sparkles className="size-3 text-primary" /> {p.tag}
                  </span>
                  <span className="font-mono">{p.year}</span>
                </div>

                <h3 className="font-display text-3xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {p.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {p.blurb}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 border border-white/5 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="text-xs text-muted-foreground">Outcome</div>
                    <div className="font-display font-semibold text-primary">
                      {p.metric}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Case study <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
