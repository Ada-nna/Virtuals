import React from "react";

const Hero = () => {
  return (
    <div className="mt-[5rem] lg:mt-[6rem] max-w-7xl mx-auto px-4 md:px-0">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center lg:leading-[72px] w-[90%] lg:w-[50%] font-medium">
          Virtuals build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-medium">
            for developers
          </span>
        </h1>
      </div>
      <p className="mt-10 max-w-4xl mx-auto lg:text-[18px] text-neutral-500 lg:leading-[28px] text-center">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex justify-center mt-10 gap-x-4">
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 p-2 rounded-lg py-3 px-4">
          Start for free
        </button>
        <button className="border p-2 rounded-lg py-3 px-4">
          Documentation
        </button>
      </div>
    </div>
  );
};

export default Hero;
