import Image from "next/image";
import { MapPin, Building2, Mail } from "lucide-react";

function GitHubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export default function ProfileSidebar() {
  return (
    <aside className="w-full md:w-[260px] shrink-0">
      {/* Avatar with status */}
      <div className="mb-4 relative w-fit mx-auto md:mx-0">
        <div className="w-[200px] h-[200px] rounded-2xl bg-gh-canvas-subtle border border-gh-border overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Nidhi Kumari"
            width={200}
            height={200}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Status badge */}
        <div className="absolute -bottom-2 right-2 flex items-center gap-1.5 bg-gh-canvas-subtle border border-gh-border rounded-full px-2.5 py-1">
          <span className="w-2 h-2 rounded-full bg-gh-green-bright" />
          <span className="text-[10px] text-gh-text-muted font-medium">Building</span>
        </div>
      </div>

      {/* Name & Title */}
      <div className="mb-1 mt-4">
        <h1 className="text-xl font-bold text-gh-text-bright leading-tight">
          Nidhi Kumari
        </h1>
        <p className="text-sm text-gh-text-muted mt-0.5">I turn caffeine into features.</p>
      </div>

      {/* Bio */}
      <p className="text-[13px] text-gh-text leading-relaxed mb-4">
        Full-stack engineer building event pipelines &amp; B2B platforms at House of Edtech. Production AI with LLMs, RAG &amp; LangChain.
      </p>

      {/* Resume button */}
      <a
        href="https://drive.google.com/file/d/1K7-3hk8Fzxph2Os-5I7S5yHM122Oam61/view"
        target="_blank"
        className="w-full mb-5 px-4 py-[7px] text-sm font-semibold text-gh-text-bright bg-gh-btn border border-gh-border rounded-lg hover:bg-gh-btn-hover hover:border-gh-text-muted/30 transition-all text-center block"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5 -mt-0.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
        Resume
      </a>

      {/* Info */}
      <div className="flex items-center gap-3 text-[13px] text-gh-text-muted mb-3">
        <MapPin size={16} className="shrink-0" />
        <span>Gurugram, India</span>
      </div>
      <div className="flex items-center gap-3 text-[13px] text-gh-text-muted mb-3">
        <Building2 size={16} className="shrink-0" />
        <span>House of Edtech</span>
      </div>
      <div className="flex items-center gap-3 text-[13px] mb-3">
        <LinkedInIcon size={16} className="shrink-0 text-gh-text-muted" />
        <a href="https://www.linkedin.com/in/nidhikumari-4/" target="_blank" className="text-gh-text-link hover:underline">
          nidhikumari-4
        </a>
      </div>
      <div className="flex items-center gap-3 text-[13px] mb-3">
        <GitHubIcon size={16} className="shrink-0 text-gh-text-muted" />
        <a href="https://github.com/Nidhikumari-4" target="_blank" className="text-gh-text-link hover:underline">
          Nidhikumari-4
        </a>
      </div>
      <div className="flex items-center gap-3 text-[13px]">
        <Mail size={16} className="shrink-0 text-gh-text-muted" />
        <a href="mailto:kumarinidhimain@gmail.com" className="text-gh-text-link hover:underline">
          kumarinidhimain@gmail.com
        </a>
      </div>
    </aside>
  );
}
