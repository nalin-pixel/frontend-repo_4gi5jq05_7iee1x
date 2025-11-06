import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for freelance projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building playful, interactive web experiences
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
            I craft modern websites and apps with a focus on motion, 3D and delightful details. Let’s bring your idea to life.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-medium shadow hover:bg-indigo-500 transition">
              See my work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white px-4 py-2 font-medium border border-black/10 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-b from-indigo-50 to-white dark:from-neutral-900 dark:to-neutral-900">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-neutral-900/40" />
        </div>
      </div>
    </section>
  );
}
