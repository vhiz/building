import { useContext } from "react";
import { motion } from "framer-motion";
import { DarkContext } from "../context/DarkMode";

export default function Switch() {
  const { dark, toggleDark } = useContext(DarkContext);
  const variants = {
    dark: {
      x: 43,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
    light: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };
  return (
    <button
      className="relative w-[4.6rem] h-[1.5rem] border border-green-400 items-center flex justify-between rounded-full px-1 cursor-pointer dark:border-white"
      onClick={toggleDark}
      aria-label="Darkmode"
    >
      <motion.div
        variants={variants}
        animate={dark ? "dark" : "light"}
        className="absolute rounded-full w-5 h-5 bg-green-700 text-[0.5rem]"
      ></motion.div>
      <div className="text-[0.7rem]">🌞</div>
      <div className="text-[0.7rem]">🌛</div>
    </button>
  );
}
