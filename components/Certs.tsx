import { certs } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Award, ExternalLink } from "lucide-react";

export function Certs() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & continuous learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.title}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors group"
            >
              <Award className="size-8 text-primary mb-4" />

              <h3 className="font-display font-semibold mb-1 leading-snug">
                {c.title}
              </h3>

              <div className="text-sm text-muted-foreground">{c.org}</div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Issued {c.year}</span>
                <a href={c.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-3.5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
