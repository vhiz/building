import { BiMenuAltRight } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn, nav } from "../variants";
import { useState } from "react";
import Switch from "./Switch";

export default function MobileNav({ data }) {
  const [active, setActive] = useState(false);
  return (
    <div className="flex xl:hidden">
      <div className="z-30" onClick={() => setActive(true)}>
        <BiMenuAltRight size={30} />
      </div>
      <motion.div
        variants={nav("left", 0)}
        animate={active ? "show" : "hidden"}
        className="fixed top-[0] right-[0] w-[70vw] h-[100vh] text-black bg-white flex font-[500] flex-col transition-all ease-in-out duration-200 items-center justify-center gap-y-[4rem] text-[1.5rem] p-12 shadow-md dark:bg-red-900 dark:text-dark-text z-40 "
      >
        <div className="relative h-full w-full flex flex-col items-center justify-center gap-y-[4rem]">
          <div
            className="absolute top-0 left-0"
            onClick={() => setActive(false)}
          >
            <FaXmark size={30} />
          </div>
          {data.map((item, i) => (
            <a href={item.link} key={i} onClick={() => setActive(false)}>
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setActive(false)}>
            Contact
          </a>
          <Switch/>
        </div>
      </motion.div>
    </div>
  );
}
