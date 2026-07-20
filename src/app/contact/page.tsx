import PageShell from "@/components/PageShell";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <PageShell>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">Get In Touch</h2>
      <ContactSection />
    </PageShell>
  );
}
