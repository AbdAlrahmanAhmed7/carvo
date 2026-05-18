import { motion } from "motion/react";
import { Flag, Mountain, Zap, Crown, Users } from "lucide-react";
import { CATEGORIES } from "../constants";

const ICON_MAP: Record<string, any> = {
  Flag, Mountain, Zap, Crown, Users
};

export default function Categories() {
  return (
    <section className="py-20 relative px-6">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold mb-8 text-center text-white">Featured Collections</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon];
            return (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className={`flex flex-col items-center gap-3 group transition-all px-8 py-4 rounded-2xl border ${i === 0 ? 'bg-blue-600/10 border-blue-500/50' : 'bg-slate-900 border-white/5 hover:border-slate-700'}`}
              >
                <div className={`p-3 rounded-xl transition-all ${i === 0 ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'}`}>{cat.name}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
