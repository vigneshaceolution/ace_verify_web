import logo from "../../assets/logo.png";
import { LayoutDashboard, ChartColumnIncreasing, Settings, LogOut, X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-[280px] bg-[#DCEBFF] min-h-screen flex flex-col font-['Inter']
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 text-[#1E3A5F] hover:bg-[#C5DEFF] rounded-lg"
        >
          <X size={24} />
        </button>

        {/* LOGO */}
        <div className="px-6 py-6 border-b border-[#B8D4FF]">
          <img src={logo} alt="AceVerify" className="h-12 mb-3" />
          <p className="text-base text-[#1E3A5F] font-semibold">
            Akira Kurosawa
          </p>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-[#146EF5] text-white text-sm font-medium">
            <LayoutDashboard size={18} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#1E3A5F] hover:bg-[#C5DEFF] text-sm font-medium transition-colors">
            <ChartColumnIncreasing size={18} />
            Attendance Report
          </button>
        </nav>

        {/* FOOTER */}
        <div className="px-4 py-6 border-t border-[#B8D4FF] space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-[#1E3A5F] hover:bg-[#C5DEFF] rounded-md font-medium transition-colors">
            <Settings size={18} />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-[#1E3A5F] hover:bg-[#C5DEFF] rounded-md font-medium transition-colors">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;