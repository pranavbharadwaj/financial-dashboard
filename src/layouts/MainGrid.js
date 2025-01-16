"use client";

import Card from "../components/Card";
import MyCards from "../components/CardsSection/MyCards";
import RecentTransactions from "../components/CardsSection/RecentTransactions";
import ExpenseStats from "../components/CardsSection/ExpenseStats";

const MainGrid = () => {
  return (
    <div className="flex  bg-gray-50 overflow-hidden">
      <div className="grid grid-rows-3 grid-cols-3 gap-4 w-full h-full p-6">
        {/* Row 1 */}
        <Card header="My Cards" className="col-span-2 row-span-1">
          <MyCards />
        </Card>
        <Card
          header="Recent Transactions"
          className="col-span-1 row-span-1 overflow-hidden"
        >
          <RecentTransactions
            transactions={[
              {
                description: "Deposit from my card",
                date: "28 January 2021",
                amount: "+$850",
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
            ]}
          />
        </Card>

        {/* Row 2 */}
        <Card
          header="Weekly Activity Chart"
          className="col-span-2 row-span-1"
        ></Card>
        <Card header="Expense Statistics" className="col-span-1 row-span-1">
          <ExpenseStats />
        </Card>

        {/* Row 3 */}
        <Card header="Quick Transfer" className="col-span-1 row-span-1"></Card>
        <Card header="Balance History" className="col-span-2 row-span-1"></Card>
      </div>
    </div>
  );
};

export default MainGrid;
