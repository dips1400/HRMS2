// import { FileText, Download } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

// const reports = [
//   {
//     category: "Employee Reports",
//     items: [
//       { name: "Employee Master Register", desc: "Complete employee details with service information" },
//       { name: "Category-wise Employee Distribution", desc: "General/OBC/SC/ST breakdown" },
//       { name: "Department-wise Employee List", desc: "Employees grouped by department" },
//       { name: "Seniority List", desc: "Designation-wise seniority register" },
//       { name: "Digital Service Book Export", desc: "Complete service history of all employees" },
//     ],
//   },
//   {
//     category: "Leave Reports",
//     items: [
//       { name: "Leave Balance Report", desc: "CL/EL/HPL balance for all employees" },
//       { name: "Leave Availed Report", desc: "Monthly/yearly leave utilization" },
//       { name: "Leave Encashment Due Report", desc: "Employees eligible for leave encashment" },
//       { name: "Leave Application Register", desc: "All leave applications with status" },
//     ],
//   },
//   {
//     category: "Payroll Reports",
//     items: [
//       { name: "Monthly Salary Register", desc: "Complete salary details for the month" },
//       { name: "Bank Transfer Report", desc: "NEFT/RTGS file for salary credit" },
//       { name: "PF Statement (Form 12A)", desc: "Monthly PF contribution report" },
//       { name: "TDS Report (Form 24Q)", desc: "Quarterly TDS deduction report" },
//       { name: "Professional Tax Report", desc: "PT deduction and payment details" },
//       { name: "Salary Arrears Report", desc: "Promotion/DA/Pay revision arrears" },
//       { name: "Form 16 Generation", desc: "Annual TDS certificate for employees" },
//     ],
//   },
//   {
//     category: "PF Trust Reports",
//     items: [
//       { name: "PF Ledger Report", desc: "Individual PF account statements" },
//       { name: "Annual PF Statement", desc: "Yearly statement with interest calculation" },
//       { name: "PF Advance Register", desc: "All PF advances/loans issued" },
//       { name: "PF Withdrawal Register", desc: "Partial and final PF settlements" },
//       { name: "Interest Calculation Report", desc: "FY-wise interest computation" },
//     ],
//   },
//   {
//     category: "Promotion & Increment",
//     items: [
//       { name: "Promotion Due List", desc: "Employees eligible for promotion" },
//       { name: "DPC Review Register", desc: "Promotion committee recommendations" },
//       { name: "Increment Due Report", desc: "Annual increment processing list" },
//       { name: "Time-bound Promotion Report", desc: "10/20/30 year service completions" },
//     ],
//   },
//   {
//     category: "Recruitment Reports",
//     items: [
//       { name: "Vacancy Position Report", desc: "Sanctioned vs filled positions" },
//       { name: "Roster Compliance Report", desc: "Reservation compliance status" },
//       { name: "Recruitment Cycle Register", desc: "All recruitment cycles with status" },
//       { name: "Candidate Merit List", desc: "Selected candidates with ranks" },
//     ],
//   },
//   {
//     category: "Retirement Reports",
//     items: [
//       { name: "6-Month Alert Report", desc: "Employees retiring in next 6 months" },
//       { name: "Retirement Settlement Register", desc: "Final settlement calculations" },
//       { name: "Gratuity Calculation Report", desc: "Gratuity amounts for retiring staff" },
//       { name: "Pension Processing Report", desc: "Pension papers status" },
//     ],
//   },
//   {
//     category: "Compliance & Audit",
//     items: [
//       { name: "Audit Trail Log", desc: "All system activities and changes" },
//       { name: "Duty Certificate Register", desc: "Monthly duty certificate submission status" },
//       { name: "Budget Utilization Report", desc: "Salary budget vs actual spending" },
//       { name: "Statutory Compliance Report", desc: "PF/TDS/PT compliance summary" },
//     ],
//   },
// ];

// export default function Reports() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
//           <p className="text-gray-500 mt-1">Comprehensive Reporting System</p>
//         </div>
//         <div className="flex gap-2">
//           <Select defaultValue="feb2026">
//             <SelectTrigger className="w-40">
//               <SelectValue placeholder="Select Period" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="feb2026">February 2026</SelectItem>
//               <SelectItem value="jan2026">January 2026</SelectItem>
//               <SelectItem value="dec2025">December 2025</SelectItem>
//               <SelectItem value="fy2025">FY 2025-26</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="space-y-6">
//         {reports.map((category, index) => (
//           <Card key={index}>
//             <CardHeader>
//               <CardTitle>{category.category}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {category.items.map((report, rIndex) => (
//                   <div
//                     key={rIndex}
//                     className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-gray-900 text-sm">{report.name}</h4>
//                         <p className="text-xs text-gray-600 mt-1">{report.desc}</p>
//                       </div>
//                       <Button variant="ghost" size="sm" className="ml-2">
//                         <Download className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Export Options</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex gap-4">
//             <Button variant="outline" className="flex items-center gap-2">
//               <FileText className="w-4 h-4" />
//               Export to PDF
//             </Button>
//             <Button variant="outline" className="flex items-center gap-2">
//               <FileText className="w-4 h-4" />
//               Export to Excel
//             </Button>
//             <Button variant="outline" className="flex items-center gap-2">
//               <FileText className="w-4 h-4" />
//               Export to CSV
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// ============================================================================================


// import { useState } from "react";
// import {
//   FileText, Download, Search, ChevronDown, ChevronRight,
//   Users, Calendar, DollarSign, TrendingUp, Shield, UserPlus,
//   Clock, BarChart2, X, CheckCircle, Eye
// } from "lucide-react";

// const PERIOD_OPTIONS = [
//   { value: "feb2026", label: "February 2026" },
//   { value: "jan2026", label: "January 2026" },
//   { value: "dec2025", label: "December 2025" },
//   { value: "fy2025", label: "FY 2025-26" },
// ];

// const FORMAT_OPTIONS = ["PDF", "Excel", "CSV"];

// const colorMap = {
//   blue:    { bg: "bg-blue-50",    border: "border-blue-400",    icon: "bg-blue-500",    text: "text-blue-700",    badge: "bg-blue-100 text-blue-700",    btn: "#3b82f6" },
//   indigo:  { bg: "bg-indigo-50",  border: "border-indigo-400",  icon: "bg-indigo-500",  text: "text-indigo-700",  badge: "bg-indigo-100 text-indigo-700",  btn: "#6366f1" },
//   emerald: { bg: "bg-emerald-50", border: "border-emerald-400", icon: "bg-emerald-500", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", btn: "#10b981" },
//   violet:  { bg: "bg-violet-50",  border: "border-violet-400",  icon: "bg-violet-500",  text: "text-violet-700",  badge: "bg-violet-100 text-violet-700",  btn: "#8b5cf6" },
//   orange:  { bg: "bg-orange-50",  border: "border-orange-400",  icon: "bg-orange-500",  text: "text-orange-700",  badge: "bg-orange-100 text-orange-700",  btn: "#f97316" },
//   cyan:    { bg: "bg-cyan-50",    border: "border-cyan-400",    icon: "bg-cyan-500",    text: "text-cyan-700",    badge: "bg-cyan-100 text-cyan-700",    btn: "#06b6d4" },
//   red:     { bg: "bg-red-50",     border: "border-red-400",     icon: "bg-red-500",     text: "text-red-700",     badge: "bg-red-100 text-red-700",     btn: "#ef4444" },
//   slate:   { bg: "bg-slate-50",   border: "border-slate-400",   icon: "bg-slate-600",   text: "text-slate-700",   badge: "bg-slate-100 text-slate-700",   btn: "#475569" },
// };

// type ColorKey = keyof typeof colorMap;

// const reports: {
//   category: string;
//   icon: React.ElementType;
//   color: ColorKey;
//   summary: { total: number; generated: number; pending: number };
//   description: string;
//   stats: { label: string; value: string }[];
//   items: { name: string; desc: string; count: string }[];
// }[] = [
//   {
//     category: "Employee Reports", icon: Users, color: "blue",
//     summary: { total: 32, generated: 28, pending: 4 },
//     description: "Master records, category distribution, department lists, seniority registers and digital service books.",
//     stats: [{ label: "Total Employees", value: "2,847" }, { label: "Departments", value: "12" }, { label: "New This FY", value: "143" }],
//     items: [
//       { name: "Employee Master Register", desc: "Complete employee details with service information", count: "2,847 records" },
//       { name: "Category-wise Distribution", desc: "General/OBC/SC/ST breakdown", count: "4 categories" },
//       { name: "Department-wise Employee List", desc: "Employees grouped by department", count: "12 departments" },
//       { name: "Seniority List", desc: "Designation-wise seniority register", count: "18 designations" },
//       { name: "Digital Service Book Export", desc: "Complete service history of all employees", count: "2,789 active" },
//     ],
//   },
//   {
//     category: "Leave Reports", icon: Calendar, color: "indigo",
//     summary: { total: 18, generated: 15, pending: 3 },
//     description: "Leave balances, availed records, encashment eligibility, and complete application registers.",
//     stats: [{ label: "On Leave Today", value: "87" }, { label: "Pending Approvals", value: "23" }, { label: "Encashment Due", value: "56" }],
//     items: [
//       { name: "Leave Balance Report", desc: "CL/EL/HPL balance for all employees", count: "2,847 employees" },
//       { name: "Leave Availed Report", desc: "Monthly/yearly leave utilization", count: "847 this month" },
//       { name: "Leave Encashment Due", desc: "Employees eligible for leave encashment", count: "56 eligible" },
//       { name: "Leave Application Register", desc: "All leave applications with status", count: "234 applications" },
//     ],
//   },
//   {
//     category: "Payroll Reports", icon: DollarSign, color: "emerald",
//     summary: { total: 45, generated: 42, pending: 3 },
//     description: "Monthly salary registers, bank transfer files, PF, TDS, professional tax, arrears and Form 16.",
//     stats: [{ label: "Monthly Payroll", value: "₹4.2 Cr" }, { label: "TDS Deducted", value: "₹18.4 L" }, { label: "PF Contribution", value: "₹32.1 L" }],
//     items: [
//       { name: "Monthly Salary Register", desc: "Complete salary details for the month", count: "2,789 employees" },
//       { name: "Bank Transfer Report", desc: "NEFT/RTGS file for salary credit", count: "2,789 transfers" },
//       { name: "PF Statement (Form 12A)", desc: "Monthly PF contribution report", count: "₹32.1 L" },
//       { name: "TDS Report (Form 24Q)", desc: "Quarterly TDS deduction report", count: "Q3 2025-26" },
//       { name: "Professional Tax Report", desc: "PT deduction and payment details", count: "2,347 employees" },
//       { name: "Salary Arrears Report", desc: "Promotion/DA/Pay revision arrears", count: "156 cases" },
//       { name: "Form 16 Generation", desc: "Annual TDS certificate for employees", count: "2,789 certificates" },
//     ],
//   },
//   {
//     category: "PF Trust Reports", icon: Shield, color: "violet",
//     summary: { total: 22, generated: 20, pending: 2 },
//     description: "PF ledgers, annual statements with interest, advance registers, withdrawals and FY-wise interest computation.",
//     stats: [{ label: "PF Corpus", value: "₹84 Cr" }, { label: "Active Members", value: "2,634" }, { label: "Advances Pending", value: "12" }],
//     items: [
//       { name: "PF Ledger Report", desc: "Individual PF account statements", count: "2,634 members" },
//       { name: "Annual PF Statement", desc: "Yearly statement with interest calculation", count: "FY 2025-26" },
//       { name: "PF Advance Register", desc: "All PF advances/loans issued", count: "67 advances" },
//       { name: "PF Withdrawal Register", desc: "Partial and final PF settlements", count: "34 settlements" },
//       { name: "Interest Calculation Report", desc: "FY-wise interest computation", count: "8.15% p.a." },
//     ],
//   },
//   {
//     category: "Promotion & Increment", icon: TrendingUp, color: "orange",
//     summary: { total: 14, generated: 10, pending: 4 },
//     description: "Promotion due lists, DPC registers, annual increment processing and time-bound promotion tracking.",
//     stats: [{ label: "Promotions Due", value: "34" }, { label: "Increments Due", value: "156" }, { label: "Time-bound Due", value: "28" }],
//     items: [
//       { name: "Promotion Due List", desc: "Employees eligible for promotion", count: "34 employees" },
//       { name: "DPC Review Register", desc: "Promotion committee recommendations", count: "12 pending" },
//       { name: "Increment Due Report", desc: "Annual increment processing list", count: "156 employees" },
//       { name: "Time-bound Promotion Report", desc: "10/20/30 year service completions", count: "28 employees" },
//     ],
//   },
//   {
//     category: "Recruitment Reports", icon: UserPlus, color: "cyan",
//     summary: { total: 12, generated: 9, pending: 3 },
//     description: "Vacancy positions, reservation roster compliance, recruitment cycles and candidate merit lists.",
//     stats: [{ label: "Vacancies", value: "89" }, { label: "Active Cycles", value: "4" }, { label: "Candidates", value: "1,247" }],
//     items: [
//       { name: "Vacancy Position Report", desc: "Sanctioned vs filled positions", count: "89 vacancies" },
//       { name: "Roster Compliance Report", desc: "Reservation compliance status", count: "4 categories" },
//       { name: "Recruitment Cycle Register", desc: "All recruitment cycles with status", count: "4 active" },
//       { name: "Candidate Merit List", desc: "Selected candidates with ranks", count: "67 selected" },
//     ],
//   },
//   {
//     category: "Retirement Reports", icon: Clock, color: "red",
//     summary: { total: 10, generated: 8, pending: 2 },
//     description: "6-month retirement alerts, final settlement calculations, gratuity amounts and pension processing.",
//     stats: [{ label: "Retiring (6mo)", value: "12" }, { label: "Gratuity Due", value: "₹2.4 Cr" }, { label: "Pension Files", value: "8" }],
//     items: [
//       { name: "6-Month Alert Report", desc: "Employees retiring in next 6 months", count: "12 employees" },
//       { name: "Retirement Settlement Register", desc: "Final settlement calculations", count: "8 in process" },
//       { name: "Gratuity Calculation Report", desc: "Gratuity amounts for retiring staff", count: "₹2.4 Cr total" },
//       { name: "Pension Processing Report", desc: "Pension papers status", count: "8 files" },
//     ],
//   },
//   {
//     category: "Compliance & Audit", icon: BarChart2, color: "slate",
//     summary: { total: 16, generated: 14, pending: 2 },
//     description: "Audit trail logs, duty certificate registers, budget utilization and statutory compliance summaries.",
//     stats: [{ label: "Audit Logs", value: "4,892" }, { label: "Compliance %", value: "96.4%" }, { label: "Budget Used", value: "68%" }],
//     items: [
//       { name: "Audit Trail Log", desc: "All system activities and changes", count: "4,892 entries" },
//       { name: "Duty Certificate Register", desc: "Monthly duty certificate submission status", count: "2,789 pending" },
//       { name: "Budget Utilization Report", desc: "Salary budget vs actual spending", count: "68% utilized" },
//       { name: "Statutory Compliance Report", desc: "PF/TDS/PT compliance summary", count: "96.4% compliant" },
//     ],
//   },
// ];

// export default function Reports() {
//   const [period, setPeriod] = useState("feb2026");
//   const [format, setFormat] = useState("PDF");
//   const [search, setSearch] = useState("");
//   const [expanded, setExpanded] = useState<Record<string, boolean>>(
//     Object.fromEntries(reports.map(r => [r.category, true]))
//   );
//   const [hoveredReport, setHoveredReport] = useState<string | null>(null);
//   const [downloaded, setDownloaded] = useState<Record<string, boolean>>({});
//   const [activeCategory, setActiveCategory] = useState("All");

//   const periodLabel = PERIOD_OPTIONS.find(p => p.value === period)?.label ?? "";

//   const toggleExpand = (cat: string) =>
//     setExpanded(e => ({ ...e, [cat]: !e[cat] }));

//   const handleDownload = (key: string) => {
//     setDownloaded(d => ({ ...d, [key]: true }));
//     setTimeout(() => setDownloaded(d => ({ ...d, [key]: false })), 2000);
//   };

//   const categories = ["All", ...reports.map(r => r.category)];

//   const filtered = reports
//     .filter(r => activeCategory === "All" || r.category === activeCategory)
//     .map(r => ({
//       ...r,
//       items: r.items.filter(
//         i => !search ||
//           i.name.toLowerCase().includes(search.toLowerCase()) ||
//           i.desc.toLowerCase().includes(search.toLowerCase())
//       ),
//     }))
//     .filter(r => r.items.length > 0);

//   const totalReports = reports.reduce((s, r) => s + r.items.length, 0);
//   const totalGenerated = reports.reduce((s, r) => s + r.summary.generated, 0);
//   const totalPending = reports.reduce((s, r) => s + r.summary.pending, 0);

//   return (
//     <div className="bg-gray-50 min-h-screen p-6 space-y-6" style={{ fontFamily: "system-ui, sans-serif" }}>

//       {/* ── Header ── */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
//           <p className="text-sm text-gray-500 mt-0.5">
//             Maharashtra State Warehousing Corporation HRMS · {periodLabel}
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <select
//             value={period}
//             onChange={e => setPeriod(e.target.value)}
//             className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {PERIOD_OPTIONS.map(o => (
//               <option key={o.value} value={o.value}>{o.label}</option>
//             ))}
//           </select>
//           <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
//             {FORMAT_OPTIONS.map(f => (
//               <button
//                 key={f}
//                 onClick={() => setFormat(f)}
//                 className={`px-3 py-2 text-sm font-medium transition-colors ${
//                   format === f ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Summary Cards ── */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//         {[
//           { label: "Total Report Types",    value: totalReports,   icon: FileText,     color: "bg-blue-500" },
//           { label: "Categories",            value: reports.length, icon: BarChart2,    color: "bg-indigo-500" },
//           { label: "Generated This Period", value: totalGenerated, icon: CheckCircle,  color: "bg-emerald-500" },
//           { label: "Pending Generation",    value: totalPending,   icon: Clock,        color: "bg-orange-500" },
//         ].map(s => (
//           <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center gap-3">
//             <div className={`${s.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
//               <s.icon className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <p className="text-xl font-bold text-gray-900">{s.value}</p>
//               <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── Search Bar ── */}
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//         <input
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           placeholder="Search reports by name or description..."
//           className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         {search && (
//           <button
//             onClick={() => setSearch("")}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         )}
//       </div>

//       {/* ── Category Filter Pills ── */}
//       <div className="flex gap-2 flex-wrap">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
//               activeCategory === cat
//                 ? "bg-blue-600 text-white border-blue-600 shadow-sm"
//                 : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
//             }`}
//           >
//             {cat === "All" ? "All Categories" : cat}
//           </button>
//         ))}
//       </div>

//       {/* ── Report Sections ── */}
//       <div className="space-y-3">
//         {filtered.map(cat => {
//           const C = colorMap[cat.color];
//           const Icon = cat.icon;
//           const isOpen = expanded[cat.category] ?? true;

//           return (
//             <div
//               key={cat.category}
//               className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
//             >
//               {/* Section Header — clickable */}
//               <button
//                 onClick={() => toggleExpand(cat.category)}
//                 className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
//               >
//                 {/* Icon */}
//                 <div className={`${C.icon} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0`}>
//                   <Icon className="w-4 h-4 text-white" />
//                 </div>

//                 {/* Title + desc */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 flex-wrap">
//                     <h3 className="font-semibold text-gray-900 text-sm">{cat.category}</h3>
//                     <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${C.badge}`}>
//                       {cat.items.length} reports
//                     </span>
//                     {cat.summary.pending > 0 && (
//                       <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-orange-100 text-orange-700">
//                         {cat.summary.pending} pending
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-xs text-gray-400 mt-0.5 truncate">{cat.description}</p>
//                 </div>

//                 {/* Stats (desktop) */}
//                 <div className="hidden lg:flex items-center gap-6 mr-4">
//                   {cat.stats.map(s => (
//                     <div key={s.label} className="text-center">
//                       <p className={`text-sm font-bold ${C.text}`}>{s.value}</p>
//                       <p className="text-xs text-gray-400 whitespace-nowrap">{s.label}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Chevron */}
//                 <div className="flex-shrink-0 text-gray-400">
//                   {isOpen
//                     ? <ChevronDown className="w-4 h-4" />
//                     : <ChevronRight className="w-4 h-4" />}
//                 </div>
//               </button>

//               {/* Expanded content */}
//               {isOpen && (
//                 <div className={`border-t border-gray-100 ${C.bg} p-4`}>

//                   {/* Mobile stats */}
//                   <div className="lg:hidden grid grid-cols-3 gap-2 mb-4">
//                     {cat.stats.map(s => (
//                       <div key={s.label} className="bg-white rounded-lg p-2 text-center border border-gray-100">
//                         <p className={`text-sm font-bold ${C.text}`}>{s.value}</p>
//                         <p className="text-xs text-gray-400">{s.label}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Report cards grid */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
//                     {cat.items.map((report, i) => {
//                       const key = `${cat.category}__${i}`;
//                       const isHovered = hoveredReport === key;
//                       const isDone = downloaded[key];

//                       return (
//                         <div
//                           key={key}
//                           onMouseEnter={() => setHoveredReport(key)}
//                           onMouseLeave={() => setHoveredReport(null)}
//                           className={`bg-white rounded-lg border-2 p-4 transition-all duration-150 ${
//                             isHovered
//                               ? `${C.border} shadow-lg -translate-y-0.5`
//                               : "border-transparent shadow-sm"
//                           }`}
//                           style={{ outline: isHovered ? "none" : undefined }}
//                         >
//                           <div className="flex items-start gap-3">
//                             {/* Left: text */}
//                             <div className="flex-1 min-w-0">
//                               <p className="text-sm font-semibold text-gray-900 leading-snug">
//                                 {report.name}
//                               </p>
//                               <p className="text-xs text-gray-500 mt-1 leading-relaxed">
//                                 {report.desc}
//                               </p>
//                               <div className="mt-2 flex items-center gap-2 flex-wrap">
//                                 <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${C.badge}`}>
//                                   {report.count}
//                                 </span>
//                                 <span className="text-xs text-gray-400">{periodLabel}</span>
//                               </div>
//                             </div>

//                             {/* Right: actions — always visible, more prominent on hover */}
//                             <div className="flex flex-col gap-1.5 flex-shrink-0">
//                               <button
//                                 onClick={() => handleDownload(key)}
//                                 style={{ backgroundColor: isDone ? "#10b981" : C.btn }}
//                                 className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-white transition-all hover:opacity-90 whitespace-nowrap"
//                               >
//                                 {isDone ? (
//                                   <><CheckCircle className="w-3 h-3" />Done</>
//                                 ) : (
//                                   <><Download className="w-3 h-3" />{format}</>
//                                 )}
//                               </button>
//                               <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all whitespace-nowrap">
//                                 <Eye className="w-3 h-3" />View
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   {/* Footer row */}
//                   <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
//                     <p className="text-xs text-gray-500">
//                       <span className="font-semibold text-gray-700">{cat.summary.generated}</span>
//                       {" "}of{" "}
//                       <span className="font-semibold text-gray-700">{cat.summary.generated + cat.summary.pending}</span>
//                       {" "}generated for {periodLabel}
//                     </p>
//                     <button
//                       onClick={() => cat.items.forEach((_, i) => handleDownload(`${cat.category}__${i}`))}
//                       style={{ backgroundColor: C.btn }}
//                       className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-white hover:opacity-90 transition-all"
//                     >
//                       <Download className="w-3 h-3" />
//                       Download All ({format})
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* ── Bulk Export Footer ── */}
//       <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <div>
//             <h3 className="font-semibold text-gray-900 text-sm">Bulk Export</h3>
//             <p className="text-xs text-gray-500 mt-0.5">
//               Download all {totalReports} report types for {periodLabel}
//             </p>
//           </div>
//           <div className="flex gap-2 flex-wrap">
//             {FORMAT_OPTIONS.map(f => (
//               <button
//                 key={f}
//                 className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
//               >
//                 <FileText className="w-3.5 h-3.5" />
//                 Export All as {f}
//               </button>
//             ))}
//             <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
//               <Download className="w-3.5 h-3.5" />
//               Full Package ZIP
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── Empty state ── */}
//       {filtered.length === 0 && (
//         <div className="text-center py-16 text-gray-400">
//           <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
//           <p className="font-medium text-gray-600">No reports found</p>
//           <p className="text-sm mt-1">Try adjusting your search or category filter</p>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router";
import {
  FileText, Download, Search, ChevronDown, ChevronRight,
  Users, Calendar, DollarSign, TrendingUp, Shield, UserPlus,
  Clock, BarChart2, X, CheckCircle, Eye,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

const PERIOD_OPTIONS = [
  { value: "feb2026", label: "February 2026" },
  { value: "jan2026", label: "January 2026" },
  { value: "dec2025", label: "December 2025" },
  { value: "fy2025",  label: "FY 2025-26"    },
];

const FORMAT_OPTIONS = ["PDF", "Excel", "CSV"];

// Employee report items that have a view page
const EMPLOYEE_VIEWABLE_REPORTS = [
  "Employee Master Register",
  "Category-wise Distribution",
  "Department-wise Employee List",
  "Seniority List",
  "Digital Service Book Export",
];

const colorMap = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-400",    icon: "bg-blue-600",    text: "text-blue-700",    badge: "bg-blue-100 text-blue-700",    btn: "#2563eb" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-400",  icon: "bg-indigo-600",  text: "text-indigo-700",  badge: "bg-indigo-100 text-indigo-700",  btn: "#4f46e5" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-400", icon: "bg-emerald-600", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", btn: "#059669" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-400",  icon: "bg-violet-600",  text: "text-violet-700",  badge: "bg-violet-100 text-violet-700",  btn: "#7c3aed" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-400",  icon: "bg-orange-500",  text: "text-orange-700",  badge: "bg-orange-100 text-orange-700",  btn: "#ea580c" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-400",    icon: "bg-cyan-600",    text: "text-cyan-700",    badge: "bg-cyan-100 text-cyan-700",    btn: "#0891b2" },
  red:     { bg: "bg-red-50",     border: "border-red-400",     icon: "bg-red-600",     text: "text-red-700",     badge: "bg-red-100 text-red-700",     btn: "#dc2626" },
  slate:   { bg: "bg-slate-50",   border: "border-slate-400",   icon: "bg-slate-600",   text: "text-slate-700",   badge: "bg-slate-100 text-slate-700",   btn: "#475569" },
};

type ColorKey = keyof typeof colorMap;

interface ReportItem {
  name: string;
  desc: string;
  count: string;
}

interface ReportCategory {
  category: string;
  icon: React.ElementType;
  color: ColorKey;
  summary: { total: number; generated: number; pending: number };
  description: string;
  stats: { label: string; value: string }[];
  items: ReportItem[];
}

const reports: ReportCategory[] = [
  {
    category: "Employee Reports", icon: Users, color: "blue",
    summary: { total: 32, generated: 28, pending: 4 },
    description: "Master records, category distribution, department lists, seniority registers and digital service books.",
    stats: [{ label: "Total Employees", value: "2,847" }, { label: "Departments", value: "12" }, { label: "New This FY", value: "143" }],
    items: [
      { name: "Employee Master Register",      desc: "Complete employee details with service information", count: "2,847 records"    },
      { name: "Category-wise Distribution",    desc: "General/OBC/SC/ST breakdown",                       count: "4 categories"     },
      { name: "Department-wise Employee List", desc: "Employees grouped by department",                   count: "12 departments"   },
      { name: "Seniority List",                desc: "Designation-wise seniority register",               count: "18 designations"  },
      { name: "Digital Service Book Export",   desc: "Complete service history of all employees",         count: "2,789 active"     },
    ],
  },
  {
    category: "Leave Reports", icon: Calendar, color: "indigo",
    summary: { total: 18, generated: 15, pending: 3 },
    description: "Leave balances, availed records, encashment eligibility, and complete application registers.",
    stats: [{ label: "On Leave Today", value: "87" }, { label: "Pending Approvals", value: "23" }, { label: "Encashment Due", value: "56" }],
    items: [
      { name: "Leave Balance Report",       desc: "CL/EL/HPL balance for all employees",  count: "2,847 employees"  },
      { name: "Leave Availed Report",       desc: "Monthly/yearly leave utilization",      count: "847 this month"   },
      { name: "Leave Encashment Due",       desc: "Employees eligible for encashment",     count: "56 eligible"      },
      { name: "Leave Application Register", desc: "All leave applications with status",    count: "234 applications" },
    ],
  },
  {
    category: "Payroll Reports", icon: DollarSign, color: "emerald",
    summary: { total: 45, generated: 42, pending: 3 },
    description: "Monthly salary registers, bank transfer files, PF, TDS, professional tax, arrears and Form 16.",
    stats: [{ label: "Monthly Payroll", value: "₹4.2 Cr" }, { label: "TDS Deducted", value: "₹18.4 L" }, { label: "PF Contribution", value: "₹32.1 L" }],
    items: [
      { name: "Monthly Salary Register",  desc: "Complete salary details for the month",  count: "2,789 employees"  },
      { name: "Bank Transfer Report",     desc: "NEFT/RTGS file for salary credit",       count: "2,789 transfers"  },
      { name: "PF Statement (Form 12A)",  desc: "Monthly PF contribution report",         count: "₹32.1 L"         },
      { name: "TDS Report (Form 24Q)",    desc: "Quarterly TDS deduction report",         count: "Q3 2025-26"       },
      { name: "Professional Tax Report",  desc: "PT deduction and payment details",       count: "2,347 employees"  },
      { name: "Salary Arrears Report",    desc: "Promotion/DA/Pay revision arrears",      count: "156 cases"        },
      { name: "Form 16 Generation",       desc: "Annual TDS certificate for employees",   count: "2,789 certs"      },
    ],
  },
  {
    category: "PF Trust Reports", icon: Shield, color: "violet",
    summary: { total: 22, generated: 20, pending: 2 },
    description: "PF ledgers, annual statements with interest, advance registers, withdrawals and interest computation.",
    stats: [{ label: "PF Corpus", value: "₹84 Cr" }, { label: "Active Members", value: "2,634" }, { label: "Advances Pending", value: "12" }],
    items: [
      { name: "PF Ledger Report",            desc: "Individual PF account statements",        count: "2,634 members"  },
      { name: "Annual PF Statement",          desc: "Yearly statement with interest",          count: "FY 2025-26"     },
      { name: "PF Advance Register",          desc: "All PF advances/loans issued",           count: "67 advances"    },
      { name: "PF Withdrawal Register",       desc: "Partial and final PF settlements",       count: "34 settlements" },
      { name: "Interest Calculation Report",  desc: "FY-wise interest computation",           count: "8.15% p.a."     },
    ],
  },
  {
    category: "Promotion & Increment", icon: TrendingUp, color: "orange",
    summary: { total: 14, generated: 10, pending: 4 },
    description: "Promotion due lists, DPC registers, annual increment processing and time-bound promotion tracking.",
    stats: [{ label: "Promotions Due", value: "34" }, { label: "Increments Due", value: "156" }, { label: "Time-bound Due", value: "28" }],
    items: [
      { name: "Promotion Due List",          desc: "Employees eligible for promotion",          count: "34 employees"  },
      { name: "DPC Review Register",         desc: "Promotion committee recommendations",       count: "12 pending"    },
      { name: "Increment Due Report",        desc: "Annual increment processing list",          count: "156 employees" },
      { name: "Time-bound Promotion Report", desc: "10/20/30 year service completions",         count: "28 employees"  },
    ],
  },
  {
    category: "Recruitment Reports", icon: UserPlus, color: "cyan",
    summary: { total: 12, generated: 9, pending: 3 },
    description: "Vacancy positions, reservation roster compliance, recruitment cycles and candidate merit lists.",
    stats: [{ label: "Vacancies", value: "89" }, { label: "Active Cycles", value: "4" }, { label: "Candidates", value: "1,247" }],
    items: [
      { name: "Vacancy Position Report",     desc: "Sanctioned vs filled positions",  count: "89 vacancies"   },
      { name: "Roster Compliance Report",    desc: "Reservation compliance status",   count: "4 categories"   },
      { name: "Recruitment Cycle Register",  desc: "All recruitment cycles",          count: "4 active"       },
      { name: "Candidate Merit List",        desc: "Selected candidates with ranks",  count: "67 selected"    },
    ],
  },
  {
    category: "Retirement Reports", icon: Clock, color: "red",
    summary: { total: 10, generated: 8, pending: 2 },
    description: "6-month retirement alerts, final settlement calculations, gratuity amounts and pension processing.",
    stats: [{ label: "Retiring (6mo)", value: "12" }, { label: "Gratuity Due", value: "₹2.4 Cr" }, { label: "Pension Files", value: "8" }],
    items: [
      { name: "6-Month Alert Report",             desc: "Employees retiring in next 6 months",  count: "12 employees"    },
      { name: "Retirement Settlement Register",   desc: "Final settlement calculations",        count: "8 in process"    },
      { name: "Gratuity Calculation Report",      desc: "Gratuity amounts for retiring staff",  count: "₹2.4 Cr total"  },
      { name: "Pension Processing Report",        desc: "Pension papers status",               count: "8 files"         },
    ],
  },
  {
    category: "Compliance & Audit", icon: BarChart2, color: "slate",
    summary: { total: 16, generated: 14, pending: 2 },
    description: "Audit trail logs, duty certificate registers, budget utilization and statutory compliance summaries.",
    stats: [{ label: "Audit Logs", value: "4,892" }, { label: "Compliance %", value: "96.4%" }, { label: "Budget Used", value: "68%" }],
    items: [
      { name: "Audit Trail Log",            desc: "All system activities and changes",     count: "4,892 entries"    },
      { name: "Duty Certificate Register",  desc: "Monthly duty certificate status",      count: "2,789 pending"    },
      { name: "Budget Utilization Report",  desc: "Salary budget vs actual spending",     count: "68% utilized"     },
      { name: "Statutory Compliance Report",desc: "PF/TDS/PT compliance summary",        count: "96.4% compliant"  },
    ],
  },
];

// ─── Simple PDF for non-employee reports ─────────────────────────────────────

function downloadPlaceholderPDF(reportName: string, format: string, periodLabel: string) {
  if (format === "PDF") {
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`<!DOCTYPE html><html><head><title>${reportName}</title>
    <style>body{font-family:Arial,sans-serif;padding:40px;color:#111827;text-align:center;}
    @media print{button{display:none!important;}}</style></head><body>
    <h2 style="color:#1e3a5f;margin-bottom:8px;">${reportName}</h2>
    <p style="color:#6b7280;font-size:13px;">Maharashtra State Warehousing Corporation · ${periodLabel}</p>
    <hr style="margin:20px 0;border:0;border-top:2px solid #1e3a5f;"/>
    <p style="color:#6b7280;font-size:13px;margin-top:40px;">This report will contain data once connected to the live HRMS database.</p>
    <p style="color:#9ca3af;font-size:11px;margin-top:60px;">Generated: ${new Date().toLocaleDateString("en-IN")}</p>
    <button onclick="window.print()" style="margin-top:20px;padding:8px 20px;background:#1d4ed8;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button>
    </body></html>`);
    win.document.close();
  } else {
    // Simulate file download for CSV/Excel
    const csv = `Report Name,${reportName}\nPeriod,${periodLabel}\nGenerated,${new Date().toLocaleDateString("en-IN")}\n\nNote,Live data will populate this report from the HRMS database.`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reportName.replace(/\s+/g, "_")}_${format}.${format === "Excel" ? "xlsx" : "csv"}`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Reports() {
  const navigate = useNavigate();

  const [period, setPeriod]               = useState("feb2026");
  const [format, setFormat]               = useState("PDF");
  const [search, setSearch]               = useState("");
  const [expanded, setExpanded]           = useState<Record<string, boolean>>(
    Object.fromEntries(reports.map((r) => [r.category, true]))
  );
  const [hoveredReport, setHoveredReport] = useState<string | null>(null);
  const [downloaded, setDownloaded]       = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState("All");

  const periodLabel = PERIOD_OPTIONS.find((p) => p.value === period)?.label ?? "";

  const toggleExpand = (cat: string) =>
    setExpanded((e) => ({ ...e, [cat]: !e[cat] }));

  const handleDownload = (key: string, reportName: string, isEmployee: boolean) => {
    setDownloaded((d) => ({ ...d, [key]: true }));
    setTimeout(() => setDownloaded((d) => ({ ...d, [key]: false })), 2500);
    if (isEmployee) {
      // Open employee PDF via navigate + state or open new tab
      const win = window.open(`/reports/employee-view?report=${encodeURIComponent(reportName)}&download=1`, "_blank");
      if (!win) downloadPlaceholderPDF(reportName, format, periodLabel);
    } else {
      downloadPlaceholderPDF(reportName, format, periodLabel);
    }
  };

  const handleView = (reportName: string, isEmployee: boolean) => {
    if (isEmployee) {
      navigate(`/reports/employee-view?report=${encodeURIComponent(reportName)}`);
    } else {
      alert(`View for "${reportName}" — connect to live HRMS data to enable this report.`);
    }
  };

  const categories = ["All", ...reports.map((r) => r.category)];

  const filtered = reports
    .filter((r) => activeCategory === "All" || r.category === activeCategory)
    .map((r) => ({
      ...r,
      items: r.items.filter(
        (i) =>
          !search ||
          i.name.toLowerCase().includes(search.toLowerCase()) ||
          i.desc.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((r) => r.items.length > 0);

  const totalReports   = reports.reduce((s, r) => s + r.items.length, 0);
  const totalGenerated = reports.reduce((s, r) => s + r.summary.generated, 0);
  const totalPending   = reports.reduce((s, r) => s + r.summary.pending, 0);

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Maharashtra State Warehousing Corporation HRMS · {periodLabel}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {PERIOD_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
            {FORMAT_OPTIONS.map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${format === f ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Report Types",    value: totalReports,   icon: FileText,    color: "bg-blue-600"    },
          { label: "Categories",            value: reports.length, icon: BarChart2,   color: "bg-indigo-600"  },
          { label: "Generated This Period", value: totalGenerated, icon: CheckCircle, color: "bg-emerald-600" },
          { label: "Pending Generation",    value: totalPending,   icon: Clock,       color: "bg-orange-500"  },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center gap-3">
            <div className={`${s.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
              <s.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reports by name or description..."
          className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-sm bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              activeCategory === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {cat === "All" ? "All Categories" : cat}
          </button>
        ))}
      </div>

      {/* Report Sections */}
      <div className="space-y-3">
        {filtered.map((cat) => {
          const C    = colorMap[cat.color];
          const Icon = cat.icon;
          const isOpen = expanded[cat.category] ?? true;
          const isEmployeeCat = cat.category === "Employee Reports";

          return (
            <div key={cat.category} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

              {/* Section header */}
              <button
                onClick={() => toggleExpand(cat.category)}
                className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className={`${C.icon} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-sm">{cat.category}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${C.badge}`}>
                      {cat.items.length} reports
                    </span>
                    {cat.summary.pending > 0 && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-orange-100 text-orange-700">
                        {cat.summary.pending} pending
                      </span>
                    )}
                    {isEmployeeCat && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">
                        Interactive
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{cat.description}</p>
                </div>
                <div className="hidden lg:flex items-center gap-6 mr-4">
                  {cat.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className={`text-sm font-bold ${C.text}`}>{s.value}</p>
                      <p className="text-xs text-gray-400 whitespace-nowrap">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex-shrink-0 text-gray-400">
                  {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Expanded */}
              {isOpen && (
                <div className={`border-t border-gray-100 ${C.bg} p-4`}>

                  {/* Mobile stats */}
                  <div className="lg:hidden grid grid-cols-3 gap-2 mb-4">
                    {cat.stats.map((s) => (
                      <div key={s.label} className="bg-white rounded-lg p-2 text-center border border-gray-100">
                        <p className={`text-sm font-bold ${C.text}`}>{s.value}</p>
                        <p className="text-xs text-gray-400">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Employee category notice */}
                  {isEmployeeCat && (
                    <div className="mb-3 flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
                      <Users className="w-3.5 h-3.5 flex-shrink-0" />
                      Click <strong>View</strong> to open the interactive report with live data, search, filters and PDF export.
                    </div>
                  )}

                  {/* Report cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {cat.items.map((report, i) => {
                      const key = `${cat.category}__${i}`;
                      const isHovered = hoveredReport === key;
                      const isDone    = downloaded[key];
                      const canView   = EMPLOYEE_VIEWABLE_REPORTS.includes(report.name);

                      return (
                        <div
                          key={key}
                          onMouseEnter={() => setHoveredReport(key)}
                          onMouseLeave={() => setHoveredReport(null)}
                          className={`bg-white rounded-lg border-2 p-4 transition-all duration-150 ${
                            isHovered ? `${C.border} shadow-md -translate-y-0.5` : "border-transparent shadow-sm"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 leading-snug">{report.name}</p>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{report.desc}</p>
                              <div className="mt-2 flex items-center gap-2 flex-wrap">
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${C.badge}`}>
                                  {report.count}
                                </span>
                                <span className="text-xs text-gray-400">{periodLabel}</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1.5 flex-shrink-0">
                              <button
                                onClick={() => handleDownload(key, report.name, canView)}
                                style={{ backgroundColor: isDone ? "#059669" : C.btn }}
                                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-white transition-all hover:opacity-90 whitespace-nowrap"
                              >
                                {/* {isDone ? (
                                  <><CheckCircle className="w-3 h-3" />Done</>
                                ) : (
                                  <><Download className="w-3 h-3" />{format}</>
                                )} */}
                                <Eye className="w-3 h-3" />View
                              </button>
                              {/* <button
                                onClick={() => handleView(report.name, canView)}
                                className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                                  canView
                                    ? "border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
                                    : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                                }`}
                              >
                                <Eye className="w-3 h-3" />View
                              </button> */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-gray-700">{cat.summary.generated}</span>
                      {" "}of{" "}
                      <span className="font-semibold text-gray-700">{cat.summary.generated + cat.summary.pending}</span>
                      {" "}generated for {periodLabel}
                    </p>
                    <button
                      onClick={() => cat.items.forEach((item, i) => {
                        const key = `${cat.category}__${i}`;
                        handleDownload(key, item.name, isEmployeeCat && EMPLOYEE_VIEWABLE_REPORTS.includes(item.name));
                      })}
                      style={{ backgroundColor: C.btn }}
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg text-white hover:opacity-90 transition-all"
                    >
                      <Download className="w-3 h-3" />
                      Download All ({format})
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bulk Export */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Bulk Export</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Download all {totalReports} report types for {periodLabel}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {FORMAT_OPTIONS.map((f) => (
              <button
                key={f}
                onClick={() => downloadPlaceholderPDF(`All Reports`, f, periodLabel)}
                className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                Export All as {f}
              </button>
            ))}
            <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
              <Download className="w-3.5 h-3.5" />
              Full Package ZIP
            </button>
          </div>
        </div>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium text-gray-600">No reports found</p>
          <p className="text-sm mt-1">Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  );
}