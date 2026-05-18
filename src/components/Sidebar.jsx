import Icon from "./Icon.jsx";

export default function Sidebar({ items, activeView, onNavigate, onBackToLanding }) {
  return (
    <aside className="flex w-full flex-col gap-6 border-b border-white/10 bg-bg/80 p-4 backdrop-blur-xl lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r lg:p-6">
      <button
        type="button"
        onClick={onBackToLanding}
        className="flex items-center gap-3 text-left"
        aria-label="LPへ戻る"
      >
        <span className="grid h-11 w-11 place-items-center rounded-sg bg-sg-gold text-bg shadow-gold">
          <Icon name="sparkle" className="h-6 w-6" strokeWidth={2.2} />
        </span>
        <span>
          <span className="block text-xl font-black text-text">StudyGold</span>
          <span className="block text-xs font-bold uppercase tracking-[0.22em] text-gold">MVP Demo</span>
        </span>
      </button>

      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {items.map((item) => {
          const isActive = item.id === activeView;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`group flex min-w-fit items-center gap-3 rounded-sg px-4 py-3 text-sm font-bold transition duration-200 lg:w-full ${
                isActive
                  ? "bg-gold-soft text-gold shadow-[inset_0_0_0_1px_rgba(255,196,0,0.24)]"
                  : "text-text-dim hover:bg-white/5 hover:text-text"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" name={item.icon} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="relative mt-auto hidden overflow-hidden rounded-sg-lg border border-white/10 bg-surface p-5 shadow-soft lg:block">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl" />
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Next Milestone</p>
        <p className="mt-2 text-sm leading-6 text-text-muted">今週の目標まであと少し。共通シェル用の固定表示です。</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-soft">
          <div className="h-full w-2/3 rounded-full bg-sg-gold" />
        </div>
      </div>
    </aside>
  );
}
