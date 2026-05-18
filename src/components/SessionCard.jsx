import { useEffect, useMemo, useState } from "react";

export default function SessionCard({ initialSeconds = 0, onComplete }) {
  const [elapsedSeconds, setElapsedSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return undefined;

    const startedAt = Date.now() - elapsedSeconds * 1000;
    const intervalId = window.setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [elapsedSeconds, isRunning]);

  const earnedGold = useMemo(() => Math.floor(elapsedSeconds / 15), [elapsedSeconds]);
  const displayTime = formatElapsedTime(elapsedSeconds);

  const handleComplete = () => {
    onComplete?.(earnedGold, elapsedSeconds);
    setElapsedSeconds(0);
    setIsRunning(false);
  };

  return (
    <article className="relative overflow-hidden rounded-sg-lg border border-white/10 bg-surface-raised p-5 shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,196,0,0.12),transparent_34%)]" />
      <div className="relative">
        <h3 className="font-mono text-6xl font-black leading-none text-text sm:text-7xl">{displayTime}</h3>
      </div>

      <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setIsRunning((current) => !current)}
          className="flex items-center justify-center gap-2 rounded-sg bg-sg-gold px-5 py-3 text-sm font-black text-bg shadow-gold transition hover:-translate-y-0.5"
        >
          <span>{isRunning ? "一時停止" : elapsedSeconds > 0 ? "再開する" : "開始する"}</span>
        </button>
        <button
          type="button"
          onClick={handleComplete}
          disabled={earnedGold === 0}
          className="rounded-sg border border-white/15 bg-surface px-5 py-3 text-sm font-black text-text-muted transition hover:border-gold/35 hover:text-gold disabled:opacity-45 disabled:hover:border-white/15 disabled:hover:text-text-muted"
        >
          終了して{earnedGold}Gを獲得
        </button>
      </div>
    </article>
  );
}

function formatElapsedTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}
