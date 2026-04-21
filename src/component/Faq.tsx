import Collapse from './ui/Collapse';

export default function FaqSection() {
  const faqs = [
    { 
      q: "Apa itu INVOFEST?", 
      a: "INVOFEST adalah acara festival tahunan teknologi inovatif yang mencakup kompetisi IT, seminar nasional, dan workshop digital." 
    },
    { 
      q: "Bagaimana saya mengetahui pemenang kompetisi?", 
      a: "Pengumuman pemenang akan disampaikan pada acara Puncak INVOFEST dan dipublikasikan melalui media sosial resmi kami." 
    },
    { 
      q: "Kapan dan dimana INVOFEST dilaksanakan?", 
      a: "Jadwal dan lokasi rinci dapat dicek pada halaman jadwal atau terus pantau Instagram resmi kami untuk update terbaru." 
    },
    { 
      q: "Apa yang didapat pemenang dalam kompetisi?", 
      a: "Para pemenang akan mendapatkan uang tunai jutaan rupiah, sertifikat nasional, serta berbagai merchandise menarik dari sponsor." 
    },
    { 
      q: "Apakah ada biaya pendaftaran di INVOFEST?", 
      a: "Beberapa acara seperti Talkshow terbuka secara gratis, sedangkan Kompetisi dan Workshop dikenakan biaya registrasi ringan." 
    },
    { 
      q: "Bagaimana cara mendaftar event?", 
      a: "Anda dapat mendaftar dengan mengklik tombol DAFTAR pada setiap bagian event pilihan Anda dan mengisi formulir yang tersedia." 
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-slate-600 font-bold mb-4 text-[15px]">FAQ</p>
          <h2 className="text-[32px] md:text-[40px] font-bold text-slate-700 mb-6 leading-tight">
            Punya Pertanyaan? Lihat <br />
            <span className="text-[#8b2551]">Disini</span>
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[16px] max-w-xl mx-auto leading-relaxed">
            Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {faqs.map((faq, index) => (
            <Collapse key={index} title={faq.q}>
              {faq.a}
            </Collapse>
          ))}
        </div>

      </div>
    </section>
  );
}