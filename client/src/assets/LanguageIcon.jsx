export default function LanguageIcon({ letter }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 33 33"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16.5" fill="#D9D9D9" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="15"
        fill="black"
      >
        {letter}
      </text>
    </svg>
  );
}
