import Icon from "../components/Icon.jsx";
import HistoryTable from "../components/HistoryTable.jsx";
import { activityLog, userSummary } from "../data.js";

const historyItems = [
  { id: "today-1", date: "今日 21:10", label: "英語学習 30分", amount: 120 },
  { id: "today-2", date: "昨日 19:40", label: "UI制作 60分", amount: 240 },
  { id: "today-3", date: "昨日 18:30", label: "ゲーム1時間", amount: 100 },
  { id: "today-4", date: "昨日 16:05", label: "映画と交換", amount: -500 },
  { id: "today-5", date: "一昨日 21:12", label: "少し高い夜ごはんと交換", amount: -1200 },
  ...activityLog.map((item) => ({ ...item, id: `log-${item.id}`, amount: item.amount, date: item.date })),
];

export default function HistoryView({ balance = 1250 }) {
  const earned = historyItems.filter((item) => item.amount > 0).reduce((total, item) => total + item.amount, 0);
  const spent = Math.abs(historyItems.filter((item) => item.amount < 0).reduce((total, item) => total + item.amount, 0));

  return (
    <section className="mx-auto max-w-5xl animate-fade-up">
      <div className="rounded-sg-xl border border-white/10 bg-surface/90 p-5 shadow-soft sm:p-6 lg:p-8">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">StudyGold</p>
        <h2 className="mt-3 text-3xl font-black text-text sm:text-4xl">履歴</h2>

        <div className="mt-6 flex flex-wrap gap-2 border-b border-white/10 pb-3">
          {["ゴールドの記録", "獲得履歴", "交換履歴"].map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`rounded-sg px-4 py-2 text-sm font-black transition ${
                index === 0 ? "bg-gold-soft text-gold ring-1 ring-gold/35" : "text-text-muted hover:bg-surface-raised hover:text-text"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <SummaryCard label="現在残高" value={`${balance.toLocaleString()} G`} icon="coin" strong />
          <SummaryCard label="合計獲得" value={`+${earned.toLocaleString()} G`} icon="sparkle" />
          <SummaryCard label="合計交換" value={`-${spent.toLocaleString()} G`} icon="gift" danger />
        </div>

        <div className="mt-6">
          <HistoryTable items={historyItems.slice(0, 6)} />
        </div>

        <div className="mt-5 text-center">
          <button type="button" className="rounded-sg bg-surface-soft px-8 py-3 text-sm font-black text-text transition hover:bg-gold-soft hover:text-gold">
            さらに読み込む
          </button>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ label, value, icon, strong = false, danger = false }) {
  return (
    <div className={`rounded-sg-lg border p-5 ${strong ? "border-gold/25 bg-surface-raised shadow-gold" : "border-white/10 bg-bg/35"}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-text-muted">{label}</p>
          <p className={`mt-2 text-3xl font-black ${danger ? "text-danger" : strong ? "text-text" : "text-gold"}`}>{value}</p>
        </div>
        <span className={`grid h-12 w-12 place-items-center rounded-full ${danger ? "bg-danger/15 text-danger" : "bg-gold-soft text-gold"}`}>
          <Icon name={icon} className="h-6 w-6" strokeWidth={1.9} />
        </span>
      </div>
    </div>
  );
}
