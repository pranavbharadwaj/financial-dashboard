"use client";

const Card = ({ header, children, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Card Header */}
      {header && <h6 className="text-lg  mb-2 text-black">{header}</h6>}

      {/* Card Body */}
      <div className="bg-white rounded-lg border border-gray-300 p-4 h-full">
        {children}
      </div>
    </div>
  );
};

export default Card;
