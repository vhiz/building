import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Card({ name, img }) {
  return (
    <div className="flex flex-col justify-center items-start gap-y-[0.6rem] p-4 rounded-[10px] max-w-max m-auto transition-all duration-[400] ease-in hover:scale-[1.03]">
      <div className="flex flex-col w-[250px] gap-y-2">
        <LazyLoadImage
          effect="blur"
          src={img}
          alt=""
          className="w-[250px] h-[12rem] rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-2 items-center justify-center w-full">
        <span className="text-[1.1rem] text-accent font-semibold">
          {name || " Product"}
        </span>
      </div>
    </div>
  );
}
