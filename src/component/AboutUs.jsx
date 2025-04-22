import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../assets/ceo.jpg"
import img2 from "../assets/coojpg.jpg"
import img3 from "../assets/cto.jpg"

// Animation variants for elements
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const AboutUs = () => {
  // Core values data
  const values = [
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to simplify payroll processes.',
      icon: '🚀',
    },
    {
      title: 'Integrity',
      description: 'Transparency and trust are at the heart of everything we do.',
      icon: '🤝',
    },
    {
      title: 'Customer Success',
      description: 'Your success is our priority, with dedicated support 24/7.',
      icon: '🌟',
    },
  ];


  // Team data
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: "https://i.ibb.co.com/1GtnFdF6/ceo.jpg",
      bio: 'Visionary leader with 15+ years in HR tech.',
    },
    {
      name: 'Michael Lee',
      role: 'Chief Technology Officer',
      image: 'https://i.ibb.co.com/0yFX3W1y/coojpg.jpg',
      bio: 'Expert in building secure, scalable systems.',
    },
    {
      name: 'Emily Brown',
      role: 'Head of Customer Success',
      image: 'https://i.ibb.co.com/d0RRxJSY/cto.jpg',
      bio: 'Passionate about empowering businesses.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Payroll</h2>
          <p className="text-lg text-gray-600">
            At PayrollPro, we’re transforming the way businesses manage payroll. Founded in 2015, our mission is to
            provide secure, efficient, and user-friendly payroll solutions that save time and ensure compliance. Trusted
            by over 10,000 businesses worldwide, we combine innovative technology with exceptional support to empower
            your team.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold text-center text-gray-900 mb-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Core Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Showcase */}
        <div>
          <motion.h3
            className="text-2xl font-semibold text-center text-gray-900 mb-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Meet Our Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;