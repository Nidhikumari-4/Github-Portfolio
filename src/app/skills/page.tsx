import PageShell from "@/components/PageShell";
import SkillsSection from "@/components/SkillsSection";

export default function SkillsPage() {
  return (
    <PageShell>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">Skills & Technologies</h2>
      <SkillsSection />
    </PageShell>
  );
}
