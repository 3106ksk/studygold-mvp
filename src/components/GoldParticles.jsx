const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  delay: `${(index % 6) * 0.18}s`,
  duration: `${1.4 + (index % 5) * 0.16}s`,
  x: `${((index * 29) % 58) - 29}px`,
  size: `${4 + (index % 4)}px`,
}));

export default function GoldParticles({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute bottom-5 rounded-full bg-gold shadow-gold animate-particle-rise"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            "--particle-x": particle.x,
          }}
        />
      ))}
    </div>
  );
}
