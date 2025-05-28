import { motion } from "framer-motion";
import {
  FaMoneyCheckAlt,
  FaUsersCog,
  FaChartLine,
  FaLock,
  FaMobileAlt,
  FaClock,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Briefcase, DollarSign, FileText, ShieldCheck } from 'lucide-react';
import { Users, BarChart4, AlarmClock } from 'lucide-react';
import 'aos/dist/aos.css';
import dashboard from "../assets/dash.png"
import { Link } from "react-router-dom";

const featuress = [
  {
    icon: <Users size={60} className="text-indigo-400 mb-4" />,
    title: 'User-Friendly Interface',
    desc: 'Intuitive design makes payroll processing quick and simple for all users.',
    animation: 'fade-up',
  },
  {
    icon: <BarChart4 size={60} className="text-green-400 mb-4" />,
    title: 'Real-time Analytics',
    desc: 'Visualize payroll data with interactive charts, graphs, and summaries.',
    animation: 'fade-down',
  },
  {
    icon: <ShieldCheck size={60} className="text-red-400 mb-4" />,
    title: 'Top-Level Security',
    desc: 'We use encryption and role-based access to protect your sensitive data.',
    animation: 'zoom-in',
  },
  {
    icon: <AlarmClock size={60} className="text-yellow-400 mb-4" />,
    title: 'Time Saving',
    desc: 'Automate tax calculations, salary disbursements, and report generation.',
    animation: 'flip-left',
  },
];


const steps = [
  {
    icon: <FileText size={50} className="text-cyan-400 mb-4" />,
    title: "Step 1: Add Employees",
    desc: "Easily onboard employees with all necessary payroll details.",
  },
  {
    icon: <DollarSign size={50} className="text-cyan-400 mb-4" />,
    title: "Step 2: Set Salary & Taxes",
    desc: "Customize salary structures and tax rules per employee or role.",
  },
  {
    icon: <Briefcase size={50} className="text-cyan-400 mb-4" />,
    title: "Step 3: Process Payroll",
    desc: "Generate pay slips, auto-calculate payments, deductions, and bonuses.",
  },
  {
    icon: <ShieldCheck size={50} className="text-cyan-400 mb-4" />,
    title: "Step 4: Secure & Report",
    desc: "Securely store payroll history in the cloud.",
  },
];




const features = [
  {
    icon: <FaMoneyCheckAlt className="text-6xl text-yellow-400 mb-4" />,
    title: "Automated Payroll",
    description: "Pay salaries, bonuses, and deductions without lifting a finger.",
  },
  {
    icon: <FaUsersCog className="text-6xl text-green-400 mb-4" />,
    title: "Employee Management",
    description: "Manage employee profiles, roles, leaves and more from one place.",
  },
  {
    icon: <FaChartLine className="text-6xl text-blue-400 mb-4" />,
    title: "Smart Reports",
    description: "Visualize salary, tax, and attendance data with one click.",
  },
  {
    icon: <FaLock className="text-6xl text-red-400 mb-4" />,
    title: "Bank-Grade Security",
    description: "Your payroll data is encrypted and 100% secure.",
  },
  {
    icon: <FaMobileAlt className="text-6xl text-purple-400 mb-4" />,
    title: "Mobile Friendly",
    description: "Access the system anytime, anywhere with mobile responsiveness.",
  },
  {
    icon: <FaClock className="text-6xl text-pink-400 mb-4" />,
    title: "24/7 Access",
    description: "Process payrolls and view reports any time, day or night.",
  },
];
const MiddleSection = () => {

    useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

 useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
   useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

    
      
    
  return (
    <div>

        <section className=" text-white py-24 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-400">
          Why Choose Our Payroll System?
        </h2>
        <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
          Streamline your HR and payroll operations with modern, secure, and scalable features designed for every business.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 hover:shadow-2xl border border-gray-800 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 rounded-3xl transition-all duration-300 blur-lg opacity-10 group-hover:opacity-20" />
            {feature.icon}
            <h3 className="text-2xl font-bold mb-2 mt-3 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className=" text-white py-20 px-6 md:px-20">
      <h2
        className="text-4xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        <span className="text-cyan-400">How It Works</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-8 text-center shadow-md border border-gray-800 hover:border-cyan-400 transition"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className=" text-white py-20 px-6 md:px-20">
      <h2
        className="text-4xl font-bold text-center mb-16"
        data-aos="fade-up"
      >
        <span className="text-indigo-400">Why Choose Us</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuress.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-gray-700 hover:border-indigo-400 rounded-2xl p-8 text-center shadow-lg transition-all duration-300"
            data-aos={item.animation}
            data-aos-delay={index * 150}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className=" text-white py-28 px-6 md:px-24">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20"
  >
    <h2 className="text-5xl font-extrabold text-indigo-400">
      Everything You Need in One Powerful Dashboard
    </h2>
    <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
      Say goodbye to spreadsheets and scattered HR systems. Our all-in-one payroll platform gives you the control, clarity, and automation your team deserves.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-16">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {[
        {
          title: "Automated Salary Disbursement",
          desc: "Schedule salary payments with tax, bonuses, and deductions calculated for you — accurate, timely, and error-free.",
        },
        {
          title: "Employee Self-Service Portal",
          desc: "Give employees access to their payslips, tax documents, and leave balances — all in one place.",
        },
        {
          title: "Dynamic Tax & Compliance Handling",
          desc: "Our system stays up-to-date with local tax laws and compliance requirements automatically.",
        },
        {
          title: "Advanced Reporting & Insights",
          desc: "Visual dashboards, analytics, and downloadable reports help you make informed payroll decisions.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-400">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <img
        src={dashboard}
        alt="Dashboard preview"
        className="rounded-2xl shadow-2xl border border-gray-800"
      />
      <motion.div
        className="absolute -top-12 -right-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-bold shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link to={"/dashboard"}>Live Preview</Link>
      </motion.div>
    </motion.div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mt-24"
  >
    <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience It Yourself?</h3>
    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
      Empower your team and simplify payroll today. Try PayrollPro and see the difference.
    </p>
    <a
      href="#"
      className="inline-block bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all"
    >
      Get Started Now
    </a>
  </motion.div>
</section>


    

    
        
        
             
        
              
           
        
           
        
          
         
         
    </div>
  )
}

export default MiddleSection