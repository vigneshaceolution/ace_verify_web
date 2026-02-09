const TimesheetCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 font-['Inter']">
      {/* Header */}
      <h2 className="text-base sm:text-lg font-semibold text-[#146EF5] mb-4 sm:mb-6">Timesheet</h2>

      {/* Punch Status */}
      <div className="bg-[#E3F2FF] rounded-lg px-3 sm:px-4 py-2 mb-4 sm:mb-6 inline-block w-full sm:w-auto">
        <p className="text-xs sm:text-sm text-[#146EF5] font-medium">
          Punch In at
          <span className="ml-2 text-gray-600 block sm:inline mt-1 sm:mt-0">
            Wed 7th Feb 2026, 9:00 AM
          </span>
        </p>
      </div>

      {/* Circular Progress */}
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <div className="relative w-36 h-36 sm:w-48 sm:h-48">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="50%"
              cy="50%"
              r="42%"
              stroke="#E5E7EB"
              strokeWidth="16"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50%"
              cy="50%"
              r="42%"
              stroke="#3B82F6"
              strokeWidth="16"
              fill="none"
              strokeDasharray="553"
              strokeDashoffset="138"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">03:00 Hrs</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
        <button className="bg-[#EF4444] text-white py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#DC2626] transition-colors">
          Punch Out
        </button>
        <button className="bg-[#D4ED8E] text-gray-800 py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#C5DE7F] transition-colors">
          Break
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-xs text-gray-500 mb-1">Break</p>
          <p className="text-sm font-semibold text-gray-800">00:00 Hrs</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Overtime</p>
          <p className="text-sm font-semibold text-gray-800">01:00 Hrs</p>
        </div>
      </div>
    </div>
  );
};

export default TimesheetCard;