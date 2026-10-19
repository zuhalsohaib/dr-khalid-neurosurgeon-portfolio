import { ArrowUpRight, BadgeCheck, Brain, MapPin, Stethoscope } from "lucide-react";

export default function About() {
  return <section id="about" className="scroll-mt-28 px-4 py-20 sm:px-8 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div className="about-visual relative">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-teal-400/10 to-blue-500/20 blur-xl" />
        <div className="relative">
          <div className="mt-4 grid grid-cols-2 items-stretch gap-3 sm:gap-4">
            <figure className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 p-1.5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900">
              <img src="/about-surgery.png" alt="Neurosurgical team working in an operating room" className="block aspect-[4/3] w-full rounded-xl object-cover object-center transition duration-500 group-hover:scale-[1.015]" loading="lazy" />
              <figcaption className="flex min-h-12 items-center px-2 py-3 text-xs font-bold text-slate-600 dark:text-slate-300">In the operating room</figcaption>
            </figure>
            <figure className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 p-1.5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900">
              <img src="/doctor-surgery.png" alt="Doctor in surgical scrubs during an operation" className="block aspect-[4/3] w-full rounded-xl object-cover object-[center_28%] transition duration-500 group-hover:scale-[1.015]" loading="lazy" />
              <figcaption className="flex min-h-12 items-center px-2 py-3 text-xs font-bold text-slate-600 dark:text-slate-300">Surgical care</figcaption>
            </figure>
          </div>
        </div>
        <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[.04]">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300"><MapPin size={20}/></span>
          <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Practice location</p><p className="mt-1 text-sm font-bold">Rifah Medical Complex, Kabul, Afghanistan</p></div>
        </div>
      </div>
      <div>
        <p className="section-kicker">About the doctor</p>
        <h2 className="section-title mt-4">Specialist knowledge. <span className="text-teal-600 dark:text-teal-300">Human connection.</span></h2>
        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">Dr. Khalid Khan Zadran is a Consultant Neurosurgeon and Brain &amp; Spine Specialist based at Rifah Medical Complex in Kabul, Afghanistan.</p>
        <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">This portfolio provides an overview of his specialty areas and a simple way for visitors to contact the clinic about an appointment.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[.035]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300"><Brain size={21}/></span><h3 className="mt-4 font-display font-extrabold">Brain &amp; spine</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Consultation for brain- and spine-related concerns.</p></article>
          <article className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[.035]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300"><Stethoscope size={21}/></span><h3 className="mt-4 font-display font-extrabold">Consultation</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Contact the clinic to ask about availability.</p></article>
        </div>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-extrabold text-teal-700 transition hover:gap-3 dark:text-teal-300">Contact the clinic <ArrowUpRight size={18}/></a>
        <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500 dark:text-slate-400"><BadgeCheck size={16} className="mt-0.5 shrink-0"/> Professional qualifications and memberships are not listed here because they were not specified in the supplied project brief.</p>
      </div>
    </div>
  </section>;
}
