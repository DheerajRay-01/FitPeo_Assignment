import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import DashboardMainContent from './DashBoard/DashboardMainContent';
import { Menu, Bell } from 'lucide-react';

function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle auto-close sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false); // Optional: hide mobile sidebar on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="w-fit overflow-hidden md:overflow-hidden lg:overflow-auto  min-h-screen rounded-none lg:rounded-2xl  shadow-md border border-gray-200"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full flex items-center justify-center"
      >
        <Header />
      </motion.div>

      {/* Mobile menu button */}
      <div className="lg:hidden flex justify-end px-4 py-2">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Sidebar"
          className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center gap-2 fixed top-5 right-5"
        >
          <Bell size={22} />
          <Menu size={26} />
        </button>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Sidebar - mobile toggle, always visible on lg+ */}
        {(sidebarOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full lg:w-auto z-10 lg:z-auto ${
              sidebarOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <SideBar />
          </motion.div>
        )}

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow px-4 pb-4"
        >
          <DashboardMainContent />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MainPage;
