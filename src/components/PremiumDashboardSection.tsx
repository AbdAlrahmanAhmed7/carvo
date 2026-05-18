import { motion } from "motion/react";
import { LayoutDashboard, Battery, Map, Settings, ShieldCheck, Activity } from "lucide-react";

import suvImg from "../assets/images/suv.png";

export default function PremiumDashboardSection() {
  return (
    <section className="py-32 container mx-auto px-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-6 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> SECURE HUB
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            YOUR PERSONAL <br />
            <span className="text-white/30 italic">CARVO PANEL</span>
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed mb-12 max-w-md">
            Manage your fleet, track deliveries in real-time, and control vehicle settings before you even step inside. Experience true digital ownership.
          </p>

          <div className="flex gap-4">
             <button className="px-8 py-4 bg-white text-black rounded-full font-bold">Open Dashboard</button>
             <button className="px-8 py-4 glass rounded-full font-bold">Learn More</button>
          </div>
        </motion.div>

        {/* Dashboard Visualizer */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          className="relative perspective-[1000px]"
        >
          <div className="glass rounded-[2rem] p-1 shadow-[0_0_100px_rgba(59,130,246,0.2)] overflow-hidden scale-105 lg:translate-x-12">
            <div className="bg-[#050505] rounded-[1.8rem] p-8 min-h-[500px]">
              {/* Dashboard Sidebar Mock */}
              <div className="flex gap-8 h-full">
                <div className="w-16 flex flex-col gap-8 items-center py-4 border-r border-white/5">
                  {[LayoutDashboard, Map, Settings, Activity].map((Icon, i) => (
                    <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${i === 0 ? 'bg-accent shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'hover:bg-white/5 text-white/40 hover:text-white'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-bold">Hello, Alexander</h3>
                    <div className="flex gap-3">
                      <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest">Active Rental</div>
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-xs">AW</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                     <div className="glass p-6 rounded-3xl">
                        <div className="flex justify-between items-start mb-4">
                           <Battery className="w-6 h-6 text-green-500" />
                           <span className="text-2xl font-bold">82%</span>
                        </div>
                        <p className="text-[10px] uppercase font-bold text-white/40">Range (420km)</p>
                     </div>
                     <div className="glass p-6 rounded-3xl border-accent/30">
                        <div className="flex justify-between items-start mb-4">
                           <Map className="w-6 h-6 text-accent" />
                           <span className="text-lg font-bold">En Route</span>
                        </div>
                        <p className="text-[10px] uppercase font-bold text-white/40">Delivery Location</p>
                     </div>
                  </div>

                  {/* Car Preview in Dash */}
                  <div className="relative h-48 rounded-[2rem] overflow-hidden group">
                     <img 
                        src={suvImg} 
                        className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                     <div className="absolute bottom-6 left-6">
                        <p className="text-lg font-bold">Range Rover Autobiography</p>
                        <p className="text-xs text-white/40">Premium Silver Metallic</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating UI Dots */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
