# 💼 **Payroll Management System**

Welcome to the **Payroll Management System**! 📊  
An advanced web-based platform designed to streamline payroll, employee attendance, and task management through a modern, secure, and responsive interface.

## 🌐 **Live Demo**
🚀 [Click here to explore the live site](https://gilded-centaur-ce11bb.netlify.app/) 

## 📝 **Description**

**Payroll Management System** is a feature-rich, role-based web application tailored for Admins and Employees. It simplifies the management of employee details, attendance tracking, task assignments, leave requests, daily updates, and salary payments using Stripe.

Built using **React**, **Vite**, **Tailwind CSS**, **Firebase**, and **Express.js**, the system ensures seamless performance, data security with **JWT**, and professional UI/UX.

---

## 🔑 **Core Features**

### 👨‍💼 Admin Panel
- Add, update, and delete employee records
- Share attendance forms (defaults to Absent)
- View & manage daily attendance reports
- Assign tasks with deadlines
- Process and track salary payments via Stripe
- View payment history & salary analytics (charts)
- Approve or decline leave requests
- Receive daily updates via email
- Manage user roles and secure dashboard routes

### 👩‍💼 Employee Panel
- View & edit personal profile
- Mark daily attendance within allowed time
- Submit daily task updates (with email notifications)
- Submit & track leave requests
- View assigned tasks and deadlines
- Submit feedback through review forms
- View salary payment history
- Enjoy responsive UI with dark/light mode

---

## 🛠️ **Technologies Used**

### 🧩 **Core Dependencies**
- **React** & **Vite** – Frontend Framework & Build Tool  
- **Tailwind CSS** & **DaisyUI** – Utility-first CSS + UI Components  
- **Firebase** – Authentication, Hosting  
- **Express.js + MongoDB** – Backend Server & Database  
- **Stripe** – Secure payment integration  
- **React Router Dom** – Navigation  
- **Axios** – API Communication  
- **TanStack React Query** – Data fetching & caching  
- **Chart.js** + **react-chartjs-2** – Graphical analytics  
- **Framer Motion**, **AOS**, **Lottie React** – Animations  
- **Nodemailer** + **Mailtrap** – Email services  
- **React Hot Toast** & **React Toastify** – Notifications  
- **JWT** – Token-based security

### 🧪 **Dev Dependencies**
- **ESLint** – Code quality checking  
- **Prettier** – Code formatting  
- **Vite Plugin React** – React integration  
- **SASS Embedded**, **Autoprefixer** – CSS tools

---

## 🚀 **Getting Started**

To run the project locally, follow these steps:

1. **Clone the Client repository:**
   ```bash
   git clone https://github.com/Shakaet/Payroll-Management-Client
   git clone https://github.com/Shakaet/Payroll-Management-Server
   cd Payroll-Management-Client
   npm install
   npm run dev

2. **Clone the Server repository:**
   ```bash
   cd ../Payroll-Management-Server
   npm install
   nodemon index.js

