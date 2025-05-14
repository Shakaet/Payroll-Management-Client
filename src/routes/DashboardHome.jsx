import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


import useAdminCount from '../hook/useAdminCount';
import useUser from '../hook/useUser';
import useTask from '../hook/useTask';
import useemployeeCount from '../hook/useemployeeCount';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/paymentDetails`);
        return response.data;
      };

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardHome = () => {
  let [employee] = useemployeeCount();
  let [admin] = useAdminCount();
  let [users] = useUser();
  let [task] = useTask();

   const { data: paymentSalary = []} = useQuery({
        queryKey: ["paymentSalary"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

      

let salaryArray = paymentSalary.map(salary => salary.price);

let totalSalary = 0;
for (let salary of salaryArray) {
  totalSalary += parseInt(salary, 10); 
}
console.log(totalSalary);




  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const dashboardData = [
    {
      title: 'Total Users',
      value: users.length,
      icon: '👥',
      color: 'bg-blue-600',
    },
    {
      title: 'Total Admins',
      value: admin.length,
      icon: '🛡️',
      color: 'bg-green-600',
    },
    {
      title: 'Total Employees',
      value: employee.length,
      icon: '💼',
      color: 'bg-purple-600',
    },
    {
      title: 'Total Tasks',
      value: task.length,
      icon: '📋',
      color: 'bg-orange-600',
    },
    {
      title: 'Total Salary Pay',
      value: totalSalary,
      icon: '💳',
      color: 'bg-yellow-600',
    },
  ];

  // Prepare data for the user role bar chart
  const roleCounts = users.reduce(
    (acc, user) => {
      if (user.role === 'admin') acc.admin += 1;
      else if (user.role === 'employee') acc.employee += 1;
      return acc;
    },
    { admin: 0, employee: 0 }
  );

  const userChartData = {
    labels: ['Admins', 'Employees'],
    datasets: [
      {
        label: 'User Roles',
        data: [roleCounts.admin, roleCounts.employee],
        backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(168, 85, 247, 0.6)'], // Green for admins, Purple for employees
        borderColor: ['rgba(34, 197, 94, 1)', 'rgba(168, 85, 247, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const userChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Distribution by Role',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Role',
        },
      },
    },
  };

  // Prepare data for the task status bar chart
  const taskStatusCounts = task.reduce(
    (acc, task) => {
      if (task.status === 'complete') acc.complete += 1;
      else if (task.status === 'pending') acc.pending += 1;
      return acc;
    },
    { complete: 0, pending: 0 }
  );

  const taskChartData = {
    labels: ['Complete', 'Pending'],
    datasets: [
      {
        label: 'Task Status',
        data: [taskStatusCounts.complete, taskStatusCounts.pending],
        backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(234, 179, 8, 0.6)'], // Green for complete, Yellow for pending
        borderColor: ['rgba(34, 197, 94, 1)', 'rgba(234, 179, 8, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const taskChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Task Status Distribution',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Status',
        },
      },
    },
  };

  return (
    <div>
      <section className="py-8 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dashboard Overview
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {dashboardData.map((card, index) => (
              <motion.div
                key={index}
                className={`relative ${card.color} text-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <span className="text-3xl">{card.icon}</span>
                  </div>
                  <p className="text-3xl font-bold">{card.value} ৳</p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-10 rounded-tl-full"></div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 space-y-12">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Bar data={userChartData} options={userChartOptions} />
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Bar data={taskChartData} options={taskChartOptions} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;