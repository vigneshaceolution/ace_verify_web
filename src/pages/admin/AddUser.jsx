import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

const AddUser = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: replace with API later
    console.log("New User:", form);

    alert("User created successfully (mock)");
    navigate("/admin/users");
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFF] font-['Inter']">
      {/* SIDEBAR */}
      <AdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full lg:w-auto min-w-0">
        {/* TOP BAR */}
        <AdminTopbar onMenuClick={toggleSidebar} title="Add User" />

        {/* CONTENT */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
          {/* Page Title - Hidden on mobile (shown in topbar) */}
          <h1 className="hidden lg:block text-xl sm:text-2xl font-bold text-[#1E3A5F]">
            Add User
          </h1>

          {/* Form Card */}
          <div className="max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-[#146EF5] mb-6">
              Create New User
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-normal font-['Poppins']">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-normal font-['Poppins']">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="someone@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-normal font-['Poppins']">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 font-normal font-['Poppins']">
                  Role
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => navigate("/admin/users")}
                  className="w-full sm:w-auto px-6 py-2.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-['Inter'] font-normal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-sm bg-[#146EF5] text-white rounded-lg hover:bg-blue-700 transition-colors font-['Inter'] font-normal"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;