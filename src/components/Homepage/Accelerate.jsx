import CodeImg from "../../assets/code.jpg";

export const Workflow = ({ title, content }) => {
  return (
    <div className="h-[5.5rem] lg:w-[38.5rem] lg:p-9">
      <div className="flex items-start gap-x-4">
        <div className="p-2 rounded-full bg-[#171717]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
              stroke="#3AA160"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="m7.75 12 2.83 2.83 5.67-5.66"
              stroke="#3AA160"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div>
          <h5 className="text-[20px] lg:text-[22px] tracking-wide mb-1 font-medium">
            {title}
          </h5>
          <p className="text-neutral-500 lg:text-[17px] leading-[24px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accelerate = () => {
  return (
    <div className="mt-[5rem] lg:mt-[6rem] max-w-7xl mx-auto md:px-0 px-4">
      <h1 className="text-[35px] lg:text-6xl text-center mt-[5rem] leading-[46px] lg:leading-none">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h1>

      <div className="lg:flex lg:flex-row gap-2 mt-[3rem] lg:mt-[4rem]">
        <div className="lg:w-1/2 rounded-lg">
          <img src={CodeImg} alt="code-image" />
        </div>
        <div className="lg:w-1/2 rounded-lg pt-14">
          <div className="mb-7">
            <Workflow
              title="Code merge made easy"
              content="Track the performance of your VR apps and gain insights into user behavior."
            />
          </div>
          <div className="mb-7">
            <Workflow
              title="Review code without worry"
              content="Track the performance of your VR apps and gain insights into user behavior."
            />
          </div>
          <div className="mb-7">
            <Workflow
              title="AI Assistance to reduce time"
              content="Track the performance of your VR apps and gain insights into user behavior."
            />
          </div>
          <Workflow
            title="Share work in minutes"
            content="Track the performance of your VR apps and gain insights into user behavior."
          />
        </div>
      </div>
    </div>
  );
};

export default Accelerate;
