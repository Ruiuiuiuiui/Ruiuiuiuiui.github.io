import React from "react";

//只能封包包含字串的樣式名，若要動態設定樣式需使用物件用字串命名
const sizeClasses = {
  height: "h-32",
  width: "w-32",
};

export default function Card({ cardData }) {
  return (
    <div
      key={cardData.city}
      className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden"
    >
      <img
        className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`}
        src={cardData.imageUrl}
        alt={cardData.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{cardData.city}</h3>
        <p className="text-gray-600">{cardData.averagePrice}/noght average</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-brand hover:text-brand-light font-semibold text-sm"
          >
            Explore {cardData.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
