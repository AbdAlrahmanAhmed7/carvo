import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedCars from "./components/FeaturedCars";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingProcess from "./components/BookingProcess";
import PremiumDashboardSection from "./components/PremiumDashboardSection";
import MobileAppSection from "./components/MobileAppSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <SearchBar />
        <Categories />
        <FeaturedCars />
        <WhyChooseUs />
        <BookingProcess />
        <PremiumDashboardSection />
        <MobileAppSection />
        <FAQ />
      </main>

      <Footer />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[50%] aspect-square rounded-full bg-blue-600/10 blur-[120px]"
        />
        <motion.div
           animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[10%] left-[20%] w-[40%] aspect-square rounded-full bg-indigo-600/10 blur-[100px]"
        />
      </div>
    </div>
  );
}
