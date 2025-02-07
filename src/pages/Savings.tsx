
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { ArrowUp, Target } from "lucide-react";

const Savings = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-slide-in">
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-semibold">Savings</h1>
        <p className="text-primary-foreground/80">Track your savings goals</p>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Total Savings</h2>
            <ArrowUp className="text-green-500" />
          </div>
          <p className="text-3xl font-semibold">$12,450</p>
          <p className="text-sm text-gray-500">+12% from last month</p>
        </Card>

        <h3 className="font-medium px-2">Savings Goals</h3>
        
        <Card className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Emergency Fund</h4>
              <p className="text-sm text-gray-500">$5,000 / $10,000</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full w-1/2"></div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Vacation Fund</h4>
              <p className="text-sm text-gray-500">$2,000 / $5,000</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full w-2/5"></div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Savings;
