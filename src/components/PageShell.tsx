import ProfileSidebar from "@/components/ProfileSidebar";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-10 pb-6">
      <div className="flex flex-col md:flex-row gap-10">
        <ProfileSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>

      <footer className="mt-16 pt-6 border-t border-gh-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gh-text-muted pb-8">
          <div className="flex items-center gap-3">
            <span className="font-bold text-gh-text-bright text-sm">Nidhi Kumari</span>
            <span>&copy; 2026 NIDHI KUMARI. BUILT WITH PRECISION.</span>
          </div>
          <nav className="flex gap-6 uppercase tracking-wider text-[10px] font-medium">
            <a href="mailto:kumarinidhimain@gmail.com" className="hover:text-gh-text-bright" style={{ transition: "color 0.3s" }}>Contact</a>
            <a href="https://www.linkedin.com/in/nidhikumari-4/" target="_blank" className="hover:text-gh-text-bright" style={{ transition: "color 0.3s" }}>LinkedIn</a>
            <a href="https://github.com/Nidhikumari-4" target="_blank" className="hover:text-gh-text-bright" style={{ transition: "color 0.3s" }}>GitHub</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
