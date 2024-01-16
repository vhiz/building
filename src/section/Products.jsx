import ProductsSlider from "../components/ProductsSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function Products() {
  return (
    <section
      id="products"
      className="w-full px-3 flex flex-col items-center justify-center gap-y-10 xl:px-10 xl:items-start overflow-hidden"
    >
      <div className="w-full flex flex-col gap-y-1 items-center justify-center xl:justify-normal xl:items-start">
        <motion.span
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="text-accent text-[1.2rem] font-semibold xl:text-2xl"
        >
          Best Choices
        </motion.span>
        <motion.span
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-[#1f3e72] font-[700] text-[1.5rem] xl:text-[2xl]"
        >
          Popular Products
        </motion.span>
      </div>
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView="show"
        className="w-full overflow-hidden"
      >
        <ProductsSlider />
      </motion.div>
    </section>
  );
}
