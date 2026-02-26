import { Building2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const orgStructure = [
  {
    name: "Head Office",
    type: "HQ",
    location: "New Delhi",
    head: "Director General",
    employees: 456,
    departments: ["Administration", "Finance", "HR", "Legal", "IT"],
  },
  {
    name: "Regional Office - North",
    type: "Regional",
    location: "Chandigarh",
    head: "Regional Director",
    employees: 234,
    departments: ["Operations", "Finance", "HR"],
  },
  {
    name: "Regional Office - South",
    type: "Regional",
    location: "Chennai",
    head: "Regional Director",
    employees: 298,
    departments: ["Operations", "Finance", "HR"],
  },
  {
    name: "Regional Office - East",
    type: "Regional",
    location: "Kolkata",
    head: "Regional Director",
    employees: 189,
    departments: ["Operations", "Finance", "HR"],
  },
  {
    name: "Regional Office - West",
    type: "Regional",
    location: "Mumbai",
    head: "Regional Director",
    employees: 312,
    departments: ["Operations", "Finance", "HR"],
  },
];

export default function OrganizationStructure() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Organization Structure</h1>
        <p className="text-gray-500 mt-1">Department Hierarchy & Regional Offices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orgStructure.map((office, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                {office.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="text-sm font-medium text-gray-900">{office.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm font-medium text-gray-900">{office.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Office Head</p>
                <p className="text-sm font-medium text-gray-900">{office.head}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Employees</p>
                <p className="text-2xl font-bold text-blue-600">{office.employees}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Departments</p>
                <div className="flex flex-wrap gap-1">
                  {office.departments.map((dept, dIndex) => (
                    <span key={dIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reporting Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Level 1:</strong> Director General (Head Office)</p>
            <p className="ml-4"><strong>Level 2:</strong> Regional Directors (Regional Offices)</p>
            <p className="ml-8"><strong>Level 3:</strong> Department Heads</p>
            <p className="ml-12"><strong>Level 4:</strong> Section Officers / Superintendents</p>
            <p className="ml-16"><strong>Level 5:</strong> Assistant / Senior Clerks</p>
            <p className="ml-20"><strong>Level 6:</strong> Junior Clerks / Support Staff</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
