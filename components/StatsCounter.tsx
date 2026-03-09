"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { target: 5,     suffix: " Million+", label: "Lives Touched" },
  { target: 24,    suffix: "+",         label: "Years Experience" },
  { target: 5000,  suffix: "+",         label: "Cancer Cases Treated" },
  { target: 20,    suffix: "+",         label: "Expert Doctors" },
  { target: 15,    suffix: "+",         label: "Awards Won" },
  { target: 50000, suffix: "+",         label: "Cancer Deaths Averted" },
];

function StatItem({
  target,
  suffix,
  label,
  triggered,
  borderRight,
}: {
  target: number;
  suffix: string;
  label: string;
  triggered: boolean;
  borderRight: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [triggered, target]);

  return (
    <div
      className="text-center px-4 py-10"
      style={{ borderRight: borderRight ? "1px solid rgba(255,255,255,0.12)" : "none" }}
    >
      <p className="text-4xl font-extrabold leading-none" style={{ color: "#F4A118" }}>
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="text-white/65 text-sm mt-2 font-medium leading-snug">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: "#0D3B38" }} className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {statsData.map((s, i) => (
            <StatItem
              key={i}
              {...s}
              triggered={triggered}
              borderRight={i < statsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
