import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import TimesheetCard from "../components/dashboard/TimesheetCard";
import ActivityCard from "../components/dashboard/ActivityCard";
import AttendanceTable from "../components/dashboard/AttendanceTable";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-[#F8FAFF] font-['Inter']">
      {/* SIDEBAR */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full lg:w-auto min-w-0">
        {/* TOP BAR */}
        <Topbar onMenuClick={toggleSidebar} />

        {/* CONTENT */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Dashboard Title - Hidden on mobile (shown in topbar) */}
          <h1 className="hidden lg:block text-xl sm:text-2xl font-bold text-[#1E3A5F]">
            Dashboard
          </h1>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <TimesheetCard />
            <ActivityCard />
          </div>

          {/* TABLE */}
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;