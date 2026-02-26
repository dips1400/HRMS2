import { TrendingUp, FileText, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const promotionCases = [
  { empId: "EMP045", name: "Sunita Verma", currentDesig: "Junior Clerk", proposedDesig: "Senior Clerk", type: "Regular", eligibilityDate: "2025-06-01", seniority: 23, dpcStatus: "Recommended", orderStatus: "Pending" },
  { empId: "EMP067", name: "Vijay Singh", currentDesig: "Assistant", proposedDesig: "Section Officer", type: "Time-bound (10 years)", eligibilityDate: "2025-12-15", seniority: 45, dpcStatus: "Under Review", orderStatus: "-" },
];

export default function PromotionManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Promotion Management</h1>
          <p className="text-gray-500 mt-1">Regular & Time-bound Promotions with DPC Workflow</p>
        </div>
        <Button className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Generate Seniority List
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Due for Promotion</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">34</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Under DPC Review</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Processed This FY</p>
            <p className="text-2xl font-bold text-green-600 mt-1">87</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Promotion Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Regular Promotion</h4>
              <p className="text-sm text-blue-800">Based on seniority, DPC recommendation, ACR review, and vacancy availability</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Time-bound Promotion</h4>
              <p className="text-sm text-purple-800">Automatic after 10/20/30 years of service with satisfactory performance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Promotion Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Current Designation</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Proposed Designation</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Eligibility Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Seniority</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">DPC Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {promotionCases.map((promo) => (
                  <tr key={promo.empId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{promo.name}</p>
                        <p className="text-xs text-gray-500">{promo.empId}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{promo.currentDesig}</td>
                    <td className="py-3 px-4 text-sm font-medium text-blue-600">{promo.proposedDesig}</td>
                    <td className="py-3 px-4"><Badge variant="outline">{promo.type}</Badge></td>
                    <td className="py-3 px-4 text-sm text-gray-600">{promo.eligibilityDate}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">#{promo.seniority}</td>
                    <td className="py-3 px-4">
                      <Badge className={promo.dpcStatus === "Recommended" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {promo.dpcStatus}
                      </Badge>
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
