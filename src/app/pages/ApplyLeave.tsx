import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, FileText } from "lucide-react";

type LeaveApplyProps = {
  closeModal: () => void
}

export function LeaveApply(
    { closeModal }: LeaveApplyProps
) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    days: 0,
    reason: '',
    contactDuringLeave: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();   
    console.log('Leave applied:', formData);
    navigate('/leave');
  };

  const calculateDays = () => {
    if (formData.fromDate && formData.toDate) {
      const from = new Date(formData.fromDate);
      const to = new Date(formData.toDate);
      const diffTime = Math.abs(to.getTime() - from.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setFormData({ ...formData, days: diffDays });
    }
  };


  return (
    <div className="p-6 space-y-6" style={{height:"80vh", overflowY:"scroll"}}>
      <div>
        <h1 className="text-2xl font-bold text-foreground mt-4">Apply for Leave</h1>
      </div>

      {/* <Alert
        type="info"
        message="Leave balance will be verified before approval. EL: 12 days | CL: 6 days | ML: 8 days available."
      /> */}

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Leave Type *
            </label>
            <select
              value={formData.leaveType}
              onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
              required
            >
              <option value="">Select Leave Type</option>
              <option value="Earned Leave">Earned Leave (EL) - 12 days available</option>
              <option value="Casual Leave">Casual Leave (CL) - 6 days available</option>
              <option value="Medical Leave">Medical Leave (ML) - 8 days available</option>
              <option value="Maternity Leave">Maternity Leave - As per policy</option>
              <option value="Paternity Leave">Paternity Leave - 15 days</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                From Date *
              </label>
              <input
                type="date"
                value={formData.fromDate}
                onChange={(e) => {
                  setFormData({ ...formData, fromDate: e.target.value });
                  setTimeout(calculateDays, 100);
                }}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                To Date *
              </label>
              <input
                type="date"
                value={formData.toDate}
                onChange={(e) => {
                  setFormData({ ...formData, toDate: e.target.value });
                  setTimeout(calculateDays, 100);
                }}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
                required
              />
            </div>
          </div>

          {formData.days > 0 && (
            <div className="bg-accent/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium">Total Leave Days: <span className="text-[#1e3a8a] text-lg">{formData.days}</span></p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <FileText className="h-4 w-4 inline mr-1" />
              Reason for Leave *
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              rows={4}
              placeholder="Please provide detailed reason for leave"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Contact During Leave
            </label>
            <input
              type="text"
              value={formData.contactDuringLeave}
              onChange={(e) => setFormData({ ...formData, contactDuringLeave: e.target.value })}
              placeholder="Phone number or alternate contact"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-input-background"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-1 py-1 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-1 py-1 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
