import { useState } from "react";
import { Activity, Menu, Moon, Sun, X } from "lucide-react";
const links = [["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Contact", "#contact"]];
export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
    <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/80 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-2xl dark:bg-[#092324]/85 sm:px-6">
      <a href="#home" className="flex items-center gap-3" aria-label="Dr. Khalid Khan Zadran home">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-tealglow text-deep"><Activity size={22} strokeWidth={2.5} /></span>
        <span><span className="block font-display text-sm font-extrabold tracking-tight sm:text-base">Dr. Khalid Khan Zadran</span><span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-teal-700 dark:text-tealglow">Consultant Neurosurgeon</span></span>
      </a>
      <div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-tealglow">{label}</a>)}</div>
      <div className="flex items-center gap-2">
        <button onClick={() => setDark(!dark)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-teal-400 hover:text-teal-600 dark:border-white/10 dark:text-white dark:hover:text-tealglow" aria-label="Toggle light and dark mode">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <a href="#contact" className="hidden rounded-xl bg-tealglow px-4 py-3 text-xs font-extrabold text-deep transition hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex">Request consultation ↗</a>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 md:hidden dark:border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {open && <div className="absolute left-4 right-4 top-[calc(100%+8px)] grid gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-[#092324] md:hidden">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-teal-50 dark:hover:bg-white/5">{label}</a>)}<a href="#contact" onClick={() => setOpen(false)} className="rounded-xl bg-tealglow px-4 py-3 text-sm font-bold text-deep">Request consultation ↗</a></div>}
    </nav>
  </header>;
}