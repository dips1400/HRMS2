import { Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const probationEmployees = [
  { empId: "EMP005", name: "Vijay Singh Rathore", designation: "Junior Clerk", doj: "2024-01-15", probationEnd: "2026-01-14", monthsCompleted: 13, elAvailed: 8, hplAvailed: 0, extensionDays: 0, acrStatus: "Pending", confirmationStatus: "Under Review" },
];

export default function ProbationManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Probation Management</h1>
        <p className="text-gray-500 mt-1">2-Year Probation with Extension Logic & ACR Review</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">On Probation</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">67</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Due for Confirmation</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Confirmed This FY</p>
            <p className="text-2xl font-bold text-green-600 mt-1">45</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Probation Rules</CardTitle>
        </CardHeader>
        <CardContent className="p-4 bg-blue-50 rounded-lg space-y-2 text-sm">
          <p>• <strong>Probation Period:</strong> 2 years from date of joining</p>
          <p>• <strong>Extension:</strong> EL + HPL availed beyond 30 days extends probation by equal days</p>
          <p>• <strong>ACR Review:</strong> Mandatory confidential report review before confirmation</p>
          <p>• <strong>Confirmation:</strong> Auto-generation of confirmation order upon successful completion</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Employees on Probation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Designation</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">DOJ</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Probation End</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Completed</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">EL/HPL Availed</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Extension Days</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">ACR</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {probationEmployees.map((emp) => (
                  <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.empId}</p>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{emp.designation}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.doj}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.probationEnd}</td>
                    <td className="py-3 px-4"><Badge variant="outline">{emp.monthsCompleted} months</Badge></td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.elAvailed}/{emp.hplAvailed}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.extensionDays} days</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-100 text-yellow-800">{emp.acrStatus}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className="bg-blue-100 text-blue-800">{emp.confirmationStatus}</Badge>
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
