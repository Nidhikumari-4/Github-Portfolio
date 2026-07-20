export default function ReadmeSection() {
  return (
    <div className="border border-gh-border rounded-md bg-gh-canvas">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gh-border bg-gh-canvas-subtle rounded-t-md">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-gh-text-muted">
          <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
        </svg>
        <span className="text-sm font-semibold text-gh-text">README</span>
        <span className="text-xs text-gh-text-muted">.md</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h1 className="text-[32px] font-semibold text-gh-text pb-2 border-b border-gh-border mb-4">
          Hi, I&apos;m Nidhi Kumari
        </h1>

        <h2 className="text-2xl font-semibold text-gh-text pb-2 border-b border-gh-border mb-4 mt-6">
          About Me
        </h2>
        <p className="text-base text-gh-text mb-4 leading-7">
          Software Engineer with 2 years of experience in full-stack development (React, Next.js, Django)
          and production AI features — agentic workflows, LLM integration, RAG, and vector databases with
          OpenAI and LangChain.
        </p>
        <p className="text-base text-gh-text mb-4 leading-7">
          Skilled in <strong className="text-gh-text">third-party integrations</strong>, webhook processing,
          and building systems that automate business operations end to end. Passionate about applying AI to
          build intelligent, efficient, and future-ready solutions.
        </p>

        <h2 className="text-2xl font-semibold text-gh-text pb-2 border-b border-gh-border mb-4 mt-6">
          What I&apos;m Working On
        </h2>
        <ul className="list-disc list-inside text-gh-text mb-4 space-y-1 text-base leading-7">
          <li>Building real-time event pipelines on Cloudflare Queues at House of Edtech</li>
          <li>Developing B2B order &amp; claims management with role-based access control</li>
          <li>Integrating CRM sync with deduplication and webhook processing</li>
          <li>Exploring agentic AI workflows and advanced RAG pipelines</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gh-text pb-2 border-b border-gh-border mb-4 mt-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { name: "React", bg: "bg-[#61dafb20]", text: "text-[#61dafb]" },
            { name: "Next.js", bg: "bg-[#ffffff15]", text: "text-white" },
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
            { name: "Tailwind CSS", bg: "bg-[#06b6d420]", text: "text-[#06b6d4]" },
          ].map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1 rounded-md text-sm font-mono font-medium ${tech.bg} ${tech.text}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-gh-text pb-2 border-b border-gh-border mb-4 mt-6">
          Get In Touch
        </h2>
        <p className="text-base text-gh-text leading-7">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="mailto:kumarinidhimain@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gh-green text-white text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" />
            </svg>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/nidhikumari-4/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gh-btn text-gh-text text-sm font-semibold rounded-md border border-gh-border hover:bg-gh-btn-hover transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728ZM3.56 5.715a1.032 1.032 0 0 1-1.03-1.032c0-.566.463-1.03 1.03-1.03.566 0 1.03.464 1.03 1.03 0 .567-.464 1.032-1.03 1.032Zm.889 6.51h-1.78V6.498h1.78ZM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.882.882 0 0 0 .889-.866V2.866A.882.882 0 0 0 13.11 2Z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gh-btn text-gh-text text-sm font-semibold rounded-md border border-gh-border hover:bg-gh-btn-hover transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
