export function Pill({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
      <Icon className="size-4 text-primary" /> {label}
    </span>
  );
}
