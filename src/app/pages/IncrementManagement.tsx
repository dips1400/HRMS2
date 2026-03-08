// import { ArrowUpCircle, Calendar, FileText } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";

// const incrementCases = [
//   { empId: "EMP001", name: "Rajesh Kumar", currentBasic: 45000, incrementAmount: 1350, newBasic: 46400, effectiveDate: "2026-07-01", eligibility: "Eligible", status: "Pending" },
//   { empId: "EMP002", name: "Priya Sharma", currentBasic: 52000, incrementAmount: 1560, newBasic: 53600, effectiveDate: "2026-07-01", eligibility: "Eligible", status: "Pending" },
// ];

// export default function IncrementManagement() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Increment Management</h1>
//           <p className="text-gray-500 mt-1">Annual Increment Processing - Effective July 1st</p>
//         </div>
//         <Button className="flex items-center gap-2">
//           <ArrowUpCircle className="w-4 h-4" />
//           Process Annual Increment
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Due for Increment (July 2026)</p>
//             <p className="text-2xl font-bold text-blue-600 mt-1">156</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Total Increment Amount</p>
//             <p className="text-2xl font-bold text-green-600 mt-1">₹24.5 L</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-sm text-gray-600">Processed This FY</p>
//             <p className="text-2xl font-bold text-purple-600 mt-1">2,654</p>
//           </CardContent>
//         </Card>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Increment Rules</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="p-4 bg-blue-50 rounded-lg space-y-2 text-sm">
//             <p>• <strong>Increment Rate:</strong> 3% of Basic Pay</p>
//             <p>• <strong>Effective Date:</strong> July 1st of every year</p>
//             <p>• <strong>Rounding:</strong> Rounded to nearest ₹100</p>
//             <p>• <strong>Eligibility:</strong> Must have completed 6 months of service</p>
//             <p>• <strong>Withholding:</strong> Can be withheld for adverse remarks in ACR</p>
//             <p>• <strong>Arrears:</strong> Auto-calculated if increment is backdated</p>
//           </div>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader>
//           <CardTitle>Increment Cases (July 2026)</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                   <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Current Basic</th>
//                   <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Increment (3%)</th>
//                   <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">New Basic</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Effective Date</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Eligibility</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {incrementCases.map((inc) => (
//                   <tr key={inc.empId} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">{inc.name}</p>
//                         <p className="text-xs text-gray-500">{inc.empId}</p>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-right text-sm text-gray-600">₹{inc.currentBasic.toLocaleString()}</td>
//                     <td className="py-3 px-4 text-right text-sm font-medium text-green-600">₹{inc.incrementAmount.toLocaleString()}</td>
//                     <td className="py-3 px-4 text-right text-sm font-bold text-blue-600">₹{inc.newBasic.toLocaleString()}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{inc.effectiveDate}</td>
//                     <td className="py-3 px-4">
//                       <Badge className="bg-green-100 text-green-800">{inc.eligibility}</Badge>
//                     </td>
//                     <td className="py-3 px-4">
//                       <Badge className="bg-yellow-100 text-yellow-800">{inc.status}</Badge>
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


import { useState, useMemo } from "react";
import { ArrowUpCircle, Search, FileText, AlertTriangle, BookOpen, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceBookEntry {
  orderNo: string;
  date: string;
  basicBefore: number;
  newBasic: number;
  effectiveDate: string;
  daRate: number;
}

interface Employee {
  empId: string;
  name: string;
  designation: string;
  department: string;
  centre: string;
  cadre: string;
  doj: string;
  basic: number;
  lastIncrementDate: string | null;
  onLeave: boolean;
  leaveReturnDate: string | null;
  incrementWithheld: boolean;
  withheldReason: string;
  withheldPeriod: string;
  serviceBook: ServiceBookEntry[];
}

interface ModalState {
  type: "cert" | "withhold" | "servicebook";
  emp: Employee;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const DA_RATE = 46;
const INCREMENT_DATE = "2026-07-01";
const INCREMENT_RATE = 0.03;
const ROUND_TO = 100;

// ─── Mock Data ────────────────────────────────────────────────────────────────

const initialEmployees: Employee[] = [
  { empId: "EMP001", name: "Rajesh Kumar Singh", designation: "Senior Clerk", department: "Finance", centre: "Pune", cadre: "Clerical", doj: "2015-04-15", basic: 45000, lastIncrementDate: "2025-07-01", onLeave: false, leaveReturnDate: null, incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
  { empId: "EMP002", name: "Priya Sharma", designation: "Assistant Engineer", department: "Engineering", centre: "Mumbai", cadre: "Technical", doj: "2018-07-01", basic: 52000, lastIncrementDate: "2025-07-01", onLeave: false, leaveReturnDate: null, incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
  { empId: "EMP003", name: "Amit Patel", designation: "Section Officer", department: "Administration", centre: "Nagpur", cadre: "Administrative", doj: "2012-03-20", basic: 58000, lastIncrementDate: "2025-07-01", onLeave: true, leaveReturnDate: "2026-08-15", incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
  { empId: "EMP004", name: "Sunita Verma", designation: "Medical Officer", department: "Medical", centre: "Pune", cadre: "Medical", doj: "2019-09-10", basic: 72000, lastIncrementDate: "2025-07-01", onLeave: false, leaveReturnDate: null, incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
  { empId: "EMP005", name: "Vijay Singh Rathore", designation: "Junior Clerk", department: "Education", centre: "Nashik", cadre: "Clerical", doj: "2025-12-01", basic: 32000, lastIncrementDate: null, onLeave: false, leaveReturnDate: null, incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
  { empId: "EMP006", name: "Kavita Desai", designation: "Accountant", department: "Finance", centre: "Mumbai", cadre: "Accounts", doj: "2016-11-22", basic: 48000, lastIncrementDate: "2025-07-01", onLeave: false, leaveReturnDate: null, incrementWithheld: true, withheldReason: "Adverse ACR remarks – disciplinary action pending", withheldPeriod: "2026-07-01 to 2027-06-30", serviceBook: [] },
  { empId: "EMP007", name: "Ramesh Chandra", designation: "Superintendent", department: "Administration", centre: "Pune", cadre: "Administrative", doj: "2010-08-05", basic: 62000, lastIncrementDate: "2025-07-01", onLeave: false, leaveReturnDate: null, incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
  { empId: "EMP008", name: "Anita Rao", designation: "Executive Engineer", department: "Engineering", centre: "Nagpur", cadre: "Technical", doj: "2013-05-18", basic: 85000, lastIncrementDate: "2025-07-01", onLeave: false, leaveReturnDate: null, incrementWithheld: false, withheldReason: "", withheldPeriod: "", serviceBook: [] },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function daysBetween(d1: string, d2: string): number {
  return Math.floor((new Date(d2).getTime() - new Date(d1).getTime()) / 86400000);
}

function calcDutyDays(emp: Employee): number {
  const start = emp.lastIncrementDate || emp.doj;
  return daysBetween(start, INCREMENT_DATE);
}

function isEligible(emp: Employee): boolean {
  if (emp.incrementWithheld) return false;
  return calcDutyDays(emp) >= 180;
}

function calcIncrement(basic: number): number {
  return Math.round((basic * INCREMENT_RATE) / ROUND_TO) * ROUND_TO;
}

function calcNewBasic(basic: number): number {
  return basic + calcIncrement(basic);
}

function getEffectiveDate(emp: Employee): string {
  if (emp.onLeave && emp.leaveReturnDate) return emp.leaveReturnDate;
  return INCREMENT_DATE;
}

function fmt(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  if (!msg) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm">
      <span className="text-green-400">✓</span>
      {msg}
      <button onClick={onClose} className="ml-2 text-gray-400 hover:text-white">&times;</button>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({
  open, onClose, title, children, wide = false,
}: {
  open: boolean; onClose: () => void; title: string; children: React.ReactNode; wide?: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className={`bg-white rounded-xl shadow-xl w-full ${wide ? "max-w-3xl" : "max-w-lg"} max-h-[90vh] overflow-y-auto border border-gray-200`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

// ─── Increment Table ──────────────────────────────────────────────────────────

function IncrementTable({
  employees,
  processedIds,
  selectedIds,
  onProcess,
  onToggleSelect,
  onSelectAll,
  onOpenModal,
}: {
  employees: Employee[];
  processedIds: Set<string>;
  selectedIds: Set<string>;
  onProcess: (id: string) => void;
  onToggleSelect: (id: string) => void;
  onSelectAll: (checked: boolean) => void;
  onOpenModal: (state: ModalState) => void;
}) {
  const allSelected = employees.length > 0 && employees.every((e) => selectedIds.has(e.empId));

  if (employees.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12 text-sm">No employees in this category.</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(e) => onSelectAll(e.target.checked)}
                className="rounded"
              />
            </th>
            {["Employee", "Duty Days", "Current Basic", "Increment (3%)", "New Basic", "Effective Date", "DA on New Basic", "Status", "Actions"].map((h) => (
              <th key={h} className="text-left py-3 px-4 font-semibold text-sm text-gray-700 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            const elig = isEligible(emp);
            const inc = calcIncrement(emp.basic);
            const newBasic = calcNewBasic(emp.basic);
            const da = Math.round(newBasic * DA_RATE / 100);
            const effDate = getEffectiveDate(emp);
            const processed = processedIds.has(emp.empId);
            const dutyDays = calcDutyDays(emp);

            return (
              <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(emp.empId)}
                    onChange={() => onToggleSelect(emp.empId)}
                    className="rounded"
                  />
                </td>
                <td className="py-3 px-4">
                  <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                  <p className="text-xs text-gray-500">{emp.empId} · {emp.designation}</p>
                  <p className="text-xs text-gray-400">{emp.department} · {emp.centre}</p>
                </td>
                <td className="py-3 px-4">
                  <p className={`text-sm font-medium ${dutyDays >= 180 ? "text-gray-900" : "text-gray-400"}`}>
                    {dutyDays} days
                  </p>
                  <p className="text-xs text-gray-400">{dutyDays >= 180 ? "≥ 180 ✓" : "< 180 ✗"}</p>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{fmt(emp.basic)}</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{elig ? fmt(inc) : "—"}</td>
                <td className="py-3 px-4 text-sm font-semibold text-blue-600">{elig ? fmt(newBasic) : "—"}</td>
                <td className="py-3 px-4">
                  <p className="text-sm text-gray-600">{effDate}</p>
                  {emp.onLeave && (
                    <p className="text-xs text-gray-400">On leave — date adjusted</p>
                  )}
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{elig ? fmt(da) : "—"}</td>
                <td className="py-3 px-4">
                  {emp.incrementWithheld ? (
                    <Badge className="bg-yellow-100 text-yellow-800">Withheld</Badge>
                  ) : processed ? (
                    <Badge className="bg-green-100 text-green-800">Processed</Badge>
                  ) : elig ? (
                    <Badge className="bg-blue-100 text-blue-700">Eligible</Badge>
                  ) : (
                    <Badge className="bg-gray-100 text-gray-600">Ineligible</Badge>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    {elig && !processed && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onProcess(emp.empId)}
                      >
                        Process
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      title="Increment Certificate"
                      onClick={() => onOpenModal({ type: "cert", emp })}
                    >
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      title="Withhold / Stop Increment"
                      onClick={() => onOpenModal({ type: "withhold", emp })}
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      title="Digital Service Book"
                      onClick={() => onOpenModal({ type: "servicebook", emp })}
                    >
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Certificate Content ──────────────────────────────────────────────────────

function CertificateContent({ emp }: { emp: Employee }) {
  const inc = calcIncrement(emp.basic);
  const newBasic = calcNewBasic(emp.basic);
  const da = Math.round(newBasic * DA_RATE / 100);
  const effDate = getEffectiveDate(emp);

  return (
    <div className="border border-gray-200 rounded-lg p-6 text-sm text-gray-700 space-y-4">
      <div className="text-center space-y-1">
        <p className="text-xs text-gray-500 uppercase tracking-wide">Maharashtra State Warehousing Corporation</p>
        <p className="text-base font-bold text-gray-900">Annual Increment Certificate</p>
        <p className="text-xs text-gray-500">FY 2025-26 · Effective: {effDate}</p>
      </div>
      <hr className="border-gray-200" />
      <p className="text-sm text-gray-700 leading-relaxed">
        This certifies that <strong>{emp.name}</strong> ({emp.empId}), <strong>{emp.designation}</strong>,{" "}
        <strong>{emp.department}</strong> Dept., Centre: <strong>{emp.centre}</strong>, Cadre: <strong>{emp.cadre}</strong>,
        has been granted an Annual Increment as detailed below:
      </p>
      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <tbody>
          {([
            ["Date of Joining", emp.doj],
            ["Last Increment Date", emp.lastIncrementDate ?? "First Increment"],
            ["Duty Days Completed", `${calcDutyDays(emp)} days`],
            ["Basic Pay (Before)", fmt(emp.basic)],
            ["Increment @ 3%", fmt(inc)],
            ["New Basic Pay", fmt(newBasic)],
            [`DA @ ${DA_RATE}% on New Basic`, fmt(da)],
            ["Total (Basic + DA)", fmt(newBasic + da)],
            ["Effective Date", effDate],
          ] as [string, string][]).map(([k, v]) => (
            <tr key={k} className="border-b border-gray-100 last:border-0">
              <td className="py-2 px-3 text-gray-500 font-medium w-52">{k}</td>
              <td className="py-2 px-3 text-gray-900 font-semibold">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {emp.onLeave && emp.leaveReturnDate && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800">
          Employee was on leave on {INCREMENT_DATE}. Effective date updated to leave return date:{" "}
          <strong>{emp.leaveReturnDate}</strong>
        </div>
      )}
      <div className="flex justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
        <span>Prepared by: HR Dept.</span>
        <span>For approval: EST Branch</span>
        <span>Cert No: INC/{emp.centre.toUpperCase()}/{emp.empId}/2026</span>
      </div>
    </div>
  );
}

// ─── Service Book Modal ───────────────────────────────────────────────────────

function ServiceBookContent({ emp }: { emp: Employee }) {
  return (
    <div className="space-y-3">
      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="font-semibold text-gray-900 text-sm">{emp.name}</p>
        <p className="text-xs text-gray-500">{emp.empId} · {emp.designation} · {emp.department}</p>
      </div>
      {emp.serviceBook.length === 0 ? (
        <p className="text-center text-gray-400 py-8 text-sm">No increment records in digital service book.</p>
      ) : (
        <div className="space-y-2">
          {emp.serviceBook.map((e, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800">Increment #{i + 1}</span>
                <Badge className="bg-green-100 text-green-800">Approved</Badge>
              </div>
              <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                <span>Order No: <strong className="text-gray-800">{e.orderNo}</strong></span>
                <span>Date: <strong className="text-gray-800">{e.date}</strong></span>
                <span>Basic Before: <strong className="text-gray-800">{fmt(e.basicBefore)}</strong></span>
                <span>New Basic: <strong className="text-gray-800">{fmt(e.newBasic)}</strong></span>
                <span>Effective: <strong className="text-gray-800">{e.effectiveDate}</strong></span>
                <span>DA Rate: <strong className="text-gray-800">{e.daRate}%</strong></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Withhold Modal ───────────────────────────────────────────────────────────

function WithholdContent({
  emp, onSave, onClose,
}: {
  emp: Employee;
  onSave: (data: { reason: string; period: string; withheld: boolean }) => void;
  onClose: () => void;
}) {
  const [reason, setReason] = useState(emp.withheldReason);
  const [period, setPeriod] = useState(emp.withheldPeriod);
  const [type, setType] = useState<"withhold" | "stop">("withhold");

  return (
    <div className="space-y-4">
      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600">
        <strong>Note:</strong> Withholding increment is a disciplinary action and must reference an official order or ACR remark.
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
        <div className="flex gap-4">
          {([["withhold", "Withhold for Period"], ["stop", "Stop Permanently"]] as const).map(([v, l]) => (
            <label key={v} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="wtype" checked={type === v} onChange={() => setType(v)} />
              {l}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Reason / Reference *</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="ACR reference, disciplinary order number, etc."
        />
      </div>
      {type === "withhold" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
          <Input
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            placeholder="e.g. 2026-07-01 to 2027-06-30"
          />
        </div>
      )}
      <div className="flex gap-2 pt-2">
        <Button
          onClick={() => onSave({ reason, period: type === "stop" ? "Permanent" : period, withheld: true })}
          disabled={!reason}
          className="flex-1"
        >
          Apply Withhold
        </Button>
        {emp.incrementWithheld && (
          <Button
            variant="outline"
            onClick={() => onSave({ reason: "", period: "", withheld: false })}
            className="flex-1"
          >
            Restore Increment
          </Button>
        )}
        <Button variant="outline" onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}

// ─── Bulk Certificate Modal ───────────────────────────────────────────────────

function BulkCertModal({
  open, onClose, employees, notify,
}: {
  open: boolean;
  onClose: () => void;
  employees: Employee[];
  notify: (msg: string) => void;
}) {
  const [certFilter, setCertFilter] = useState({ centre: "all", cadre: "all" });
  const centres = [...new Set(employees.map((e) => e.centre))];
  const cadres = [...new Set(employees.map((e) => e.cadre))];

  const certEmps = employees.filter(
    (e) =>
      isEligible(e) &&
      (certFilter.centre === "all" || e.centre === certFilter.centre) &&
      (certFilter.cadre === "all" || e.cadre === certFilter.cadre)
  );

  return (
    <Modal open={open} onClose={onClose} title="Generate Increment Certificates" wide>
      <div className="space-y-4">
        <div className="flex gap-3 flex-wrap items-center">
          <select
            value={certFilter.centre}
            onChange={(e) => setCertFilter((p) => ({ ...p, centre: e.target.value }))}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
          >
            <option value="all">All Centres</option>
            {centres.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            value={certFilter.cadre}
            onChange={(e) => setCertFilter((p) => ({ ...p, cadre: e.target.value }))}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
          >
            <option value="all">All Cadres</option>
            {cadres.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <span className="text-sm text-gray-500 ml-auto">
            <strong className="text-gray-800">{certEmps.length}</strong> certificates
          </span>
        </div>
        <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg divide-y divide-gray-100">
          {certEmps.map((emp) => (
            <div key={emp.empId} className="flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-50">
              <div>
                <span className="font-medium text-gray-900">{emp.name}</span>
                <span className="text-gray-400 text-xs ml-2">{emp.empId} · {emp.centre} · {emp.cadre}</span>
              </div>
              <span className="text-gray-700 font-medium">{fmt(calcIncrement(emp.basic))}</span>
            </div>
          ))}
          {certEmps.length === 0 && (
            <p className="text-center text-gray-400 py-8 text-sm">No eligible employees match filter.</p>
          )}
        </div>
        <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              notify(`${certEmps.length} certificates submitted to EST Branch`);
              onClose();
            }}
          >
            Submit All for Approval
          </Button>
        </div>
      </div>
    </Modal>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function IncrementManagement() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState<ModalState | null>(null);
  const [search, setSearch] = useState("");
  const [filterCentre, setFilterCentre] = useState("all");
  const [filterCadre, setFilterCadre] = useState("all");
  const [processedIds, setProcessedIds] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkCertOpen, setBulkCertOpen] = useState(false);

  const notify = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const centres = [...new Set(employees.map((e) => e.centre))];
  const cadres = [...new Set(employees.map((e) => e.cadre))];

  const filtered = useMemo(() =>
    employees.filter((emp) => {
      const s = search.toLowerCase();
      return (
        (emp.name.toLowerCase().includes(s) || emp.empId.toLowerCase().includes(s)) &&
        (filterCentre === "all" || emp.centre === filterCentre) &&
        (filterCadre === "all" || emp.cadre === filterCadre)
      );
    }),
    [employees, search, filterCentre, filterCadre]
  );

  const dueEmps = filtered.filter((e) => isEligible(e) && !processedIds.has(e.empId));
  const processedEmps = filtered.filter((e) => processedIds.has(e.empId));
  const withheldEmps = filtered.filter((e) => e.incrementWithheld);
  const ineligibleEmps = filtered.filter((e) => !e.incrementWithheld && calcDutyDays(e) < 180);

  const totalAmt = employees.filter(isEligible).reduce((s, e) => s + calcIncrement(e.basic), 0);

  function processIncrement(empId: string) {
    setEmployees((prev) =>
      prev.map((emp) => {
        if (emp.empId !== empId) return emp;
        const newBasic = calcNewBasic(emp.basic);
        const effDate = getEffectiveDate(emp);
        const entry: ServiceBookEntry = {
          orderNo: `INC/${emp.centre.toUpperCase()}/${emp.empId}/${new Date().getFullYear()}`,
          date: new Date().toISOString().split("T")[0],
          basicBefore: emp.basic,
          newBasic,
          effectiveDate: effDate,
          daRate: DA_RATE,
        };
        return { ...emp, basic: newBasic, lastIncrementDate: effDate, serviceBook: [...emp.serviceBook, entry] };
      })
    );
    setProcessedIds((prev) => new Set([...prev, empId]));
    notify(`Increment processed & Pay Master updated — ${empId}`);
  }

  function processBulk() {
    const ids = [...selectedIds].filter((id) => isEligible(employees.find((e) => e.empId === id)!));
    if (!ids.length) { notify("No eligible employees selected."); return; }
    ids.forEach(processIncrement);
    setSelectedIds(new Set());
    notify(`${ids.length} increments processed.`);
  }

  function saveWithhold(empId: string, data: { reason: string; period: string; withheld: boolean }) {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.empId !== empId
          ? emp
          : { ...emp, incrementWithheld: data.withheld, withheldReason: data.reason, withheldPeriod: data.period }
      )
    );
    setModal(null);
    notify(data.withheld ? `Increment withheld — ${empId}` : `Increment restored — ${empId}`);
  }

  function toggleSelect(id: string) {
    setSelectedIds((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  const tableProps = {
    processedIds,
    selectedIds,
    onProcess: processIncrement,
    onToggleSelect: toggleSelect,
    onOpenModal: setModal,
  };

  return (
    <div className="space-y-6">
      <Toast msg={toast} onClose={() => setToast("")} />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Increment Management</h1>
          <p className="text-gray-500 mt-1">Annual Increment Processing — Effective July 1st</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setBulkCertOpen(true)}>
            <FileText className="w-4 h-4" />
            Generate Certificates
          </Button>
          <Button className="flex items-center gap-2" onClick={processBulk}>
            <ArrowUpCircle className="w-4 h-4" />
            Process Selected
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Due for Increment (July 2026)</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{employees.filter(isEligible).length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Processed This Cycle</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{processedIds.size}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Increment Withheld</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{employees.filter((e) => e.incrementWithheld).length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Total Increment Amount</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">₹{(totalAmt / 100000).toFixed(1)} L</p>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or employee ID..."
                className="pl-9"
              />
            </div>
            <select
              value={filterCentre}
              onChange={(e) => setFilterCentre(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            >
              <option value="all">All Centres</option>
              {centres.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={filterCadre}
              onChange={(e) => setFilterCadre(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            >
              <option value="all">All Cadres</option>
              {cadres.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="due" className="space-y-4">
        <TabsList>
          <TabsTrigger value="due">
            Due for Increment
            <Badge className="ml-2 bg-gray-100 text-gray-700">{dueEmps.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="processed">
            Processed
            <Badge className="ml-2 bg-gray-100 text-gray-700">{processedEmps.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="withheld">
            Withheld
            <Badge className="ml-2 bg-gray-100 text-gray-700">{withheldEmps.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="ineligible">
            Ineligible
            <Badge className="ml-2 bg-gray-100 text-gray-700">{ineligibleEmps.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="all">
            All Employees
            <Badge className="ml-2 bg-gray-100 text-gray-700">{filtered.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="due">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Due for Increment — July 2026</CardTitle>
                {selectedIds.size > 0 && (
                  <span className="text-sm text-blue-600 font-medium">{selectedIds.size} selected</span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <IncrementTable
                employees={dueEmps}
                {...tableProps}
                onSelectAll={(checked) =>
                  setSelectedIds(checked ? new Set(dueEmps.map((e) => e.empId)) : new Set())
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processed">
          <Card>
            <CardHeader>
              <CardTitle>Processed Increments</CardTitle>
            </CardHeader>
            <CardContent>
              <IncrementTable
                employees={processedEmps}
                {...tableProps}
                onSelectAll={(checked) =>
                  setSelectedIds(checked ? new Set(processedEmps.map((e) => e.empId)) : new Set())
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withheld">
          <Card>
            <CardHeader>
              <CardTitle>Withheld Increments</CardTitle>
            </CardHeader>
            <CardContent>
              {withheldEmps.length === 0 ? (
                <p className="text-center text-gray-400 py-12 text-sm">No withheld increments.</p>
              ) : (
                <div className="space-y-3">
                  {withheldEmps.map((emp) => (
                    <div key={emp.empId} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                          <p className="text-xs text-gray-500">{emp.empId} · {emp.designation} · {emp.department}</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800">Withheld</Badge>
                      </div>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600">
                        <p><strong>Reason:</strong> {emp.withheldReason}</p>
                        <p><strong>Period:</strong> {emp.withheldPeriod || "Permanent"}</p>
                        <p><strong>Basic Pay:</strong> {fmt(emp.basic)}</p>
                        <p><strong>Increment (if restored):</strong> {fmt(calcIncrement(emp.basic))}</p>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setModal({ type: "withhold", emp })}
                        >
                          Modify / Restore
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setModal({ type: "servicebook", emp })}
                        >
                          <BookOpen className="w-4 h-4 mr-1" /> Service Book
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ineligible">
          <Card>
            <CardHeader>
              <CardTitle>Ineligible Employees ({"< 180 days service"})</CardTitle>
            </CardHeader>
            <CardContent>
              {ineligibleEmps.length === 0 ? (
                <p className="text-center text-gray-400 py-12 text-sm">No ineligible employees.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        {["Employee", "Date of Joining", "Duty Days", "Shortfall", "Basic Pay", "Eligible From"].map((h) => (
                          <th key={h} className="text-left py-3 px-4 font-semibold text-sm text-gray-700">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ineligibleEmps.map((emp) => {
                        const dutyDays = calcDutyDays(emp);
                        const shortfall = 180 - dutyDays;
                        const eligibleFrom = new Date(new Date(emp.doj).getTime() + 180 * 86400000)
                          .toISOString().split("T")[0];
                        return (
                          <tr key={emp.empId} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <p className="text-sm font-medium text-gray-900">{emp.name}</p>
                              <p className="text-xs text-gray-500">{emp.empId} · {emp.designation}</p>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">{emp.doj}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{dutyDays} days</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-gray-100 text-gray-600">{shortfall} days short</Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">{fmt(emp.basic)}</td>
                            <td className="py-3 px-4 text-sm text-gray-600">{eligibleFrom}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Employees ({filtered.length})</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <IncrementTable
                employees={filtered}
                {...tableProps}
                onSelectAll={(checked) =>
                  setSelectedIds(checked ? new Set(filtered.map((e) => e.empId)) : new Set())
                }
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Increment Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg space-y-1.5 text-sm text-gray-700">
            {[
              ["Increment Rate", "3% of Basic Pay"],
              ["DA Component", `${DA_RATE}% on new Basic as on date of increment`],
              ["Effective Date", "July 1st of every year"],
              ["Rounding", "Rounded to nearest ₹100"],
              ["Eligibility", "Must have completed 6 months / 180 days of regular service"],
              ["On Leave", "Effective date updated to joining date after leave period"],
              ["Withholding", "Can be withheld for adverse ACR remarks / disciplinary action"],
              ["Service Book", "All increment orders recorded in digital service book"],
            ].map(([k, v]) => (
              <p key={k}>• <strong>{k}:</strong> {v}</p>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Certificate Modal */}
      <Modal
        open={modal?.type === "cert"}
        onClose={() => setModal(null)}
        title={`Increment Certificate — ${modal?.emp.name ?? ""}`}
        wide
      >
        {modal?.type === "cert" && <CertificateContent emp={modal.emp} />}
        <div className="flex justify-end mt-4">
          <Button onClick={() => { notify("Submitted for EST Branch approval"); setModal(null); }}>
            Submit for Approval
          </Button>
        </div>
      </Modal>

      {/* Withhold Modal */}
      <Modal
        open={modal?.type === "withhold"}
        onClose={() => setModal(null)}
        title={`Withhold Increment — ${modal?.emp.name ?? ""}`}
      >
        {modal?.type === "withhold" && (
          <WithholdContent
            emp={modal.emp}
            onSave={(d) => saveWithhold(modal.emp.empId, d)}
            onClose={() => setModal(null)}
          />
        )}
      </Modal>

      {/* Service Book Modal */}
      <Modal
        open={modal?.type === "servicebook"}
        onClose={() => setModal(null)}
        title="Digital Service Book — Increment Records"
      >
        {modal?.type === "servicebook" && <ServiceBookContent emp={modal.emp} />}
      </Modal>

      {/* Bulk Certificate Modal */}
      <BulkCertModal
        open={bulkCertOpen}
        onClose={() => setBulkCertOpen(false)}
        employees={employees}
        notify={notify}
      />
    </div>
  );
}