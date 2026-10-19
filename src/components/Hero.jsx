import { ArrowDownRight, ArrowUpRight, Brain, ShieldCheck, Activity } from "lucide-react";
export default function Hero() {
  return <section id="home" className="relative px-4 pb-20 pt-32 sm:px-8 sm:pt-40 lg:pb-28">
    <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-teal-300/20 blur-[100px] dark:bg-teal-400/10" />
    <div className="pointer-events-none absolute right-0 top-28 h-96 w-96 rounded-full bg-cyan-300/20 blur-[110px] dark:bg-cyan-400/10" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
      <div className="animate-fade-up">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-teal-800 dark:text-tealglow"><span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" /> Brain · Spine · Neurosurgery</div>
        <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.04] tracking-[-.055em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">Advanced care.<br /><span className="bg-gradient-to-r from-teal-600 via-teal-400 to-cyan-400 bg-clip-text text-transparent dark:from-tealglow dark:via-cyan-300 dark:to-white">A human approach.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">Consultant neurosurgeon specializing in brain and spine surgery, bringing advanced neurosurgical care and a patient-first approach to Kabul, Afghanistan.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#contact" className="group inline-flex items-center gap-3 rounded-xl bg-tealglow px-6 py-4 text-sm font-extrabold text-deep transition hover:-translate-y-1 hover:shadow-glow">Request a consultation <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-4 text-sm font-bold transition hover:border-teal-500 dark:border-white/15 dark:hover:border-tealglow">Explore profile <ArrowDownRight size={17} /></a>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-300"><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-teal-600 dark:text-tealglow" /> Patient-focused care</span><span className="flex items-center gap-2"><Brain size={17} className="text-teal-600 dark:text-tealglow" /> Brain & spine surgery</span></div>
      </div>
      <div className="hero-portrait relative mx-auto w-full max-w-[34rem]">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-teal-300/40 to-cyan-500/10 blur-2xl" />
        <div className="hero-image-frame relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 p-2 shadow-[0_30px_100px_-30px_rgba(13,148,136,.38)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b2425]/70 sm:rounded-[2.25rem] sm:p-3">
          <img src="/doctor-consultation.png" alt="Dr. Khalid Khan Zadran in a white coat at his medical office" className="hero-image block aspect-[4/5] max-h-[680px] w-full rounded-[1.5rem] object-cover object-[center_38%] sm:aspect-[4/5]" />
          <div className="hero-caption absolute inset-x-7 bottom-7 rounded-2xl border border-white/30 bg-[#071f20]/85 p-5 text-white shadow-xl backdrop-blur-xl sm:inset-x-9 sm:bottom-9"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-tealglow">Neurosurgery · Kabul</p><p className="mt-2 font-display text-xl font-bold sm:text-2xl">Expertise with empathy.</p></div><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-tealglow text-deep"><Activity size={23} /></span></div></div>
        </div>
        <div className="hero-float-card absolute -left-4 top-16 hidden rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0d2a2b]/95 sm:block"><Brain size={23} className="text-teal-600 dark:text-tealglow" /><p className="mt-2 text-xs font-extrabold">Brain & spine care</p><p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Specialist consultation</p></div>
      </div>
    </div>
  </section>;
}