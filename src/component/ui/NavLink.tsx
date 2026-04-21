import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface NavlinkProps {
  href?: string;
  icon: LucideIcon;
  active?: boolean;
  children: React.ReactNode;
}

export default function Navlink({ href = "#", icon: Icon, active, children }: NavlinkProps) {
  if (active) {
    return (
      <a href={href} className="flex items-center gap-2 text-[#8b2551] font-bold text-[15px] tracking-wide relative group">
        <Icon className="w-5 h-5 fill-current" strokeWidth={2} />
        <span>{children}</span>
        <span className="absolute -bottom-7 left-0 w-full h-0.75 bg-[#8b2551] rounded-t-md opacity-100"></span>
      </a>
    );
  }

  return (
    <a href={href} className="flex items-center gap-2 text-gray-600 hover:text-[#8b2551] font-semibold text-[15px] tracking-wide transition-all duration-300 group">
      <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#8b2551] transition-colors" strokeWidth={2} />
      <span>{children}</span>
    </a>
  );
}