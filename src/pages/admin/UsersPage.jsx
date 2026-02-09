import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";
import { Pencil, Trash2 } from "lucide-react";

const UsersPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const users = [
    { id: 1, name: "Akira Kurosawa", email: "akira@email.com", role: "User" },
    { id: 2, name: "Yoko Tanaka", email: "yoko@email.com", role: "User" },
    { id: 3, name: "Hiroshi Sato", email: "hiroshi@email.com", role: "User" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFF] font-['Inter']">
      {/* SIDEBAR */}
      <AdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full lg:w-auto min-w-0">
        {/* TOP BAR */}
        <AdminTopbar onMenuClick={toggleSidebar} title="Users" />

        {/* CONTENT */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Page Title and Add Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E3A5F]">
              Users
            </h1>
            <button className="w-full sm:w-auto bg-[#146EF5] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              + Add User
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Name
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Email
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Role
                      </th>
                      <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap font-medium">
                          {user.name}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                          <span className="px-3 py-1 bg-[#E3F2FF] text-[#146EF5] rounded-full text-xs font-medium">
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-[#146EF5] hover:bg-[#E3F2FF] rounded-lg transition-colors">
                              <Pencil size={16} />
                            </button>
                            <button className="p-2 text-[#EF4444] hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
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

export default UsersPage;