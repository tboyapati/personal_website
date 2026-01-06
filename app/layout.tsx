import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <Link href="/" 
            className="text-2xl font-extrabold tracking-tight text-emerald-400 hover:text-emerald-300">
              TB
            </Link>

            <div className="hidden items-center gap-4 text-lg text-neutral-200 md:flex">
              <Link href="/#home" className="hover:text-emerald-300">Home</Link>
              <Link href="/#about" className="hover:text-emerald-300">About</Link>
              <Link href="/#timeline" className="hover:text-emerald-300">Experience</Link>
              <Link href="/#projects" className="hover:text-emerald-300">Projects</Link>
              <Link href="/#contact" className="hover:text-emerald-300">Contact</Link>

              {/* <Link
                href="/resume"
                className="rounded-xl border border-neutral-700 px-3 py-1.5 hover:text-emerald-300"
              >
                Resume
              </Link> */}

              {/* Blogs later */}
              {/* <Link href="/blog" className="hover:text-white">Blog</Link> */}
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
