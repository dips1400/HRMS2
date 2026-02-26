import { LogOut, Bell, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const retiringEmployees = [
  { empId: "EMP234", name: "Ramesh Chandra", designation: "Superintendent", dob: "1964-09-15", retirementDate: "2026-09-30", monthsLeft: 7, gratuity: 1850000, pfBalance: 3200000, leaveEncashment: 450000, ndcStatus: "Pending" },
  { empId: "EMP345", name: "Anita Rao", designation: "Executive Engineer", dob: "1964-12-20", retirementDate: "2026-12-31", monthsLeft: 10, gratuity: 2100000, pfBalance: 4500000, leaveEncashment: 620000, ndcStatus: "Pending" },
];

export default function RetirementManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Retirement & Superannuation</h1>
          <p className="text-gray-500 mt-1">6-Month Prior Notice & Final Settlement Processing</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Retiring (Next 6 Months)</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Pending Final Settlement</p>
            <p className="text-2xl font-bold text-red-600 mt-1">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Processed This FY</p>
            <p className="text-2xl font-bold text-green-600 mt-1">23</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Retirements (6-Month Alert)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Designation</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">DOB</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Retirement Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Months Left</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Gratuity</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">PF Balance</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Leave Encashment</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">NDC Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {retiringEmployees.map((emp) => (
                  <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.empId}</p>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{emp.designation}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{emp.dob}</td>
                    <td className="py-3 px-4 text-sm font-medium text-orange-600">{emp.retirementDate}</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-orange-100 text-orange-800">{emp.monthsLeft} months</Badge>
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">₹{(emp.gratuity / 100000).toFixed(1)}L</td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">₹{(emp.pfBalance / 100000).toFixed(1)}L</td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">₹{(emp.leaveEncashment / 100000).toFixed(1)}L</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-100 text-yellow-800">{emp.ndcStatus}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm">Process</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Retirement Processing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✓ 6-Month Prior Retirement Notice</p>
            <p>✓ No Due Certificate (NDC) from all departments</p>
            <p>✓ Recovery of Outstanding Dues (Loans, Advances, etc.)</p>
            <p>✓ Gratuity Calculation & Approval</p>
            <p>✓ PF Final Settlement</p>
            <p>✓ Leave Encashment (Max 300 days EL)</p>
            <p>✓ GSLI (Group Savings Linked Insurance) Claim</p>
            <p>✓ Pension Papers Processing</p>
            <p>✓ Final Settlement Payment</p>
            <p>✓ Service Certificate Issuance</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
