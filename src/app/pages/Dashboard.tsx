import { Users, UserCheck, UserPlus, Calendar, TrendingUp, DollarSign, AlertCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const stats = [
  { name: "Total Employees", value: "2,847", icon: Users, color: "bg-blue-500" },
  { name: "Active Employees", value: "2,789", icon: UserCheck, color: "bg-green-500" },
  { name: "New Recruits (FY)", value: "143", icon: UserPlus, color: "bg-purple-500" },
  { name: "On Leave Today", value: "87", icon: Calendar, color: "bg-yellow-500" },
  { name: "Pending Promotions", value: "34", icon: TrendingUp, color: "bg-indigo-500" },
  { name: "Monthly Payroll", value: "₹4.2 Cr", icon: DollarSign, color: "bg-emerald-500" },
  { name: "Due for Increment", value: "156", icon: TrendingUp, color: "bg-orange-500" },
  { name: "Retiring (6 Months)", value: "12", icon: Clock, color: "bg-red-500" },
];

const departmentData = [
  { department: "Administration", employees: 456 },
  { department: "Finance", employees: 234 },
  { department: "Engineering", employees: 678 },
  { department: "Medical", employees: 543 },
  { department: "Education", employees: 936 },
];

const leaveData = [
  { type: "Casual Leave", count: 234 },
  { type: "Earned Leave", count: 456 },
  { type: "Half Pay Leave", count: 89 },
  { type: "LWP", count: 23 },
  { type: "Special Leave", count: 45 },
];

const monthlyHiringData = [
  { month: "Apr", hires: 12 },
  { month: "May", hires: 18 },
  { month: "Jun", hires: 15 },
  { month: "Jul", hires: 22 },
  { month: "Aug", hires: 19 },
  { month: "Sep", hires: 25 },
  { month: "Oct", hires: 16 },
  { month: "Nov", hires: 20 },
  { month: "Dec", hires: 14 },
  { month: "Jan", hires: 17 },
  { month: "Feb", hires: 21 },
  { month: "Mar", hires: 24 },
];

const categoryData = [
  { name: "General", value: 1123, color: "#3b82f6" },
  { name: "OBC", value: 892, color: "#10b981" },
  { name: "SC", value: 534, color: "#f59e0b" },
  { name: "ST", value: 298, color: "#ef4444" },
];

const pendingActions = [
  { id: 1, type: "Duty Certificate", employee: "Rajesh Kumar", department: "Finance", days: 2 },
  { id: 2, type: "Leave Approval", employee: "Priya Sharma", department: "Admin", days: 1 },
  { id: 3, type: "Promotion Review", employee: "Amit Patel", department: "Engineering", days: 5 },
  { id: 4, type: "Transfer Request", employee: "Sunita Verma", department: "Medical", days: 3 },
  { id: 5, type: "Increment Processing", employee: "Vijay Singh", department: "Education", days: 1 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Government HRMS - Financial Year 2025-26</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Department-wise Employee Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="employees" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Hiring Trend (FY 2025-26)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyHiringData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hires" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Category-wise Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leave Type Distribution (Current Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leaveData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="type" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="count" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            Pending Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Action Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Department</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Pending Since</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingActions.map((action) => (
                  <tr key={action.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{action.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{action.employee}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{action.department}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{action.days} days ago</td>
                    <td className="py-3 px-4">
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
