const ActivityCard = () => {
  const activities = [
    { type: "Punch in at", time: "09:02 AM" },
    { type: "Punch Out at", time: "10:30 AM" },
    { type: "Punch in at", time: "10:42 AM" },
    { type: "Punch Out at", time: "01:45 PM" },
    { type: "Punch in at", time: "02:30 AM" },
    { type: "Punch Out at", time: "05:48 PM" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-sm">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#2563EB] mb-8">Activity</h2>

      {/* Activity Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[116px] top-2 bottom-2 w-[2px] bg-gray-200" />

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              {/* Left side - Punch Out */}
              {activity.type === "Punch Out at" && (
                <div className="w-24 text-right">
                  <p className="text-sm text-gray-700 font-medium">{activity.type}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              )}

              {/* Empty space for Punch In items on left */}
              {activity.type === "Punch in at" && <div className="w-24" />}

              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#2563EB] border-2 border-white shadow-sm" />
              </div>

              {/* Right side - Punch In */}
              {activity.type === "Punch in at" && (
                <div className="flex-1">
                  <p className="text-sm text-gray-700 font-medium">{activity.type}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              )}

              {/* Empty space for Punch Out items on right */}
              {activity.type === "Punch Out at" && <div className="flex-1" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;