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
  const response = await axios.get(`https://payroll-management-system-server.vercel.app/paymentDetails`);
  return response.data;
};

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardHome = () => {
  let [employee] = useemployeeCount();
  let [admin] = useAdminCount();
  let [users] = useUser();
  let [task] = useTask();

  const { data: paymentSalary = [] } = useQuery({
    queryKey: ["paymentSalary"],
    queryFn: fetchUsers,
  });

  let salaryArray = paymentSalary.map(salary => salary.price);
  let totalSalary = 0;
  for (let salary of salaryArray) {
    totalSalary += parseInt(salary, 10);
  }

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
      color: '',
    },
    {
      title: 'Total Admins',
      value: admin.length,
      icon: '🛡️',
      color: '',
    },
    {
      title: 'Total Employees',
      value: employee.length,
      icon: '💼',
      color: '',
    },
    {
      title: 'Total Tasks',
      value: task.length,
      icon: '📋',
      color: '',
    },
    {
      title: 'Total Salary Pay',
      value: `${totalSalary} ৳`,
      icon: '💳',
      color: '',
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
        backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(168, 85, 247, 0.6)'],
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
        backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(234, 179, 8, 0.6)'],
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

  // Prepare data for the employee salary bar chart
  const salaryByEmployee = paymentSalary.reduce((acc, payment) => {
    const email = payment.rec_email;
    const amount = parseInt(payment.price, 10);
    acc[email] = (acc[email] || 0) + amount;
    return acc;
  }, {});

  const salaryChartData = {
    labels: Object.keys(salaryByEmployee),
    datasets: [
      {
        label: 'Total Salary Paid',
        data: Object.values(salaryByEmployee),
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // Blue for salary
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const salaryChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employee Salary Distribution',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Salary (৳)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Employee Email',
        },
      },
    },
  };

  return (
    <div>
      <section className="py-2 min-h-screen  rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-indigo-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dashboard Overview
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {dashboardData.map((card, index) => (
              <motion.div
                key={index}
                className={`relative ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-orange-500' : index === 2 ? 'bg-blue-600' : index === 3 ? 'bg-red-500' : 'bg-gray-500'} text-white p-4 rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-2xl font-bold">{card.value}</p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <motion.div
              className="bg-white  border-black border-2 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Bar data={userChartData} options={userChartOptions} />
            </motion.div>
            <motion.div
              className="bg-white  border-black border-2 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Bar data={taskChartData} options={taskChartOptions} />
            </motion.div>
          </div>
          <div className="w-1/2 mx-auto gap-4">
            <motion.div
              className="bg-white border-black border-2 text-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
               <Bar data={salaryChartData} options={salaryChartOptions} />
             
            </motion.div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;