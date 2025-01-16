"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../features/myCardsSlice";

const MyCards = () => {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.myCards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (loading) {
    return <p className="text-gray-500">Loading cards...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error loading cards: {error}</p>;
  }

  return (
    <div className="space-y-6 h-[60%]">
      <div className="flex flex-wrap gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white w-full sm:w-[45%] lg:w-[30%] shadow-md flex flex-col justify-between"
          >
            <div>
              <p className="text-lg font-bold">{card.balance}</p>
              <p className="text-sm">{card.cardHolder}</p>
            </div>
            <div className="mt-4">
              <p className="text-xs">Valid Thru: {card.validThru}</p>
              <p className="text-xs">
                **** **** **** {card.cardNumber.slice(-4)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCards;
