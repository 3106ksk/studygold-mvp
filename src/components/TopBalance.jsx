import Icon from "./Icon.jsx";

export default function TopBalance({ balance, todayGain, flash = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full border border-gold/30 bg-surface-raised/80 px-4 py-2 shadow-gold backdrop-blur transition duration-300 ${
        flash ? "scale-105 border-gold bg-gold-soft" : ""
      }`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-sg-gold text-bg">
        <Icon name="coin" className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="leading-tight">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">Gold Balance</div>
        <div className="text-lg font-black text-text">{balance.toLocaleString()} GP</div>
      </div>
      <div className="hidden rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold sm:block">
        今日 +{todayGain}
      </div>
    </div>
  );
}
