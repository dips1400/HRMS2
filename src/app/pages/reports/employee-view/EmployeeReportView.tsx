import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ArrowLeft, Search, Download, Filter, X, FileText, Users, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Badge } from "../../../components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Employee {
  id: string;
  name: string;
  designation: string;
  department: string;
  category: string;
  dob: string;
  doj: string;
  payScale: string;
  basicPay: string;
  status: string;
  email: string;
  phone: string;
  pfNumber: string;
  panNumber: string;
  centre: string;
  cadre: string;
  yearsOfService: number;
  seniority: number;
}

// ─── Mock employee dataset ────────────────────────────────────────────────────

const ALL_EMPLOYEES: Employee[] = [
  { id: "EMP001", name: "Rajesh Kumar Singh",   designation: "Senior Clerk",       department: "Finance",        category: "General", dob: "1985-06-15", doj: "2015-04-15", payScale: "GP 4200", basicPay: "45000",  status: "Active", email: "rajesh.kumar@gov.in",   phone: "+91-9876543210", pfNumber: "DL/123456/789", panNumber: "ABCDE1234F", centre: "Pune",   cadre: "Clerical",       yearsOfService: 10, seniority: 3  },
  { id: "EMP002", name: "Priya Sharma",          designation: "Assistant Engineer", department: "Engineering",    category: "OBC",     dob: "1990-03-22", doj: "2018-07-01", payScale: "GP 4600", basicPay: "52000",  status: "Active", email: "priya.sharma@gov.in",   phone: "+91-9876543211", pfNumber: "MH/234567/890", panNumber: "BCDEF2345G", centre: "Mumbai", cadre: "Technical",      yearsOfService: 7,  seniority: 8  },
  { id: "EMP003", name: "Amit Patel",            designation: "Section Officer",    department: "Administration", category: "General", dob: "1982-11-05", doj: "2012-03-20", payScale: "GP 4800", basicPay: "58000",  status: "Active", email: "amit.patel@gov.in",     phone: "+91-9876543212", pfNumber: "MH/345678/901", panNumber: "CDEFG3456H", centre: "Nagpur", cadre: "Administrative", yearsOfService: 13, seniority: 2  },
  { id: "EMP004", name: "Sunita Verma",          designation: "Medical Officer",    department: "Medical",        category: "SC",      dob: "1988-07-30", doj: "2019-09-10", payScale: "GP 5400", basicPay: "72000",  status: "Active", email: "sunita.verma@gov.in",   phone: "+91-9876543213", pfNumber: "MH/456789/012", panNumber: "DEFGH4567I", centre: "Pune",   cadre: "Medical",        yearsOfService: 6,  seniority: 10 },
  { id: "EMP005", name: "Vijay Singh Rathore",   designation: "Junior Clerk",       department: "Education",      category: "General", dob: "1999-02-14", doj: "2024-01-15", payScale: "GP 2800", basicPay: "32000",  status: "Active", email: "vijay.rathore@gov.in",  phone: "+91-9876543214", pfNumber: "NS/567890/123", panNumber: "EFGHI5678J", centre: "Nashik", cadre: "Clerical",       yearsOfService: 1,  seniority: 15 },
  { id: "EMP006", name: "Kavita Desai",          designation: "Accountant",         department: "Finance",        category: "OBC",     dob: "1987-09-18", doj: "2016-11-22", payScale: "GP 4200", basicPay: "48000",  status: "Active", email: "kavita.desai@gov.in",   phone: "+91-9876543215", pfNumber: "MH/678901/234", panNumber: "FGHIJ6789K", centre: "Mumbai", cadre: "Accounts",       yearsOfService: 8,  seniority: 6  },
  { id: "EMP007", name: "Ramesh Chandra",        designation: "Superintendent",     department: "Administration", category: "SC",      dob: "1979-04-25", doj: "2010-08-05", payScale: "GP 4800", basicPay: "62000",  status: "Active", email: "ramesh.chandra@gov.in", phone: "+91-9876543216", pfNumber: "MH/789012/345", panNumber: "GHIJK7890L", centre: "Pune",   cadre: "Administrative", yearsOfService: 15, seniority: 1  },
  { id: "EMP008", name: "Anita Rao",             designation: "Executive Engineer", department: "Engineering",    category: "General", dob: "1983-12-08", doj: "2013-05-18", payScale: "GP 6600", basicPay: "85000",  status: "Active", email: "anita.rao@gov.in",      phone: "+91-9876543217", pfNumber: "NG/890123/456", panNumber: "HIJKL8901M", centre: "Nagpur", cadre: "Technical",      yearsOfService: 12, seniority: 4  },
  { id: "EMP009", name: "Suresh Nair",           designation: "Senior Clerk",       department: "Finance",        category: "ST",      dob: "1986-05-12", doj: "2014-06-01", payScale: "GP 4200", basicPay: "46000",  status: "Active", email: "suresh.nair@gov.in",    phone: "+91-9876543218", pfNumber: "MH/901234/567", panNumber: "IJKLM9012N", centre: "Mumbai", cadre: "Clerical",       yearsOfService: 11, seniority: 5  },
  { id: "EMP010", name: "Meera Joshi",           designation: "Junior Clerk",       department: "Education",      category: "OBC",     dob: "1995-08-20", doj: "2022-03-10", payScale: "GP 2800", basicPay: "33000",  status: "Active", email: "meera.joshi@gov.in",    phone: "+91-9876543219", pfNumber: "NS/012345/678", panNumber: "JKLMN0123O", centre: "Nashik", cadre: "Clerical",       yearsOfService: 3,  seniority: 14 },
  { id: "EMP011", name: "Prakash Kulkarni",      designation: "Section Officer",    department: "Administration", category: "General", dob: "1981-01-30", doj: "2011-10-15", payScale: "GP 4800", basicPay: "60000",  status: "Active", email: "prakash.k@gov.in",      phone: "+91-9876543220", pfNumber: "MH/123456/890", panNumber: "KLMNO1234P", centre: "Pune",   cadre: "Administrative", yearsOfService: 14, seniority: 2  },
  { id: "EMP012", name: "Deepa Pillai",          designation: "Medical Officer",    department: "Medical",        category: "SC",      dob: "1991-06-03", doj: "2020-02-20", payScale: "GP 5400", basicPay: "70000",  status: "Active", email: "deepa.pillai@gov.in",   phone: "+91-9876543221", pfNumber: "MH/234567/901", panNumber: "LMNOP2345Q", centre: "Mumbai", cadre: "Medical",        yearsOfService: 5,  seniority: 11 },
];

// ─── Report type configs ──────────────────────────────────────────────────────

type ReportType =
  | "Employee Master Register"
  | "Category-wise Distribution"
  | "Department-wise Employee List"
  | "Seniority List"
  | "Digital Service Book Export";

interface ReportConfig {
  title: string;
  description: string;
  columns: { key: keyof Employee | "sno"; label: string }[];
  groupBy?: keyof Employee;
}

const REPORT_CONFIGS: Record<ReportType, ReportConfig> = {
  "Employee Master Register": {
    title: "Employee Master Register",
    description: "Complete employee details with service information",
    columns: [
      { key: "sno",         label: "S.No"        },
      { key: "id",          label: "Emp ID"      },
      { key: "name",        label: "Name"        },
      { key: "designation", label: "Designation" },
      { key: "department",  label: "Department"  },
      { key: "category",    label: "Category"    },
      { key: "doj",         label: "DOJ"         },
      { key: "payScale",    label: "Pay Scale"   },
      { key: "basicPay",    label: "Basic Pay"   },
      { key: "status",      label: "Status"      },
    ],
  },
  "Category-wise Distribution": {
    title: "Category-wise Distribution",
    description: "General / OBC / SC / ST breakdown",
    columns: [
      { key: "sno",         label: "S.No"        },
      { key: "id",          label: "Emp ID"      },
      { key: "name",        label: "Name"        },
      { key: "designation", label: "Designation" },
      { key: "department",  label: "Department"  },
      { key: "category",    label: "Category"    },
      { key: "doj",         label: "DOJ"         },
      { key: "status",      label: "Status"      },
    ],
    groupBy: "category",
  },
  "Department-wise Employee List": {
    title: "Department-wise Employee List",
    description: "Employees grouped by department",
    columns: [
      { key: "sno",         label: "S.No"        },
      { key: "id",          label: "Emp ID"      },
      { key: "name",        label: "Name"        },
      { key: "designation", label: "Designation" },
      { key: "department",  label: "Department"  },
      { key: "payScale",    label: "Pay Scale"   },
      { key: "basicPay",    label: "Basic Pay"   },
      { key: "status",      label: "Status"      },
    ],
    groupBy: "department",
  },
  "Seniority List": {
    title: "Seniority List",
    description: "Designation-wise seniority register",
    columns: [
      { key: "seniority",   label: "Seniority"   },
      { key: "id",          label: "Emp ID"      },
      { key: "name",        label: "Name"        },
      { key: "designation", label: "Designation" },
      { key: "department",  label: "Department"  },
      { key: "doj",         label: "DOJ"         },
      { key: "yearsOfService", label: "Years of Service" },
      { key: "payScale",    label: "Pay Scale"   },
    ],
    groupBy: "designation",
  },
  "Digital Service Book Export": {
    title: "Digital Service Book Export",
    description: "Complete service history of all employees",
    columns: [
      { key: "sno",         label: "S.No"        },
      { key: "id",          label: "Emp ID"      },
      { key: "name",        label: "Name"        },
      { key: "designation", label: "Designation" },
      { key: "department",  label: "Department"  },
      { key: "dob",         label: "DOB"         },
      { key: "doj",         label: "DOJ"         },
      { key: "payScale",    label: "Pay Scale"   },
      { key: "basicPay",    label: "Basic Pay"   },
      { key: "pfNumber",    label: "PF Number"   },
      { key: "panNumber",   label: "PAN"         },
      { key: "status",      label: "Status"      },
    ],
  },
};

// ─── PDF generator (pure browser, no libs needed) ────────────────────────────

function generatePDF(reportName: string, columns: ReportConfig["columns"], rows: Employee[]) {
  const win = window.open("", "_blank");
  if (!win) return;

  const colsToShow = columns.filter((c) => c.key !== "sno");
  let sno = 1;

  const tableRows = rows.map((emp) => {
    const cells = colsToShow.map((col) => {
      let val: string = "";
      if (col.key === "basicPay") val = "₹" + Number(emp.basicPay).toLocaleString("en-IN");
      else if (col.key === "yearsOfService") val = String(emp.yearsOfService) + " yrs";
      else val = String(emp[col.key as keyof Employee] ?? "");
      return `<td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#374151;">${val}</td>`;
    });
    return `<tr><td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#6b7280;">${sno++}</td>${cells.join("")}</tr>`;
  }).join("");

  const headerCells = [
    `<th style="padding:8px 10px;background:#1e3a5f;color:#fff;font-size:11px;text-align:left;">S.No</th>`,
    ...colsToShow.map((c) => `<th style="padding:8px 10px;background:#1e3a5f;color:#fff;font-size:11px;text-align:left;">${c.label}</th>`),
  ].join("");

  win.document.write(`<!DOCTYPE html><html><head><title>${reportName}</title>
  <style>body{font-family:Arial,sans-serif;padding:24px;color:#111827;}
  table{border-collapse:collapse;width:100%;}
  tr:nth-child(even) td{background:#f9fafb;}
  @media print{button{display:none!important;}}
  </style></head><body>
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
    <div>
      <div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Maharashtra State Warehousing Corporation</div>
      <h2 style="margin:4px 0;font-size:16px;color:#1e3a5f;">${reportName}</h2>
      <div style="font-size:11px;color:#6b7280;">Generated: ${new Date().toLocaleDateString("en-IN")} &nbsp;|&nbsp; Total Records: ${rows.length}</div>
    </div>
    <button onclick="window.print()" style="padding:8px 16px;background:#1d4ed8;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;">🖨 Print / Save PDF</button>
  </div>
  <hr style="margin:12px 0;border:0;border-top:2px solid #1e3a5f;"/>
  <table><thead><tr>${headerCells}</tr></thead><tbody>${tableRows}</tbody></table>
  <div style="margin-top:16px;font-size:10px;color:#9ca3af;text-align:right;">HRMS · FY 2025-26 · ${reportName}</div>
  </body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 400);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EmployeeReportView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const reportName = (searchParams.get("report") ?? "Employee Master Register") as ReportType;

  const config = REPORT_CONFIGS[reportName] ?? REPORT_CONFIGS["Employee Master Register"];

  // Filters
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("all");
  const [filterCat, setFilterCat] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [groupOpen, setGroupOpen] = useState<Record<string, boolean>>({});

  const departments = [...new Set(ALL_EMPLOYEES.map((e) => e.department))];
  const categories  = [...new Set(ALL_EMPLOYEES.map((e) => e.category))];

  const filtered = useMemo(() => {
    let list = ALL_EMPLOYEES.filter((emp) => {
      const s = search.toLowerCase();
      const matchSearch = !s || emp.name.toLowerCase().includes(s) || emp.id.toLowerCase().includes(s) || emp.designation.toLowerCase().includes(s);
      const matchDept   = filterDept   === "all" || emp.department === filterDept;
      const matchCat    = filterCat    === "all" || emp.category   === filterCat;
      const matchStatus = filterStatus === "all" || emp.status     === filterStatus;
      return matchSearch && matchDept && matchCat && matchStatus;
    });
    if (reportName === "Seniority List") list = [...list].sort((a, b) => a.seniority - b.seniority);
    return list;
  }, [search, filterDept, filterCat, filterStatus, reportName]);

  // Group data if needed
  const grouped: Record<string, Employee[]> | null = useMemo(() => {
    if (!config.groupBy) return null;
    const g: Record<string, Employee[]> = {};
    filtered.forEach((emp) => {
      const key = String(emp[config.groupBy!]);
      if (!g[key]) g[key] = [];
      g[key].push(emp);
    });
    return g;
  }, [filtered, config.groupBy]);

  const toggleGroup = (key: string) =>
    setGroupOpen((p) => ({ ...p, [key]: p[key] === false ? true : false }));

  const isGroupOpen = (key: string) => groupOpen[key] !== false;

  const colsToShow = config.columns;

  // ─── Table renderer ───────────────────────────────────────────────────────

  function renderTable(rows: Employee[], startSno = 1) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {colsToShow.map((col) => (
                <th key={col.key} className="text-left py-3 px-4 font-semibold text-xs text-gray-600 whitespace-nowrap uppercase tracking-wide">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((emp, i) => (
              <tr key={emp.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                {colsToShow.map((col) => {
                  let value: React.ReactNode;
                  if (col.key === "sno") {
                    value = <span className="text-gray-400">{startSno + i}</span>;
                  } else if (col.key === "id") {
                    value = <span className="font-medium text-blue-600">{emp.id}</span>;
                  } else if (col.key === "name") {
                    value = <span className="font-medium text-gray-900">{emp.name}</span>;
                  } else if (col.key === "basicPay") {
                    value = <span className="font-medium text-gray-800">₹{Number(emp.basicPay).toLocaleString("en-IN")}</span>;
                  } else if (col.key === "status") {
                    value = <Badge className="bg-green-100 text-green-800">{emp.status}</Badge>;
                  } else if (col.key === "category") {
                    value = <Badge variant="outline">{emp.category}</Badge>;
                  } else if (col.key === "seniority") {
                    value = <span className="font-bold text-gray-700">#{emp.seniority}</span>;
                  } else if (col.key === "yearsOfService") {
                    value = <span className="text-gray-600">{emp.yearsOfService} yrs</span>;
                  } else {
                    value = <span className="text-gray-600">{emp[col.key as keyof Employee]}</span>;
                  }
                  return (
                    <td key={col.key} className="py-3 px-4 text-sm whitespace-nowrap">
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ─── Summary stats ────────────────────────────────────────────────────────

  const stats = [
    { label: "Total Records", value: filtered.length },
    { label: "Departments",   value: new Set(filtered.map((e) => e.department)).size },
    { label: "Categories",    value: new Set(filtered.map((e) => e.category)).size },
    { label: "Active",        value: filtered.filter((e) => e.status === "Active").length },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Reports
        </Button>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
          </div>
          <p className="text-gray-500 mt-1 ml-10">{config.description} · FY 2025-26</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => generatePDF(config.title, colsToShow, filtered)}
          >
            <FileText className="w-4 h-4" />
            Print / PDF
          </Button>
          <Button
            className="flex items-center gap-2"
            onClick={() => generatePDF(config.title, colsToShow, filtered)}
          >
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5">
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search & Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Filter className="w-4 h-4" /> Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, ID, designation..."
                className="pl-9"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            >
              <option value="all">All Departments</option>
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          {(search || filterDept !== "all" || filterCat !== "all" || filterStatus !== "all") && (
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-gray-500">Active filters:</span>
              {search && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Search: "{search}" <button onClick={() => setSearch("")}><X className="w-3 h-3" /></button>
                </span>
              )}
              {filterDept !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Dept: {filterDept} <button onClick={() => setFilterDept("all")}><X className="w-3 h-3" /></button>
                </span>
              )}
              {filterCat !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Cat: {filterCat} <button onClick={() => setFilterCat("all")}><X className="w-3 h-3" /></button>
                </span>
              )}
              <button onClick={() => { setSearch(""); setFilterDept("all"); setFilterCat("all"); setFilterStatus("all"); }}
                className="text-xs text-gray-400 hover:text-gray-600 ml-1">
                Clear all
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Data Table */}
      {!grouped ? (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{config.title} ({filtered.length} records)</CardTitle>
              <Button variant="outline" size="sm" onClick={() => generatePDF(config.title, colsToShow, filtered)} className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-400 text-sm">No records match the current filters.</div>
            ) : (
              renderTable(filtered)
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {Object.entries(grouped).map(([groupKey, groupRows]) => (
            <Card key={groupKey}>
              <CardHeader className="cursor-pointer" onClick={() => toggleGroup(groupKey)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isGroupOpen(groupKey) ? "" : "-rotate-90"}`} />
                    {groupKey}
                    <Badge variant="outline">{groupRows.length} employees</Badge>
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => { e.stopPropagation(); generatePDF(`${config.title} - ${groupKey}`, colsToShow, groupRows); }}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </div>
              </CardHeader>
              {isGroupOpen(groupKey) && (
                <CardContent>
                  {renderTable(groupRows)}
                </CardContent>
              )}
            </Card>
          ))}

          {Object.keys(grouped).length === 0 && (
            <div className="text-center py-12 text-gray-400 text-sm">No records match the current filters.</div>
          )}

          {/* Summary table for grouped views */}
          {config.groupBy && (
            <Card>
              <CardHeader>
                <CardTitle>Summary by {config.groupBy.charAt(0).toUpperCase() + config.groupBy.slice(1)}</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-4 text-sm font-semibold text-gray-700">{config.groupBy.charAt(0).toUpperCase() + config.groupBy.slice(1)}</th>
                      <th className="text-left py-2 px-4 text-sm font-semibold text-gray-700">Count</th>
                      <th className="text-left py-2 px-4 text-sm font-semibold text-gray-700">% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(grouped).map(([key, rows]) => (
                      <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-2 px-4 text-sm font-medium text-gray-900">{key}</td>
                        <td className="py-2 px-4 text-sm text-gray-700">{rows.length}</td>
                        <td className="py-2 px-4 text-sm text-gray-500">{((rows.length / filtered.length) * 100).toFixed(1)}%</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-gray-200">
                      <td className="py-2 px-4 text-sm font-bold text-gray-900">Total</td>
                      <td className="py-2 px-4 text-sm font-bold text-gray-900">{filtered.length}</td>
                      <td className="py-2 px-4 text-sm font-bold text-gray-900">100%</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}