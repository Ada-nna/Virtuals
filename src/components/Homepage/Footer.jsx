import React from "react";
import { FooterLinks } from "./Footerlinks";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between mt-[5rem] lg:mt-[6rem] max-w-7xl mx-auto place-items-center">
      {FooterLinks.map((section) => (
        <div key={section.title} className="mb-3 lg:mb-0">
          <h3 className="mb-[1.5rem] text-[20px] font-semibold tracking-wide">{section.title}</h3>
          <ul>
            {section.links.map((link) => (
              <li key={ link.text} className="text-neutral-600 mb-2 cursor-pointer hover:text-neutral-400 hover:duration-300">{ link.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
