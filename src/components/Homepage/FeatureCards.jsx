import React from "react";

const FeatureCards = ({ icons, title, content }) => {
  return (
    <div className="h-[14rem] lg:w-[25.66rem] p-5 lg:p-9">
      <div className="flex items-start gap-x-4">
        <div className="p-2 rounded-full bg-[#171717]">{icons}</div>
        <div>
          <h5 className="text-[20px] mt-[0.25rem] mb-5">{title}</h5>
          <p className="text-neutral-500 text-[1rem] leading-[24px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
