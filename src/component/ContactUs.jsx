import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants for elements
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactUs = () => {
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
    <section className="py-16 bg-gray-100 mt-10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor Negroes="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:support@payrollpro.com" className="hover:text-blue-600 transition">
                    support@payrollpro.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+1234567890" className="hover:text-blue-600 transition">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span>
                  123 Business Ave, Suite 100, Payroll City, PC 12345
                </li>
              </ul>
            </div>
            <div className="bg-gray-300 rounded-lg overflow-hidden">
              {/* Placeholder for map (replace with Google Maps iframe or API integration) */}
              <div className="w-full h-64 flex items-center justify-center bg-gray-400">
                <p className="text-gray-700">

                <iframe
            className="rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14856.364017453705!2d91.95944888715822!3d21.425667700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc8652d5a8305%3A0xad38092104307ea7!2sLong%20Beach%20Hotel%20Cox's%20Bazar!5e0!3m2!1sen!2sbd!4v1735156684722!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;