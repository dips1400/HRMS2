import { useState } from "react";
import { Plus, Search, FileText, CheckCircle, Clock, Eye, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Label } from "../components/ui/lable2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select2"
import { Textarea } from "../components/ui/textarea2";

const jobPostings = [
  {
    id: "JOB001",
    title: "Assistant Engineer",
    department: "Public Works",
    positions: 5,
    qualifications: "B.Tech in Civil Engineering",
    experience: "2-5 years",
    postedOn: "2026-02-10",
    closingDate: "2026-03-10",
    applications: 89,
    status: "Active"
  },
  {
    id: "JOB002",
    title: "Staff Nurse",
    department: "Health",
    positions: 10,
    qualifications: "B.Sc Nursing or GNM",
    experience: "1-3 years",
    postedOn: "2026-02-08",
    closingDate: "2026-03-08",
    applications: 156,
    status: "Active"
  },
  {
    id: "JOB003",
    title: "Primary Teacher",
    department: "Education",
    positions: 15,
    qualifications: "B.Ed with relevant subject",
    experience: "0-2 years",
    postedOn: "2026-02-05",
    closingDate: "2026-03-05",
    applications: 234,
    status: "Active"
  },
  {
    id: "JOB004",
    title: "Accountant",
    department: "Finance",
    positions: 3,
    qualifications: "B.Com with CA/ICWA",
    experience: "3-7 years",
    postedOn: "2026-01-25",
    closingDate: "2026-02-25",
    applications: 67,
    status: "Closed"
  },
];

const recruitmentCycles = [
  {
    id: "RC2025-001",
    postName: "Junior Clerk",
    vacancies: 45,
    category: { General: 20, OBC: 12, SC: 8, ST: 5 },
    type: "Direct",
    status: "Exam Completed",
    agency: "Government Examination Board",
    examDate: "2025-12-15",
    resultDate: "2026-01-20",
  },
  {
    id: "RC2025-002",
    postName: "Assistant Engineer",
    vacancies: 15,
    category: { General: 7, OBC: 4, SC: 3, ST: 1 },
    type: "Direct",
    status: "Merit List Published",
    agency: "Technical Services Commission",
    examDate: "2025-11-10",
    resultDate: "2026-01-05",
  },
  {
    id: "RC2025-003",
    postName: "Accountant",
    vacancies: 8,
    category: { General: 4, OBC: 2, SC: 1, ST: 1 },
    type: "Compassionate",
    status: "Under Review",
    agency: "Internal Committee",
    examDate: "-",
    resultDate: "-",
  },
];

const candidates = [
  {
    id: "CAND001",
    name: "Amit Kumar",
    post: "Junior Clerk",
    category: "General",
    rank: 1,
    marks: 95,
    status: "Selected",
    appointmentOrder: "APT/2026/001",
  },
  {
    id: "CAND002",
    name: "Priya Singh",
    post: "Junior Clerk",
    category: "OBC",
    rank: 2,
    marks: 92,
    status: "Selected",
    appointmentOrder: "APT/2026/002",
  },
  {
    id: "CAND003",
    name: "Rahul Sharma",
    post: "Assistant Engineer",
    category: "General",
    rank: 1,
    marks: 88,
    status: "Document Verification",
    appointmentOrder: "-",
  },
  {
    id: "CAND004",
    name: "Anjali Verma",
    post: "Assistant Engineer",
    category: "SC",
    rank: 1,
    marks: 85,
    status: "Selected",
    appointmentOrder: "APT/2026/003",
  },
];

const vacancyPositions = [
  { department: "Finance", post: "Junior Clerk", sanctioned: 120, filled: 98, vacant: 22, reserved: { OBC: 6, SC: 4, ST: 2 } },
  { department: "Engineering", post: "Assistant Engineer", sanctioned: 45, filled: 38, vacant: 7, reserved: { OBC: 2, SC: 1, ST: 1 } },
  { department: "Administration", post: "Section Officer", sanctioned: 35, filled: 32, vacant: 3, reserved: { OBC: 1, SC: 1, ST: 0 } },
  { department: "Medical", post: "Medical Officer", sanctioned: 60, filled: 54, vacant: 6, reserved: { OBC: 2, SC: 1, ST: 1 } },
];

export default function Recruitment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open,setOpen] = useState(false)

    const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Job posting created successfully!");
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recruitment Management</h1>
          <p className="text-gray-500 mt-1">Vacancy Management, Recruitment Cycles & Roster Compliance</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Recruitment Cycle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Active Recruitment Cycles</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Total Vacancies</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">68</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Candidates Shortlisted</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600">Appointments Issued</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">32</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cycles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="cycles">Recruitment Cycles</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="vacancies">Vacancy Position</TabsTrigger>
          <TabsTrigger value="roster">Roster Management</TabsTrigger>
          <TabsTrigger value="jobposting">Job Posting</TabsTrigger>
        </TabsList>

        <TabsContent value="cycles">
          <Card>
            <CardHeader>
              <CardTitle>Active Recruitment Cycles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recruitmentCycles.map((cycle) => (
                  <div key={cycle.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{cycle.postName}</h3>
                        <p className="text-sm text-gray-500">Cycle ID: {cycle.id}</p>
                      </div>
                      <Badge className={
                        cycle.status === "Merit List Published" ? "bg-green-100 text-green-800" :
                        cycle.status === "Exam Completed" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }>
                        {cycle.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Total Vacancies</p>
                        <p className="text-sm font-medium text-gray-900">{cycle.vacancies}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Recruitment Type</p>
                        <p className="text-sm font-medium text-gray-900">{cycle.type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Exam Date</p>
                        <p className="text-sm font-medium text-gray-900">{cycle.examDate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Result Date</p>
                        <p className="text-sm font-medium text-gray-900">{cycle.resultDate}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-2">Category-wise Breakdown</p>
                      <div className="flex gap-2">
                        {Object.entries(cycle.category).map(([cat, count]) => (
                          <Badge key={cat} variant="outline">
                            {cat}: {count}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">Agency: {cycle.agency}</p>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="candidates">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Candidate List</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Upload Merit List</Button>
                  <Button variant="outline" size="sm">Generate Appointment Orders</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search candidates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Candidate ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Post Applied</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Rank</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Marks</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Appointment Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate) => (
                      <tr key={candidate.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">{candidate.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{candidate.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{candidate.post}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{candidate.category}</Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{candidate.rank}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{candidate.marks}</td>
                        <td className="py-3 px-4">
                          <Badge className={
                            candidate.status === "Selected" ? "bg-green-100 text-green-800" :
                            "bg-yellow-100 text-yellow-800"
                          }>
                            {candidate.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{candidate.appointmentOrder}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vacancies">
          <Card>
            <CardHeader>
              <CardTitle>Sanctioned vs Filled Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Department</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Post</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Sanctioned</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Filled</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Vacant</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">Reserved (OBC/SC/ST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vacancyPositions.map((pos, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{pos.department}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{pos.post}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{pos.sanctioned}</td>
                        <td className="py-3 px-4 text-sm text-green-600 font-medium">{pos.filled}</td>
                        <td className="py-3 px-4 text-sm text-red-600 font-medium">{pos.vacant}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {pos.reserved.OBC}/{pos.reserved.SC}/{pos.reserved.ST}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roster">
          <Card>
            <CardHeader>
              <CardTitle>Reservation Roster Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Reservation Policy (As per Government Rules)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-blue-700">General (Unreserved)</p>
                      <p className="text-2xl font-bold text-blue-900">50%</p>
                    </div>
                    <div>
                      <p className="text-blue-700">OBC</p>
                      <p className="text-2xl font-bold text-blue-900">27%</p>
                    </div>
                    <div>
                      <p className="text-blue-700">SC</p>
                      <p className="text-2xl font-bold text-blue-900">15%</p>
                    </div>
                    <div>
                      <p className="text-blue-700">ST</p>
                      <p className="text-2xl font-bold text-blue-900">8%</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Current Compliance Status</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">OBC Compliance</span>
                        <span className="text-sm font-medium text-gray-900">89% (Target: 27%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">SC Compliance</span>
                        <span className="text-sm font-medium text-gray-900">92% (Target: 15%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-600">ST Compliance</span>
                        <span className="text-sm font-medium text-gray-900">78% (Target: 8%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

          <TabsContent value="jobposting">
             {/* Job Postings Table */}
             <Button onClick={() => setOpen(true)} style={{marginBottom:"10px"}}>Add Job Posting</Button>
      <Card>
        <CardHeader>
          <CardTitle>All Job Postings
            
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto mt-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job ID</TableHead>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Positions</TableHead>
                  <TableHead>Qualifications</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead>Posted On</TableHead>
                  <TableHead>Closing Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobPostings.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.id}</TableCell>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.department}</TableCell>
                    <TableCell>{job.positions}</TableCell>
                    <TableCell className="max-w-xs truncate">{job.qualifications}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{job.applications}</Badge>
                    </TableCell>
                    <TableCell>{job.postedOn}</TableCell>
                    <TableCell>{job.closingDate}</TableCell>
                    <TableCell>
                      <Badge variant={job.status === "Active" ? "default" : "secondary"}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
        </TabsContent>

        <Dialog open={open} >
          <DialogTrigger asChild>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Job Posting</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new job posting
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateJob} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input id="jobTitle" placeholder="Enter job title" required />
                </div>
                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administration">Administration</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="public-works">Public Works</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="positions">Number of Positions *</Label>
                  <Input id="positions" type="number" placeholder="5" required />
                </div>
                <div>
                  <Label htmlFor="experience">Experience Required</Label>
                  <Input id="experience" placeholder="e.g., 2-5 years" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="qualifications">Qualifications *</Label>
                  <Textarea id="qualifications" placeholder="Enter required qualifications" required />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea id="description" placeholder="Enter job description" required />
                </div>
                <div>
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input id="salary" placeholder="e.g., ₹40,000 - ₹60,000" />
                </div>
                <div>
                  <Label htmlFor="closingDate">Application Closing Date *</Label>
                  <Input id="closingDate" type="date" required />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Posting</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </Tabs>
    </div>
  );
}
