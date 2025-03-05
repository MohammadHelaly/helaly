import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import FormInput from "@/components/form-input";
import Notification from "@/components/notification";
import { useSubmitContactForm } from "@/api/services/contact";
import { useOnlineStatus } from "@/lib/hooks/web";

const schema = z.object({
  name: z.string().min(1, { message: "Please enter your name." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email." })
    .email({ message: "Please enter a valid email." }),
  message: z.string().min(1, { message: "Please enter your message." }),
});

type schemaType = z.infer<typeof schema>;

const buttonVariants = {
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
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const ContactForm = () => {
  const [notification, setNotification] = useState<{
    open: boolean;
    text: string;
    variant: "info" | "success" | "warning" | "error";
  }>({
    open: false,
    text: "",
    variant: "info",
  });

  const { isOnline } = useOnlineStatus();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleNotification = (
    variant: "info" | "success" | "error" | "warning",
    text: string,
  ) => {
    setNotification({
      open: true,
      text,
      variant,
    });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotification({
        open: false,
        text: "",
        variant: "info",
      });

      timeoutRef.current = null;
    }, 5000);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<schemaType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useSubmitContactForm({
    onSuccess: () =>
      toggleNotification(
        "info",
        "Thanks for reaching out! I'll get back to you as soon as possible.",
      ),
    onError: () =>
      toggleNotification("error", "Something went wrong. Please try again."),
  });

  const formSubmitHandler = (data: schemaType) => {
    if (!isOnline) {
      toggleNotification(
        "warning",
        "You are offline. Please check your internet connection and try again.",
      );
      return;
    }

    mutate(data);
    reset();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const buttonDisabled = isPending || Object.keys(errors).length > 0;

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-6 lg:items-start lg:px-20 lg:py-6 xl:px-24">
      <form
        id="contact-form"
        method="POST"
        onSubmit={handleSubmit(formSubmitHandler)}
        className="mx-auto flex w-full max-w-80 flex-col gap-6"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Name *"
              id="name"
              variant="input"
              type="text"
              error={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Email *"
              id="email"
              variant="input"
              type="email"
              error={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Message *"
              id="message"
              variant="text-area"
              rows={3}
              error={errors.message?.message}
              {...field}
            />
          )}
        />
        <motion.button
          variants={buttonVariants}
          transition={transition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          id="contact-form-button"
          type="submit"
          disabled={buttonDisabled}
          className="h-10 w-full rounded-none border-2 border-black bg-white font-manrope text-sm text-black transition-colors duration-200 ease-in-out hover:bg-black hover:text-white disabled:cursor-not-allowed"
        >
          Send
        </motion.button>
      </form>
      <Notification
        open={notification.open}
        onOpenChange={(open) => setNotification((prev) => ({ ...prev, open }))}
        text={notification.text}
        variant={notification.variant}
      />
    </div>
  );
};

export default ContactForm;
