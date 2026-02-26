import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard";
import EmployeeManagement from "./pages/EmployeeManagement";
import EmployeeDetails from "./pages/EmployeeDetails";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "employees", Component: EmployeeManagement },
      { path: "employees/:id", Component: EmployeeDetails },
      { path: "recruitment", Component: Recruitment },
      { path: "leave", Component: LeaveManagement },
      { path: "payroll", Component: PayrollManagement },
      { path: "pf-trust", Component: PFTrustManagement },
      { path: "promotion", Component: PromotionManagement },
      { path: "increment", Component: IncrementManagement },
      { path: "transfer", Component: TransferManagement },
      { path: "disciplinary", Component: DisciplinaryManagement },
      { path: "retirement", Component: RetirementManagement },
      { path: "probation", Component: ProbationManagement },
      { path: "organization", Component: OrganizationStructure },
      { path: "reports", Component: Reports },
    ],
  },
]);
