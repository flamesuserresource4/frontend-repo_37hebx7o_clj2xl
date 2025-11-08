import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Get in touch</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">Have a project in mind or just want to say hi? Drop a message and I’ll respond shortly.</p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm text-neutral-700 dark:text-neutral-200">Name</label>
            <input id="name" name="name" required className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-primary/20 placeholder:text-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" placeholder="Jane Doe" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm text-neutral-700 dark:text-neutral-200">Email</label>
            <input id="email" name="email" type="email" required className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-primary/20 placeholder:text-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" placeholder="jane@mail.com" />
          </div>
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm text-neutral-700 dark:text-neutral-200">Message</label>
          <textarea id="message" name="message" rows={5} required className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-primary/20 placeholder:text-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" placeholder="Tell me about your project..." />
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900">
          <Send className="h-4 w-4" /> Send message
        </button>
        {status && (
          <p className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"><Mail className="h-4 w-4" /> {status}</p>
        )}
      </form>
    </section>
  );
}
