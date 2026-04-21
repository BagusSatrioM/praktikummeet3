// PasswordInput.tsx — Atom (extends Input)
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  showStrength?: boolean;
}

function getStrength(val: string): 0 | 1 | 2 | 3 | 4 {
  if (!val) return 0;
  let s = 0;
  if (val.length >= 8) s++;
  if (/[A-Z]/.test(val)) s++;
  if (/[0-9]/.test(val)) s++;
  if (/[^A-Za-z0-9]/.test(val)) s++;
  return s as 0 | 1 | 2 | 3 | 4;
}

const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];
const STRENGTH_COLORS = [
  "",
  "bg-red-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-emerald-500",
];

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, showStrength = false, className, onChange, value = "", ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const strength = showStrength ? getStrength(String(value)) : 0;

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
            onChange={onChange}
            className={cn(
              "h-11 w-full rounded-lg border-[1.5px] border-neutral-200 bg-white px-3.5 pr-11 text-sm text-neutral-900",
              "placeholder:text-neutral-400 outline-none transition-all",
              "hover:border-neutral-300 focus:border-indigo-500 focus:ring-[3px] focus:ring-indigo-500/10",
              error && "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10",
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-indigo-500 transition-colors rounded"
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        {showStrength && (
          <>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={cn(
                    "h-0.75 flex-1 rounded-full transition-all duration-300",
                    i <= strength ? STRENGTH_COLORS[strength] : "bg-neutral-200"
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-neutral-400">
              {value ? STRENGTH_LABELS[strength] : "At least 8 characters"}
            </p>
          </>
        )}

        {error && (
          <p className="flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={12} /> {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

// Icons
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const AlertCircle = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
