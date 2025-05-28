import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Context } from '../provider/AuthProvider';
import bg from "../assets/bg1.jpg"
import { Parallax } from 'react-parallax';

// Animation variants for elements
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactUs = () => {
   let {darkmode}=useContext(Context)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., EmailJS or API call)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
   <Parallax blur={{ min: -15, max: 15 }} bgImage={bg} bgImageAlt="Hero Background" strength={300}>
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="absolute inset-0  z-10" />
          <div className="relative z-20">
            
      <section className="py-16 mt-10  text-white">
  <div className="container mx-auto px-4">
    <motion.h2
      className="text-3xl font-bold text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold text-indigo-400 text-center mb-10 t">Contact Us</h1>
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Contact Form */}
      <motion.div
        className="bg-[#111] p-8 rounded-lg shadow-md"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-white">Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Info & Map */}
      <motion.div
        className="flex flex-col space-y-8"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Get in Touch</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:support@payrollpro.com" className="hover:text-blue-400 transition">
                support@payrollpro.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+1234567890" className="hover:text-blue-400 transition">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              123 Business Ave, Suite 100, Payroll City, PC 12345
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64 border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14856.364017453705!2d91.95944888715822!3d21.425667700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc8652d5a8305%3A0xad38092104307ea7!2sLong%20Beach%20Hotel%20Cox's%20Bazar!5e0!3m2!1sen!2sbd!4v1735156684722!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  </div>
</section>



          </div>
        </div>
      </Parallax>

  );
};

export default ContactUs;