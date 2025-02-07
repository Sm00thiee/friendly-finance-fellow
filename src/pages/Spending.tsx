
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { CreditCard, Coffee, ShoppingBag, Home } from "lucide-react";

const Spending = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-slide-in">
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl font-semibold">Spending</h1>
        <p className="text-primary-foreground/80">Track your expenses</p>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Monthly Spending</h2>
            <CreditCard className="text-primary" />
          </div>
          <p className="text-3xl font-semibold">$2,840</p>
          <p className="text-sm text-gray-500">This month</p>
        </Card>

        <h3 className="font-medium px-2">Recent Transactions</h3>
        
        <Card className="divide-y">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Coffee Shop</h4>
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
            </div>
            <span className="font-medium">$4.50</span>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Grocery Store</h4>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
            <span className="font-medium">$65.20</span>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Rent Payment</h4>
                <p className="text-sm text-gray-500">5 days ago</p>
              </div>
            </div>
            <span className="font-medium">$1,200</span>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Spending;
