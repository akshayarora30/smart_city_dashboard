import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex-shrink-0">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              City overview
            </h1>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
              Live
            </span>
          </div>
          <div className="text-xs text-gray-400">
            Toronto, ON · Updated just now
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 flex overflow-hidden">
          {/* Map placeholder */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-900 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🗺️</div>
                <div className="text-sm text-gray-400">
                  Map coming in Session 4
                </div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="w-56 flex-shrink-0 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-y-auto">
            <div className="p-4">
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                City metrics
              </div>
              {/* AQI widget placeholder */}
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 mb-3">
                <div className="text-xs text-gray-400 mb-1">Air Quality</div>
                <div className="text-xl font-medium text-green-500">--</div>
                <div className="text-xs text-gray-400 mt-1">Loading...</div>
              </div>
              {/* Weather widget placeholder */}
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 mb-3">
                <div className="text-xs text-gray-400 mb-1">Temperature</div>
                <div className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  --°C
                </div>
                <div className="text-xs text-gray-400 mt-1">Loading...</div>
              </div>
              {/* Traffic widget placeholder */}
              <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="text-xs text-gray-400 mb-1">Traffic</div>
                <div className="text-xl font-medium text-gray-700 dark:text-gray-300">
                  --
                </div>
                <div className="text-xs text-gray-400 mt-1">Loading...</div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile bottom nav */}
        <nav className="md:hidden flex border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          {["🗺️", "💨", "🌤️", "🚗", "📈"].map((icon, i) => (
            <button key={i} className="flex-1 py-3 text-lg">
              {icon}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
