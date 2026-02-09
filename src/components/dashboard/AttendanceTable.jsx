const AttendanceTable = () => {
  const attendanceData = [
    {
      sNo: 1,
      date: "01 Feb 2026",
      punchIn: "09 AM",
      punchOut: "04 PM",
      production: "8 Hrs",
      break: "1 Hrs",
      overtime: "0 Hrs",
    },
    // Add more rows as needed
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 font-['Inter']">
      {/* Header */}
      <h2 className="text-base sm:text-lg font-semibold text-[#146EF5] mb-4 sm:mb-6">
        Attendance List
      </h2>

      {/* Table Container with horizontal scroll on mobile */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle px-4 sm:px-0">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  S. No
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Date
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Punch In
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Punch Out
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Production
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Break
                </th>
                <th className="text-left py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Overtime
                </th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.sNo}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.punchIn}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.punchOut}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.production}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.break}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                    {row.overtime}
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
  );
};

export default AttendanceTable;