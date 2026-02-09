import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import { Calendar } from "lucide-react";

const AttendancePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const attendanceData = [
    {
      id: 1,
      user: "Akira Kurosawa",
      date: "01 Feb 2026",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      total: "8 Hrs",
      status: "On Time",
    },
    {
      id: 2,
      user: "Yoko Tanaka",
      date: "01 Feb 2026",
      checkIn: "09:15 AM",
      checkOut: "05:30 PM",
      total: "7.75 Hrs",
      status: "Late",
    },
    {
      id: 3,
      user: "Hiroshi Sato",
      date: "01 Feb 2026",
      checkIn: "08:45 AM",
      checkOut: "06:15 PM",
      total: "8.5 Hrs",
      status: "On Time",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFF] font-['Inter']">
      {/* SIDEBAR */}
      <AdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full lg:w-auto min-w-0">
        {/* TOP BAR */}
        <AdminTopbar onMenuClick={toggleSidebar} title="Attendance" />

        {/* CONTENT */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Page Title and Date Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E3A5F]">
              Attendance Records
            </h1>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
                <Calendar size={16} className="text-gray-500" />
                <span className="text-gray-700">Filter by Date</span>
              </button>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <h2 className="text-base sm:text-lg font-semibold text-[#146EF5] mb-4 sm:mb-6">
              Today's Attendance
            </h2>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        User
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Date
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Check In
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Check Out
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Total
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((record) => (
                      <tr
                        key={record.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap font-medium">
                          {record.user}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                          {record.date}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                          {record.checkIn}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                          {record.checkOut}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap font-medium">
                          {record.total}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm whitespace-nowrap">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              record.status === "On Time"
                                ? "bg-[#D4ED8E] text-gray-800"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile scroll indicator */}
            <p className="text-xs text-gray-400 mt-3 sm:hidden text-center">
              Swipe left to see more →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;