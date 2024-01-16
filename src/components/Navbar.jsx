import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Switch from "./Switch";

export default function Navbar() {
  const data = [
    {
      name: "Intro",
      link: "#intro",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Products",
      link: "#products",
    },
  ];
  const [Active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed left-0 top-0 py-2 px-6 flex flex-row transition-all ease-in-out duration-300 items-center justify-between w-full z-[99] ${
        Active ? "backdrop-blur-[5px] bg-black/70 z-10" : "bg-transparent"
      } text-white`}
    >
      <a
        href="#intro"
        aria-label="Home"
        className="capitalize font-bold text-lg cursor-pointer"
      >
        <img
          className="h-[5rem] w-[5rem] object-cover"
          src="/logo.png"
          alt=""
        />
      </a>
      <div className="hidden flex-row gap-6 items-center xl:flex">
        <div className="hidden xl:flex">
          <Switch />
        </div>
        {data.map((item, i) => (
          <a
            href={item.link}
            className="text-bolder text-lg"
            key={i}
          >
            {item.name}
          </a>
        ))}
        <button className="btn btn-accent btn-sm">
          <a href="#contact">
            Contact
          </a>
        </button>
      </div>
      <MobileNav data={data} />
    </div>
  );
}
