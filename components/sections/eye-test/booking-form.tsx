"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z
    .string()
    .regex(/^\+977-\d{10}$/, "Use the format +977-XXXXXXXXXX."),
  email: z.string().email("Enter a valid email address."),
  preferredDate: z.string().min(1, "Choose a preferred date."),
  testType: z.enum(["comprehensive", "children", "contact-lens"]),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const testTypeOptions = [
  { value: "comprehensive", label: "Comprehensive Eye Test" },
  { value: "children", label: "Children's Eye Test" },
  { value: "contact-lens", label: "Contact Lens Assessment" },
] as const;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "+977-",
      email: "",
      preferredDate: "",
      testType: "comprehensive",
    },
  });

  const onSubmit = async () => {
    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Book Online
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">Reserve your eye test</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Share your contact details and preferred visit date. We will confirm your appointment by phone.
        </p>
      </div>

      <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Full name
          <input
            type="text"
            {...register("name")}
            className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
            placeholder="Your full name"
          />
          {errors.name ? <span className="text-xs text-red-600">{errors.name.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Phone
          <input
            type="tel"
            {...register("phone")}
            className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
            placeholder="+977-9812345678"
          />
          {errors.phone ? <span className="text-xs text-red-600">{errors.phone.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            {...register("email")}
            className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
            placeholder="you@example.com"
          />
          {errors.email ? <span className="text-xs text-red-600">{errors.email.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Preferred date
          <input
            type="date"
            {...register("preferredDate")}
            className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
          />
          {errors.preferredDate ? (
            <span className="text-xs text-red-600">{errors.preferredDate.message}</span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground md:col-span-2">
          Test type
          <select
            {...register("testType")}
            className="rounded-button border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
          >
            {testTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.testType ? <span className="text-xs text-red-600">{errors.testType.message}</span> : null}
        </label>

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            We respect your privacy and only use your details to confirm the booking.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-button bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </button>
        </div>

        {submitted ? (
          <p className="md:col-span-2 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary">
            Request received. Our team will contact you shortly to confirm your appointment.
          </p>
        ) : null}
      </form>
    </div>
  );
}