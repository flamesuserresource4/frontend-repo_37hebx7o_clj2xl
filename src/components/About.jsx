export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">About me</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            I’m a developer and designer focused on crafting modern, clean, and interactive web experiences. I blend meticulous UI design with solid engineering practices to ship fast and maintainable products.
          </p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            My toolkit centers on React, TypeScript, and FastAPI, with a love for performance, accessibility, and motion. Outside the editor, I enjoy photography and tinkering with 3D scenes.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 p-[2px]">
            <div className="h-full w-full rounded-2xl bg-white p-6 dark:bg-neutral-950">
              <div className="grid h-full w-full place-items-center rounded-xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-500/10 text-sm text-neutral-500 dark:text-neutral-400">
                Clean code. Human interfaces. Playful details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
