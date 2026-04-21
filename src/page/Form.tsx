// Form.tsx — Organism: Event Registration Form
// Stack: React 18 + TypeScript + Tailwind CSS + React Hook Form + Zod

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input }         from "./Input";
import { PasswordInput } from "./PasswordInput";
import { Select }        from "./Button-Select-Textarea";
import { Textarea }      from "./Button-Select-Textarea";
import { Button }        from "./Button-Select-Textarea";

// ─── Schema ───────────────────────────────────────────────────────────────────
const schema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Include at least one uppercase letter")
    .regex(/[0-9]/, "Include at least one number"),

  category: z
    .string()
    .min(1, "Please select an event category"),

  bio: z
    .string()
    .max(200, "Bio must be under 200 characters")
    .optional(),
});

type FormValues = z.infer<typeof schema>;

// ─── Category options ─────────────────────────────────────────────────────────
const CATEGORY_OPTIONS = [
  { value: "tech",    label: "Technology"      },
  { value: "biz",     label: "Business"        },
  { value: "design",  label: "Design"          },
  { value: "mkt",     label: "Marketing"       },
  { value: "health",  label: "Health & Wellness" },
];

// ─── Organism ─────────────────────────────────────────────────────────────────
export function EventRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",           // real-time validation
    reValidateMode: "onChange",
  });

  const emailValue    = watch("email");
  const passwordValue = watch("password");
  const bioValue      = watch("bio") ?? "";

  const onSubmit = async (data: FormValues) => {
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1800));
    console.log("Registered:", data);
    setSubmitted(true);
  };

  // ── Success screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-neutral-200/60">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-medium text-neutral-900">You're registered!</h2>
          <p className="mb-6 text-sm leading-relaxed text-neutral-500">
            Check your inbox for a confirmation email with event details and your ticket.
          </p>
          <Button onClick={() => setSubmitted(false)} className="w-full justify-center">
            Register another attendee
          </Button>
        </div>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-[480px] rounded-2xl bg-white p-10 shadow-sm ring-1 ring-neutral-200/60">

        {/* Header */}
        <div className="mb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Limited seats available
          </span>
          <h1 className="mb-1.5 text-[22px] font-medium leading-tight text-neutral-900">
            Event Registration
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Join thousands of professionals. Fill in your details to secure your spot.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

          {/* Full Name */}
          <Input
            label="Full Name"
            placeholder="e.g. Alex Johnson"
            error={errors.fullName?.message}
            success={touchedFields.fullName && !errors.fullName ? "Looks good!" : undefined}
            {...register("fullName")}
          />

          {/* Email */}
          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            success={
              touchedFields.email && !errors.email && emailValue
                ? "Email verified"
                : undefined
            }
            {...register("email")}
          />

          {/* Password */}
          <PasswordInput
            label="Password"
            placeholder="Min 8 characters"
            error={errors.password?.message}
            showStrength
            value={passwordValue ?? ""}
            {...register("password")}
          />

          {/* Category */}
          <Select
            label="Event Category"
            options={CATEGORY_OPTIONS}
            placeholder="Choose a category..."
            error={errors.category?.message}
            {...register("category")}
          />

          {/* Bio */}
          <Textarea
            label="Short Bio"
            optional
            placeholder="Tell attendees a bit about yourself..."
            maxLength={200}
            showCount
            value={bioValue}
            error={errors.bio?.message}
            {...register("bio")}
          />

          {/* Submit */}
          <Button
            type="submit"
            loading={isSubmitting}
            className="mt-2 w-full justify-center"
          >
            Register for Event
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-5 text-center text-sm text-neutral-500">
          Already registered?{" "}
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default EventRegistrationForm;
