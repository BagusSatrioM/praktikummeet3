import media1 from '../assets/media/BPM PNG.png';
import media2 from '../assets/media/HMP D3 TEKNIK MESIN UHN.png';
import media3 from '../assets/media/HMPTI_ITB_STIKOM_BALI.png';
import media4 from '../assets/media/LOGO HIMAPIK.jpg';
import media5 from '../assets/media/LOGO HMP D3 DKV.png';
import media6 from '../assets/media/LOGO HMP D3 PERHOTELAN.png';
import media7 from '../assets/media/LOGO HMP TEKNIK KOMPUTER .png';
import media8 from '../assets/media/LOGO HMTIKA.png';
import media9 from '../assets/media/Logo BEM.png';
import media10 from '../assets/media/Logo warga tech.png';
import media11 from '../assets/media/PERMIKOMNAS RI.png';
import media12 from '../assets/media/logo HMTI UMMUS.png';
import media13 from '../assets/media/logo hima elektro.png';
import media14 from '../assets/media/logo info lomba IT.png';
import media15 from '../assets/media/lomba it ii.png';
import media16 from '../assets/media/permikomnas.png';

export default function MediaSection() {
  const medias = [
    { src: media1, alt: "BPM" },
    { src: media2, alt: "HMP Teknik Mesin UHN" },
    { src: media3, alt: "HMPTI ITB STIKOM" },
    { src: media4, alt: "HIMAPIK" },
    { src: media5, alt: "HMP DKV" },
    { src: media6, alt: "HMP Perhotelan" },
    { src: media7, alt: "HMP Teknik Komputer" },
    { src: media8, alt: "HMTIKA" },
    { src: media9, alt: "BEM" },
    { src: media10, alt: "Warga Tech" },
    { src: media11, alt: "Permikomnas RI" },
    { src: media12, alt: "HMTI UMMUS" },
    { src: media13, alt: "Hima Elektro" },
    { src: media14, alt: "Info Lomba IT" },
    { src: media15, alt: "Lomba IT 2" },
    { src: media16, alt: "Permikomnas" }
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20 px-6 lg:px-12 relative z-10 border-t border-pink-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[36px] md:text-[45px] font-bold text-[#475569] tracking-tight">
            Media Partner <span className="text-[#8b2551]">INVOFEST 2025</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden flex group">
          <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div 
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused] gap-12 md:gap-20 lg:gap-28 pr-12 md:pr-20 lg:pr-28"
            style={{ animationDuration: '60s' }}
          >
            {medias.map((media, index) => (
              <div 
                key={index} 
                className="flex justify-center items-center w-30 md:w-45 lg:w-60 transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={media.src} 
                  alt={media.alt} 
                  className="max-w-full max-h-20 md:max-h-30 object-contain"
                  style={{ mixBlendMode: 'multiply' }} 
                />
              </div>
            ))}
          </div>

          <div 
            className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused] gap-12 md:gap-20 lg:gap-28 pr-12 md:pr-20 lg:pr-28" 
            aria-hidden="true"
            style={{ animationDuration: '60s' }}
          >
            {medias.map((media, index) => (
              <div 
                key={`dup-${index}`} 
                className="flex justify-center items-center w-30 md:w-45 lg:w-60 transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={media.src} 
                  alt={media.alt} 
                  className="max-w-full max-h-20 md:max-h-30 object-contain"
                  style={{ mixBlendMode: 'multiply' }} 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}