import { useState } from "react";
import { Calendar, Plus, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const leaveBalance = [
  { empId: "EMP001", name: "Rajesh Kumar", cl: { opening: 8, availed: 3, balance: 5 }, el: { opening: 138, availed: 12, balance: 126 }, hpl: { opening: 45, availed: 0, balance: 45 } },
  { empId: "EMP002", name: "Priya Sharma", cl: { opening: 8, availed: 5, balance: 3 }, el: { opening: 95, availed: 8, balance: 87 }, hpl: { opening: 32, availed: 0, balance: 32 } },
  { empId: "EMP003", name: "Amit Patel", cl: { opening: 8, availed: 2, balance: 6 }, el: { opening: 156, availed: 15, balance: 141 }, hpl: { opening: 58, availed: 5, balance: 53 } },
];

const leaveApplications = [
  { id: "LA001", empId: "EMP045", name: "Sunita Verma", type: "Casual Leave", from: "2026-03-01", to: "2026-03-03", days: 3, reason: "Personal work", status: "Pending", appliedOn: "2026-02-20" },
  { id: "LA002", empId: "EMP067", name: "Vijay Singh", type: "Earned Leave", from: "2026-03-10", to: "2026-03-20", days: 11, reason: "Family function", status: "Approved", appliedOn: "2026-02-18" },
  { id: "LA003", empId: "EMP089", name: "Kavita Desai", type: "Half Pay Leave", from: "2026-03-05", to: "2026-03-15", days: 11, reason: "Medical treatment", status: "Under Review", appliedOn: "2026-02-22" },
];

export default function LeaveManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leave Management</h1>
          <p className="text-gray-500 mt-1">Rule-based Leave Engine with Accrual & Workflows</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Apply Leave
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Pending Applications</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">45</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Approved This Month</p>
            <p className="text-2xl font-bold text-green-600 mt-1">234</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">On Leave Today</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">87</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Leave Encashment Due</p>
            <p className="text-2xl font-bold text-purple-600 mt-1">23</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="applications">Leave Applications</TabsTrigger>
          <TabsTrigger value="balance">Leave Balance</TabsTrigger>
          <TabsTrigger value="rules">Leave Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Leave Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Application ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Leave Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">From</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">To</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Days</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveApplications.map((app) => (
                      <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">{app.id}</td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{app.name}</p>
                            <p className="text-xs text-gray-500">{app.empId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{app.type}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{app.from}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{app.to}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{app.days}</td>
                        <td className="py-3 px-4">
                          <Badge className={
                            app.status === "Approved" ? "bg-green-100 text-green-800" :
                            app.status === "Pending" ? "bg-orange-100 text-orange-800" :
                            "bg-yellow-100 text-yellow-800"
                          }>
                            {app.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 flex gap-2">
                          <Button variant="ghost" size="sm"><CheckCircle className="w-4 h-4 text-green-600" /></Button>
                          <Button variant="ghost" size="sm"><XCircle className="w-4 h-4 text-red-600" /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balance">
          <Card>
            <CardHeader>
              <CardTitle>Employee Leave Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-700" colSpan={3}>Casual Leave (8/year)</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-700" colSpan={3}>Earned Leave (15 half-yearly)</th>
                      <th className="text-center py-3 px-4 font-semibold text-sm text-gray-700" colSpan={3}>Half Pay Leave (10 half-yearly)</th>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th></th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Opening</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Availed</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Balance</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Opening</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Availed</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Balance</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Opening</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Availed</th>
                      <th className="text-center py-2 px-2 text-xs text-gray-600">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveBalance.map((emp) => (
                      <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                            <p className="text-xs text-gray-500">{emp.empId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center text-sm text-gray-600">{emp.cl.opening}</td>
                        <td className="py-3 px-2 text-center text-sm text-red-600">{emp.cl.availed}</td>
                        <td className="py-3 px-2 text-center text-sm font-medium text-green-600">{emp.cl.balance}</td>
                        <td className="py-3 px-2 text-center text-sm text-gray-600">{emp.el.opening}</td>
                        <td className="py-3 px-2 text-center text-sm text-red-600">{emp.el.availed}</td>
                        <td className="py-3 px-2 text-center text-sm font-medium text-green-600">{emp.el.balance}</td>
                        <td className="py-3 px-2 text-center text-sm text-gray-600">{emp.hpl.opening}</td>
                        <td className="py-3 px-2 text-center text-sm text-red-600">{emp.hpl.availed}</td>
                        <td className="py-3 px-2 text-center text-sm font-medium text-green-600">{emp.hpl.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Casual Leave (CL)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Accrual:</strong> 8 days per year (credited on April 1st)</p>
                <p>• <strong>Carry Forward:</strong> Not allowed (lapse on March 31st)</p>
                <p>• <strong>Encashment:</strong> Not allowed</p>
                <p>• <strong>Maximum:</strong> 8 days in a year</p>
                <p>• <strong>Combination:</strong> Can be combined with other leave types</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Earned Leave (EL)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Accrual:</strong> 15 days per half year (credited Jan 1st & Jul 1st)</p>
                <p>• <strong>Carry Forward:</strong> Unlimited accumulation</p>
                <p>• <strong>Encashment:</strong> Allowed (max 300 days on retirement)</p>
                <p>• <strong>Eligibility:</strong> After completion of 1 year of service</p>
                <p>• <strong>Combination:</strong> Can be prefixed/suffixed with holidays</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Half Pay Leave (HPL)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>Accrual:</strong> 10 days per half year</p>
                <p>• <strong>Carry Forward:</strong> Can accumulate</p>
                <p>• <strong>Encashment:</strong> Not allowed</p>
                <p>• <strong>Salary:</strong> 50% salary during HPL period</p>
                <p>• <strong>Conversion:</strong> 2 days HPL = 1 day EL for pension</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Leave Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• <strong>LWP (Leave Without Pay):</strong> No salary, with approval</p>
                <p>• <strong>Compensatory Leave:</strong> For extra duty on holidays</p>
                <p>• <strong>Special Leave:</strong> As per government orders</p>
                <p>• <strong>Maternity Leave:</strong> 180 days</p>
                <p>• <strong>Paternity Leave:</strong> 15 days</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
