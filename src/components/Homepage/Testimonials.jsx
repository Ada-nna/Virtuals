import React from "react";
import Image1 from "../../assets/img1.jpg";
import Image2 from "../../assets/img2.jpg";
import Image3 from "../../assets/img3.jpg";
import Image4 from "../../assets/img4.jpg";
import Image5 from "../../assets/img5.jpg";
import Image6 from "../../assets/img6.jpg";

export const TestimonialCards = ({ text, image, name, organization }) => {
  return (
    <div>
      <p className="text-[#9A9A9A] font-extralight">{text}</p>
      <div className="flex items-center gap-6 mt-[2rem]">
        <img
          src={image}
          alt=""
          className="w-12 h-12 rounded-full border border-neutral-300"
        />
        <div className="">
          <h2 className="text-[#9A9A9A] text-[20px]">{name}</h2>
          <p className="text-neutral-600 italic ">{organization}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="mt-[5rem] lg:mt-[6rem] max-w-7xl mx-auto md:px-0 px-4 border-b border-neutral-800 pb-[7rem]">
      <h1 className="text-[35px] lg:text-6xl text-center leading-[46px] lg:leading-none">
        What People{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Are Saying
        </span>
      </h1>

      <div className="mt-[3rem] lg:mt-[4rem] grid lg:grid-cols-3 md:px-6 px-4 lg:gap-6 gap-4">
        <div className="w-full sm:w-1/2 lg:w-[25rem] h-[20rem] p-[2.8rem] lg:p-[3.2rem] border border-neutral-800 rounded-xl bg-[#171717]">
          <TestimonialCards
            text="I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations."
            image={Image1}
            name="John Doe"
            organization="Stellar Solutions"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-[25rem] h-[20rem] lg:h-[18rem] p-[2.8rem] lg:p-[3.2rem] border border-neutral-800 rounded-xl bg-[#171717]">
          <TestimonialCards
            text="I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life."
            image={Image2}
            name="Jane Smith"
            organization="Blue Horizon Technologies"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-[25rem] h-[20rem] p-[2.8rem] lg:p-[3.2rem] border border-neutral-800 rounded-xl bg-[#171717]">
          <TestimonialCards
            text="Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service."
            image={Image3}
            name="David Johnson"
            organization="Quantum Innovations"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-[25rem] h-[20rem] p-[2.8rem] lg:p-[3.2rem] border border-neutral-800 rounded-xl bg-[#171717]">
          <TestimonialCards
            text="Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible."
            image={Image4}
            name="Ronee Brown"
            organization="Fusion Dynamics"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-[25rem] h-[20rem] lg:h-[18rem] p-[2.8rem] lg:p-[3.2rem] border border-neutral-800 rounded-xl bg-[#171717]">
          <TestimonialCards
            text="I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results."
            image={Image5}
            name="Michael Wilson"
            organization="Visionary Creations"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-[25rem] h-[20rem] p-[2.8rem] lg:p-[3.2rem] border border-neutral-800 rounded-xl bg-[#171717]">
          <TestimonialCards
            text="The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future."
            image={Image6}
            name="Emily Davis"
            organization="Synergy Systems"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
