import { motion } from "motion/react";
import { TESTIMONIALS } from "../constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-32 container mx-auto px-6 overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">World Class Experience</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">CLIENT TESTIMONIALS</h2>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex-1 min-w-[300px] max-w-[400px]"
          >
            <div className="glass p-10 rounded-[2.5rem] relative group h-full flex flex-col justify-between">
              <Quote className="w-12 h-12 text-white/5 absolute -top-4 -left-4" />
              
              <div className="relative z-10">
                <p className="text-xl text-white/70 italic leading-relaxed mb-10 font-light font-display">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white/10 group-hover:border-accent transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
