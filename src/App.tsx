
import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ButtonHTMLAttributes, ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";



// ─────────────────────────────────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

const IconAlert = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const IconChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const IconSpinner = () => (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" />
  </svg>
);

const IconBolt = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// ATOM: INPUT
// ─────────────────────────────────────────────────────────────────────────────

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, hint, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 w-full rounded-lg border-[1.5px] bg-white px-3.5 text-sm text-neutral-900 outline-none transition-all",
            "placeholder:text-neutral-400 hover:border-neutral-300",
            "focus:ring-[3px]",
            error
              ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-red-500/10"
              : success
              ? "border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/10"
              : "border-neutral-200 focus:border-indigo-500 focus:ring-indigo-500/10",
            className
          )}
          {...props}
        />
        {error && (
          <p className="flex items-center gap-1.5 text-xs text-red-500">
            <IconAlert /> {error}
          </p>
        )}
        {!error && success && (
          <p className="flex items-center gap-1.5 text-xs text-emerald-600">
            <IconCheck /> {success}
          </p>
        )}
        {!error && !success && hint && (
          <p className="text-xs text-neutral-400">{hint}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

// ─────────────────────────────────────────────────────────────────────────────
// ATOM: PASSWORD INPUT
// ─────────────────────────────────────────────────────────────────────────────

function getPwStrength(val: string): 0 | 1 | 2 | 3 | 4 {
  if (!val) return 0;
  let s = 0;
  if (val.length >= 8) s++;
  if (/[A-Z]/.test(val)) s++;
  if (/[0-9]/.test(val)) s++;
  if (/[^A-Za-z0-9]/.test(val)) s++;
  return s as 0 | 1 | 2 | 3 | 4;
}

const STRENGTH_META = [
  { label: "",       color: "" },
  { label: "Weak",   color: "bg-red-400" },
  { label: "Fair",   color: "bg-amber-400" },
  { label: "Good",   color: "bg-indigo-400" },
  { label: "Strong", color: "bg-emerald-500" },
] as const;

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  showStrength?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, showStrength = false, className, value = "", ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const str = showStrength ? getPwStrength(String(value)) : 0;
    const meta = STRENGTH_META[str];

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-neutral-700">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={visible ? "text" : "password"}
            value={value}
            className={cn(
              "h-11 w-full rounded-lg border-[1.5px] bg-white pl-3.5 pr-11 text-sm text-neutral-900 outline-none transition-all",
              "placeholder:text-neutral-400 hover:border-neutral-300 focus:ring-[3px]",
              error
                ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-red-500/10"
                : "border-neutral-200 focus:border-indigo-500 focus:ring-indigo-500/10",
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-400 transition-colors hover:text-indigo-500"
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? <IconEyeOff /> : <IconEye />}
          </button>
        </div>

        {showStrength && (
          <div className="space-y-1.5">
            <div className="flex gap-1">
              {([1, 2, 3, 4] as const).map((i) => (
                <div
                  key={i}
                  className={cn(
                    "h-0.75 flex-1 rounded-full transition-all duration-300",
                    i <= str ? meta.color : "bg-neutral-200"
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-neutral-400">
              {String(value) ? meta.label || "Strong" : "At least 8 characters"}
            </p>
          </div>
        )}

        {error && (
          <p className="flex items-center gap-1.5 text-xs text-red-500">
            <IconAlert /> {error}
          </p>
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

// ─────────────────────────────────────────────────────────────────────────────
// ATOM: SELECT
// ─────────────────────────────────────────────────────────────────────────────

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder = "Choose...", className, id, ...props }, ref) => {
    const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "h-11 w-full appearance-none rounded-lg border-[1.5px] bg-white pl-3.5 pr-10 text-sm text-neutral-900 outline-none transition-all cursor-pointer",
              "hover:border-neutral-300 focus:ring-[3px]",
              error
                ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-red-500/10"
                : "border-neutral-200 focus:border-indigo-500 focus:ring-indigo-500/10",
              className
            )}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            <IconChevron />
          </span>
        </div>
        {error && (
          <p className="flex items-center gap-1.5 text-xs text-red-500">
            <IconAlert /> {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

// ─────────────────────────────────────────────────────────────────────────────
// ATOM: TEXTAREA
// ─────────────────────────────────────────────────────────────────────────────

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  showCount?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, optional, error, showCount, className, id, value = "", maxLength, ...props }, ref) => {
    const textareaId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="flex items-center justify-between text-sm font-medium text-neutral-700">
            {label}
            {optional && (
              <span className="text-xs font-normal text-neutral-400">Optional</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          className={cn(
            "min-h-22,5 w-full resize-vertical rounded-lg border-[1.5px] bg-white px-3.5 py-2.5 text-sm leading-relaxed text-neutral-900 outline-none transition-all",
            "placeholder:text-neutral-400 hover:border-neutral-300 focus:ring-[3px]",
            error
              ? "border-red-400 bg-red-50/40 focus:border-red-500 focus:ring-red-500/10"
              : "border-neutral-200 focus:border-indigo-500 focus:ring-indigo-500/10",
            className
          )}
          {...props}
        />
        <div className="flex items-center justify-between">
          {error ? (
            <p className="flex items-center gap-1.5 text-xs text-red-500">
              <IconAlert /> {error}
            </p>
          ) : (
            <span />
          )}
          {showCount && maxLength && (
            <p className="text-xs text-neutral-400">
              {String(value).length}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// ─────────────────────────────────────────────────────────────────────────────
// ATOM: BUTTON
// ─────────────────────────────────────────────────────────────────────────────

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
}

function Button({ variant = "primary", size = "md", loading = false, disabled, children, className, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] hover:-translate-y-px hover:shadow-lg hover:shadow-indigo-300/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none",
    outline: "border-[1.5px] border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed",
    ghost:   "text-neutral-600 hover:bg-neutral-100 active:scale-[0.98] disabled:opacity-60",
  };
  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-[15px]",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all outline-none",
        "focus-visible:ring-[3px] focus-visible:ring-indigo-500/20",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <IconSpinner /> Submitting...
        </>
      ) : (
        children
      )}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ZOD SCHEMA
// ─────────────────────────────────────────────────────────────────────────────

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email:    z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Include at least one uppercase letter")
    .regex(/[0-9]/, "Include at least one number"),
  category: z.string().min(1, "Please select an event category"),
  bio:      z.string().max(200, "Bio must be under 200 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

const CATEGORY_OPTIONS = [
  { value: "tech",   label: "Technology"       },
  { value: "biz",    label: "Business"         },
  { value: "design", label: "Design"           },
  { value: "mkt",    label: "Marketing"        },
  { value: "health", label: "Health & Wellness"},
];

// ─────────────────────────────────────────────────────────────────────────────
// SUCCESS SCREEN
// ─────────────────────────────────────────────────────────────────────────────

function SuccessScreen({ onReset }: { onReset: () => void }) {
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
        <Button onClick={onReset} className="w-full justify-center">
          Register another attendee
        </Button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP — ORGANISM: REGISTRATION FORM
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email:    "",
      password: "",
      category: "",
      bio:      "",
    },
  });

  const emailValue    = watch("email")    ?? "";
  const passwordValue = watch("password") ?? "";
  const bioValue      = watch("bio")      ?? "";

  const onSubmit = async (_data: FormValues) => {
    await new Promise((res) => setTimeout(res, 1800)); // simulate API call
    setSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  if (submitted) {
    return <SuccessScreen onReset={handleReset} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      {/* Card */}
      <div className="w-full max-w-120 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-neutral-200/60">

        {/* ── Header ── */}
        <div className="mb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            <IconBolt /> Limited seats available
          </span>
          <h1 className="mb-1.5 text-[22px] font-medium leading-tight text-neutral-900">
            Event Registration
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Join thousands of professionals. Fill in your details to secure your spot.
          </p>
        </div>

        {/* ── Form ── */}
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
            value={passwordValue}
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
            size="lg"
            className="mt-2 w-full"
          >
            Register for Event
          </Button>
        </form>

        {/* ── Footer ── */}
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
