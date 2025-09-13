import { motion } from "framer-motion";
import Container from "@/components/container";
import Links from "@/components/links";

const variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
  delayChildren: 0.2,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const HomeSection = () => {
  return (
    <section id="home" className="h-screen bg-white py-12 lg:pt-28">
      <Container className="h-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <motion.div
            variants={variants}
            transition={transition}
            viewport={viewport}
            initial="initial"
            whileInView="animate"
            className="flex h-full w-full flex-col items-center justify-center gap-4 md:gap-2"
          >
            <motion.div
              variants={variants}
              transition={transition}
              className="flex w-full flex-col items-center justify-center gap-4 md:gap-2"
            >
              <h1 className="text-center font-manrope text-[calc(1.625rem_+_4.5vw)] font-bold leading-[1.2] text-black xl:text-[5rem]">
                Mohammad Helaly
              </h1>
              <div className="flex w-full flex-col items-center justify-center gap-4">
                <p className="text-center font-manrope text-xl font-light text-black">
                  Software developer. Data scientist. Engineer.
                </p>
                <p className="text-center font-manrope text-xl font-light text-black">
                  Creating innovative solutions through code.
                </p>
                <p className="text-center font-manrope text-xl font-light text-black">
                  Building engaging experiences with passion.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              transition={transition}
              className="py-4"
            >
              <Links variant="dark" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
