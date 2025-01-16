"use client";

const RecentTransactions = ({ transactions }) => {
  return (
    <ul className="space-y-4">
      {transactions.map((transaction, index) => (
        <li key={index} className="flex items-center gap-4 p-4  rounded-lg">
          {/* Icon */}
          <span className="text-xl bg-gradient-to-r from-orange-300 to-yellow-400 rounded-full p-2 flex items-center justify-center">
            {transaction.icon}
          </span>

          {/* Description and Date */}
          <div className="flex-1">
            <p className="text-sm text-gray-800">{transaction.description}</p>
            <p className="text-xs text-gray-500">{transaction.date}</p>
          </div>

          {/* Amount */}
          <p
            className={`text-sm ${
              transaction.type === "credit" ? "text-green-500" : "text-red-500"
            }`}
          >
            {transaction.amount}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RecentTransactions;
