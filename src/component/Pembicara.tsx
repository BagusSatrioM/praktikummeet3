import card1 from '../assets/pembicara1.jpg';
import card2 from '../assets/pembicara2.jpg';
import card3 from '../assets/pembicara3.jpg';
import CardPembicara from './ui/CardPembicara';

export default function PembicaraSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center justify-center">
          
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-[36px] md:text-[45px] font-bold text-slate-700 tracking-tight">
              Pembicara <span className="text-[#8b2551]">INVOFEST 2025</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 w-full place-items-center">
            
            <CardPembicara 
              name="Jajang Tak ujang " 
              role="Petarung dengan 56 tahun di umur 3 tahun" 
              src={card1}
            />

            <CardPembicara 
              name="Broowowow" 
              role="Master Tenaga dalam" 
              src={card2} 
            />

            <CardPembicara 
              name="Owipritt" 
              role="Actor terkenal dengan seni beladiri aliran turun temurun" 
              src={card3}
            />

          </div>
        </div>

      </div>
    </section>
  );
}