
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Wallet, ArrowRight } from "lucide-react";

const Lending = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-slide-in">
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-semibold">Lending</h1>
        <p className="text-primary-foreground/80">Track loans and payments</p>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Total Outstanding</h2>
            <Wallet className="text-primary" />
          </div>
          <p className="text-3xl font-semibold">$3,500</p>
          <p className="text-sm text-gray-500">3 active loans</p>
        </Card>

        <h3 className="font-medium px-2">Active Loans</h3>
        
        <Card className="divide-y">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Personal Loan</h4>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-gray-500">Due in 5 days</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium">$250 / month</span>
              <span className="text-sm text-primary">$2,000 remaining</span>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Car Loan</h4>
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-gray-500">Due in 12 days</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium">$300 / month</span>
              <span className="text-sm text-primary">$1,500 remaining</span>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="font-medium mb-4">Next Payment Due</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Personal Loan</p>
              <p className="font-medium">$250.00</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Due Date</p>
              <p className="font-medium">Mar 25, 2024</p>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Lending;
