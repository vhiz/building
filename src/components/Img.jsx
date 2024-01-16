import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Img({ border, img }) {
  return (
    <div
      className={`w-[95%] h-[25rem] overflow-hidden rounded-tl-[15rem] rounded-tr-[15rem] border-[8px] border-accent/20 sm:w-[30rem] sm:h-[35rem]`}
    >
      <LazyLoadImage
        className="w-full h-full object-cover"
        effect="blur"
        src={img}
        alt="Building Materials"
      />
    </div>
  );
}
