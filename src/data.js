export const navItems = [
  { id: "dashboard", label: "ダッシュボード", icon: "dashboard" },
  { id: "rewards", label: "ご褒美", icon: "gift" },
  { id: "add", label: "追加", icon: "plus" },
  { id: "history", label: "履歴", icon: "history" },
];

export const userSummary = {
  name: "Mika",
  balance: 1250,
  todayGain: 320,
  weeklyGoal: 2000,
};

export const defaultRewards = [
  {
    id: "coffee",
    title: "コーヒー一杯",
    category: "日常の贅沢",
    cost: 100,
    image: "./assets/rewards/coffee.png",
    accent: "cream",
  },
  {
    id: "movie",
    title: "好きな映画を見る",
    category: "エンタメ",
    cost: 500,
    image: "./assets/rewards/movie.png",
    accent: "purple",
  },
  {
    id: "sneakers",
    title: "欲しかったスニーカー",
    category: "長期目標",
    cost: 10000,
    image: "./assets/rewards/sneakers.png",
    accent: "red",
  },
];

export const rewards = defaultRewards;

export const activityLog = [
  { id: 1, label: "英単語 45分", amount: 180, type: "earn", date: "今日 21:10" },
  { id: 2, label: "夜カフェで集中リセット", amount: -420, type: "spend", date: "昨日 19:20" },
  { id: 3, label: "数学演習 60分", amount: 240, type: "earn", date: "昨日 17:45" },
];
