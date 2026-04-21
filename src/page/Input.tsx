// Input.tsx — Atom
import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // or use clsx

type InputVariant = "default" | "error" | "success";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  variant?: InputVariant;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, success, variant = "default", className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    const variantClass = {
      default: "border-neutral-200 focus:border-indigo-500 focus:ring-indigo-500/10",
      error:   "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10",
      success: "border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/10",
    }[error ? "error" : success ? "success" : variant];

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
            "h-11 w-full rounded-lg border-[1.5px] bg-white px-3.5 text-sm text-neutral-900",
            "placeholder:text-neutral-400 outline-none transition-all",
            "hover:border-neutral-300",
            "focus:ring-[3px]",
            variantClass,
            className
          )}
          {...props}
        />
        {hint && !error && !success && (
          <p className="text-xs text-neutral-400">{hint}</p>
        )}
        {error && (
          <p className="flex items-center gap-1 text-xs text-red-500">
            <AlertIcon /> {error}
          </p>
        )}
        {success && !error && (
          <p className="flex items-center gap-1 text-xs text-emerald-500">
            <CheckIcon /> {success}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Inline micro-icons
const AlertIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
