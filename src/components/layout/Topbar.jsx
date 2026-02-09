import { Search, User, Menu } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="h-[72px] bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 font-['Inter']">
      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} />
      </button>

      {/* Page Title (Mobile) */}
      <h1 className="lg:hidden text-lg font-bold text-[#1E3A5F]">Dashboard</h1>

      {/* Spacer for desktop */}
      <div className="hidden lg:block flex-1" />

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Search Bar - Hidden on small mobile, visible on larger screens */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="w-[200px] sm:w-[280px] pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>

        {/* Search Icon Only (Mobile) */}
        <button className="sm:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Search size={20} />
        </button>

        {/* User Avatar */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#146EF5] rounded-full flex items-center justify-center">
          <User className="text-white" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;