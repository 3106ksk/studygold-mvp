const paths = {
  sparkle: (
    <>
      <path d="M12 2l1.35 5.05L18 9l-4.65 1.95L12 16l-1.35-5.05L6 9l4.65-1.95L12 2Z" />
      <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" />
      <path d="M5 15l.55 1.45L7 17l-1.45.55L5 19l-.55-1.45L3 17l1.45-.55L5 15Z" />
    </>
  ),
  dashboard: (
    <>
      <path d="M4 13.5A8 8 0 1 1 20 13.5" />
      <path d="M12 13l4-4" />
      <path d="M7 17h10" />
    </>
  ),
  gift: (
    <>
      <path d="M4 10h16v10H4V10Z" />
      <path d="M3 6h18v4H3V6Z" />
      <path d="M12 6v14" />
      <path d="M12 6C9 6 8 3 10 3c1.5 0 2 3 2 3Z" />
      <path d="M12 6c3 0 4-3 2-3-1.5 0-2 3-2 3Z" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  history: (
    <>
      <path d="M4 12a8 8 0 1 0 2.35-5.65" />
      <path d="M4 5v5h5" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  coin: (
    <>
      <path d="M12 4c4.42 0 8 1.8 8 4s-3.58 4-8 4-8-1.8-8-4 3.58-4 8-4Z" />
      <path d="M4 8v5c0 2.2 3.58 4 8 4s8-1.8 8-4V8" />
      <path d="M4 13v3c0 2.2 3.58 4 8 4s8-1.8 8-4v-3" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  trash: (
    <>
      <path d="M4 7h16" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M6 7l1 14h10l1-14" />
      <path d="M9 7V4h6v3" />
    </>
  ),
};

export default function Icon({ name, className = "", strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      className={className}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}
