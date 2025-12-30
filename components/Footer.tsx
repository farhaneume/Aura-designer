
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white py-24 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold italic mb-8">Ready to start?</h2>
            <p className="text-xl text-zinc-500 mb-10 max-w-sm">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
            <a 
              href="mailto:hello@auradesign.com" 
              className="text-3xl font-display border-b-2 border-zinc-900 pb-2 hover:opacity-50 transition-opacity"
            >
              hello@auradesign.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-6">Socials</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:underline underline-offset-4">Instagram</a></li>
                <li><a href="#" className="hover:underline underline-offset-4">Behance</a></li>
                <li><a href="#" className="hover:underline underline-offset-4">Dribbble</a></li>
                <li><a href="#" className="hover:underline underline-offset-4">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-6">Offices</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                45 Creative Way<br/>
                Shoreditch, London<br/>
                EC1A 2BN
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400">© 2024 Aura Design Studio. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-zinc-900">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
