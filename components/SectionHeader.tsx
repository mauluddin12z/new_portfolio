type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
};

export function SectionHeader({ eyebrow, title, sub }: Props) {
  return (
    <div className="max-w-3xl mb-14">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-4">
        <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
      </div>

      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h2>

      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}
