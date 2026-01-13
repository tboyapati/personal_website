"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

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

          {/* Mobile menu (right drawer) */}
          <div
            className={`fixed top-0 right-0 z-50 h-screen w-64 bg-neutral-950 border-l border-neutral-800
    transform transition-transform duration-300 ease-in-out md:hidden
    ${open ? "translate-x-0" : "translate-x-full"}`}
          >

            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                className="text-3xl text-neutral-200"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 px-6 text-xl text-neutral-200">
              <Link href="/#home" onClick={() => setOpen(false)} className="hover:text-emerald-300">
                Home
              </Link>
              <Link href="/#about" onClick={() => setOpen(false)} className="hover:text-emerald-300">
                About
              </Link>
              <Link href="/#timeline" onClick={() => setOpen(false)} className="hover:text-emerald-300">
                Experience
              </Link>
              <Link href="/#projects" onClick={() => setOpen(false)} className="hover:text-emerald-300">
                Projects
              </Link>
              <Link href="/#contact" onClick={() => setOpen(false)} className="hover:text-emerald-300">
                Contact
              </Link>
              <Link href="/resume" onClick={() => setOpen(false)} className="hover:text-emerald-300">
                Resume
              </Link>
            </nav>
          </div>

        </header>

        {children}
      </body>
    </html>
  );
}
