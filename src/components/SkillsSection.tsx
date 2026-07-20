const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Django", "Node.js", "Express.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "AI & Agentic Systems",
    skills: ["Agentic AI Workflows", "LLM Integration", "RAG Pipelines", "Prompt Engineering", "Vector Databases", "LangChain", "OpenAI API", "Guardrails & Human-in-the-Loop Review"],
  },
  {
    title: "Databases & Integrations",
    skills: ["PostgreSQL", "MongoDB", "Drizzle", "Redis", "REST APIs", "Webhook Processing", "CRM Integrations"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, CloudWatch)", "Docker", "CI/CD Pipelines", "Grafana", "Cloudflare", "Vercel", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {SKILL_CATEGORIES.map((category) => (
        <div
          key={category.title}
          className="border border-gh-border rounded-xl p-5 bg-gh-card"
        >
          <h3 className="text-sm font-semibold text-gh-text mb-3">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#388bfd26] text-gh-text-link border border-gh-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
