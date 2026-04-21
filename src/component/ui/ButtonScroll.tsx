import { ArrowUp } from 'lucide-react';

export default function ButtonScroll() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#8b2551] text-white p-3 rounded-full hover:bg-[#6c1c3f] transition-colors duration-300 z-50 shadow-md"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}