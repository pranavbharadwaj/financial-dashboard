"use client";

import Card from "../components/Card";
import MyCards from "../components/CardsSection/MyCards";
import RecentTransactions from "../components/CardsSection/RecentTransactions";

const MainGrid = () => {
  // Dummy data for Recent Transactions
  const transactions = [
    {
      description: "Deposit from my card",
      date: "28 January 2021",
      amount: "-$850",
      icon: "📥",
      type: "debit",
    },
    {
      description: "Credit, Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      icon: "💳",
      type: "credit",
    },
    {
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      icon: "👤",
      type: "credit",
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-50 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Row 1 */}
        <Card header="My Cards" className="lg:col-span-2 h-full">
          <MyCards />
        </Card>
        <Card header="Recent Transactions" className="h-full">
          <RecentTransactions transactions={transactions} />
        </Card>

        {/* Row 2 */}
        <Card header="Weekly Activity Chart" className="lg:col-span-2 h-full">
          {/* Chart for Weekly Activity */}
        </Card>
        <Card header="Expense Statistics" className="h-full">
          {/* Chart for Expense Statistics */}
        </Card>

        {/* Row 3 */}
        <Card header="Quick Transfer" className="lg:col-span-1 h-full">
          {/* Content for Quick Transfer */}
        </Card>
        <Card header="Balance History" className="lg:col-span-1 h-full">
          {/* Chart for Balance History */}
        </Card>
      </div>
    </div>
  );
};

export default MainGrid;
