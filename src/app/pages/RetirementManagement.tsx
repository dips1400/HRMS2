// import { UserCheck, Calendar, DollarSign, FileText } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Badge } from "../components/ui/badge"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table"
// import { Progress } from "../components/ui/progress"

// const stats = [
//   { label: "Retiring This Year", value: "45", icon: UserCheck, color: "text-blue-600" },
//   { label: "Pending Clearances", value: "5", icon: FileText, color: "text-yellow-600" },
//   { label: "Pension Processed", value: "234", icon: DollarSign, color: "text-green-600" },
//   { label: "Upcoming (6 months)", value: "12", icon: Calendar, color: "text-purple-600" },
// ];

// const upcomingRetirements = [
//   {
//     employeeId: "EMP012",
//     employeeName: "Mohan Lal Sharma",
//     department: "Administration",
//     designation: "Senior Clerk",
//     joiningDate: "1986-03-15",
//     retirementDate: "2026-03-15",
//     daysLeft: 22,
//     pensionStatus: "Processing",
//     clearanceStatus: 75
//   },
//   {
//     employeeId: "EMP024",
//     employeeName: "Sushila Devi",
//     department: "Education",
//     designation: "Principal",
//     joiningDate: "1984-07-01",
//     retirementDate: "2026-07-01",
//     daysLeft: 130,
//     pensionStatus: "Not Started",
//     clearanceStatus: 0
//   },
//   {
//     employeeId: "EMP018",
//     employeeName: "Ram Prasad Gupta",
//     department: "Health",
//     designation: "Medical Officer",
//     joiningDate: "1985-11-20",
//     retirementDate: "2026-05-20",
//     daysLeft: 88,
//     pensionStatus: "Under Review",
//     clearanceStatus: 40
//   },
// ];

// const recentRetirements = [
//   {
//     employeeId: "EMP008",
//     employeeName: "Krishna Kumar",
//     department: "Finance",
//     retiredOn: "2026-01-31",
//     serviceYears: 40,
//     pensionAmount: "₹35,000",
//     status: "Completed"
//   },
//   {
//     employeeId: "EMP015",
//     employeeName: "Radha Devi",
//     department: "Administration",
//     retiredOn: "2026-01-15",
//     serviceYears: 38,
//     pensionAmount: "₹32,000",
//     status: "Completed"
//   },
// ];

// const clearanceChecklist = [
//   { item: "No Dues Certificate", description: "Finance clearance" },
//   { item: "Hand Over Report", description: "Complete work handover" },
//   { item: "Asset Return", description: "Return all government assets" },
//   { item: "Medical Clearance", description: "Final health checkup" },
//   { item: "Pension Documents", description: "Submit pension papers" },
//   { item: "Service Book Verification", description: "Verify service records" },
// ];

// export default function Retirement() {
//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div>
//         <h2 className="text-2xl font-semibold text-gray-900">Retirement Management</h2>
//         <p className="text-sm text-gray-500 mt-1">
//           Manage employee retirements and pension processing
//         </p>
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

//       {/* Upcoming Retirements */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Upcoming Retirements</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Employee ID</TableHead>
//                   <TableHead>Employee Name</TableHead>
//                   <TableHead>Department</TableHead>
//                   <TableHead>Designation</TableHead>
//                   <TableHead>Joining Date</TableHead>
//                   <TableHead>Retirement Date</TableHead>
//                   <TableHead>Days Left</TableHead>
//                   <TableHead>Clearance</TableHead>
//                   <TableHead>Pension Status</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {upcomingRetirements.map((employee) => (
//                   <TableRow key={employee.employeeId}>
//                     <TableCell className="font-medium">{employee.employeeId}</TableCell>
//                     <TableCell>{employee.employeeName}</TableCell>
//                     <TableCell>{employee.department}</TableCell>
//                     <TableCell>{employee.designation}</TableCell>
//                     <TableCell>{employee.joiningDate}</TableCell>
//                     <TableCell>{employee.retirementDate}</TableCell>
//                     <TableCell>
//                       <Badge variant={employee.daysLeft < 30 ? "destructive" : "secondary"}>
//                         {employee.daysLeft} days
//                       </Badge>
//                     </TableCell>
//                     <TableCell>
//                       <div className="space-y-1 w-24">
//                         <div className="text-sm">{employee.clearanceStatus}%</div>
//                         <Progress value={employee.clearanceStatus} />
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <Badge 
//                         variant={
//                           employee.pensionStatus === "Processing" ? "default" :
//                           employee.pensionStatus === "Under Review" ? "secondary" :
//                           "outline"
//                         }
//                       >
//                         {employee.pensionStatus}
//                       </Badge>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Recent Retirements */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Recently Retired Employees</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Employee ID</TableHead>
//                 <TableHead>Employee Name</TableHead>
//                 <TableHead>Department</TableHead>
//                 <TableHead>Retired On</TableHead>
//                 <TableHead>Service Years</TableHead>
//                 <TableHead>Monthly Pension</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {recentRetirements.map((employee) => (
//                 <TableRow key={employee.employeeId}>
//                   <TableCell className="font-medium">{employee.employeeId}</TableCell>
//                   <TableCell>{employee.employeeName}</TableCell>
//                   <TableCell>{employee.department}</TableCell>
//                   <TableCell>{employee.retiredOn}</TableCell>
//                   <TableCell>{employee.serviceYears} years</TableCell>
//                   <TableCell className="font-semibold">{employee.pensionAmount}</TableCell>
//                   <TableCell>
//                     <Badge variant="default">{employee.status}</Badge>
//                   </TableCell>
//                   <TableCell>
//                     <Button size="sm" variant="ghost">View Details</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Clearance Checklist */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Retirement Clearance Checklist</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {clearanceChecklist.map((item, index) => (
//               <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
//                 <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5" />
//                 <div className="flex-1">
//                   <p className="font-medium">{item.item}</p>
//                   <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



import React, { useState, useMemo } from "react";
import { 
  UserCheck, Calendar, DollarSign, FileText, 
  ShieldCheck, AlertCircle, Info, Download, 
  MessageSquare, History, HardHat, Briefcase, Search,
  ArrowRightLeft, UserPlus, UserMinus, Plus
} from "lucide-react";

// Shadcn UI Imports
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// --- Types ---
interface Employee {
  id: string;
  name: string;
  class: "Class I" | "Class II" | "Class III" | "Class IV";
  dept: string;
  designation: string;
  joiningDate: string;
  retirementDate: string;
  status: "Upcoming" | "Retired";
  vigilanceStatus: "Cleared" | "Pending" | "Under Review";
  progress: number;
  reason: string;
  pensionStatus: string;
}

// --- Mock Data (Expanded) ---
const EMPLOYEES: Employee[] = [
  // Upcoming Retirements
  {
    id: "EMP012",
    name: "Mohan Lal Sharma",
    class: "Class II",
    dept: "Administration",
    designation: "Senior Clerk",
    joiningDate: "1986-03-15",
    retirementDate: "2026-04-15",
    status: "Upcoming",
    vigilanceStatus: "Cleared",
    progress: 75,
    reason: "Superannuation (58 yrs)",
    pensionStatus: "Processing"
  },
  {
    id: "EMP045",
    name: "Gajendra Singh",
    class: "Class IV",
    dept: "Logistics",
    designation: "Warehouse Attendant",
    joiningDate: "1990-06-20",
    retirementDate: "2026-06-20",
    status: "Upcoming",
    vigilanceStatus: "Pending",
    progress: 20,
    reason: "Superannuation (60 yrs)",
    pensionStatus: "Not Started"
  },
  {
    id: "EMP099",
    name: "Sunita Deshmukh",
    class: "Class III",
    dept: "Finance",
    designation: "Accountant",
    joiningDate: "1988-11-12",
    retirementDate: "2026-05-12",
    status: "Upcoming",
    vigilanceStatus: "Cleared",
    progress: 60,
    reason: "Superannuation (58 yrs)",
    pensionStatus: "Under Review"
  },
  // Recently Retired
  {
    id: "EMP001",
    name: "Vikram Aditya",
    class: "Class I",
    dept: "Executive",
    designation: "General Manager",
    joiningDate: "1984-01-01",
    retirementDate: "2026-01-31",
    status: "Retired",
    vigilanceStatus: "Cleared",
    progress: 100,
    reason: "Superannuation",
    pensionStatus: "Completed"
  },
  {
    id: "EMP008",
    name: "Kausalya Devi",
    class: "Class III",
    dept: "Education",
    designation: "Senior Teacher",
    joiningDate: "1987-02-15",
    retirementDate: "2026-02-15",
    status: "Retired",
    vigilanceStatus: "Cleared",
    progress: 100,
    reason: "Voluntary Retirement",
    pensionStatus: "Completed"
  },
  {
    id: "EMP015",
    name: "Ramesh Chennithala",
    class: "Class II",
    dept: "IT",
    designation: "System Admin",
    joiningDate: "1995-03-10",
    retirementDate: "2026-02-28",
    status: "Retired",
    vigilanceStatus: "Cleared",
    progress: 100,
    reason: "Resignation (Better Opp.)",
    pensionStatus: "Final Settlement Paid"
  }
];

export default function RetirementDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);

  const upcoming = EMPLOYEES.filter(e => e.status === "Upcoming" && e.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const retired = EMPLOYEES.filter(e => e.status === "Retired" && e.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Retirement & Separation Management</h2>
          <p className="text-slate-500 text-sm">Tracking superannuation (Age 58/60) and employee exits.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Filter by name..." 
              className="pl-9 w-64 bg-white shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={() => setIsAddOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 shadow-md">
            <Plus className="mr-2 h-4 w-4" /> Add Separation
          </Button>
        </div>
      </div>

      {/* Lists */}
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList className="bg-slate-200/60 border">
          <TabsTrigger value="upcoming" className="px-6">Upcoming Retirement</TabsTrigger>
          <TabsTrigger value="retired" className="px-6">Recently Retired</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <EmployeeTable list={upcoming} onSelect={setSelectedEmp} />
        </TabsContent>

        <TabsContent value="retired">
          <EmployeeTable list={retired} onSelect={setSelectedEmp} />
        </TabsContent>
      </Tabs>

      {/* --- MODAL: ADD SEPARATION --- */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Initiate New Separation</DialogTitle>
            <DialogDescription>Manually trigger a resignation or VRS process for an employee.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label>Select Employee</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select ID" /></SelectTrigger><SelectContent><SelectItem value="1">EMP201 - John Doe</SelectItem></SelectContent></Select>
            </div>
            <div className="space-y-2">
              <Label>Exit Reason (SRS 422)</Label>
              <Select><SelectTrigger><SelectValue placeholder="Reason" /></SelectTrigger><SelectContent><SelectItem value="hp">Health Problems</SelectItem><SelectItem value="bo">Better Opportunities</SelectItem><SelectItem value="fp">Family Problems</SelectItem></SelectContent></Select>
            </div>
            <div className="space-y-2">
              <Label>Relieving Date</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>KT Assignee (SRS 435)</Label>
              <Input placeholder="Search assignee..." />
            </div>
            <div className="col-span-2 space-y-2">
              <Label>HR Remarks</Label>
              <Textarea placeholder="Note any policy deviations..." />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddOpen(false)}>Cancel</Button>
            <Button className="bg-indigo-600" onClick={() => setIsAddOpen(false)}>Submit Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- MODAL: VIEW DETAILS (DOSSIER) --- */}
      <Dialog open={!!selectedEmp} onOpenChange={() => setSelectedEmp(null)}>
        {selectedEmp && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-indigo-600" />
                Dossier: {selectedEmp.name}
              </DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="summary">
              <TabsList className="w-full">
                <TabsTrigger value="summary" className="flex-1">Overview</TabsTrigger>
                <TabsTrigger value="finance" className="flex-1">Dues & Payout</TabsTrigger>
                <TabsTrigger value="kt" className="flex-1">KT & Exit</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <DetailBox label="Designation" value={selectedEmp.designation} />
                  <DetailBox label="Retirement Reason" value={selectedEmp.reason} />
                  <DetailBox label="Vigilance Status" value={selectedEmp.vigilanceStatus} />
                  <DetailBox label="NOC Progress" value={`${selectedEmp.progress}%`} />
                </div>
              </TabsContent>
              <TabsContent value="finance" className="py-4">
                 <div className="p-4 border rounded-lg bg-slate-50 flex justify-between items-center">
                    <span className="font-medium text-slate-600">Pension Status:</span>
                    <Badge variant="secondary">{selectedEmp.pensionStatus}</Badge>
                 </div>
                 <div className="mt-4 grid grid-cols-2 gap-4">
                    <DetailBox label="Estimated Gratuity" value="₹ --,---" />
                    <DetailBox label="Leave Balance" value="240 Days" />
                 </div>
              </TabsContent>
              <TabsContent value="kt" className="py-4">
                 <div className="space-y-4">
                    <div className="p-3 border rounded border-blue-100 bg-blue-50">
                       <p className="text-xs font-bold text-blue-800 uppercase">Knowledge Transfer</p>
                       <p className="text-sm">Assignee: Pending Setup</p>
                    </div>
                    <Button className="w-full" variant="outline"><Download className="mr-2 h-4 w-4" /> Download Leaving Certificate</Button>
                 </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

// --- Helper Components ---
function EmployeeTable({ list, onSelect }: { list: Employee[], onSelect: (e: Employee) => void }) {
  return (
    <Card className="shadow-sm border-none">
      <Table>
        <TableHeader className="bg-white">
          <TableRow>
            <TableHead>Employee Details</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Retirement Date</TableHead>
            <TableHead>Vigilance</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {list.map((emp) => (
            <TableRow key={emp.id} className="hover:bg-slate-50/50">
              <TableCell>
                <div className="font-semibold text-slate-800">{emp.name}</div>
                <div className="text-[10px] text-slate-500 uppercase">{emp.id} • {emp.dept}</div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="flex items-center gap-1 w-fit">
                   {emp.class === "Class IV" ? <HardHat className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                   {emp.class}
                </Badge>
              </TableCell>
              <TableCell>
                 <div className="text-sm font-medium">{emp.retirementDate}</div>
                 <div className="text-[10px] text-orange-600 font-bold uppercase">{emp.reason}</div>
              </TableCell>
              <TableCell>
                <Badge className={emp.vigilanceStatus === "Cleared" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-amber-100 text-amber-700 hover:bg-amber-100"}>
                  {emp.vigilanceStatus}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={emp.progress} className="h-1.5 w-12" />
                  <span className="text-[10px] font-bold text-slate-500">{emp.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => onSelect(emp)} className="text-indigo-600">View Dossier</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

function DetailBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-3 border rounded bg-slate-50/50">
      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{label}</p>
      <p className="text-sm font-semibold text-slate-700">{value}</p>
    </div>
  );
}