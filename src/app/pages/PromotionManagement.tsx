// import { TrendingUp, FileText, Award } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";

// const promotionCases = [
//   { empId: "EMP045", name: "Sunita Verma", currentDesig: "Junior Clerk", proposedDesig: "Senior Clerk", type: "Regular", eligibilityDate: "2025-06-01", seniority: 23, dpcStatus: "Recommended", orderStatus: "Pending" },
//   { empId: "EMP067", name: "Vijay Singh", currentDesig: "Assistant", proposedDesig: "Section Officer", type: "Time-bound (10 years)", eligibilityDate: "2025-12-15", seniority: 45, dpcStatus: "Under Review", orderStatus: "-" },
// ];

// export default function PromotionManagement() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Promotion Management</h1>
//           <p className="text-gray-500 mt-1">Regular & Time-bound Promotions with DPC Workflow</p>
//         </div>
//         <Button className="flex items-center gap-2">
//           <FileText className="w-4 h-4" />
//           Generate Seniority List
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Due for Promotion</p>
//             <p className="text-2xl font-bold text-blue-600 mt-1">34</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Under DPC Review</p>
//             <p className="text-2xl font-bold text-yellow-600 mt-1">12</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Processed This FY</p>
//             <p className="text-2xl font-bold text-green-600 mt-1">87</p>
//           </CardContent>
//         </Card>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Promotion Rules</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="p-4 bg-blue-50 rounded-lg">
//               <h4 className="font-semibold text-blue-900 mb-2">Regular Promotion</h4>
//               <p className="text-sm text-blue-800">Based on seniority, DPC recommendation, ACR review, and vacancy availability</p>
//             </div>
//             <div className="p-4 bg-purple-50 rounded-lg">
//               <h4 className="font-semibold text-purple-900 mb-2">Time-bound Promotion</h4>
//               <p className="text-sm text-purple-800">Automatic after 10/20/30 years of service with satisfactory performance</p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Promotion Cases</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Current Designation</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Proposed Designation</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Type</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Eligibility Date</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Seniority</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">DPC Status</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {promotionCases.map((promo) => (
//                   <tr key={promo.empId} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">{promo.name}</p>
//                         <p className="text-xs text-gray-500">{promo.empId}</p>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-900">{promo.currentDesig}</td>
//                     <td className="py-3 px-4 text-sm font-medium text-blue-600">{promo.proposedDesig}</td>
//                     <td className="py-3 px-4"><Badge variant="outline">{promo.type}</Badge></td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{promo.eligibilityDate}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">#{promo.seniority}</td>
//                     <td className="py-3 px-4">
//                       <Badge className={promo.dpcStatus === "Recommended" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
//                         {promo.dpcStatus}
//                       </Badge>
//                     </td>
//                     <td className="py-3 px-4">
//                       <Button variant="outline" size="sm">Process</Button>
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

// import { useState } from "react";
// import { Pencil, Trash2, PlusCircle } from "lucide-react";

// type ServiceRecord = {
//   type: string;
//   date: string;
//   orderNo: string;
//   remarks: string;
// };

// export default function ServiceRecords() {
//   const [records, setRecords] = useState<ServiceRecord[]>([]);

//   const [form, setForm] = useState<ServiceRecord>({
//     type: "",
//     date: "",
//     orderNo: "",
//     remarks: "",
//   });

//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (editingIndex !== null) {
//       const updated = [...records];
//       updated[editingIndex] = form;
//       setRecords(updated);
//       setEditingIndex(null);
//     } else {
//       setRecords([...records, form]);
//     }

//     setForm({
//       type: "",
//       date: "",
//       orderNo: "",
//       remarks: "",
//     });
//   };

//   const handleEdit = (index: number) => {
//     setForm(records[index]);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index: number) => {
//     const updated = records.filter((_, i) => i !== index);
//     setRecords(updated);
//   };

//   return (
//     <div className="p-6 space-y-8">

//       {/* Header */}

//       <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl p-6 shadow">
//         <h2 className="text-xl font-semibold">Employee Service Actions</h2>
//         <p className="text-blue-200 text-sm">
//           Manage promotions, increments, transfers and disciplinary cases
//         </p>
//       </div>

//       {/* Form */}

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border rounded-xl p-6 shadow space-y-4"
//       >
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           <PlusCircle size={20} />
//           Add Service Record
//         </div>

//         <div className="grid md:grid-cols-2 gap-4">

//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="border rounded p-2"
//             required
//           >
//             <option value="">Select Action</option>
//             <option value="Promotion">Promotion</option>
//             <option value="Increment">Annual Increment</option>
//             <option value="Transfer">Transfer</option>
//             <option value="Disciplinary Case">Disciplinary Case</option>
//           </select>

//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             className="border rounded p-2"
//             required
//           />

//           <input
//             type="text"
//             name="orderNo"
//             placeholder="Order Number"
//             value={form.orderNo}
//             onChange={handleChange}
//             className="border rounded p-2"
//           />

//           <input
//             type="text"
//             name="remarks"
//             placeholder="Remarks"
//             value={form.remarks}
//             onChange={handleChange}
//             className="border rounded p-2"
//           />

//         </div>

//         <button
//           type="submit"
//           className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
//         >
//           {editingIndex !== null ? "Update Record" : "Add Record"}
//         </button>
//       </form>

//       {/* Records */}

//       <div className="space-y-4">

//         {records.length === 0 && (
//           <div className="text-gray-500 text-center py-10 border rounded-xl">
//             No records added
//           </div>
//         )}

//         {records.map((rec, index) => (
//           <div
//             key={index}
//             className="border rounded-xl p-4 shadow-sm bg-white flex justify-between items-center"
//           >
//             <div className="grid md:grid-cols-4 gap-6 flex-1">

//               <div>
//                 <p className="text-xs text-gray-500">Action</p>
//                 <p className="font-medium">{rec.type}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">Date</p>
//                 <p className="font-medium">{rec.date}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">Order No</p>
//                 <p className="font-medium">{rec.orderNo}</p>
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">Remarks</p>
//                 <p className="font-medium">{rec.remarks}</p>
//               </div>

//             </div>

//             {/* Actions */}

//             <div className="flex gap-3 ml-6">

//               <button
//                 onClick={() => handleEdit(index)}
//                 className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//               >
//                 <Pencil size={16} />
//               </button>

//               <button
//                 onClick={() => handleDelete(index)}
//                 className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 <Trash2 size={16} />
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import {
  Pencil, Trash2, PlusCircle, TrendingUp, CheckCircle2,
  AlertTriangle, X, ChevronDown, ArrowRight,
  User, FileText, Zap, Eye, Check, BadgeCheck,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type PayLevel = keyof typeof PAY_MATRIX_DATA;
type AparGrade = "Outstanding" | "Very Good" | "Good" | "Average" | "Below Average" | "";
type PromotionStatus = "Pending" | "Under Review" | "Approved" | "On Hold" | "Processed";

interface PromotionCase {
  id: number;
  empName: string;
  empId: string;
  department: string;
  currentLevel: string;
  currentBasic: number | string;
  joiningDate: string;
  dob: string;
  apar1: AparGrade;
  apar2: AparGrade;
  apar3: AparGrade;
  pendingCase: boolean;
  status: PromotionStatus;
  promotionType: string;
  orderNo: string;
  remarks: string;
  dpcDate: string;
}

interface ProcessedCase extends PromotionCase {
  toLevel: string;
  toDesignation: string;
  fixedBasic: number;
  grossPay: number;
  processedOn: string;
}

interface Fixation {
  fixedBasic: number;
  da: number;
  gross: number;
}

interface SelectOption {
  value: string;
  label: string;
}

// ─── PAY MATRIX ──────────────────────────────────────────────────────────────

const PAY_MATRIX_DATA = {
  "Level-1":  { min: 18000,  max: 56900,  gradePay: 1800 },
  "Level-2":  { min: 19900,  max: 63200,  gradePay: 1900 },
  "Level-3":  { min: 21700,  max: 69100,  gradePay: 2000 },
  "Level-4":  { min: 25500,  max: 81100,  gradePay: 2400 },
  "Level-5":  { min: 29200,  max: 92300,  gradePay: 2800 },
  "Level-6":  { min: 35400,  max: 112400, gradePay: 4200 },
  "Level-7":  { min: 44900,  max: 142400, gradePay: 4600 },
  "Level-8":  { min: 47600,  max: 151100, gradePay: 4800 },
  "Level-9":  { min: 53100,  max: 167800, gradePay: 5400 },
  "Level-10": { min: 56100,  max: 177500, gradePay: 5400 },
} as const;

const PAY_MATRIX: Record<string, { min: number; max: number; gradePay: number }> = PAY_MATRIX_DATA;

const PROMOTION_MAP: Record<string, { toLevel: string; minYears: number; mode: string }> = {
  "Level-1": { toLevel: "Level-2", minYears: 5, mode: "Departmental Exam" },
  "Level-2": { toLevel: "Level-3", minYears: 5, mode: "Departmental Exam" },
  "Level-3": { toLevel: "Level-4", minYears: 6, mode: "DPC Review" },
  "Level-4": { toLevel: "Level-5", minYears: 5, mode: "DPC Review" },
  "Level-5": { toLevel: "Level-6", minYears: 5, mode: "DPC Review" },
  "Level-6": { toLevel: "Level-7", minYears: 5, mode: "Selection Committee" },
  "Level-7": { toLevel: "Level-8", minYears: 6, mode: "Selection Committee" },
  "Level-8": { toLevel: "Level-9", minYears: 5, mode: "DPC Senior" },
  "Level-9": { toLevel: "Level-10", minYears: 4, mode: "DPC Senior" },
};

const DESIGNATIONS: Record<string, string> = {
  "Level-1":  "Multi-Tasking Staff (MTS)",
  "Level-2":  "Lower Division Clerk (LDC)",
  "Level-3":  "Upper Division Clerk (UDC)",
  "Level-4":  "Assistant / Stenographer Gr.III",
  "Level-5":  "Junior Section Officer",
  "Level-6":  "Section Officer",
  "Level-7":  "Senior Section Officer / Asst. Director",
  "Level-8":  "Deputy Director",
  "Level-9":  "Joint Director",
  "Level-10": "Director",
};

const DEPARTMENTS = [
  "Finance Department", "Revenue Department", "Home Department",
  "Public Works Department", "Health Department", "Education Department",
  "Agriculture Department", "Water Resources", "Urban Development",
  "General Administration Department"
];

const APAR_OPTIONS = ["Outstanding", "Very Good", "Good", "Average", "Below Average"];
const PROMO_TYPES = ["DPC Based Promotion", "Time Bound / MACP", "Selection Grade", "Seniority-cum-Merit", "In-situ Promotion"];
const DA_RATE = 50;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const fmt = (n: number | string): string => `₹${Number(n).toLocaleString("en-IN")}`;

function calcFixation(currentBasic: number | string, toLevel: string): Fixation | null {
  const m = PAY_MATRIX[toLevel];
  if (!m || !currentBasic) return null;
  const withInc = Math.ceil(Number(currentBasic) * 1.03 / 100) * 100;
  let stage = m.min;
  while (stage < withInc && stage < m.max) stage = Math.ceil(stage * 1.03 / 100) * 100;
  const da = Math.round(stage * DA_RATE / 100);
  return { fixedBasic: stage, da, gross: stage + da };
}

function yearsOfService(joiningDate: string): number {
  if (!joiningDate) return 0;
  const diff = (Date.now() - new Date(joiningDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diff);
}

function isEligible(emp: PromotionCase): boolean {
  const rule = PROMOTION_MAP[emp.currentLevel];
  if (!rule) return false;
  const yrs = yearsOfService(emp.joiningDate);
  const hasLowApar = [emp.apar1, emp.apar2, emp.apar3].some((a) => a === "Below Average");
  return yrs >= rule.minYears && !hasLowApar && !emp.pendingCase;
}

// ─── DUMMY PENDING CASES ─────────────────────────────────────────────────────

const DUMMY_PENDING: PromotionCase[] = [
  {
    id: 1, empName: "Rajesh Kumar Sharma", empId: "EMP-2847", department: "Finance Department",
    currentLevel: "Level-5", currentBasic: 38500, joiningDate: "2013-07-01",
    dob: "1985-04-12", apar1: "Very Good", apar2: "Outstanding", apar3: "Very Good",
    pendingCase: false, status: "Pending", promotionType: "DPC Based Promotion",
    orderNo: "", remarks: "DPC meeting scheduled. All APARs clear.", dpcDate: ""
  },
  {
    id: 2, empName: "Sunita Patil Deshmukh", empId: "EMP-1934", department: "Revenue Department",
    currentLevel: "Level-3", currentBasic: 27200, joiningDate: "2015-07-01",
    dob: "1990-08-23", apar1: "Outstanding", apar2: "Outstanding", apar3: "Very Good",
    pendingCase: false, status: "Pending", promotionType: "DPC Based Promotion",
    orderNo: "", remarks: "Fast track — outstanding APAR 2 consecutive years.", dpcDate: ""
  },
  {
    id: 3, empName: "Mohammed Arif Khan", empId: "EMP-3261", department: "Home Department",
    currentLevel: "Level-6", currentBasic: 47100, joiningDate: "2011-04-01",
    dob: "1982-11-05", apar1: "Good", apar2: "Average", apar3: "Good",
    pendingCase: false, status: "Under Review", promotionType: "Selection Grade",
    orderNo: "", remarks: "Screening committee review pending due to Average APAR in Year 2.", dpcDate: ""
  },
  {
    id: 4, empName: "Priya Nair Krishnamurthy", empId: "EMP-0912", department: "Health Department",
    currentLevel: "Level-4", currentBasic: 31500, joiningDate: "2016-07-01",
    dob: "1992-02-17", apar1: "Very Good", apar2: "Good", apar3: "Very Good",
    pendingCase: false, status: "Pending", promotionType: "Time Bound / MACP",
    orderNo: "", remarks: "MACP due — 9 years completed without financial upgrade.", dpcDate: ""
  },
  {
    id: 5, empName: "Vikram Singh Rathore", empId: "EMP-4412", department: "Public Works Department",
    currentLevel: "Level-7", currentBasic: 58900, joiningDate: "2009-03-15",
    dob: "1979-09-30", apar1: "Outstanding", apar2: "Very Good", apar3: "Outstanding",
    pendingCase: false, status: "Approved", promotionType: "DPC Based Promotion",
    orderNo: "PWD/DPC/2024/088", remarks: "Promotion order issued. Joining at new post pending.", dpcDate: "2024-11-20"
  },
  {
    id: 6, empName: "Anita Joshi Kulkarni", empId: "EMP-2103", department: "Education Department",
    currentLevel: "Level-2", currentBasic: 22400, joiningDate: "2018-07-01",
    dob: "1995-06-08", apar1: "Good", apar2: "Good", apar3: "Average",
    pendingCase: true, status: "On Hold", promotionType: "DPC Based Promotion",
    orderNo: "", remarks: "Departmental inquiry pending under CCS (CCA) Rules. Increment withheld.", dpcDate: ""
  },
];

type Status =
  | "Pending"
  | "Under Review"
  | "Approved"
  | "On Hold"
  | "Processed";

type ValidAparGrade = Exclude<AparGrade, "">;

// ─── SMALL COMPONENTS ────────────────────────────────────────────────────────
function StatusPill({ status }: { status: Status }) {

  const map: Record<Status, { bg: string; dot: string }> = {
    Pending: {
      bg: "bg-amber-100 text-amber-700 border-amber-200",
      dot: "bg-amber-500",
    },
    "Under Review": {
      bg: "bg-blue-100 text-blue-700 border-blue-200",
      dot: "bg-blue-500",
    },
    Approved: {
      bg: "bg-emerald-100 text-emerald-700 border-emerald-200",
      dot: "bg-emerald-500",
    },
    "On Hold": {
      bg: "bg-red-100 text-red-700 border-red-200",
      dot: "bg-red-500",
    },
    Processed: {
      bg: "bg-indigo-100 text-indigo-700 border-indigo-200",
      dot: "bg-indigo-500",
    },
  };

  const c = map[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${c.bg}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {status}
    </span>
  );
}



function AparBadge({ grade }: { grade?: AparGrade }) {
  if (!grade) return <span className="text-slate-300">—</span>;

  const map: Record<ValidAparGrade, string> = {
    Outstanding: "bg-emerald-100 text-emerald-700",
    "Very Good": "bg-blue-100 text-blue-700",
    Good: "bg-sky-100 text-sky-700",
    Average: "bg-amber-100 text-amber-700",
    "Below Average": "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${map[grade as ValidAparGrade]}`}>
      {grade}
    </span>
  );
}

interface SelProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: (string | SelectOption)[];
  required?: boolean;
  hint?: string;
}

function Sel({ label, name, value, onChange, options, required, hint }: SelProps) {
  return (
    <div className="space-y-1">
      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <select name={name} value={value} onChange={onChange} required={required}
          className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-3 py-2.5 pr-8 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
          <option value="">— Select —</option>
          {options.map(o => typeof o === "string"
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ChevronDown size={13} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
      </div>
      {hint && <p className="text-[11px] text-slate-400">{hint}</p>}
    </div>
  );
}

interface InpProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  readOnly?: boolean;
  prefix?: string;
}

function Inp({ label, name, value, onChange, type = "text", placeholder, required, hint, readOnly, prefix }: InpProps) {
  return (
    <div className="space-y-1">
      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <div className="relative">
        {prefix && <span className="absolute left-3 top-2.5 text-sm text-slate-400">{prefix}</span>}
        <input type={type} name={name} value={value} onChange={onChange} required={required}
          placeholder={placeholder} readOnly={readOnly}
          className={`w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${readOnly ? "bg-slate-50 text-slate-400 cursor-not-allowed" : "bg-white"} ${prefix ? "pl-7" : ""}`} />
      </div>
      {hint && <p className="text-[11px] text-slate-400">{hint}</p>}
    </div>
  );
}

interface ToastProps {
  msg: string;
  type: "success" | "warn" | "error";
  onClose: () => void;
}

function Toast({ msg, type, onClose }: ToastProps) {
  return (
    <div className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold animate-slide-in ${type === "success" ? "bg-emerald-600 text-white" : type === "warn" ? "bg-amber-500 text-white" : "bg-red-600 text-white"}`}>
      {type === "success" ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}
      {msg}
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100"><X size={13} /></button>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PromotionRecords() {
  const [pendingCases, setPendingCases] = useState<PromotionCase[]>(DUMMY_PENDING);
  const [processed, setProcessed] = useState<ProcessedCase[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "warn" | "error" } | null>(null);
  const [previewId, setPreviewId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"pending" | "processed">("pending");

  const tabs: { value: "pending" | "processed"; label: string }[] = [
  { value: "pending", label: `Pending Cases (${pendingCases.length})` },
  { value: "processed", label: `Processed (${processed.length})` },
];

  const blankForm: PromotionCase = {
    id: 0, empName: "", empId: "", department: "", currentLevel: "", currentBasic: "",
    joiningDate: "", dob: "", apar1: "", apar2: "", apar3: "",
    pendingCase: false, status: "Pending", promotionType: "", orderNo: "", dpcDate: "", remarks: "",
  };
  const [form, setForm] = useState<PromotionCase>(blankForm);

  const showToast = (msg: string, type: "success" | "warn" | "error" = "success"): void => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const val = e.target.type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: val }));
  };

  // Narrowed handlers for typed sub-components
  const handleInput = handle as (e: React.ChangeEvent<HTMLInputElement>) => void;
  const handleSelect = handle as (e: React.ChangeEvent<HTMLSelectElement>) => void;

  // Auto-derive from currentLevel
  const promoRule = form.currentLevel ? PROMOTION_MAP[form.currentLevel] : null;
  const fixation = form.currentBasic && promoRule ? calcFixation(form.currentBasic, promoRule.toLevel) : null;
  const eligibleCheck = form.joiningDate && promoRule
    ? yearsOfService(form.joiningDate) >= promoRule.minYears
    : null;

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newCase: PromotionCase = {
      ...form,
      id: editId ?? Date.now(),
      status: form.pendingCase ? "On Hold" : "Pending",
    };
    if (editId) {
      setPendingCases((p) => p.map((c) => (c.id === editId ? newCase : c)));
      showToast("Promotion case updated.");
    } else {
      setPendingCases((p) => [...p, newCase]);
      showToast("Promotion case added to queue.");
    }
    setForm(blankForm); setShowForm(false); setEditId(null);
  };

  const openEdit = (c: PromotionCase): void => {
    setForm({ ...c }); setEditId(c.id); setShowForm(true);
    setTimeout(() => document.getElementById("promo-form")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const deleteCase = (id: number): void => {
    setPendingCases((p) => p.filter((c) => c.id !== id));
    showToast("Case removed.", "error");
  };

  // Process promotion — move from pending to processed
  const processPromotion = (c: PromotionCase): void => {
    if (c.pendingCase) { showToast("Cannot process — departmental case pending.", "warn"); return; }
    if (!isEligible(c)) { showToast("Employee does not meet eligibility criteria.", "warn"); return; }
    const rule = PROMOTION_MAP[c.currentLevel];
    const fix = calcFixation(c.currentBasic, rule.toLevel);
    if (!fix) return;
    const processedRec: ProcessedCase = {
      ...c,
      status: "Processed",
      toLevel: rule.toLevel,
      toDesignation: DESIGNATIONS[rule.toLevel],
      fixedBasic: fix.fixedBasic,
      grossPay: fix.gross,
      processedOn: new Date().toLocaleDateString("en-IN"),
    };
    setPendingCases((p) => p.filter((x) => x.id !== c.id));
    setProcessed((p) => [...p, processedRec]);
    showToast(`Promotion processed for ${c.empName}`);
  };

  const stats = [
    { label: "Total Cases", value: pendingCases.length, color: "text-slate-700", bg: "bg-slate-100" },
    { label: "Eligible / Ready", value: pendingCases.filter(isEligible).length, color: "text-emerald-700", bg: "bg-emerald-100" },
    { label: "Under Review", value: pendingCases.filter(c => c.status === "Under Review").length, color: "text-blue-700", bg: "bg-blue-100" },
    { label: "On Hold", value: pendingCases.filter(c => c.status === "On Hold").length, color: "text-red-700", bg: "bg-red-100" },
  ];

  const preview: PromotionCase | ProcessedCase | undefined = previewId
    ? ([...pendingCases, ...processed] as (PromotionCase | ProcessedCase)[]).find((c) => c.id === previewId)
    : undefined;

  return (
    <div className="min-h-screen bg-[#f5f6fa] font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;600&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        @keyframes slide-in { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }
        .animate-slide-in { animation: slide-in 0.22s ease-out; }
        @keyframes fade-up { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fade-up 0.3s ease-out both; }
      `}</style>

      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <TrendingUp size={22} className="text-indigo-300" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight">Promotion Management</h1>
              <p className="text-indigo-300 text-xs mt-0.5">DPC / MACP Cases — 7th Pay Commission</p>
            </div>
          </div>
          <button onClick={() => { setShowForm(s => !s); setForm(blankForm); setEditId(null); }}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition">
            <PlusCircle size={15} /> Add New Case
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 fade-up">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <p className="text-xs text-slate-500 font-medium">{s.label}</p>
              <p className={`text-3xl font-extrabold mt-1 ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* ADD / EDIT FORM */}
        {showForm && (
          <div id="promo-form" className="bg-white rounded-2xl border border-indigo-100 shadow-md p-6 fade-up">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Zap size={17} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800">{editId ? "Edit Promotion Case" : "Add Promotion Case"}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Fill details — pay fixation is calculated automatically</p>
                </div>
              </div>
              <button onClick={() => { setShowForm(false); setForm(blankForm); setEditId(null); }} className="p-2 hover:bg-slate-100 rounded-lg transition"><X size={16} className="text-slate-500" /></button>
            </div>

            <form onSubmit={submitForm} className="space-y-5">

              {/* Employee */}
              <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-1"><User size={10} /> Employee Info</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Inp label="Full Name" name="empName" value={form.empName} onChange={handleInput} required placeholder="As per service book" />
                  <Inp label="Employee ID / GPF No." name="empId" value={form.empId} onChange={handleInput} required placeholder="EMP-XXXX" />
                  <Sel label="Department" name="department" value={form.department} onChange={handleSelect} required options={DEPARTMENTS} />
                  <Inp label="Date of Joining" name="joiningDate" type="date" value={form.joiningDate} onChange={handleInput} required hint="Qualifying service calculated from this date" />
                  <Inp label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleInput} />
                </div>
              </div>

              {/* Current Post */}
              <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-1"><FileText size={10} /> Current Post & Pay</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Sel label="Current Pay Level" name="currentLevel" value={form.currentLevel} onChange={handleSelect} required hint="Promotion target auto-filled"
                    options={Object.keys(PAY_MATRIX).map(l => ({ value: l, label: `${l} — ${DESIGNATIONS[l]}` }))} />
                  <Inp label="Current Basic Pay" name="currentBasic" type="number" prefix="₹" value={form.currentBasic} onChange={handleInput} required hint="From latest pay slip" />
                  <Sel label="Promotion Type" name="promotionType" value={form.promotionType} onChange={handleSelect} required options={PROMO_TYPES} />
                  <Inp label="DPC Meeting Date" name="dpcDate" type="date" value={form.dpcDate} onChange={handleInput} />
                  <Inp label="Order No." name="orderNo" value={form.orderNo} onChange={handleInput} placeholder="e.g. GAD/DPC/2024/042" />
                </div>

                {/* Auto-filled promo rule */}
                {promoRule && (
                  <div className="mt-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      ["Promotes To", promoRule.toLevel],
                      ["To Designation", DESIGNATIONS[promoRule.toLevel]],
                      ["Min. Service", `${promoRule.minYears} Years`],
                      ["Mode", promoRule.mode],
                    ].map(([k, v]) => (
                      <div key={k} className="text-center">
                        <p className="text-[11px] text-indigo-500 font-medium">{k}</p>
                        <p className="text-sm font-bold text-indigo-800 mt-0.5">{v}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Eligibility check */}
                {form.joiningDate && promoRule && (
                  <div className={`mt-2 flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg ${eligibleCheck ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
                    {eligibleCheck ? <CheckCircle2 size={13} /> : <AlertTriangle size={13} />}
                    {eligibleCheck
                      ? `Service: ${yearsOfService(form.joiningDate)} years — meets ${promoRule.minYears}-year eligibility`
                      : `Only ${yearsOfService(form.joiningDate)} years of service — requires ${promoRule.minYears} years`}
                  </div>
                )}
              </div>

              {/* APAR */}
              <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">APAR — Last 3 Years</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Sel label="Year 1 (Latest)" name="apar1" value={form.apar1} onChange={handleSelect} options={APAR_OPTIONS} hint="Must be min. 'Good' for DPC" />
                  <Sel label="Year 2" name="apar2" value={form.apar2} onChange={handleSelect} options={APAR_OPTIONS} />
                  <Sel label="Year 3" name="apar3" value={form.apar3} onChange={handleSelect} options={APAR_OPTIONS} />
                </div>
                {[form.apar1, form.apar2, form.apar3].some(a => a === "Below Average") && (
                  <div className="mt-2 flex items-start gap-2 bg-red-50 text-red-700 text-xs rounded-lg px-4 py-2.5 font-medium border border-red-100">
                    <AlertTriangle size={13} className="mt-0.5 flex-shrink-0" />
                    'Below Average' APAR found — DPC promotion ineligible. Screening committee review required per DoPT OM.
                  </div>
                )}
              </div>

              {/* Pay Fixation Preview */}
              {fixation && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-3 flex items-center gap-1"><Zap size={10} /> Auto Pay Fixation — Rule 13, CCS (RP) Rules 2016</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["Fixed Basic in " + (promoRule?.toLevel || ""), fmt(fixation.fixedBasic)],
                      [`DA @ ${DA_RATE}%`, fmt(fixation.da)],
                      ["Gross (Basic + DA)", fmt(fixation.gross)],
                    ].map(([k, v]) => (
                      <div key={k} className="bg-white rounded-xl p-3 text-center shadow-sm">
                        <p className="text-[11px] text-slate-500">{k}</p>
                        <p className="text-base font-extrabold text-emerald-700 mt-1">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Disciplinary hold */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input type="checkbox" id="pendingCase" name="pendingCase" checked={!!form.pendingCase} onChange={handleInput}
                  className="w-4 h-4 rounded accent-red-600" />
                <label htmlFor="pendingCase" className="text-sm text-slate-700 font-semibold cursor-pointer">
                  Departmental / disciplinary case pending
                  <span className="text-xs text-slate-400 font-normal ml-2">(Promotion will be placed On Hold)</span>
                </label>
              </div>

              <Inp label="Remarks / Notes" name="remarks" value={form.remarks} onChange={handleInput} placeholder="DPC observations, special conditions, joining formalities…" />

              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition">
                  {editId ? <><Pencil size={13} /> Update Case</> : <><PlusCircle size={13} /> Add to Queue</>}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setForm(blankForm); setEditId(null); }}
                  className="flex items-center gap-2 border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition">
                  <X size={13} /> Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TABS */}
        <div className="flex gap-1 bg-white border border-slate-100 shadow-sm rounded-2xl p-1.5 w-fit fade-up">
  {tabs.map((tab) => (
    <button
      key={tab.value}
      onClick={() => setActiveTab(tab.value)}
      className={`px-5 py-2 rounded-xl text-sm font-bold transition ${
        activeTab === tab.value
          ? "bg-indigo-600 text-white shadow"
          : "text-slate-500 hover:text-slate-700"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>

        {/* PENDING CASES TABLE */}
        {activeTab === "pending" && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden fade-up">
            {pendingCases.length === 0 ? (
              <div className="py-20 text-center text-slate-400">
                <TrendingUp size={42} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm font-semibold">No pending promotion cases</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      {["Employee", "ID", "Department", "Current Level", "Current Basic", "Service (Yrs)", "Promotes To", "Fixed Basic", "APAR Y1/Y2/Y3", "Type", "Status", "Eligible?", "Actions"].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-[11px] font-extrabold text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {pendingCases.map((c, i) => {
                      const rule = PROMOTION_MAP[c.currentLevel];
                      const fix = rule ? calcFixation(c.currentBasic, rule.toLevel) : null;
                      const yrs = yearsOfService(c.joiningDate);
                      const eligible = isEligible(c);
                      return (
                        <tr key={c.id} className="hover:bg-indigo-50/20 transition group" style={{ animationDelay: `${i * 40}ms` }}>
                          <td className="px-4 py-3">
                            <p className="font-bold text-slate-800 whitespace-nowrap">{c.empName}</p>
                            <p className="text-[11px] text-slate-400 mono mt-0.5">{c.empId}</p>
                          </td>
                          <td className="px-4 py-3 mono text-xs text-slate-500">{c.empId}</td>
                          <td className="px-4 py-3 text-slate-600 whitespace-nowrap text-xs">{c.department}</td>
                          <td className="px-4 py-3">
                            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-bold">{c.currentLevel}</span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-slate-700 whitespace-nowrap">{fmt(c.currentBasic)}</td>
                          <td className="px-4 py-3">
                            <span className={`font-bold text-sm ${rule && yrs >= rule.minYears ? "text-emerald-600" : "text-red-500"}`}>{yrs}y</span>
                            {rule && <span className="text-[11px] text-slate-400 ml-1">(req. {rule.minYears}y)</span>}
                          </td>
                          <td className="px-4 py-3">
                            {rule
                              ? <div className="flex items-center gap-1 text-xs font-bold text-indigo-700"><ArrowRight size={11} />{rule.toLevel}</div>
                              : <span className="text-slate-300">—</span>}
                          </td>
                          <td className="px-4 py-3 font-bold text-emerald-700 whitespace-nowrap">
                            {fix ? fmt(fix.fixedBasic) : <span className="text-slate-300">—</span>}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1 flex-wrap">
                              <AparBadge grade={c.apar1} />
                              <AparBadge grade={c.apar2} />
                              <AparBadge grade={c.apar3} />
                            </div>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-500 whitespace-nowrap">{c.promotionType}</td>
                          <td className="px-4 py-3"><StatusPill status={c.status} /></td>
                          <td className="px-4 py-3">
                            {eligible
                              ? <span className="flex items-center gap-1 text-xs font-bold text-emerald-600"><BadgeCheck size={14} />Yes</span>
                              : <span className="flex items-center gap-1 text-xs font-bold text-red-500"><X size={13} />No</span>}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1.5">
                              <button onClick={() => setPreviewId(c.id)} title="Preview"
                                className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"><Eye size={13} /></button>
                              <button onClick={() => processPromotion(c)} title="Process Promotion" disabled={!eligible}
                                className={`p-1.5 rounded-lg transition ${eligible ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-slate-100 text-slate-300 cursor-not-allowed"}`}>
                                <Check size={13} /></button>
                              <button onClick={() => openEdit(c)} title="Edit"
                                className="p-1.5 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition"><Pencil size={13} /></button>
                              <button onClick={() => deleteCase(c.id)} title="Delete"
                                className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition"><Trash2 size={13} /></button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* PROCESSED TABLE */}
        {activeTab === "processed" && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden fade-up">
            {processed.length === 0 ? (
              <div className="py-20 text-center text-slate-400">
                <CheckCircle2 size={42} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm font-semibold">No promotions processed yet</p>
                <p className="text-xs mt-1">Use the ✓ button on eligible pending cases</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-emerald-50 border-b border-emerald-100">
                      {["Employee", "ID", "Department", "Promoted From", "Promoted To", "New Designation", "Fixed Basic", "DA (50%)", "Gross Pay", "Type", "Processed On", "Status"].map(h => (
                        <th key={h} className="px-4 py-3 text-left text-[11px] font-extrabold text-emerald-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {processed.map((c) => (
                      <tr key={c.id} className="hover:bg-emerald-50/30 transition">
                        <td className="px-4 py-3 font-bold text-slate-800 whitespace-nowrap">{c.empName}</td>
                        <td className="px-4 py-3 mono text-xs text-slate-500">{c.empId}</td>
                        <td className="px-4 py-3 text-xs text-slate-500">{c.department}</td>
                        <td className="px-4 py-3"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">{c.currentLevel}</span></td>
                        <td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold">{c.toLevel}</span></td>
                        <td className="px-4 py-3 text-xs text-slate-600 whitespace-nowrap">{c.toDesignation}</td>
                        <td className="px-4 py-3 font-semibold text-slate-700">{fmt(c.fixedBasic)}</td>
                        <td className="px-4 py-3 text-slate-600">{fmt(Math.round(c.fixedBasic * DA_RATE / 100))}</td>
                        <td className="px-4 py-3 font-extrabold text-emerald-700">{fmt(c.grossPay)}</td>
                        <td className="px-4 py-3 text-xs text-slate-500">{c.promotionType}</td>
                        <td className="px-4 py-3 text-xs text-slate-500">{c.processedOn}</td>
                        <td className="px-4 py-3"><StatusPill status="Processed" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* PREVIEW MODAL */}
        {preview !== undefined && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={() => setPreviewId(null)}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg">{preview.empName}</h3>
                  <p className="text-xs text-slate-400 mono mt-0.5">{preview.empId} · {preview.department}</p>
                </div>
                <button onClick={() => setPreviewId(null)} className="p-2 hover:bg-slate-100 rounded-xl"><X size={16} /></button>
              </div>
              <div className="p-6 space-y-5">
                {/* Current Post */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["Current Level", preview.currentLevel],
                    ["Current Basic Pay", fmt(preview.currentBasic)],
                    ["Date of Joining", preview.joiningDate],
                    ["Years of Service", `${yearsOfService(preview.joiningDate)} years`],
                    ["Promotion Type", preview.promotionType],
                    ["DPC Date", preview.dpcDate || "—"],
                    ["Order No.", preview.orderNo || "—"],
                    ["Department", preview.department],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-slate-50 rounded-xl p-3">
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{k}</p>
                      <p className="font-bold text-slate-800 mt-1 text-sm">{v}</p>
                    </div>
                  ))}
                </div>
                {/* APAR */}
                <div>
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">APAR Gradings</p>
                  <div className="flex gap-3">
                    {[["Year 1", preview.apar1], ["Year 2", preview.apar2], ["Year 3", preview.apar3]].map(([l, v]) => (
                      <div key={l} className="text-center bg-slate-50 rounded-xl p-3 flex-1">
                        <p className="text-[11px] text-slate-400">{l}</p>
                        <div className="mt-1"><AparBadge grade={v as AparGrade} /></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Pay fixation */}
                {(() => {
                  const rule = PROMOTION_MAP[preview.currentLevel];
                  const fix = rule ? calcFixation(preview.currentBasic, rule.toLevel) : null;
                  if (!fix || !rule) return null;
                  return (
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <p className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest mb-3">Pay Fixation on Promotion</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          ["Promotes to", rule.toLevel],
                          ["Fixed Basic Pay", fmt(fix.fixedBasic)],
                          [`DA @ ${DA_RATE}%`, fmt(fix.da)],
                          ["Gross Pay", fmt(fix.gross)],
                        ].map(([k, v]) => (
                          <div key={k} className="bg-white rounded-lg p-3 text-center shadow-sm">
                            <p className="text-[11px] text-slate-500">{k}</p>
                            <p className="font-extrabold text-emerald-700 mt-1">{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
                {/* Eligibility */}
                <div className={`flex items-center gap-2 text-sm font-bold rounded-xl px-4 py-3 ${isEligible(preview) ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                  {isEligible(preview) ? <><BadgeCheck size={16} /> Eligible for promotion — all criteria met</> : <><AlertTriangle size={16} /> Not eligible — review service years, APAR, or pending case</>}
                </div>
                {preview.remarks && (
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-sm text-amber-800">
                    <p className="font-bold text-xs uppercase tracking-widest mb-1 text-amber-500">Remarks</p>
                    {preview.remarks}
                  </div>
                )}
                {/* Action buttons */}
                <div className="flex gap-3 pt-1">
                  <button onClick={() => { processPromotion(preview); setPreviewId(null); }}
                    disabled={!isEligible(preview)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition ${isEligible(preview) ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-slate-100 text-slate-300 cursor-not-allowed"}`}>
                    <Check size={14} /> Process Promotion
                  </button>
                  <button onClick={() => { openEdit(preview); setPreviewId(null); }}
                    className="flex items-center gap-2 border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition">
                    <Pencil size={14} /> Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}