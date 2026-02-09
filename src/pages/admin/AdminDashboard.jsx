import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFF] font-['Inter']">
      {/* SIDEBAR */}
      <AdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full lg:w-auto min-w-0">
        {/* TOP BAR */}
        <AdminTopbar onMenuClick={toggleSidebar} title="Admin Dashboard" />

        {/* CONTENT */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Dashboard Title - Hidden on mobile (shown in topbar) */}
          <h1 className="hidden lg:block text-xl sm:text-2xl font-bold text-[#1E3A5F]">
            Admin Dashboard
          </h1>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Total Users</p>
              <p className="text-3xl font-bold text-[#146EF5]">42</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Active Today</p>
              <p className="text-3xl font-bold text-[#146EF5]">31</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Late Check-ins</p>
              <p className="text-3xl font-bold text-[#EF4444]">5</p>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-[#146EF5] mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-800">Akira Kurosawa</p>
                  <p className="text-xs text-gray-500">Punched in at 09:00 AM</p>
                </div>
                <span className="text-xs text-gray-400">Just now</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-800">Yoko Tanaka</p>
                  <p className="text-xs text-gray-500">Punched out at 05:30 PM</p>
                </div>
                <span className="text-xs text-gray-400">5 min ago</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">Hiroshi Sato</p>
                  <p className="text-xs text-gray-500">Late check-in at 09:45 AM</p>
                </div>
                <span className="text-xs text-gray-400">15 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;