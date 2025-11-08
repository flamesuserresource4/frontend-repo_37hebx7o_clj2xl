import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          © {new Date().getFullYear()} — Built with care. Modern, clean, and playful.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
