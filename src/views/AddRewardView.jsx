import { useMemo, useState } from "react";
import Icon from "../components/Icon.jsx";

const previewReward = {
  title: "ホテルラウンジで作業する",
  cost: 1800,
  category: "日常の贅沢",
  image: "./assets/rewards/lounge.png",
  description: "今週の学習目標を達成できたら、静かなラウンジでゆっくり過ごす。",
  accent: "cream",
};

const imageOptions = [
  { label: "ラウンジ", value: "./assets/rewards/lounge.png", accent: "cream" },
  { label: "カフェ", value: "./assets/rewards/coffee.png", accent: "cream" },
  { label: "映画", value: "./assets/rewards/movie.png", accent: "purple" },
  { label: "ゲーム", value: "./assets/rewards/game.png", accent: "teal" },
  { label: "食事", value: "./assets/rewards/dinner.png", accent: "cream" },
];

export default function AddRewardView({ mode = "add", rewards = [], onCreateReward, onDeleteReward }) {
  const isEdit = mode === "edit";
  const [title, setTitle] = useState(previewReward.title);
  const [cost, setCost] = useState(String(previewReward.cost));
  const [category, setCategory] = useState(previewReward.category);
  const [description, setDescription] = useState(previewReward.description);
  const [image, setImage] = useState(previewReward.image);
  const selectedImage = useMemo(() => imageOptions.find((option) => option.value === image) ?? imageOptions[0], [image]);
  const preview = {
    title: title.trim() || previewReward.title,
    cost: Number(cost) || previewReward.cost,
    category,
    image,
    description: description.trim() || previewReward.description,
    accent: selectedImage.accent,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateReward?.(preview);
  };

  return (
    <section className="mx-auto max-w-6xl animate-fade-up">
      <div className="rounded-sg-xl border border-white/10 bg-surface/90 p-5 shadow-soft sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <form className="min-w-0" onSubmit={handleSubmit}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">StudyGold</p>
            <h2 className="mt-3 text-3xl font-black text-text sm:text-4xl">{isEdit ? "ご褒美を編集" : "ご褒美を追加"}</h2>
            <p className="mt-3 text-sm leading-7 text-text-muted">デモ体験用に、追加したご褒美はブラウザに保存されます。不要になったものは削除できます。</p>

            <div className="mt-6 grid gap-4">
              <Field label="ご褒美名">
                <input
                  className="w-full rounded-sg border border-white/10 bg-bg/55 px-4 py-3 text-sm font-bold text-text outline-none transition placeholder:text-text-dim focus:border-gold/60"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </Field>
              <Field label="必要ゴールド">
                <input
                  className="w-full rounded-sg border border-white/10 bg-bg/55 px-4 py-3 text-sm font-bold text-text outline-none transition focus:border-gold/60"
                  value={cost}
                  onChange={(event) => setCost(event.target.value.replace(/[^\d]/g, ""))}
                  inputMode="numeric"
                  required
                />
              </Field>
              <Field label="カテゴリ">
                <select
                  className="w-full rounded-sg border border-white/10 bg-bg/55 px-4 py-3 text-sm font-bold text-text outline-none transition focus:border-gold/60"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option>日常の贅沢</option>
                  <option>エンタメ</option>
                  <option>リフレッシュ</option>
                  <option>長期目標</option>
                  <option>特別</option>
                </select>
              </Field>
              <Field label="説明">
                <textarea
                  className="min-h-28 w-full resize-none rounded-sg border border-white/10 bg-bg/55 px-4 py-3 text-sm font-bold leading-7 text-text outline-none transition focus:border-gold/60"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Field>
              <Field label="表示画像">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {imageOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setImage(option.value)}
                      className={`overflow-hidden rounded-sg border text-left transition ${
                        image === option.value ? "border-gold shadow-gold" : "border-white/10 hover:border-gold/45"
                      }`}
                    >
                      <img src={option.value} alt="" className="aspect-[4/3] w-full object-cover" />
                      <span className="block px-3 py-2 text-xs font-black text-text">{option.label}</span>
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" className="rounded-sg bg-surface-soft px-5 py-3 text-sm font-black text-text-muted transition hover:text-text">
                下書き保存
              </button>
              <button type="submit" className="rounded-sg bg-sg-gold px-5 py-3 text-sm font-black text-bg shadow-gold transition hover:-translate-y-0.5">
                {isEdit ? "変更を保存" : "ご褒美を追加"}
              </button>
            </div>
          </form>

          <aside className="rounded-sg-lg border border-white/10 bg-surface-raised/70 p-4 shadow-soft">
            <p className="text-sm font-black text-text">プレビュー</p>
            <div className="mt-4 overflow-hidden rounded-sg border border-white/10 bg-surface">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={preview.image} alt="" className="h-full w-full object-cover" />
                <span className="absolute bottom-3 left-3 rounded-full bg-cream px-3 py-1 text-xs font-black text-bg">{preview.category}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-black leading-snug text-text">{preview.title}</h3>
                <p className="mt-2 text-2xl font-black text-gold">{preview.cost.toLocaleString()} G</p>
                <p className="mt-3 text-sm leading-7 text-text-muted">{preview.description}</p>
              </div>
            </div>

            <div className="mt-5 rounded-sg border border-white/10 bg-bg/35 p-4">
              <p className="text-sm font-black text-text">追加済みのご褒美</p>
              <div className="mt-3 grid gap-2">
                {rewards.map((reward) => (
                  <div key={reward.id} className="flex items-center gap-3 rounded-sg bg-surface/70 p-2">
                    <img src={reward.image} alt="" className="h-12 w-14 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-black text-text">{reward.title}</p>
                      <p className="text-xs font-bold text-gold">{Number(reward.cost).toLocaleString()} G</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onDeleteReward?.(reward.id)}
                      className="grid h-9 w-9 place-items-center rounded-full text-text-muted transition hover:bg-red/20 hover:text-red"
                      aria-label={`${reward.title}を削除`}
                    >
                      <Icon name="trash" className="h-4 w-4" strokeWidth={2} />
                    </button>
                  </div>
                ))}
                {rewards.length === 0 && <p className="text-sm text-text-muted">追加済みのご褒美はありません。</p>}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-text">{label}</span>
      {children}
    </label>
  );
}
