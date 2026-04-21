import Button from './ui/Button';
import maskotLomba from '../assets/Maskot-Lomba.png';

export default function CompetitionSection() {
  return (
    <>
      <div className="w-full relative -mt-1 z-10 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 150" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full block h-16 md:h-32 lg:h-40" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#fae3ef" 
            fillOpacity="0.5" 
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,96C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          ></path>
          <path 
            fill="#fceedf" 
            className="fill-[#fae8f0]"
            d="M0,96L60,101.3C120,107,240,117,360,101.3C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"
          ></path>
        </svg>
      </div>

      <section className="w-full bg-[#fae8f0] py-16 lg:py-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 flex justify-center items-center relative lg:order-1 order-2">
            <div className="relative w-full max-w-[320px] md:max-w-95 lg:max-w-105">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-500/20 blur-[80px] rounded-full pointer-events-none"></div>
              
              <img 
                src={maskotLomba} 
                alt="Maskot IT Competition" 
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex-1 max-w-2xl lg:order-2 order-1">
            <h2 className="text-[40px] md:text-[48px] font-medium text-[#8b2551] mb-6 tracking-tight">
              KHODAM COMPETITION
            </h2>
            <p className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
              "<strong className="text-slate-800 font-bold">From Action to Fight</strong>" adalah sebuah kompetisi Ilmu dalam dan bertarun dengan ilmu yang tidak kasat mata untuk membangun mental yang kuat bak baja
            </p>
            <Button className="uppercase tracking-wider">
              DAFTAR KHODAM COMPETITION
            </Button>
          </div>

        </div>
      </section>

      <div className="w-full relative z-10 pointer-events-none overflow-hidden -mt-1 bg-white">
        <svg 
          viewBox="0 0 1440 150" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full block h-16 md:h-32 lg:h-40 transform rotate-180" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#fae3ef" 
            fillOpacity="0.5" 
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,96C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          ></path>
          <path 
            fill="#fceedf" 
            className="fill-[#fae8f0]"
            d="M0,96L60,101.3C120,107,240,117,360,101.3C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"
          ></path>
        </svg>
      </div>
    </>
  );
}