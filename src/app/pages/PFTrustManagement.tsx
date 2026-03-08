// import { PiggyBank, TrendingUp, Download, FileText, CheckCircle } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// const pfSummary = {
//   totalMembers: 2789,
//   totalCorpus: 15680000000, // 156.8 Crores
//   employeeContribution: 7840000000,
//   employerContribution: 7840000000,
//   interestRate: 8.25,
//   fyInterest: 1234560000,
// };

// const pfLedgers = [
//   {
//     empId: "EMP001",
//     name: "Rajesh Kumar",
//     pfNumber: "DL/123456/789",
//     openingBalance: 640000,
//     empContribution: 64800,
//     empContribution2: 64800,
//     yearlyInterest: 52800,
//     closingBalance: 822400,
//     tenure: "9.8 years",
//   },
//   {
//     empId: "EMP002",
//     name: "Priya Sharma",
//     pfNumber: "DL/123456/790",
//     openingBalance: 420000,
//     empContribution: 74880,
//     empContribution2: 74880,
//     yearlyInterest: 34650,
//     closingBalance: 604410,
//     tenure: "6.7 years",
//   },
//   {
//     empId: "EMP003",
//     name: "Amit Patel",
//     pfNumber: "DL/123456/791",
//     openingBalance: 920000,
//     empContribution: 83520,
//     empContribution2: 83520,
//     yearlyInterest: 75900,
//     closingBalance: 1162940,
//     tenure: "12.9 years",
//   },
// ];

// const advanceRequests = [
//   {
//     id: "PFA001",
//     empId: "EMP045",
//     name: "Sunita Verma",
//     type: "Medical Advance",
//     requestAmount: 50000,
//     eligibleAmount: 50000,
//     approvedAmount: 50000,
//     status: "Approved",
//     requestDate: "2026-02-10",
//   },
//   {
//     id: "PFA002",
//     empId: "EMP067",
//     name: "Vijay Singh",
//     type: "Housing Loan",
//     requestAmount: 500000,
//     eligibleAmount: 450000,
//     approvedAmount: 450000,
//     status: "Under Review",
//     requestDate: "2026-02-15",
//   },
//   {
//     id: "PFA003",
//     empId: "EMP089",
//     name: "Kavita Desai",
//     type: "Marriage Advance",
//     requestAmount: 100000,
//     eligibleAmount: 100000,
//     approvedAmount: 0,
//     status: "Pending",
//     requestDate: "2026-02-18",
//   },
// ];

// const withdrawalRequests = [
//   {
//     id: "PFW001",
//     empId: "EMP234",
//     name: "Ramesh Chandra",
//     type: "Partial Withdrawal",
//     reason: "Higher Education",
//     requestAmount: 200000,
//     eligibleAmount: 200000,
//     status: "Approved",
//     processDate: "2026-03-01",
//   },
//   {
//     id: "PFW002",
//     empId: "EMP345",
//     name: "Anita Rao",
//     type: "Final Settlement",
//     reason: "Retirement",
//     requestAmount: 1850000,
//     eligibleAmount: 1850000,
//     status: "Processing",
//     processDate: "2026-03-15",
//   },
// ];

// export default function PFTrustManagement() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">PF Trust Management</h1>
//           <p className="text-gray-500 mt-1">Internal Provident Fund - FY 2025-26</p>
//         </div>
//         <Button variant="outline" className="flex items-center gap-2">
//           <FileText className="w-4 h-4" />
//           Generate PF Statements
//         </Button>
//       </div>

//       {/* PF Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardContent className="p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-gray-600">Total PF Members</p>
//                 <p className="text-2xl font-bold text-gray-900 mt-1">{pfSummary.totalMembers.toLocaleString()}</p>
//               </div>
//               <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
//                 <PiggyBank className="w-6 h-6 text-white" />
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <div>
//               <p className="text-sm text-gray-600">Total PF Corpus</p>
//               <p className="text-2xl font-bold text-green-600 mt-1">
//                 ₹{(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <div>
//               <p className="text-sm text-gray-600">Interest Rate (FY 2025-26)</p>
//               <p className="text-2xl font-bold text-blue-600 mt-1">{pfSummary.interestRate}%</p>
//               <p className="text-xs text-gray-500 mt-1">As per Government notification</p>
//             </div>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-6">
//             <div>
//               <p className="text-sm text-gray-600">FY Interest Accrued</p>
//               <p className="text-2xl font-bold text-purple-600 mt-1">
//                 ₹{(pfSummary.fyInterest / 10000000).toFixed(2)} Cr
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Tabs defaultValue="ledgers" className="space-y-6">
//         <TabsList>
//           <TabsTrigger value="ledgers">PF Ledgers</TabsTrigger>
//           <TabsTrigger value="advances">Advances/Loans</TabsTrigger>
//           <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
//           <TabsTrigger value="interest">Interest Calculation</TabsTrigger>
//         </TabsList>

//         <TabsContent value="ledgers">
//           <Card>
//             <CardHeader>
//               <CardTitle>Individual PF Ledgers</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="mb-4 p-4 bg-blue-50 rounded-lg">
//                 <p className="text-sm text-blue-900">
//                   <strong>PF Calculation:</strong> 12% Employee Contribution + 12% Employer Contribution on Basic + DA
//                 </p>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">PF Number</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Opening Balance</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Emp Contribution (FY)</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Employer Contribution (FY)</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Interest Earned</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Closing Balance</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Tenure</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {pfLedgers.map((ledger) => (
//                       <tr key={ledger.empId} className="border-b border-gray-100 hover:bg-gray-50">
//                         <td className="py-3 px-4">
//                           <div>
//                             <p className="text-sm font-medium text-gray-900">{ledger.name}</p>
//                             <p className="text-xs text-gray-500">{ledger.empId}</p>
//                           </div>
//                         </td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{ledger.pfNumber}</td>
//                         <td className="py-3 px-4 text-right text-sm text-gray-600">
//                           ₹{ledger.openingBalance.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm text-green-600">
//                           ₹{ledger.empContribution.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm text-green-600">
//                           ₹{ledger.empContribution2.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm text-blue-600">
//                           ₹{ledger.yearlyInterest.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm font-semibold text-gray-900">
//                           ₹{ledger.closingBalance.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{ledger.tenure}</td>
//                         <td className="py-3 px-4">
//                           <Button variant="ghost" size="sm">
//                             <FileText className="w-4 h-4" />
//                           </Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="advances">
//           <Card>
//             <CardHeader>
//               <CardTitle>PF Advances & Loans</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="mb-4 p-4 bg-blue-50 rounded-lg">
//                 <h4 className="font-semibold text-blue-900 mb-2">PF Advance Types</h4>
//                 <ul className="text-sm text-blue-800 space-y-1">
//                   <li>• <strong>Medical Advance:</strong> Up to 50% of employee's contribution for medical emergency</li>
//                   <li>• <strong>Marriage Advance:</strong> Up to 50% of employee's contribution for self/children's marriage</li>
//                   <li>• <strong>Housing Loan:</strong> Up to 90% of PF balance for house construction/purchase</li>
//                   <li>• <strong>Religious Ceremony:</strong> Up to 50% of employee's contribution</li>
//                 </ul>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Request ID</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Advance Type</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Request Amount</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Eligible Amount</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Approved Amount</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Request Date</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {advanceRequests.map((request) => (
//                       <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
//                         <td className="py-3 px-4 text-sm font-medium text-blue-600">{request.id}</td>
//                         <td className="py-3 px-4">
//                           <div>
//                             <p className="text-sm font-medium text-gray-900">{request.name}</p>
//                             <p className="text-xs text-gray-500">{request.empId}</p>
//                           </div>
//                         </td>
//                         <td className="py-3 px-4 text-sm text-gray-900">{request.type}</td>
//                         <td className="py-3 px-4 text-right text-sm text-gray-600">
//                           ₹{request.requestAmount.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm text-blue-600">
//                           ₹{request.eligibleAmount.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm font-medium text-green-600">
//                           {request.approvedAmount > 0 ? `₹${request.approvedAmount.toLocaleString()}` : "-"}
//                         </td>
//                         <td className="py-3 px-4">
//                           <Badge className={
//                             request.status === "Approved" ? "bg-green-100 text-green-800" :
//                             request.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
//                             "bg-gray-100 text-gray-800"
//                           }>
//                             {request.status}
//                           </Badge>
//                         </td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{request.requestDate}</td>
//                         <td className="py-3 px-4">
//                           <Button variant="outline" size="sm">Review</Button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="withdrawals">
//           <Card>
//             <CardHeader>
//               <CardTitle>PF Withdrawal Requests</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="mb-4 p-4 bg-blue-50 rounded-lg">
//                 <h4 className="font-semibold text-blue-900 mb-2">Withdrawal Types</h4>
//                 <ul className="text-sm text-blue-800 space-y-1">
//                   <li>• <strong>Partial Withdrawal:</strong> For specific purposes (education, medical, etc.) with eligibility criteria</li>
//                   <li>• <strong>Final Settlement:</strong> On retirement, resignation, or death - full PF balance with interest</li>
//                 </ul>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-gray-200">
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Withdrawal ID</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Type</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Reason</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Request Amount</th>
//                       <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Eligible Amount</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
//                       <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Process Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {withdrawalRequests.map((request) => (
//                       <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
//                         <td className="py-3 px-4 text-sm font-medium text-blue-600">{request.id}</td>
//                         <td className="py-3 px-4">
//                           <div>
//                             <p className="text-sm font-medium text-gray-900">{request.name}</p>
//                             <p className="text-xs text-gray-500">{request.empId}</p>
//                           </div>
//                         </td>
//                         <td className="py-3 px-4 text-sm text-gray-900">{request.type}</td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{request.reason}</td>
//                         <td className="py-3 px-4 text-right text-sm text-gray-600">
//                           ₹{request.requestAmount.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4 text-right text-sm font-medium text-green-600">
//                           ₹{request.eligibleAmount.toLocaleString()}
//                         </td>
//                         <td className="py-3 px-4">
//                           <Badge className={
//                             request.status === "Approved" ? "bg-green-100 text-green-800" :
//                             "bg-yellow-100 text-yellow-800"
//                           }>
//                             {request.status}
//                           </Badge>
//                         </td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{request.processDate}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="interest">
//           <Card>
//             <CardHeader>
//               <CardTitle>Annual Interest Calculation & Posting</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
//                   <h4 className="font-semibold text-green-900 mb-2">FY 2025-26 Interest Details</h4>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <div>
//                       <p className="text-sm text-green-700">Interest Rate</p>
//                       <p className="text-2xl font-bold text-green-900">{pfSummary.interestRate}%</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-green-700">Total Corpus</p>
//                       <p className="text-2xl font-bold text-green-900">₹{(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-green-700">Interest Calculated</p>
//                       <p className="text-2xl font-bold text-green-900">₹{(pfSummary.fyInterest / 10000000).toFixed(2)} Cr</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-green-700">Status</p>
//                       <Badge className="bg-green-600 text-white mt-2">Posted to Accounts</Badge>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-4 border border-gray-200 rounded-lg">
//                   <h4 className="font-semibold text-gray-900 mb-3">Interest Calculation Process</h4>
//                   <div className="space-y-2 text-sm text-gray-700">
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span>Monthly PF contributions posted to individual ledgers</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span>Interest calculated on opening balance + monthly contributions</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span>Interest rate as per government notification: {pfSummary.interestRate}%</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span>Interest credited to individual accounts on March 31st</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CheckCircle className="w-4 h-4 text-green-600" />
//                       <span>Annual PF statements generated and issued to all members</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <Button className="flex items-center gap-2">
//                     <TrendingUp className="w-4 h-4" />
//                     Calculate Interest
//                   </Button>
//                   <Button variant="outline" className="flex items-center gap-2">
//                     <FileText className="w-4 h-4" />
//                     Generate Annual Statements
//                   </Button>
//                   <Button variant="outline" className="flex items-center gap-2">
//                     <Download className="w-4 h-4" />
//                     Export Report
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }


import { useState } from "react";
import {
  PiggyBank, TrendingUp, Download, FileText, CheckCircle,
  Plus, Eye, X, Search, Users, Shield, CreditCard,
  BarChart2, Bell, Info, ChevronRight, Printer,
  Calendar, BookOpen, Building2, AlertCircle, RefreshCw
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────
type Tab = "overview" | "ledgers" | "nominations" | "advances" | "withdrawals" | "interest" | "statements";
type ModalType = "viewLedger" | "viewNomination" | "editNomination" | "viewAdvance" | "generateStatement" | "viewWithdrawal" | null;

// ── Static Data ────────────────────────────────────────────────
const pfSummary = {
  totalMembers: 2789,
  totalCorpus: 15680000000,
  employeeContribution: 7840000000,
  employerContribution: 7840000000,
  interestRate: 8.25,
  fyInterest: 1294200000,
};

const pfLedgers = [
  { empId: "MSWC/001", name: "Rajesh Kumar", dept: "Finance", pfNumber: "MH/MSWC/001/2008", openingBalance: 640000, empContrib: 64800, empContrib2: 64800, interest: 52800, closingBalance: 822400, tenure: "9.8 yrs", joinDate: "12 Mar 2008", status: "Active" },
  { empId: "MSWC/002", name: "Priya Sharma", dept: "Engineering", pfNumber: "MH/MSWC/002/2015", openingBalance: 420000, empContrib: 74880, empContrib2: 74880, interest: 34650, closingBalance: 604410, tenure: "6.7 yrs", joinDate: "5 Jun 2015", status: "Active" },
  { empId: "MSWC/003", name: "Amit Patel", dept: "Administration", pfNumber: "MH/MSWC/003/2001", openingBalance: 920000, empContrib: 83520, empContrib2: 83520, interest: 75900, closingBalance: 1162940, tenure: "12.9 yrs", joinDate: "18 Jan 2001", status: "Active" },
  { empId: "MSWC/004", name: "Sunita Verma", dept: "Medical", pfNumber: "MH/MSWC/004/2012", openingBalance: 310000, empContrib: 54720, empContrib2: 54720, interest: 25575, closingBalance: 445015, tenure: "8.1 yrs", joinDate: "2 Sep 2012", status: "Active" },
  { empId: "MSWC/005", name: "Vijay Singh", dept: "Education", pfNumber: "MH/MSWC/005/2005", openingBalance: 890000, empContrib: 89280, empContrib2: 89280, interest: 73425, closingBalance: 1141985, tenure: "15.2 yrs", joinDate: "14 Apr 2005", status: "Active" },
];

const nominations = [
  {
    empId: "MSWC/001", name: "Rajesh Kumar", dept: "Finance",
    pf: { nominee: "Meena Kumar", relation: "Spouse", share: 100, dob: "15 Jun 1985" },
    gratuity: { nominee: "Meena Kumar", relation: "Spouse", share: 100 },
    gslis: { nominee: "Meena Kumar", relation: "Spouse", share: 60, nominee2: "Arun Kumar", relation2: "Son", share2: 40 },
    dcps: { nominee: "Meena Kumar", relation: "Spouse", share: 100 },
    lastUpdated: "12 Jan 2025", status: "Complete",
  },
  {
    empId: "MSWC/002", name: "Priya Sharma", dept: "Engineering",
    pf: { nominee: "Rakesh Sharma", relation: "Father", share: 100, dob: "03 Mar 1952" },
    gratuity: { nominee: "Rakesh Sharma", relation: "Father", share: 100 },
    gslis: { nominee: "Rakesh Sharma", relation: "Father", share: 100, nominee2: null, relation2: null, share2: null },
    dcps: { nominee: "Rakesh Sharma", relation: "Father", share: 100 },
    lastUpdated: "20 Mar 2024", status: "Complete",
  },
  {
    empId: "MSWC/003", name: "Amit Patel", dept: "Administration",
    pf: { nominee: "Kaveri Patel", relation: "Spouse", share: 100, dob: "22 Aug 1980" },
    gratuity: { nominee: "Kaveri Patel", relation: "Spouse", share: 50, nominee2: "Riya Patel", relation2: "Daughter", share2: 50 },
    gslis: { nominee: "Kaveri Patel", relation: "Spouse", share: 100, nominee2: null, relation2: null, share2: null },
    dcps: { nominee: "Kaveri Patel", relation: "Spouse", share: 100 },
    lastUpdated: "05 Dec 2024", status: "Complete",
  },
  {
    empId: "MSWC/004", name: "Sunita Verma", dept: "Medical",
    pf: { nominee: "Sanjay Verma", relation: "Spouse", share: 100, dob: "11 Nov 1978" },
    gratuity: { nominee: "Sanjay Verma", relation: "Spouse", share: 100 },
    gslis: { nominee: null, relation: null, share: null, nominee2: null, relation2: null, share2: null },
    dcps: { nominee: "Sanjay Verma", relation: "Spouse", share: 100 },
    lastUpdated: "—", status: "GSLIS Pending",
  },
  {
    empId: "MSWC/005", name: "Vijay Singh", dept: "Education",
    pf: { nominee: "Anita Singh", relation: "Spouse", share: 100, dob: "07 Feb 1977" },
    gratuity: { nominee: "Anita Singh", relation: "Spouse", share: 100 },
    gslis: { nominee: "Anita Singh", relation: "Spouse", share: 100, nominee2: null, relation2: null, share2: null },
    dcps: { nominee: null, relation: null, share: null, nominee2: null, relation2: null, share2: null },
    lastUpdated: "—", status: "DCPS Pending",
  },
];

const advanceRequests = [
  { id: "PFA/2026/001", empId: "MSWC/045", name: "Sunita Verma", pfBalance: 445000, type: "Medical Advance", reason: "Hospitalization — Apollo Hospital", requested: 50000, eligible: 50000, approved: 50000, status: "Approved", date: "10 Feb 2026", approvedBy: "Sh. D.K. Nair", repayMonths: 36 },
  { id: "PFA/2026/002", empId: "MSWC/067", name: "Vijay Singh", pfBalance: 1141985, type: "Housing Loan", reason: "House construction — Pune", requested: 500000, eligible: 450000, approved: 450000, status: "Under Review", date: "15 Feb 2026", approvedBy: "—", repayMonths: 60 },
  { id: "PFA/2026/003", empId: "MSWC/089", name: "Kavita Desai", pfBalance: 280000, type: "Marriage Advance", reason: "Daughter's marriage", requested: 100000, eligible: 100000, approved: 0, status: "Pending", date: "18 Feb 2026", approvedBy: "—", repayMonths: 24 },
  { id: "PFA/2026/004", empId: "MSWC/112", name: "Anil Gupta", pfBalance: 620000, type: "Religious Ceremony", reason: "Pilgrimage", requested: 75000, eligible: 75000, approved: 0, status: "Pending", date: "20 Feb 2026", approvedBy: "—", repayMonths: 12 },
];

const withdrawalRequests = [
  { id: "PFW/2026/001", empId: "MSWC/234", name: "Ramesh Chandra", type: "Partial Withdrawal", reason: "Higher Education — Son", empBalance: 840000, empContrib: 420000, requested: 200000, eligible: 200000, status: "Approved", processDate: "01 Mar 2026", tds: 0 },
  { id: "PFW/2026/002", empId: "MSWC/345", name: "Anita Rao", type: "Final Settlement", reason: "Retirement", empBalance: 1850000, empContrib: 925000, requested: 1850000, eligible: 1850000, status: "Processing", processDate: "15 Mar 2026", tds: 0 },
  { id: "PFW/2026/003", empId: "MSWC/178", name: "K.P. Joshi", type: "Partial Withdrawal", reason: "Medical Treatment", empBalance: 560000, empContrib: 280000, requested: 120000, eligible: 120000, status: "Pending", processDate: "20 Mar 2026", tds: 0 },
];

const contributionStatements = [
  { period: "February 2026", type: "Monthly", empTotal: 22200000, emplrTotal: 22200000, interest: 0, members: 2789, status: "Generated", generatedOn: "03 Mar 2026" },
  { period: "January 2026", type: "Monthly", empTotal: 21900000, emplrTotal: 21900000, interest: 0, members: 2789, status: "Generated", generatedOn: "03 Feb 2026" },
  { period: "Q3 FY 2025-26 (Oct–Dec)", type: "Quarterly", empTotal: 65400000, emplrTotal: 65400000, interest: 5390000, members: 2782, status: "Generated", generatedOn: "05 Jan 2026" },
  { period: "Q2 FY 2025-26 (Jul–Sep)", type: "Quarterly", empTotal: 64800000, emplrTotal: 64800000, interest: 5346000, members: 2778, status: "Generated", generatedOn: "05 Oct 2025" },
  { period: "FY 2024-25 (Annual)", type: "Annual", empTotal: 258000000, emplrTotal: 258000000, interest: 21285000, members: 2765, status: "Generated", generatedOn: "30 Apr 2025" },
];

const interestHistory = [
  { fy: "FY 2025-26", rate: 8.25, corpus: "₹156.8 Cr", interest: "₹12.94 Cr", status: "Posted" },
  { fy: "FY 2024-25", rate: 8.25, corpus: "₹142.5 Cr", interest: "₹11.76 Cr", status: "Posted" },
  { fy: "FY 2023-24", rate: 8.15, corpus: "₹128.2 Cr", interest: "₹10.45 Cr", status: "Posted" },
  { fy: "FY 2022-23", rate: 8.10, corpus: "₹115.6 Cr", interest: "₹9.36 Cr", status: "Posted" },
];

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "overview",    label: "Overview",        icon: BarChart2  },
  { id: "ledgers",     label: "PF Ledgers",      icon: BookOpen   },
  { id: "nominations", label: "Nominations",     icon: Users      },
  { id: "advances",    label: "Advances & Loans",icon: CreditCard },
  { id: "withdrawals", label: "Withdrawals",     icon: Download   },
  { id: "interest",    label: "Interest",        icon: TrendingUp },
  { id: "statements",  label: "Statements",      icon: FileText   },
];

export default function PFTrustManagement() {
  const [tab, setTab] = useState<Tab>("overview");
  const [modal, setModal] = useState<ModalType>(null);
  const [selectedLedger, setSelectedLedger] = useState<typeof pfLedgers[0] | null>(null);
  const [selectedNomination, setSelectedNomination] = useState<typeof nominations[0] | null>(null);
  const [selectedAdvance, setSelectedAdvance] = useState<typeof advanceRequests[0] | null>(null);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState<typeof withdrawalRequests[0] | null>(null);
  const [search, setSearch] = useState("");
  const [statementType, setStatementType] = useState("Monthly");
  const [statementPeriod, setStatementPeriod] = useState("feb2026");

  const pendingNominations = nominations.filter(n => n.status !== "Complete").length;

  return (
    <div className="bg-gray-50 min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* ── Header ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <PiggyBank className="w-5 h-5 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">PF Trust Management</h1>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">MSWC Internal PF Trust · FY 2025–26</span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">Maharashtra State Warehousing Corporation — Employee Provident Fund, Gratuity, GSLIS & DCPS</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={() => setModal("generateStatement")}
              className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 bg-white transition-all whitespace-nowrap">
              <FileText className="w-4 h-4" />Generate Statement
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-all whitespace-nowrap">
              <Download className="w-4 h-4" />Export All
            </button>
          </div>
        </div>
      </div>

      {/* ── Alert ── */}
      {/* {pendingNominations > 0 && (
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-orange-800">
            <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span><strong>{pendingNominations} employees</strong> have incomplete nomination records — PF/GSLIS/DCPS nominees must be recorded for all employees.</span>
          </div>
          <button onClick={() => setTab("nominations")}
            className="text-xs font-semibold text-orange-700 underline underline-offset-2 ml-4 whitespace-nowrap">View →</button>
        </div>
      )} */}

      {/* ── Tab Nav ── */}
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

      <div className="p-3 space-y-5 mt-2">

        {/* ══ OVERVIEW ══ */}
        {tab === "overview" && (
          <div className="space-y-5">
            {/* KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total PF Members", value: pfSummary.totalMembers.toLocaleString(), sub: "Active employees", icon: Users, color: "bg-blue-600" },
                { label: "Total PF Corpus", value: `₹${(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr`, sub: "As on Mar 2026", icon: PiggyBank, color: "bg-gray-700" },
                { label: "Interest Rate FY 25-26", value: `${pfSummary.interestRate}%`, sub: "As per Govt. notification", icon: TrendingUp, color: "bg-blue-700" },
                { label: "FY Interest Accrued", value: `₹${(pfSummary.fyInterest / 10000000).toFixed(2)} Cr`, sub: "Credited 31 Mar 2026", icon: BarChart2, color: "bg-gray-600" },
              ].map(k => (
                <div key={k.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500">{k.label}</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">{k.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{k.sub}</p>
                  </div>
                  <div className={`${k.color} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <k.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {/* Contribution split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">FY 2025-26 Contribution Summary</h3>
                <div className="space-y-4">
                  {[
                    { label: "Employee Contributions (12% on Basic+DA)", value: pfSummary.employeeContribution, pct: 50, color: "bg-blue-500" },
                    { label: "Employer Contributions (12% on Basic+DA)", value: pfSummary.employerContribution, pct: 50, color: "bg-gray-600" },
                    { label: "Interest Accrued (8.25%)", value: pfSummary.fyInterest, pct: 8.25, color: "bg-green-500" },
                  ].map(c => (
                    <div key={c.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">{c.label}</span>
                        <span className="font-semibold text-gray-900">₹{(c.value / 10000000).toFixed(2)} Cr</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`h-2 rounded-full ${c.color}`} style={{ width: `${Math.min(c.pct * 2, 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-sm">
                  <span className="font-semibold text-gray-900">Total Corpus (inc. interest)</span>
                  <span className="font-bold text-blue-700">₹{(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <h3 className="font-semibold text-gray-900 text-sm mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { label: "View PF Ledgers", action: () => setTab("ledgers") },
                    { label: "Update Nominations", action: () => setTab("nominations") },
                    { label: "Process Advances/Loans", action: () => setTab("advances") },
                    { label: "PF Withdrawals", action: () => setTab("withdrawals") },
                    { label: "Calculate Annual Interest", action: () => setTab("interest") },
                    { label: "Generate Statements", action: () => setModal("generateStatement") },
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

            {/* Scheme info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Provident Fund (PF)", desc: "12% employee + 12% employer contribution on Basic + DA. Interest @ 8.25% p.a.", tag: "PF" },
                { title: "Gratuity", desc: "15 days salary per year of service. Payable on retirement / resignation after 5 years.", tag: "Gratuity" },
                { title: "Group Savings Linked Insurance (GSLIS)", desc: "Insurance cover linked to savings. Nominee receives sum assured on death of member.", tag: "GSLIS" },
                { title: "Defined Contributory Pension (DCPS)", desc: "Employee + employer contribution. Nominee entitled to pension on death / retirement.", tag: "DCPS" },
              ].map(s => (
                <div key={s.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">{s.tag}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ PF LEDGERS ══ */}
        {tab === "ledgers" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search by name, ID or PF number..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all">
                <Download className="w-4 h-4" />Export
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-3">
              <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <p className="text-xs text-blue-800"><strong>PF Calculation:</strong> 12% Employee + 12% Employer Contribution on Basic + DA. Interest credited annually at government-notified rate. Click any row to view full ledger details.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {["Employee", "PF Number", "Opening Balance", "Emp Contribution (FY)", "Employer Contribution (FY)", "Interest Earned", "Closing Balance", "Tenure", "Status", "Actions"].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pfLedgers.filter(l => !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.empId.toLowerCase().includes(search.toLowerCase()) || l.pfNumber.toLowerCase().includes(search.toLowerCase())).map((l, i) => (
                      <tr key={l.empId} className={`border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-pointer ${i % 2 === 1 ? "bg-gray-50/30" : ""}`}
                        onClick={() => { setSelectedLedger(l); setModal("viewLedger"); }}>
                        <td className="py-3 px-3">
                          <p className="text-xs font-semibold text-blue-600">{l.empId}</p>
                          <p className="text-xs text-gray-700">{l.name}</p>
                          <p className="text-xs text-gray-400">{l.dept}</p>
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-600 font-mono">{l.pfNumber}</td>
                        <td className="py-3 px-3 text-xs text-gray-700">₹{l.openingBalance.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs font-medium text-gray-900">₹{l.empContrib.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs font-medium text-gray-900">₹{l.empContrib2.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs font-medium text-green-600">₹{l.interest.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs font-bold text-gray-900">₹{l.closingBalance.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs text-gray-500">{l.tenure}</td>
                        <td className="py-3 px-3">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{l.status}</span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex gap-1" onClick={e => e.stopPropagation()}>
                            <button onClick={() => { setSelectedLedger(l); setModal("viewLedger"); }}
                              className="p-1.5 rounded hover:bg-blue-100 text-gray-400 hover:text-blue-600 transition-colors" title="View Ledger">
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Download Statement">
                              <Download className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Print">
                              <Printer className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50 border-t border-gray-200">
                    <tr>
                      <td colSpan={2} className="py-3 px-3 text-xs font-semibold text-gray-600">TOTAL ({pfLedgers.length} members shown)</td>
                      <td className="py-3 px-3 text-xs font-bold text-gray-900">₹{pfLedgers.reduce((s, l) => s + l.openingBalance, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-gray-900">₹{pfLedgers.reduce((s, l) => s + l.empContrib, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-gray-900">₹{pfLedgers.reduce((s, l) => s + l.empContrib2, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-green-600">₹{pfLedgers.reduce((s, l) => s + l.interest, 0).toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs font-bold text-gray-900">₹{pfLedgers.reduce((s, l) => s + l.closingBalance, 0).toLocaleString()}</td>
                      <td colSpan={3} />
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ══ NOMINATIONS ══ */}
        {tab === "nominations" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Nomination records</strong> must be maintained for every employee for all four schemes: <strong>PF, Gratuity, GSLIS, and DCPS</strong>.
                The nominee receives benefits on the death or retirement of the employee. Nominations must be recorded at joining and updated on any family status change.
                Incomplete nominations are flagged and must be regularized immediately.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Total Employees", value: nominations.length.toString(), sub: "With nomination records" },
                { label: "Complete Records", value: nominations.filter(n => n.status === "Complete").length.toString(), sub: "All 4 schemes filled" },
                { label: "Incomplete Records", value: nominations.filter(n => n.status !== "Complete").length.toString(), sub: "Action required" },
                { label: "Last Updated", value: "05 Dec 2024", sub: "Most recent nomination" },
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
                <h3 className="font-semibold text-gray-900 text-sm">Nomination Register — All Employees</h3>
                <button className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all">
                  <Download className="w-3.5 h-3.5" />Export Register
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">Employee</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">PF Nominee</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">Gratuity Nominee</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">GSLIS Nominee</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">DCPS Nominee</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">Last Updated</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">Status</th>
                      <th className="text-left py-3 px-3 text-xs font-semibold text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nominations.map((n, i) => (
                      <tr key={n.empId} className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${i % 2 === 1 ? "bg-gray-50/30" : ""}`}>
                        <td className="py-3 px-3">
                          <p className="text-xs font-semibold text-blue-600">{n.empId}</p>
                          <p className="text-xs text-gray-700">{n.name}</p>
                          <p className="text-xs text-gray-400">{n.dept}</p>
                        </td>
                        <td className="py-3 px-3">
                          {n.pf.nominee
                            ? <><p className="text-xs font-medium text-gray-900">{n.pf.nominee}</p><p className="text-xs text-gray-400">{n.pf.relation} · {n.pf.share}%</p></>
                            : <span className="text-xs text-orange-500 font-medium">Not Filed</span>}
                        </td>
                        <td className="py-3 px-3">
                          {n.gratuity.nominee
                            ? <><p className="text-xs font-medium text-gray-900">{n.gratuity.nominee}</p><p className="text-xs text-gray-400">{n.gratuity.relation} · {n.gratuity.share}%</p></>
                            : <span className="text-xs text-orange-500 font-medium">Not Filed</span>}
                        </td>
                        <td className="py-3 px-3">
                          {n.gslis.nominee
                            ? <><p className="text-xs font-medium text-gray-900">{n.gslis.nominee}</p><p className="text-xs text-gray-400">{n.gslis.relation} · {n.gslis.share}%{n.gslis.nominee2 ? ` + ${n.gslis.nominee2} (${n.gslis.share2}%)` : ""}</p></>
                            : <span className="text-xs text-red-500 font-medium">⚠ Pending</span>}
                        </td>
                        <td className="py-3 px-3">
                          {n.dcps.nominee
                            ? <><p className="text-xs font-medium text-gray-900">{n.dcps.nominee}</p><p className="text-xs text-gray-400">{n.dcps.relation} · {n.dcps.share}%</p></>
                            : <span className="text-xs text-red-500 font-medium">⚠ Pending</span>}
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-500">{n.lastUpdated}</td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            n.status === "Complete" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                          }`}>{n.status}</span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex gap-1">
                            <button onClick={() => { setSelectedNomination(n); setModal("viewNomination"); }}
                              className="text-xs px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50 flex items-center gap-1 transition-colors font-medium">
                              <Eye className="w-3 h-3" />View
                            </button>
                            <button onClick={() => { setSelectedNomination(n); setModal("editNomination"); }}
                              className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors font-medium">
                              Edit
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

        {/* ══ ADVANCES ══ */}
        {tab === "advances" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-gray-700 leading-relaxed">
                <strong>PF Advance Types:</strong> Medical Advance (up to 50% of employee's contribution), Marriage Advance (up to 50%), Housing Loan (up to 90% of PF balance), Religious Ceremony (up to 50%).
                All advances are repaid through payroll EMI deductions. Outstanding balance is adjusted in final settlement.
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Total Requests", value: advanceRequests.length.toString(), sub: "This quarter" },
                { label: "Approved Amount", value: `₹${advanceRequests.filter(a => a.status === "Approved").reduce((s, a) => s + a.approved, 0).toLocaleString()}`, sub: "Disbursed" },
                { label: "Pending Review", value: advanceRequests.filter(a => a.status !== "Approved").length.toString(), sub: "Awaiting action" },
                { label: "Total Requested", value: `₹${advanceRequests.reduce((s, a) => s + a.requested, 0).toLocaleString()}`, sub: "All requests" },
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
                <h3 className="font-semibold text-gray-900 text-sm">PF Advance & Loan Requests</h3>
                <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                  <Plus className="w-3.5 h-3.5" />New Request
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {["Request ID", "Employee", "PF Balance", "Advance Type", "Reason", "Requested", "Eligible", "Approved", "Repayment", "Status", "Actions"].map(h => (
                        <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {advanceRequests.map(a => (
                      <tr key={a.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-3 text-xs font-medium text-blue-600">{a.id}</td>
                        <td className="py-3 px-3">
                          <p className="text-xs font-medium text-gray-900">{a.name}</p>
                          <p className="text-xs text-gray-400">{a.empId}</p>
                        </td>
                        <td className="py-3 px-3 text-xs text-gray-600">₹{a.pfBalance.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs text-gray-700">{a.type}</td>
                        <td className="py-3 px-3 text-xs text-gray-500 max-w-32 truncate">{a.reason}</td>
                        <td className="py-3 px-3 text-xs text-gray-700">₹{a.requested.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs text-blue-600">₹{a.eligible.toLocaleString()}</td>
                        <td className="py-3 px-3 text-xs font-semibold text-gray-900">{a.approved > 0 ? `₹${a.approved.toLocaleString()}` : "—"}</td>
                        <td className="py-3 px-3 text-xs text-gray-500">{a.repayMonths} months</td>
                        <td className="py-3 px-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            a.status === "Approved" ? "bg-green-100 text-green-700"
                            : a.status === "Under Review" ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                          }`}>{a.status}</span>
                        </td>
                        <td className="py-3 px-3">
                          <div className="flex gap-1">
                            <button onClick={() => { setSelectedAdvance(a); setModal("viewAdvance"); }}
                              className="text-xs px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50 font-medium transition-colors">Review</button>
                            <button className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">Approve</button>
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

        {/* ══ WITHDRAWALS ══ */}
        {tab === "withdrawals" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Partial Withdrawal:</strong> Permitted for specific purposes (education, medical, house purchase) with eligibility criteria based on service years.
                <strong> Final Settlement:</strong> On retirement, resignation, or death — full PF balance + interest is paid. TDS applicable if service &lt; 5 years.
                All withdrawals require Finance approval and are linked to the Final Settlement module.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Pending Withdrawals", value: withdrawalRequests.filter(w => w.status === "Pending" || w.status === "Processing").length.toString(), sub: "Awaiting processing" },
                { label: "Total Amount", value: `₹${withdrawalRequests.reduce((s, w) => s + w.requested, 0).toLocaleString()}`, sub: "All requests" },
                { label: "Approved (FY)", value: "₹18.5 L", sub: "Apr 2025 – Feb 2026" },
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
                <h3 className="font-semibold text-gray-900 text-sm">PF Withdrawal Requests</h3>
                <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 rounded-lg text-xs font-medium text-white hover:bg-blue-700 transition-all">
                  <Plus className="w-3.5 h-3.5" />New Withdrawal
                </button>
              </div>
              <div className="overflow-x-auto">
              <table className="w-full text-sm ">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Withdrawal ID", "Employee", "Type", "Reason", "Emp PF Balance", "Requested", "Eligible", "TDS", "Status", "Process Date", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {withdrawalRequests.map(w => (
                    <tr key={w.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-medium text-blue-600">{w.id}</td>
                      <td className="py-3 px-3">
                        <p className="text-xs font-medium text-gray-900">{w.name}</p>
                        <p className="text-xs text-gray-400">{w.empId}</p>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-700">{w.type}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{w.reason}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{w.empBalance.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{w.requested.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-blue-600 font-medium">₹{w.eligible.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{w.tds === 0 ? "Nil" : `₹${w.tds.toLocaleString()}`}</td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          w.status === "Approved" ? "bg-green-100 text-green-700"
                          : w.status === "Processing" ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                        }`}>{w.status}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-500">{w.processDate}</td>
                      <td className="py-3 px-3">
                        <div className="flex gap-1">
                          <button onClick={() => { setSelectedWithdrawal(w); setModal("viewWithdrawal"); }}
                            className="text-xs px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50 flex items-center gap-1 font-medium transition-colors">
                            <Eye className="w-3 h-3" />View
                          </button>
                          <button className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">Approve</button>
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

        {/* ══ INTEREST ══ */}
        {tab === "interest" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 text-sm mb-4">FY 2025-26 Interest Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                {[
                  { label: "Interest Rate", value: `${pfSummary.interestRate}%`, sub: "Govt. Notified Rate" },
                  { label: "Total Corpus", value: `₹${(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr`, sub: "As on 31 Mar 2026" },
                  { label: "Interest Calculated", value: `₹${(pfSummary.fyInterest / 10000000).toFixed(2)} Cr`, sub: "Annual" },
                  { label: "Status", value: "Posted", sub: "31 Mar 2026" },
                ].map(k => (
                  <div key={k.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-gray-900">{k.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{k.label}</p>
                    <p className="text-xs text-gray-400">{k.sub}</p>
                  </div>
                ))}
              </div>

              <div className="border border-gray-100 rounded-xl p-4 mb-5">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Interest Calculation Process</h4>
                <div className="space-y-2">
                  {[
                    "Monthly PF contributions posted to individual ledgers on payroll processing",
                    "Interest calculated on opening balance + monthly contributions (product method)",
                    `Interest rate applied: ${pfSummary.interestRate}% p.a. as per Govt. of India notification`,
                    "Interest credited to individual PF accounts on 31st March every year",
                    "Annual PF statements generated and issued to all members",
                    "Interest posting recorded in Finance accounts — linked to Payroll module",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-all">
                  <TrendingUp className="w-4 h-4" />Calculate Interest
                </button>
                <button onClick={() => setModal("generateStatement")}
                  className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 bg-white transition-all">
                  <FileText className="w-4 h-4" />Generate Annual Statements
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 bg-white transition-all">
                  <Download className="w-4 h-4" />Export Report
                </button>
              </div>
            </div>

            {/* Interest History */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm">Historical Interest Rates & Posting</h3>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Financial Year", "Interest Rate", "Total Corpus", "Interest Amount", "Status"].map(h => (
                      <th key={h} className="text-left py-3 px-4 text-xs font-semibold text-gray-500">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {interestHistory.map((r, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-xs font-semibold text-gray-900">{r.fy}</td>
                      <td className="py-3 px-4 text-xs font-medium text-blue-600">{r.rate}%</td>
                      <td className="py-3 px-4 text-xs text-gray-700">{r.corpus}</td>
                      <td className="py-3 px-4 text-xs font-semibold text-green-600">{r.interest}</td>
                      <td className="py-3 px-4"><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ══ STATEMENTS ══ */}
        {tab === "statements" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 leading-relaxed">
                The system generates contribution statements on <strong>Monthly, Quarterly, and Annual basis</strong> as per SRS requirement.
                Statements include employee contribution, employer (MSWC) contribution, and interest credited — for PF as well as other schemes.
                Statements can be downloaded in PDF, Excel, CSV, and XML formats.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-semibold text-gray-900 text-sm mb-4">Generate New Statement</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Statement Type</label>
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                    {["Monthly", "Quarterly", "Annual"].map(t => (
                      <button key={t} onClick={() => setStatementType(t)}
                        className={`flex-1 py-2 text-xs font-medium transition-colors ${
                          statementType === t ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
                        }`}>{t}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Scheme</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Provident Fund (PF)</option>
                    <option>Gratuity</option>
                    <option>GSLIS</option>
                    <option>DCPS</option>
                    <option>All Schemes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Format</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>PDF</option>
                    <option>Excel (XLSX)</option>
                    <option>CSV</option>
                    <option>XML</option>
                  </select>
                </div>
              </div>
              <button onClick={() => setModal("generateStatement")}
                className="mt-4 flex items-center gap-1.5 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-all">
                <FileText className="w-4 h-4" />Generate Statement
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">Generated Statements History</h3>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  {["All", "Monthly", "Quarterly", "Annual"].map(f => (
                    <button key={f} className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 border-r last:border-r-0 border-gray-200">{f}</button>
                  ))}
                </div>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {["Period", "Type", "Employee Contribution", "MSWC Contribution", "Interest", "Members", "Generated On", "Status", "Actions"].map(h => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-gray-500 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contributionStatements.map((s, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 text-xs font-semibold text-gray-900">{s.period}</td>
                      <td className="py-3 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                          s.type === "Annual" ? "bg-blue-100 text-blue-700"
                          : s.type === "Quarterly" ? "bg-gray-100 text-gray-700"
                          : "bg-gray-50 text-gray-600"
                        }`}>{s.type}</span>
                      </td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{(s.empTotal / 100000).toFixed(1)}L</td>
                      <td className="py-3 px-3 text-xs text-gray-700">₹{(s.emplrTotal / 100000).toFixed(1)}L</td>
                      <td className="py-3 px-3 text-xs text-green-600 font-medium">{s.interest > 0 ? `₹${(s.interest / 100000).toFixed(1)}L` : "—"}</td>
                      <td className="py-3 px-3 text-xs text-gray-700">{s.members.toLocaleString()}</td>
                      <td className="py-3 px-3 text-xs text-gray-500">{s.generatedOn}</td>
                      <td className="py-3 px-3"><span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{s.status}</span></td>
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
      </div>

      {/* ════════════════════════════
          MODALS
      ════════════════════════════ */}

      {/* View Ledger Modal */}
      {modal === "viewLedger" && selectedLedger && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">PF Ledger — {selectedLedger.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">MSWC Internal PF Trust · FY 2025-26</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Printer className="w-4 h-4 text-gray-600" /></button>
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Download className="w-4 h-4 text-gray-600" /></button>
                <button onClick={() => setModal(null)} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><X className="w-4 h-4 text-gray-600" /></button>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-5 grid grid-cols-2 gap-2 text-xs">
              {[["Employee ID", selectedLedger.empId], ["Name", selectedLedger.name], ["Department", selectedLedger.dept], ["PF Number", selectedLedger.pfNumber], ["Date of Joining", selectedLedger.joinDate], ["Tenure", selectedLedger.tenure]].map(([k, v]) => (
                <div key={k}><span className="text-gray-400">{k}:</span> <span className="font-semibold text-gray-900 ml-1">{v}</span></div>
              ))}
            </div>

            <div className="space-y-2 mb-5">
              {[
                ["Opening Balance (Apr 2025)", `₹${selectedLedger.openingBalance.toLocaleString()}`, "text-gray-900"],
                ["Employee Contribution (12%)", `+ ₹${selectedLedger.empContrib.toLocaleString()}`, "text-gray-900"],
                ["Employer / MSWC Contribution (12%)", `+ ₹${selectedLedger.empContrib2.toLocaleString()}`, "text-gray-900"],
                ["Interest Earned (8.25%)", `+ ₹${selectedLedger.interest.toLocaleString()}`, "text-green-600"],
                ["Closing Balance (Mar 2026)", `₹${selectedLedger.closingBalance.toLocaleString()}`, "font-bold text-gray-900"],
              ].map(([k, v, cls]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 text-sm">
                  <span className="text-gray-500">{k}</span>
                  <span className={`${cls}`}>{v}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 rounded-xl p-4 flex justify-between items-center">
              <span className="text-white font-semibold text-sm">Total PF Balance</span>
              <span className="text-white font-bold text-xl">₹{selectedLedger.closingBalance.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* View Nomination Modal */}
      {modal === "viewNomination" && selectedNomination && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Nominations — {selectedNomination.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{selectedNomination.empId} · Last updated: {selectedNomination.lastUpdated}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Printer className="w-4 h-4 text-gray-600" /></button>
                <button onClick={() => setModal(null)} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><X className="w-4 h-4 text-gray-600" /></button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { scheme: "Provident Fund (PF)", data: selectedNomination.pf },
                { scheme: "Gratuity", data: selectedNomination.gratuity },
                { scheme: "Group Savings Linked Insurance (GSLIS)", data: selectedNomination.gslis },
                { scheme: "Defined Contributory Pension (DCPS)", data: selectedNomination.dcps },
              ].map(s => (
                <div key={s.scheme} className={`rounded-xl border p-4 ${s.data.nominee ? "bg-gray-50 border-gray-200" : "bg-orange-50 border-orange-200"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-semibold text-gray-900">{s.scheme}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.data.nominee ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                      {s.data.nominee ? "Filed" : "Pending"}
                    </span>
                  </div>
                  {s.data.nominee
                    ? <div className="text-xs text-gray-700 grid grid-cols-2 gap-1">
                        <div><span className="text-gray-400">Nominee: </span><strong>{s.data.nominee}</strong></div>
                        <div><span className="text-gray-400">Relation: </span><strong>{s.data.relation}</strong></div>
                        <div><span className="text-gray-400">Share: </span><strong>{s.data.share}%</strong></div>
                        {(s.data as any).nominee2 && <div><span className="text-gray-400">Also: </span><strong>{(s.data as any).nominee2} ({(s.data as any).share2}%)</strong></div>}
                      </div>
                    : <p className="text-xs text-orange-600">Nomination not yet filed — requires immediate action.</p>
                  }
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Close</button>
              <button onClick={() => setModal("editNomination")} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Edit Nominations</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Nomination Modal */}
      {modal === "editNomination" && selectedNomination && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900">Edit Nominations — {selectedNomination.name}</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            {["Provident Fund (PF)", "Gratuity", "GSLIS", "DCPS"].map(scheme => (
              <div key={scheme} className="mb-5 pb-5 border-b border-gray-100 last:border-b-0">
                <p className="text-xs font-semibold text-gray-800 mb-3">{scheme}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Nominee Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={(selectedNomination as any)[scheme.toLowerCase().split(" ")[0]]?.nominee || ""} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Relationship</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {["Spouse", "Father", "Mother", "Son", "Daughter", "Brother", "Sister"].map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Share (%)</label>
                    <input type="number" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="100" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Date of Birth</label>
                    <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Save Nominations</button>
            </div>
          </div>
        </div>
      )}

      {/* View Advance Modal */}
      {modal === "viewAdvance" && selectedAdvance && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900">PF Advance Review</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-4 grid grid-cols-2 gap-2 text-xs">
              {[["Request ID", selectedAdvance.id], ["Employee", selectedAdvance.name], ["Emp ID", selectedAdvance.empId], ["PF Balance", `₹${selectedAdvance.pfBalance.toLocaleString()}`], ["Advance Type", selectedAdvance.type], ["Reason", selectedAdvance.reason]].map(([k, v]) => (
                <div key={k}><span className="text-gray-400">{k}:</span> <span className="font-semibold text-gray-900 ml-1">{v}</span></div>
              ))}
            </div>
            <div className="space-y-2 mb-5">
              {[["Requested Amount", `₹${selectedAdvance.requested.toLocaleString()}`], ["Eligible Amount", `₹${selectedAdvance.eligible.toLocaleString()}`], ["Repayment Period", `${selectedAdvance.repayMonths} months`], ["Monthly EMI", `₹${Math.round(selectedAdvance.eligible / selectedAdvance.repayMonths).toLocaleString()}`]].map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 text-sm">
                  <span className="text-gray-400">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Return</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-red-200 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50">Reject</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Approve</button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Statement Modal */}
      {modal === "generateStatement" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Generate Contribution Statement</h3>
                <p className="text-xs text-gray-400 mt-0.5">Monthly / Quarterly / Annual — Employee & MSWC contributions</p>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Statement Period</label>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  {["Monthly", "Quarterly", "Annual"].map(t => (
                    <button key={t} onClick={() => setStatementType(t)}
                      className={`flex-1 py-2 text-xs font-medium transition-colors ${
                        statementType === t ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"
                      }`}>{t}</button>
                  ))}
                </div>
              </div>
              {[
                { label: "Scheme", type: "select", opts: ["Provident Fund (PF)", "Gratuity", "GSLIS", "DCPS", "All Schemes Combined"] },
                { label: "Scope", type: "select", opts: ["All Employees", "By Department", "By Region", "Individual Employee"] },
                { label: "Output Format", type: "select", opts: ["PDF", "Excel (XLSX)", "CSV", "XML"] },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-gray-700 mb-1">{f.label}</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {f.opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                <p className="text-xs text-blue-800">Statement will include: Employee PF Number, Opening Balance, Monthly contributions (employee + employer), Interest credited, Closing Balance — in the selected format.</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Generate & Download</button>
            </div>
          </div>
        </div>
      )}

      {/* View Withdrawal Modal */}
      {modal === "viewWithdrawal" && selectedWithdrawal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-900">Withdrawal Request — {selectedWithdrawal.id}</h3>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-4 grid grid-cols-2 gap-2 text-xs">
              {[["Employee", selectedWithdrawal.name], ["Emp ID", selectedWithdrawal.empId], ["Type", selectedWithdrawal.type], ["Reason", selectedWithdrawal.reason], ["PF Balance", `₹${selectedWithdrawal.empBalance.toLocaleString()}`], ["Process Date", selectedWithdrawal.processDate]].map(([k, v]) => (
                <div key={k}><span className="text-gray-400">{k}:</span> <span className="font-semibold text-gray-900 ml-1">{v}</span></div>
              ))}
            </div>
            <div className="space-y-2 mb-5">
              {[["Requested Amount", `₹${selectedWithdrawal.requested.toLocaleString()}`], ["Eligible Amount", `₹${selectedWithdrawal.eligible.toLocaleString()}`], ["TDS Applicable", selectedWithdrawal.tds === 0 ? "Nil (service > 5 years)" : `₹${selectedWithdrawal.tds.toLocaleString()}`], ["Net Payable", `₹${selectedWithdrawal.eligible.toLocaleString()}`]].map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b border-gray-100 text-sm">
                  <span className="text-gray-400">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">Close</button>
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700">Approve Withdrawal</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}