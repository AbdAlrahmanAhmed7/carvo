import { motion } from "motion/react";
import { Smartphone, CheckCircle2, QrCode, ArrowRight } from "lucide-react";

export default function MobileAppSection() {
  return (
    <section className="py-32 relative overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="glass rounded-[3rem] overflow-hidden p-12 lg:p-20 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                TAKE THE <br />
                <span className="text-accent italic">EXCLUSIVE FLEET</span> <br />
                IN YOUR POCKET
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed mb-12 max-w-md">
                Download the Carvo app for the ultimate concierge experience. Book, track, and manage your luxury vehicles on the go.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "One-tap contactless vehicle unlock",
                  "Real-time GPS delivery tracking",
                  "Direct access to your digital concierge"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                    <span className="text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3">
                  <Smartphone className="w-5 h-5" /> App Store
                </button>
                <div className="flex items-center gap-4 px-6 py-4 glass rounded-3xl">
                  <QrCode className="w-8 h-8 text-white/40" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Scan to <br />Download</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              {/* Mockup visualization */}
              <div className="relative z-10 w-[320px] aspect-[9/19] bg-[#0d0d0d] rounded-[3rem] border-[8px] border-[#1a1a1a] p-4 shadow-[0_0_100px_rgba(59,130,246,0.3)] mx-auto">
                <div className="w-32 h-6 bg-[#1a1a1a] rounded-full mx-auto mb-10" /> {/* Notch */}
                <div className="flex flex-col gap-6">
                  <div className="h-12 w-full bg-white/5 rounded-2xl p-3 flex items-center justify-between">
                     <div className="w-6 h-6 rounded-full bg-accent" />
                     <div className="h-2 w-20 bg-white/10 rounded-full" />
                     <div className="w-6 h-6 rounded-full border border-white/10" />
                  </div>
                  <div className="h-48 w-full bg-accent/20 rounded-[2rem] border border-accent/30 overflow-hidden relative group">
                     <div className="absolute inset-x-0 bottom-4 text-center">
                        <div className="h-1 w-20 bg-white/40 rounded-full mx-auto" />
                     </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-20 w-full bg-white/5 rounded-2xl" />
                    <div className="h-20 w-full bg-white/5 rounded-2xl" />
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 top-20 glass p-6 rounded-3xl z-20 w-56 shadow-2xl"
              >
                <p className="text-[10px] uppercase font-bold text-accent mb-2 tracking-widest">Delivery Status</p>
                <p className="text-sm font-bold">Driver Arriving in 4m</p>
                <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full w-[80%] bg-accent" />
                </div>
              </motion.div>

              <motion.div
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-20 bottom-20 glass p-6 rounded-3xl z-20 w-56 shadow-2xl"
              >
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2 tracking-widest">Digital Key</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                   </div>
                   <p className="text-sm font-bold">Active Unlock</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
