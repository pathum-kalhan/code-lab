import React from "react";

export default function BannerCard() {
  return (
    <div
      className='
    w-full h-[460px] bg-no-repeat border bg-cover 
    bg-center 
    bg-[url("https://images.pexels.com/photos/1364073/pexels-photo-1364073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]
    relative

    '
    >
      <div className=" backdrop-blur-sm h-[50%] border w-full  absolute top-[50%] rounded-tr-3xl p-8">
        <div className="flex justify-between">
          <p className="text-base font-medium opacity-50">label</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white">Pathum Kalhan</h1>
        <div className="flex justify-between">
          <p className="text-base font-normal text-white">Body large</p>
          <button className="bg-amber-400 p-3 rounded-full">Bet Now</button>
        </div>
        <div className="flex">
          <div className="bg-purple-500 p-4 text-white text-bold border-8 border-white rounded-full">
            Run second
          </div>
        </div>
      </div>
    </div>
  );
}
