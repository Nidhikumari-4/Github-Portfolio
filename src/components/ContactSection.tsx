"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function LinkedInIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

// TODO: Replace these with your actual EmailJS credentials
// 1. Sign up at https://www.emailjs.com
// 2. Create a service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key below
const EMAILJS_SERVICE_ID = "service_s91rb9d";
const EMAILJS_TEMPLATE_ID = "template_o4kkge1";
const EMAILJS_PUBLIC_KEY = "nFsn1mm84eC4YQdrb";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Contact form */}
      <div className="border border-gh-border rounded-xl p-5 bg-gh-card">
        <h3 className="text-base font-semibold text-gh-text mb-4">Send a message</h3>
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-semibold text-gh-text mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full bg-gh-canvas-inset border border-gh-border rounded-md px-3 py-[6px] text-sm text-gh-text placeholder:text-gh-text-muted focus:outline-none focus:border-gh-text-link focus:ring-1 focus:ring-gh-text-link"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gh-text mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full bg-gh-canvas-inset border border-gh-border rounded-md px-3 py-[6px] text-sm text-gh-text placeholder:text-gh-text-muted focus:outline-none focus:border-gh-text-link focus:ring-1 focus:ring-gh-text-link"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gh-text mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-gh-canvas-inset border border-gh-border rounded-md px-3 py-[6px] text-sm text-gh-text placeholder:text-gh-text-muted focus:outline-none focus:border-gh-text-link focus:ring-1 focus:ring-gh-text-link resize-vertical"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-4 py-[6px] bg-gh-green text-white text-sm font-semibold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" && <Loader2 size={14} className="animate-spin" />}
            {status === "success" && <CheckCircle2 size={14} />}
            {status === "error" && <AlertCircle size={14} />}
            {status === "idle" && <Send size={14} />}
            {status === "idle" && "Send message"}
            {status === "sending" && "Sending..."}
            {status === "success" && "Message sent!"}
            {status === "error" && "Failed to send"}
          </button>
        </form>
      </div>

      {/* Contact info */}
      <div className="space-y-4">
        <div className="border border-gh-border rounded-xl p-5 bg-gh-card">
          <h3 className="text-base font-semibold text-gh-text mb-4">Get in touch</h3>
          <p className="text-sm text-gh-text-muted leading-6 mb-4">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gh-text-muted shrink-0" />
              <a href="mailto:kumarinidhimain@gmail.com" className="text-sm text-gh-text-link hover:underline">
                kumarinidhimain@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gh-text-muted shrink-0" />
              <a href="tel:+919832758340" className="text-sm text-gh-text-link hover:underline">
                (+91) 9832758340
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LinkedInIcon size={16} className="text-gh-text-muted shrink-0" />
              <a href="https://www.linkedin.com/in/nidhikumari-4/" target="_blank" className="text-sm text-gh-text-link hover:underline">
                linkedin.com/in/nidhikumari-4
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-gh-text-muted shrink-0" />
              <span className="text-sm text-gh-text-muted">Gurugram, Haryana, India</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
