import dicoding from '../assets/sponsor/dicoding_official.png';
import domainesia from '../assets/sponsor/domainesia.png';
import bahariInn from '../assets/sponsor/bahari_inn.jpg';
import bigBerry from '../assets/sponsor/big_berry.png';
import indoPrint from '../assets/sponsor/indo_print.jpg';
import plazaHotel from '../assets/sponsor/plaza_hotel_tegal.jpg';

export default function SponsorSection() {
  const sponsors = [
    { src: dicoding, alt: "Dicoding" },
    { src: domainesia, alt: "DomaiNesia" },
    { src: bahariInn, alt: "Bahari Inn Tegal" },
    { src: bigBerry, alt: "Big Berry" },
    { src: indoPrint, alt: "Indo Print" },
    { src: plazaHotel, alt: "Plaza Hotel Tegal" }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-28 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[36px] md:text-[45px] font-bold text-[#475569] tracking-tight">
            Sponsor <span className="text-[#8b2551]">INVOFEST 2025</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden flex group">
          <div className="absolute top-0 left-0 w-24 h-full bg-linier-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-linier-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused] gap-16 md:gap-24 lg:gap-32 pr-16 md:pr-24 lg:pr-32">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="flex justify-center items-center w-37.5 md:w-55 lg:w-70 transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={sponsor.src} 
                  alt={sponsor.alt} 
                  className="max-w-full max-h-25 md:max-h-35 object-contain"
                  style={{ mixBlendMode: 'multiply' }} 
                />
              </div>
            ))}
          </div>

          <div className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused] gap-16 md:gap-24 lg:gap-32 pr-16 md:pr-24 lg:pr-32" aria-hidden="true">
            {sponsors.map((sponsor, index) => (
              <div 
                key={`dup-${index}`} 
                className="flex justify-center items-center w-37.5 md:w-55 lg:w-70 transition-transform duration-300 hover:scale-110"
              >
                <img 
                  src={sponsor.src} 
                  alt={sponsor.alt} 
                  className="max-w-full max-h-25 md:max-h-35 object-contain"
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