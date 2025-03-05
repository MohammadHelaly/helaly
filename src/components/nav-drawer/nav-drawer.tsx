import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import NavLogo from "@/components/nav-logo";
import NavLinks from "@/components/nav-links";
import { CloseMenu } from "@/assets/icons";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const drawerVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.8 },
};

const transition = {
  type: "tween",
  duration: 0.2,
};

const NavDrawer = (props: Props) => {
  const { open, onOpenChange } = props;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                variants={overlayVariants}
                transition={transition}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 z-50 bg-black lg:hidden"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={drawerVariants}
                transition={transition}
                className="fixed right-0 top-0 z-50 h-full w-80 bg-white lg:hidden"
              >
                <Dialog.Title asChild>
                  <VisuallyHidden>Navigation Menu</VisuallyHidden>
                  <div className="flex w-full items-center justify-between px-3 py-3">
                    <NavLogo />
                    <Dialog.Close asChild>
                      <motion.button
                        className="size-8 items-center justify-center border-none bg-transparent p-0"
                        type="button"
                        aria-label="Close navigation"
                      >
                        <CloseMenu className="h-full w-full fill-black" />
                      </motion.button>
                    </Dialog.Close>
                  </div>
                </Dialog.Title>
                <Dialog.Description asChild>
                  <nav className="px-3 py-24">
                    <ul>
                      <NavLinks />
                    </ul>
                  </nav>
                </Dialog.Description>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default NavDrawer;
