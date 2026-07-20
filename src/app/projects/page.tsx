import PageShell from "@/components/PageShell";

const PROJECTS = [
  {
    name: "Portfolio",
    tag: "Featured",
    tagColor: "#388bfd",
    subtitle: "GitHub-Themed Developer Portfolio",
    description:
      "A GitHub-inspired developer portfolio built with Next.js and Tailwind CSS, featuring dark/light theme toggle, contribution graph, tabbed navigation, and a GitHub-style profile layout. Includes contact form with EmailJS integration and responsive design across all breakpoints.",
    tech: [
      { name: "Next.js 16", color: "#c9d1d9" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "React 19", color: "#61dafb" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "EmailJS", color: "#ff6b6b" },
    ],
    liveUrl: "https://githubb-portfolio.vercel.app/",
    repoUrl: "https://github.com/Nidhikumari-4/Github-Portfolio",
    image: "/portfolio.one.png",
  },
  {
    name: "EduTrack Pro",
    tag: "Featured",
    tagColor: "#3fb950",
    subtitle: "AI-Powered Educational Management Platform",
    description:
      "Full-stack AI-powered educational management platform with secure role-based authentication and assignment management. Integrated Azure OpenAI Service for context-aware AI feedback through structured prompt workflows. Scalable REST APIs with Zod, Mongoose, and JWT, plus responsive dashboards for real-time workflow tracking.",
    tech: [
      { name: "Next.js 16", color: "#c9d1d9" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "MongoDB", color: "#47a248" },
      { name: "Azure OpenAI", color: "#0078d4" },
      { name: "React 19", color: "#61dafb" },
      { name: "Tailwind CSS", color: "#38bdf8" },
    ],
    liveUrl: "https://edu-track-roan.vercel.app",
    repoUrl: "https://github.com/Nidhikumari-4/Edu_Track",
    image: "/edutrack-preview.png",
  },
];

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectsPage() {
  return (
    <PageShell>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-6">
        Projects
      </h2>

      <div className="space-y-5">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="group rounded-xl border border-gh-border bg-gh-card overflow-hidden hover:border-gh-text-muted/40 transition-[border-color] duration-500"
          >
            <div className={`grid grid-cols-1 ${project.image ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
              {/* Left — details */}
              <div className="p-4 sm:p-6 flex flex-col">
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  {project.tag && (
                    <>
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: project.tagColor }}
                      />
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest"
                        style={{ color: project.tagColor }}
                      >
                        {project.tag}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gh-text-bright tracking-tight mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-gh-text-muted mb-4">
                  {project.subtitle}
                </p>

                <p className="text-[13px] text-gh-text leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded-md bg-gh-canvas-subtle text-gh-text-muted"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: t.color }}
                      />
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2.5 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gh-accent text-white text-xs font-semibold rounded-lg hover:brightness-110 transition-all duration-200"
                  >
                    <ExternalIcon />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gh-btn border border-gh-border text-gh-text text-xs font-semibold rounded-lg hover:bg-gh-btn-hover transition-colors duration-200"
                  >
                    <GithubIcon />
                    Source
                  </a>
                </div>
              </div>

              {/* Right — image (only if available) */}
              {project.image && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="hidden lg:block relative overflow-hidden border-l border-gh-border"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} Preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div
                    className="absolute inset-y-0 left-0 w-10"
                    style={{ background: "linear-gradient(to right, var(--gh-card), transparent)" }}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
