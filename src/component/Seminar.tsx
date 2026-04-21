import Button from './ui/Button';
import maskotSeminar from '../assets/Maskot-Seminar.png';

export default function SeminarSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div className="flex-1 max-w-2xl">
          <h2 className="text-[40px] md:text-[48px] font-medium text-[#8b2551] mb-6 tracking-tight">
            IT Seminar
          </h2>
          <p className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
            Seminar Nasional Teknologi Informasi ini mengangkat tema <strong className="text-slate-800 font-bold">"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif."</strong>Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.
          </p>
          <Button className="uppercase tracking-wider">
            DAFTAR IT SEMINAR
          </Button>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-full max-w-[320px] md:max-w-95 lg:max-w-105">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-500/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <img 
              src={maskotSeminar} 
              alt="Maskot IT Seminar" 
              className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}