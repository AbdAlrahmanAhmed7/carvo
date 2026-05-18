import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 px-6 md:px-12" : "py-8 px-6 md:px-12"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-8 py-3 rounded-2xl flex items-center justify-between transition-all duration-500 bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl`}>
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/30">
            C
          </div>
          <span className="text-2xl font-bold tracking-tight uppercase font-display">Carvo</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Fleet", "Prestige", "Concierge", "Booking"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors tracking-[0.2em] uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all text-xs font-bold uppercase tracking-widest">
            <UserCircle className="w-4 h-4" /> Sign In
          </button>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-dark rounded-3xl p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Fleet", "Prestige", "Concierge", "Booking"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-lg font-medium text-white/70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <hr className="border-white/5" />
              <button className="py-4 bg-white text-black rounded-2xl font-bold">Client Login</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
