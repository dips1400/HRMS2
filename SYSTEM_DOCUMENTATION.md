# Government HRMS (Human Resource Management System)

## Overview
A comprehensive, fully-featured Government HRMS that digitizes and automates the complete employee lifecycle, centralized payroll processing, PF Trust management, and compliance with government regulations.

## Key Features

### 1. **Organization Management**
- Department hierarchy definition
- Regional office structure
- Reporting structure management
- Multi-location support (Head Office + Regional Offices)

### 2. **Recruitment Management**
- Vacancy identification and tracking
- Category-wise roster management (General/OBC/SC/ST)
- Government approval tracking
- Recruitment cycle workflows
- Exam agency integration
- Merit list upload
- Appointment order generation (Compassionate, Direct, Deputation)
- Reservation compliance monitoring

### 3. **Employee Master & Digital Service Book**
- Complete personal details management
- Category/Caste tracking
- Qualification and identification marks
- Bank and statutory details
- Complete service history
- Promotions, transfers, leave records
- Disciplinary records
- Increments tracking
- Digital document repository

### 4. **Probation Management**
- 2-year probation period tracking
- Automatic extension based on EL/HPL usage
- Confidential Reports (ACR) review
- Automated confirmation order generation

### 5. **Leave Management Engine**
- **Casual Leave (CL):** 8 days/year
- **Earned Leave (EL):** 15 days half-yearly with unlimited accumulation
- **Half Pay Leave (HPL):** 10 days half-yearly
- Leave Without Pay (LWP)
- Compensatory Leave
- Special Leave
- Accrual logic and carry-forward rules
- Leave encashment calculation
- Approval workflows
- Leave ledger tracking

### 6. **Promotion Management**
- Regular promotion workflow
- Time-bound promotions (10/20/30 years)
- Seniority list management
- DPC (Departmental Promotion Committee) review
- Promotion order generation
- Salary fixation
- Eligibility auto-validation

### 7. **Increment Management**
- 3% basic pay increment (rounded to nearest ₹100)
- Effective date: July 1st annually
- Eligibility check (6 months service)
- Auto increment processing
- Manual override capability
- Increment certificate generation

### 8. **Transfer Management**
- Administrative transfers
- Request-based transfers
- Transfer allowance calculation
- Automatic service book updates

### 9. **Disciplinary & Suspension Module**
- Charge report submission
- Explanation submission workflow
- Enquiry officer appointment
- Enquiry report processing
- Final action tracking
- Suspension allowance calculation

### 10. **Retirement & Superannuation**
- 6-month prior notice system
- No Due Certificate (NDC) tracking
- Recovery deductions
- Gratuity calculation
- PF settlement
- Leave encashment (max 300 days)
- GSLI processing
- Final settlement integration with Payroll and PF

### 11. **Centralized Payroll System**
- **Salary Components:**
  - Basic Pay
  - Dearness Allowance (DA)
  - House Rent Allowance (HRA)
  - Transport Allowance (TA)
  - Special Allowance
  - Other allowances

- **Deductions:**
  - PF: 12% Employee + 12% Employer on Basic + DA
  - Income Tax (TDS)
  - Professional Tax
  - Loan recoveries
  - LIC premiums
  - Society deductions

- **Features:**
  - Monthly payroll processing (21st-20th cycle)
  - Mandatory Duty Certificate verification
  - GR-based allowance calculations
  - Arrears processing (promotion, DA revision, pay revision)
  - LWP adjustments with backdated calculations
  - Budget control and provision tracking
  - Payslip generation
  - Bank transfer file creation
  - Accounting integration

- **Statutory Compliance:**
  - PF statements
  - TDS reports
  - Form 16 generation
  - Professional Tax reports
  - Audit logs

### 12. **PF Trust Management System**
- Individual PF ledgers
- 12% Employee + 12% Employer contribution on Basic + DA
- Yearly interest calculation and posting
- Annual statements generation

- **PF Advances/Loans:**
  - Medical Advance (up to 50% of employee contribution)
  - Marriage Advance (up to 50% of employee contribution)
  - Religious Ceremony Advance
  - Housing Loan (up to 90% of PF balance)

- **Withdrawals:**
  - Partial withdrawal with eligibility criteria
  - Final settlement on retirement/resignation/death
  - Approval workflow

### 13. **Reporting System**
Comprehensive reports including:
- Employee register
- Leave reports
- Promotion reports
- Salary register
- PF ledger
- Retirement reports
- Compliance reports
- Audit trail
- Export to PDF/Excel/CSV

## System Architecture

### User Roles & Access Control
- **Admin:** Full system access
- **HR Officer:** Employee management, recruitment, leave approval
- **Regional Manager:** Regional office operations
- **Department Head:** Department-level approvals
- **Finance Officer:** Payroll and financial operations
- **Employee:** Self-service portal
- **PF Admin:** PF Trust operations

### Financial Year & Salary Cycle
- **Financial Year:** April to March
- **Salary Cycle:** 21st to 20th of each month
- **Increment Date:** July 1st annually
- **Leave Accrual:** April 1st (CL), January 1st & July 1st (EL/HPL)

### Security & Compliance
- Role-based access control
- Audit trail for all transactions
- Activity logging
- Data encryption
- Compliance with government regulations
- Digital governance ready

## Technology Stack
- **Frontend:** React with TypeScript
- **UI Components:** Radix UI, Tailwind CSS
- **Routing:** React Router v7
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started
This is a frontend implementation with mock data. For production deployment, backend integration with Supabase or similar database is recommended for:
- Real-time data persistence
- User authentication
- File storage for documents
- Audit logging
- Multi-user access

## Key Compliance Features
✓ Government rule-based leave system
✓ Reservation roster compliance
✓ Statutory PF deductions (12% + 12%)
✓ TDS and Professional Tax compliance
✓ Duty certificate verification
✓ Digital service book maintenance
✓ Audit trail and activity logs
✓ Budget control mechanisms
✓ Retirement processing as per government rules

---

**Note:** This system is designed specifically for government departments with strict adherence to government HR policies, financial regulations, and statutory compliance requirements.
