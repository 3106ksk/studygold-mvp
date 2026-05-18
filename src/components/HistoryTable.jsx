export default function HistoryTable({ items }) {
  return (
    <div className="overflow-hidden rounded-sg-lg border border-white/10 bg-surface/90 shadow-soft">
      <div className="grid grid-cols-[1fr_1fr_92px_98px] gap-3 border-b border-white/10 px-4 py-3 text-xs font-black text-text-dim sm:grid-cols-[1fr_1.1fr_88px_110px]">
        <span>日時</span>
        <span>内容</span>
        <span>区分</span>
        <span className="text-right">変動</span>
      </div>
      <div className="divide-y divide-white/10">
        {items.map((item) => {
          const earned = item.amount > 0;

          return (
            <div key={item.id} className="grid grid-cols-[1fr_1fr_92px_98px] gap-3 px-4 py-4 text-sm sm:grid-cols-[1fr_1.1fr_88px_110px]">
              <span className="font-bold text-text-muted">{item.date}</span>
              <span className="font-black text-text">{item.label}</span>
              <span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-black ${earned ? "bg-gold-soft text-gold" : "bg-danger/15 text-danger"}`}>
                  {earned ? "獲得" : "交換"}
                </span>
              </span>
              <span className={`text-right font-black ${earned ? "text-gold" : "text-danger"}`}>
                {earned ? "+" : ""}
                {item.amount.toLocaleString()}G
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
