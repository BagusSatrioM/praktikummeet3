interface CardPembicaraProps {
  name: string;
  role: string;
  src: string;
  isVideo?: boolean;
}

export default function CardPembicara({ name, role, src, isVideo }: CardPembicaraProps) {
  return (
    <div className="relative w-full max-w-85 bg-white border-[3px] border-[#8b2551] rounded-xl pt-32.5 pb-8 px-6 text-center mt-32 shadow-xl">
      
      <div className="absolute left-1/2 -top-28 transform -translate-x-1/2 w-56 h-56 bg-white rounded-full flex items-center justify-center">
        
        <div className="w-50 h-50 rounded-full border-4 border-[#8b2551] overflow-hidden relative shadow-inner">
          
          <div className="absolute inset-0 bg-linier from-[#8b2551] from-10% to-pink-400"></div>
          
          {isVideo ? (
            <video 
              src={src} 
              autoPlay loop muted playsInline 
              className="relative z-10 w-full h-full object-cover object-center scale-[1.02]" 
            />
          ) : (
            <img 
              src={src} 
              alt={name} 
              className="relative z-10 w-full h-full object-cover object-center scale-[1.02]" 
            />
          )}
        </div>
      </div>

      <h3 className="text-[22px] font-bold text-[#8b2551] mb-2">{name}</h3>
      <p className="text-[14.5px] leading-relaxed text-slate-500 max-w-[90%] mx-auto">{role}</p>
    </div>
  );
}
