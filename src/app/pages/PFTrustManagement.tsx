import { PiggyBank, TrendingUp, Download, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const pfSummary = {
  totalMembers: 2789,
  totalCorpus: 15680000000, // 156.8 Crores
  employeeContribution: 7840000000,
  employerContribution: 7840000000,
  interestRate: 8.25,
  fyInterest: 1234560000,
};

const pfLedgers = [
  {
    empId: "EMP001",
    name: "Rajesh Kumar",
    pfNumber: "DL/123456/789",
    openingBalance: 640000,
    empContribution: 64800,
    empContribution2: 64800,
    yearlyInterest: 52800,
    closingBalance: 822400,
    tenure: "9.8 years",
  },
  {
    empId: "EMP002",
    name: "Priya Sharma",
    pfNumber: "DL/123456/790",
    openingBalance: 420000,
    empContribution: 74880,
    empContribution2: 74880,
    yearlyInterest: 34650,
    closingBalance: 604410,
    tenure: "6.7 years",
  },
  {
    empId: "EMP003",
    name: "Amit Patel",
    pfNumber: "DL/123456/791",
    openingBalance: 920000,
    empContribution: 83520,
    empContribution2: 83520,
    yearlyInterest: 75900,
    closingBalance: 1162940,
    tenure: "12.9 years",
  },
];

const advanceRequests = [
  {
    id: "PFA001",
    empId: "EMP045",
    name: "Sunita Verma",
    type: "Medical Advance",
    requestAmount: 50000,
    eligibleAmount: 50000,
    approvedAmount: 50000,
    status: "Approved",
    requestDate: "2026-02-10",
  },
  {
    id: "PFA002",
    empId: "EMP067",
    name: "Vijay Singh",
    type: "Housing Loan",
    requestAmount: 500000,
    eligibleAmount: 450000,
    approvedAmount: 450000,
    status: "Under Review",
    requestDate: "2026-02-15",
  },
  {
    id: "PFA003",
    empId: "EMP089",
    name: "Kavita Desai",
    type: "Marriage Advance",
    requestAmount: 100000,
    eligibleAmount: 100000,
    approvedAmount: 0,
    status: "Pending",
    requestDate: "2026-02-18",
  },
];

const withdrawalRequests = [
  {
    id: "PFW001",
    empId: "EMP234",
    name: "Ramesh Chandra",
    type: "Partial Withdrawal",
    reason: "Higher Education",
    requestAmount: 200000,
    eligibleAmount: 200000,
    status: "Approved",
    processDate: "2026-03-01",
  },
  {
    id: "PFW002",
    empId: "EMP345",
    name: "Anita Rao",
    type: "Final Settlement",
    reason: "Retirement",
    requestAmount: 1850000,
    eligibleAmount: 1850000,
    status: "Processing",
    processDate: "2026-03-15",
  },
];

export default function PFTrustManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">PF Trust Management</h1>
          <p className="text-gray-500 mt-1">Internal Provident Fund - FY 2025-26</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Generate PF Statements
        </Button>
      </div>

      {/* PF Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total PF Members</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{pfSummary.totalMembers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div>
              <p className="text-sm text-gray-600">Total PF Corpus</p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                ₹{(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div>
              <p className="text-sm text-gray-600">Interest Rate (FY 2025-26)</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">{pfSummary.interestRate}%</p>
              <p className="text-xs text-gray-500 mt-1">As per Government notification</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div>
              <p className="text-sm text-gray-600">FY Interest Accrued</p>
              <p className="text-2xl font-bold text-purple-600 mt-1">
                ₹{(pfSummary.fyInterest / 10000000).toFixed(2)} Cr
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ledgers" className="space-y-6">
        <TabsList>
          <TabsTrigger value="ledgers">PF Ledgers</TabsTrigger>
          <TabsTrigger value="advances">Advances/Loans</TabsTrigger>
          <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
          <TabsTrigger value="interest">Interest Calculation</TabsTrigger>
        </TabsList>

        <TabsContent value="ledgers">
          <Card>
            <CardHeader>
              <CardTitle>Individual PF Ledgers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>PF Calculation:</strong> 12% Employee Contribution + 12% Employer Contribution on Basic + DA
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">PF Number</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Opening Balance</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Emp Contribution (FY)</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Employer Contribution (FY)</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Interest Earned</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Closing Balance</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Tenure</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pfLedgers.map((ledger) => (
                      <tr key={ledger.empId} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{ledger.name}</p>
                            <p className="text-xs text-gray-500">{ledger.empId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{ledger.pfNumber}</td>
                        <td className="py-3 px-4 text-right text-sm text-gray-600">
                          ₹{ledger.openingBalance.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-green-600">
                          ₹{ledger.empContribution.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-green-600">
                          ₹{ledger.empContribution2.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-blue-600">
                          ₹{ledger.yearlyInterest.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm font-semibold text-gray-900">
                          ₹{ledger.closingBalance.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{ledger.tenure}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            <FileText className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advances">
          <Card>
            <CardHeader>
              <CardTitle>PF Advances & Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">PF Advance Types</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Medical Advance:</strong> Up to 50% of employee's contribution for medical emergency</li>
                  <li>• <strong>Marriage Advance:</strong> Up to 50% of employee's contribution for self/children's marriage</li>
                  <li>• <strong>Housing Loan:</strong> Up to 90% of PF balance for house construction/purchase</li>
                  <li>• <strong>Religious Ceremony:</strong> Up to 50% of employee's contribution</li>
                </ul>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Request ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Advance Type</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Request Amount</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Eligible Amount</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Approved Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Request Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {advanceRequests.map((request) => (
                      <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">{request.id}</td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{request.name}</p>
                            <p className="text-xs text-gray-500">{request.empId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{request.type}</td>
                        <td className="py-3 px-4 text-right text-sm text-gray-600">
                          ₹{request.requestAmount.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-blue-600">
                          ₹{request.eligibleAmount.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm font-medium text-green-600">
                          {request.approvedAmount > 0 ? `₹${request.approvedAmount.toLocaleString()}` : "-"}
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={
                            request.status === "Approved" ? "bg-green-100 text-green-800" :
                            request.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
                            "bg-gray-100 text-gray-800"
                          }>
                            {request.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{request.requestDate}</td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">Review</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdrawals">
          <Card>
            <CardHeader>
              <CardTitle>PF Withdrawal Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Withdrawal Types</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Partial Withdrawal:</strong> For specific purposes (education, medical, etc.) with eligibility criteria</li>
                  <li>• <strong>Final Settlement:</strong> On retirement, resignation, or death - full PF balance with interest</li>
                </ul>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Withdrawal ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Reason</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Request Amount</th>
                      <th className="text-right py-3 px-4 font-semibold text-sm text-gray-700">Eligible Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Process Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalRequests.map((request) => (
                      <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">{request.id}</td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{request.name}</p>
                            <p className="text-xs text-gray-500">{request.empId}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{request.type}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{request.reason}</td>
                        <td className="py-3 px-4 text-right text-sm text-gray-600">
                          ₹{request.requestAmount.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-sm font-medium text-green-600">
                          ₹{request.eligibleAmount.toLocaleString()}
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={
                            request.status === "Approved" ? "bg-green-100 text-green-800" :
                            "bg-yellow-100 text-yellow-800"
                          }>
                            {request.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{request.processDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interest">
          <Card>
            <CardHeader>
              <CardTitle>Annual Interest Calculation & Posting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">FY 2025-26 Interest Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-green-700">Interest Rate</p>
                      <p className="text-2xl font-bold text-green-900">{pfSummary.interestRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Total Corpus</p>
                      <p className="text-2xl font-bold text-green-900">₹{(pfSummary.totalCorpus / 10000000).toFixed(1)} Cr</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Interest Calculated</p>
                      <p className="text-2xl font-bold text-green-900">₹{(pfSummary.fyInterest / 10000000).toFixed(2)} Cr</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Status</p>
                      <Badge className="bg-green-600 text-white mt-2">Posted to Accounts</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Interest Calculation Process</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Monthly PF contributions posted to individual ledgers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Interest calculated on opening balance + monthly contributions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Interest rate as per government notification: {pfSummary.interestRate}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Interest credited to individual accounts on March 31st</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Annual PF statements generated and issued to all members</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Calculate Interest
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Generate Annual Statements
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Export Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
