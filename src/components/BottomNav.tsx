
import { Link, useLocation } from "react-router-dom";
import { PiggyBank, CreditCard, UsersRound } from "lucide-react";

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
        to="/finance"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/finance")
            ? "text-primary"
            : "text-gray-500 hover:text-primary transition-colors"
        }`}
      >
        <CreditCard size={24} />
        <span className="text-xs">Finance</span>
      </Link>
      <Link
        to="/borrowing"
        className={`flex flex-col items-center space-y-1 ${
          isActive("/borrowing")
            ? "text-primary"
            : "text-gray-500 hover:text-primary transition-colors"
        }`}
      >
        <UsersRound size={24} />
        <span className="text-xs">Borrowing</span>
      </Link>
    </nav>
  );
};
