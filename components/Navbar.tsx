type NavItem = { label: string; href: string };

type NavbarProps = {
  items: NavItem[];
  actions?: React.ReactNode;
};

export function Navbar({ items, actions }: NavbarProps) {
  return (
    <div className="site-header sticky top-0 z-30 border-b border-slate-200 backdrop-blur header-shadow">
      <div className="container-page flex flex-col gap-1 py-2 md:flex-row md:items-center md:justify-between md:py-4">
        <a
          href="#hero"
          className="brand-link text-xs font-semibold tracking-[0.14em] text-ink md:text-sm md:tracking-[0.16em]"
        >
          Yevhen Shaforostov
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <nav className="nav-scroll flex gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted md:gap-5 md:text-[11px] md:tracking-[0.22em]">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link underline-hover rounded-full px-3 py-2 transition-colors hover:text-ink focus-visible:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {actions ? <div className="hidden md:flex">{actions}</div> : null}
        </div>
      </div>
    </div>
  );
}
