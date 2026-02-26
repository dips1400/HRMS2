import { FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const reports = [
  {
    category: "Employee Reports",
    items: [
      { name: "Employee Master Register", desc: "Complete employee details with service information" },
      { name: "Category-wise Employee Distribution", desc: "General/OBC/SC/ST breakdown" },
      { name: "Department-wise Employee List", desc: "Employees grouped by department" },
      { name: "Seniority List", desc: "Designation-wise seniority register" },
      { name: "Digital Service Book Export", desc: "Complete service history of all employees" },
    ],
  },
  {
    category: "Leave Reports",
    items: [
      { name: "Leave Balance Report", desc: "CL/EL/HPL balance for all employees" },
      { name: "Leave Availed Report", desc: "Monthly/yearly leave utilization" },
      { name: "Leave Encashment Due Report", desc: "Employees eligible for leave encashment" },
      { name: "Leave Application Register", desc: "All leave applications with status" },
    ],
  },
  {
    category: "Payroll Reports",
    items: [
      { name: "Monthly Salary Register", desc: "Complete salary details for the month" },
      { name: "Bank Transfer Report", desc: "NEFT/RTGS file for salary credit" },
      { name: "PF Statement (Form 12A)", desc: "Monthly PF contribution report" },
      { name: "TDS Report (Form 24Q)", desc: "Quarterly TDS deduction report" },
      { name: "Professional Tax Report", desc: "PT deduction and payment details" },
      { name: "Salary Arrears Report", desc: "Promotion/DA/Pay revision arrears" },
      { name: "Form 16 Generation", desc: "Annual TDS certificate for employees" },
    ],
  },
  {
    category: "PF Trust Reports",
    items: [
      { name: "PF Ledger Report", desc: "Individual PF account statements" },
      { name: "Annual PF Statement", desc: "Yearly statement with interest calculation" },
      { name: "PF Advance Register", desc: "All PF advances/loans issued" },
      { name: "PF Withdrawal Register", desc: "Partial and final PF settlements" },
      { name: "Interest Calculation Report", desc: "FY-wise interest computation" },
    ],
  },
  {
    category: "Promotion & Increment",
    items: [
      { name: "Promotion Due List", desc: "Employees eligible for promotion" },
      { name: "DPC Review Register", desc: "Promotion committee recommendations" },
      { name: "Increment Due Report", desc: "Annual increment processing list" },
      { name: "Time-bound Promotion Report", desc: "10/20/30 year service completions" },
    ],
  },
  {
    category: "Recruitment Reports",
    items: [
      { name: "Vacancy Position Report", desc: "Sanctioned vs filled positions" },
      { name: "Roster Compliance Report", desc: "Reservation compliance status" },
      { name: "Recruitment Cycle Register", desc: "All recruitment cycles with status" },
      { name: "Candidate Merit List", desc: "Selected candidates with ranks" },
    ],
  },
  {
    category: "Retirement Reports",
    items: [
      { name: "6-Month Alert Report", desc: "Employees retiring in next 6 months" },
      { name: "Retirement Settlement Register", desc: "Final settlement calculations" },
      { name: "Gratuity Calculation Report", desc: "Gratuity amounts for retiring staff" },
      { name: "Pension Processing Report", desc: "Pension papers status" },
    ],
  },
  {
    category: "Compliance & Audit",
    items: [
      { name: "Audit Trail Log", desc: "All system activities and changes" },
      { name: "Duty Certificate Register", desc: "Monthly duty certificate submission status" },
      { name: "Budget Utilization Report", desc: "Salary budget vs actual spending" },
      { name: "Statutory Compliance Report", desc: "PF/TDS/PT compliance summary" },
    ],
  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-500 mt-1">Comprehensive Reporting System</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="feb2026">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="feb2026">February 2026</SelectItem>
              <SelectItem value="jan2026">January 2026</SelectItem>
              <SelectItem value="dec2025">December 2025</SelectItem>
              <SelectItem value="fy2025">FY 2025-26</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {reports.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.items.map((report, rIndex) => (
                  <div
                    key={rIndex}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{report.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{report.desc}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Export Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Export to PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Export to Excel
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Export to CSV
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
