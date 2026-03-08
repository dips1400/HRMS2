// import { DollarSign, TrendingUp, Users, Calendar } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";
// import { Badge } from "../../components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";
// import { Link } from "react-router";

// const stats = [
//   { label: "Total Payroll (Monthly)", value: "₹1.85 Cr", icon: DollarSign, color: "text-green-600" },
//   { label: "Employees Paid", value: "2,847", icon: Users, color: "text-blue-600" },
//   { label: "Pending Payments", value: "12", icon: Calendar, color: "text-yellow-600" },
//   { label: "YTD Payroll", value: "₹3.7 Cr", icon: TrendingUp, color: "text-purple-600" },
// ];

// const monthlyData = [
//   { month: "Aug", amount: 17500000 },
//   { month: "Sep", amount: 17800000 },
//   { month: "Oct", amount: 18000000 },
//   { month: "Nov", amount: 18200000 },
//   { month: "Dec", amount: 18500000 },
//   { month: "Jan", amount: 18300000 },
//   { month: "Feb", amount: 18500000 },
// ];

// const departmentPayroll = [
//   { department: "Administration", amount: 4500000 },
//   { department: "Education", amount: 6800000 },
//   { department: "Health", amount: 4200000 },
//   { department: "Public Works", amount: 2100000 },
//   { department: "Finance", amount: 900000 },
// ];

// const recentPayments = [
//   { id: "PAY001", employee: "Rajesh Kumar", amount: "₹67,000", date: "2026-02-01", status: "Completed" },
//   { id: "PAY002", employee: "Priya Sharma", amount: "₹85,000", date: "2026-02-01", status: "Completed" },
//   { id: "PAY003", employee: "Amit Singh", amount: "₹72,000", date: "2026-02-01", status: "Completed" },
//   { id: "PAY004", employee: "Neha Patel", amount: "₹58,000", date: "2026-02-01", status: "Pending" },
// ];

// export function PayrollDashboard() {
//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-900">Payroll Management</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             Manage employee salaries and payroll processing
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <Link to="/payroll/salary-slips">
//             <Button variant="outline">View Salary Slips</Button>
//           </Link>
//           <Button>Process Payroll</Button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <Card key={stat.label}>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">{stat.label}</p>
//                     <p className="text-2xl font-semibold mt-2">{stat.value}</p>
//                   </div>
//                   <Icon className={`h-8 w-8 ${stat.color}`} />
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Monthly Payroll Trend</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis tickFormatter={(value) => `₹${(value / 10000000).toFixed(1)}Cr`} />
//                 <Tooltip formatter={(value: number) => `₹${(value / 10000000).toFixed(2)} Cr`} />
//                 <Legend />
//                 <Line type="monotone" dataKey="amount" stroke="#3b82f6" name="Payroll Amount" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Department-wise Payroll</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={departmentPayroll}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="department" angle={-45} textAnchor="end" height={100} />
//                 <YAxis tickFormatter={(value) => `₹${(value / 1000000).toFixed(1)}L`} />
//                 <Tooltip formatter={(value: number) => `₹${(value / 1000000).toFixed(2)} Lakhs`} />
//                 <Bar dataKey="amount" fill="#10b981" name="Amount" />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Recent Payments */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Payments</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Payment ID</TableHead>
//                 <TableHead>Employee</TableHead>
//                 <TableHead>Amount</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {recentPayments.map((payment) => (
//                 <TableRow key={payment.id}>
//                   <TableCell className="font-medium">{payment.id}</TableCell>
//                   <TableCell>{payment.employee}</TableCell>
//                   <TableCell>{payment.amount}</TableCell>
//                   <TableCell>{payment.date}</TableCell>
//                   <TableCell>
//                     <Badge variant={payment.status === "Completed" ? "default" : "secondary"}>
//                       {payment.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell>
//                     <Button size="sm" variant="ghost">View</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import { useState } from "react";
import {
  FileText, CheckCircle, AlertCircle, Download, Plus, Play,
  Eye, Search, TrendingUp, Users, CreditCard, Clock, X,
  Send, Printer, Lock, Unlock, BarChart2, DollarSign,
  Building2, Shield, Info, ChevronRight, ChevronDown,
  RefreshCw, Bell, BookOpen, Briefcase
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────
type Tab =
  | "dashboard"
  | "process"
  | "employees"
  | "arrears"
  | "payments"
  | "statutory"
  | "settlement"
  | "leaveEncashment"
  | "advances"
  | "budgetary";

type ModalType =
  | "newPayroll"
  | "processConfirm"
  | "payslip"
  | "bulkUpload"
  | "arrearInfo"
  | "newAdvance"
  | "newEncashment"
  | null;

// ── Static Data ────────────────────────────────────────────────
const MONTHS = [
  { value: "feb2026", label: "February 2026" },
  { value: "jan2026", label: "January 2026" },
  { value: "dec2025", label: "December 2025" },
  { value: "nov2025", label: "November 2025" },
];

const salaryComponents = [
  { component: "Basic Pay", amount: 18500000, pct: 43.9 },
  { component: "Dearness Allowance (DA)", amount: 9250000, pct: 21.9 },
  { component: "House Rent Allowance (HRA)", amount: 5550000, pct: 13.2 },
  { component: "Transport Allowance (TA)", amount: 3200000, pct: 7.6 },
  { component: "Special Allowance", amount: 2856000, pct: 6.8 },
  { component: "Other Allowances", amount: 2800000, pct: 6.6 },
];

const deductions = [
  { component: "PF (Employee + Employer)", amount: 4440000, pct: 68.1 },
  { component: "Income Tax (TDS)", amount: 1234000, pct: 18.9 },
  { component: "Professional Tax", amount: 234000, pct: 3.6 },
  { component: "Loan Recoveries", amount: 345000, pct: 5.3 },
  { component: "LIC Premium", amount: 156000, pct: 2.4 },
  { component: "Society Deductions", amount: 114000, pct: 1.7 },
];

const employees = [
  {
    empId: "MSWC/001", name: "Rajesh Kumar", dept: "Finance",
    designation: "Sr. Accounts Officer", category: "General",
    basic: 45000, da: 22500, hra: 13500, ta: 3200, special: 5000,
    gross: 89200, pfEmp: 8100, tax: 4500, net: 68500,
    cert: "Submitted", bank: "SBI ••3421",
    attendance: "26/28", leaves: "CL: 2", joinDate: "12 Mar 2008",
    payScale: "Level 10", increment: "01 Jul 2025",
  },
  {
    empId: "MSWC/002", name: "Priya Sharma", dept: "Engineering",
    designation: "Junior Engineer", category: "OBC",
    basic: 52000, da: 26000, hra: 15600, ta: 3200, special: 6000,
    gross: 102800, pfEmp: 9360, tax: 6200, net: 77880,
    cert: "Submitted", bank: "BOB ••7812",
    attendance: "28/28", leaves: "EL: 0", joinDate: "5 Jun 2015",
    payScale: "Level 8", increment: "01 Jul 2025",
  },
  {
    empId: "MSWC/003", name: "Amit Patel", dept: "Administration",
    designation: "Superintendent", category: "SC",
    basic: 58000, da: 29000, hra: 17400, ta: 3200, special: 7000,
    gross: 114600, pfEmp: 10440, tax: 7800, net: 85920,
    cert: "Pending", bank: "UCO ••5531",
    attendance: "24/28", leaves: "HPL: 4", joinDate: "18 Jan 2001",
    payScale: "Level 12", increment: "01 Jan 2026",
  },
  {
    empId: "MSWC/004", name: "Sunita Verma", dept: "Medical",
    designation: "Staff Nurse", category: "ST",
    basic: 38000, da: 19000, hra: 11400, ta: 3200, special: 4000,
    gross: 75600, pfEmp: 6840, tax: 2800, net: 57420,
    cert: "Submitted", bank: "SBI ••9012",
    attendance: "28/28", leaves: "CL: 0", joinDate: "2 Sep 2012",
    payScale: "Level 6", increment: "01 Jul 2025",
  },
  {
    empId: "MSWC/005", name: "Vijay Singh", dept: "Education",
    designation: "Lecturer", category: "General",
    basic: 62000, da: 31000, hra: 18600, ta: 3200, special: 8000,
    gross: 122800, pfEmp: 11160, tax: 9100, net: 91540,
    cert: "Pending", bank: "PNB ••6634",
    attendance: "22/28", leaves: "EL: 6", joinDate: "14 Apr 2005",
    payScale: "Level 13", increment: "01 Jul 2025",
  },
];

const recentPayments = [
  { month: "January 2026", processed: "31 Jan 2026", employees: 2789, gross: "₹4.19 Cr", net: "₹3.55 Cr", status: "Completed", by: "Sh. D.K. Nair", bankFile: "Generated", tdsFiled: "Yes" },
  { month: "December 2025", processed: "31 Dec 2025", employees: 2782, gross: "₹4.15 Cr", net: "₹3.52 Cr", status: "Completed", by: "Sh. D.K. Nair", bankFile: "Generated", tdsFiled: "Yes" },
  { month: "November 2025", processed: "29 Nov 2025", employees: 2780, gross: "₹4.14 Cr", net: "₹3.51 Cr", status: "Completed", by: "Sh. R.S. Mehta", bankFile: "Generated", tdsFiled: "Yes" },
  { month: "October 2025", processed: "31 Oct 2025", employees: 2778, gross: "₹4.13 Cr", net: "₹3.50 Cr", status: "Completed", by: "Sh. R.S. Mehta", bankFile: "Generated", tdsFiled: "Yes" },
  { month: "September 2025", processed: "30 Sep 2025", employees: 2775, gross: "₹4.11 Cr", net: "₹3.48 Cr", status: "Completed", by: "Sh. R.S. Mehta", bankFile: "Generated", tdsFiled: "Yes" },
];

const arrears = [
  { id: "ARR/2026/001", empId: "MSWC/045", name: "Sunita Verma", type: "Promotion Arrears", period: "Apr 2025 – Jan 2026", amount: 45000, status: "Calculated", month: "Feb 2026", approvedBy: "—", pfImpact: 5400, taxImpact: 4500 },
  { id: "ARR/2026/002", empId: "MSWC/067", name: "Vijay Singh", type: "DA Revision Arrears", period: "Jul 2025 – Jan 2026", amount: 32000, status: "Approved", month: "Feb 2026", approvedBy: "Sh. D.K. Nair", pfImpact: 3840, taxImpact: 3200 },
  { id: "ARR/2026/003", empId: "MSWC/112", name: "Anil Gupta", type: "Pay Revision Arrears", period: "Jan 2026", amount: 18500, status: "Pending", month: "Feb 2026", approvedBy: "—", pfImpact: 2220, taxImpact: 1850 },
];

const statutoryReports = [
  { name: "Monthly Salary Register", desc: "Complete salary details — all employees", tag: "Monthly", icon: FileText },
  { name: "PF Statement (Form 12A)", desc: "Monthly PF contribution statement", tag: "PF", icon: Shield },
  { name: "TDS Report (Form 24Q)", desc: "Tax deducted at source — quarterly", tag: "TDS", icon: BarChart2 },
  { name: "Professional Tax Report", desc: "PT deduction and payment details", tag: "PT", icon: Building2 },
  { name: "Bank Transfer (NEFT/RTGS)", desc: "Bank file for salary credit", tag: "Bank", icon: CreditCard },
  { name: "Form 16 (Annual)", desc: "Annual TDS certificate for employees", tag: "Annual", icon: FileText },
  { name: "Audit Trail Report", desc: "Complete payroll processing audit log", tag: "Audit", icon: Clock },
  { name: "Budget vs Actual", desc: "Salary budget utilization report", tag: "Budget", icon: TrendingUp },
  { name: "Attendance Linked Payroll", desc: "Attendance deductions reconciliation", tag: "Attendance", icon: Users },
  { name: "Reservation Category Report", desc: "SC/ST/OBC/General/EWS/PWD payroll breakup", tag: "Category", icon: Shield },
  { name: "Finance Advances Report", desc: "All advances and recovery status", tag: "Finance", icon: DollarSign },
  { name: "Validity & Personal Details", desc: "Employee validity and personal data extract", tag: "HR", icon: BookOpen },
];

const bulkUploadTypes = [
  { label: "Promotion Data", desc: "Bulk update designation & pay scale" },
  { label: "APAR Records", desc: "Annual Performance Appraisal Records" },
  { label: "Attendance Data", desc: "Monthly attendance in CSV/XLSX" },
  { label: "Payroll Adjustments", desc: "Ad-hoc deductions or additions" },
  { label: "DA Revision", desc: "Dearness Allowance revision data" },
  { label: "Bank Details", desc: "Employee bank account updates" },
];

const finalSettlements = [
  { empId: "MSWC/089", name: "K.R. Patil", type: "Retirement", date: "28 Feb 2026", gratuity: 485000, leaveEnc: 124500, pf: 892000, dcps: 340000, groupIns: 45000, status: "In Progress", approvedBy: "—", vigilance: "Cleared" },
  { empId: "MSWC/134", name: "S.M. Joshi", type: "Resignation", date: "15 Feb 2026", gratuity: 0, leaveEnc: 45000, pf: 340000, dcps: 120000, groupIns: 0, status: "Approved", approvedBy: "Sh. D.K. Nair", vigilance: "Cleared" },
];

const leaveEncashments = [
  { id: "LE/2026/001", empId: "MSWC/010", name: "R.K. Desai", elBalance: 78, daysApplied: 20, basic: 55000, da: 27500, amount: 54167, status: "Pending Approval", appliedOn: "02 Feb 2026", approvedBy: "—" },
  { id: "LE/2026/002", empId: "MSWC/023", name: "M.S. Kulkarni", elBalance: 92, daysApplied: 25, basic: 62000, da: 31000, amount: 77083, status: "Finance Approval", appliedOn: "28 Jan 2026", approvedBy: "Sh. H.K. Rao" },
  { id: "LE/2026/003", empId: "MSWC/041", name: "P.T. Nair", elBalance: 65, daysApplied: 16, basic: 48000, da: 24000, amount: 38400, status: "Approved", appliedOn: "20 Jan 2026", approvedBy: "Sh. D.K. Nair" },
];

const advances = [
  { id: "ADV/2026/001", empId: "MSWC/015", name: "S.R. Joshi", type: "Festival Advance", amount: 10000, emi: 2000, outstanding: 6000, status: "Active", sanctionDate: "01 Nov 2025" },
  { id: "ADV/2026/002", empId: "MSWC/028", name: "A.B. Patil", type: "Computer Advance", amount: 25000, emi: 1250, outstanding: 18750, status: "Active", sanctionDate: "15 Sep 2025" },
  { id: "ADV/2026/003", empId: "MSWC/044", name: "R.D. More", type: "HBA Advance", amount: 800000, emi: 8000, outstanding: 680000, status: "Active", sanctionDate: "01 Apr 2025" },
  { id: "ADV/2026/004", empId: "MSWC/062", name: "V.K. Sharma", type: "PLI Advance", amount: 15000, emi: 1500, outstanding: 0, status: "Closed", sanctionDate: "01 Jan 2025" },
  { id: "ADV/2026/005", empId: "MSWC/071", name: "G.N. Kulkarni", type: "TA Bill Advance", amount: 5000, emi: 2500, outstanding: 2500, status: "Active", sanctionDate: "10 Jan 2026" },
];

const budgetaryProvisions = [
  { item: "Earned Leave Encashments", provision: 18500000, utilized: 9200000, balance: 9300000, retirees: 12, period: "FY 2025-26" },
  { item: "HBA Advances", provision: 25000000, utilized: 19800000, balance: 5200000, retirees: "-", period: "FY 2025-26" },
  { item: "PLI Advances", provision: 3000000, utilized: 1800000, balance: 1200000, retirees: "-", period: "FY 2025-26" },
  { item: "Gratuity", provision: 42000000, utilized: 8500000, balance: 33500000, retirees: 12, period: "FY 2025-26" },
  { item: "DCPS Contribution", provision: 12000000, utilized: 11000000, balance: 1000000, retirees: "-", period: "FY 2025-26" },
  { item: "Group Insurance", provision: 800000, utilized: 450000, balance: 350000, retirees: "-", period: "FY 2025-26" },
];

const fmtL = (n: number) => `₹${(n / 100000).toFixed(1)}L`;
const fmtCr = (n: number) => `₹${(n / 10000000).toFixed(2)} Cr`;

// ── Component ──────────────────────────────────────────────────
 export function PayrollDashboard() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [month, setMonth] = useState("feb2026");
  const [modal, setModal] = useState<ModalType>(null);
  const [search, setSearch] = useState("");
  const [payrollLocked, setPayrollLocked] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState<typeof employees[0] | null>(null);
  const [downloaded, setDownloaded] = useState<Record<string, boolean>>({});
  const [certFilter, setCertFilter] = useState("All");
  const [expandedEmp, setExpandedEmp] = useState<string | null>(null);

  const monthLabel = MONTHS.find(m => m.value === month)?.label ?? "";
  const pendingCerts = employees.filter(e => e.cert === "Pending").length;

  const filteredEmps = employees.filter(e => {
    const matchSearch = !search ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.empId.toLowerCase().includes(search.toLowerCase()) ||
      e.dept.toLowerCase().includes(search.toLowerCase());
    const matchCert = certFilter === "All" || e.cert === certFilter;
    return matchSearch && matchCert;
  });

  const handleDownload = (key: string) => {
    setDownloaded(d => ({ ...d, [key]: true }));
    setTimeout(() => setDownloaded(d => ({ ...d, [key]: false })), 2000);
  };

  const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "dashboard",      label: "Dashboard",         icon: BarChart2   },
    { id: "process",        label: "Process Payroll",   icon: Play        },
    { id: "employees",      label: "Employee Payroll",  icon: Users       },
    { id: "arrears",        label: "Arrears",           icon: TrendingUp  },
    { id: "payments",       label: "Payment History",   icon: CreditCard  },
    { id: "statutory",      label: "Reports",           icon: Shield      },
    { id: "leaveEncashment",label: "Leave Encashment",  icon: BookOpen    },
    { id: "advances",       label: "Advances",          icon: Briefcase   },
    { id: "settlement",     label: "Final Settlement",  icon: FileText    },
    { id: "budgetary",      label: "Budgetary",         icon: DollarSign  },
  ];

  return (
    <div className="bg-gray-50 min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* ── Header ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
  <div className="flex items-center justify-between gap-4">
    <div className="min-w-0">
      <div className="flex items-center gap-2">
        <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
        <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">Payroll Management</h1>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">MSWC · FY 2025–26</span>
      </div>
      <p className="text-xs text-gray-400 mt-0.5">Maharashtra State Warehousing Corporation — Integrated HR, Finance & Payroll Module</p>
    </div>
    <div className="flex items-center gap-2 flex-shrink-0">
      <select value={month} onChange={e => setMonth(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        {MONTHS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
      </select>
      <button onClick={() => setModal("newPayroll")}
        className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 bg-white transition-all whitespace-nowrap">
        <Plus className="w-4 h-4" /> New Payroll
      </button>
      <button onClick={() => setModal("processConfirm")} disabled={payrollLocked}
        className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap">
        <Play className="w-4 h-4" /> Process Payroll
      </button>
    </div>
  </div>
</div>

      {/* ── Alert Banner ── */}
      {/* {pendingCerts > 0 && (
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-orange-800">
              <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span><strong>{pendingCerts} employees</strong> have not submitted duty certificates — salary release blocked per GOM regulations.</span>
            </div>
            <button onClick={() => { setTab("employees"); setCertFilter("Pending"); }}
              className="text-xs font-semibold text-orange-700 underline underline-offset-2 whitespace-nowrap ml-4">
              View →
            </button>
          </div>
        </div>
      )} */}

      {/* ── Tab Navigation ── */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex overflow-x-auto">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-800"
              }`}>
              <t.icon className="w-4 h-4" />{t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-5">

        {/* ════════════════════════════
            DASHBOARD — Simple & Clear
        ════════════════════════════ */}
        {tab === "dashboard" && (
          <div className="space-y-5">

            {/* 4 key KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Employees", value: "2,789", sub: "Active this month", icon: Users, color: "bg-blue-600" },
                { label: "Gross Salary", value: "₹4.22 Cr", sub: "+1.2% vs Jan 2026", icon: TrendingUp, color: "bg-gray-700" },
                { label: "Net Payable", value: "₹3.56 Cr", sub: "After all deductions", icon: DollarSign, color: "bg-blue-700" },
                { label: "Duty Certs Pending", value: `${pendingCerts}`, sub: "Blocks salary release", icon: AlertCircle, color: "bg-orange-500" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500">{k.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{k.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{k.sub}</p>
                  </div>
                  <div className={`${k.color} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <k.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Cycle Status — simple step bar */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{monthLabel} Payroll Cycle</h3>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">Pending Approval</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">Salary Cycle: 21 Jan – 20 Feb 2026 · Cutoff: 20 Feb 2026</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setPayrollLocked(l => !l)}
                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                      payrollLocked ? "bg-red-50 border-red-300 text-red-700" : "bg-gray-50 border-gray-200 text-gray-600"
                    }`}>
                    {payrollLocked ? <><Lock className="w-3 h-3" />Locked</> : <><Unlock className="w-3 h-3" />Unlocked</>}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all">
                    <Send className="w-3 h-3" />Send for Approval
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                {["Duty Certs", "Calculated", "Verified", "Finance Approved", "Disbursed"].map((step, i) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                        i === 0 ? "bg-blue-600 border-blue-600 text-white"
                        : i === 1 ? "bg-yellow-400 border-yellow-400 text-white"
                        : "bg-white border-gray-200 text-gray-400"
                      }`}>
                        {i === 0 ? <CheckCircle className="w-4 h-4" /> : i + 1}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 text-center leading-tight">{step}</p>
                    </div>
                    {i < 4 && <div className={`h-px flex-1 -mt-4 ${i === 0 ? "bg-blue-300" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings + Deductions side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Earnings Breakdown</h3>
                <div className="space-y-3">
                  {salaryComponents.map(c => (
                    <div key={c.component}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">{c.component}</span>
                        <span className="font-medium text-gray-900">{fmtL(c.amount)} ({c.pct}%)</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-blue-500" style={{ width: `${c.pct * 2}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-sm">
                  <span className="font-semibold text-gray-900">Total Gross</span>
                  <span className="font-bold text-blue-700">₹4.22 Cr</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Deductions Breakdown</h3>
                <div className="space-y-3">
                  {deductions.map(d => (
                    <div key={d.component}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">{d.component}</span>
                        <span className="font-medium text-gray-900">{fmtL(d.amount)} ({d.pct}%)</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-gray-500" style={{ width: `${d.pct * 1.4}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-sm">
                  <span className="font-semibold text-gray-900">Total Deductions</span>
                  <span className="font-bold text-red-600">₹65.2 L</span>
                </div>
              </div>
            </div>

            {/* PF Summary + Quick Links */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">PF Trust Contribution (12% + 12%)</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Employee (12%)", value: "₹22.20 L", sub: "On Basic + DA" },
                    { label: "Employer (12%)", value: "₹22.20 L", sub: "On Basic + DA" },
                    { label: "Total This Month", value: "₹44.40 L", sub: "Combined PF" },
                  ].map(p => (
                    <div key={p.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                      <p className="text-xl font-bold text-gray-900">{p.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{p.label}</p>
                      <p className="text-xs text-gray-400">{p.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { label: "View Pending Duty Certs", action: () => { setTab("employees"); setCertFilter("Pending"); } },
                    { label: "Process Arrears", action: () => setTab("arrears") },
                    { label: "Leave Encashment Requests", action: () => setTab("leaveEncashment") },
                    { label: "Advances & Recovery", action: () => setTab("advances") },
                    { label: "Final Settlement", action: () => setTab("settlement") },
                    { label: "Budgetary Provisions", action: () => setTab("budgetary") },
                  ].map(q => (
                    <button key={q.label} onClick={q.action}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors text-left">
                      <span className="text-xs font-medium text-gray-700">{q.label}</span>
                      <ChevronRight className="w-3 h-3 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            PROCESS PAYROLL
        ════════════════════════════ */}
        {tab === "process" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 mb-1">Payroll Processing Checklist — {monthLabel}</h3>
              <p className="text-xs text-gray-400 mb-5">All 7 steps must be completed in order before disbursement. Finance HOD approval is mandatory.</p>
              <div className="space-y-3">
                {[
                  { step: 1, title: "Duty Certificate Collection", desc: `${employees.length - pendingCerts} of ${employees.length} submitted · ${pendingCerts} pending`, status: pendingCerts > 0 ? "partial" : "done", action: "View Pending" },
                  { step: 2, title: "Salary Calculation", desc: "Run automated salary calculation for all active employees based on attendance & leaves", status: "pending", action: "Run Calculation" },
                  { step: 3, title: "Arrears Processing", desc: "Add promotion arrears / DA revision arrears / pay revision arrears with backdated calculation", status: "pending", action: "Process Arrears" },
                  { step: 4, title: "Deduction Verification", desc: "Verify PF (12%+12%), TDS, Professional Tax, loan recoveries & other deductions", status: "pending", action: "Verify" },
                  { step: 5, title: "Finance HOD Approval", desc: "Send payroll summary to Finance Department for checking and approval before bank file", status: "pending", action: "Send for Approval" },
                  { step: 6, title: "Bank File Generation (NEFT/RTGS)", desc: "Generate bank transfer file for uploading to bank system for salary credit", status: "pending", action: "Generate File" },
                  { step: 7, title: "Salary Disbursement", desc: "Confirm bank upload and credit salary to employee bank accounts", status: "pending", action: "Confirm Disbursement" },
                ].map(s => (
                  <div key={s.step} className={`flex items-center gap-4 p-4 rounded-xl border ${
                    s.status === "done" ? "bg-green-50 border-green-200"
                    : s.status === "partial" ? "bg-orange-50 border-orange-200"
                    : "bg-white border-gray-200"
                  }`}>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 ${
                      s.status === "done" ? "bg-green-500 border-green-500 text-white"
                      : s.status === "partial" ? "bg-orange-400 border-orange-400 text-white"
                      : "bg-white border-gray-200 text-gray-400"
                    }`}>
                      {s.status === "done" ? <CheckCircle className="w-4 h-4" /> : s.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                    <button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 bg-white transition-all whitespace-nowrap flex-shrink-0">
                      {s.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-800">
                <strong>Regulatory Note — Government of Maharashtra:</strong> All salary disbursements require mandatory duty certificate verification per GR No. FIN/2019/PAY/CR-45.
                The Finance team must check and approve the payment before the bank file is generated. This system is integrated with the Finance & Payroll interface for approval and correction workflows.
              </p>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            EMPLOYEE PAYROLL
        ════════════════════════════ */}
        {tab === "employees" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search by name, ID or department..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
                {["All", "Submitted", "Pending"].map(f => (
                  <button key={f} onClick={() => setCertFilter(f)}
                    className={`px-3 py-2 text-xs font-medium transition-colors ${
                      certFilter === f ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}>
                    {f === "All" ? "All Certs" : `Cert ${f}`}
                  </button>
                ))}
              </div>
              <button onClick={() => setModal("bulkUpload")}
                className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all">
                <Download className="w-4 h-4" />Export CSV/XLSX
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {["Emp ID", "Name & Dept", "Category", "Attendance", "Pay Scale", "Basic", "Gross", "PF (12%)", "TDS", "Net Pay", "Duty Cert", "Actions"].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmps.map((emp, i) => (
                      <>
                        <tr key={emp.empId}
                          onClick={() => setExpandedEmp(expandedEmp === emp.empId ? null : emp.empId)}
                          className={`border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer ${i % 2 === 1 ? "bg-gray-50/30" : ""}`}>
                          <td className="py-3 px-3 font-medium text-blue-600 text-xs whitespace-nowrap">{emp.empId}</td>
                          <td className="py-3 px-3">
                            <p className="font-medium text-gray-900 text-xs">{emp.name}</p>
                            <p className="text-xs text-gray-400">{emp.dept} · {emp.designation}</p>
                          </td>
                          <td className="py-3 px-3">
                            <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                              emp.category === "SC" ? "bg-amber-100 text-amber-700"
                              : emp.category === "ST" ? "bg-orange-100 text-orange-700"
                              : emp.category === "OBC" ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-600"
                            }`}>{emp.category}</span>
                          </td>
                          <td className="py-3 px-3 text-xs text-gray-700">{emp.attendance} <span className="text-gray-400">({emp.leaves})</span></td>
                          <td className="py-3 px-3 text-xs text-gray-500">{emp.payScale}</td>
                          <td className="py-3 px-3 text-xs text-gray-700">₹{emp.basic.toLocaleString()}</td>
                          <td className="py-3 px-3 text-xs font-semibold text-gray-900">₹{emp.gross.toLocaleString()}</td>
                          <td className="py-3 px-3 text-xs text-red-500">₹{emp.pfEmp.toLocaleString()}</td>
                          <td className="py-3 px-3 text-xs text-red-500">₹{emp.tax.toLocaleString()}</td>
                          <td className="py-3 px-3 text-xs font-semibold text-blue-700">₹{emp.net.toLocaleString()}</td>
                          <td className="py-3 px-3">
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              emp.cert === "Submitted" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                            }`}>{emp.cert}</span>
                          </td>
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                              <button onClick={() => { setSelectedEmp(emp); setModal("payslip"); }}
                                className="p-1.5 rounded hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors" title="View Payslip">
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Download Payslip">
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        {expandedEmp === emp.empId && (
                          <tr key={`${emp.empId}-exp`} className="bg-blue-50 border-b border-blue-100">
                            <td colSpan={12} className="px-4 py-3">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                                <div>
                                  <p className="text-gray-400 mb-1 font-semibold uppercase tracking-wide">Employment Details</p>
                                  <p className="text-gray-700">Date of Joining: <strong>{emp.joinDate}</strong></p>
                                  <p className="text-gray-700">Bank Account: <strong>{emp.bank}</strong></p>
                                  <p className="text-gray-700">Next Increment: <strong>{emp.increment}</strong></p>
                                </div>
                                <div>
                                  <p className="text-gray-400 mb-1 font-semibold uppercase tracking-wide">Allowances</p>
                                  <p className="text-gray-700">DA: <strong>₹{emp.da.toLocaleString()}</strong></p>
                                  <p className="text-gray-700">HRA: <strong>₹{emp.hra.toLocaleString()}</strong></p>
                                  <p className="text-gray-700">TA: <strong>₹{emp.ta.toLocaleString()}</strong></p>
                                  <p className="text-gray-700">Special: <strong>₹{emp.special.toLocaleString()}</strong></p>
                                </div>
                                <div>
                                  <p className="text-gray-400 mb-1 font-semibold uppercase tracking-wide">Statutory Deductions</p>
                                  <p className="text-gray-700">PF Employee: <strong className="text-red-500">₹{emp.pfEmp.toLocaleString()}</strong></p>
                                  <p className="text-gray-700">PF Employer: <strong className="text-red-500">₹{emp.pfEmp.toLocaleString()}</strong></p>
                                  <p className="text-gray-700">TDS: <strong className="text-red-500">₹{emp.tax.toLocaleString()}</strong></p>
                                  <p className="text-gray-700">Prof. Tax: <strong className="text-red-500">₹200</strong></p>
                                </div>
                                <div>
                                  <p className="text-gray-400 mb-1 font-semibold uppercase tracking-wide">Attendance & Leave</p>
                                  <p className="text-gray-700">Days Present: <strong>{emp.attendance}</strong></p>
                                  <p className="text-gray-700">Leave Balance: <strong>{emp.leaves}</strong></p>
                                  <p className="text-gray-700">Category: <strong>{emp.category}</strong></p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 border-t border-gray-200">
                    <tr>
                      <td colSpan={6} className="py-3 px-3 text-xs font-semibold text-gray-600">TOTAL ({filteredEmps.length} employees)</td>
                      <td className="py-3 px-3 text-xs font-bold text-gray-900">₹{filteredEmps.reduce((s, e) => s + e.gross, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-red-500">₹{filteredEmps.reduce((s, e) => s + e.pfEmp, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-red-500">₹{filteredEmps.reduce((s, e) => s + e.tax, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-blue-700">₹{filteredEmps.reduce((s, e) => s + e.net, 0).toLocaleString()}</td>
                      <td colSpan={2} />
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            ARREARS
        ════════════════════════════ */}
        {tab === "arrears" && (
          <div className="space-y-4">

            {/* What are Arrears — explanation card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0 border border-blue-100">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">What are Arrears?</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    <strong>Arrears</strong> are salary amounts that were due in past months but couldn't be paid at the time — usually because a <strong>promotion, DA revision, or pay scale revision</strong> was decided with a <strong>backdated effective date</strong>.
                    For example: if an employee is promoted effective April 2025 but the order is issued in January 2026, the difference in salary for April 2025 – January 2026 (10 months) is calculated and paid as <strong>Promotion Arrears</strong> in February 2026 along with regular salary.
                    All arrears attract PF and TDS deductions as per GOM rules and must be approved by the Finance HOD before processing.
                  </p>
                </div>
                <button onClick={() => setModal("newPayroll")}
                  className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-all flex-shrink-0">
                  <Plus className="w-4 h-4" />Add Arrear
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Total Arrear Cases", value: arrears.length.toString() },
                { label: "Total Amount", value: `₹${arrears.reduce((s, a) => s + a.amount, 0).toLocaleString()}` },
                { label: "PF Impact", value: `₹${arrears.reduce((s, a) => s + a.pfImpact, 0).toLocaleString()}` },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <p className="text-xs text-gray-400">{s.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Arrears ID", "Employee", "Type", "Period", "Amount", "PF Impact", "TDS Impact", "Status", "Process Month", "Approved By", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {arrears.map(a => (
                    <tr key={a.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-medium text-blue-600">{a.id}</td>
                      <td className="py-3 px-3">
                        <p className="text-xs font-medium text-gray-900">{a.name}</p>
                        <p className="text-xs text-gray-400">{a.empId}</p>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-700">{a.type}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{a.period}</td>
                      <td className="py-3 px-3 text-xs font-semibold text-gray-900">₹{a.amount.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-red-500">₹{a.pfImpact.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-red-500">₹{a.taxImpact.toLocaleString()}</td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          a.status === "Approved" ? "bg-green-100 text-green-700"
                          : a.status === "Calculated" ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                        }`}>{a.status}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-500">{a.month}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{a.approvedBy}</td>
                      <td className="py-3 px-3">
                        <div className="flex gap-1">
                          <button className="text-xs px-2 py-1 rounded border border-gray-200 text-blue-600 hover:bg-blue-50 font-medium transition-colors">Approve</button>
                          <button className="text-xs px-2 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            PAYMENT HISTORY
        ════════════════════════════ */}
        {tab === "payments" && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Total Disbursed (FY)", value: "₹21.04 Cr", sub: "Apr 2025 – Jan 2026" },
                { label: "Avg Monthly Payroll", value: "₹4.14 Cr", sub: "Last 6 months" },
                { label: "YoY Growth", value: "+3.2%", sub: "vs FY 2024-25" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <p className="text-xs text-gray-400">{k.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{k.value}</p>
                  <p className="text-xs text-gray-400">{k.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">Payroll Payment History</h3>
                <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all">
                  <Download className="w-3 h-3" />Export
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Month", "Processed On", "Employees", "Gross", "Net Disbursed", "Bank File", "TDS Filed", "Status", "Processed By", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((p, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-semibold text-gray-900">{p.month}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{p.processed}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">{p.employees.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">{p.gross}</td>
                      <td className="py-3 px-3 text-xs font-semibold text-blue-700">{p.net}</td>
                      <td className="py-3 px-3"><span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">{p.bankFile}</span></td>
                      <td className="py-3 px-3"><span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">{p.tdsFiled}</span></td>
                      <td className="py-3 px-3"><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{p.status}</span></td>
                      <td className="py-3 px-3 text-xs text-gray-500">{p.by}</td>
                      <td className="py-3 px-3">
                        <div className="flex gap-1">
                          <button className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-1 transition-colors">
                            <Eye className="w-3 h-3" />View
                          </button>
                          <button className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 flex items-center gap-1 transition-colors">
                            <Download className="w-3 h-3" />PDF
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            STATUTORY REPORTS
        ════════════════════════════ */}
        {tab === "statutory" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Statutory Reports & Compliance</h3>
                <p className="text-xs text-gray-400 mt-0.5">All mandatory regulatory reports for {monthLabel}. Available in CSV, XLSX, PDF, Word, XML formats.</p>
              </div>
              <div className="flex gap-2">
                <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
                  {["PDF", "Excel", "CSV", "XML"].map(f => (
                    <button key={f} className="px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 border-r last:border-r-0 border-gray-200">{f}</button>
                  ))}
                </div>
                <button onClick={() => setModal("bulkUpload")}
                  className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:border-blue-400 hover:text-blue-600 bg-white transition-all">
                  <Plus className="w-3.5 h-3.5" />Bulk Upload
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {statutoryReports.map((r, i) => {
                const done = downloaded[r.name];
                return (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="bg-gray-50 w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <r.icon className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                        <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">{r.tag}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{r.desc}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 flex-shrink-0">
                      <button onClick={() => handleDownload(r.name)}
                        style={{ backgroundColor: done ? "#16a34a" : "#2563eb" }}
                        className="flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg text-white hover:opacity-90 transition-all">
                        {done ? <><CheckCircle className="w-3 h-3" />Done</> : <><Download className="w-3 h-3" />Download</>}
                      </button>
                      <button className="flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
                        <Eye className="w-3 h-3" />Preview
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ════════════════════════════
            LEAVE ENCASHMENT
        ════════════════════════════ */}
        {tab === "leaveEncashment" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-gray-700 leading-relaxed">
                <strong>Leave Encashment Rules (MSWC Service Rules):</strong> Employees with Earned Leave balance above 60 days may apply for encashment of minimum 16 days and maximum 30 days, once per calendar year.
                Encashment amount is calculated on <strong>Basic + DA as on date of application</strong>. Approved encashments are integrated with the payroll interface for Finance team approval and payment.
                All encashment sanctions are recorded in the employee's Digital Service Book.
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Pending Requests", value: "2", sub: "Awaiting approval" },
                { label: "Approved This Month", value: "1", sub: "₹38,400 payable" },
                { label: "Total Encashment (FY)", value: "₹4.82 L", sub: "Apr 2025 – Feb 2026" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <p className="text-xs text-gray-400">{k.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{k.value}</p>
                  <p className="text-xs text-gray-400">{k.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">Leave Encashment Requests</h3>
                <button onClick={() => setModal("newEncashment")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                  <Plus className="w-3.5 h-3.5" />New Request
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Request ID", "Employee", "EL Balance", "Days Applied", "Basic + DA", "Encashment Amount", "Status", "Applied On", "Approved By", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leaveEncashments.map(le => (
                    <tr key={le.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-medium text-blue-600">{le.id}</td>
                      <td className="py-3 px-3">
                        <p className="text-xs font-medium text-gray-900">{le.name}</p>
                        <p className="text-xs text-gray-400">{le.empId}</p>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-700">{le.elBalance} days</td>
                      <td className="py-3 px-3 text-xs font-medium text-gray-900">{le.daysApplied} days</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{(le.basic + le.da).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-semibold text-gray-900">₹{le.amount.toLocaleString()}</td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          le.status === "Approved" ? "bg-green-100 text-green-700"
                          : le.status === "Finance Approval" ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                        }`}>{le.status}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-500">{le.appliedOn}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{le.approvedBy}</td>
                      <td className="py-3 px-3">
                        <div className="flex gap-1">
                          <button className="text-xs px-2 py-1 rounded border border-gray-200 text-blue-600 hover:bg-blue-50 font-medium transition-colors">Approve</button>
                          <button className="text-xs px-2 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">Return</button>
                          <button className="text-xs px-2 py-1 rounded border border-gray-200 text-red-500 hover:bg-red-50 transition-colors">Reject</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            ADVANCES
        ════════════════════════════ */}
        {tab === "advances" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Advances managed by MSWC Payroll:</strong> Computer Advance, Festival Advance, PLI Advance, House Building Advance (HBA), Conveyance / TA Bill Advance.
                All advances are sanctioned through approval workflow, auto-deducted via payroll EMI, and tracked against final settlement. Outstanding balance is deducted during final settlement.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Active Advances", value: "4", sub: "Currently running" },
                { label: "Total Outstanding", value: "₹7.07 L", sub: "Across all types" },
                { label: "Monthly Recovery", value: "₹13,250", sub: "Auto-deducted via payroll" },
                { label: "Closed This FY", value: "1", sub: "PLI advance" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <p className="text-xs text-gray-400">{k.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{k.value}</p>
                  <p className="text-xs text-gray-400">{k.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">Advance Register</h3>
                <button onClick={() => setModal("newAdvance")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                  <Plus className="w-3.5 h-3.5" />New Advance
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Advance ID", "Employee", "Type", "Sanctioned Amount", "Monthly EMI", "Outstanding", "Sanction Date", "Status", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {advances.map(a => (
                    <tr key={a.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-medium text-blue-600">{a.id}</td>
                      <td className="py-3 px-3">
                        <p className="text-xs font-medium text-gray-900">{a.name}</p>
                        <p className="text-xs text-gray-400">{a.empId}</p>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">{a.type}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{a.amount.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{a.emi.toLocaleString()}/month</td>
                      <td className="py-3 px-3 text-xs font-semibold text-gray-900">₹{a.outstanding.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{a.sanctionDate}</td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          a.status === "Active" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                        }`}>{a.status}</span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex gap-1">
                          <button className="text-xs px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors">
                            <Eye className="w-3 h-3" />View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            FINAL SETTLEMENT
        ════════════════════════════ */}
        {tab === "settlement" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Final Settlement</strong> is calculated when an employee retires, resigns, or is separated. It includes:
                Gratuity, Cash Equivalent of Leave Salary (Encashable Leave Balance), CPF Own + MSWC Contribution, DCPS (Defined Contributory Pension Scheme), Group Savings Linked Insurance, and any pending advances/recoveries.
                Vigilance clearance is mandatory before final disbursement. Finance team approval is required for corrections. All entries are recorded in the Digital Service Book.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Pending Settlements", value: "1", sub: "In progress" },
                { label: "Completed (FY)", value: "8", sub: "Apr 2025 – Feb 2026" },
                { label: "Total Paid Out (FY)", value: "₹2.84 Cr", sub: "Gratuity + Leave + PF" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <p className="text-xs text-gray-400">{k.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{k.value}</p>
                  <p className="text-xs text-gray-400">{k.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">Final Settlement Register</h3>
                <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                  <Plus className="w-3.5 h-3.5" />New Settlement
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Emp ID", "Name", "Type", "Effective Date", "Gratuity", "Leave Enc.", "PF/CPF", "DCPS", "Group Ins.", "Vigilance", "Status", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {finalSettlements.map(s => (
                    <tr key={s.empId} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-medium text-blue-600">{s.empId}</td>
                      <td className="py-3 px-3 text-xs font-medium text-gray-900">{s.name}</td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          s.type === "Retirement" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
                        }`}>{s.type}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-500">{s.date}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">{s.gratuity > 0 ? `₹${s.gratuity.toLocaleString()}` : "—"}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{s.leaveEnc.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{s.pf.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{s.dcps.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">{s.groupIns > 0 ? `₹${s.groupIns.toLocaleString()}` : "—"}</td>
                      <td className="py-3 px-3">
                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">{s.vigilance}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          s.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>{s.status}</span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex gap-1">
                          <button className="text-xs px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50 font-medium transition-colors">Review</button>
                          <button className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 flex items-center gap-1 transition-colors"><Download className="w-3 h-3" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ════════════════════════════
            BUDGETARY PROVISIONS
        ════════════════════════════ */}
        {tab === "budgetary" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Budgetary Provisions</strong> are calculated every 6 months for expected employee retirement payouts —
                Earned Leave Encashments, HBA Advances, PLI, Gratuity, DCPS, and Group Insurance — based on MSWC Service Rules and the expected retirement list.
                These figures are shared with the Finance module for budget allocation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Total Budget (FY 25-26)", value: "₹10.13 Cr", sub: "All provisions combined" },
                { label: "Utilized so far", value: "₹5.08 Cr", sub: "50.1% of budget" },
                { label: "Retirees This FY", value: "12", sub: "Expected separations" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <p className="text-xs text-gray-400">{k.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{k.value}</p>
                  <p className="text-xs text-gray-400">{k.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">Budgetary Provision Details — FY 2025-26</h3>
                <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all">
                  <RefreshCw className="w-3 h-3" />Recalculate (6-monthly)
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Provision Item", "Budgeted Amount", "Utilized", "Balance", "% Used", "Expected Retirees", "Period"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {budgetaryProvisions.map((b, i) => {
                    const pct = Math.round((b.utilized / b.provision) * 100);
                    return (
                      <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-3 text-xs font-semibold text-gray-900">{b.item}</td>
                        <td className="py-3 px-3 text-xs text-gray-700">₹{b.provision.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs text-gray-700">₹{b.utilized.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs font-semibold text-gray-900">₹{b.balance.toLocaleString()}</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-100 rounded-full h-1.5">
                              <div className="h-1.5 rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-xs text-gray-600">{pct}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-500">{b.retirees}</td>
                        <td className="py-3 px-3 text-xs text-gray-500">{b.period}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ════════════════════════════
          MODALS
      ════════════════════════════ */}

      {/* Process Confirm Modal */}
      {modal === "processConfirm" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Confirm Payroll Processing</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-5">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-yellow-800">
                  <p className="font-semibold mb-1">Review before processing</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>{pendingCerts} duty certificates still pending</li>
                    <li>2 arrear cases awaiting Finance approval</li>
                    <li>Finance HOD approval not yet received</li>
                    <li>Bank file not yet generated</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2 mb-5">
              {[["Period", monthLabel], ["Total Employees", "2,789"], ["Gross Salary", "₹4.22 Cr"], ["Total Deductions", "₹65.2 L"], ["Net Payable", "₹3.56 Cr"]].map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 text-sm">
                  <span className="text-gray-400">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => { setPayrollLocked(true); setModal(null); setTab("process"); }}
                className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">
                Confirm & Process
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payslip Modal */}
      {modal === "payslip" && selectedEmp && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Payslip — {monthLabel}</h3>
                <p className="text-xs text-gray-400">Maharashtra State Warehousing Corporation</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Printer className="w-4 h-4 text-gray-600" /></button>
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Download className="w-4 h-4 text-gray-600" /></button>
                <button onClick={() => setModal(null)} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><X className="w-4 h-4 text-gray-600" /></button>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 grid grid-cols-2 gap-2 text-xs">
              {[
                ["Employee ID", selectedEmp.empId],
                ["Name", selectedEmp.name],
                ["Department", selectedEmp.dept],
                ["Designation", selectedEmp.designation],
                ["Category", selectedEmp.category],
                ["Pay Scale", selectedEmp.payScale],
                ["Bank A/C", selectedEmp.bank],
                ["Duty Certificate", selectedEmp.cert],
              ].map(([k, v]) => (
                <div key={k}><span className="text-gray-400">{k}:</span> <span className={`font-semibold ml-1 ${k === "Duty Certificate" && v === "Pending" ? "text-orange-600" : "text-gray-900"}`}>{v}</span></div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">Earnings</p>
                <div className="space-y-1.5">
                  {[["Basic Pay", selectedEmp.basic], ["DA", selectedEmp.da], ["HRA", selectedEmp.hra], ["TA", selectedEmp.ta], ["Special Allow.", selectedEmp.special]].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between text-xs">
                      <span className="text-gray-500">{k}</span>
                      <span className="text-gray-900">₹{Number(v).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs pt-2 border-t border-gray-200 font-bold">
                    <span>Gross Earnings</span>
                    <span className="text-gray-900">₹{selectedEmp.gross.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">Deductions</p>
                <div className="space-y-1.5">
                  {[["PF Employee (12%)", selectedEmp.pfEmp], ["Income Tax (TDS)", selectedEmp.tax], ["Prof. Tax", 200]].map(([k, v]) => (
                    <div key={String(k)} className="flex justify-between text-xs">
                      <span className="text-gray-500">{k}</span>
                      <span className="text-red-500">₹{Number(v).toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs pt-2 border-t border-gray-200 font-bold">
                    <span>Total Deductions</span>
                    <span className="text-red-600">₹{(selectedEmp.pfEmp + selectedEmp.tax + 200).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-4 flex justify-between items-center mb-4">
              <span className="text-white font-semibold">Net Salary Payable</span>
              <span className="text-white font-bold text-xl">₹{selectedEmp.net.toLocaleString()}</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500"><strong>PF Employer Contribution (12%):</strong> ₹{selectedEmp.pfEmp.toLocaleString()} (not deducted from salary, paid by MSWC) · <strong>Total PF Trust contribution:</strong> ₹{(selectedEmp.pfEmp * 2).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      {/* New Payroll Modal */}
      {modal === "newPayroll" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900">Create New Payroll Run</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Payroll Month", type: "select", opts: MONTHS.map(m => m.label) },
                { label: "Salary Cycle Start", type: "date" },
                { label: "Salary Cycle End", type: "date" },
                { label: "Duty Certificate Cutoff", type: "date" },
                { label: "Finance Approval Deadline", type: "date" },
                { label: "Remarks", type: "text" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{f.label}</label>
                  {f.type === "select"
                    ? <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">{f.opts?.map(o => <option key={o}>{o}</option>)}</select>
                    : <input type={f.type} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  }
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Create Payroll</button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Upload Modal */}
      {modal === "bulkUpload" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Bulk Data Upload</h3>
                <p className="text-xs text-gray-400 mt-0.5">Upload CSV/XLSX for mass data changes as per MSWC requirements</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <p className="text-xs text-gray-500 mb-3">Select the type of data to upload:</p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {bulkUploadTypes.map(t => (
                <div key={t.label} className="border border-gray-200 rounded-xl p-3 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all">
                  <p className="text-sm font-semibold text-gray-900">{t.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center mb-4">
              <Download className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Drop your CSV or XLSX file here</p>
              <p className="text-xs text-gray-400 mt-1">or <span className="text-blue-600 underline cursor-pointer">browse to upload</span></p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Upload & Process</button>
            </div>
          </div>
        </div>
      )}

      {/* New Advance Modal */}
      {modal === "newAdvance" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900">New Advance Request</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              {[
                { label: "Employee ID", type: "text" },
                { label: "Advance Type", type: "select", opts: ["Computer Advance", "Festival Advance", "PLI Advance", "House Building Advance", "TA Bill Advance"] },
                { label: "Sanctioned Amount (₹)", type: "number" },
                { label: "Monthly EMI (₹)", type: "number" },
                { label: "Sanction Date", type: "date" },
                { label: "Supporting Documents", type: "file" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{f.label}</label>
                  {f.type === "select"
                    ? <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">{f.opts?.map(o => <option key={o}>{o}</option>)}</select>
                    : <input type={f.type} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  }
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Submit for Approval</button>
            </div>
          </div>
        </div>
      )}

      {/* New Leave Encashment Modal */}
      {modal === "newEncashment" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900">New Leave Encashment Request</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4">
              <p className="text-xs text-blue-800">Eligibility: EL balance must be above 60 days. Min 16 days, max 30 days encashable. Once per calendar year only.</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Employee ID", type: "text" },
                { label: "EL Balance (days)", type: "number" },
                { label: "Days to Encash (16–30)", type: "number" },
                { label: "Basic + DA (as on date of application)", type: "number" },
                { label: "Application Date", type: "date" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{f.label}</label>
                  <input type={f.type} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Submit Request</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}