"use client";
import BarChart from "@/Components/BarChart";
import Header from "@/Components/Header";
import Linechart from "@/Components/Linechart";
import RecentOrder from "@/Components/RecentOrder";
import Topcards from "@/Components/Topcards";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <Topcards />
      <Linechart />
      <div className="grid p-4 gap-4 md:grid-cols-2 grid-cols-1">
        <BarChart />
        <RecentOrder />
      </div>
    </main>
  );
}
