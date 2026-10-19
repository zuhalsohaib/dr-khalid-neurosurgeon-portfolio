import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(
      "header nav, main > section, footer, main section h2, main section .service-card, main section form, main section figure, main section .contact-card"
    );
    targets.forEach((el, index) => {
      el.classList.add("scroll-reveal");
      if (el.matches(".service-card, figure")) {
        el.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      }
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen overflow-hidden bg-[#f5faf8] text-slate-800 transition-colors duration-500 dark:bg-[#061718] dark:text-white">
    <Navbar dark={dark} setDark={setDark} />
    <main><Hero /><About /><Services /><Contact /></main>
    <Footer />
  </div>;
}