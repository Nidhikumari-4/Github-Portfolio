import PageShell from "@/components/PageShell";
import EducationSection from "@/components/EducationSection";

export default function EducationPage() {
  return (
    <PageShell>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">Education</h2>
      <EducationSection />
    </PageShell>
  );
}
