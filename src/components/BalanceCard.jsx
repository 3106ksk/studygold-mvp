export default function BalanceCard({ balance = 1250, gain = 820, goal = 2000, compact = false }) {
  const progress = Math.min(100, Math.round((gain / goal) * 100));

  return (
    <article
      className={`relative overflow-hidden rounded-sg-lg border border-white/10 bg-surface-raised shadow-soft ${
        compact ? "p-5" : "p-5 sm:p-6"
      }`}
    >
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute right-5 top-5 flex h-20 w-24 items-end justify-center">
        <div className="absolute h-16 w-16 rounded-full bg-gold/20 blur-xl" />
        <div className="relative h-11 w-11 rounded-full border-4 border-gold-deep bg-sg-gold shadow-gold" />
        <div className="relative -ml-3 h-9 w-9 rounded-full border-4 border-gold-deep bg-sg-gold" />
        <div className="relative -ml-2 h-7 w-7 rounded-full border-4 border-gold-deep bg-sg-gold" />
      </div>

      <p className="text-xs font-black text-text-muted">現在の保有ゴールド</p>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-5xl font-black leading-none text-text sm:text-6xl">{balance.toLocaleString()}</span>
        <span className="pb-1 text-2xl font-black text-gold">G</span>
      </div>
      <div className="mt-5 flex items-center justify-between text-xs font-bold text-text-muted">
        <span>
          今週の獲得: {gain.toLocaleString()}G / 目標: {goal.toLocaleString()}G
        </span>
        <span className="text-text">{progress}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-soft">
        <div className="h-full rounded-full bg-sg-gold shadow-gold" style={{ width: `${progress}%` }} />
      </div>
    </article>
  );
}
