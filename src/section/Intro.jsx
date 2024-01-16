import CountUp from "react-countup";
import Img from "../components/Img";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function Intro() {
  return (
    <section
      id="intro"
      className="bg-primary bg-cover w-full px-10 py-20 flex flex-col text-white xl:flex-row xl:h-[100vh] xl:px-20 dark:bg-darkBg transition-all ease-in-out duration-300"
    >
      <div className="absolute w-[20rem] h-[20rem] bg-[#ffffff85] top-0 filter blur-[100px] rounded-[100px] dark:bg-dark-text/20"></div>
      <div className="flex-1 h-full flex flex-col items-center justify-center gap-y-12">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          className="relative z-[1]"
        >
          <h2 className="text-white text-[2.5rem] font-semibold leading-[3rem]  z-[1] md:text-[3.8rem] md:leading-[4rem] md:max-w-lg" >
            Get Your <br /> Materials At Your Comfort
          </h2>
          <div className="w-16 h-16 rounded-full absolute -top-[10%] right-[40%] bg-gradient-to-r from-accent -z-[1]"></div>
        </motion.div>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          className="max-w-lg text-[0.9rem] text-[#cfcdcd]"
        >
          Find a variety of materials that suit your every need .Forget all
          difficulties in finding the best building equipments
        </motion.p>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          className="flex w-full text-[1.5rem] items-center justify-center font-semibold gap-x-3 flex-wrap gap-4 mb-3 xl:text-[2rem] xl:justify-normal max-w-lg"
        >
          <div className="flex flex-col items-start">
            <div className="">
              <CountUp end={8000} duration={5} />{" "}
              <span className="text-accent dark:text-primary">+</span>
            </div>
            <span className="text-[#c5c3c3] text-[0.8rem] xl:text-[0.9rem]">
              Products
            </span>
          </div>
          <div className="flex flex-col items-start gap-x-1">
            <div className="">
              <CountUp end={5000} duration={5} />{" "}
              <span className="text-accent dark:text-primary">+</span>
            </div>
            <span className="text-[#c5c3c3] text-[0.8rem] xl:text-[0.9rem]">
              Deliveries
            </span>
          </div>
          <div className="flex flex-col items-start gap-x-1">
            <div className="">
              <CountUp end={330} duration={5} />{" "}
              <span className="text-accent dark:text-primary">+</span>
            </div>
            <span className="text-[#c5c3c3] text-[0.8rem] xl:text-[0.9rem]">
              Customers
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("down", 0.8)}
        initial="hidden"
        whileInView="show"
        className="flex-1 h-full flex items-center justify-center xl:mt-3"
      >
        <Img border={"8px"} img={"/wood2.jpg"} />
      </motion.div>
    </section>
  );
}
