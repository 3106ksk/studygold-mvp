import RewardCard from "../components/RewardCard.jsx";
import Icon from "../components/Icon.jsx";
import { rewards as fallbackRewards, userSummary } from "../data.js";

const categories = ["すべて", "交換可能", "日常の贅沢", "エンタメ", "リフレッシュ"];

export default function RewardsView({ balance = userSummary.balance, rewards = fallbackRewards, onAddReward, onExchange, onDeleteReward }) {
  const exchangeableCount = rewards.filter((reward) => reward.cost <= balance).length;

  return (
    <section className="mx-auto max-w-7xl animate-fade-up">
      <div className="grid gap-5 2xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-sg-xl border border-white/10 bg-surface/90 p-5 shadow-soft sm:p-6 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">StudyGold</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-text sm:text-4xl">ご褒美ショップ</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
                頑張って貯めたゴールドを、罪悪感なく楽しめるご褒美に交換できます。
              </p>
            </div>
            <button
              type="button"
              onClick={onAddReward}
              className="inline-flex items-center justify-center gap-2 rounded-sg bg-sg-gold px-5 py-3 text-sm font-black text-bg shadow-gold transition hover:-translate-y-0.5"
            >
              <Icon name="plus" className="h-4 w-4" strokeWidth={2.4} />
              <span>新しいご褒美を追加</span>
            </button>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`shrink-0 rounded-sg px-4 py-2 text-xs font-black transition ${
                  category === "すべて"
                    ? "bg-sg-gold text-bg shadow-gold"
                    : "bg-surface-raised text-text-muted hover:bg-gold-soft hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {rewards.map((reward) => (
              <RewardCard
                key={reward.id}
                reward={reward}
                balance={balance}
                onExchange={onExchange}
                onDelete={reward.isCustom ? onDeleteReward : undefined}
              />
            ))}
            <button
              type="button"
              onClick={onAddReward}
              className="min-h-[276px] rounded-sg-lg border border-dashed border-gold/35 bg-bg/30 p-6 text-center transition hover:border-gold hover:bg-gold-soft/35"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/50 text-gold">
                <Icon name="plus" className="h-7 w-7" strokeWidth={1.9} />
              </span>
              <span className="mt-5 block text-lg font-black text-text">ご褒美を追加</span>
              <span className="mt-2 block text-sm leading-6 text-text-muted">自分だけのご褒美を登録できます</span>
            </button>
          </div>
        </div>

        <aside className="grid content-start gap-4">
          <div className="overflow-hidden rounded-sg-lg border border-gold/25 bg-surface/90 p-5 shadow-gold">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-text-muted">現在の保有ゴールド</p>
                <p className="mt-2 text-4xl font-black text-text">
                  {balance.toLocaleString()} <span className="text-lg text-gold">G</span>
                </p>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-full bg-sg-gold text-bg">
                <Icon name="coin" className="h-9 w-9" strokeWidth={1.8} />
              </div>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-soft">
              <div className="h-full w-[62%] rounded-full bg-sg-gold" />
            </div>
          </div>

          <div className="rounded-sg-lg border border-white/10 bg-surface/90 p-5 shadow-soft">
            <p className="text-sm font-black text-text">交換できるご褒美</p>
            <p className="mt-3 text-3xl font-black text-gold">{exchangeableCount}件</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">今日の学習を足すと、さらに選択肢が広がります。</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
