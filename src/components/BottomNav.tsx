
import { Link, useLocation } from "react-router-dom";
import { PiggyBank, CreditCard, Wallet } from "lucide-react";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center">
      <Link
        to="/savings"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/savings")
            ? "text-primary"
            : "text-gray-500 hover:text-primary transition-colors"
        }`}
      >
        <PiggyBank size={24} />
        <span className="text-xs">Savings</span>
      </Link>
      <Link
        to="/spending"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/spending")
            ? "text-primary"
            : "text-gray-500 hover:text-primary transition-colors"
        }`}
      >
        <CreditCard size={24} />
        <span className="text-xs">Spending</span>
      </Link>
      <Link
        to="/lending"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/lending")
            ? "text-primary"
            : "text-gray-500 hover:text-primary transition-colors"
        }`}
      >
        <Wallet size={24} />
        <span className="text-xs">Lending</span>
      </Link>
    </nav>
  );
};
