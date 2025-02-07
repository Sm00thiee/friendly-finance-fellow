
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { UsersRound, DollarSign } from "lucide-react";

const Borrowing = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-slide-in">
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-semibold">Borrowing</h1>
        <p className="text-primary-foreground/80">Track money others borrowed</p>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Total Borrowed</h2>
            <UsersRound className="text-primary" />
          </div>
          <p className="text-3xl font-semibold">$850</p>
          <p className="text-sm text-gray-500">From 3 people</p>
        </Card>

        <h3 className="font-medium px-2">Active Borrowers</h3>
        
        <Card className="divide-y">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium">John Doe</h4>
              </div>
              <span className="font-medium text-primary">$400</span>
            </div>
            <p className="text-sm text-gray-500">Borrowed 2 weeks ago</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium">Jane Smith</h4>
              </div>
              <span className="font-medium text-primary">$300</span>
            </div>
            <p className="text-sm text-gray-500">Borrowed 1 week ago</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium">Mike Johnson</h4>
              </div>
              <span className="font-medium text-primary">$150</span>
            </div>
            <p className="text-sm text-gray-500">Borrowed 3 days ago</p>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Borrowing;
