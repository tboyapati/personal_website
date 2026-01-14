import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-white">My Resume</h1>
          <div className="mt-3 h-1 w-20 rounded-full bg-emerald-400" />

          <p className="mt-6 max-w-2xl text-center text-neutral-300">
            Here is my resume outlining my educational background, work experience,
            and technical skills.
          </p>

          <a
            href="/BThanmayeeResume114.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:text-emerald-300 transition"
          >
            Download Resume
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/20">
          <iframe
            src="/BThanmayeeResume.pdf"
            className="h-[900px] w-full"
            title="Resume PDF"
          />
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/" className="text-sm text-neutral-400 hover:text-emerald-300">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
