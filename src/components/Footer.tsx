const socialLinks = [
  {
    href: 'https://www.instagram.com/dubmatch25/',
    icon: 'fa-brands fa-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@dubmatch25',
    icon: 'fa-brands fa-tiktok',
    label: 'TikTok',
  },
  {
    href: 'mailto:justinliao3234@gmail.com',
    icon: 'fa-solid fa-envelope',
    label: 'Email',
  },
]

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-[#090207] px-4 py-12 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="text-sm">
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
            Copyright © DubMatch 2025 | All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white shadow-soft transition hover:-translate-y-1 hover:text-[#1c0827]"
            >
              <i className={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
