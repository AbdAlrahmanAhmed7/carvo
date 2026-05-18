import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../constants";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">FREQUENTLY ASKED <br /><span className="text-white/30">QUESTIONS</span></h2>
          <p className="text-white/40 font-light leading-relaxed mb-8">
            Got questions about our rental process or specialized premium services? We've got you covered.
          </p>
          <button className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all">Support Desk</button>
        </motion.div>

        <div className="lg:col-span-2 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-medium transition-colors ${activeIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${activeIndex === index ? 'bg-white text-black rotate-90' : 'text-white/40'}`}>
                  {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed font-light">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
