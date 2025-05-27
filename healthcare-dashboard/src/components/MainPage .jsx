import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import DashboardMainContent from './DashBoard/DashboardMainContent';
import { Menu ,Bell} from 'lucide-react'; // You can use any icon lib or SVG

function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      className="min-h-screen w-screen bg-gray-100 flex justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-6xl bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Header />
        </motion.div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex justify-end p-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle Sidebar"
            className="text-gray-600 hover:text-gray-900 focus:outline-none flex justify-center items-center gap-2 fixed top-8 right-5"
          >
          <Bell size={25} />
            <Menu size={28} />


          </button>
        </div>

        <motion.div
          className="flex w-full flex-col lg:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Sidebar - toggle on mobile, always visible on lg+ */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{
              x: sidebarOpen || window.innerWidth >= 1024 ? 0 : -30,
              opacity: sidebarOpen || window.innerWidth >= 1024 ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className={`${
              sidebarOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-auto absolute z-10 lg:static lg:z-auto`}
          >
            <SideBar />
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <DashboardMainContent />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MainPage;
