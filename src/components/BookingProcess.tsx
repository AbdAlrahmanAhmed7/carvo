import { motion } from "motion/react";
import { Search, Calendar, CreditCard, Key } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Select Fleet",
    desc: "Choose from our curated collection of luxury vehicles."
  },
  {
    icon: Calendar,
    title: "Book Date",
    desc: "Set your pick-up and drop-off schedule."
  },
  {
    icon: CreditCard,
    title: "Instant Verification",
    desc: "Secure payment and digital ID verification."
  },
  {
    icon: Key,
    title: "Take The Wheel",
    desc: "Start your premium journey with white-glove delivery."
  }
];

export default function BookingProcess() {
  return (
    <section id="booking" className="py-32 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">The Process</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">FOUR STEPS TO <span className="text-white/30">PRESTIGE</span></h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-surface border border-white/10 group-hover:border-accent group-hover:scale-110 flex items-center justify-center mb-8 transition-all duration-500 relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <step.icon className="w-8 h-8 text-white relative z-10" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center">0{i+1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
