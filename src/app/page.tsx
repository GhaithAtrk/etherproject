import Header from "@/components/Header";
import LastBlock from "@/components/LastBlock";
import USDTBalance from "@/components/USDTBalance";

export default function Home() {
  return (
    <div className="h-screen bg-slate-600 p-20 flex flex-col gap-36 items-center">
      <Header />
      <LastBlock />
      <USDTBalance />
    </div>
  );
}
