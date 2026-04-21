import Button from "./ui/Button";
import Card from "./ui/Card";

export default function TentangSection() {
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

      <section className="w-full bg-[#fae8f0] py-10 lg:py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-5xl">
            <h2 className="text-[40px] md:text-[46px] font-medium text-[#8b2551] mb-6 tracking-tight">
              Tentang <span className="font-bold">INVOFEST</span>
            </h2>
            <p className="text-slate-600/90 text-[16px] md:text-[17px] leading-relaxed">
              Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema <strong className="text-slate-800 font-bold">"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow "</strong>. Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <Card 
              title="IT Seminar" 
              description='Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.'
            >
              <Button className="w-full text-xs">INFO SELENGKAPNYA</Button>
            </Card>

            <Card 
              title="IT Talkshow" 
              description='Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.'
            >
              <Button className="w-full text-xs">INFO SELENGKAPNYA</Button>
            </Card>

            <Card 
              title="IT Competition" 
              description='Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan.'
            >
              <Button className="w-full text-xs">INFO SELENGKAPNYA</Button>
            </Card>

            <Card 
              title="IT Workshop" 
              description="Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan."
            >
              <Button className="w-full text-xs">INFO SELENGKAPNYA</Button>
            </Card>

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