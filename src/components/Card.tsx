import React from "react";
import '../index.css';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      className={`bg-white rounded-md p-4 shadow-md border border-gray-200 text-center`}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      )}

      <div className="text-sm">{children}</div>
    </div>
  );
};

export default Card;
