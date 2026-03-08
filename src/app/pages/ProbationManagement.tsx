// import { Award, Clock } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";

// const probationEmployees = [
//   { empId: "EMP005", name: "Vijay Singh Rathore", designation: "Junior Clerk", doj: "2024-01-15", probationEnd: "2026-01-14", monthsCompleted: 13, elAvailed: 8, hplAvailed: 0, extensionDays: 0, acrStatus: "Pending", confirmationStatus: "Under Review" },
// ];

// export default function ProbationManagement() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Probation Management</h1>
//         <p className="text-gray-500 mt-1">2-Year Probation with Extension Logic & ACR Review</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">On Probation</p>
//             <p className="text-2xl font-bold text-blue-600 mt-1">67</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Due for Confirmation</p>
//             <p className="text-2xl font-bold text-orange-600 mt-1">12</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Confirmed This FY</p>
//             <p className="text-2xl font-bold text-green-600 mt-1">45</p>
//           </CardContent>
//         </Card>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Probation Rules</CardTitle>
//         </CardHeader>
//         <CardContent className="p-4 bg-blue-50 rounded-lg space-y-2 text-sm">
//           <p>• <strong>Probation Period:</strong> 2 years from date of joining</p>
//           <p>• <strong>Extension:</strong> EL + HPL availed beyond 30 days extends probation by equal days</p>
//           <p>• <strong>ACR Review:</strong> Mandatory confidential report review before confirmation</p>
//           <p>• <strong>Confirmation:</strong> Auto-generation of confirmation order upon successful completion</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Employees on Probation</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Designation</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">DOJ</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Probation End</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Completed</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">EL/HPL Availed</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Extension Days</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">ACR</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {probationEmployees.map((emp) => (
//                   <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <p className="text-sm font-medium text-gray-900">{emp.name}</p>
//                       <p className="text-xs text-gray-500">{emp.empId}</p>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-900">{emp.designation}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{emp.doj}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{emp.probationEnd}</td>
//                     <td className="py-3 px-4"><Badge variant="outline">{emp.monthsCompleted} months</Badge></td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{emp.elAvailed}/{emp.hplAvailed}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{emp.extensionDays} days</td>
//                     <td className="py-3 px-4">
//                       <Badge className="bg-yellow-100 text-yellow-800">{emp.acrStatus}</Badge>
//                     </td>
//                     <td className="py-3 px-4">
//                       <Badge className="bg-blue-100 text-blue-800">{emp.confirmationStatus}</Badge>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import { useState } from "react";
import {
  Award, Clock, CheckCircle, AlertCircle, FileText,
  Upload, Eye, Plus, X, Search, Users, Bell,
  ChevronRight, Info, Download, Printer, Shield,
  RefreshCw, Building2
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────
type Tab = "dashboard" | "onProbation" | "statusUpdate" | "reports";
type ModalType =
  | "viewEmployee"
  | "uploadDoc"
  | "generateExtension"
  | "generateCompletion"
  | "updateStatus"
  | "triggerACR"
  | "viewOrder"
  | null;

// ── Data ───────────────────────────────────────────────────────
const probationEmployees = [
  {
    empId: "MSWC/301", name: "Vijay Singh Rathore", designation: "Junior Clerk",
    dept: "Administration", region: "Pune", category: "General",
    type: "Direct Recruitment",
    doj: "15 Jan 2024", probationEnd: "14 Jan 2026", extendedEnd: "14 Apr 2026",
    monthsCompleted: 13, elAvailed: 8, hplAvailed: 0, extensionDays: 90,
    acrStatus: "Pending", confirmationStatus: "Under Review",
    reportingOfficer: "Sh. A.B. Kulkarni", acrDue: "14 Jan 2026",
    documents: [], remarks: "",
  },
  {
    empId: "MSWC/302", name: "Sneha Patil", designation: "Stenographer",
    dept: "Finance", region: "Mumbai", category: "OBC",
    type: "Direct Recruitment",
    doj: "01 Mar 2024", probationEnd: "28 Feb 2026", extendedEnd: "28 Feb 2026",
    monthsCompleted: 11, elAvailed: 2, hplAvailed: 0, extensionDays: 0,
    acrStatus: "Submitted", confirmationStatus: "ACR Under Review",
    reportingOfficer: "Sh. D.K. Nair", acrDue: "28 Feb 2026",
    documents: ["ACR_Feb2026.pdf"], remarks: "Satisfactory",
  },
  {
    empId: "MSWC/303", name: "Rakesh Deshmukh", designation: "Warehouse Manager",
    dept: "Warehouse Operations", region: "Nagpur", category: "SC",
    type: "Promotion",
    doj: "10 Apr 2023", probationEnd: "09 Apr 2025", extendedEnd: "09 Jul 2025",
    monthsCompleted: 22, elAvailed: 25, hplAvailed: 15, extensionDays: 10,
    acrStatus: "Unsatisfactory", confirmationStatus: "Extension Issued",
    reportingOfficer: "Sh. R.S. Mehta", acrDue: "09 Apr 2025",
    documents: ["ACR_Apr2025.pdf", "SupportingDoc.pdf"], remarks: "Unsatisfactory — attendance issues noted",
  },
  {
    empId: "MSWC/304", name: "Priya Wagh", designation: "Accounts Officer",
    dept: "Finance", region: "Aurangabad", category: "ST",
    type: "Direct Recruitment",
    doj: "20 Jun 2023", probationEnd: "19 Jun 2025", extendedEnd: "19 Jun 2025",
    monthsCompleted: 20, elAvailed: 5, hplAvailed: 0, extensionDays: 0,
    acrStatus: "Satisfactory", confirmationStatus: "Confirmed",
    reportingOfficer: "Sh. H.K. Rao", acrDue: "19 Jun 2025",
    documents: ["ACR_Jun2025.pdf", "ConfirmationOrder.pdf"], remarks: "Good performance",
  },
  {
    empId: "MSWC/305", name: "Arun Joshi", designation: "Junior Engineer",
    dept: "Engineering", region: "Nashik", category: "General",
    type: "Direct Recruitment",
    doj: "05 Sep 2024", probationEnd: "04 Sep 2026", extendedEnd: "04 Sep 2026",
    monthsCompleted: 5, elAvailed: 0, hplAvailed: 0, extensionDays: 0,
    acrStatus: "Not Due", confirmationStatus: "On Probation",
    reportingOfficer: "Sh. V.S. Chavan", acrDue: "04 Mar 2026",
    documents: [], remarks: "",
  },
];

const statusUpdateLog = [
  { empId: "MSWC/089", name: "K.R. Patil", oldStatus: "Active", newStatus: "Retired", date: "28 Feb 2026", updatedBy: "Sh. D.K. Nair", remarks: "Superannuation on 60 years" },
  { empId: "MSWC/134", name: "S.M. Joshi", oldStatus: "Active", newStatus: "Resigned", date: "15 Feb 2026", updatedBy: "Sh. D.K. Nair", remarks: "Resignation accepted" },
  { empId: "MSWC/201", name: "G.N. Kulkarni", oldStatus: "Active", newStatus: "Suspended", date: "10 Feb 2026", updatedBy: "Sh. R.S. Mehta", remarks: "Pending disciplinary inquiry" },
  { empId: "MSWC/303", name: "Rakesh Deshmukh", oldStatus: "On Probation", newStatus: "Probation Extended", date: "09 Apr 2025", updatedBy: "Sh. R.S. Mehta", remarks: "EL+HPL availed during probation exceeded 30 days" },
  { empId: "MSWC/304", name: "Priya Wagh", oldStatus: "On Probation", newStatus: "Confirmed", date: "19 Jun 2025", updatedBy: "Sh. H.K. Rao", remarks: "Satisfactory ACR, confirmation order issued" },
];

const ALL_STATUSES = ["Probation", "Confirmed", "Suspended", "Terminated", "Deputation", "Resigned", "Retired", "Probation Extended", "VRS"];

// ── Helpers ────────────────────────────────────────────────────
const getStatusColor = (status: string) => {
  if (status === "Confirmed") return "bg-green-100 text-green-700";
  if (status === "On Probation" || status === "Under Review" || status === "ACR Under Review") return "bg-blue-100 text-blue-700";
  if (status === "Extension Issued" || status === "Probation Extended") return "bg-orange-100 text-orange-700";
  if (status === "Unsatisfactory") return "bg-red-100 text-red-700";
  if (status === "Satisfactory" || status === "Submitted") return "bg-green-100 text-green-700";
  if (status === "Suspended" || status === "Terminated") return "bg-red-100 text-red-700";
  if (status === "Not Due") return "bg-gray-100 text-gray-600";
  return "bg-gray-100 text-gray-600";
};

export default function ProbationManagement() {
  const [tab, setTab] = useState<Tab>("dashboard");
  const [modal, setModal] = useState<ModalType>(null);
  const [selected, setSelected] = useState<typeof probationEmployees[0] | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState<typeof statusUpdateLog[0] | null>(null);

  const active = probationEmployees.filter(e => e.confirmationStatus !== "Confirmed");
  const dueForConfirmation = probationEmployees.filter(e => e.monthsCompleted >= 20 && e.confirmationStatus !== "Confirmed");
  const unsatisfactory = probationEmployees.filter(e => e.acrStatus === "Unsatisfactory");
  const confirmed = probationEmployees.filter(e => e.confirmationStatus === "Confirmed");

  const filtered = probationEmployees.filter(e => {
    const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase()) || e.empId.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || e.confirmationStatus === filterStatus;
    return matchSearch && matchStatus;
  });

  const TABS = [
    { id: "dashboard" as Tab, label: "Dashboard", icon: Award },
    { id: "onProbation" as Tab, label: "Probation Register", icon: Clock },
    { id: "statusUpdate" as Tab, label: "Status Updates", icon: RefreshCw },
    { id: "reports" as Tab, label: "Orders & Reports", icon: FileText },
  ];

  return (
    <div className="bg-gray-50 min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* ── Header ── */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Probation Management</h1>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">MSWC · FY 2025–26</span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">2-Year Probation · Extension Logic · ACR Review · Confirmation Orders</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={() => setModal("updateStatus")}
              className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 bg-white transition-all whitespace-nowrap">
              <RefreshCw className="w-4 h-4" />Update Status
            </button>
            <button onClick={() => { setSelected(null); setModal("generateCompletion"); }}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-all whitespace-nowrap">
              <CheckCircle className="w-4 h-4" />Generate Order
            </button>
          </div>
        </div>
      </div>

      {/* ── Alerts ── */}
      {/* {dueForConfirmation.length > 0 && (
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-orange-800">
            <Bell className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span><strong>{dueForConfirmation.length} employees</strong> are due for confirmation review — ACR must be collected before confirmation order is issued.</span>
          </div>
          <button onClick={() => setTab("onProbation")}
            className="text-xs font-semibold text-orange-700 underline underline-offset-2 ml-4 whitespace-nowrap">View →</button>
        </div>
      )} */}

      {/* ── Tabs ── */}
      <div className="bg-white border-b border-gray-200 px-6" style={{borderRadius:"10px"}}>
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

      <div className="p-1 space-y-5 mt-3">

        {/* ══ DASHBOARD ══ */}
        {tab === "dashboard" && (
          <div className="space-y-5">

            {/* KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Currently on Probation", value: active.length.toString(), sub: "Newly appointed & promoted", icon: Clock, color: "bg-blue-600" },
                { label: "Due for Confirmation", value: dueForConfirmation.length.toString(), sub: "ACR review pending", icon: AlertCircle, color: "bg-orange-500" },
                { label: "Confirmed This FY", value: confirmed.length.toString(), sub: "Orders issued", icon: CheckCircle, color: "bg-gray-700" },
                { label: "Unsatisfactory ACR", value: unsatisfactory.length.toString(), sub: "Extension / action required", icon: Shield, color: "bg-gray-600" },
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

            {/* Rules Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 text-sm mb-4">Probation Rules — MSWC Service Regulations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: "Probation Period", desc: "2 years from date of joining for direct recruits. Applies also to employees promoted to a new grade." },
                  { title: "Probation Extension", desc: "EL + HPL availed beyond 30 days extends probation by equal number of days. Extension order generated by the system automatically." },
                  { title: "ACR / Probation Report", desc: "Reporting officer must submit Annual Confidential Report (ACR) before confirmation. System triggers alerts to reporting officer as per predefined timelines." },
                  { title: "Unsatisfactory Report", desc: "If ACR is 'Unsatisfactory', supporting documents must be uploaded. Extension of probation order is generated. Second ACR is collected after extension period." },
                  { title: "Confirmation Order", desc: "On successful completion of probation and satisfactory ACR, system auto-generates the Probation Completion & Confirmation Order." },
                  { title: "Employee Status", desc: "System maintains and updates employee status at all times: Probation, Confirmed, Suspended, Terminated, Deputation, Resigned, Retired, etc." },
                ].map(r => (
                  <div key={r.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{r.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Employees Requiring Action</h3>
                <div className="space-y-2">
                  {probationEmployees.filter(e => e.confirmationStatus !== "Confirmed" && e.confirmationStatus !== "On Probation").map(e => (
                    <div key={e.empId} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-900">{e.name} <span className="text-gray-400 font-normal">({e.empId})</span></p>
                          <p className="text-xs text-gray-400">{e.designation} · {e.region}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(e.confirmationStatus)}`}>{e.confirmationStatus}</span>
                        <button onClick={() => { setSelected(e); setTab("onProbation"); }}
                          className="p-1.5 rounded hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { label: "View Probation Register", action: () => setTab("onProbation") },
                    { label: "Trigger ACR to Reporting Officer", action: () => setModal("triggerACR") },
                    { label: "Generate Extension Order", action: () => setModal("generateExtension") },
                    { label: "Generate Completion Order", action: () => setModal("generateCompletion") },
                    { label: "Update Employee Status", action: () => setModal("updateStatus") },
                    { label: "Status Update Log", action: () => setTab("statusUpdate") },
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

        {/* ══ PROBATION REGISTER ══ */}
        {tab === "onProbation" && (
          <div className="space-y-4">

            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-800">
                System monitors probation for both <strong>newly appointed</strong> and <strong>promoted employees</strong>.
                ACR alerts are auto-triggered to reporting officers per predefined timelines.
                Extension orders are auto-generated when EL+HPL exceeds 30 days or on unsatisfactory ACR.
                Click any row to view full details and take action.
              </p>
            </div>

            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search by name or employee ID..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
                {["All", "On Probation", "Under Review", "Extension Issued", "Confirmed"].map(f => (
                  <button key={f} onClick={() => setFilterStatus(f)}
                    className={`px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                      filterStatus === f ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}>{f}</button>
                ))}
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all whitespace-nowrap">
                <Download className="w-4 h-4" />Export
              </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {["Employee", "Type", "Designation", "DOJ", "Probation End", "Ext. End", "Months Done", "EL/HPL", "Ext. Days", "ACR Status", "Documents", "Confirmation Status", "Actions"].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((emp, i) => (
                      <tr key={emp.empId}
                        className={`border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer ${i % 2 === 1 ? "bg-gray-50/30" : ""}`}
                        onClick={() => { setSelected(emp); setModal("viewEmployee"); }}>
                        <td className="py-3 px-3">
                          <p className="text-xs font-semibold text-blue-600">{emp.empId}</p>
                          <p className="text-xs text-gray-900">{emp.name}</p>
                          <p className="text-xs text-gray-400">{emp.dept} · {emp.region}</p>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                            emp.type === "Promotion" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"
                          }`}>{emp.type}</span>
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-700">{emp.designation}</td>
                        <td className="py-3 px-3 text-xs text-gray-500">{emp.doj}</td>
                        <td className="py-3 px-3 text-xs text-gray-500">{emp.probationEnd}</td>
                        <td className="py-3 px-3 text-xs font-medium text-gray-700">{emp.extendedEnd}</td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            emp.monthsCompleted >= 20 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                          }`}>{emp.monthsCompleted} mo</span>
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-600">{emp.elAvailed}d / {emp.hplAvailed}d</td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                            emp.extensionDays > 0 ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-500"
                          }`}>{emp.extensionDays > 0 ? `+${emp.extensionDays}d` : "Nil"}</span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(emp.acrStatus)}`}>
                            {emp.acrStatus}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-500">{emp.documents.length > 0 ? `${emp.documents.length} file(s)` : "—"}</td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(emp.confirmationStatus)}`}>
                            {emp.confirmationStatus}
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                            <button onClick={() => { setSelected(emp); setModal("viewEmployee"); }}
                              className="p-1.5 rounded hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors" title="View">
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => { setSelected(emp); setModal("uploadDoc"); }}
                              className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Upload Document">
                              <Upload className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => { setSelected(emp); setModal("triggerACR"); }}
                              className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Trigger ACR">
                              <Bell className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ══ STATUS UPDATES ══ */}
        {tab === "statusUpdate" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                The system maintains a complete audit trail of all employee status changes.
                Statuses include: <strong>Probation, Confirmed, Suspended, Terminated, Deputation, Resigned, Retired, VRS, Probation Extended</strong>.
                Each change is date-stamped, attributed to the updating authority, and recorded in the Digital Service Book.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Status Changes (FY)", value: statusUpdateLog.length.toString(), sub: "Apr 2025 – Feb 2026" },
                { label: "Confirmations", value: "45", sub: "Orders issued" },
                { label: "Suspensions", value: "1", sub: "Active" },
                { label: "Separations", value: "10", sub: "Retirement + Resignation" },
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
                <h3 className="font-semibold text-gray-900 text-sm">Employee Status Update Log</h3>
                <button onClick={() => setModal("updateStatus")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                  <Plus className="w-3.5 h-3.5" />Update Status
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Employee", "Previous Status", "New Status", "Effective Date", "Updated By", "Remarks", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {statusUpdateLog.map((s, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3">
                        <p className="text-xs font-semibold text-blue-600">{s.empId}</p>
                        <p className="text-xs text-gray-700">{s.name}</p>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${getStatusColor(s.oldStatus)}`}>{s.oldStatus}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${getStatusColor(s.newStatus)}`}>{s.newStatus}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-500">{s.date}</td>
                      <td className="py-3 px-3 text-xs text-gray-600">{s.updatedBy}</td>
                      <td className="py-3 px-3 text-xs text-gray-500 max-w-48 truncate">{s.remarks}</td>
                      <td className="py-3 px-3">
                        <button className="text-xs px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors" onClick={() => {
    setSelectedOrder(s);
    setModal("viewOrder");
  }}>
                          <FileText className="w-3 h-3" />Order
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ══ ORDERS & REPORTS ══ */}
        {tab === "reports" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                System auto-generates all probation-related orders. <strong>Extension orders</strong> are generated when leave exceeds 30 days or ACR is unsatisfactory.
                <strong> Completion orders</strong> are generated on successful ACR and completion of probation period.
                All orders are digitally signable and recorded in the Digital Service Book.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Probation Extension Order",
                  desc: "Generated when EL+HPL exceeds 30 days OR reporting officer submits unsatisfactory ACR. Order specifies extended probation end date.",
                  tag: "Extension",
                  count: 3,
                  icon: Clock,
                  action: () => setModal("generateExtension"),
                  actionLabel: "Generate Extension Order",
                },
                {
                  title: "Probation Completion Order",
                  desc: "Generated after satisfactory completion of probation period with satisfactory ACR. Auto-confirms the employee in their post.",
                  tag: "Confirmation",
                  count: 45,
                  icon: CheckCircle,
                  action: () => setModal("generateCompletion"),
                  actionLabel: "Generate Completion Order",
                },
                {
                  title: "ACR Trigger Notification",
                  desc: "Auto-sends alert to reporting officer at predefined timelines (6 months before probation end) to submit Annual Confidential Report.",
                  tag: "ACR",
                  count: 12,
                  icon: Bell,
                  action: () => setModal("triggerACR"),
                  actionLabel: "Trigger ACR Alert",
                },
                {
                  title: "Employee Status Report",
                  desc: "Comprehensive report of all employee statuses — Probation, Confirmed, Suspended, Terminated, Deputation, Resigned, Retired.",
                  tag: "Report",
                  count: null,
                  icon: FileText,
                  action: () => {},
                  actionLabel: "Generate Report",
                },
              ].map(r => (
                <div key={r.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-gray-50 border border-gray-200 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <r.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                        <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">{r.tag}</span>
                        {r.count !== null && <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">{r.count} issued</span>}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={r.action}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                      <Plus className="w-3 h-3" />{r.actionLabel}
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-all">
                      <Download className="w-3 h-3" />Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ════════════════════
          MODALS
      ════════════════════ */}

      {/* View Employee Modal */}
      {modal === "viewEmployee" && selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Probation Record — {selected.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{selected.empId} · {selected.designation}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Printer className="w-4 h-4 text-gray-600" /></button>
                <button onClick={() => setModal(null)} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><X className="w-4 h-4 text-gray-600" /></button>
              </div>
            </div>

            {/* Employee Details */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 grid grid-cols-2 gap-2 text-xs">
              {[
                ["Employee ID", selected.empId], ["Name", selected.name],
                ["Department", selected.dept], ["Region", selected.region],
                ["Designation", selected.designation], ["Category", selected.category],
                ["Probation Type", selected.type], ["Reporting Officer", selected.reportingOfficer],
              ].map(([k, v]) => (
                <div key={k}><span className="text-gray-400">{k}:</span> <span className="font-semibold text-gray-900 ml-1">{v}</span></div>
              ))}
            </div>

            {/* Probation Timeline */}
            <div className="space-y-2 mb-4">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Probation Timeline</p>
              {[
                ["Date of Joining", selected.doj],
                ["Original Probation End", selected.probationEnd],
                ["EL Availed", `${selected.elAvailed} days`],
                ["HPL Availed", `${selected.hplAvailed} days`],
                ["Extension Days", selected.extensionDays > 0 ? `+${selected.extensionDays} days` : "Nil"],
                ["Effective Probation End", selected.extendedEnd],
                ["Months Completed", `${selected.monthsCompleted} months`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 text-xs">
                  <span className="text-gray-400">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>

            {/* ACR & Status */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className={`rounded-xl border p-3 ${selected.acrStatus === "Unsatisfactory" ? "bg-red-50 border-red-200" : "bg-gray-50 border-gray-200"}`}>
                <p className="text-xs text-gray-400">ACR Status</p>
                <span className={`text-xs font-semibold mt-1 ${selected.acrStatus === "Unsatisfactory" ? "text-red-600" : "text-gray-900"}`}>{selected.acrStatus}</span>
                {selected.remarks && <p className="text-xs text-gray-500 mt-1">{selected.remarks}</p>}
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                <p className="text-xs text-gray-400">Confirmation Status</p>
                <span className={`text-xs font-semibold mt-1 inline-block px-2 py-0.5 rounded-full ${getStatusColor(selected.confirmationStatus)}`}>{selected.confirmationStatus}</span>
              </div>
            </div>

            {/* Uploaded Documents */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Uploaded Documents</p>
              {selected.documents.length > 0
                ? selected.documents.map(d => (
                  <div key={d} className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-lg mb-1">
                    <div className="flex items-center gap-2"><FileText className="w-3 h-3 text-gray-400" /><span className="text-xs text-gray-700">{d}</span></div>
                    <button className="text-xs text-blue-600 hover:underline">Download</button>
                  </div>
                ))
                : <p className="text-xs text-gray-400">No documents uploaded yet.</p>
              }
            </div>

            <div className="flex gap-2">
              <button onClick={() => setModal("triggerACR")} className="flex-1 py-2 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-1">
                <Bell className="w-3 h-3" />Trigger ACR
              </button>
              <button onClick={() => setModal("uploadDoc")} className="flex-1 py-2 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-1">
                <Upload className="w-3 h-3" />Upload Doc
              </button>
              {selected.extensionDays > 0
                ? <button onClick={() => setModal("generateExtension")} className="flex-1 py-2 bg-orange-500 rounded-xl text-xs font-medium text-white hover:bg-orange-600 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />Extension Order
                  </button>
                : <button onClick={() => setModal("generateCompletion")} className="flex-1 py-2 bg-blue-600 rounded-xl text-xs font-medium text-white hover:bg-blue-700 flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3" />Completion Order
                  </button>
              }
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Modal */}
      {modal === "uploadDoc" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Upload Supporting Document</h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  {selected ? `${selected.name} · ${selected.empId}` : "Select employee"}
                </p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>

            {selected?.acrStatus === "Unsatisfactory" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-red-800">
                  <strong>Mandatory:</strong> ACR is marked Unsatisfactory. Supporting documents (reporting officer's remarks, evidence) must be uploaded before extension order is generated — as per MSWC Service Rules.
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Document Type</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>ACR / Probation Report</option>
                  <option>Supporting Document (Unsatisfactory ACR)</option>
                  <option>Extension Order</option>
                  <option>Confirmation Order</option>
                  <option>Reporting Officer's Remarks</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Remarks</label>
                <textarea rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add remarks if any..." />
              </div>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">Drop your file here</p>
                <p className="text-xs text-gray-400 mt-1">PDF, Word, or image · Max 10MB · or <span className="text-blue-600 underline cursor-pointer">browse</span></p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Upload Document</button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger ACR Modal */}
      {modal === "triggerACR" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Trigger ACR / Probation Report</h3>
                <p className="text-xs text-gray-400 mt-0.5">Send alert to reporting officer to submit ACR</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4">
              <p className="text-xs text-blue-800">System will send an SMS and email alert to the reporting officer to submit the Annual Confidential Report (ACR / Probation Report) within the prescribed timeline as per MSWC Service Rules.</p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Employee", type: "select", opts: probationEmployees.map(e => `${e.empId} — ${e.name}`) },
                { label: "Reporting Officer", type: "text", val: selected?.reportingOfficer || "" },
                { label: "ACR Due Date", type: "date" },
                { label: "Timeline / Reminder", type: "select", opts: ["Immediate", "7 days before due", "15 days before due", "30 days before due"] },
                { label: "Mode of Alert", type: "select", opts: ["Email + SMS", "Email only", "SMS only", "Portal Notification"] },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{f.label}</label>
                  {f.type === "select"
                    ? <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">{f.opts?.map(o => <option key={o}>{o}</option>)}</select>
                    : <input type={f.type} defaultValue={f.val || ""} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  }
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Send ACR Alert</button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Extension Order Modal */}
      {modal === "generateExtension" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Generate Extension Order</h3>
                <p className="text-xs text-gray-400 mt-0.5">Probation extension due to leave / unsatisfactory ACR</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 mb-4 flex items-start gap-2">
              <Info className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-orange-800">Extension order is generated when: (1) EL + HPL availed during probation exceeds 30 days, OR (2) Reporting officer has submitted an unsatisfactory probation report.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Employee</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {probationEmployees.map(e => <option key={e.empId}>{e.empId} — {e.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Reason for Extension</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Leave (EL+HPL) exceeded 30 days during probation</option>
                  <option>Unsatisfactory probation report from reporting officer</option>
                  <option>Both — Leave + Unsatisfactory report</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Extension Days</label>
                  <input type="number" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={selected?.extensionDays || 0} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">New Probation End Date</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Issuing Authority</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name of officer" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-orange-500 rounded-xl text-sm font-medium text-white hover:bg-orange-600">Generate Extension Order</button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Completion Order Modal */}
      {modal === "generateCompletion" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Generate Probation Completion Order</h3>
                <p className="text-xs text-gray-400 mt-0.5">Confirms employee on successful probation completion</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-4 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-green-800">Completion order confirms the employee in their post with effect from the date of successful probation completion. ACR must be satisfactory before generating this order.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Employee</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {probationEmployees.filter(e => e.acrStatus === "Satisfactory" || e.acrStatus === "Submitted").map(e => <option key={e.empId}>{e.empId} — {e.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Confirmation Date</label>
                  <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">ACR Grade</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Outstanding</option>
                    <option>Very Good</option>
                    <option>Good</option>
                    <option>Satisfactory</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Competent Authority (Issuing Officer)</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name and designation" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Generate & Issue Order</button>
            </div>
          </div>
        </div>
      )}

      {/* Update Status Modal */}
      {modal === "updateStatus" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] flex flex-col p-4">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Update Employee Status</h3>
                <p className="text-xs text-gray-400 mt-0.5">Update and record employee status in service book</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4">
              <p className="text-xs text-blue-800">Status changes are recorded in the Digital Service Book with date, authority, and supporting order reference. Changes to Suspended/Terminated require supporting disciplinary order.</p>
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 max-h-[60vh]">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Employee</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {probationEmployees.map(e => <option key={e.empId}>{e.empId} — {e.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Current Status</label>
                  <input type="text" readOnly className="w-full border border-gray-100 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-500" value="On Probation" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">New Status</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {ALL_STATUSES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Effective Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Order / Reference Number</label>
                <input type="text" placeholder="e.g. MSWC/EST/2026/145" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Remarks</label>
                <textarea rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Reason for status change..." />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Attach Supporting Order (if any)</label>
                <div className="border border-dashed border-gray-200 rounded-lg p-3 text-center">
                  <Upload className="w-5 h-5 text-gray-300 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Upload PDF or Word</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Update Status</button>
            </div>
          </div>
        </div>
      )}


      {/* Order Approval Modal */}
{modal === "viewOrder" && selectedOrder && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">

      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-bold text-gray-900">Employee Status Order</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Review and approve the status update order
          </p>
        </div>
        <button onClick={() => setModal(null)}>
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Order Info */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs space-y-2 mb-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Employee</span>
          <span className="font-semibold text-gray-900">
            {selectedOrder.empId} — {selectedOrder.name}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Previous Status</span>
          <span className="font-semibold">{selectedOrder.oldStatus}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">New Status</span>
          <span className="font-semibold">{selectedOrder.newStatus}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Effective Date</span>
          <span className="font-semibold">{selectedOrder.date}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Updated By</span>
          <span className="font-semibold">{selectedOrder.updatedBy}</span>
        </div>

        <div>
          <span className="text-gray-400 block mb-1">Remarks</span>
          <p className="text-gray-700">{selectedOrder.remarks}</p>
        </div>

      </div>

      {/* Approval Section */}
      <div className="space-y-3">

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Authority Remarks
          </label>
          <textarea
            rows={2}
            placeholder="Add approval or rejection remarks..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
          />
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">

        <button
          onClick={() => setModal(null)}
          className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          className="flex-1 py-2.5 bg-red-500 rounded-xl text-sm font-medium text-white hover:bg-red-600"
        >
          Reject
        </button>

        <button
          className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white" style={{backgroundColor:"#030213"}}
        >
          Approve
        </button>

      </div>

    </div>
  </div>
)}

    </div>
  );
}