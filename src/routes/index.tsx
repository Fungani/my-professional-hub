import { createFileRoute } from "@tanstack/react-router";

import heroCommunity from "../assets/hero-community.jpg";
import projectCiso from "../assets/project-ciso.jpg";
import projectLand from "../assets/project-land.jpg";
import projectUmkhombandlela from "../assets/project-umkhombandlela.jpg";

const TITLE = "Fungani Chamane — Community Development & Economic Strategy";
const DESCRIPTION =
  "Portfolio of Fungani Kuhlekonke Chamane: community development, local economic development, stakeholder management and municipal land management across KwaZulu-Natal and Gauteng.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const technicalSkills = [
  "Local economic development",
  "Policy writing",
  "Monitoring and evaluation",
  "Research and development",
  "Report compilation",
  "Market research and analysis",
  "Business strategy formulation",
  "Microsoft Office suite",
];

const softSkills = [
  "Presentation and communication",
  "Stakeholder management",
  "Community engagement",
  "Project facilitation",
  "Capacity building",
  "Administration and office management",
  "Strategic planning",
];

function Index() {
  return (
    <div className="min-h-screen bg-ink text-paper font-sans antialiased selection:bg-accent selection:text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-ink/90 border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="kicker bg-accent px-4 py-1 font-display text-xl text-ink">FC</span>
            <span className="font-display text-lg tracking-wide">FUNGANI CHAMANE</span>
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
                  Community Development & Economic Strategy
                </span>
              </div>
              <h1 className="font-display text-[13vw] uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl">
                Building
                <br />
                <span className="text-accent">local economies</span>
                <br />
                that last
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
                I am Fungani Kuhlekonke Chamane. I work where communities, small business and local
                government meet — facilitating development programmes, positioning brands and
                managing municipal land with policy discipline.
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
                  <div className="font-display text-4xl">5</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                    Leadership roles
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl">2</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                    UKZN qualifications
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 lg:w-80">
              <div className="relative">
                <div className="absolute -inset-3 -rotate-3 rounded-sm bg-accent/20" />
                <img
                  src={heroCommunity}
                  alt="Community development meeting in session"
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
                I am a development professional with experience across non-governmental
                organisations, sales management and municipal land management. As Co-Founder and
                Secretary General of Umkhombandlela NGO, I facilitate school programmes, career
                expositions and local economic development initiatives, and I lead executive sales
                and brand positioning at CISO Sportswear.
              </p>
              <p className="mt-4">
                Earlier, as a Land Management Officer for Msunduzi Municipality and Matthew Francis
                Incorporated, I worked on municipal asset management, land acquisition and disposal,
                and policy implementation. My goal is to use community engagement and economic
                development experience to drive impactful initiatives in dynamic organisations.
              </p>
            </div>
            <div className="skew-cut bg-panel p-6">
              <div className="mb-4 text-xs uppercase tracking-widest text-white/40">Currently</div>
              <div className="font-display text-2xl leading-tight">
                Co-Founder & Secretary General
                <br />
                <span className="text-accent">Umkhombandlela NGO</span>
              </div>
              <div className="mt-4 text-sm text-white/50">
                Johannesburg, ZA · Available nationally
              </div>
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
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/15 px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">Soft skills</div>
              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/15 px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
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
            <span className="hidden text-sm font-medium text-white/40 sm:block">
              3 flagship initiatives
            </span>
          </div>

          <div className="space-y-6">
            {/* Project 1 */}
            <article className="group grid items-center gap-8 border border-white/10 bg-panel/50 p-6 transition-colors hover:border-accent/60 md:grid-cols-2 md:p-8">
              <img
                src={projectUmkhombandlela}
                alt="School career exposition hosted with local partners"
                width={1024}
                height={640}
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div>
                <div className="mb-2 text-xs uppercase tracking-widest text-accent">
                  Youth & education · 2022 — present
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tight transition-colors group-hover:text-accent">
                  Umkhombandlela NGO
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  Co-founded an organisation running prefect inductions and career expositions with
                  schools across the district, backed by funding proposals, activity reporting and
                  recommendations on the challenges affecting teaching and learning.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Programme facilitation
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Funding proposals
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Monitoring & evaluation
                  </span>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group grid items-center gap-8 border border-white/10 bg-panel/50 p-6 transition-colors hover:border-accent/60 md:grid-cols-2 md:p-8">
              <div className="md:order-2">
                <div className="mb-2 text-xs uppercase tracking-widest text-accent">
                  Brand & sports development · 2021 — present
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tight transition-colors group-hover:text-accent">
                  CISO Sportswear
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  Executive sales and management for a KwaZulu-Natal sportswear brand: the CISO
                  Football Tournament, under-9 and under-13 development competitions, coaching
                  clinics, pop-up retail at regional events and a commitment to local manufacturing.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Brand positioning
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Event strategy
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Stakeholder liaison
                  </span>
                </div>
              </div>
              <img
                src={projectCiso}
                alt="Youth football tournament with brand activation on the sideline"
                width={1024}
                height={640}
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink object-cover outline-1 -outline-offset-1 outline-white/10"
              />
            </article>

            {/* Project 3 */}
            <article className="group grid items-center gap-8 border border-white/10 bg-panel/50 p-6 transition-colors hover:border-accent/60 md:grid-cols-2 md:p-8">
              <img
                src={projectLand}
                alt="Municipal land planning documents and aerial view of city land parcels"
                width={1024}
                height={640}
                loading="lazy"
                className="aspect-[16/10] w-full bg-ink object-cover outline-1 -outline-offset-1 outline-white/10"
              />
              <div>
                <div className="mb-2 text-xs uppercase tracking-widest text-accent">
                  Municipal land & policy · 2018 — 2019
                </div>
                <h3 className="font-display text-3xl uppercase tracking-tight transition-colors group-hover:text-accent">
                  Msunduzi land management
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  Supported the Municipal Asset Disposal Policy and Anti-Land Invasion Policy, and
                  managed acquisition and disposal of municipal land for investment, emerging
                  industrialists and housing under the MFMA and Municipal Systems Act.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Policy writing
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Asset management
                  </span>
                  <span className="border border-white/10 bg-ink px-3 py-1 font-medium">
                    Compliance reporting
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION + EXPERIENCE + REFERENCES */}
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
                  <div className="font-display text-xl uppercase">
                    PG Dip Marketing & Supply Chain Management
                  </div>
                  <div className="text-white/60">University of KwaZulu-Natal</div>
                  <div className="mt-1 text-sm text-white/40">2018</div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">
                    BA Community & Development Studies
                  </div>
                  <div className="text-white/60">
                    University of KwaZulu-Natal · Institutional & community economic development
                  </div>
                  <div className="mt-1 text-sm text-white/40">2016</div>
                </div>
              </div>
            </div>
            {/* Experience */}
            <div>
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">Experience</div>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl uppercase">
                    Co-Founder & Secretary General
                  </div>
                  <div className="text-white/60">Umkhombandlela NGO</div>
                  <div className="mt-1 text-sm text-white/40">11/2022 — Present</div>
                </div>
                <div className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl uppercase">Executive Sales & Management</div>
                  <div className="text-white/60">CISO Sportswear</div>
                  <div className="mt-1 text-sm text-white/40">11/2021 — Present</div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Ward Committee Member</div>
                  <div className="text-white/60">
                    Ward 24 & War-Room Secretary General, Msunduzi Municipality
                  </div>
                  <div className="mt-1 text-sm text-white/40">02/2023 — 04/2024</div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Land Management Officer</div>
                  <div className="text-white/60">
                    Msunduzi Municipality & Matthew Francis Incorporated
                  </div>
                  <div className="mt-1 text-sm text-white/40">10/2018 — 02/2019</div>
                </div>
              </div>
            </div>
            {/* References */}
            <div>
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">References</div>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-5">
                  <div className="font-display text-xl uppercase">Mrs T. Zondi</div>
                  <div className="text-white/60">
                    Ward Committee Member (Ward 24), Community Health & Welfare Portfolio
                  </div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Mr M. Khumalo</div>
                  <div className="text-white/60">
                    Senior Manager: Development Services, Msunduzi Municipality
                  </div>
                </div>
                <div className="border-l-2 border-white/15 pl-5">
                  <div className="font-display text-xl uppercase">Mr T. Drake</div>
                  <div className="text-white/60">
                    Legal Attorney, Matthew Francis Incorporated
                  </div>
                </div>
                <div className="text-sm text-white/40">
                  Full contact details are available in the downloadable CV.
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
              Let's build something that lasts
            </div>
            <h2 className="font-display text-6xl uppercase leading-[0.85] tracking-tight sm:text-7xl md:text-8xl">
              Ready to
              <br />
              <span className="text-accent">work?</span>
            </h2>
            <a
              href="mailto:Funganichamane95@gmail.com"
              className="mt-10 inline-block font-display text-xl underline decoration-accent decoration-4 underline-offset-8 transition-colors hover:text-accent md:text-3xl"
            >
              Funganichamane95@gmail.com
            </a>
            <div className="mt-4 font-display text-lg text-white/60">
              <a href="tel:+27712705115" className="transition-colors hover:text-accent">
                +27 (0)71 270 5115
              </a>
              <span className="mx-3 text-white/20">·</span>
              Johannesburg, 1609
            </div>
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
              href="https://www.linkedin.com/in/fungani-chamane"
              target="_blank"
              rel="noopener noreferrer"
              className="skew-cut border border-white/20 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/27712705115"
              target="_blank"
              rel="noopener noreferrer"
              className="skew-cut border border-white/20 px-7 py-3.5 font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/40 sm:flex-row">
          <span className="font-display tracking-wide text-white/60">FUNGANI CHAMANE</span>
          <span>© {new Date().getFullYear()} · Community & economic development</span>
        </div>
      </footer>
    </div>
  );
}
