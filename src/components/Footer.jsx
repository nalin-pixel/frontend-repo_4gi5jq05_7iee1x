import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 inline-flex items-center gap-1">
          Crafted with <Heart className="h-4 w-4 text-rose-500" /> and plenty of coffee.
        </p>
      </div>
    </footer>
  );
}
