import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router";

const disciplinaryCases = [
  { caseId: "DISC001", empId: "EMP123", name: "Sample Employee", chargeType: "Misconduct", stage: "Charge Report Submitted", enquiryOfficer: "Not Assigned", suspensionStatus: "Not Suspended" },
];

export default function DisciplinaryManagement() {
  const [handleModalOpen, setHandleModalOpen] = useState(false)

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    employeeId: '',
    caseType: '',
    severity: '',
    dateInitiated: '',
    chargeSheet: '',
    description: '',
    actionTaken: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHandleModalOpen(false)

    toast.success(`Disciplinary/Suspension Action request created successfully`);

  };
  return (
    <div className="space-y-4"  >
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div>
        <h1 className="text-3xl font-bold text-gray-900">Disciplinary & Suspension Management</h1>
        <p className="text-gray-500 mt-1">Workflow-driven Disciplinary Action Module</p>
        </div>
         <Button onClick={() => setHandleModalOpen(true)}>Create Action</Button>
      </div>

      <div className="p-2 space-y-2">

        <Dialog open={handleModalOpen}  >
          <DialogContent >
            <DialogHeader>
              <DialogTitle>Apply For Transfer</DialogTitle>
            </DialogHeader>

            <div className="max-w-3xl" style={{maxHeight:"80vh", overflowY:"scroll"}}>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-6 shadow-sm space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Employee *</label>
                    <select
                      value={formData.employeeId}
                      onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                      required
                    >
                      <option value="">Select Employee</option>
                      <option value="EMP001">EMP001 - Rajesh Kumar</option>
                      <option value="EMP002">EMP002 - Priya Singh</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Case Type *</label>
                    <select
                      value={formData.caseType}
                      onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Misconduct">Misconduct</option>
                      <option value="Unauthorized Absence">Unauthorized Absence</option>
                      <option value="Insubordination">Insubordination</option>
                      <option value="Negligence">Negligence of Duty</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Severity *</label>
                    <select
                      value={formData.severity}
                      onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                      required
                    >
                      <option value="">Select Severity</option>
                      <option value="Minor">Minor</option>
                      <option value="Major">Major</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Date Initiated *</label>
                    <input
                      type="date"
                      value={formData.dateInitiated}
                      onChange={(e) => setFormData({ ...formData, dateInitiated: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Charge Sheet Number</label>
                  <input
                    type="text"
                    value={formData.chargeSheet}
                    onChange={(e) => setFormData({ ...formData, chargeSheet: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    placeholder="Detailed description of the incident"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Action Taken</label>
                  <textarea
                    value={formData.actionTaken}
                    onChange={(e) => setFormData({ ...formData, actionTaken: e.target.value })}
                    rows={3}
                    placeholder="Immediate action or decision"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setHandleModalOpen(false)}
                    className="flex-1 px-2 py-2 border border-border rounded-lg hover:bg-accent"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-2 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af]"
                  >
                    Create Case
                  </button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>

      </div>

      <Card>
        <CardHeader>
          <CardTitle>Disciplinary Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Case ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Charge Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Current Stage</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Enquiry Officer</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {disciplinaryCases.map((dcase) => (
                  <tr key={dcase.caseId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-blue-600">{dcase.caseId}</td>
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900">{dcase.name}</p>
                      <p className="text-xs text-gray-500">{dcase.empId}</p>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{dcase.chargeType}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{dcase.stage}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{dcase.enquiryOfficer}</td>
                    <td className="py-3 px-4"><Badge variant="outline">{dcase.suspensionStatus}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
  );
}
