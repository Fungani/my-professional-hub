import { createFileRoute } from "@tanstack/react-router";

import heroPortrait from "../assets/hero-portrait.jpg";
import projectPulseboard from "../assets/project-pulseboard.jpg";
import projectSprintcart from "../assets/project-sprintcart.jpg";
import projectStrobeworks from "../assets/project-strobeworks.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara Devi — Senior Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mara Devi, a senior full-stack engineer building fast, accessible web interfaces at scale.",
      },
      {
        property: "og:title",
        content: "Mara Devi — Senior Full-Stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Mara Devi, a senior full-stack engineer building fast, accessible web interfaces at scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ink text-paper font-sans antialiased selection:bg-accent selection:text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-ink/90 border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="kicker bg-accent px-4 py-1 font-display text-xl text-ink">MD</span>
            <span className="font-display text-lg tracking-wide">MARA DEVI</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#about" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-accent">
              Skills
            </a>
            <a href="#work" className="transition-colors hover:text-accent">
              Work
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </nav>
          <a
            href="/cv.pdf"
            download
            className="skew-cut hidden items-center gap-2 bg-paper px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent sm:inline-flex"
          >
            Download CV
            <span className="text-accent">↓</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, var(--color-accent) 0 2px, transparent 2px 60px)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-6 inline-flex items-center gap-2">
                <span className="h-3 w-3 animate-pulse rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Senior Full-Stack Engineer
                </span>
              </div>
              <h1 className="font-display text-[13vw] uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl">
                Building fast
                <br />
                <span className="text-accent">interfaces</span>
                <br />
                at scale
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
                I engineer high-performance web products where precision meets momentum. Eight years
                shipping for teams that move quick and ship even quicker.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="skew-cut bg-accent px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-paper"
                >
                  View my work →
                </a>
                <a
                  href="#contact"
                  className="skew-cut border border-white/20 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  Get in touch
                </a>
              </div>
              <div className="mt-14 flex gap-10">
                <div>
                  <div className="font-display text-4xl text-accent">8+</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/50">Years</div>
                </div>
                <div>
                  <div className="font-display text-4xl">42</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/50">Projects</div>
                </div>
                <div>
                  <div className="font-display text-4xl">1.4M</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                    Users served
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 lg:w-80">
              <div className="relative">
                <div className="absolute -inset-3 -rotate-3 rounded-sm bg-accent/20" />
                <img
                  src={heroPortrait}
                  alt="Mara Devi"
                  width={768}
                  height={960}
                  className="relative aspect-[4/5] w-full -rotate-3 rounded-sm bg-panel object-cover outline-1 -outline-offset-1 outline-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end gap-5">
            <span className="font-display text-2xl text-accent">01</span>
            <h2 className="font-display text-5xl uppercase tracking-tight">About me</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-lg leading-relaxed text-white/70 md:col-span-2">
              <p>
                I'm a full-stack engineer who cares about the 100ms that separates good from great.
                I build resilient systems, obsess over the details of motion and type, and believe
                the best products feel effortless to the people who use them.
              </p>
              <p className="mt-4">
                Currently leading frontend architecture at a fintech startup, previously building
                real-time tooling for logistics and media. I work best at the intersection of clean
                code and bold craft.
              </p>
            </div>
            <div className="skew-cut bg-panel p-6">
              <div className="mb-4 text-xs uppercase tracking-widest text-white/40">Currently</div>
              <div className="font-display text-2xl leading-tight">
                Staff Engineer
                <br />
                <span className="text-accent">Voltline Labs</span>
              </div>
              <div className="mt-4 text-sm text-white/50">Berlin, DE · Open to remote</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-white/10 bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end gap-5">
            <span className="font-display text-2xl text-accent">02</span>
            <h2 className="font-display text-5xl uppercase tracking-tight">Skills</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">Technical</div>
              <div className="flex flex-wrap gap-2.5">
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  TypeScript
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  React / Next.js
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  Node.js
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">GraphQL</span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  PostgreSQL
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">Rust</span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">Docker</span>
                <span className="border border-accent px-4 py-2 text-sm font-medium text-accent">
                  WebGL / Motion
                </span>
              </div>
            </div>
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">Soft skills</div>
              <div className="flex flex-wrap gap-2.5">
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  Technical leadership
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  System design
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  Mentorship
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  Cross-team communication
                </span>
                <span className="border border-white/15 px-4 py-2 text-sm font-medium">
                  Product thinking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between gap-5">
            <div className="flex items-end gap-5">
              <span className="font-display text-2xl text-accent">03</span>
              <h2 className="font-display text-5xl uppercase tracking-tight">Selected work</h2>
            </div>
            <span className="hidden text-sm font-medium text-white/40 sm:block">3 / 42 projects</span>
          </div>

          <div className="space-y-6">
            {/* Project 1 */}
            <article className="group grid items-center gap-8 border border-white/10 bg-panel/50 p-6 transition-colors hover:border-accent/60 md:grid-cols-2 md:p-8">
              <img
                src={projectPulseboard}
                alt="Pulseboard analytics dashboard"
                width={1024}
                height={640}
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div>
                <div className="mb-2 text-xs uppercase tracking-widest text-accent">
                  Real-time analytics
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tight transition-colors group-hover:text-accent">
                  Pulseboard
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  A streaming dashboard rendering 50k live events per second with zero dropped
                  frames. Cut time-to-insight from minutes to under two.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">React</span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    WebSockets
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">Rust</span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">WebGL</span>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group grid items-center gap-8 border border-white/10 bg-panel/50 p-6 transition-colors hover:border-accent/60 md:grid-cols-2 md:p-8">
              <div className="md:order-2">
                <div className="mb-2 text-xs uppercase tracking-widest text-accent">Commerce</div>
                <h3 className="font-display text-3xl uppercase tracking-tight transition-colors group-hover:text-accent">
                  Sprintcart
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  Headless checkout that lifts conversion by 18%. Rewrote the payment flow for
                  sub-second latency and a frictionless, accessible path to purchase.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Next.js
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">Stripe</span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    GraphQL
                  </span>
                </div>
              </div>
              <img
                src={projectSprintcart}
                alt="Sprintcart checkout page"
                width={1024}
                height={640}
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink object-cover outline-1 -outline-offset-1 outline-white/10"
              />
            </article>

            {/* Project 3 */}
            <article className="group grid items-center gap-8 border border-white/10 bg-panel/50 p-6 transition-colors hover:border-accent/60 md:grid-cols-2 md:p-8">
              <img
                src={projectStrobeworks}
                alt="Strobeworks motion editor"
                width={1024}
                height={640}
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div>
                <div className="mb-2 text-xs uppercase tracking-widest text-accent">
                  Creative tooling
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tight transition-colors group-hover:text-accent">
                  Strobeworks
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  A browser-based motion editor with a 60fps timeline and GPU-accelerated preview.
                  Loved by 30k+ designers who prototype in the browser.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    TypeScript
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Canvas API
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">WebGPU</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTIFICATIONS + EXPERIENCE */}
      <section id="journey" className="border-t border-white/10 bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end gap-5">
            <span className="font-display text-2xl text-accent">04</span>
            <h2 className="font-display text-5xl uppercase tracking-tight">The trail</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Education */}
            <div>
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">Education</div>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl uppercase">BSc Computer Science</div>
                  <div className="text-white/60">Technical University of Berlin</div>
                  <div className="mt-1 text-sm text-white/40">2013 — 2017</div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Human–Computer Interaction</div>
                  <div className="text-white/60">Certificate program, U of Amsterdam</div>
                  <div className="mt-1 text-sm text-white/40">2018</div>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div>
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
                Certifications
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl uppercase">AWS Solutions Architect</div>
                  <div className="text-white/60">Amazon Web Services</div>
                  <div className="mt-1 text-sm text-white/40">2022</div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Google Cloud PSE</div>
                  <div className="text-white/60">Google</div>
                  <div className="mt-1 text-sm text-white/40">2023</div>
                </div>
              </div>
            </div>
            {/* Experience */}
            <div>
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">Experience</div>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl uppercase">Staff Engineer</div>
                  <div className="text-white/60">Voltline Labs</div>
                  <div className="mt-1 text-sm text-white/40">2021 — Present</div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Senior Frontend</div>
                  <div className="text-white/60">Kinetiq Media</div>
                  <div className="mt-1 text-sm text-white/40">2018 — 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, var(--color-accent) 0 2px, transparent 2px 60px)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Let's build something fast
            </div>
            <h2 className="font-display text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl">
              Ready to
              <br />
              <span className="text-accent">ship?</span>
            </h2>
            <a
              href="mailto:mara@devi.dev"
              className="mt-10 inline-block font-display text-2xl underline decoration-accent decoration-4 underline-offset-8 transition-colors hover:text-accent md:text-4xl"
            >
              mara@devi.dev
            </a>
          </div>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="/cv.pdf"
              download
              className="skew-cut bg-accent px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-paper"
            >
              Download CV ↓
            </a>
            <a
              href="https://github.com/maradevi"
              target="_blank"
              rel="noopener noreferrer"
              className="skew-cut border border-white/20 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/maradevi"
              target="_blank"
              rel="noopener noreferrer"
              className="skew-cut border border-white/20 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/40 sm:flex-row">
          <span className="font-display tracking-wide text-white/60">MARA DEVI</span>
          <span>© {new Date().getFullYear()} · Built for speed</span>
        </div>
      </footer>
    </div>
  );
}
