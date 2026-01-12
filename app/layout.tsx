"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-emerald-400 hover:text-emerald-300"
            >
              TB
            </Link>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-4xl text-neutral-200 focus:outline-none"
            >
              ☰
            </button>

            {/* Desktop menu */}
            <div className="hidden items-center gap-6 text-lg text-neutral-200 md:flex">
              <Link href="/#home" className="hover:text-emerald-300">Home</Link>
              <Link href="/#about" className="hover:text-emerald-300">About</Link>
              <Link href="/#timeline" className="hover:text-emerald-300">Experience</Link>
              <Link href="/#projects" className="hover:text-emerald-300">Projects</Link>
              <Link href="/#contact" className="hover:text-emerald-300">Contact</Link>
              <Link
                href="/resume"
                className="rounded-xl border border-neutral-700 px-3 py-1.5 hover:text-emerald-300"
              >
                Resume
              </Link>
            </div>
          </nav>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-4 space-y-4">
              <Link href="/#home" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/#timeline" onClick={() => setOpen(false)}>Experience</Link>
              <Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/resume" onClick={() => setOpen(false)}>Resume</Link>
            </div>
          )}
        </header>

        {children}
      </body>
    </html>
  );
}
