import { createContext, useEffect, useState } from "react";

export const DarkContext = createContext();

export const DarkContextProvider = ({ children }) => {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
      JSON.parse(localStorage.getItem("dark"))
  );
  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <DarkContext.Provider value={{ dark, toggleDark }}>
      {children}
    </DarkContext.Provider>
  );
};
