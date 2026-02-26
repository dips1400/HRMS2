import { ArrowUpCircle, Calendar, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const incrementCases = [
  { empId: "EMP001", name: "Rajesh Kumar", currentBasic: 45000, incrementAmount: 1350, newBasic: 46400, effectiveDate: "2026-07-01", eligibility: "Eligible", status: "Pending" },
  { empId: "EMP002", name: "Priya Sharma", currentBasic: 52000, incrementAmount: 1560, newBasic: 53600, effectiveDate: "2026-07-01", eligibility: "Eligible", status: "Pending" },
];

export default function IncrementManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Increment Management</h1>
          <p className="text-gray-500 mt-1">Annual Increment Processing - Effective July 1st</p>
        </div>
        <Button className="flex items-center gap-2">
          <ArrowUpCircle className="w-4 h-4" />
          Process Annual Increment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Due for Increment (July 2026)</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Total Increment Amount</p>
            <p className="text-2xl font-bold text-green-600 mt-1">₹24.5 L</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Processed This FY</p>
            <p className="text-2xl font-bold text-purple-600 mt-1">2,654</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Increment Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg space-y-2 text-sm">
            <p>• <strong>Increment Rate:</strong> 3% of Basic Pay</p>
            <p>• <strong>Effective Date:</strong> July 1st of every year</p>
            <p>• <strong>Rounding:</strong> Rounded to nearest ₹100</p>
            <p>• <strong>Eligibility:</strong> Must have completed 6 months of service</p>
            <p>• <strong>Withholding:</strong> Can be withheld for adverse remarks in ACR</p>
            <p>• <strong>Arrears:</strong> Auto-calculated if increment is backdated</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Increment Cases (July 2026)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Current Basic</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Increment (3%)</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">New Basic</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Effective Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Eligibility</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {incrementCases.map((inc) => (
                  <tr key={inc.empId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{inc.name}</p>
                        <p className="text-xs text-gray-500">{inc.empId}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">₹{inc.currentBasic.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-green-600">₹{inc.incrementAmount.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right text-sm font-bold text-blue-600">₹{inc.newBasic.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{inc.effectiveDate}</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-100 text-green-800">{inc.eligibility}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className="bg-yellow-100 text-yellow-800">{inc.status}</Badge>
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
    </div>
  );
}
