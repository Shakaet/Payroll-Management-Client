import React from 'react'
import { motion } from 'framer-motion';

// Social media icons (using simple emojis for demo; replace with SVGs or icon library like Heroicons)
const socialLinks = [
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
];

// Animation variants for hover effects
const linkVariants = {
  hover: { scale: 1.1, color: '#2563eb' },
};

const Footer = () => {
  return (
    <div>

<footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Payroll</h3>
            <p className="text-gray-400 mb-4">
              Simplifying payroll management for businesses worldwide with secure, efficient, and compliant solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400"
                  variants={linkVariants}
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                    variants={linkVariants}
                    whileHover="hover"
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Integrations', 'Security'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition"
                    variants={linkVariants}
                    whileHover="hover"
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:support@payrollpro.com" className="hover:text-blue-500 transition">support@payrollpro.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-500 transition">+1 (234) 567-890</a></li>
              <li>Address: 123 Business Ave, Suite 100, Payroll City, PC 12345</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PayrollPro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-500 transition text-sm"
                variants={linkVariants}
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer