export default function LanguageIcon({ letter }) {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16.5" cy="16.5" r="16.5" fill="#D9D9D9" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="20"
        fill="black"
      >
        {letter}
      </text>
    </svg>
  );
}
