import { useState } from "react";
import Img from "../components/Img";
import { FaArrowUp } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";
import { motion } from "framer-motion";
import { ease, fadeIn } from "../variants";

export default function About() {
  const [active, setActive] = useState(0);
  const data = [
    {
      icon: <CiDeliveryTruck size={"0.6rem"} color="#313100" />,
      title: "We Offer Delivery Service",
      desc: `You Can Place An Order Through Any Of Our Contacts And We Will Deliver Your Product To You Anywhere In Nigeria Safe And Sound Without The Hassle Of You Coming To Our Store `,
    },
    {
      icon: <AiOutlineSafety size={"0.6rem"} color="#313100" />,
      title: "Quality Products",
      desc: `We Offer Durable And Quality Building Materials Which Can Help Building The Home Of Your Choice`,
    },
    {
      icon: <BiStats size={"0.6rem"} color="#313100" />,
      title: "Best price on the market",
      desc: `you can be assured of getting the best deals when purchasing our products`,
    },
  ];
  return (
    <section
      id="about"
      className="w-full px-5 py-20 flex items-center flex-col xl:flex-row xl:h-[100vh] xl:px-20"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        className="flex-1 h-full flex"
      >
        <Img border={"8px"} img={"/img2.jpg"} />
      </motion.div>
      <div className="flex-1 h-full flex flex-col gap-y-6 items-center mt-10">
        <div className="flex flex-col gap-y-2 w-full">
          <motion.h2
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-[1.2rem] font-semibold text-secondary xl:text-[1.5rem]"
          >
            About Us
          </motion.h2>
          <motion.h3
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            className="text-[1.5rem] text-[#1f3e72] font-[700] xl:text-[2rem]"
          >
            What We Offer
          </motion.h3>
          <motion.span
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            className="text-[#8c8b8b] text-[0.9rem] max-w-lg capitalize"
          >
            We are located at line 1 shop a5 and 6 enugu state international
            building <br />
            materials marcket ugwuaji (new kenyatta) , Here are the percks of
            working with us
          </motion.span>
        </div>
        <motion.div
          variants={fadeIn("left", 1)}
          initial="hidden"
          whileInView="show"
          className=" flex flex-col gap-y-3 w-full items-center"
        >
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col w-full cursor-pointer bg-white overflow-hidden border-[0.8px] border-[#80808024] transition-all duration-300 ease-in-out rounded-md ${
                active === i && "shadow-lg"
              }`}
              onClick={() => setActive(i)}
            >
              <div className="flex flex-row justify-between items-center p-[1rem] text-center">
                <div className="p-[10px] bg-[#eeeeff] rounded-[5px] cursor-pointer">
                  {item.icon}
                </div>
                <span className="text-[0.8rem] font-[700] text-accent xl:text-[1.1rem]">
                  {item.title}
                </span>
                <button
                  aria-label={item.title}
                  aria-expanded="false"
                  className={`p-[10px] bg-[#eeeeff] rounded-[5px] cursor-pointer text-accent `}
                >
                  <div
                    className={`transition-all ease-linear duration-150 ${
                      active === i && "rotate-180"
                    }`}
                  >
                    <FaArrowUp size={"0.6rem"} />
                  </div>
                </button>
              </div>
              <div
                className={`text-[#8c8b8b] text-[0.9rem] p-5 w-full transition-all ease-linear duration-150 ${
                  active === i ? "flex" : "hidden"
                }`}
              >
                <motion.p
                  variants={ease(0)}
                  initial="hidden"
                  whileInView="show"
                  className="transition-all ease-linear duration-150 capitalize"
                >
                  {item.desc}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
