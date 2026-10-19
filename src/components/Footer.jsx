import { Activity, ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 px-4 py-7 dark:border-white/10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-extrabold"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-tealglow text-deep">
            <Activity size={17} />
          </span>{" "}
          Dr. Khalid Khan Zadran
        </a>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} · Neurosurgery · Kabul, Afghanistan
          -Designed & developed by Zuhal Sohaib
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-500 dark:text-tealglow"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
