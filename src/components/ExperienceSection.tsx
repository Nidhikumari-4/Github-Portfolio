const EXPERIENCES = [
  {
    role: "Software Development Engineer",
    company: "House of Edtech",
    companyUrl: "https://houseofedtech.in",
    client: null,
    location: "Gurugram • Remote",
    period: "May 2026 — Present",
    logo: "/house_of_edtech_logo.jpeg",
    logoRound: false,
    logoBg: "#6366f1",
    logoText: "HoE",
    description: [
      "Built a real-time event pipeline on Cloudflare Queues processing thousands of participant events per live webinar, and fixed production memory crashes by tuning event batching.",
      "Eliminated silent data loss by fixing retry handling and adding recovery for failed events, delivering 100% of Zoom registrations and attendance records to the CRM.",
      "Integrated third-party learning platforms and CRM sync with deduplication to prevent duplicate leads.",
      "Fixed data isolation in a multi-account setup where webinar data leaked across accounts, and corrected tracking that silently missed 83% of attendees.",
      "Developed order and claims management for a B2B operations platform, covering the full lifecycle from delivery tracking and COD payments to product exchanges and payment capture, with role-based access control.",
      "Added advanced search, filtering, and reporting with filtered CSV exports across orders and claims, and optimized database queries — cutting round-trips by 50% and speeding up page loads by 40%.",
    ],
    tech: ["Cloudflare Queues", "CRM Integration", "Webhook Processing", "REST APIs", "Role-Based Access Control"],
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    companyUrl: "https://www.accenture.com",
    client: "Client: BMW",
    location: "Gurugram • Onsite",
    period: "Nov 2024 — Apr 2026 • 1 yr 6 mos",
    logo: "/logo-accenture.png",
    logoRound: false,
    logoBg: "#a100ff",
    logoText: ">",
    description: [
      "Implemented an AI-driven chat interface in WPAMS, BMW's admin WebOps platform, enabling users to trigger server-side operations through natural language.",
      "Built responsive, component-driven UIs in React and TypeScript with REST API integration and PostgreSQL-backed data flows, boosting performance by 25%.",
      "Improved system observability by building Grafana dashboards over CloudWatch metrics and logs, enabling faster incident detection and zero-downtime deployments on AWS.",
    ],
    tech: ["React", "TypeScript", "PostgreSQL", "AWS", "Grafana", "REST APIs"],
  },
  {
    role: "Software Engineer I",
    company: "takeUforward",
    companyUrl: "https://takeuforward.org",
    client: null,
    location: "Bangalore • Remote",
    period: "Jul 2024 — Nov 2024 • 5 mos",
    logo: "/logo-takeuforward.png",
    logoRound: true,
    logoBg: "#ff6b35",
    logoText: "tUf",
    description: [
      "Built an AI learning assistant for DSA modules using LLMs, LangChain, and vector embeddings, serving instant explanations and code guidance to 1M+ users.",
      "Designed conversational workflows with prompt engineering, context retrieval, and safety guardrails, and iterated on LLM response quality via latency tracking and feedback loops.",
      "Cut API response time by 30% using Express.js and Redis, with scalable deployments on AWS EC2/S3.",
    ],
    tech: ["LLMs", "LangChain", "Express.js", "Redis", "AWS", "Vector Embeddings"],
  },
  {
    role: "UI Developer Intern",
    company: "NIC INFO TEK",
    companyUrl: "https://www.linkedin.com/company/nic-infotek/",
    client: null,
    location: "Hyderabad, India • Remote",
    period: "Jan 2024 — Mar 2024 • 3 mos",
    logo: "/logo-nicinfotek.png",
    logoRound: true,
    logoBg: "#2196f3",
    logoText: "nic",
    description: [
      "Developed and implemented a user-focused dashboard interface using Prime React, incorporating customized tables to enhance user experience.",
      "Utilized SCSS to customize the UI, ensuring a cohesive and visually appealing design throughout the project.",
      "Integrated APIs on the frontend to ensure seamless communication between the user interface and backend services, enhancing overall functionality.",
      "Developed sections based on different roles and users within the application, enabling role creation, user management, and access control.",
      "Constructed an alert details page, displaying issue-specific alerts and facilitating clear communication through a chat feature, with attachment and note options.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "Software Developer Intern",
    company: "Carbon Mint",
    companyUrl: "https://www.carbonmint.com/",
    client: null,
    location: "Hyderabad, India • Hybrid",
    period: "Oct 2022 — Oct 2023 • 1 yr 1 mo",
    logo: "/logo-carbonmint.png",
    logoRound: false,
    logoBg: "#00bfa5",
    logoText: "C",
    description: [
      "Built and maintained a web application using React, TypeScript, Next.js, and MUI.",
      "Implemented responsive and mobile-friendly designs using MUI and CSS.",
      "Worked closely with the product manager and designer to understand requirements and implemented features using React and Next.js.",
      "Performed testing and debugging to ensure that features were delivered with high quality.",
    ],
    tech: ["Next.js", "Material-UI", "TypeScript", "Node.js", "Full-Stack Development", "React.js", "Back-End Web Development", "React Native"],
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-4">
      {EXPERIENCES.map((exp) => (
        <div
          key={exp.role + exp.company}
          className="border border-gh-border rounded-xl p-4 sm:p-5 bg-gh-card"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div className="flex items-start gap-3">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className={`w-10 h-10 ${exp.logoRound ? "rounded-full" : "rounded-lg"} object-cover shrink-0 bg-gh-canvas-inset border border-gh-border`}
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${exp.logoBg}20`,
                    borderColor: `${exp.logoBg}40`,
                  }}
                >
                  <span className="font-bold text-xs" style={{ color: exp.logoBg }}>
                    {exp.logoText}
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-base font-semibold text-gh-text">{exp.role}</h3>
                <p className="text-sm">
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} target="_blank" className="text-gh-text-link hover:underline">
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-gh-text-link">{exp.company}</span>
                  )}
                  {exp.client && (
                    <span className="text-gh-text-muted"> &middot; {exp.client}</span>
                  )}
                </p>
                <p className="text-xs text-gh-text-muted mt-0.5">{exp.location}</p>
              </div>
            </div>
            <span className="text-xs text-gh-text-link whitespace-nowrap px-2 py-1 rounded-md self-start" style={{ background: "rgba(56,139,253,0.1)", border: "1px solid rgba(56,139,253,0.2)" }}>
              {exp.period}
            </span>
          </div>

          <ul className="space-y-1.5 mb-3">
            {exp.description.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-gh-text-muted leading-6">
                <span className="shrink-0 text-lg leading-none">&#8226;</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-[2px] text-xs font-medium rounded-full bg-gh-btn text-gh-text-muted border border-gh-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
