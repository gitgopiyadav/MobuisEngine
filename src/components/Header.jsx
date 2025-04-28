import React from "react";
import book from "../assets/book.avif";
import Book from "../assets/Book.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
const Header = () => {
  return (
    <div
      className="min-h-screen flex-item-center w-full justify-center overflow-hidden bg-cover bg-no-repeat bg-center px-4"
      style={{ backgroundImage: "url(/gradient.png)" }}
      id="Header"
    >
      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center w-full px-4 py-12 ">
        <div className=" mx-auto max-w-6xl grid grid-col-1 md:grid-cols-2 gap-8  items-center mr-0 md:mr-16 mt-10">
          {/* Left content */}
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-8 ">
              <h2 className="text-5xl lg:w-2xl lg:text-6xl md:text-5xl sm:text-6xl font-bold leading-tight text-white">
                Land job interviews <span className="text-blue-700">10x </span>
                faster
              </h2>
              <p className="text-base text-gray-200 max-w-md">
                Custom-built resumes that match your goals, keywords, and
                recruiter expectations.
              </p>
              <button
                className="bg-white text-[#022183] font-semibold px-9 py-2 h-[50px] w-[190px] rounded-full 
             hover:bg-[#022183] hover:text-white flex items-center justify-center md:justify-between 
             mx-auto md:mx-0 cursor-pointer transition ease-in-out duration-300"
              >
                <span className="">Get Started</span>
                <span>
                  <HiOutlineArrowSmRight />
                </span>
              </button>
            </div>
          </div>
          {/* Right content */}
          <div>
            <div className="relative flex justify-center lg:mt-[100px]">
              <img src={book} alt="book" className="w-60 shadow-xl " />
            </div>
            <div
              className=" relative flex justify-center  bottom-18 lg:-right-85  -right-50 w-24 h-24 bg-gradient-to-r from-transparent 
            via-[#D9D9D9] to-transparent border-white border-2 rounded-full "
            >
              <img src={Book} className="w-[62px] h-[61px] m-4" alt="book" />
              <div className="absolute left-2 top-16 ">
                <MdArrowOutward
                  className="w-[25px] h-[25px] rounded-full text-[#0649E7]  m-4 
                  cursor-pointer transition bg-white hover:bg-[#0649E7] hover:text-white ease-in-out duration-300"
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
            </div>
            <div className="relative flex justify-center bottom-16 ">
              <button className="text-white text-[16px] cursor-pointer">
                Download Free E-Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
