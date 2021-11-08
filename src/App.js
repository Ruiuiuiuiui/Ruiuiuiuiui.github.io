import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import cardData from "./data/cardData";

export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular cardDatas</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {cardData.map((cardData) => (
            <Card cardData={cardData} key={cardData.city} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
