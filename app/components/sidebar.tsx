"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", icon: "🗺️", href: "/" },
  { label: "Air Quality", icon: "💨", href: "/air" },
  { label: "Weather", icon: "🌤️", href: "/weather" },
  { label: "Traffic", icon: "🚗", href: "/traffic" },
  { label: "Trends", icon: "📈", href: "/trends" },
  { label: "Alerts", icon: "🔔", href: "/alerts" },
];

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <aside className="hidden md:flex flex-col w-52 min-h-screen border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-gray-200 dark:border-gray-800">
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          UrbanPulse
        </div>
        <div className="text-xs text-gray-400 tracking-wide mt-0.5">
          Smart City Dashboard
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        <div className="px-2 mb-2 text-xs text-gray-400 tracking-widest uppercase">
          Monitor
        </div>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Theme toggle + city */}
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
          </button>
        )}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Toronto, ON
          </span>
        </div>
      </div>
    </aside>
  );
}
