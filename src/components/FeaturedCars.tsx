import { motion } from "motion/react";
import { CARS } from "../constants";
import { Fuel, Gauge, Zap, ArrowUpRight } from "lucide-react";

export default function FeaturedCars() {
  return (
    <section id="fleet" className="py-32 px-6 container mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <span className="text-blue-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Elite Selection</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
            MEET THE <br />
            <span className="text-slate-500">CONNOISSEUR'S</span> FLEET
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-6 text-xs font-bold uppercase tracking-widest"
        >
          {["All Models", "Sport", "SUV"].map((cat, i) => (
            <button key={cat} className={`pb-1 border-b-2 transition-all ${i === 0 ? 'text-blue-500 border-blue-500' : 'text-slate-500 border-transparent hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARS.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Card Content */}
            <div className="bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 p-5">
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800 mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">{car.name}</h3>
                    <p className="text-slate-500 text-[10px] tracking-wide uppercase font-medium">Starting at</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-400">${car.price}</span>
                    <span className="text-slate-500 text-xs italic"> / day</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Gauge className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{car.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    {car.category === 'Electric' ? <Zap className="w-3.5 h-3.5 text-slate-500" /> : <Fuel className="w-3.5 h-3.5 text-slate-500" />}
                    <span className="text-[10px] font-bold uppercase tracking-widest">{car.specs.acceleration}</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shadow-xl shadow-transparent group-hover:shadow-blue-600/20"
                >
                  Configure & Book
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
