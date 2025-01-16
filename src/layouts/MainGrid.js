"use client";

import Card from "../components/Card";

const MainGrid = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50 h-full">
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Row 1 */}
        <Card header="My Cards" className="lg:col-span-2 h-full">
          {/* Content for My Cards */}
        </Card>
        <Card header="Recent Transactions" className="h-full">
          {/* Content for Recent Transactions */}
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
        <Card header="Balance History" className="lg:col-span-2 h-full">
          {/* Chart for Balance History */}
        </Card>
      </div>
    </div>
  );
};

export default MainGrid;
