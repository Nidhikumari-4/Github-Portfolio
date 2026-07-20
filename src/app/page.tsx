import PageShell from "@/components/PageShell";
import ContributionGraph from "@/components/ContributionGraph";

const TECH_STACK = [
  { name: "React", bg: "bg-[#61dafb20]", text: "text-[#61dafb]" },
  { name: "Next.js", bg: "bg-[#6e768130]", text: "text-gh-text-bright" },
  { name: "Django", bg: "bg-[#09290320]", text: "text-[#44b78b]" },
  { name: "TypeScript", bg: "bg-[#3178c620]", text: "text-[#3178c6]" },
  { name: "Python", bg: "bg-[#3776ab20]", text: "text-[#3776ab]" },
  { name: "Node.js", bg: "bg-[#33993320]", text: "text-[#339933]" },
  { name: "LangChain", bg: "bg-[#1c3c3c20]", text: "text-[#2dd4bf]" },
  { name: "OpenAI", bg: "bg-[#41215220]", text: "text-[#a78bfa]" },
  { name: "PostgreSQL", bg: "bg-[#33679120]", text: "text-[#336791]" },
  { name: "MongoDB", bg: "bg-[#47a24820]", text: "text-[#47a248]" },
  { name: "Redis", bg: "bg-[#dc382d20]", text: "text-[#dc382d]" },
  { name: "AWS", bg: "bg-[#ff990020]", text: "text-[#ff9900]" },
  { name: "Docker", bg: "bg-[#2496ed20]", text: "text-[#2496ed]" },
  { name: "Cloudflare", bg: "bg-[#f4811520]", text: "text-[#f48115]" },
];

export default function Home() {
  return (
    <PageShell>
      <div className="space-y-10">
        {/* About */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">About</h2>
          <div className="border border-gh-border rounded-xl p-4 sm:p-6 bg-gh-card">
            <p className="text-sm text-gh-text leading-7 mb-4">
              Software Engineer with 2 years of experience in full-stack development (React, Next.js, Django)
              and production AI features — agentic workflows, LLM integration, RAG, and vector databases with
              OpenAI and LangChain.
            </p>
            <p className="text-sm text-gh-text leading-7 mb-5">
              Skilled in <span className="text-gh-text-bright font-semibold">third-party integrations</span>,
              webhook processing, and building systems that automate business operations end to end.
              Currently building real-time event pipelines and B2B operations platforms at House of Edtech.
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span key={tech.name} className={`px-3 py-1 rounded-md text-xs font-mono font-medium ${tech.bg} ${tech.text}`}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Working */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">Currently Working</h2>
          <div className="border border-gh-border rounded-xl p-5 bg-gh-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <img src="/house_of_edtech_logo.jpeg" alt="House of Edtech" className="w-10 h-10 rounded-lg object-cover shrink-0 bg-gh-canvas-inset border border-gh-border" />
                <div>
                  <h3 className="text-sm font-semibold text-gh-text-bright">Software Development Engineer</h3>
                  <p className="text-xs">
                    <a href="https://houseofedtech.in" target="_blank" className="text-gh-text-link hover:underline" style={{ transition: "color 0.3s" }}>House of Edtech</a>
                  </p>
                  <p className="text-[10px] text-gh-text-muted mt-0.5">Gurugram • Remote</p>
                </div>
              </div>
              <span className="text-xs text-gh-text-link px-2.5 py-1 rounded-full self-start whitespace-nowrap" style={{ background: "rgba(56,139,253,0.1)", border: "1px solid rgba(56,139,253,0.2)" }}>May 2026 — Present</span>
            </div>
            <p className="text-xs text-gh-text-muted leading-relaxed mt-3">
              Building real-time event pipelines on Cloudflare Queues, CRM integrations with deduplication,
              and B2B order/claims management with role-based access control.
            </p>
          </div>
        </div>

        {/* Contribution graph */}
        <ContributionGraph />
      </div>
    </PageShell>
  );
}
