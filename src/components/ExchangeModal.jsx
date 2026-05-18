export default function ExchangeModal({ open = true, reward, balance = 750, onClose, onBackToShop }) {
  if (!open) return null;

  const selectedReward = reward ?? {
    title: "好きな映画を見る",
    cost: 500,
    image: "./assets/rewards/movie.png",
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-bg/78 px-4 py-6 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-gold-bright shadow-gold animate-particle-rise"
            style={{
              left: `${12 + ((index * 41) % 78)}%`,
              top: `${18 + ((index * 29) % 66)}%`,
              "--particle-x": `${index % 2 === 0 ? "-" : ""}${16 + (index % 5) * 9}px`,
              animationDelay: `${index * 80}ms`,
            }}
          />
        ))}
      </div>

      <section className="relative w-full max-w-md overflow-hidden rounded-sg-xl border border-gold/45 bg-surface/95 p-6 text-center shadow-gold sm:p-8">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute left-1/2 top-5 h-32 w-32 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />

        <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-gold bg-gold-soft text-gold shadow-gold">
          <CheckIcon />
        </div>

        <h2 className="relative mt-5 text-4xl font-black text-text">交換完了</h2>

        <div className="relative mt-6 grid grid-cols-[104px_1fr] items-center gap-4 text-left">
          <img src={selectedReward.image} alt="" className="h-28 w-28 rounded-sg object-cover shadow-soft" />
          <div>
            <p className="text-lg font-black text-text">{selectedReward.title}</p>
            <p className="mt-1 text-sm font-bold text-text-muted">{selectedReward.cost.toLocaleString()}Gを使用しました</p>
            <p className="mt-4 text-sm font-black text-text-muted">
              残高 <span className="text-3xl text-gold">{balance.toLocaleString()}G</span>
            </p>
          </div>
        </div>

        <p className="relative mt-6 text-sm font-bold text-text">よく頑張りました</p>

        <div className="relative mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-sg border border-white/15 bg-bg/40 px-5 py-3 text-sm font-black text-text transition hover:border-gold/40 hover:text-gold"
          >
            閉じる
          </button>
          <button
            type="button"
            onClick={onBackToShop}
            className="flex-1 rounded-sg bg-sg-gold px-5 py-3 text-sm font-black text-bg shadow-gold transition hover:-translate-y-0.5"
          >
            ショップへ戻る
          </button>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-12 w-12" fill="none">
      <path d="M14 24.5 21 31l14-17" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
