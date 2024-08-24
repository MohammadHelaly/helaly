import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExclamationCircle } from "@/assets/icons";

interface CommonProps {
  variant: "input" | "text-area";
  label: string;
  error?: string;
}

type InputProps = CommonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref">;
type TextareaProps = CommonProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref">;

type Props = InputProps | TextareaProps;

const inputVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const warningVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const inputTransition = {
  type: "tween",
  duration: 0.4,
};

const warningTransition = {
  type: "tween",
  duration: 0.2,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  (props, ref) => {
    const { variant, label, error, id, ...rest } = props;

    let labelClasses = "absolute top-0 text-sm font-manrope";
    let textAreaClasses =
      "w-full pt-5 rounded-none border-t-none border-x-none border-b-2 border-black focus:outline-none focus:ring-0 !bg-white font-manrope text-sm text-black placeholder:font-manrope placeholder:text-sm placeholder:text-muted";
    let inputClasses =
      "w-full pt-5 pb-3 rounded-none border-t-none border-x-none border-b-2 border-black focus:outline-none focus:ring-0 !bg-white font-manrope text-sm text-black placeholder:font-manrope placeholder:text-sm placeholder:text-muted";

    if (error) {
      labelClasses += " !text-red";
      textAreaClasses += " !border-red";
      inputClasses += " !border-red";
    } else {
      labelClasses += " text-muted";
    }

    return (
      <motion.div
        variants={inputVariants}
        transition={inputTransition}
        viewport={viewport}
        initial="initial"
        whileInView="animate"
        className="relative w-full"
      >
        <label id={"label-" + id} htmlFor={id} className={labelClasses}>
          {label}
        </label>
        {variant === "text-area" ? (
          <textarea
            id={id}
            aria-labelledby={"label-" + id}
            className={textAreaClasses}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(rest as TextareaProps)}
          ></textarea>
        ) : (
          <input
            id={id}
            aria-labelledby={"label-" + id}
            className={inputClasses}
            ref={ref as React.Ref<HTMLInputElement>}
            {...(rest as InputProps)}
          />
        )}
        <AnimatePresence>
          {error && (
            <motion.div
              variants={warningVariants}
              transition={warningTransition}
              initial="initial"
              animate="animate"
              exit="initial"
              className="absolute right-0 top-0 flex items-center justify-center"
            >
              <ExclamationCircle className="size-4 fill-red" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  },
);

export default FormInput;
