import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  description: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex justify-between items-center"
      >
        <span>{title}</span>
        <ChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-gray-50">
          {description}
        </div>
      )}
    </div>
  );
};