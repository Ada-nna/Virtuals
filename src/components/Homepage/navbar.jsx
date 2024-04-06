import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";

const navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleNavbar() {
    setMenuOpen(!menuOpen);
  }

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 ${
        isSticky ? "bg-[#1a1a1a] opacity-90" : ""
      } flex justify-between px-4 lg:px-[100px] py-3 lg:py-5 items-center border-b border-neutral-800`}
    >
      <div className="flex items-center gap-x-2">
        <img src={Logo} className="w-[3rem] lg:w-[4rem]" />
        <h1 className="text-[24px] lg:text-[30px]">Virtuals</h1>
      </div>
      <ul className="lg:flex text-[16px] gap-x-6 items-center hidden">
        <li>Features</li>
        <li>Workflow</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
      <div className="hidden lg:flex gap-x-6 items-center">
        <button className="border p-2 rounded-lg px-4 py-3">Sign In</button>
        <button className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-800 p-2 rounded-lg">
          Create an account
        </button>
      </div>
      <div className="flex lg:hidden">
        <button className="border-none" onClick={toggleNavbar}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default navbar;
