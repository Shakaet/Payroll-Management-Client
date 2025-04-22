import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewHomePageSections = () => {
  // Customer Success Stories Carousel State
  const [currentStory, setCurrentStory] = useState(0);

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
      {/* 1. Customer Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Customer Success Stories
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence>
              {successStories.map((story, index) => (
                index === currentStory && (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md overflow-hidden"
                    variants={storyVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full md:w-1/2 h-64 object-cover"
                    />
                    <div className="p-6 md:w-1/2">
                      <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                      <p className="text-gray-600 mb-4">{story.description}</p>
                      <p className="font-semibold text-blue-600">{story.company}</p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            <div className="flex justify-center mt-4 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentStory === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Free Trial Signup Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Start Your Free Trial Today
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            No credit card required. Experience the power of PayrollPro with a 14-day free trial.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NewHomePageSections;