import { useMemo } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const projectsData = [
  {
    title: 'Interactive 3D Landing',
    description: 'A Spline-powered hero with physics-based interactions and smooth page transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    url: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming charts and live metrics with a crisp, modern UI system.',
    tags: ['Next.js', 'WebSockets', 'Tailwind'],
    url: '#',
  },
  {
    title: 'Creative Portfolio',
    description: 'Playful micro-interactions and subtle 3D parallax effects throughout.',
    tags: ['Vite', 'GSAP', 'Three.js'],
    url: '#',
  },
];

export default function Projects() {
  const projects = useMemo(() => projectsData, []);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A few highlights from recent work.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-amber-500">
            <Star className="h-5 w-5 fill-amber-500" />
            <span className="text-sm font-medium">Crafted with care</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.url} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 hover:shadow-xl transition overflow-hidden">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 border border-black/10 dark:border-white/10" />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 transition">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-neutral-400 group-hover:text-indigo-600 transition" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-200 border border-black/10 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
