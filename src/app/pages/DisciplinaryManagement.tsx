import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const disciplinaryCases = [
  { caseId: "DISC001", empId: "EMP123", name: "Sample Employee", chargeType: "Misconduct", stage: "Charge Report Submitted", enquiryOfficer: "Not Assigned", suspensionStatus: "Not Suspended" },
];

export default function DisciplinaryManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Disciplinary & Suspension Management</h1>
        <p className="text-gray-500 mt-1">Workflow-driven Disciplinary Action Module</p>
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
