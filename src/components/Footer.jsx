export default function Footer() {
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
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="w-full flex-col h-[40vh] flex gap-4 justify-between items-center p-8 md:h-[25vh] lg:flex-row xl:flex-row">
      <div className="flex w-full items-center flex-col gap-4 lg:items-start justify-center">
        <div className="h-20 w-20">
          <img className="h-full w-full object-cover" src="/logo.png" alt="" />
        </div>
        <span className="text-[0.5rem] capitalize text-[#8c8b8b] max-w-lg xl:text-[0.9rem] text-center">
          Let us serve you
        </span>
      </div>
      <div className="flex flex-col justify-center items-center xl:items-start">
        <span className="text-[#8c8b8b] text-[0.9rem] capitalize text-center xl:text-left">
          line 1 shop a5 and 6 enugu state international building <br />
          materials marcket ugwuaji (new kenyatta)
        </span>
        <div className="flex gap-6 font-[500] mt-6 justify-center items-center ">
          {data.map((link, i) => (
            <a key={i} href={link.link}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
