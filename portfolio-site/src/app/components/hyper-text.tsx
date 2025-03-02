"use client";

import { useEffect, useState } from "react";

interface HyperTextProps {
  text: string;
  duration?: number;
  className?: string;
  animateOnLoad?: boolean;
}

export function HyperText({
  text,
  duration = 100,
  className,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <div className={`flex scale-100 cursor-default overflow-hidden py-2 ${className}`}>
      {displayText.split("").map((letter, i) => (
        <span key={i} className="font-mono">
          {letter}
        </span>
      ))}
    </div>
  );
}