import { motion } from "motion/react";
import { Search, Calendar, MapPin, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="container mx-auto px-6 -mt-10 relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex flex-col lg:flex-row items-stretch lg:items-center gap-2 shadow-2xl"
      >
        <div className="flex-1 flex flex-col md:flex-row items-stretch lg:items-center p-2 gap-4 lg:gap-0">
          {/* Location */}
          <div className="flex-1 px-6 py-2 flex flex-col cursor-pointer hover:bg-white/5 rounded-xl transition-all">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Location</span>
            <span className="text-sm font-medium">Los Angeles, CA</span>
          </div>
          
          <div className="hidden lg:block w-[1px] h-8 bg-white/10 mx-4"></div>

          {/* Date Range */}
          <div className="flex-1 px-6 py-2 flex flex-col cursor-pointer hover:bg-white/5 rounded-xl transition-all">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Rental Period</span>
            <span className="text-sm font-medium">Oct 24 - Oct 28</span>
          </div>

          <div className="hidden lg:block w-[1px] h-8 bg-white/10 mx-4"></div>

          {/* Type */}
          <div className="flex-1 px-6 py-2 flex flex-col cursor-pointer hover:bg-white/5 rounded-xl transition-all">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Car Class</span>
            <span className="text-sm font-medium">Performance Luxury</span>
          </div>
        </div>

        {/* Search Action */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 lg:py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          Search Fleet
        </motion.button>
      </motion.div>
    </div>
  );
}
