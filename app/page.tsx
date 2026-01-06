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
            AI Engineer <span className="mx-3 text-neutral-400">|</span> Applied ML{" "}
            <span className="mx-3 text-neutral-400">|</span> GenAI
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


      {/* ABOUT */}
      <section
        id="about"
        className="mt-24 scroll-mt-24 bg-neutral-950 py-24"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-white">
            About Me
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="mx-auto mt-14 max-w-7xl rounded-3xl border border-neutral-800 bg-neutral-900/30 p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4">
              <div className="mx-auto w-full max-w-[320px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800">
                  <Image
                    src="/photos/img2.jpg"
                    alt="Thanmayee Boyapati"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/30 p-5">
                  <p className="text-xs uppercase tracking-widest text-emerald-300">
                    Skills
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Java",
                      "SQL",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "REST APIs",
                      "Next.js",
                      "MongoDB",
                      "LangChain",
                      "LLMs",
                      "RAG",
                      "OCR",
                      "Pandas",
                      "Matplotlib",
                    ].map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-neutral-800 bg-white px-3 py-1 text-xs text-neutral-900"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 h-px w-full bg-emerald-300/20" />

                  <p className="mt-4 text-sm text-white">
                    Based in the U.S. | Open to Relocating
                  </p>
                </div>
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="lg:col-span-8">
              <div className="grid gap-8">
                {/* Who I am */}
                <div>
                  <p className="mt-3 leading-relaxed text-white">
                    I’m a Computer Science & Data Science student who builds
                    production-minded AI systems — from data pipelines and retrieval to
                    evaluation and integration. I care a lot about reliability: what a
                    model does when the input is messy, the context is incomplete, or
                    the metric doesn’t tell the full story.
                  </p>

                  <p className="mt-4 leading-relaxed text-white">
                    Recently, I worked on a genomics-focused question-answering system
                    using OCR, entity extraction, embedding-based retrieval, and LLM
                    generation to produce grounded responses to clinical-style queries.
                    I’m especially interested in grounded GenAI (RAG), evaluation, and
                    real-world performance.
                  </p>

                  <p className="mt-4 leading-relaxed text-white">
                    Outside of work, I enjoy mentoring and STEM community-building —
                    I’ve taught Arduino programming and helped promote opportunities
                    for women in tech through campus leadership.
                  </p>
                  {/* Focus Areas */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-emerald-300">
                        Experience In
                      </h3>

                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {[
                          {
                            title: "Grounded GenAI (RAG)",
                            desc: "Retrieval, context selection, and grounded generation to reduce hallucinations.",
                          },
                          {
                            title: "Applied ML + Evaluation",
                            desc: "Metrics, baselines, error analysis, and iteration loops that improve real outcomes.",
                          },
                          {
                            title: "Document AI Pipelines",
                            desc: "OCR → entity extraction → structured outputs for downstream search and QA.",
                          },
                          {
                            title: "Full-Stack Prototyping",
                            desc: "React + Node for demos, dashboards, and productized ML workflows.",
                          },
                        ].map((c) => (
                          <div
                            key={c.title}
                            className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-5 hover:border-emerald-300/60"
                          >
                            <p className="font-medium text-neutral-100">{c.title}</p>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                              {c.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
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
