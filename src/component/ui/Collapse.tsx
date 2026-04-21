import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

export default function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.15)] border border-pink-100 relative overflow-hidden transition-all duration-300">
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#8b2551]"></div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-5 lg:p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="shrink-0 w-10 h-10 bg-slate-50 rounded-md flex items-center justify-center mr-5 border border-slate-100">
          <ChevronDown 
            className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            strokeWidth={2.5}
          />
        </div>
        <span className="text-slate-700 font-semibold text-[15px] pr-4 leading-snug">{title}</span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 lg:px-6 pl-20 lg:pl-21 text-slate-500 text-[14px] leading-relaxed pr-6">
          {children}
        </div>
      </div>
    </div>
  );
}