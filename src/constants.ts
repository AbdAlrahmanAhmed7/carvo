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
    image: "/src/assets/images/sports_car_card_1779110434691.png"
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
    image: "/src/assets/images/luxury_suv_card_1779110402333.png"
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
    image: "/src/assets/images/electric_car_card_1779110418898.png"
  },
  {
    id: 4,
    name: "Lamborghini Huracán",
    category: "Sports",
    price: 1500,
    specs: {
      engine: "V10 Naturally Aspirated",
      power: "631 HP",
      speed: "202 mph",
      acceleration: "3.2s"
    },
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    name: "Bentley Continental GT",
    category: "Luxury",
    price: 800,
    specs: {
      engine: "W12 Twin-Turbo",
      power: "626 HP",
      speed: "207 mph",
      acceleration: "3.6s"
    },
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000"
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
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
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
