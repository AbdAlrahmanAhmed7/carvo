import { motion } from "motion/react";
import { ShieldCheck, CalendarCheck, MapPin, Sparkles, CreditCard, Headphones } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Premium Protection",
    desc: "Comprehensive insurance coverage for total peace of mind during your journey."
  },
  {
    icon: CalendarCheck,
    title: "Flexible Booking",
    desc: "Modify or cancel your reservation up to 24 hours before your trip starts."
  },
  {
    icon: MapPin,
    title: "Doorstep Delivery",
    desc: "We deliver your dream car to your hotel, airport, or residence anywhere."
  },
  {
    icon: Headphones,
    title: "24/7 Digital Concierge",
    desc: "Professional support available round the clock for any assistance you need."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-6 block">Elite Advantage</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9]">
              WHY DRIVERS <br />
              <span className="text-white/30 italic">CHOOSE CARVO</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Beyond just luxury car rentals, we provide a lifestyle. Our commitment to excellence 
              ensures that every detail of your journey is meticulously handled by professionals.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { val: "500+", label: "Luxury Cars" },
                { val: "24h", label: "Delivery" },
                { val: "35+", label: "Locations" },
                { val: "10k+", label: "Clients" }
              ].map((stat, i) => (
                <div key={i}>
                  <h4 className="text-3xl font-bold text-white mb-1 tracking-tighter">{stat.val}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-accent animate-pulse group-hover:animate-none transition-all">
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
