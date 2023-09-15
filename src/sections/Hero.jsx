import arrowdown from "../assets/arrowdown.png";
import Posesample from "../assets/Posesample.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-[95vh] bg-black flex flex-col items-center justify-center">
      <motion.h1
        animate={{ fontSize: "6em" }}
        className="hidden md:flex flex-col gap-10 text-white text-5xl md:text-8xl font-semibold -translate-y-32 mb-0 md:mb-22 z-10"
      >
        <span className="hover:text-green duration-500">Frontend</span>
        <motion.span
          animate={{ x: 300 }}
          transition={{ duration: 0.5 }}
          className="translate-x-0 md:translate-x-44 hover:text-green duration-500"
        >
          Web
        </motion.span>
        <span className="hover:text-green duration-500">Developer</span>
      </motion.h1>

      <h1 className="md:hidden flex flex-col gap-10 text-white text-5xl md:text-8xl font-semibold -translate-y-32 mb-0 md:mb-22 z-10">
        <span className="hover:text-green duration-500">Frontend</span>
        <motion.span
          animate={{ x: 100 }}
          transition={{ duration: 0.5 }}
          className="translate-x-0 md:translate-x-44 hover:text-green duration-500"
        >
          Web
        </motion.span>
        <span className="hover:text-green duration-500">Developer</span>
      </h1>
      <p className="flex flex-col text-nav self-center items-center z-10 scroll-animation">
        Scroll to find more
        <span>
          <img src={arrowdown} alt="arrowdown" />
        </span>
      </p>
      <img
        src={Posesample}
        alt="Person"
        className="absolute md:absolute md:top-54 md:left-0 w-full md:w-[45%]"
      />
    </section>
  );
}

export default Hero;
