import { useState } from "react";
import { DollarSign, Calendar, FileText, CheckCircle, AlertCircle, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const payrollCycle = {
  month: "February 2026",
  cycle: "21 Jan - 20 Feb 2026",
  status: "Pending Approval",
  totalEmployees: 2789,
  grossSalary: 42156000,
  totalDeductions: 6523000,
  netPayable: 35633000,
  dutyCertificates: { submitted: 2534, pending: 255 },
};

const salaryComponents = [
  { component: "Basic Pay", amount: 18500000, percentage: 43.9 },
  { component: "Dearness Allowance (DA)", amount: 9250000, percentage: 21.9 },
  { component: "House Rent Allowance (HRA)", amount: 5550000, percentage: 13.2 },
  { component: "Transport Allowance (TA)", amount: 3200000, percentage: 7.6 },
  { component: "Special Allowance", amount: 2856000, percentage: 6.8 },
  { component: "Other Allowances", amount: 2800000, percentage: 6.6 },
];

const deductions = [
  { component: "PF (Employee + Employer)", amount: 4440000, percentage: 68.1 },
  { component: "Income Tax (TDS)", amount: 1234000, percentage: 18.9 },
  { component: "Professional Tax", amount: 234000, percentage: 3.6 },
  { component: "Loan Recoveries", amount: 345000, percentage: 5.3 },
  { component: "LIC Premium", amount: 156000, percentage: 2.4 },
  { component: "Society Deductions", amount: 114000, percentage: 1.7 },
];

const employeePayroll = [
  {
    empId: "EMP001",
    name: "Rajesh Kumar",
    department: "Finance",
    basic: 45000,
    da: 22500,
    hra: 13500,
    ta: 3200,
    specialAllowance: 5000,
    gross: 89200,
    pfEmp: 8100,
    pfEmployer: 8100,
    incomeTax: 4500,
    netPayable: 68500,
    dutyCertificate: "Submitted",
  },
  {
    empId: "EMP002",
    name: "Priya Sharma",
    department: "Engineering",
    basic: 52000,
    da: 26000,
    hra: 15600,
    ta: 3200,
    specialAllowance: 6000,
    gross: 102800,
    pfEmp: 9360,
    pfEmployer: 9360,
    incomeTax: 6200,
    netPayable: 77880,
    dutyCertificate: "Submitted",
  },
  {
    empId: "EMP003",
    name: "Amit Patel",
    department: "Administration",
    basic: 58000,
    da: 29000,
    hra: 17400,
    ta: 3200,
    specialAllowance: 7000,
    gross: 114600,
    pfEmp: 10440,
    pfEmployer: 10440,
    incomeTax: 7800,
    netPayable: 85920,
    dutyCertificate: "Pending",
  },
];

const arrearsRecords = [
  {
    id: "ARR001",
    empId: "EMP045",
    name: "Sunita Verma",
    type: "Promotion Arrears",
    period: "Apr 2025 - Jan 2026",
    amount: 45000,
    status: "Calculated",
    processMonth: "Feb 2026",
  },
  {
    id: "ARR002",
    empId: "EMP067",
    name: "Vijay Singh",
    type: "DA Revision Arrears",
    period: "Jul 2025 - Jan 2026",
    amount: 32000,
    status: "Approved",
    processMonth: "Feb 2026",
  },
];

export default function PayrollManagement() {
  const [selectedMonth, setSelectedMonth] = useState("feb2026");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payroll Management</h1>
          <p className="text-gray-500 mt-1">Centralized Payroll Processing - FY 2025-26</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Generate Payslips
          </Button>
          <Button className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Process Payroll
          </Button>
        </div>
      </div>

      {/* Current Cycle Summary */}
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{payrollCycle.month} Payroll</h3>
              <p className="text-sm text-gray-500">Salary Cycle: {payrollCycle.cycle}</p>
            </div>
            <Badge className={
              payrollCycle.status === "Pending Approval" ? "bg-yellow-100 text-yellow-800" :
              payrollCycle.status === "Approved" ? "bg-green-100 text-green-800" :
              "bg-gray-100 text-gray-800"
            }>
              {payrollCycle.status}
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Employees</p>
              <p className="text-2xl font-bold text-gray-900">{payrollCycle.totalEmployees.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gross Salary</p>
              <p className="text-2xl font-bold text-green-600">₹{(payrollCycle.grossSalary / 10000000).toFixed(2)} Cr</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Deductions</p>
              <p className="text-2xl font-bold text-red-600">₹{(payrollCycle.totalDeductions / 10000000).toFixed(2)} Cr</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Net Payable</p>
              <p className="text-2xl font-bold text-blue-600">₹{(payrollCycle.netPayable / 10000000).toFixed(2)} Cr</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duty Certificates</p>
              <p className="text-lg font-bold text-gray-900">
                {payrollCycle.dutyCertificates.submitted}/{payrollCycle.totalEmployees}
              </p>
              <p className="text-xs text-orange-600">{payrollCycle.dutyCertificates.pending} Pending</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Duty Certificate Alert */}
      {payrollCycle.dutyCertificates.pending > 0 && (
        <Card className="border-l-4 border-l-orange-500 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900">Duty Certificate Verification Pending</h4>
                <p className="text-sm text-orange-700 mt-1">
                  {payrollCycle.dutyCertificates.pending} employees have not submitted their duty certificates. 
                  Salary cannot be released without mandatory duty certificate verification as per government regulations.
                </p>
                <Button variant="outline" size="sm" className="mt-2 bg-white">
                  View Pending List
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="employee">Employee Payroll</TabsTrigger>
          <TabsTrigger value="arrears">Arrears Processing</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {salaryComponents.map((comp, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">{comp.component}</span>
                        <span className="text-sm font-semibold text-gray-900">
                          ₹{(comp.amount / 100000).toFixed(1)}L ({comp.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${comp.percentage * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Total Gross Salary</span>
                    <span className="font-bold text-green-600">₹{(payrollCycle.grossSalary / 10000000).toFixed(2)} Cr</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deductions Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {deductions.map((ded, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">{ded.component}</span>
                        <span className="text-sm font-semibold text-gray-900">
                          ₹{(ded.amount / 100000).toFixed(1)}L ({ded.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${ded.percentage * 2}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Total Deductions</span>
                    <span className="font-bold text-red-600">₹{(payrollCycle.totalDeductions / 10000000).toFixed(2)} Cr</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>PF Contribution Details (12% + 12%)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">Employee Contribution (12%)</p>
                  <p className="text-2xl font-bold text-blue-900">₹22.20 L</p>
                  <p className="text-xs text-blue-600 mt-1">On Basic + DA</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">Employer Contribution (12%)</p>
                  <p className="text-2xl font-bold text-green-900">₹22.20 L</p>
                  <p className="text-xs text-green-600 mt-1">On Basic + DA</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">Total PF Contribution</p>
                  <p className="text-2xl font-bold text-purple-900">₹44.40 L</p>
                  <p className="text-xs text-purple-600 mt-1">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employee">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Employee-wise Payroll Details</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export to Excel
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Emp ID</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Dept</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Basic</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">DA</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">HRA</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Gross</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">PF (12%)</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Tax</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-700">Net Pay</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Duty Cert</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeePayroll.map((emp) => (
                      <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 font-medium text-blue-600">{emp.empId}</td>
                        <td className="py-3 px-2 text-gray-900">{emp.name}</td>
                        <td className="py-3 px-2 text-gray-600">{emp.department}</td>
                        <td className="py-3 px-2 text-right text-gray-600">₹{emp.basic.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right text-gray-600">₹{emp.da.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right text-gray-600">₹{emp.hra.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right font-medium text-green-600">₹{emp.gross.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right text-red-600">₹{emp.pfEmp.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right text-red-600">₹{emp.incomeTax.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right font-medium text-blue-600">₹{emp.netPayable.toLocaleString()}</td>
                        <td className="py-3 px-2">
                          <Badge className={
                            emp.dutyCertificate === "Submitted" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-orange-100 text-orange-800"
                          }>
                            {emp.dutyCertificate}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="arrears">
          <Card>
            <CardHeader>
              <CardTitle>Arrears Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Arrears Processing:</strong> All promotion arrears, DA revision arrears, and pay revision arrears 
                  are calculated with backdated multi-month calculations and processed along with regular salary.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Arrears ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Period</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Process Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrearsRecords.map((arrear) => (
                      <tr key={arrear.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">{arrear.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">
                          {arrear.name}<br />
                          <span className="text-xs text-gray-500">{arrear.empId}</span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{arrear.type}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{arrear.period}</td>
                        <td className="py-3 px-4 text-sm font-medium text-green-600">₹{arrear.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <Badge className={
                            arrear.status === "Approved" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }>
                            {arrear.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{arrear.processMonth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Statutory Reports & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Monthly Salary Register", desc: "Complete salary details of all employees" },
                  { name: "PF Statement (Form 12A)", desc: "Monthly PF contribution statement" },
                  { name: "TDS Report (Form 24Q)", desc: "Tax deducted at source quarterly report" },
                  { name: "Professional Tax Report", desc: "PT deduction and payment details" },
                  { name: "Bank Transfer File", desc: "NEFT/RTGS file for salary credit" },
                  { name: "Form 16 (Annual)", desc: "Annual TDS certificate for employees" },
                  { name: "Audit Trail Report", desc: "Complete payroll processing audit log" },
                  { name: "Budget vs Actual", desc: "Salary budget utilization report" },
                ].map((report, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{report.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{report.desc}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
