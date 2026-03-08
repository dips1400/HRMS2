// import { AlertCircle } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { toast } from "sonner";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
// import { Badge } from "../components/ui/badge";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// const disciplinaryCases = [
//   { caseId: "DISC001", empId: "EMP123", name: "Sample Employee", chargeType: "Misconduct", stage: "Charge Report Submitted", enquiryOfficer: "Not Assigned", suspensionStatus: "Not Suspended" },
// ];

// export default function DisciplinaryManagement() {
//   const [handleModalOpen, setHandleModalOpen] = useState(false)

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     employeeId: '',
//     caseType: '',
//     severity: '',
//     dateInitiated: '',
//     chargeSheet: '',
//     description: '',
//     actionTaken: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setHandleModalOpen(false)

//     toast.success(`Disciplinary/Suspension Action request created successfully`);

//   };
//   return (
//     <div className="space-y-4"  >
//       <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
//         <div>
//         <h1 className="text-3xl font-bold text-gray-900">Disciplinary & Suspension Management</h1>
//         <p className="text-gray-500 mt-1">Workflow-driven Disciplinary Action Module</p>
//         </div>
//          <Button onClick={() => setHandleModalOpen(true)}>Create Action</Button>
//       </div>

//       <div className="p-2 space-y-2">

//         <Dialog open={handleModalOpen}  >
//           <DialogContent >
//             <DialogHeader>
//               <DialogTitle>Apply For Transfer</DialogTitle>
//             </DialogHeader>

//             <div className="max-w-3xl" style={{maxHeight:"80vh", overflowY:"scroll"}}>
//               <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-6 shadow-sm space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">Employee *</label>
//                     <select
//                       value={formData.employeeId}
//                       onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
//                       className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                       required
//                     >
//                       <option value="">Select Employee</option>
//                       <option value="EMP001">EMP001 - Rajesh Kumar</option>
//                       <option value="EMP002">EMP002 - Priya Singh</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">Case Type *</label>
//                     <select
//                       value={formData.caseType}
//                       onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
//                       className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                       required
//                     >
//                       <option value="">Select Type</option>
//                       <option value="Misconduct">Misconduct</option>
//                       <option value="Unauthorized Absence">Unauthorized Absence</option>
//                       <option value="Insubordination">Insubordination</option>
//                       <option value="Negligence">Negligence of Duty</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">Severity *</label>
//                     <select
//                       value={formData.severity}
//                       onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
//                       className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                       required
//                     >
//                       <option value="">Select Severity</option>
//                       <option value="Minor">Minor</option>
//                       <option value="Major">Major</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-2">Date Initiated *</label>
//                     <input
//                       type="date"
//                       value={formData.dateInitiated}
//                       onChange={(e) => setFormData({ ...formData, dateInitiated: e.target.value })}
//                       className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">Charge Sheet Number</label>
//                   <input
//                     type="text"
//                     value={formData.chargeSheet}
//                     onChange={(e) => setFormData({ ...formData, chargeSheet: e.target.value })}
//                     className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">Description *</label>
//                   <textarea
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     rows={4}
//                     placeholder="Detailed description of the incident"
//                     className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">Action Taken</label>
//                   <textarea
//                     value={formData.actionTaken}
//                     onChange={(e) => setFormData({ ...formData, actionTaken: e.target.value })}
//                     rows={3}
//                     placeholder="Immediate action or decision"
//                     className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
//                   />
//                 </div>

//                 <div className="flex gap-4 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setHandleModalOpen(false)}
//                     className="flex-1 px-2 py-2 border border-border rounded-lg hover:bg-accent"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="flex-1 px-2 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af]"
//                   >
//                     Create Case
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </DialogContent>
//         </Dialog>

//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Disciplinary Cases</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Case ID</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Charge Type</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Current Stage</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Enquiry Officer</th>
//                   <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {disciplinaryCases.map((dcase) => (
//                   <tr key={dcase.caseId} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3 px-4 text-sm font-medium text-blue-600">{dcase.caseId}</td>
//                     <td className="py-3 px-4">
//                       <p className="text-sm font-medium text-gray-900">{dcase.name}</p>
//                       <p className="text-xs text-gray-500">{dcase.empId}</p>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-900">{dcase.chargeType}</td>
//                     <td className="py-3 px-4 text-sm text-gray-900">{dcase.stage}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{dcase.enquiryOfficer}</td>
//                     <td className="py-3 px-4"><Badge variant="outline">{dcase.suspensionStatus}</Badge></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>

// <Card>
//   <CardHeader>
//     <CardTitle>Disciplinary Action Workflow</CardTitle>
//   </CardHeader>
//   <CardContent className="space-y-2 text-sm">
//     <p>1. Charge Report Submission</p>
//     <p>2. Employee Explanation Request</p>
//     <p>3. Enquiry Officer Appointment</p>
//     <p>4. Enquiry Proceedings</p>
//     <p>5. Enquiry Report Submission</p>
//     <p>6. Final Action (Warning/Penalty/Dismissal)</p>
//   </CardContent>
// </Card>
//     </div>
//   );
// }


import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

export default function DisciplinaryManagement() {

  const [handleModalOpen, setHandleModalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)

  const [selectedCase, setSelectedCase] = useState<any>(null)

  const [cases, setCases] = useState<any[]>([
    {
      caseId: "DISC001",
      empId: "EMP123",
      name: "Sample Employee",
      chargeType: "Misconduct",
      stage: "Charge Report Submitted",
      enquiryOfficer: "Not Assigned",
      suspensionStatus: "Not Suspended",
      caseOwner: "HR Manager",
      caseCategory: "Disciplinary Action",
      description: "Misconduct in office premises",
      createdAt: new Date().toLocaleString()
    }
  ])

  const [formData, setFormData] = useState({
    employeeId: "",
    caseCategory: "",
    caseType: "",
    severity: "",
    dateInitiated: "",
    chargeSheet: "",
    description: "",
    actionTaken: "",
    caseOwner: "",
    enquiryOfficer: "",
    confidentiality: "No",
    referenceCase: "",
    status: "Charge Report Submitted",
    attachments: [] as File[]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newCase = {
      caseId: `DISC${cases.length + 1}`,
      empId: formData.employeeId,
      name: formData.employeeId,
      chargeType: formData.caseType,
      stage: formData.status,
      enquiryOfficer: formData.enquiryOfficer || "Not Assigned",
      suspensionStatus: "Not Suspended",
      caseOwner: formData.caseOwner,
      caseCategory: formData.caseCategory,
      description: formData.description,
      createdAt: new Date().toLocaleString()
    }

    setCases([...cases, newCase])

    toast.success("Disciplinary Case Created Successfully")

    toast("Notification Sent", {
      description: "Case owner and enquiry officer notified"
    })

    setHandleModalOpen(false)
  }

  return (

    <div className="space-y-4">

      <div className="flex justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Disciplinary & Suspension Management
          </h1>
          <p className="text-gray-500 mt-1">
            Workflow-driven Disciplinary Action Module
          </p>
        </div>

        <Button onClick={() => setHandleModalOpen(true)}>
          Create Action
        </Button>

      </div>

      {/* CREATE CASE MODAL */}


      <Dialog open={handleModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Disciplinary Case</DialogTitle>
          </DialogHeader>

          <div className="max-h-[80vh] overflow-y-scroll">

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Employee */}
              <div>
                <label className="text-sm font-medium">Employee *</label>
                <select
                  required
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select Employee</option>
                  <option value="EMP001">EMP001 - Rajesh Kumar</option>
                  <option value="EMP002">EMP002 - Priya Singh</option>
                  <option value="EMP003">EMP003 - Amit Sharma</option>
                  <option value="EMP004">EMP004 - Sneha Patil</option>
                  <option value="EMP005">EMP005 - Vikram Deshmukh</option>
                  <option value="EMP006">EMP006 - Neha Kulkarni</option>
                  <option value="EMP007">EMP007 - Rahul Joshi</option>
                </select>
              </div>

              {/* Case Category */}
              <div>
                <label className="text-sm font-medium">Case Category</label>

                <div className="flex gap-4">

                  <label className="flex gap-2">
                    <input
                      type="radio"
                      value="Disciplinary Action"
                      checked={formData.caseCategory === "Disciplinary Action"}
                      onChange={(e) => setFormData({ ...formData, caseCategory: e.target.value })}
                    />
                    Disciplinary Action
                  </label>

                  <label className="flex gap-2">
                    <input
                      type="radio"
                      value="Internal Complaint"
                      checked={formData.caseCategory === "Internal Complaint"}
                      onChange={(e) => setFormData({ ...formData, caseCategory: e.target.value })}
                    />
                    Internal Complaint
                  </label>

                </div>
              </div>

              {/* Case Type */}
              <div>
                <label className="text-sm font-medium">Case Type *</label>
                <select
                  required
                  value={formData.caseType}
                  onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select Type</option>
                  <option value="Misconduct">Misconduct</option>
                  <option value="Unauthorized Absence">Unauthorized Absence</option>
                  <option value="Insubordination">Insubordination</option>
                  <option value="Negligence">Negligence</option>
                </select>
              </div>

              {/* Severity */}
              <div>
                <label className="text-sm font-medium">Severity *</label>
                <select
                  required
                  value={formData.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="Minor">Minor</option>
                  <option value="Major">Major</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="text-sm font-medium">Date Initiated</label>
                <input
                  type="date"
                  required
                  value={formData.dateInitiated}
                  onChange={(e) => setFormData({ ...formData, dateInitiated: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              {/* Case Owner */}
              <div>
                <label className="text-sm font-medium">Case Owner</label>
                <select
                  value={formData.caseOwner}
                  onChange={(e) => setFormData({ ...formData, caseOwner: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select Owner</option>
                  <option>HR Manager</option>
                  <option>Department Head</option>
                  <option>Disciplinary Authority</option>
                </select>
              </div>

              {/* Enquiry Officer */}
              <div>
                <label className="text-sm font-medium">Enquiry Officer</label>
                <select
                  value={formData.enquiryOfficer}
                  onChange={(e) => setFormData({ ...formData, enquiryOfficer: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select Officer</option>
                  <option>Senior HR Officer</option>
                  <option>Legal Officer</option>
                  <option>External Officer</option>
                </select>
              </div>

              {/* Confidential Complaint */}
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={formData.confidentiality === "Yes"}
                  onChange={(e) => setFormData({ ...formData, confidentiality: e.target.checked ? "Yes" : "No" })}
                />
                <label>Keep complainant identity confidential</label>
              </div>

              {/* Reference Case */}
              <div>
                <label className="text-sm font-medium">Reference Case</label>
                <select
                  value={formData.referenceCase}
                  onChange={(e) => setFormData({ ...formData, referenceCase: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">None</option>
                  <option>DISC001</option>
                  <option>DISC002</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="text-sm font-medium">Upload Evidence</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFormData({ ...formData, attachments: Array.from(e.target.files || []) })}
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-sm font-medium">Case Status</label>

                <div className="flex gap-4">

                  <label>
                    <input
                      type="radio"
                      value="Charge Report Submitted"
                      checked={formData.status === "Charge Report Submitted"}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    />
                    Charge Submitted
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Under Enquiry"
                      checked={formData.status === "Under Enquiry"}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    />
                    Under Enquiry
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Closed"
                      checked={formData.status === "Closed"}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    />
                    Closed
                  </label>

                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">

                <button
                  type="button"
                  onClick={() => setHandleModalOpen(false)}
                  className="flex-1 border rounded-lg py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-[#1e3a8a] text-white rounded-lg py-2"
                >
                  Create Case
                </button>

              </div>

            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* VIEW CASE MODAL */}

      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent>

          <DialogHeader>
            <DialogTitle>Case Details</DialogTitle>
          </DialogHeader>

          {selectedCase && (

            <div className="space-y-3 text-sm">

              <p><b>Case ID:</b> {selectedCase.caseId}</p>

              <p><b>Employee:</b> {selectedCase.name}</p>

              <p><b>Category:</b> {selectedCase.caseCategory}</p>

              <p><b>Charge Type:</b> {selectedCase.chargeType}</p>

              <p><b>Stage:</b> {selectedCase.stage}</p>

              <p><b>Case Owner:</b> {selectedCase.caseOwner}</p>

              <p><b>Enquiry Officer:</b> {selectedCase.enquiryOfficer}</p>

              <p><b>Description:</b> {selectedCase.description}</p>

              <p><b>Created At:</b> {selectedCase.createdAt}</p>

              <Button
                variant="outline"
                onClick={() => setViewModalOpen(false)}
              >
                Close
              </Button>

            </div>

          )}

        </DialogContent>
      </Dialog>

      {/* CASE TABLE */}

      <Card>

        <CardHeader>
          <CardTitle>Disciplinary Cases</CardTitle>
        </CardHeader>

        <CardContent>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left p-2">Case ID</th>
                <th className="text-left p-2">Employee</th>
                <th className="text-left p-2">Charge</th>
                <th className="text-left p-2">Stage</th>
                <th className="text-left p-2">Owner</th>
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Action</th>

              </tr>

            </thead>

            <tbody>

              {cases.map((c) => (

                <tr key={c.caseId} className="border-b">

                  <td className="p-2 text-blue-600">{c.caseId}</td>

                  <td className="p-2">{c.name}</td>

                  <td className="p-2">{c.chargeType}</td>

                  <td className="p-2">{c.stage}</td>

                  <td className="p-2">{c.caseOwner}</td>

                  <td className="p-2">
                    <Badge variant="outline">
                      {c.caseCategory}
                    </Badge>
                  </td>

                  <td className="p-2">

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setSelectedCase(c)
                        setViewModalOpen(true)
                      }}
                    >
                      View
                    </Button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </CardContent>

      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disciplinary Action Workflow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>1. Charge Report Submission</p>
          <p>2. Employee Explanation Request</p>
          <p>3. Enquiry Officer Appointment</p>
          <p>4. Enquiry Proceedings</p>
          <p>5. Enquiry Report Submission</p>
          <p>6. Final Action (Warning/Penalty/Dismissal)</p>
        </CardContent>
      </Card>
    </div>

  )
}