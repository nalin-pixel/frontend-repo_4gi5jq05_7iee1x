import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name}! I’ll get back to you soon.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 backdrop-blur">
            <Mail className="h-4 w-4" />
            Let's connect
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Say hello</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Have a project in mind or just want to chat? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Name</label>
            <input id="name" name="name" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">I typically reply within 24 hours.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 font-medium shadow hover:bg-indigo-500 transition">
              Send message <Send className="h-4 w-4" />
            </button>
          </div>
          {status && (
            <div className="mt-2 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/50 px-3 py-2 text-sm">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
