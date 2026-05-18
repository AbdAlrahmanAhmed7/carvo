import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 bg-white/5 mt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 pr-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-black">
                C
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase font-display">Carvo</span>
            </div>
            <p className="text-white/40 font-light leading-relaxed mb-8 max-w-sm">
              The world's most exclusive luxury car rental platform. 
              Delivering automotive excellence to the connoisseurs of prestige.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#fff" }}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Fleet</h4>
            <ul className="space-y-4">
              {["Supercars", "Luxury Sedans", "Premium SUVs", "Electric"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4">
              {["Concierge", "Chauffeur", "VIP Airport", "Events"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 font-light">Join for exclusive fleet access and events.</p>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Elite Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-12 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            &copy; 2026 CARVO LUXURY RENTALS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -mb-32 -mr-32" />
    </footer>
  );
}
