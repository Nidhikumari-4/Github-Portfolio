import { CheckCircle2 } from "lucide-react";

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "Asansol Engineering College",
    location: "Asansol, West Bengal",
    period: "Jul 2020 — Jun 2024",
    description: "Graduated with 9.19 CGPA. Focused on software engineering, data structures, algorithms, and modern application development.",
    achievements: ["9.19 CGPA"],
  },
  {
    degree: "Junior and Senior Secondary",
    school: "Green Point Academy School, Kultora",
    location: "Kultora, West Bengal",
    period: "Apr 2008 — Mar 2020",
    description: null,
    achievements: [],
  },
];

export default function EducationSection() {
  return (
    <div className="space-y-6">
      {EDUCATION.map((edu) => (
        <div
          key={edu.degree}
          className="border border-gh-border rounded-xl p-5 bg-gh-card"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="text-base font-semibold text-gh-text">{edu.degree}</h3>
              <p className="text-sm text-gh-text-link">{edu.school}</p>
              <p className="text-xs text-gh-text-muted mt-0.5">{edu.location}</p>
            </div>
            <span className="text-xs text-gh-text-muted whitespace-nowrap bg-gh-btn px-2 py-1 rounded-md border border-gh-border self-start">
              {edu.period}
            </span>
          </div>

          {edu.description && (
            <p className="text-sm text-gh-text-muted leading-6 mb-3">{edu.description}</p>
          )}

          {edu.achievements.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {edu.achievements.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1 px-2 py-[2px] text-xs font-medium rounded-full bg-[#23863626] text-[#3fb950]"
                >
                  <CheckCircle2 size={12} />
                  {a}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
