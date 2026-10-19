import { Activity, ArrowUpRight, Brain, Stethoscope, ScanSearch } from "lucide-react";
const services = [
  { icon: Brain, number: "01", title: "Brain surgery consultation", text: "Discuss brain-related concerns and understand the next steps for specialist assessment." },
  { icon: Activity, number: "02", title: "Spine surgery consultation", text: "A consultation pathway for concerns involving the spine and related symptoms." },
  { icon: Stethoscope, number: "03", title: "Nerve disorder assessment", text: "Discuss nerve-related symptoms with a neurosurgical specialist." },
  { icon: ScanSearch, number: "04", title: "Neurosurgical evaluation", text: "Arrange a specialist evaluation and ask about suitable care options." },
];
export default function Services() {
  return <section id="services" className="scroll-mt-28 px-4 py-20 sm:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Areas of consultation</p><h2 className="section-title mt-4 max-w-3xl">Focused care for <span className="text-teal-600 dark:text-teal-300">brain &amp; spine.</span></h2></div><p className="max-w-md leading-7 text-slate-600 dark:text-slate-400">Explore the consultation areas listed in the project brief. Contact the clinic to confirm availability and specific services.</p></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({icon: Icon, number, title, text}) => <article key={number} className="service-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-teal-400/70 hover:shadow-[0_24px_60px_-35px_rgba(13,148,136,.55)] dark:border-white/10 dark:bg-white/[.035] sm:p-7"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500/10 text-teal-700 transition group-hover:bg-teal-500 group-hover:text-white dark:text-teal-300"><Icon size={23}/></span><span className="font-mono text-xs font-bold tracking-widest text-slate-400">/{number}</span></div><h3 className="mt-7 font-display text-xl font-extrabold leading-snug">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{text}</p><a href="#contact" aria-label={`Ask about ${title}`} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 dark:text-teal-300">Ask the clinic <ArrowUpRight size={16}/></a><div className="pointer-events-none absolute -bottom-12 -right-8 h-28 w-28 rounded-full bg-teal-400/10 blur-2xl transition group-hover:bg-teal-400/20"/></article>)}</div>
    </div>
  </section>;
}
