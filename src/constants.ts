import sportsImg from "./assets/images/sports.png";
import suvImg from "./assets/images/suv.png";
import electricImg from "./assets/images/electric.png";
import bugattiImg from "./assets/images/bugatti_chiron_render_1779198101617.png";
import rollsImg from "./assets/images/rolls_royce_ghost_render_1779198119170.png";
import porscheImg from "./assets/images/porsche_911_gt3_render_1779198136194.png";

export const CARS = [
  {
    id: 1,
    name: "Ferrari F8 Tributo",
    category: "Sports",
    price: 1200,
    specs: {
      engine: "V8 Twin-Turbo",
      power: "710 HP",
      speed: "211 mph",
      acceleration: "2.9s"
    },
    image: sportsImg
  },
  {
    id: 2,
    name: "Range Rover Autobiography",
    category: "SUV",
    price: 450,
    specs: {
      engine: "V8 Supercharged",
      power: "518 HP",
      speed: "155 mph",
      acceleration: "5.1s"
    },
    image: suvImg
  },
  {
    id: 3,
    name: "Tesla Model S Plaid",
    category: "Electric",
    price: 350,
    specs: {
      engine: "Tri-Motor",
      power: "1020 HP",
      speed: "200 mph",
      acceleration: "1.99s"
    },
    image: electricImg
  },
  {
    id: 4,
    name: "Bugatti Chiron",
    category: "Sports",
    price: 2500,
    specs: {
      engine: "W16 Quad-Turbo",
      power: "1479 HP",
      speed: "261 mph",
      acceleration: "2.4s"
    },
    image: bugattiImg
  },
  {
    id: 5,
    name: "Rolls-Royce Ghost",
    category: "Luxury",
    price: 1800,
    specs: {
      engine: "V12 Twin-Turbo",
      power: "563 HP",
      speed: "155 mph",
      acceleration: "4.6s"
    },
    image: rollsImg
  },
  {
    id: 6,
    name: "Porsche 911 GT3",
    category: "Sports",
    price: 900,
    specs: {
      engine: "Flat-6",
      power: "502 HP",
      speed: "197 mph",
      acceleration: "3.2s"
    },
    image: porscheImg
  }
];

export const CATEGORIES = [
  { name: "Sports", icon: "Flag" },
  { name: "SUV", icon: "Mountain" },
  { name: "Electric", icon: "Zap" },
  { name: "Luxury", icon: "Crown" },
  { name: "Family", icon: "Users" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "CEO at TechFlow",
    content: "The experience was absolutely seamless. From the moment I booked the Ferrari to the drop-off, everything was premium.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Design Director",
    content: "Carvo redefined car rental for me. The interface is as sleek as the cars they offer. Highly recommended for luxury seekers.",
    avatar: "https://i.pravatar.cc/150?u=sophia"
  },
  {
    id: 3,
    name: "Marcus Jordan",
    role: "Professional Athlete",
    content: "Great selection of high-end vehicles. The Tesla Plaid was in pristine condition. Best service in the city.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What documents are required for rental?",
    answer: "You will need a valid driver's license (international if applicable), a passport or national ID, and a credit card for the security deposit."
  },
  {
    question: "Is insurance included in the price?",
    answer: "Yes, our basic premium insurance is included. We also offer comprehensive 'No-Deductible' coverage as an optional add-on during checkout."
  },
  {
    question: "Can I deliver the car to a specific location?",
    answer: "Absolutely. We offer white-glove delivery to your hotel, airport, or private residence within the city limits at no extra cost for rentals over 3 days."
  },
  {
    question: "What is the minimum age for high-performance cars?",
    answer: "For our 'Sports' and 'Supercar' categories, the minimum age is 25 years with at least 3 years of driving experience."
  }
];
