import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/employees/EmployeeList";
import AddEmployee from "./pages/employees/AddEmployee";
import EmployeeProfile from "./pages/employees/EmployeeProfile";
import Recruitment from "./pages/Recruitment";
import LeaveManagement from "./pages/LeaveManagement";
import PayrollManagement from "./pages/PayrollManagement";
import PFTrustManagement from "./pages/PFTrustManagement";
import PromotionManagement from "./pages/PromotionManagement";
import IncrementManagement from "./pages/IncrementManagement";
import TransferManagement from "./pages/TransferManagement";
import DisciplinaryManagement from "./pages/DisciplinaryManagement";
import RetirementManagement from "./pages/RetirementManagement";
import ProbationManagement from "./pages/ProbationManagement";
import Reports from "./pages/Reports";
import OrganizationStructure from "./pages/OrganizationStructure";
import MainLayout from "./components/MainLayout";
import ServiceBook  from "./pages/ServiceBook";
import  Attendance  from "./pages/AttendanceManagement";
import { PayrollDashboard } from "./pages/payroll/PayrollDashboard"
import { SalarySlips } from "./pages/payroll/SalarySlips"
import { PayScaleManagement } from "./pages/payscale/PayScaleManagement"
import { TediousCalculations } from "./pages/payscale/TediousCalculations"
import { AllowanceCalculator } from "./pages/payscale/AllowanceCalculator"
import Grievances from "../app/pages/Grievances"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
           { path: "employees", Component: EmployeeList },
      { path: "employees/add", Component: AddEmployee },
      { path: "employees/:id", Component: EmployeeProfile },
      { path: "servicebook", Component: ServiceBook},
      { path: "recruitment", Component: Recruitment },
      { path: "leave", Component: LeaveManagement },
      { path: "attandence", Component: Attendance},
            { path: "payroll", Component: PayrollDashboard },
      { path: "payroll/salary-slips", Component: SalarySlips },
            { path: "payscale", Component: PayScaleManagement },
      { path: "payscale/tedious", Component: TediousCalculations },
      { path: "payscale/allowance", Component: AllowanceCalculator },
      { path: "pf-trust", Component: PFTrustManagement },
      { path: "promotion", Component: PromotionManagement },
      { path: "increment", Component: IncrementManagement },
      { path: "transfer", Component: TransferManagement },
      { path: "disciplinary", Component: DisciplinaryManagement },
      { path: "retirement", Component: RetirementManagement },
      { path: "probation", Component: ProbationManagement },
      { path: "organization", Component: OrganizationStructure },
      { path: "grievances", Component:Grievances},
      { path: "reports", Component: Reports },
    ],
  },
]);
