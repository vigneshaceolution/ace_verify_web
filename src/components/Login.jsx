import bgImage from "../assets/login-bg.png";
import tick from "../assets/tick.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = ({ role = "user" }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* LEFT IMAGE — BIGGER */}
      <div
        className="hidden md:block md:w-[65%] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* RIGHT LOGIN PANEL — SMALLER */}
      <div className="relative w-full md:w-[35%] bg-gradient-to-br from-[#e8f1ff] to-[#f0f7ff] overflow-hidden flex justify-center items-center px-6 md:px-14">
        {/* TICK BACKGROUND */}
        <img
          src={tick}
          alt="tick background"
          className="absolute right-0 bottom-0 w-[900px] h-auto z-0 pointer-events-none select-none opacity-75"
        />

        {/* FORM CONTENT */}
        <div className="relative z-10 w-full max-w-md">
          {/* LOGO IMAGE */}
          <img src={logo} alt="AceVerify logo" className="w-full h-auto mb-2" />

          {/* Sign in heading */}
          <h2 className="text-lg font-normal mb-6 text-gray-800 font-['Poppins']">
            Sign in
          </h2>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm mb-2 text-gray-700 font-normal font-['Poppins']">
              Email
            </label>
            <input
              type="email"
              placeholder="someone@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2.5 mb-5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <label className="block text-sm mb-2 text-gray-700 font-normal font-['Poppins']">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2.5 mb-4 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex items-center gap-2 text-sm mb-6">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" />
              <span className="text-gray-700 font-['Poppins'] font-normal">
                Remember Me
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#146EF5] text-white py-2.5 rounded text-sm font-normal hover:bg-blue-700 transition-colors font-['Inter']"
            >
              {role === "admin" ? "Admin Login" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
