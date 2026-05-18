import GoldParticles from "../components/GoldParticles.jsx";
import Icon from "../components/Icon.jsx";
import RewardCard from "../components/RewardCard.jsx";
import { rewards } from "../data.js";

const flow = [
  { number: "1", title: "記録する", body: "学習や努力をアプリに記録。時間や成果を見える形にします。", icon: "dashboard" },
  { number: "2", title: "貯まる", body: "記録した時間や成果がゴールドに。目標に向けて少しずつ貯まります。", icon: "sparkle" },
  { number: "3", title: "交換する", body: "貯めたゴールドを、自分で決めたご褒美と交換してしっかり休む。", icon: "gift" },
];

export default function LPView({ onNavigate }) {
  const featuredRewards = rewards.slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg px-4 py-8 text-text sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-sg-page" />
      <GoldParticles count={18} />

      <section className="relative mx-auto min-h-[600px] max-w-7xl py-8">
        <div className="absolute inset-0 overflow-hidden rounded-sg-xl border border-white/10">
          <img
            src="./assets/hero/studygold-hero-bg.png"
            alt=""
            className="h-full w-full object-cover object-center opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/78 to-bg/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg" />
        </div>
        <div className="relative max-w-3xl animate-fade-up px-0 py-10 sm:px-8 lg:px-0">
          <p className="text-3xl font-black text-gold sm:text-4xl">StudyGold</p>
          <h1 className="mt-12 max-w-3xl text-5xl font-black leading-[1.08] text-text sm:text-7xl">
            <span className="block">頑張りを、安心して</span>
            <span className="block">使える<span className="text-gold">ご褒美</span>に。</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-bold leading-9 text-text-muted">
            学習時間をゴールドに変えて、自分で決めたご褒美と交換。
          </p>

          <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["clock", "学習を記録するとゴールドが貯まる"],
              ["gift", "好きなご褒美を自分で設定できる"],
              ["sparkle", "獲得と交換の演出で気分が上がる"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 text-sm font-bold leading-6 text-text-muted">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/35 bg-gold-soft text-gold shadow-gold">
                  <Icon name={icon} className="h-6 w-6" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:max-w-[460px]">
            <button
              type="button"
              onClick={() => onNavigate?.("dashboard")}
              className="flex items-center justify-center gap-3 rounded-sg bg-sg-gold px-7 py-4 text-lg font-black text-bg shadow-gold transition hover:-translate-y-0.5"
            >
              <span>使ってみる</span>
              <Icon name="arrow" className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <p className="text-center text-xs font-bold text-text-dim">アカウント登録なしで、まずは体験できます。</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl py-10">
        <h2 className="text-center text-3xl font-black text-text">使い方はシンプル、3ステップ</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {flow.map((item) => (
            <article key={item.title} className="relative overflow-hidden rounded-sg-lg border border-white/10 bg-surface/88 p-6 shadow-soft">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sg-gold text-lg font-black text-bg">
                  {item.number}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon name={item.icon} className="h-5 w-5 text-gold" />
                    <h3 className="text-2xl font-black text-text">{item.title}</h3>
                  </div>
                  <p className="mt-3 leading-7 text-text-muted">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl border-y border-gold/15 py-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Learning Timer</p>
            <h2 className="mt-3 text-3xl font-black text-text sm:text-4xl">計測して、頑張りをゴールドに変える</h2>
            <p className="mt-4 max-w-2xl text-base font-bold leading-8 text-text-muted">
              ダッシュボードでは、開始ボタンを押すだけで学習時間を計測。終了すると経過時間に応じてゴールドが加算されます。
            </p>
          </div>
          <div className="relative overflow-hidden rounded-sg-xl border border-white/10 bg-surface/90 p-5 shadow-soft">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-black text-text-muted">計測プレビュー</p>
                <div className="mt-3 font-mono text-5xl font-black leading-none text-text sm:text-6xl">00:45:12</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:w-72">
                <div className="rounded-sg bg-sg-gold px-5 py-3 text-center text-sm font-black text-bg shadow-gold">開始する</div>
                <div className="rounded-sg border border-gold/30 bg-bg/35 px-5 py-3 text-center text-sm font-black text-gold">
                  終了して180Gを獲得
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl border-y border-gold/15 py-8">
        <h2 className="text-center text-3xl font-black text-text">
          <span className="text-gold">ご褒美ショップ</span>
        </h2>
        <p className="mt-2 text-center font-bold text-text-muted">貯めたゴールドを、あなたのご褒美に。</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredRewards.map((reward) => (
            <RewardCard key={reward.id} reward={reward} balance={1250} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
