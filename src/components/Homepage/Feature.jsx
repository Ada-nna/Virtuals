import React from "react";
import FeatureCards from "../Homepage/FeatureCards";

const Feature = () => {
  return (
    <div className="mt-[5rem] lg:mt-[6rem] max-w-7xl lg:mx-auto mx-4 px-4 border-b border-neutral-800 pb-[7rem]">
      <div className="flex justify-center">
        <button className="text-orange-500 text-center bg-neutral-900 px-5 py-2 font-semibold lg:text-[20px] rounded-full flex items-center justify-center">
          FEATURE
        </button>
      </div>

      <h1 className="text-[35px] lg:text-6xl text-center mt-[3rem] lg:mt-[4rem]">
        Easily build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          your code
        </span>
      </h1>

      <div className="grid lg:grid-cols-3 mt-[3rem] lg:mt-[4rem]">
        <FeatureCards
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
                stroke="#FF8A65"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
                stroke="#FF8A65"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          }
          title="Drag-and-Drop Interface"
          content="Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."
        />
        <FeatureCards
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FF8A65"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
              />
            </svg>
          }
          title="Multi-Platform Compatibility"
          content="Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets."
        />
        <FeatureCards
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FF8A65"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
              />
            </svg>
          }
          title="Built-in Templates"
          content="Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments."
        />
        <FeatureCards
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
                stroke="#FF8A65"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          }
          title="Real-Time Preview"
          content="Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments."
        />
        <FeatureCards
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FF8A65"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          }
          title="Collaboration Tools"
          content="Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing."
        />
        <FeatureCards
          icons={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                stroke="#FF8A65"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 3h1a28.424 28.424 0 0 0 0 18H8M15 3a28.424 28.424 0 0 1 0 18"
                stroke="#FF8A65"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 16v-1a28.424 28.424 0 0 0 18 0v1M3 9a28.424 28.424 0 0 1 18 0"
                stroke="#FF8A65"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          }
          title="Analytics Dashboard"
          content="Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."
        />
      </div>
    </div>
  );
};

export default Feature;
