import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-neutral-100">
      {/* HERO (Home) */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-72px)] overflow-hidden rounded-3xl border border-neutral-800"
      >
        {/* Background image */}
        <Image
          src="/photos/Backgroundimg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-neutral-950/70" />

        {/* Subtle emerald glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-56 text-center">
          <p className="text-sm uppercase tracking-widest text-neutral-300 sm:text-lg">
            Hello, I am
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-emerald-300 sm:text-6xl">
            Thanmayee Boyapati
          </h1>

          <p className="mt-5 max-w-2xl text-base font-medium tracking-wide text-neutral-200 sm:text-lg">
            AI Engineer <span className="mx-2 text-neutral-400">|</span> Applied ML{" "}
            <span className="mx-2 text-neutral-400">|</span> GenAI Systems
          </p>


          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:text-emerald-300 text-center"
            >
              Contact me
            </Link>

          </div>
        </div>
      </section>


      {/* ABOUT (single box: left image, right text) */}
      <section id="about" className="mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold">
          About{" "}
          <span className="text-emerald-300">•</span>
        </h2>

        <div className="mt-6 rounded-3xl border border-neutral-800 bg-neutral-900/30 p-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* LEFT: Image */}
            <div className="mx-auto w-full max-w-[420px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800">
                <Image
                  src="/photos/img2.jpg"
                  alt="Thanmayee Boyapati"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* subtle accent line */}
              <div className="mt-4 h-px w-full bg-emerald-300/30" />
            </div>

            {/* RIGHT: Text */}
            <div>
              <p className="text-neutral-300 leading-relaxed">
                I’m a Computer Science & Data Science student focused on building
                practical AI/ML systems. I enjoy working across the stack—from
                data pipelines and retrieval to evaluation and integration.
              </p>

              <p className="mt-4 text-neutral-300 leading-relaxed">
                Recently, I worked on genomics-focused workflows and grounded
                question-answering systems. I’m especially interested in
                reliable GenAI, RAG, and real-world model performance.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "SQL", "React", "Node", "LLMs", "RAG"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-800 bg-neutral-950/40 px-3 py-1 text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex rounded-xl border border-neutral-700 px-4 py-2 text-sm font-medium hover:border-emerald-300 hover:text-emerald-300"
                >
                  Let’s connect →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold">
          Experience <span className="text-emerald-300">•</span>
        </h2>
        <p className="mt-4 text-neutral-300">Coming soon.</p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold">
          Skills <span className="text-emerald-300">•</span>
        </h2>
        <p className="mt-4 text-neutral-300">Coming soon.</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold">
          Projects <span className="text-emerald-300">•</span>
        </h2>
        <p className="mt-4 text-neutral-300">Coming soon.</p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold">
          Education <span className="text-emerald-300">•</span>
        </h2>
        <p className="mt-4 text-neutral-300">Coming soon.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-24 scroll-mt-24">
        <h2 className="text-2xl font-semibold">
          Contact <span className="text-emerald-300">•</span>
        </h2>
        <p className="mt-4 text-neutral-300">Coming soon.</p>
      </section>

      <footer className="mt-28 border-t border-neutral-900 pt-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Thanmayee Boyapati
      </footer>
    </main>
    
  );
}
