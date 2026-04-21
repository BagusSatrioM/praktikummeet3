// Button.tsx — Atom
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-indigo-500/20";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] hover:-translate-y-px hover:shadow-lg hover:shadow-indigo-300/40 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none",
    outline:
      "border-[1.5px] border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed",
    ghost:
      "text-neutral-600 hover:bg-neutral-100 active:scale-[0.98] disabled:opacity-60",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-8 px-4 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          Submitting...
        </>
      ) : (
        children
      )}
    </button>
  );
}

const Spinner = () => (
  <svg
    className="animate-spin"
    width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
  >
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" opacity="0.3" />
    <path d="M12 2v4" />
  </svg>
);


// ──────────────────────────────────────────────────────────────────────────────
// Select.tsx — Atom
// ──────────────────────────────────────────────────────────────────────────────
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({
  label, error, options, placeholder = "Choose...", className, id, ...props
}: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "h-11 w-full appearance-none rounded-lg border-[1.5px] border-neutral-200 bg-white pl-3.5 pr-10 text-sm text-neutral-900",
            "outline-none transition-all cursor-pointer",
            "hover:border-neutral-300 focus:border-indigo-500 focus:ring-[3px] focus:ring-indigo-500/10",
            error && "border-red-400 bg-red-50",
            className
          )}
          {...props}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


// ──────────────────────────────────────────────────────────────────────────────
// Textarea.tsx — Atom
// ──────────────────────────────────────────────────────────────────────────────
import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  showCount?: boolean;
  maxLength?: number;
}

export function Textarea({
  label, optional, error, showCount, maxLength, className, id, value = "", ...props
}: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  const count = String(value).length;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="flex items-center justify-between text-sm font-medium text-neutral-700">
          {label}
          {optional && <span className="text-xs font-normal text-neutral-400">Optional</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        maxLength={maxLength}
        value={value}
        className={cn(
          "min-h-[90px] w-full rounded-lg border-[1.5px] border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900",
          "placeholder:text-neutral-400 outline-none transition-all resize-vertical leading-relaxed",
          "hover:border-neutral-300 focus:border-indigo-500 focus:ring-[3px] focus:ring-indigo-500/10",
          error && "border-red-400 bg-red-50",
          className
        )}
        {...props}
      />
      <div className="flex items-center justify-between">
        {error
          ? <p className="text-xs text-red-500">{error}</p>
          : <span />
        }
        {showCount && maxLength && (
          <p className="text-xs text-neutral-400">{count}/{maxLength}</p>
        )}
      </div>
    </div>
  );
}
