"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
interface ThemeProviderProps {
  children: ReactNode;
}
interface ThemeContextType  {
  isDarkMode:boolean,
  themeToggle:()=>void
}
export const ThemeContext = createContext<ThemeContextType  | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return <ThemeContext.Provider value={{themeToggle,isDarkMode}}>{children}</ThemeContext.Provider>;
};
