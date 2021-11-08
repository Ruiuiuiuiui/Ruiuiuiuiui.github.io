import React from "react";
// import Swal from "sweetalert2";

export default function Content() {
  const showAlert = () => {
    Swal.fire("Hello World !");
    const { value: number } = Swal.fire({
      title: "最後一題",
      input: "number",
      inputLabel: "請問一共有多少彈出框？",
      inputValidator: (value) => {
        if (value != "33") {
          return "答錯惹ＱＱ";
        }
      },
    });
  };

  return (
    <div className="bg-gray-100 relative">
      <div
        className="grid lg:grid-cols-2 grid-cols-1 p-8
      py-12
      max-w-md
      mx-auto
      sm:max-w-xl
      lg:px-12 lg:py-24 lg:max-w-full
      xl:mr-0
      "
      >
        <div className="xl:max-w-xl">
          <img
            className="mt-6 rounded-lg shadow-xl
          sm:mt-8 sm:h-64 sm:w-full sm:object-cover
          lg:w-full lg:h-full w-full lg:rounded-none lg:shadow-none lg:object-none"
            src="/img/happy-birthday.png"
            alt="happy-birthday"
          />
        </div>
        <div className="xl:max-w-xl flex items-center justify-center">
          <div>
            <h1
              className="
          mt-6
          text-xl
          font-normal
          text-blue-800
          sm:mt-8 sm:text-4xl
          lg:text-3xl
          font-Yen
          "
            >
              親愛的瑞瑞親：
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-l font-Yen">
              既然都當工程師了，就來點工程師Style的卡片吧！
            </p>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-l font-Yen">
              順便練習最近在用的tailwind CSS
            </p>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-l font-Yen">
              時間有限能力不足，純屬娛樂 請勿認真，哈！
            </p>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-l font-Yen">
              透過點擊看完我的肺腑冗言，啾咪:)
            </p>
            <div className="mt-4 space-x-1 sm:mt-6 ">
              <button
                className="btn btn-primary shadow-lg transform transition hover:-translate-y-0.5"
                onClick={showAlert}
              >
                click me !
              </button>
              <button className="btn btn-secondary ml-8" href="#">
                escape
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
