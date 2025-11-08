import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          <span className="text-primary">/</span> portfolio
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#work" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Work</a>
          <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">About</a>
          <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
