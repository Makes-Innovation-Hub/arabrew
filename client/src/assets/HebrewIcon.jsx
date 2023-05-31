import * as React from "react";
const HebrewIcon = ({ width = "30px", height = "30px", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    style={{
      enableBackground: "new 0 0 128 128",
    }}
    viewBox="0 0 128 128"
    width={width}
    height={height}
    {...props}
  >
    <style>{".st0{fill:#231f20}.st29{fill:#2b4a9e}"}</style>
    <path d="M66.1 14h-4.2 4.2zM66.1 114h-4.2 4.2z" className="st0" />
    <path
      d="M114 64c0 9.1-2.4 17.6-6.7 25H20.7C16.4 81.6 14 73.1 14 64s2.4-17.6 6.7-25h86.6c4.3 7.4 6.7 15.9 6.7 25z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M107.3 39H20.7C29 24.6 44.3 14.8 61.9 14h4.2c17.6.8 32.9 10.6 41.2 25zM107.3 89c-8.3 14.4-23.6 24.3-41.2 25h-4.2c-17.6-.7-32.9-10.6-41.2-25h86.6zM80.2 54.2H69l-5-8.6-5 8.6H47.8l5.6 9.8-5.6 9.8H59l5 8.6 5-8.6h11.3L74.6 64l5.6-9.8zm-2.4 1.4-4 7-4-7h8zM64 48.4l3.4 5.8h-6.7l3.3-5.8zm-13.8 7.2h8.1l-4 7-4.1-7zm0 16.8 4-7 4 7h-8zM64 79.6l-3.4-5.8h6.7L64 79.6zm4.2-7.2h-8.3L55 64l4.8-8.4h8.3L73 64l-4.8 8.4zm9.6 0h-8.1l4-7 4.1 7z"
      className="st29"
    />
  </svg>
);
export default HebrewIcon;
