
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

type TimelineSection = "Work Experience" | "Education";
type TimelineIcon = "work" | "edu";

type TimelineItem = {
  section: TimelineSection;
  title: string;
  org: string;
  date: string;
  desc: string;
  icon: TimelineIcon;
};
const timelineItems = [
  // ---- Work Experience ----
  {
    section: "Work Experience",
    title: "AI Engineering Intern(BioStatistian Department)",
    org: "Mayo Clinic",
    date: "Jun 2025 – Dec 2025",
    desc: "Built a genomics-focused question-answering system integrating OCR, entity extraction, embedding-based retrieval, and LLM generation for grounded responses.",
    icon: "work",
  },
  {
    section: "Work Experience",
    title: "HCI Researcher (GenAI)",
    org: "University of Minnesota",
    date: "2024 – 2025",
    desc: "Designed GenAI prompts and created relevance evaluation systems to improve grounded generation and user experience.",
    icon: "work",
  },

  // ---- Education ----
  {
    section: "Education",
    title: "B.S. Computer Science + Data Science, Minor: Statistics",
    org: "University of Minnesota – Twin Cities",
    date: "2022 – 2025",
    desc: "Focused on ML systems, data analytics, and applied statistics. Built projects spanning GenAI, RAG, and data pipelines.",
    icon: "edu",
  },
  {
    section: "Education",
    title: "High School Diploma",
    org: "Shakopee Senior High",
    date: "2021-2022",
    desc: "High Honors",
    icon: "edu",
  },
  {
    section: "Education",
    title: "High School",
    org: "Eagan Senior High",
    date: "2018-2021",
    desc: "From Grades 9-11 and transferred to Shakopee",
    icon: "edu",
  },
] satisfies TimelineItem[];

function CombinedTimeline({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: {
    section: "Work Experience" | "Education";
    title: string;
    org: string;
    date: string;
    desc: string;
    icon: "work" | "edu";
  }[];
}) {
  const order: Array<"Work Experience" | "Education"> = [
    "Work Experience",
    "Education",
  ];

  return (
    <section id={id} className="mt-24 scroll-mt-24 bg-neutral-950 py-5">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-emerald-400" />
      </div>

      <div className="mx-auto mt-14 max-w-7xl rounded-3xl border border-neutral-800 bg-neutral-900/30 p-10">
        <div className="relative">
          {/* center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-800 md:block" />

          <div className="space-y-14">
            {order.map((sectionName) => {
              const sectionItems = items.filter((i) => i.section === sectionName);
              if (sectionItems.length === 0) return null;

              return (
                <div key={sectionName}>
                  {/* Section heading inside the same card */}
                  <div className="mb-8 flex items-center justify-center">
                    <div className="h-px w-full max-w-[180px] bg-neutral-800" />
                    <p className="mx-4 text-sm font-semibold uppercase tracking-widest text-emerald-300">
                      {sectionName}
                    </p>
                    <div className="h-px w-full max-w-[180px] bg-neutral-800" />
                  </div>

                  <div className="space-y-10">
                    {sectionItems.map((it, idx) => (
                      <div
                        key={`${it.title}-${idx}`}
                        className="grid gap-6 md:grid-cols-12 md:items-start"
                      >
                        {/* LEFT */}
                        <div className="md:col-span-5 md:text-right">
                          <p className="text-sm uppercase tracking-widest text-neutral-400">
                            {it.date}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {it.title}
                          </h3>
                        </div>

                        {/* ICON */}
                        <div className="relative hidden md:col-span-2 md:flex md:justify-center">
                          <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-emerald-400">
                            {it.icon === "work" ? (
                              <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M3 7h18v11H3z" />
                                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                                <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                              </svg>
                            )}
                          </div>
                        </div>

                        {/* RIGHT */}
                        <div className="md:col-span-5">
                          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/30 p-5 hover:border-emerald-300/60">
                            <p className="font-medium text-white">{it.org}</p>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                              {it.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string; // optional
  href?: string;  // optional live link
  github?: string; // optional github link
};

const projects: Project[] = [
  {
    title: "Finance Tracker",
    description:
      "Built a full-stack personal finance platform enabling structured storage, categorization, and retrieval of transaction data for analytics and insights.",
    tags: ["RAG", "OCR", "LLMs", "MongoDB", "LangChain"],
    // image: "/photos/img1.jpg",
    href: "", // add later
    github: "", // add later
  },
  {
    title: "PDF Form Extraction Tool",
    description:
      "Extracts patient form fields and checkboxes using OpenCV + OCR, with grouping logic to map checked options to the correct question labels.",
    tags: ["Python", "OpenCV", "Tesseract", "PDF", "NLP"],
    // image: "/photos/img3.jpg",
    href: "",
    github: "",
  },
  {
    title: "Brain-Based Prediction of tDCS Treatment Response",
    description:
      "Evaluated multiple brain connectivity representations and causal machine learning models (T-Learner, X-Learner, Causal Forests) to predict individualized treatment response from neuroimaging data under small-sample constraints.",
    tags: ["GenAI", "UX", "LLMs", "React", "Education"],
    // image: "/photos/img2.jpg",
    href: "",
    github: "",
  },
];

export default function Home() {
  return (
    <main className="text-neutral-100">
      {/* HERO (Home) */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-72px)] overflow-hidden rounded-3xl border border-neutral-800"
      >
        <Image
          src="/photos/Backgroundimg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-neutral-950/70" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 text-center sm:px-16 lg:px-56">
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
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:text-emerald-300 text-center"
            >
              Contact me
            </Link>
          </div>

          {/* Socials (anchored near bottom) */}
          <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
            <div className="flex gap-10">
              <a
                href="https://linkedin.com/in/thanmayee-b-b13175233"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-white hover:text-emerald-300 transition" />
              </a>

              <a
                href="https://github.com/tboyapati"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-white hover:text-emerald-300 transition" />
              </a>

              <a
                href="https://www.instagram.com/thanuboyapati/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-white hover:text-emerald-300 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-24 scroll-mt-24 bg-neutral-950 py-5">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-white">About Me</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-400" />
        </div>

        <div className="mx-auto mt-14 max-w-7xl rounded-3xl border border-neutral-800 bg-neutral-900/30 p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4">
              <div className="mx-auto w-full max-w-[320px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800">
                  <Image
                    src="/photos/img5.jpg"
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
                <div>
                  <p className="mt-3 leading-relaxed text-white">
                    I’m a Computer Science & Data Science student who builds
                    production-minded AI systems — from data pipelines and retrieval
                    to evaluation and integration. I care a lot about reliability:
                    what a model does when the input is messy, the context is
                    incomplete, or the metric doesn’t tell the full story.
                  </p>

                  <p className="mt-4 leading-relaxed text-white">
                    Recently, I worked on a genomics-focused question-answering system
                    using OCR, entity extraction, embedding-based retrieval, and LLM
                    generation to produce grounded responses to clinical-style
                    queries. I’m especially interested in grounded GenAI (RAG),
                    evaluation, and real-world performance.
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
            {/* end RIGHT COLUMN */}
          </div>
        </div>
      </section>

      {/* EXPERIENCE (timeline style) */}
      <CombinedTimeline id="timeline" title="Experience & Education" items={timelineItems} />

      {/* PROJECTS */}
      <section id="projects" className="mt-24 scroll-mt-24 bg-neutral-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-emerald-400" />
            <p className="mt-4 max-w-2xl text-center text-neutral-300">
              A few projects focused on reliable AI systems, grounded GenAI, and practical tooling.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/20 shadow-[0_0_0_1px_rgba(0,0,0,0.2)] transition hover:border-emerald-300/60"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-neutral-900 to-neutral-950" />
                  )}
                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-neutral-950/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-800 bg-neutral-950/40 px-3 py-1 text-xs text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="contact" className="bg-neutral-950 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-emerald-300">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-white">
            I’d Love To Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-neutral-400">
            Feel free to reach out if you’d like to collaborate, chat about AI,
            or just connect.
          </p>

          {/* Email + Phone */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 hover:border-emerald-300/60">
              <Mail className="mx-auto h-8 w-8 text-emerald-300" />
              <p className="mt-4 text-sm uppercase tracking-widest text-neutral-400">
                Email
              </p>
              <p className="mt-2 text-white">boyapatithanmayee@gmail.com</p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 hover:border-emerald-300/60">
              <Phone className="mx-auto h-8 w-8 text-emerald-300" />
              <p className="mt-4 text-sm uppercase tracking-widest text-neutral-400">
                Phone
              </p>
              <p className="mt-2 text-white">+1 (952)-454-3214</p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-14 flex justify-center gap-8">
            <a href="https://linkedin.com/in/thanmayee-b-b13175233" target="_blank">
              <Linkedin className="h-6 w-6 text-neutral-400 hover:text-emerald-300" />
            </a>
            <a href="https://github.com/tboyapati" target="_blank">
              <Github className="h-6 w-6 text-neutral-400 hover:text-emerald-300" />
            </a>
            <a href="https://www.instagram.com/thanuboyapati/" target="_blank">
              <Instagram className="h-6 w-6 text-neutral-400 hover:text-emerald-300" />
            </a>
          </div>
        </div>
      </section>


      <footer className="mt-28 border-t border-neutral-900 pt-10 text-sm text-neutral-500 text-center">
        © {new Date().getFullYear()} Thanmayee Boyapati
      </footer>
    </main>
  );
}
