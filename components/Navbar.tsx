type NavItem = { label: string; href: string };

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur header-shadow">
      <div className="container-page flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <a href="#hero" className="text-sm font-semibold tracking-[0.16em] text-ink">
          Yevhen Shaforostov
        </a>
        <nav className="nav-scroll flex gap-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted md:gap-5 md:tracking-[0.22em]">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link underline-hover transition-colors hover:text-ink focus-visible:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
