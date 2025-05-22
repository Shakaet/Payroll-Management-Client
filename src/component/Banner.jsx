import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Context } from '../provider/AuthProvider';

const Banner = () => {
  // Hero Banner Auto-Sliding State
  const [currentSlide, setCurrentSlide] = useState(0);

  let {darkmode}= useContext(Context)

  const slides = [
    {
      title: "Streamline Your Payroll Process",
      description: "Effortlessly manage employee salaries, taxes, and benefits with our intuitive platform.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Get Started Now",
    },
    {
      title: "Secure & Compliant Payroll",
      description: "Ensure compliance with tax laws and keep your data safe with top-tier security.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Learn More",
    },
    {
      title: "Real-Time Payroll Insights",
      description: "Access detailed reports and analytics to make informed financial decisions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Features",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

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

  

  

  return (
    <div className="min-h-screen bg-gray-50 mt-18">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[500px] overflow-hidden bg-gray-900">
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
                  className="w-full h-full object-cover opacity-50"
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

      {/* 2. Features Overview */}
      <section className={`py-16 ${darkmode ? "bg-black text-white":""} `}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Payroll System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${darkmode ? "text-black":""}`}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className={`py-16  ${darkmode ? "bg-black text-white":""}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex-1 text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className={`py-16 ${darkmode ?"bg-black text-white":"bg-white"} `}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-400">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className={`py-16  ${darkmode ?"bg-black text-white":"bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-600">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                <ul className=" mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 text-gray-600">✔ {feature}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      
    

      {/* 7. Trust Badges & Statistics */}
      <section className={`py-16 ${darkmode ?"bg-black text-white": "bg-gradient-to-r from-blue-600 to-blue-800 text-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Businesses Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call-to-Action Footer */}
      <section className={`py-16 ${darkmode ?"bg-black text-white":"bg-blue-600 text-white"} text-center`}>
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Simplify Your Payroll?
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of businesses and start managing payroll effortlessly today.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;