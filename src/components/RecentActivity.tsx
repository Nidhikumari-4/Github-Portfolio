const ACTIVITIES = [
  {
    type: "commit",
    icon: "M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
    iconColor: "text-gh-text-muted",
    title: "Pushed 3 commits",
    target: "hoe-platform/main",
    details: [
      { hash: "a3c7f21", message: "feat: real-time event pipeline on Cloudflare Queues" },
      { hash: "e9b1d44", message: "fix: retry handling for failed Zoom registration events" },
    ],
    time: "2h ago",
  },
  {
    type: "pr",
    icon: "M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z",
    iconColor: "text-[#a371f7]",
    title: "Merged PR",
    target: "#32 B2B order & claims management with RBAC",
    details: [],
    time: "Yesterday",
  },
  {
    type: "commit",
    icon: "M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z",
    iconColor: "text-gh-text-muted",
    title: "Pushed 2 commits",
    target: "hoe-platform/main",
    details: [
      { hash: "b58e2c7", message: "perf: cut DB round-trips by 50% on order queries" },
      { hash: "c14f9a3", message: "feat: filtered CSV exports for orders and claims" },
    ],
    time: "3 days ago",
  },
  {
    type: "star",
    icon: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z",
    iconColor: "text-gh-star",
    title: "Starred",
    target: "langchain-ai/langchain",
    details: [],
    time: "1 week ago",
  },
  {
    type: "issue",
    icon: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z",
    iconColor: "text-gh-green-bright",
    title: "Opened Issue",
    target: "#28 Fix data isolation in multi-account webinar setup",
    details: [],
    time: "2 weeks ago",
  },
];

export default function RecentActivity() {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted mb-4">
        Recent Activity
      </h2>
      <div className="space-y-0">
        {ACTIVITIES.map((activity, i) => (
          <div
            key={i}
            className="flex items-start gap-4 py-4 border-b border-gh-border/50 last:border-0"
          >
            <div className={`mt-0.5 ${activity.iconColor}`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d={activity.icon} fillRule="evenodd" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-gh-text">
                <span className="font-semibold text-gh-text-bright">{activity.title}</span>
                {activity.target && (
                  <>
                    {" "}
                    {activity.type === "commit" ? "to " : ""}
                    <span className="text-gh-text-link hover:underline cursor-pointer">
                      {activity.target}
                    </span>
                  </>
                )}
              </p>

              {activity.details.length > 0 && (
                <div className="mt-2 space-y-1">
                  {activity.details.map((detail) => (
                    <div key={detail.hash} className="flex items-center gap-2 text-xs">
                      <code className="px-1.5 py-0.5 bg-gh-btn rounded text-gh-text-link font-mono">
                        {detail.hash}
                      </code>
                      <span className="text-gh-text-muted truncate">{detail.message}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <span className="text-xs text-gh-text-muted whitespace-nowrap shrink-0">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
