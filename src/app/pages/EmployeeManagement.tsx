import { useState } from "react";
import { Search, Plus, Filter, Download, Eye, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";

const employees = [
  {
    id: "EMP001",
    name: "Rajesh Kumar Singh",
    designation: "Senior Clerk",
    department: "Finance",
    category: "General",
    doj: "2015-04-15",
    payScale: "GP 4200",
    status: "Active",
    probation: false,
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    designation: "Assistant Engineer",
    department: "Engineering",
    category: "OBC",
    doj: "2018-07-01",
    payScale: "GP 4600",
    status: "Active",
    probation: false,
  },
  {
    id: "EMP003",
    name: "Amit Patel",
    designation: "Section Officer",
    department: "Administration",
    category: "General",
    doj: "2012-03-20",
    payScale: "GP 4800",
    status: "Active",
    probation: false,
  },
  {
    id: "EMP004",
    name: "Sunita Verma",
    designation: "Medical Officer",
    department: "Medical",
    category: "SC",
    doj: "2019-09-10",
    payScale: "GP 5400",
    status: "Active",
    probation: false,
  },
  {
    id: "EMP005",
    name: "Vijay Singh Rathore",
    designation: "Junior Clerk",
    department: "Education",
    category: "General",
    doj: "2024-01-15",
    payScale: "GP 2800",
    status: "Active",
    probation: true,
  },
  {
    id: "EMP006",
    name: "Kavita Desai",
    designation: "Accountant",
    department: "Finance",
    category: "OBC",
    doj: "2016-11-22",
    payScale: "GP 4200",
    status: "Active",
    probation: false,
  },
  {
    id: "EMP007",
    name: "Ramesh Chandra",
    designation: "Superintendent",
    department: "Administration",
    category: "SC",
    doj: "2010-08-05",
    payScale: "GP 4800",
    status: "Active",
    probation: false,
  },
  {
    id: "EMP008",
    name: "Anita Rao",
    designation: "Executive Engineer",
    department: "Engineering",
    category: "General",
    doj: "2013-05-18",
    payScale: "GP 6600",
    status: "Active",
    probation: false,
  },
];

export default function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === "all" || emp.department === filterDept;
    const matchesCategory = filterCategory === "all" || emp.category === filterCategory;
    const matchesStatus = filterStatus === "all" || emp.status === filterStatus;
    return matchesSearch && matchesDept && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-500 mt-1">Master Database & Digital Service Book</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Employee
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name or employee ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterDept} onValueChange={setFilterDept}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Administration">Administration</SelectItem>
                <SelectItem value="Medical">Medical</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="OBC">OBC</SelectItem>
                <SelectItem value="SC">SC</SelectItem>
                <SelectItem value="ST">ST</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Employee List ({filteredEmployees.length})</CardTitle>
            <Badge variant="outline">{employees.length} Total Employees</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Designation</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Department</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">DOJ</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Pay Scale</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-blue-600">{emp.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{emp.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{emp.designation}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.department}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{emp.category}</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.doj}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.payScale}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Badge className={emp.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                          {emp.status}
                        </Badge>
                        {emp.probation && (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            Probation
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Link to={`/employees/${emp.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
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
