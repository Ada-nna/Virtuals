import React from "react";
import VideoOne from "../../assets/video1.mp4";
import VideoTwo from "../../assets/video2.mp4";

const Media = () => {
  return (
    <div className="flex justify-center max-w-7xl mx-auto mt-[5rem] lg:mt-[6rem] md:px-6 px-4 gap-2 lg:gap-5 ">
      <video
        loop
        autoPlay
        muted
        className="w-1/2 rounded-lg border-2 border-orange-500 "
      >
        <source src={VideoTwo} type="video/mp4" />
      </video>
      <video
        loop
        autoPlay
        muted
        className="w-1/2 rounded-lg border-2 border-orange-500"
      >
        <source src={VideoOne} type="video/mp4" />
      </video>
    </div>
  );
};

export default Media;
