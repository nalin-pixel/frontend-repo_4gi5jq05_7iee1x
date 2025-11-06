import { useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <Rocket className="h-5 w-5 text-indigo-600" />
            <span>My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-indigo-600 transition"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"
                 className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
          <div className="px-4 py-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 rounded-md text-neutral-800 dark:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"
                 className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
