import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/admin/AdminLogin";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersPage from "./pages/admin/UsersPage";
import AttendancePage from "./pages/admin/AttendancePage";
import AddUser from "./pages/admin/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/attendance" element={<AttendancePage />} />
        <Route path="/admin/users/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
