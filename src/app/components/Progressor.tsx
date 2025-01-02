import React from "react";

const Progressor = () => {
  return (
    <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-500 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">1</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-500">
            Step:1 Choose Your Food
          </h6>
          <p className="text-xs text-white">
            Explore our delicious menu and select your food
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-500 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">2</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-500">
            Step:2 Customize your order
          </h6>
          <p className="text-xs text-white">
            Tailor your meal to your taste!
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-500 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-base text-black font-bold">3</span>
          </div>
          <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-base font-bold text-amber-500">
            Step:3 Place Your Order
          </h6>
          <p className="text-xs text-white">
            Ready to eat? Proceed to checkout and complete your order!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progressor;
