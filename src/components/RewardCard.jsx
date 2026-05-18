import Icon from "./Icon.jsx";

const accentClasses = {
  cream: "bg-cream/14 text-cream border-cream/25",
  purple: "bg-purple/14 text-purple border-purple/25",
  teal: "bg-teal/14 text-teal border-teal/25",
  red: "bg-red/14 text-red border-red/25",
  gold: "bg-gold-soft text-gold border-gold/25",
};

export default function RewardCard({ reward, balance = 0, compact = false, onExchange, onDelete }) {
  const affordable = balance >= reward.cost;

  return (
    <article className="group overflow-hidden rounded-sg-lg border border-white/10 bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold">
      <div className="relative aspect-[2.25/1] overflow-hidden bg-surface-soft">
        <img
          src={reward.image}
          alt=""
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${affordable ? "" : "saturate-[0.65]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/72 via-transparent to-transparent" />
        <span className={`absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-bold ${accentClasses[reward.accent] ?? accentClasses.gold}`}>
          {reward.category}
        </span>
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(reward.id)}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-bg/75 text-text-muted backdrop-blur transition hover:border-red/40 hover:bg-red/20 hover:text-red"
            aria-label={`${reward.title}を削除`}
          >
            <Icon name="trash" className="h-4 w-4" strokeWidth={2} />
          </button>
        )}
      </div>

      <div className={compact ? "p-4" : "p-5"}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-lg font-black leading-snug text-text">{reward.title}</h3>
          <span className="shrink-0 text-lg font-black text-gold">{reward.cost.toLocaleString()} G</span>
        </div>
        <div className={`mt-5 grid gap-2 ${onDelete ? "sm:grid-cols-[1fr_auto]" : ""}`}>
          <button
            type="button"
            onClick={() => onExchange?.(reward)}
            className={`flex w-full items-center justify-center gap-2 rounded-sg px-4 py-3 text-sm font-black transition ${
              affordable
                ? "border border-gold/45 text-gold hover:bg-gold hover:text-bg hover:shadow-gold"
                : "cursor-not-allowed bg-surface-soft text-text-dim"
            }`}
            disabled={!affordable}
          >
            <span>{affordable ? "交換する" : "GP不足"}</span>
            {affordable && <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />}
          </button>
          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(reward.id)}
              className="inline-flex items-center justify-center gap-2 rounded-sg border border-red/30 px-4 py-3 text-sm font-black text-red transition hover:bg-red/15"
              aria-label={`${reward.title}を削除`}
            >
              <Icon name="trash" className="h-4 w-4" strokeWidth={2} />
              <span>削除</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
