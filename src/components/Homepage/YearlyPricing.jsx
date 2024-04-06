import React from "react";
import { PricingCards } from "./Pricing";

const YearlyPricing = () => {
  return (
    <div className="mt-[5rem] lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-14 border border-neutral-800 rounded-xl">
        <PricingCards
          title="Free"
          price="0"
          duration="/annum"
          storage="50gb Storage"
          network="Web Analytics"
        />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-14 border border-neutral-800 rounded-xl">
        <PricingCards
          title="Pro"
          popular="(Most Popular)"
          price="110"
          duration="/annum"
          storage="100gb Storage"
          network="Web Analytics (Advance)"
        />
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-14 border border-neutral-800 rounded-xl">
        <PricingCards
          title="Enterprise"
          price="2200"
          duration="/annum"
          storage="Unlimited Storage"
          network="High Performance Network"
        />
      </div>
    </div>
  );
};

export default YearlyPricing;
