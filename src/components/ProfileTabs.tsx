"use client";

const TABS = [
  // person icon - Overview/About
  { name: "Overview", icon: "M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" },
  // briefcase icon - Experience
  { name: "Experience", icon: "M6.75 0A1.75 1.75 0 0 0 5 1.75V3H1.75A1.75 1.75 0 0 0 0 4.75v8.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H11V1.75A1.75 1.75 0 0 0 9.25 0Zm2.5 3V1.75a.25.25 0 0 0-.25-.25h-2a.25.25 0 0 0-.25.25V3ZM1.75 4.5h12.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25Z" },
  // mortar board icon - Education
  { name: "Education", icon: "M7.693 1.066a.747.747 0 0 1 .614 0l7.25 3.25a.75.75 0 0 1 0 1.368L13 6.831v3.919A2.75 2.75 0 0 1 10.25 13.5h-4.5A2.75 2.75 0 0 1 3 10.75V6.831L1.443 6.184a.75.75 0 0 1 0-1.368ZM11.5 7.5 8 8.927 4.5 7.5v3.25c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25Zm-3.5.177 5.678-2.544L8 2.566 2.322 5.133Z" },
  // star icon - Skills
  { name: "Skills", icon: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" },
  // mail icon - Contact
  { name: "Contact", icon: "M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" },
];

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <nav className="border-b border-gh-border">
      <div className="flex overflow-x-auto scrollbar-hide">
        {TABS.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.name
                ? "border-[#f78166] font-semibold text-gh-text"
                : "border-transparent text-gh-text-muted hover:text-gh-text hover:border-gh-border"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0">
              <path d={tab.icon} />
            </svg>
            {tab.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
