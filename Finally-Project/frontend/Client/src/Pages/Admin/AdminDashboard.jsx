import React, { useEffect, useState } from 'react';
// import { Users, Calendar, Clock, UserCheck, UserX, Settings } from 'lucide-react';

// Mock data
const statistics = [
  { id: 1, name: 'Total Doctors', value: '32' },
  { id: 2, name: 'Total Patients', value: '1,204' },
  { id: 3, name: 'Appointments Today', value: '45' },
  { id: 4, name: 'Pending Approvals', value: '8' },
  { id: 5, name: 'Cancelled Appointments', value: '3' },
  { id: 6, name: 'System Updates', value: '2' },
];


const recentDoctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', appointments: 12 },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Pediatrics', appointments: 15 },
  { id: 3, name: 'Dr. Emily Williams', specialty: 'Neurology', appointments: 8 },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Orthopedics', appointments: 10 },
];

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user.name}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statistics.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="flex-shrink-0">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Doctors */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-700">Top Doctors</h2>
          </div>
          <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specialty
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weekly Appointments
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentDoctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{doctor.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{doctor.specialty}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{doctor.appointments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-100">
            <h2 className="text-lg font-semibold text-indigo-700">Quick Actions</h2>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 py-3 px-4 rounded-md flex items-center transition-colors">
              <Users className="h-5 w-5 mr-3" />
              <span>Add New Doctor</span>
            </button>
            <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-4 rounded-md flex items-center transition-colors">
              <Calendar className="h-5 w-5 mr-3" />
              <span>View Appointment Schedule</span>
            </button>
            <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 py-3 px-4 rounded-md flex items-center transition-colors">
              <Clock className="h-5 w-5 mr-3" />
              <span>Manage Appointment Slots</span>
            </button>
            <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 px-4 rounded-md flex items-center transition-colors">
              <Settings className="h-5 w-5 mr-3" />
              <span>System Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
