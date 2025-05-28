import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import img1 from "../assets/ceo.jpg"
import img2 from "../assets/coojpg.jpg"
import img3 from "../assets/cto.jpg"
import { Context } from '../provider/AuthProvider';
import bg from "../assets/bg2.jpg"
import { Parallax } from 'react-parallax';

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

  //  let {darkmode}=useContext(Context)
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
    <Parallax blur={{ min: -15, max: 15 }} bgImage={bg} bgImageAlt="Hero Background" strength={300}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20">
            
         <section className="py-20  text-white">
  <div className="container mx-auto px-4">
    {/* Company Overview */}
    <motion.div
      className="text-center max-w-4xl mx-auto mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-extrabold text-indigo-400 mb-10">
        About Payroll
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed">
        PayrollPro is revolutionizing how businesses manage payroll. Since 2015, our mission has been to simplify payroll operations with secure, compliant, and user-friendly solutions. Backed by 10,000+ businesses globally, we fuse cutting-edge technology with expert support to empower teams of all sizes.
      </p>
    </motion.div>

    {/* Vision and Mission */}
    <div className="grid md:grid-cols-2 gap-10 mb-20">
      <motion.div
        className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
        <p className="text-gray-300">
          To become the world’s most trusted payroll partner—automating processes so businesses can focus on what truly matters.
        </p>
      </motion.div>

      <motion.div
        className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
        <p className="text-gray-300">
          Empower companies with reliable, fast, and secure payroll systems through seamless automation and personalized support.
        </p>
      </motion.div>
    </div>

    {/* Why Choose Us */}
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6">Why Choose PayrollPro?</h2>
      <p className="text-gray-300 max-w-3xl mx-auto">
        We simplify complexity with smart automation, offer 24/7 support, and maintain the highest security standards—making payroll stress-free and scalable.
      </p>
    </motion.div>

    {/* Core Values */}
    <div className="mb-20">
      <motion.h3
        className="text-3xl font-semibold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Core Values
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition rounded-xl p-6 text-center shadow-lg hover:shadow-yellow-400/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-5xl text-yellow-400 mb-4">{value.icon}</div>
            <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
            <p className="text-gray-400">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Team Showcase */}
    <div>
      <motion.h3
        className="text-3xl font-semibold text-center text-cyan-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-yellow-400/20 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-yellow-400 object-cover"
            />
            <h4 className="text-xl font-bold text-white">{member.name}</h4>
            <p className="text-yellow-300 mb-2">{member.role}</p>
            <p className="text-gray-400 text-sm">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

          </div>
        </div>
      </Parallax>

  );
};

export default AboutUs;