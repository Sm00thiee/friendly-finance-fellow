
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { PiggyBank, CreditCard, Wallet } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 animate-fade-in">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Financial Dashboard
        </h1>
        
        <Card
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/savings")}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <PiggyBank className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-medium">Manage Savings</h2>
              <p className="text-sm text-gray-500">Track your savings goals</p>
            </div>
          </div>
        </Card>

        <Card
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/spending")}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-medium">Manage Spending</h2>
              <p className="text-sm text-gray-500">Track your expenses</p>
            </div>
          </div>
        </Card>

        <Card
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/lending")}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-medium">Manage Lending</h2>
              <p className="text-sm text-gray-500">Track loans and payments</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
