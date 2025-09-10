import React, { useEffect, useState } from "react";

export default function Typing({ text = "", speed = 30, className = "" }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let idx = 0;
    setDisplay("");
    const t = setInterval(() => {
      if (idx < text.length) {
        setDisplay((d) => d + text[idx]);
        idx++;
      } else {
        clearInterval(t);
      }
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);

  return <span className={className}>{display}</span>;
}
