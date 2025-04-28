import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="fixed  -top-2 -left-9  w-full z-10 bg-transparent">
      <div className="container m-auto px-15 py-4 flex items-center justify-between md:justify-start mt-4 gap-3">
        <img
          src={assets.logo}
          alt="logo"
          className=" md:flex sm:flex  flex-shrink-0 cursor-pointer  w-[200px] h-[49px] "
        />
        <ul
          className="hidden md:flex items-center md:px-32
 gap-x-15 text-white"
        >
          <li className=" relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-black transition ease-in-out duration-300"
            >
              Home
            </Link>
          </li>
          <li className=" relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-black transition ease-in-out duration-300"
            >
              About
            </Link>
          </li>
          <li className=" relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-black transition ease-in-out duration-300"
            >
              Plans
            </Link>
          </li>
          <li className=" relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-black transition ease-in-out duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li className=" relative group">
            <Link
              to="/"
              className="cursor-pointer hover:text-black transition ease-in-out duration-300"
            >
              Privacy Policy
            </Link>
          </li>
          <li className=" relative group">
            <Link
              to="/"
              className="flex items-center gap-1 cursor-pointer hover:text-black transition ease-in-out duration-300"
            >
              More 
              <MdArrowDropDown/>

            </Link>
            <div className="absolute top-4.5 left-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded p-2 z-50">
              <Link
                to="/CompanyOverview"
                className="block px-4 py-2  hover:text-[#022183] transition ease-in-out duration-300"
              >
                Terms
              </Link>
              <Link
                to="/LeadershipTeam"
                className="block px-4 py-2 hover:text-[#022183] transition ease-in-out duration-300"
              >
                Members
              </Link>
              <Link
                to="/LeadershipTeam"
                className="block px-4 py-2 hover:text-[#022183] transition ease-in-out duration-300"
              >
                Refer Friends
              </Link>
            </div>
          </li>
        </ul>

        <Link className="hidden md:flex text-[#022183] px-9 py-2 h-[50px] w-[190px] bg-white rounded-3xl hover:bg-[#022183] hover:text-white items-center justify-center transition ease-in-out duration-300">
          Get Started
        </Link>

        {/* Hamburger Menu (mobile) */}
        <div>
          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            alt="menu"
            className="md:hidden fixed top-6 right-6 z-50 w-6 cursor-pointer "
          />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-fll inline-block"
          >
            About Us
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Plans
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Testimonials
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Privacy Policy
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Terms
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Members
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-fll inline-block"
          >
            Refer Friends
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
