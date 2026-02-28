// import { useParams } from "react-router";
// import { Breadcrumb } from "../components/ui/breadcrumb";
// import { FileText, TrendingUp, Award, ArrowRight, Shield } from "lucide-react";
// import { Badge2 } from "../components/ui/badge2";

// export default function ServiceBook() {
//   const { id } = useParams();

//   const serviceHistory = [
//     {
//       date: '2025-07-01',
//       event: 'Annual Increment',
//       details: 'Basic Pay revised from ₹54,300 to ₹56,100 (3% increment)',
//       type: 'increment',
//     },
//     {
//       date: '2023-04-15',
//       event: 'Promotion',
//       details: 'Promoted from Section Officer to Assistant Director. Pay Level revised to Level-10',
//       type: 'promotion',
//     },
//     {
//       date: '2021-08-20',
//       event: 'Transfer',
//       details: 'Transferred from Regional Office - North to Head Office',
//       type: 'transfer',
//     },
//     {
//       date: '2017-04-01',
//       event: 'Probation Completion',
//       details: 'Successfully completed probation period. Confirmed in service.',
//       type: 'confirmation',
//     },
//     {
//       date: '2015-04-01',
//       event: 'Appointment',
//       details: 'Appointed as Junior Assistant at Pay Level-4 through Direct Recruitment',
//       type: 'appointment',
//     },
//   ];

//   const incrementHistory = [
//     { year: '2025', oldPay: 54300, newPay: 56100, percentage: 3 },
//     { year: '2024', oldPay: 52700, newPay: 54300, percentage: 3 },
//     { year: '2023', oldPay: 45600, newPay: 52700, percentage: 15.6 },
//     { year: '2022', oldPay: 44300, newPay: 45600, percentage: 3 },
//   ];

//   const getEventIcon = (type: string) => {
//     switch (type) {
//       case 'promotion':
//         return <Award className="h-5 w-5 text-green-600" />;
//       case 'increment':
//         return <TrendingUp className="h-5 w-5 text-blue-600" />;
//       case 'transfer':
//         return <ArrowRight className="h-5 w-5 text-amber-600" />;
//       case 'confirmation':
//         return <Shield className="h-5 w-5 text-purple-600" />;
//       default:
//         return <FileText className="h-5 w-5 text-gray-600" />;
//     }
//   };

//   const getEventBadge2 = (type: string) => {
//     switch (type) {
//       case 'promotion':
//         return <Badge2 variant="success">Promotion</Badge2>;
//       case 'increment':
//         return <Badge2 variant="info">Increment</Badge2>;
//       case 'transfer':
//         return <Badge2 variant="warning">Transfer</Badge2>;
//       case 'confirmation':
//         return <Badge2 variant="success">Confirmation</Badge2>;
//       default:
//         return <Badge2 variant="default">{type}</Badge2>;
//     }
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <div>
//         {/* <Breadcrumb items={[
//           { label: 'Dashboard', href: '/' },
//           { label: 'Employee Management' },
//           { label: 'All Employees', href: '/employees' },
//           { label: 'Service Book' },
//         ]} /> */}
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold text-foreground">Digital Service Book</h1>
//           <p className="text-sm text-muted-foreground mt-1">
//             Complete employment history and lifecycle records
//           </p>
//         </div>
//       </div>

//       {/* Employee Summary */}
//       <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
//         <div className="flex items-start justify-between">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Rajesh Kumar Sharma</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//               <div>
//                 <p className="text-muted-foreground">Employee ID</p>
//                 <p className="font-medium">EMP001</p>
//               </div>
//               <div>
//                 <p className="text-muted-foreground">Current Designation</p>
//                 <p className="font-medium">Assistant Director</p>
//               </div>
//               <div>
//                 <p className="text-muted-foreground">Pay Level</p>
//                 <Badge2 variant="info">Level-10</Badge2>
//               </div>
//               <div>
//                 <p className="text-muted-foreground">Basic Pay</p>
//                 <p className="font-medium">₹56,100</p>
//               </div>
//             </div>
//           </div>
//           <button className="px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors text-sm">
//             Download Service Book
//           </button>
//         </div>
//       </div>

//       {/* Service History Timeline */}
//       <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
//         <h3 className="text-lg font-semibold mb-6 pb-3 border-b border-border flex items-center gap-2">
//           <FileText className="h-5 w-5 text-[#1e3a8a]" />
//           Service History Timeline
//         </h3>
//         <div className="space-y-6">
//           {serviceHistory.map((event, index) => (
//             <div key={index} className="flex gap-4">
//               <div className="flex flex-col items-center">
//                 <div className="p-2 bg-accent rounded-full">
//                   {getEventIcon(event.type)}
//                 </div>
//                 {index !== serviceHistory.length - 1 && (
//                   <div className="w-px h-full bg-border mt-2"></div>
//                 )}
//               </div>
//               <div className="flex-1 pb-6">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h4 className="font-semibold text-foreground">{event.event}</h4>
//                     <p className="text-sm text-muted-foreground">
//                       {new Date(event.date).toLocaleDateString('en-IN', { 
//                         day: 'numeric', 
//                         month: 'long', 
//                         year: 'numeric' 
//                       })}
//                     </p>
//                   </div>
//                   {getEventBadge2(event.type)}
//                 </div>
//                 <p className="text-sm text-foreground bg-accent/30 p-3 rounded-lg">
//                   {event.details}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Increment History */}
//       <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
//         <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-border flex items-center gap-2">
//           <TrendingUp className="h-5 w-5 text-[#1e3a8a]" />
//           Pay Increment History
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-accent/50 border-b border-border">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Financial Year
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Previous Pay
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Revised Pay
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Increment %
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
//                   Increment Amount
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-border">
//               {incrementHistory.map((inc, index) => (
//                 <tr key={index} className="hover:bg-accent/30 transition-colors">
//                   <td className="px-6 py-4 whitespace-nowrap font-medium">
//                     {inc.year}-{(parseInt(inc.year) + 1).toString().slice(2)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     ₹{inc.oldPay.toLocaleString('en-IN')}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">
//                     ₹{inc.newPay.toLocaleString('en-IN')}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <Badge2 variant="success">{inc.percentage}%</Badge2>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium">
//                     +₹{(inc.newPay - inc.oldPay).toLocaleString('en-IN')}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Career Summary */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Career Summary</h3>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-sm text-muted-foreground">Total Service</span>
//               <span className="font-semibold">9 Years 11 Months</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-muted-foreground">Promotions</span>
//               <span className="font-semibold">2</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-muted-foreground">Transfers</span>
//               <span className="font-semibold">1</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-muted-foreground">Annual Increments</span>
//               <span className="font-semibold">8</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Training & Development</h3>
//           <div className="space-y-3">
//             <div className="text-sm">
//               <p className="font-medium">Leadership Training</p>
//               <p className="text-muted-foreground">Completed - Jan 2024</p>
//             </div>
//             <div className="text-sm">
//               <p className="font-medium">Advanced Excel</p>
//               <p className="text-muted-foreground">Completed - Aug 2023</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
//           <h3 className="text-lg font-semibold mb-4">Upcoming Milestones</h3>
//           <div className="space-y-3">
//             <div className="text-sm">
//               <p className="font-medium">Next Increment Due</p>
//               <p className="text-muted-foreground">July 2026</p>
//             </div>
//             <div className="text-sm">
//               <p className="font-medium">Retirement Age</p>
//               <p className="text-muted-foreground">March 2045 (60 years)</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import {
    FileText, TrendingUp, Eye, Edit, Award, ArrowRight,
    Shield, Users, Clock, Star, Download, ChevronRight
} from "lucide-react";

interface Employee {
    id: string;
    name: string;
    designation: string;
    department: string;
    payLevel: string;
    basicPay: number;
    status: string;
    joiningDate: string;
    totalService: string;
}

const employees: Employee[] = [
    {
        id: "EMP001",
        name: "Rajesh Kumar Sharma",
        designation: "Assistant Director",
        department: "Administration",
        payLevel: "Level-10",
        basicPay: 56100,
        status: "Active",
        joiningDate: "2015-04-01",
        totalService: "9 Yrs 11 Mo",
    },
    {
        id: "EMP002",
        name: "Anita Sharma",
        designation: "Section Officer",
        department: "Finance",
        payLevel: "Level-8",
        basicPay: 62000,
        status: "Active",
        joiningDate: "2016-07-15",
        totalService: "8 Yrs 7 Mo",
    },
    {
        id: "EMP003",
        name: "Mohan Das Verma",
        designation: "Senior Clerk",
        department: "Records",
        payLevel: "Level-6",
        basicPay: 42000,
        status: "On Leave",
        joiningDate: "2019-01-10",
        totalService: "6 Yrs 1 Mo",
    },
];

const serviceHistoryByEmp: Record<string, { date: string; event: string; details: string; type: string }[]> = {
    EMP001: [
        { date: "2025-07-01", event: "Annual Increment", details: "Basic Pay revised from ₹54,300 to ₹56,100 (3% increment)", type: "increment" },
        { date: "2023-04-15", event: "Promotion", details: "Promoted from Section Officer to Assistant Director. Pay Level revised to Level-10", type: "promotion" },
        { date: "2021-08-20", event: "Transfer", details: "Transferred from Regional Office – North to Head Office", type: "transfer" },
        { date: "2017-04-01", event: "Probation Completion", details: "Successfully completed probation period. Confirmed in service.", type: "confirmation" },
        { date: "2015-04-01", event: "Appointment", details: "Appointed as Junior Assistant at Pay Level-4 through Direct Recruitment", type: "appointment" },
    ],
    EMP002: [
        { date: "2024-07-01", event: "Annual Increment", details: "Basic Pay revised from ₹60,200 to ₹62,000 (3% increment)", type: "increment" },
        { date: "2020-06-10", event: "Promotion", details: "Promoted to Section Officer. Pay Level revised to Level-8", type: "promotion" },
        { date: "2016-07-15", event: "Appointment", details: "Appointed as Junior Clerk at Pay Level-4 through Direct Recruitment", type: "appointment" },
    ],
    EMP003: [
        { date: "2023-07-01", event: "Annual Increment", details: "Basic Pay revised from ₹40,800 to ₹42,000 (3% increment)", type: "increment" },
        { date: "2019-01-10", event: "Appointment", details: "Appointed as Clerk at Pay Level-4 through Direct Recruitment", type: "appointment" },
    ],
};

const incrementHistoryByEmp: Record<string, { year: string; oldPay: number; newPay: number; percentage: number }[]> = {
    EMP001: [
        { year: "2025", oldPay: 54300, newPay: 56100, percentage: 3 },
        { year: "2024", oldPay: 52700, newPay: 54300, percentage: 3 },
        { year: "2023", oldPay: 45600, newPay: 52700, percentage: 15.6 },
        { year: "2022", oldPay: 44300, newPay: 45600, percentage: 3 },
    ],
    EMP002: [
        { year: "2024", oldPay: 60200, newPay: 62000, percentage: 3 },
        { year: "2023", oldPay: 58500, newPay: 60200, percentage: 2.9 },
    ],
    EMP003: [
        { year: "2023", oldPay: 40800, newPay: 42000, percentage: 3 },
        { year: "2022", oldPay: 39600, newPay: 40800, percentage: 3 },
    ],
};

const trainingByEmp: Record<string, { title: string; date: string }[]> = {
    EMP001: [
        { title: "Leadership & Management", date: "Jan 2024" },
        { title: "Advanced MS Excel", date: "Aug 2023" },
    ],
    EMP002: [
        { title: "Financial Auditing Basics", date: "Mar 2024" },
    ],
    EMP003: [],
};

const getEventIcon = (type: string) => {
    switch (type) {
        case "promotion": return <Award className="h-4 w-4 text-emerald-600" />;
        case "increment": return <TrendingUp className="h-4 w-4 text-blue-600" />;
        case "transfer": return <ArrowRight className="h-4 w-4 text-amber-600" />;
        case "confirmation": return <Shield className="h-4 w-4 text-purple-600" />;
        default: return <FileText className="h-4 w-4 text-slate-500" />;
    }
};

const getEventBadge = (type: string) => {
    const map: Record<string, string> = {
        promotion: "bg-emerald-100 text-emerald-700",
        increment: "bg-blue-100 text-blue-700",
        transfer: "bg-amber-100 text-amber-700",
        confirmation: "bg-purple-100 text-purple-700",
        appointment: "bg-slate-100 text-slate-700",
    };
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${map[type] ?? "bg-gray-100 text-gray-600"}`}>
            {type}
        </span>
    );
};

const statusBadge = (status: string) => {
    const cls = status === "Active"
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700";
    return <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}`}>{status}</span>;
};

export default function EmployeesPage() {
    const [mode, setMode] = useState<"view" | "edit" | null>(null);
    const [selected, setSelected] = useState<Employee | null>(null);
    const [openAddModel, setOpenAddModal] = useState(false)

    const openView = (emp: Employee) => { setSelected(emp); setMode("view"); };
    const openEdit = (emp: Employee) => { setSelected(emp); setMode("edit"); };
    const close = () => setMode(null);

    const serviceHistory = selected ? (serviceHistoryByEmp[selected.id] ?? []) : [];
    const incrementHistory = selected ? (incrementHistoryByEmp[selected.id] ?? []) : [];
    const training = selected ? (trainingByEmp[selected.id] ?? []) : [];

    const promotions = serviceHistory.filter(e => e.type === "promotion").length;
    const transfers = serviceHistory.filter(e => e.type === "transfer").length;


    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header / Stats Banner */}
            <div className="bg-white border-b border-slate-200 px-8 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Service Book Management</h1>
                            <p className="text-sm text-slate-500 mt-0.5">Manage service records, pay history, and career milestones</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors"
                            onClick={() => setOpenAddModal(true)}>
                            <FileText size={15} /> Add Service Book
                        </button>
                    </div>

                    <Dialog open={openAddModel} onOpenChange={setOpenAddModal}>
                        <DialogContent
                            className="max-h-[95vh] overflow-y-auto rounded-2xl p-0"
                            style={{ maxWidth: "90%" }}
                        >
                            <div>
                                {/* Modal Header */}
                                <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between">
                                    <div>
                                        <DialogTitle className="text-xl font-bold text-slate-900">
                                            Add Digital Service Book
                                        </DialogTitle>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            Add employment history & lifecycle records
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setOpenAddModal(false)}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium rounded-lg transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>

                                {/* Body Section */}
                                <div className="p-8 space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Employee Name"
                                        className="w-full border rounded-lg px-4 py-2 text-sm"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Designation"
                                        className="w-full border rounded-lg px-4 py-2 text-sm"
                                    />

                                    <input
                                        type="number"
                                        placeholder="Basic Pay"
                                        className="w-full border rounded-lg px-4 py-2 text-sm"
                                    />

                                    <button className="px-6 py-2 bg-blue-700 text-white rounded-lg text-sm">
                                        Save Service Book
                                    </button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { label: "Total Employees", value: employees.length, icon: <Users size={18} className="text-blue-600" />, bg: "bg-blue-50" },
                            { label: "Active", value: employees.filter(e => e.status === "Active").length, icon: <Star size={18} className="text-emerald-600" />, bg: "bg-emerald-50" },
                            { label: "On Leave", value: employees.filter(e => e.status !== "Active").length, icon: <Clock size={18} className="text-amber-600" />, bg: "bg-amber-50" },
                            { label: "Departments", value: new Set(employees.map(e => e.department)).size, icon: <ChevronRight size={18} className="text-purple-600" />, bg: "bg-purple-50" },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                                <div className={`p-2 rounded-lg ${s.bg}`}>{s.icon}</div>
                                <div>
                                    <p className="text-xl font-bold text-slate-900">{s.value}</p>
                                    <p className="text-xs text-slate-500">{s.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="max-w-12xl mx-auto py-3">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="font-semibold text-slate-800 text-sm">All Employees</h2>
                        <span className="text-xs text-slate-400">{employees.length} records</span>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                {["Emp ID", "Name", "Designation", "Department", "Pay Level", "Basic Pay", "Status", "Actions"].map(h => (
                                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {employees.map(emp => (
                                <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-5 py-4 text-slate-500 font-mono text-xs">{emp.id}</td>
                                    <td className="px-5 py-4">
                                        <div className="font-semibold text-slate-900">{emp.name}</div>
                                        <div className="text-xs text-slate-400">Since {new Date(emp.joiningDate).getFullYear()}</div>
                                    </td>
                                    <td className="px-5 py-4 text-slate-700">{emp.designation}</td>
                                    <td className="px-5 py-4 text-slate-500">{emp.department}</td>
                                    <td className="px-5 py-4">
                                        <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium ">{emp.payLevel}</span>
                                    </td>
                                    <td className="px-5 py-4 font-semibold text-emerald-600">₹{emp.basicPay.toLocaleString("en-IN")}</td>
                                    <td className="px-5 py-4">{statusBadge(emp.status)}</td>
                                    <td className="px-5 py-4">
                                        <div className="flex gap-2">
                                            <button onClick={() => openView(emp)} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium flex items-center gap-1 transition-colors">
                                                <Eye size={12} /> View
                                            </button>
                                            <button onClick={() => openEdit(emp)} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors">
                                                <Edit size={12} /> Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ─── VIEW SERVICE BOOK MODAL ─── */}
            <Dialog open={mode === "view"} onOpenChange={close}>
                <DialogContent className=" max-h-[95vh] overflow-y-auto rounded-2xl p-0" style={{ maxWidth: "90%" }}>
                    {selected && (
                        <div>
                            {/* Modal Header */}
                            <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between">
                                <div>
                                    <DialogTitle className="text-xl font-bold text-slate-900">Digital Service Book</DialogTitle>
                                    <p className="text-xs text-slate-400 mt-0.5">Complete employment history & lifecycle records</p>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-medium rounded-lg transition-colors">
                                    <Download size={13} /> Download PDF
                                </button>
                            </div>

                            <div className="px-8 py-6 space-y-8">
                                {/* Employee Summary Card */}
                                <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold">{selected.name}</h2>
                                            <p className="text-blue-200 text-sm mt-1">{selected.designation} · {selected.department}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">{selected.status}</span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                                        {[
                                            { label: "Employee ID", value: selected.id },
                                            { label: "Pay Level", value: selected.payLevel },
                                            { label: "Basic Pay", value: `₹${selected.basicPay.toLocaleString("en-IN")}` },
                                            { label: "Total Service", value: selected.totalService },
                                        ].map(f => (
                                            <div key={f.label}>
                                                <p className="text-blue-300 text-xs mb-0.5">{f.label}</p>
                                                <p className="font-semibold text-sm">{f.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { label: "Promotions", value: promotions, color: "text-emerald-600", bg: "bg-emerald-50" },
                                        { label: "Transfers", value: transfers, color: "text-amber-600", bg: "bg-amber-50" },
                                        { label: "Increments", value: incrementHistory.length, color: "text-blue-600", bg: "bg-blue-50" },
                                    ].map(s => (
                                        <div key={s.label} className={`${s.bg} rounded-xl p-4 text-center border border-white`}>
                                            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                                            <p className="text-xs text-slate-500 mt-1 font-medium">{s.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Service Timeline */}
                                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                                        <FileText size={16} className="text-blue-700" />
                                        <h3 className="font-semibold text-slate-800">Service History Timeline</h3>
                                    </div>
                                    <div className="p-6 space-y-0">
                                        {serviceHistory.map((event, index) => (
                                            <div key={index} className="flex gap-4">
                                                {/* Timeline spine */}
                                                <div className="flex flex-col items-center">
                                                    <div className="p-2 bg-slate-100 rounded-full border-2 border-white shadow-sm mt-1">
                                                        {getEventIcon(event.type)}
                                                    </div>
                                                    {index !== serviceHistory.length - 1 && (
                                                        <div className="w-px flex-1 bg-slate-200 my-1"></div>
                                                    )}
                                                </div>
                                                {/* Content */}
                                                <div className={`flex-1 ${index !== serviceHistory.length - 1 ? "pb-6" : ""}`}>
                                                    <div className="flex items-start justify-between mb-1.5">
                                                        <div>
                                                            <h4 className="font-semibold text-slate-900 text-sm">{event.event}</h4>
                                                            <p className="text-xs text-slate-400">
                                                                {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                                                            </p>
                                                        </div>
                                                        {getEventBadge(event.type)}
                                                    </div>
                                                    <p className="text-sm text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2.5 mt-2">
                                                        {event.details}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pay Increment History */}
                                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                                        <TrendingUp size={16} className="text-emerald-600" />
                                        <h3 className="font-semibold text-slate-800">Pay Increment History</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className="bg-slate-50 border-b border-slate-100">
                                                <tr>
                                                    {["Financial Year", "Previous Pay", "Revised Pay", "Increment %", "Increment Amount"].map(h => (
                                                        <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {incrementHistory.map((inc, index) => (
                                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                        <td className="px-5 py-4 font-medium text-slate-800">
                                                            {inc.year}–{(parseInt(inc.year) + 1).toString().slice(2)}
                                                        </td>
                                                        <td className="px-5 py-4 text-slate-600">₹{inc.oldPay.toLocaleString("en-IN")}</td>
                                                        <td className="px-5 py-4 font-semibold text-emerald-600">₹{inc.newPay.toLocaleString("en-IN")}</td>
                                                        <td className="px-5 py-4">
                                                            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">{inc.percentage}%</span>
                                                        </td>
                                                        <td className="px-5 py-4 font-medium text-slate-800">
                                                            +₹{(inc.newPay - inc.oldPay).toLocaleString("en-IN")}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Training + Milestones */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                                        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                            <Star size={15} className="text-yellow-500" /> Training & Development
                                        </h3>
                                        {training.length > 0 ? (
                                            <div className="space-y-3">
                                                {training.map((t, i) => (
                                                    <div key={i} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
                                                        <p className="text-sm font-medium text-slate-800">{t.title}</p>
                                                        <p className="text-xs text-slate-400">{t.date}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-slate-400">No training records found.</p>
                                        )}
                                    </div>

                                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                                        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                                            <Clock size={15} className="text-blue-500" /> Upcoming Milestones
                                        </h3>
                                        <div className="space-y-3">
                                            {[
                                                { label: "Next Increment Due", value: "July 2026" },
                                                { label: "Retirement (Age 60)", value: "March 2045" },
                                            ].map(m => (
                                                <div key={m.label} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
                                                    <p className="text-sm font-medium text-slate-800">{m.label}</p>
                                                    <p className="text-xs text-slate-500 font-medium">{m.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* ─── EDIT MODAL (placeholder) ─── */}
            <Dialog open={mode === "edit"} onOpenChange={close}>
                <DialogContent className="max-w-lg rounded-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Employee</DialogTitle>
                    </DialogHeader>
                    {selected && (
                        <div className="space-y-4 py-2">
                            {[
                                { label: "Name", value: selected.name },
                                { label: "Designation", value: selected.designation },
                                { label: "Department", value: selected.department },
                                { label: "Pay Level", value: selected.payLevel },
                                { label: "Basic Pay", value: selected.basicPay },
                            ].map(f => (
                                <div key={f.label}>
                                    <label className="block text-xs font-semibold text-slate-500 mb-1">{f.label}</label>
                                    <input
                                        defaultValue={f.value}
                                        className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                            <div className="flex gap-3 pt-2">
                                <button className="flex-1 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors">
                                    Save Changes
                                </button>
                                <button onClick={close} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}