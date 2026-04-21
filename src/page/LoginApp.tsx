// LoginApp.tsx — Self-contained Event Login Form
// Konsisten dengan design system App.tsx (Atoms → Organism)
// Deps: react-hook-form, @hookform/resolvers, zod, tailwindcss
//
// npm install react-hook-form @hookform/resolvers zod

import {
  forwardRef,
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  useState,
} from "react";
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

const IconSpinner = () => (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" />
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
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
            "placeholder:text-neutral-400 hover:border-neutral-300 focus:ring-[3px]",
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
// ATOM: PASSWORD INPUT (tanpa strength meter — tidak relevan untuk login)
// ─────────────────────────────────────────────────────────────────────────────

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  rightSlot?: ReactNode; // untuk "Forgot password?" link inline
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, rightSlot, className, value = "", ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="flex flex-col gap-1.5">
        {(label || rightSlot) && (
          <div className="flex items-center justify-between">
            {label && (
              <label className="text-sm font-medium text-neutral-700">{label}</label>
            )}
            {rightSlot}
          </div>
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
// ATOM: BUTTON
// ─────────────────────────────────────────────────────────────────────────────

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
}

function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] hover:-translate-y-px hover:shadow-lg hover:shadow-indigo-300/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none",
    outline:
      "border-[1.5px] border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed",
    ghost:
      "text-neutral-600 hover:bg-neutral-100 active:scale-[0.98] disabled:opacity-60",
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
          <IconSpinner /> Signing in...
        </>
      ) : (
        children
      )}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ZOD SCHEMA — Login (hanya email + password)
// ─────────────────────────────────────────────────────────────────────────────

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginValues = z.infer<typeof loginSchema>;

// ─────────────────────────────────────────────────────────────────────────────
// SUCCESS SCREEN
// ─────────────────────────────────────────────────────────────────────────────

function SuccessScreen({ email, onReset }: { email: string; onReset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-neutral-200/60">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h2 className="mb-1.5 text-xl font-medium text-neutral-900">Welcome back!</h2>
        <p className="mb-1 text-sm text-neutral-500">Signed in as</p>
        <p className="mb-6 text-sm font-medium text-indigo-600">{email}</p>
        <Button onClick={onReset} className="w-full justify-center">
          Sign out & back to login
        </Button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP — ORGANISM: LOGIN FORM
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedEmail, setLoggedEmail] = useState("");

  // Simulasi: akun valid yang bisa login
  const MOCK_ACCOUNT = {
    email: "user@example.com",
    password: "Password1",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const emailValue    = watch("email")    ?? "";
  const passwordValue = watch("password") ?? "";

  const onSubmit = async (data: LoginValues) => {
    await new Promise((res) => setTimeout(res, 1600)); // simulasi network

    // Simulasi cek kredensial — ganti dengan API call nyata
    if (
      data.email !== MOCK_ACCOUNT.email ||
      data.password !== MOCK_ACCOUNT.password
    ) {
      setError("root", { message: "Email or password is incorrect. Try user@example.com / Password1" });
      return;
    }

    setLoggedEmail(data.email);
    setLoggedIn(true);
  };

  const handleReset = () => {
    reset();
    setLoggedIn(false);
    setLoggedEmail("");
  };

  if (loggedIn) {
    return <SuccessScreen email={loggedEmail} onReset={handleReset} />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      {/* Card */}
      <div className="w-full max-w-[440px] rounded-2xl bg-white p-10 shadow-sm ring-1 ring-neutral-200/60">

        {/* ── Header ── */}
        <div className="mb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
            <IconCalendar /> EventHub Portal
          </span>
          <h1 className="mb-1.5 text-[22px] font-medium leading-tight text-neutral-900">
            Sign in to your account
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Welcome back! Enter your credentials to access your event dashboard.
          </p>
        </div>

        {/* ── Global Error Banner ── */}
        {errors.root && (
          <div className="mb-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <IconAlert />
            <p className="text-sm text-red-600">{errors.root.message}</p>
          </div>
        )}

        {/* ── Form ── */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

          {/* Email */}
          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email?.message}
            success={
              touchedFields.email && !errors.email && emailValue
                ? "Email verified"
                : undefined
            }
            {...register("email")}
          />

          {/* Password — dengan "Forgot password?" di kanan label */}
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            autoComplete="current-password"
            error={errors.password?.message}
            value={passwordValue}
            rightSlot={
              <a
                href="#"
                className="text-xs font-medium text-indigo-600 hover:underline"
                tabIndex={-1}
              >
                Forgot password?
              </a>
            }
            {...register("password")}
          />

          {/* Remember Me */}
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-300 accent-indigo-600 cursor-pointer"
              {...register("rememberMe")}
            />
            <span className="text-sm text-neutral-600">Remember me for 30 days</span>
          </label>

          {/* Submit */}
          <Button
            type="submit"
            loading={isSubmitting}
            size="lg"
            className="mt-2 w-full"
          >
            Sign In
          </Button>

          {/* Divider */}
          <div className="relative flex items-center gap-3 py-1">
            <div className="h-px flex-1 bg-neutral-200" />
            <span className="text-xs text-neutral-400">or continue with</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Social Login (Google — UI only) */}
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border-[1.5px] border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]"
          >
            {/* Google Icon SVG */}
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.3 6.5 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19.1 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.3 6.5 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8H6.3C9.6 35.5 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.2 5.2C37 38.9 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
            Continue with Google
          </button>
        </form>

        {/* ── Footer ── */}
        <p className="mt-6 text-center text-sm text-neutral-500">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Register for free
          </a>
        </p>
      </div>
    </div>
  );
}
