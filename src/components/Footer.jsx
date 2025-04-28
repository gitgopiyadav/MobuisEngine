import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0649E7]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo on first line */}
        <div className="flex flex-col mb-8">
          <img src={assets.blue_logo} alt="logo" className="w-40 cursor-pointer" />
          <hr className="border-t w-85 mt-4 text-[#BCBCBC] hover:text-[#0649E7] border-2 cursor-pointer" />
        </div>

        {/* All other elements on second line */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-10 text-[16px] ">
          {/* Address */}
          <div>
            <h4 className=" mb-2 underline font-[600] cursor-pointer">Address</h4>
            
            <p className="font-[500] text-[18px] hover:underline cursor-pointer">
              1875 Mission St Ste 103 #4450
              <br />
              San Francisco, CA 94003
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-[600] mb-2 underline cursor-pointer">Email</h4>
            <a
              href="mailto:finance@mobiusengine.ai"
              className=" underline font-[500] text-[18px]"
            >
              finance@mobiusengine.ai
            </a>
          </div>

          {/* Telephone */}
          <div>
            <h4 className="font-[600] mb-2 underline cursor-pointer">Telephone</h4>
            <a href="tel:650-899-6026" className="font-[500] text-[18px] hover:underline cursor-pointer">
              650-899-6026
            </a>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-[600] underline mb-2 text-center md:text-left cursor-pointer">Socials</h4>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="border-2 border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="border-2 border-blue-600 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-600 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[16px] font-[500] gap-4">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;