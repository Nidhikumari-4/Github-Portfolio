"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Monitor, Menu, X } from "lucide-react";

const TABS = [
  { label: "Overview", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

type Theme = "dark" | "light" | "system";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function applyTheme(t: Theme) {
    if (t === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute("data-theme", t);
    }
  }

  function changeTheme(t: Theme) {
    setTheme(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
    setDropdownOpen(false);
  }

  const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gh-header border-b border-gh-border px-6 py-3.5 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto flex items-center gap-4 sm:gap-6">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gh-text-muted hover:text-gh-text-bright"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link href="/" className="text-gh-text-bright font-bold text-lg tracking-tight hover:opacity-80 shrink-0" style={{ transition: "opacity 0.3s" }}>
          Nidhi Kumari
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[13px] text-gh-text-muted">
          {TABS.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`px-3 py-1.5 rounded-md ${
                  isActive
                    ? "text-gh-text-bright bg-gh-btn"
                    : "hover:text-gh-text-bright hover:bg-gh-btn"
                }`}
                style={{ transition: "background-color 0.3s, color 0.3s" }}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer ring-2 ring-gh-green-bright/50"
          >
            <Image src="/profile.jpeg" alt="Nidhi Kumari" width={32} height={32} className="object-cover w-full h-full" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gh-canvas-subtle border border-gh-border rounded-xl shadow-xl overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-gh-border">
                <p className="text-sm font-semibold text-gh-text-bright">Nidhi Kumari</p>
                <p className="text-xs text-gh-text-muted">kumarinidhimain@gmail.com</p>
              </div>
              <div className="p-2">
                <p className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gh-text-muted">Theme</p>
                {themeOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => changeTheme(opt.value)}
                      className={`w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-[13px] ${
                        theme === opt.value
                          ? "text-gh-text-link bg-gh-sidebar-active"
                          : "text-gh-text-muted hover:text-gh-text-bright hover:bg-gh-btn"
                      }`}
                      style={{ transition: "background-color 0.3s, color 0.3s" }}
                    >
                      <Icon size={14} />
                      {opt.label}
                      {theme === opt.value && (
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="ml-auto">
                          <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-3 pt-3 border-t border-gh-border flex flex-col gap-1">
          {TABS.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`px-3 py-2 rounded-md text-sm ${
                  isActive
                    ? "text-gh-text-bright bg-gh-btn font-semibold"
                    : "text-gh-text-muted hover:text-gh-text-bright hover:bg-gh-btn"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
