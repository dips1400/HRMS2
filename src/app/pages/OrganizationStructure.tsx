// import { Building2, Users } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

// const orgStructure = [
//   {
//     name: "Head Office",
//     type: "HQ",
//     location: "New Delhi",
//     head: "Director General",
//     employees: 456,
//     departments: ["Administration", "Finance", "HR", "Legal", "IT"],
//   },
//   {
//     name: "Regional Office - North",
//     type: "Regional",
//     location: "Chandigarh",
//     head: "Regional Director",
//     employees: 234,
//     departments: ["Operations", "Finance", "HR"],
//   },
//   {
//     name: "Regional Office - South",
//     type: "Regional",
//     location: "Chennai",
//     head: "Regional Director",
//     employees: 298,
//     departments: ["Operations", "Finance", "HR"],
//   },
//   {
//     name: "Regional Office - East",
//     type: "Regional",
//     location: "Kolkata",
//     head: "Regional Director",
//     employees: 189,
//     departments: ["Operations", "Finance", "HR"],
//   },
//   {
//     name: "Regional Office - West",
//     type: "Regional",
//     location: "Mumbai",
//     head: "Regional Director",
//     employees: 312,
//     departments: ["Operations", "Finance", "HR"],
//   },
// ];

// export default function OrganizationStructure() {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Organization Structure</h1>
//         <p className="text-gray-500 mt-1">Department Hierarchy & Regional Offices</p>
//       </div>

      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      //   {orgStructure.map((office, index) => (
      //     <Card key={index}>
      //       <CardHeader>
      //         <CardTitle className="flex items-center gap-2">
      //           <Building2 className="w-5 h-5 text-blue-600" />
      //           {office.name}
      //         </CardTitle>
      //       </CardHeader>
      //       <CardContent className="space-y-3">
      //         <div>
      //           <p className="text-sm text-gray-500">Type</p>
      //           <p className="text-sm font-medium text-gray-900">{office.type}</p>
      //         </div>
      //         <div>
      //           <p className="text-sm text-gray-500">Location</p>
      //           <p className="text-sm font-medium text-gray-900">{office.location}</p>
      //         </div>
      //         <div>
      //           <p className="text-sm text-gray-500">Office Head</p>
      //           <p className="text-sm font-medium text-gray-900">{office.head}</p>
      //         </div>
      //         <div>
      //           <p className="text-sm text-gray-500">Total Employees</p>
      //           <p className="text-2xl font-bold text-blue-600">{office.employees}</p>
      //         </div>
      //         <div>
      //           <p className="text-sm text-gray-500 mb-2">Departments</p>
      //           <div className="flex flex-wrap gap-1">
      //             {office.departments.map((dept, dIndex) => (
      //               <span key={dIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
      //                 {dept}
      //               </span>
      //             ))}
      //           </div>
      //         </div>
      //       </CardContent>
      //     </Card>
      //   ))}
      // </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Reporting Structure</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2 text-sm">
//             <p><strong>Level 1:</strong> Director General (Head Office)</p>
//             <p className="ml-4"><strong>Level 2:</strong> Regional Directors (Regional Offices)</p>
//             <p className="ml-8"><strong>Level 3:</strong> Department Heads</p>
//             <p className="ml-12"><strong>Level 4:</strong> Section Officers / Superintendents</p>
//             <p className="ml-16"><strong>Level 5:</strong> Assistant / Senior Clerks</p>
//             <p className="ml-20"><strong>Level 6:</strong> Junior Clerks / Support Staff</p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import { useState } from "react";
import { Building2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function OrganizationStructure() {
  const [orgStructure, setOrgStructure] = useState([
    {
    name: "Head Office",
    type: "HQ",
    location: "New Delhi",
    head: "Director General",
    employees: 456,
    departments: ["Administration", "Finance", "HR", "Legal", "IT"],
  },
  {
    name: "Regional Office - North",
    type: "Regional",
    location: "Chandigarh",
    head: "Regional Director",
    employees: 234,
    departments: ["Operations", "Finance", "HR"],
  },
  {
    name: "Regional Office - South",
    type: "Regional",
    location: "Chennai",
    head: "Regional Director",
    employees: 298,
    departments: ["Operations", "Finance", "HR"],
  },
  {
    name: "Regional Office - East",
    type: "Regional",
    location: "Kolkata",
    head: "Regional Director",
    employees: 189,
    departments: ["Operations", "Finance", "HR"],
  },
  {
    name: "Regional Office - West",
    type: "Regional",
    location: "Mumbai",
    head: "Regional Director",
    employees: 312,
    departments: ["Operations", "Finance", "HR"],
  },
  ]);

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    head: "",
    employees: "",
    departments: "",
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newOrg = {
      ...formData,
      employees: Number(formData.employees),
      departments: formData.departments.split(",").map((d) => d.trim()),
    };

    setOrgStructure([...orgStructure, newOrg]);
    setOpen(false);

    setFormData({
      name: "",
      type: "",
      location: "",
      head: "",
      employees: "",
      departments: "",
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Organization Structure</h1>
          <p className="text-gray-500 mt-1">
            Department Hierarchy & Regional Offices
          </p>
        </div>

        <Button onClick={() => setOpen(true)} className="flex gap-2">
          <Plus className="w-4 h-4" />
          Add Organization
        </Button>
      </div>

      {/* Organization Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orgStructure.map((office, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                {office.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="text-sm font-medium">{office.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm font-medium">{office.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Office Head</p>
                <p className="text-sm font-medium">{office.head}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Employees</p>
                <p className="text-2xl font-bold text-blue-600">
                  {office.employees}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Departments</p>
                <div className="flex flex-wrap gap-1">
                  {office.departments.map((dept, dIndex) => (
                    <span
                      key={dIndex}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Organization Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Organization</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Organization Name</Label>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div>
              <Label>Type (HQ / Regional)</Label>
              <Input name="type" value={formData.type} onChange={handleChange} />
            </div>

            <div>
              <Label>Location</Label>
              <Input name="location" value={formData.location} onChange={handleChange} />
            </div>

            <div>
              <Label>Office Head</Label>
              <Input name="head" value={formData.head} onChange={handleChange} />
            </div>

            <div>
              <Label>Total Employees</Label>
              <Input
                type="number"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Departments (comma separated)</Label>
              <Input
                name="departments"
                value={formData.departments}
                onChange={handleChange}
                placeholder="HR, Finance, IT"
              />
            </div>

            <Button className="w-full" onClick={handleSubmit}>
              Save Organization
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}