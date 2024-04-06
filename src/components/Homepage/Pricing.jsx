import React, { useState } from "react";
import YearlyPricing from "./YearlyPricing";

export const PricingCards = ({ title, price, storage, network, popular, duration }) => {
  return (
    <div>
      <h1 className="text-4xl mb-5">
        {title}{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-[24px] font-medium">
          {popular}
        </span>
      </h1>
      <h1 className="text-[48px] mb-5">
        ${price}
        <sub className="text-neutral-600 text-[20px]">{duration}</sub>
      </h1>
      <ul>
        <li className="flex gap-x-2 items-center text-[18px] mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="m7.75 12 2.83 2.83 5.67-5.66"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>{" "}
          Private board sharing
        </li>
        <li className="flex gap-x-2 items-center text-[18px] mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="m7.75 12 2.83 2.83 5.67-5.66"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>{" "}
          {storage}
        </li>
        <li className="flex gap-x-2 items-center text-[18px] mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="m7.75 12 2.83 2.83 5.67-5.66"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>{" "}
          {network}
        </li>
        <li className="flex gap-x-2 items-center text-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="m7.75 12 2.83 2.83 5.67-5.66"
              stroke="#FF8A65"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>{" "}
          Private Mode
        </li>
      </ul>
      <button className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
        <a href="#">Subscribe</a>
      </button>
    </div>
  );
};

const Pricing = () => {
  const [selectedSubscriptionPlan, setselectedSubscriptionPlan] =
    useState("Monthly");
  function handleClickMonthly(e) {
    setselectedSubscriptionPlan("Monthly");
  }
  function handleClickYearly(e) {
    setselectedSubscriptionPlan("Yearly");
  }
  return (
    <div className="mt-[5rem] lg:mt-[6rem] max-w-7xl mx-auto md:px-6 px-4">
      <div className="lg:flex justify-between items-center">
        <h1 className="text-[35px] lg:text-6xl text-center">
          Subscript{""}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            ion Plans
          </span>
        </h1>
        <div className="border border-neutral-800 flex h-14 w-[10rem] mx-auto lg:mx-0 mt-[2rem] lg:mt-0 gap-x-[0.3rem] rounded-lg px-2 justify-center items-center">
          <button
            className={`px-[0.6rem] py-2 rounded-lg border-none ${
              selectedSubscriptionPlan === "Monthly" ? "bg-neutral-800" : ""
            }`}
            onClick={handleClickMonthly}
          >
            Monthly
          </button>
          <button
            className={`px-[0.6rem] py-2 border-none rounded-lg ${
              selectedSubscriptionPlan === "Yearly" ? "bg-neutral-800" : ""
            }`}
            onClick={handleClickYearly}
          >
            Yearly
          </button>
        </div>
      </div>

      {selectedSubscriptionPlan === "Monthly" ? (
        <div className="mt-[5rem] lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-14 border border-neutral-800 rounded-xl">
            <PricingCards
              title="Free"
              price="0"
              duration="/month"
              storage="5gb Storage"
              network="Web Analytics"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-14 border border-neutral-800 rounded-xl">
            <PricingCards
              title="Pro"
              popular="(Most Popular)"
              price="10"
              duration="/month"
              storage="10gb Storage"
              network="Web Analytics (Advance)"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-14 border border-neutral-800 rounded-xl">
            <PricingCards
              title="Enterprise"
              price="200"
              duration="/month"
              storage="Unlimited Storage"
              network="High Performance Network"
            />
          </div>
        </div>
      ) : (
        <YearlyPricing />
      )}
    </div>
  );
};

export default Pricing;
