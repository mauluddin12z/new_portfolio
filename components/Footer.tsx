export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-primary/20 ring-1 ring-primary/40 grid place-items-center">
            <span className="font-display font-bold text-primary text-xs">
              H
            </span>
          </div>

          <span>© 2026 Hidayat Mauluddin. Crafted with care.</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
