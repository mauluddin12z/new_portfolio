import { nav } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.svg"

export function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full px-5 py-2.5 flex items-center gap-1 sm:gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <a href="#top" className="flex items-center gap-2 pl-1 pr-3">
          <div className="p-1 size-7 rounded-lg bg-primary/20 ring-1 ring-primary/40 grid place-items-center">
          <Image src={logo} width={36} height={64} alt="logo" />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2.5 px-2 border-l border-white/10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-6 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:shadow-[0_0_30px_rgba(80,200,255,0.4)] transition-shadow"
        >
          Hire me <ArrowUpRight className="size-3.5" />
        </a>
      </nav>
    </header>
  );
}
