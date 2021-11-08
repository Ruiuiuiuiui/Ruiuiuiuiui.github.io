import React from "react";

export default function Header() {
  return (
    <div className="bg-yellow-400 z-0 h-screen flex flex-col justify-center items-center relative">
      <img
        className="absolute z-50 top-0 right-0 sm:w-60 sm:m-4 w-48 mr-2 "
        src="/img/cat-1.png"
        alt="cat"
      />
      <img
        className="absolute z-50 bottom-0 left-0 sm:w-60 sm:m-4 w-48 mb-2 -ml-3"
        src="/img/cat.png"
        alt="cat"
      />
      <h1 className="p-6 text-white text-6xl font-headline font-light">
        Happy Birthday My Dear
      </h1>

      <h1 className="p-5 text-white text-4xl bg-gray-800 font-medium rounded-lg">
        START &darr;
      </h1>
      <div className="p-6 text-yellow-200 text-sm italic font-light font-google">
        閱讀時建議使用電腦版
      </div>
    </div>
  );
}
