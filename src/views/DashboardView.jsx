import BalanceCard from "../components/BalanceCard.jsx";
import SessionCard from "../components/SessionCard.jsx";
import Icon from "../components/Icon.jsx";
import { activityLog, rewards as fallbackRewards, userSummary } from "../data.js";

export default function DashboardView({ balance = 1250, todayGain = userSummary.todayGain, rewards = fallbackRewards, onCompleteSession }) {
  const nextReward = rewards.find((reward) => reward.cost > balance) ?? rewards[1];

  return (
    <main className="mx-auto grid max-w-6xl gap-5 animate-fade-up">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black text-gold">ダッシュボード</p>
          <h1 className="mt-2 text-3xl font-black text-text sm:text-4xl">今日の頑張りを記録</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="通知"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-surface text-gold transition hover:border-gold/35"
          >
            <Icon name="bell" className="h-5 w-5" />
          </button>
          <span className="rounded-sg bg-sg-gold px-5 py-2 text-sm font-black text-bg shadow-gold">{balance.toLocaleString()} G</span>
        </div>
      </header>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-5">
          <BalanceCard balance={balance} gain={820} goal={2000} />
          <SessionCard onComplete={onCompleteSession} />
          <RecentLog />
        </div>

        <aside className="grid gap-5">
          <NextReward reward={nextReward} balance={balance} />
          <article className="relative overflow-hidden rounded-sg-lg border border-gold/20 bg-surface p-5 shadow-soft">
            <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-gold/15 blur-2xl" />
            <p className="text-xs font-black text-text-muted">今日の獲得</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-black text-gold">+{todayGain}</span>
              <span className="pb-1 text-lg font-black text-gold">G</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-muted">次の記録で、映画のご褒美までさらに近づきます。</p>
          </article>
        </aside>
      </section>
    </main>
  );
}

function NextReward({ reward, balance }) {
  const progress = Math.min(100, Math.round((balance / reward.cost) * 100));

  return (
    <article className="rounded-sg-lg border border-white/10 bg-surface-raised p-5 shadow-soft">
      <p className="text-xs font-black text-text-muted">もうすぐ交換できるご褒美</p>
      <div className="mt-4 overflow-hidden rounded-sg bg-black">
        <img src={reward.image} alt="" className="h-44 w-full object-cover" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full border border-purple/25 bg-purple/15 px-3 py-1 text-xs font-black text-purple">
            {reward.category}
          </span>
          <h2 className="mt-3 text-2xl font-black text-text">{reward.title}</h2>
        </div>
        <span className="shrink-0 text-xl font-black text-gold">{reward.cost.toLocaleString()} G</span>
      </div>
      <p className="mt-4 text-xs font-bold text-text-muted">今週のご褒美達成度</p>
      <div className="mt-2 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-soft">
          <div className="h-full rounded-full bg-sg-gold shadow-gold" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs font-black text-text">{progress}%</span>
      </div>
    </article>
  );
}

function RecentLog() {
  return (
    <article className="rounded-sg-lg border border-white/10 bg-surface-raised p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-text">最近の記録</h2>
        <button type="button" className="text-xs font-black text-text-muted transition hover:text-gold">
          すべて見る
        </button>
      </div>
      <div className="mt-4 divide-y divide-white/5">
        {activityLog.map((item) => (
          <div key={item.id} className="grid grid-cols-[88px_1fr_auto] items-center gap-3 py-3 text-sm">
            <span className="font-bold text-text-muted">{item.date}</span>
            <span className="font-bold text-text">{item.label}</span>
            <span className={`font-black ${item.amount > 0 ? "text-gold" : "text-danger"}`}>
              {item.amount > 0 ? "+" : ""}
              {item.amount}G
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
