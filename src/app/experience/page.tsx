import PageShell from "@/components/PageShell";
import ExperienceSection from "@/components/ExperienceSection";

export default function ExperiencePage() {
  return (
    <PageShell>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">Work Experience</h2>
      <ExperienceSection />
    </PageShell>
  );
}
