export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center text-sm text-slate-600 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-lg font-bold text-slate-900">DubMatch</span>
          <span className="text-slate-500">Launching soon • Valentine's Day 2026</span>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <a
            href="https://instagram.com/dubmatch"
            target="_blank"
            rel="noreferrer"
            className="font-medium transition-all hover:text-slate-900 hover:underline"
          >
            Instagram
          </a>
          <a href="mailto:hello@dubmatch.app" className="font-medium transition-all hover:text-slate-900 hover:underline">
            hello@dubmatch.app
          </a>
          <span className="mt-2 text-xs text-slate-400">© 2025 DubMatch. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

