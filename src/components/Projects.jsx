import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful landing page merging performant 3D with crisp typography and motion.',
    tags: ['React', 'Spline', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Starter',
    description: 'A scalable component library with tokens, theming, and accessibility baked in.',
    tags: ['Storybook', 'Radix', 'Tokens'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Realtime Collab Notes',
    description: 'Minimal interface for collaborative note taking with presence and cursors.',
    tags: ['FastAPI', 'WebSockets', 'MongoDB'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Selected work</h2>
          <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">A snapshot of recent projects. Clean code, sensible architecture, and attention to craft.</p>
        </div>
        <div className="hidden gap-2 md:flex">
          {projects.map((p, i) => (
            <button key={p.title} onClick={() => setActive(i)} className={`rounded-full border px-3 py-1 text-xs transition ${active === i ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800'}`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} className={`group rounded-2xl border p-6 transition ${active === i ? 'border-neutral-900 dark:border-white' : 'border-neutral-200 dark:border-neutral-800'}`}>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="rounded-full border border-neutral-200 px-2 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={p.live} className="inline-flex items-center gap-1 text-sm text-neutral-900 underline-offset-4 hover:underline dark:text-white">
                Live <ExternalLink className="h-4 w-4" />
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-neutral-900 underline-offset-4 hover:underline dark:text-white">
                Code <Github className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
