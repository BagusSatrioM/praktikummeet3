import { Home, Contact, Trophy, Wrench, Mic } from 'lucide-react';
import navLogo from '../assets/nav-logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fae8f0] pt-16 pb-6 px-6 lg:px-12 relative z-10 border-t border-pink-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          
          <div className="flex flex-col items-start pr-0 lg:pr-8">
            <img src={navLogo} alt="Invofest Logo" className="w-45-[200px] object-contain mb-6 drop-shadow-sm" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-slate-800 font-bold mb-6 text-[15px] uppercase tracking-wider">Menu Navigasi</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <Home className="w-4.5 h-4.5 text-slate-500" />
                  <span className="text-[15.5px]">Beranda</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <Contact className="w-4.5 h-4.5 text-slate-500" />
                  <span className="text-[15.5px]">Seminar</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <Trophy className="w-4.5 h-4.5 text-slate-500" />
                  <span className="text-[15.5px]">Competition</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <Wrench className="w-4.5 h-4.5 text-slate-500" />
                  <span className="text-[15.5px]">Workshop</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <Mic className="w-4.5 h-4.5 text-slate-500" />
                  <span className="text-[15.5px]">Talkshow</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-slate-800 font-bold mb-6 text-[15px] uppercase tracking-wider">Ikuti Kami</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <svg className="w-4.5 h-4.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="text-[15.5px]">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-slate-600 hover:text-[#8b2551] hover:translate-x-1 transition-all gap-4">
                  <svg className="w-4.5 h-4.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  <span className="text-[15.5px]">Youtube</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-slate-800 font-bold mb-6 text-[15px] uppercase tracking-wider">Alamat</h3>
            <div className="w-full h-45 rounded-lg overflow-hidden border-2 border-pink-100 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.226922253755!2d109.1179653!3d-6.863378999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb76bad911111%3A0xcb1b51e9eeea9f6c!2sPoliteknik%20Harapan%20Bersama!5e0!3m2!1sen!2sid!4v1689123456789!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Politeknik Harapan Bersama"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-pink-200/60 mt-4 flex justify-between items-center flex-wrap gap-4">
          <p className="text-slate-500 text-[14.5px]">
            © 2025 INVOFEST. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}