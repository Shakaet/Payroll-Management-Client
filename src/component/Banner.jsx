import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Context } from '../provider/AuthProvider';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMoneyCheckAlt, FaUsers,FaFileInvoiceDollar, FaUserTie, FaChartPie, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
import bg from "../assets/bg1.jpg"









const Banner = () => {
  // Hero Banner Auto-Sliding State
  const [currentSlide, setCurrentSlide] = useState(0);

  let {darkmode}= useContext(Context)

  const slides = [
    {
      title: "Streamline Your Payroll Process",
      description: "Effortlessly manage employee salaries, taxes, and benefits with our intuitive platform.",
      image: "https://i.ibb.co/xKHxFjZh/vecteezy-hand-touching-infographic-cloud-computing-and-technology-10823369.jpg",
      cta: "Get Started Now",
    },
    {
      title: "Secure & Compliant Payroll",
      description: "Ensure compliance with tax laws and keep your data safe with top-tier security.",
      image: "https://i.ibb.co/S4vKJRpj/vecteezy-hand-touching-infographic-cloud-computing-and-technology-10811806.jpg",
      cta: "Learn More",
    },
    {
      title: "Real-Time Payroll Insights",
      description: "Access detailed reports and analytics to make informed financial decisions.",
      image: "https://i.ibb.co/prR2nfrF/vecteezy-digital-transformation-technology-strategy-digitization-and-16850486.jpg",
      cta: "Explore Features",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  // Features Data
  const features = [
    { title: "Automated Payroll", description: "Process salaries in minutes.", icon: "📅" },
    { title: "Tax Compliance", description: "Stay compliant with ease.", icon: "🛡️" },
    { title: "Employee Portal", description: "Self-service for your team.", icon: "👥" },
    { title: "Reporting", description: "Insightful analytics.", icon: "📊" },
  ];

  // How It Works Data
  const steps = [
    { step: "1", title: "Set Up Employees", description: "Add employee details quickly." },
    { step: "2", title: "Process Payroll", description: "Automate salary calculations." },
    { step: "3", title: "Generate Reports", description: "Access real-time insights." },
  ];

  // Testimonials Data
  const testimonials = [
    { quote: "This system saved us hours every week!", name: "Jane Doe", company: "TechCorp" },
    { quote: "Compliance has never been easier.", name: "John Smith", company: "GrowEasy" },
    { quote: "The reporting tools are a game-changer.", name: "Emily Brown", company: "ScaleUp" },
  ];

  // Pricing Teaser Data
  const plans = [
    { name: "Basic", features: ["Payroll for up to 10 employees", "Tax filing"], price: "$29/mo" },
    { name: "Pro", features: ["Unlimited employees", "Advanced reporting"], price: "$99/mo" },
  ];

  // Integrations Data
  const integrations = [
    { name: "QuickBooks", logo: "https://via.placeholder.com/100?text=QuickBooks" },
    { name: "Xero", logo: "https://via.placeholder.com/100?text=Xero" },
    { name: "Slack", logo: "https://via.placeholder.com/100?text=Slack" },
  ];

  // Trust Badges Data
  const stats = [
    { value: "10,000+", label: "Businesses Served" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconStyles = [
    { color: '#FF6B6B', label: "Salary Automation" },       // bright red
    { color: '#4ECDC4', label: "Tax & Compliance" },        // teal
    { color: '#FFD93D', label: "Employee Management" },     // yellow
    { color: '#1A535C', label: "Reports & Analytics" },     // dark cyan
    { color: '#FF9F1C', label: "Attendance Tracking" },     // orange
    { color: '#6A0572', label: "Secure Access" },           // purple
  ];
  
  const icons = [
    FaMoneyCheckAlt,
    FaFileInvoiceDollar,
    FaUserTie,
    FaChartPie,
    FaCalendarCheck,
    FaShieldAlt,
  ];

  

  

  return (

    <div>

   
     <section className="relative w-full h-[560px] overflow-hidden bg-gray-900">
        <AnimatePresence>
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute text-center text-white px-6">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.a
                    href="#"
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {slide.cta}
                  </motion.a>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      
      <Parallax blur={{ min: -15, max: 15 }} bgImage={bg} bgImageAlt="Hero Background" strength={300}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          
          <div className="relative z-20">
            
              <section className=" py-16 px-4 md:px-20 text-white  opacity-110">
        <h2 className="text-3xl  sm:text-4xl md:text-5xl text-center font-bold mb-10 text-indigo-400" data-aos="fade-up">
          Integrated  With  Tools
        </h2>
      
       <Marquee speed={250} gradient={false} pauseOnHover>
  {icons.map((IconComponent, i) => (
    <div 
      key={i} 
      className="flex flex-col items-center mx-16 cursor-pointer transition-transform duration-300 hover:scale-110"
      data-aos="zoom-in"
    >
      <IconComponent 
        className="text-8xl drop-shadow-lg" 
        style={{ color: iconStyles[i].color, filter: 'drop-shadow(0 0 8px ' + iconStyles[i].color + ')' }}
      />
      <p className="mt-4 text-xl font-semibold text-white">{iconStyles[i].label}</p>
    </div>
  ))}
</Marquee>

      </section>

          </div>
        </div>
      </Parallax>
       </div>
    
  );
};

export default Banner;