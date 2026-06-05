import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="flex flex-row w-dvw h-dvh gap-25">
      <Sidebar />
      <h1 className="text-black dark:text-white">Coming Soon</h1>
    </main>
  );
}
