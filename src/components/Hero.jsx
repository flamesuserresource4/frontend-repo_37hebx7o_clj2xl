import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 dark:from-neutral-950/40 dark:via-neutral-950/50 dark:to-neutral-950/95" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 pt-36 md:pt-44">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
          Modern, clean, and interactive portfolios.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
          I craft delightful web experiences with a focus on performance, accessibility, and playful 3D interactions. Explore selected projects and get in touch to collaborate.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900">
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
