"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(8, "Please enter a phone number."),
  message: z.string().min(10, "Tell us a little more about your question."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "+977-",
      message: "",
    },
  });

  const onSubmit = async () => {
    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Contact Us
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">Send us a message</h2>
      </div>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Full name
          <input
            type="text"
            {...register("name")}
            className="rounded-button border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
            placeholder="Your name"
          />
          {errors.name ? <span className="text-xs text-red-600">{errors.name.message}</span> : null}
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Email
            <input
              type="email"
              {...register("email")}
              className="rounded-button border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
              placeholder="you@example.com"
            />
            {errors.email ? <span className="text-xs text-red-600">{errors.email.message}</span> : null}
          </label>

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Phone
            <input
              type="tel"
              {...register("phone")}
              className="rounded-button border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
              placeholder="+977-9812345678"
            />
            {errors.phone ? <span className="text-xs text-red-600">{errors.phone.message}</span> : null}
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Message
          <textarea
            rows={6}
            {...register("message")}
            className="rounded-[1.25rem] border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
            placeholder="How can we help you?"
          />
          {errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            We normally reply within one working day.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-button bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>

        {submitted ? (
          <p className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
            Message received. Our team will get back to you shortly.
          </p>
        ) : null}
      </form>
    </div>
  );
}