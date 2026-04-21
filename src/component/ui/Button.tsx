import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
}

export default function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "group relative overflow-hidden text-[13px] px-6 py-2.5 rounded-[5px] font-semibold tracking-wide active:scale-95 transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    solid: "bg-[#8b2551] text-white hover:bg-[#6c1c3f] shadow-md hover:shadow-pink-900/30 after:z-20 after:content-[''] after:absolute after:inset-0 after:-left-[50%] after:-right-[50%] after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:skew-x-[45deg] after:translate-x-[150%] hover:after:-translate-x-[150%] after:transition-transform after:duration-[1500ms] after:ease-in-out",
    outline: "bg-white text-[#8b2551] border border-[#8b2551]/60 hover:text-white hover:border-[#8b2551] hover:shadow-md before:z-0 before:content-[''] before:absolute before:inset-0 before:-left-[50%] before:-right-[50%] before:bg-[#8b2551] before:skew-x-[45deg] before:origin-center before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-1000 before:ease-in-out"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 w-full flex items-center justify-center">{children}</span>
    </button>
  );
}