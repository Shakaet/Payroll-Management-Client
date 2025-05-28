import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence,useAnimation  } from 'framer-motion';
import { Context } from '../provider/AuthProvider';
import bgimg from "../assets/payroll.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import free from "../assets/free.png"
import { FaMoneyCheckAlt, FaUsers,FaFileInvoiceDollar, FaUserTie, FaChartPie, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';




import { Heart, ShieldCheck, Zap, Smile } from "lucide-react"; // using lucide icons

 const features = [
    {
      label: "Real-time Payroll Status",
      icon: <FaChartPie className="text-indigo-500" />,
    },
    {
      label: "One-click Salary Disbursement",
      icon: <FaMoneyCheckAlt className="text-green-500" />,
    },
    {
      label: "Custom Tax Reports",
      icon: <FaFileInvoiceDollar className="text-yellow-500" />,
    },
    {
      label: "Multi-role Access Levels",
      icon: <FaShieldAlt className="text-red-400" />,
    },
  ];


const reasons = [
  {
    icon: <Heart className="w-10 h-10 text-pink-500" />,
    title: "Built with Care",
    description: "Our platform is designed to solve real business problems with love and empathy.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    title: "Secure & Reliable",
    description: "Bank-level security and 99.9% uptime you can depend on 24/7.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "Fast Performance",
    description: "Blazing fast performance so you can work smarter, not harder.",
  },
  {
    icon: <Smile className="w-10 h-10 text-blue-500" />,
    title: "Customer-Centric",
    description: "We prioritize your success through exceptional support and feedback loops.",
  },
];

const stats = [
  { icon: FaUsers, label: "Employees Paid", count: 1245, color: "#FF6B6B" },
  { icon: FaMoneyCheckAlt, label: "Payrolls Processed", count: 850, color: "#4ECDC4" },
  { icon: FaFileInvoiceDollar, label: "Tax Filings", count: 720, color: "#FFD93D" },
];




const NewHomePageSections = () => {
  // Customer Success Stories Carousel State
  const [currentStory, setCurrentStory] = useState(0);

  
  let {darkmode}=useContext(Context)

  const successStories = [
    {
      title: "TechStartup Saves 20 Hours Weekly",
      description: "By automating payroll with PayrollPro, TechStartup reduced processing time and eliminated errors.",
      company: "TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Retail Chain Streamlines Compliance",
      description: "PayrollPro ensured RetailWorld stayed compliant with complex tax regulations across multiple states.",
      company: "RetailWorld",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Nonprofit Boosts Efficiency",
      description: "CharityOrg used PayrollPro’s reporting tools to optimize budgeting and focus on their mission.",
      company: "CharityOrg",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Auto-slide for success stories every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [successStories.length]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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


  // Animation variants for carousel
  const storyVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // Animation variants for elements
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>

    

{/* Customer Success Stories Section */}
<section className="py-20 px-4 text-white">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Customer Success Stories
    </motion.h2>

    <div className="relative">
      <AnimatePresence mode="wait">
        {successStories.map((story, index) =>
          index === currentStory ? (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center rounded-3xl bg-gray-800 overflow-hidden shadow-2xl border border-gray-700"
              variants={storyVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full md:w-1/2 h-60 sm:h-80 object-cover md:rounded-l-3xl"
              />
              <div className="p-6 sm:p-8 md:w-1/2 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-300 mb-5 text-sm sm:text-base leading-relaxed">
                  {story.description}
                </p>
                <p className="font-semibold text-pink-400">{story.company}</p>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-6 space-x-3">
        {successStories.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentStory(index)}
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition duration-300 ${
              currentStory === index ? 'bg-blue-500 scale-110' : 'bg-gray-500'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  </div>
</section>

{/* Why Customers Love Us Section */}
<section className="py-20 px-4 transition duration-300 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Why Customers Love Us
    </motion.h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ms-15 mr-15">
      {reasons.map((item, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-lg rounded-2xl p-5 sm:p-6 text-left border border-gray-700 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="mb-3 text-teal-400 text-2xl sm:text-3xl">{item.icon}</div>
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h4>
          <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      
     
    </>
  );
};

export default NewHomePageSections;