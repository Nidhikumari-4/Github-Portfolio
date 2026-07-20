"use client";

import { useMemo } from "react";

const LEVELS = [
  "bg-gh-canvas-subtle",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function ContributionGraph() {
  const weeks = 52;
  const days = 7;

  const contributions = useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        const seed = w * 7 + d + 42;
        const rand = seededRandom(seed);
        let level: number;
        if (rand < 0.35) level = 0;
        else if (rand < 0.55) level = 1;
        else if (rand < 0.75) level = 2;
        else if (rand < 0.9) level = 3;
        else level = 4;
        week.push(level);
      }
      data.push(week);
    }
    return data;
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gh-text-muted">
          Yearly Activity
        </h2>
        <span className="text-xs text-gh-text-muted">
          Contributions in the last year
        </span>
      </div>

      <div className="border border-gh-border rounded-xl p-4 bg-gh-card overflow-x-auto">
        {/* Month labels */}
        <div className="flex mb-2 justify-between">
          {MONTHS.map((m) => (
            <span key={m} className="text-[10px] text-gh-text-muted font-medium flex-1">
              {m}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="flex justify-between">
          {contributions.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[2px] sm:gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] rounded-[2px] sm:rounded-[3px] ${LEVELS[level]} transition-transform hover:scale-150`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-gh-text-muted">
          <span>Less</span>
          {LEVELS.map((bg, i) => (
            <div key={i} className={`w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] rounded-[2px] sm:rounded-[3px] ${bg}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
