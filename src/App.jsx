import { useEffect, useState } from "react";
import AppShell from "./components/AppShell.jsx";
import ExchangeModal from "./components/ExchangeModal.jsx";
import LPView from "./views/LPView.jsx";
import DashboardView from "./views/DashboardView.jsx";
import RewardsView from "./views/RewardsView.jsx";
import AddRewardView from "./views/AddRewardView.jsx";
import HistoryView from "./views/HistoryView.jsx";
import { defaultRewards, navItems, userSummary } from "./data.js";

const initialBalance = 2000;
const initialTodayGain = userSummary.todayGain;
const minimumDemoBalance = 2000;

function readStoredNumber(key, fallback) {
  const storedValue = window.localStorage.getItem(key);
  const parsedValue = Number(storedValue);
  return Number.isFinite(parsedValue) ? parsedValue : fallback;
}

function readDemoBalance() {
  return Math.max(readStoredNumber("studygold:balance", initialBalance), minimumDemoBalance);
}

function readCustomRewards() {
  const storedValue = window.localStorage.getItem("studygold:customRewards");
  if (storedValue === null) return [];

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue.filter((reward) => reward.id !== "custom-lounge") : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [balance, setBalance] = useState(readDemoBalance);
  const [todayGain, setTodayGain] = useState(() => readStoredNumber("studygold:todayGain", initialTodayGain));
  const [exchangeReward, setExchangeReward] = useState(null);
  const [balanceFlash, setBalanceFlash] = useState(false);
  const [customRewards, setCustomRewards] = useState(readCustomRewards);
  const allRewards = [...defaultRewards, ...customRewards];

  useEffect(() => {
    window.localStorage.setItem("studygold:balance", String(balance));
  }, [balance]);

  useEffect(() => {
    window.localStorage.setItem("studygold:todayGain", String(todayGain));
  }, [todayGain]);

  useEffect(() => {
    window.localStorage.setItem("studygold:customRewards", JSON.stringify(customRewards));
  }, [customRewards]);

  const navigate = (view) => {
    setHasStarted(true);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToLanding = () => {
    setHasStarted(false);
    setActiveView("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCompleteSession = (earnedGold = 0) => {
    if (earnedGold <= 0) return;
    setBalance((current) => current + earnedGold);
    setTodayGain((current) => current + earnedGold);
    triggerBalanceFlash();
  };

  const handleExchange = (reward) => {
    if (!reward || reward.cost > balance) return;
    setBalance((current) => current - reward.cost);
    setExchangeReward(reward);
    triggerBalanceFlash();
  };

  const handleAddReward = (reward) => {
    setCustomRewards((current) => [
      {
        ...reward,
        id: `custom-${Date.now()}`,
        accent: reward.accent || "cream",
        image: reward.image || "./assets/rewards/lounge.png",
        isCustom: true,
      },
      ...current,
    ]);
    navigate("rewards");
  };

  const handleDeleteReward = (rewardId) => {
    setCustomRewards((current) => current.filter((reward) => reward.id !== rewardId));
  };

  const triggerBalanceFlash = () => {
    setBalanceFlash(true);
    window.setTimeout(() => setBalanceFlash(false), 900);
  };

  const view = {
    dashboard: <DashboardView balance={balance} todayGain={todayGain} rewards={allRewards} onCompleteSession={handleCompleteSession} />,
    rewards: (
      <RewardsView
        balance={balance}
        rewards={allRewards}
        onAddReward={() => navigate("add")}
        onExchange={handleExchange}
        onDeleteReward={handleDeleteReward}
      />
    ),
    add: <AddRewardView rewards={customRewards} onCreateReward={handleAddReward} onDeleteReward={handleDeleteReward} />,
    history: <HistoryView balance={balance} />,
  }[activeView];

  if (!hasStarted) {
    return <LPView onNavigate={navigate} />;
  }

  return (
    <AppShell
      navItems={navItems}
      activeView={activeView}
      onNavigate={navigate}
      onBackToLanding={backToLanding}
      balance={balance}
      todayGain={todayGain}
      balanceFlash={balanceFlash}
    >
      {view}
      <ExchangeModal
        open={Boolean(exchangeReward)}
        reward={exchangeReward}
        balance={balance}
        onClose={() => setExchangeReward(null)}
        onBackToShop={() => {
          setExchangeReward(null);
          navigate("rewards");
        }}
      />
    </AppShell>
  );
}
