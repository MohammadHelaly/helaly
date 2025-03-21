import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Container from "@/components/container";
import NavLogo from "@/components/nav-logo";
import NavLinks from "@/components/nav-links";
import NavDrawer from "@/components/nav-drawer";
import { HamburgerMenu } from "@/assets/icons";

const navVariants = {
  initial: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  animate: {
    paddingTop: 0,
    paddingBottom: 0,
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: -40,
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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateNavBar, setAnimateNavBar] = useState("initial");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setAnimateNavBar(latest > 100 ? "animate" : "initial");
    });
    return () => unsubscribe();
  }, [scrollY]);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white py-3">
      <motion.div
        className="w-full"
        variants={navVariants}
        transition={transition}
        initial="initial"
        animate={animateNavBar}
      >
        <Container>
          <motion.div
            variants={contentVariants}
            transition={transition}
            viewport={viewport}
            initial="initial"
            whileInView="animate"
            className="flex w-full items-center justify-between gap-2"
          >
            <motion.span variants={contentVariants} transition={transition}>
              <NavLogo />
            </motion.span>
            <motion.nav variants={contentVariants} transition={transition}>
              <ul className="hidden lg:flex">
                <NavLinks />
              </ul>
              <button
                className="flex size-8 items-center justify-center border-none bg-transparent p-0 lg:hidden"
                type="button"
                aria-label="Toggle navigation"
                onClick={openDrawer}
              >
                <HamburgerMenu className="h-full w-full fill-black" />
              </button>
            </motion.nav>
          </motion.div>
        </Container>
        <NavDrawer open={isOpen} onOpenChange={setIsOpen} />
      </motion.div>
    </header>
  );
};

export default NavBar;
