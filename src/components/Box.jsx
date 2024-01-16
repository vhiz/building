export default function Box({ icon, title, details, button, link }) {
  return (
    <div className="flex justify-center items-center flex-col w-full  p-4 border-[0.8px] border-[#80808024] rounded-md gap-4 ml-3 transition-all ease-in-out duration-300 hover:scale-[1.1] sm:w-full xl:w-64 xl:ml-0 hover:shadow-lg">
      <div className="flex justify-start items-center w-full gap-6">
        <div className="flex gap-x-8 justify-center items-center flex-wrap p-[10px] bg-[#eeeeff] text-accent text-[0.9rem] hover:text-accent-hover rounded-md">
          {icon}
        </div>
        <div className="flex flex-col justify-center items-start">
          <span className="text-[1.1rem] font-semibold text-accent hover:text-accent-hover">
            {title}
          </span>
          <span className="text-[#8c8b8b] text-[0.6rem]">{details}</span>
        </div>
      </div>
      <a
        href={link}
        className="w-full cursor-pointer bg-[#eeeeff] text-accent text-[0.9rem] font-semibold rounded-[4px] transition-all duration-300 ease-in-out flex gap-x-8 justify-center items-center flex-wrap py-[0.6rem] px-[1.4rem] hover:scale-[0.9] hover:bg-accent hover:text-[#eeeeff]"
      >
        {button}
      </a>
    </div>
  );
}
