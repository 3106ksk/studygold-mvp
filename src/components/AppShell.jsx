import Sidebar from "./Sidebar.jsx";
import TopBalance from "./TopBalance.jsx";
import GoldParticles from "./GoldParticles.jsx";

export default function AppShell({ navItems, activeView, onNavigate, onBackToLanding, balance, todayGain, balanceFlash = false, children }) {
  return (
    <div className="min-h-screen bg-sg-page text-text">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      <div className="relative flex min-h-screen flex-col lg:flex-row">
        <Sidebar items={navItems} activeView={activeView} onNavigate={onNavigate} onBackToLanding={onBackToLanding} />
        <main className="relative flex min-w-0 flex-1 flex-col">
          <GoldParticles className="opacity-40" />
          <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-bg/65 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">StudyGold</p>
              <h1 className="text-xl font-black text-text sm:text-2xl">頑張りを、ご褒美に変える。</h1>
            </div>
            <TopBalance balance={balance} todayGain={todayGain} flash={balanceFlash} />
          </header>
          <div className="relative z-10 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
