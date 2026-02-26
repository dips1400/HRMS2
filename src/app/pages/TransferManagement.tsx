import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const transferRequests = [
  { empId: "EMP045", name: "Sunita Verma", fromOffice: "Regional Office - Delhi", toOffice: "Head Office", type: "Administrative", requestDate: "2026-02-10", status: "Pending", allowance: 25000 },
  { empId: "EMP067", name: "Vijay Singh", fromOffice: "Head Office", toOffice: "Regional Office - Mumbai", type: "Request-based", requestDate: "2026-02-15", status: "Approved", allowance: 35000 },
];

export default function TransferManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transfer Management</h1>
          <p className="text-gray-500 mt-1">Administrative & Request-based Transfers</p>
        </div>
        <Button>Initiate Transfer</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transfer Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">From Office</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">To Office</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Transfer Allowance</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transferRequests.map((transfer) => (
                  <tr key={transfer.empId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900">{transfer.name}</p>
                      <p className="text-xs text-gray-500">{transfer.empId}</p>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">{transfer.fromOffice}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{transfer.toOffice}</td>
                    <td className="py-3 px-4"><Badge variant="outline">{transfer.type}</Badge></td>
                    <td className="py-3 px-4 text-sm text-green-600">₹{transfer.allowance.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge className={transfer.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {transfer.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4"><Button variant="outline" size="sm">View</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
