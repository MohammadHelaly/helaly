import { motion } from "framer-motion";
import Container from "@/components/container";
import Links from "@/components/links";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white py-12 lg:pt-28">
      <Container>
        <motion.div
          variants={variants}
          transition={transition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center justify-center gap-4"
        >
          <motion.div variants={variants} transition={transition}>
            <Links />
          </motion.div>
          <hr className="bg-white" />
          <motion.p
            variants={variants}
            transition={transition}
            className="font-manrope text-xs font-thin text-black"
          >
            &copy; {currentYear} Mohammad Helaly
          </motion.p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
