import { useState, useEffect } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");

    // تحديث لون الخلفية
    document.body.style.background = dark
      ? "linear-gradient(135deg, #141e30, #243b55)"
      : "linear-gradient(135deg, #74ebd5, #9face6)";

    // تحديث لون النص العام
    document.body.style.color = dark ? "#f1f1f1" : "#333";
  }, [dark]);

  const toggle = () => setDark(!dark);

  return { dark, toggle };
};
