import Box from "../components/Box";
import Img from "../components/Img";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  IoCall,
  IoChatbubbleEllipsesSharp,
  IoChatboxSharp,
} from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function Contact() {
  const data = [
    {
      icon: <IoCall />,
      title: "Call",
      details: "07036057767",
      button: "Call now",
      link: "tel:07036057767",
    },
    {
      icon: <IoChatbubbleEllipsesSharp />,
      title: "Chat",
      details: "09168082016",
      button: "Chat now",
      link: "tel:09168082016",
    },
    {
      icon: <FaWhatsapp />,
      title: "Video Call",
      details: " 08036759943",
      button: "Video Call now",
      link: "https://api.whatsapp.com/send?phone=+2347036057767&text=Welcom%20to%20our%20whatsapp%20page%20how%20can%20i%20be%20of%20assistance&app_absent=0",
    },
    {
      icon: <HiOutlineMailOpen />,
      title: "Email",
      details: "ejimsssisqo070@gmail.com",
      button: "Email",
      link: "mailto:ejimsssisqo070@gmail.com",
    },
  ];
  return (
    <section
      id="contact"
      className="w-full p-5 gap-y-6 flex flex-col xl:px-10 xl:flex-row  xl:h-[100vh]"
    >
      <div className="w-full flex flex-col justify-center items-center mt-2 flex-1 gap-y-[0.5rem] xl:mt-0 xl:justify-center xl:items-start">
        <motion.span
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-accent text-[1.5rem] font-semibold"
        >
          Our Contact Us
        </motion.span>
        <motion.span
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          className="font-[700] text-[2rem] text-[#1f3e72]"
        >
          Easy to contact us
        </motion.span>
        <motion.span
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView="show"
          className="text-[#8c8b8b] text-[0.9rem]"
        >
          We're always ready to help by providing the best services for you. We
          beleive a good place to live can make your life better
        </motion.span>
        <div className=" w-full flex flex-col justify-center items-start mt-8 gap-4 sm:items-center">
          <motion.div
            variants={fadeIn("down", 1)}
            initial="hidden"
            whileInView="show"
            className="gap-6 flex justify-start  w-full flex-col sm:w-full xl:flex-wrap sm:items-center xl:flex-row"
          >
            {data.map((box, i) => (
              <Box
                key={i}
                icon={box.icon}
                title={box.title}
                details={box.details}
                button={box.button}
                link={box.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="flex-1 w-full items-center justify-end h-full flex md:justify-center md:items-center"
      >
        <Img border={"1px"} img={"/img4.jpg"} />
      </motion.div>
    </section>
  );
}
