import { useParams, Link } from "react-router";
import { ArrowLeft, User, FileText, Calendar, TrendingUp, MapPin, Award, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function EmployeeDetails() {
  const { id } = useParams();

  const employee = {
    id: "EMP001",
    name: "Rajesh Kumar Singh",
    designation: "Senior Clerk",
    department: "Finance",
    category: "General",
    dob: "1985-06-15",
    doj: "2015-04-15",
    payScale: "GP 4200",
    basicPay: "45000",
    status: "Active",
    email: "rajesh.kumar@gov.in",
    phone: "+91-9876543210",
    address: "123, Government Colony, Sector 12, New Delhi - 110001",
    qualification: "B.Com, MBA",
    identificationMarks: "Mole on left cheek, Scar on right hand",
    bankName: "State Bank of India",
    accountNumber: "1234567890123",
    ifscCode: "SBIN0001234",
    panNumber: "ABCDE1234F",
    aadharNumber: "1234-5678-9012",
    pfNumber: "DL/123456/789",
  };

  const serviceHistory = [
    { date: "2015-04-15", event: "Appointment", designation: "Junior Clerk", payScale: "GP 2800", remarks: "Direct Recruitment" },
    { date: "2017-04-15", event: "Probation Confirmed", designation: "Junior Clerk", payScale: "GP 2800", remarks: "Confirmed after 2 years" },
    { date: "2020-05-01", event: "Promotion", designation: "Senior Clerk", payScale: "GP 4200", remarks: "Regular Promotion" },
    { date: "2021-07-01", event: "Increment", designation: "Senior Clerk", payScale: "GP 4200", remarks: "Annual Increment" },
    { date: "2022-07-01", event: "Increment", designation: "Senior Clerk", payScale: "GP 4200", remarks: "Annual Increment" },
    { date: "2023-07-01", event: "Increment", designation: "Senior Clerk", payScale: "GP 4200", remarks: "Annual Increment" },
    { date: "2024-07-01", event: "Increment", designation: "Senior Clerk", payScale: "GP 4200", remarks: "Annual Increment" },
  ];

  const leaveRecords = [
    { year: "2024-25", type: "Casual Leave", opening: 8, availed: 3, balance: 5 },
    { year: "2024-25", type: "Earned Leave", opening: 138, availed: 12, balance: 126 },
    { year: "2024-25", type: "Half Pay Leave", opening: 45, availed: 0, balance: 45 },
    { year: "2023-24", type: "Casual Leave", opening: 8, availed: 6, balance: 2 },
    { year: "2023-24", type: "Earned Leave", opening: 135, availed: 15, balance: 120 },
  ];

  const promotionRecords = [
    { date: "2020-05-01", from: "Junior Clerk (GP 2800)", to: "Senior Clerk (GP 4200)", type: "Regular", orderNo: "PROM/2020/123" },
  ];

  const transferRecords = [
    { date: "2018-11-15", from: "Regional Office - Delhi South", to: "Head Office - Finance Department", orderNo: "TRANS/2018/456" },
  ];

  const pfLedger = [
    { month: "Feb 2026", empContribution: 5400, empContribution2: 5400, interest: 0, balance: 648000 },
    { month: "Jan 2026", empContribution: 5400, empContribution2: 5400, interest: 0, balance: 637200 },
    { month: "Dec 2025", empContribution: 5400, empContribution2: 5400, interest: 0, balance: 626400 },
    { month: "Nov 2025", empContribution: 5400, empContribution2: 5400, interest: 0, balance: 615600 },
    { month: "Oct 2025", empContribution: 5400, empContribution2: 5400, interest: 0, balance: 604800 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/employees">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Employees
          </Button>
        </Link>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-blue-900 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
            {employee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{employee.name}</h1>
            <p className="text-lg text-gray-600 mt-1">{employee.designation}</p>
            <div className="flex items-center gap-3 mt-2">
              <Badge className="bg-green-100 text-green-800">{employee.status}</Badge>
              <Badge variant="outline">{employee.category}</Badge>
              <span className="text-sm text-gray-500">Employee ID: {employee.id}</span>
            </div>
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Service Book
        </Button>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
          <TabsTrigger value="personal">Personal Details</TabsTrigger>
          <TabsTrigger value="service">Service History</TabsTrigger>
          <TabsTrigger value="leave">Leave Records</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-sm font-medium text-gray-900">{employee.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-sm font-medium text-gray-900">{employee.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="text-sm font-medium text-gray-900">{employee.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Qualification</p>
                    <p className="text-sm font-medium text-gray-900">{employee.qualification}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Identification Marks</p>
                    <p className="text-sm font-medium text-gray-900">{employee.identificationMarks}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Employment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Employee ID</p>
                    <p className="text-sm font-medium text-gray-900">{employee.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date of Joining</p>
                    <p className="text-sm font-medium text-gray-900">{employee.doj}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Designation</p>
                    <p className="text-sm font-medium text-gray-900">{employee.designation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="text-sm font-medium text-gray-900">{employee.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pay Scale</p>
                    <p className="text-sm font-medium text-gray-900">{employee.payScale}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Basic Pay</p>
                    <p className="text-sm font-medium text-gray-900">₹{employee.basicPay}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">{employee.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-sm font-medium text-gray-900">{employee.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-sm font-medium text-gray-900">{employee.address}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bank & Statutory Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="text-sm font-medium text-gray-900">{employee.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="text-sm font-medium text-gray-900">{employee.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">IFSC Code</p>
                    <p className="text-sm font-medium text-gray-900">{employee.ifscCode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">PF Number</p>
                    <p className="text-sm font-medium text-gray-900">{employee.pfNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">PAN Number</p>
                    <p className="text-sm font-medium text-gray-900">{employee.panNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Aadhar Number</p>
                    <p className="text-sm font-medium text-gray-900">{employee.aadharNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="service" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Complete Service History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Event Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Designation</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Pay Scale</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceHistory.map((record, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{record.date}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{record.event}</Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">{record.designation}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{record.payScale}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{record.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Promotion History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {promotionRecords.map((record, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{record.date}</span>
                        <Badge variant="secondary">{record.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">From: {record.from}</p>
                      <p className="text-sm text-gray-600">To: {record.to}</p>
                      <p className="text-xs text-gray-500 mt-1">Order No: {record.orderNo}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transfer History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transferRecords.map((record, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{record.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">From: {record.from}</p>
                      <p className="text-sm text-gray-600">To: {record.to}</p>
                      <p className="text-xs text-gray-500 mt-1">Order No: {record.orderNo}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="leave" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Leave Ledger</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Year</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Leave Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Opening Balance</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Availed</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Current Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRecords.map((record, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{record.year}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{record.type}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{record.opening}</td>
                        <td className="py-3 px-4 text-sm text-red-600">{record.availed}</td>
                        <td className="py-3 px-4 text-sm font-medium text-green-600">{record.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>PF Ledger (Last 5 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Month</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employee Contribution</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Employer Contribution</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Interest</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Cumulative Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pfLedger.map((record, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{record.month}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">₹{record.empContribution.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">₹{record.empContribution2.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">₹{record.interest}</td>
                        <td className="py-3 px-4 text-sm font-medium text-green-600">₹{record.balance.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">Total PF Balance: ₹6,48,000</p>
                <p className="text-xs text-blue-700 mt-1">As on February 2026</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Repository</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  "Appointment Order",
                  "Confirmation Order",
                  "Promotion Orders",
                  "Increment Certificates",
                  "Leave Certificates",
                  "Transfer Orders",
                  "Annual Confidential Reports (ACR)",
                  "Educational Certificates",
                  "Medical Fitness Certificate",
                  "Identity Proof (Aadhar)",
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">{doc}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
