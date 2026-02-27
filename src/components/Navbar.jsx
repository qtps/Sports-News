import React from "react";
import logo from "../assets/SportNews.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between py-4  bg-white relative transition-all font-dm ">
      <a href="/Home">
        <img src={logo} alt="SportNews Logo" className=" h-8 pr-4" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 ">
        <a
          href="/Home"
          className="relative inline-block text-gray-600 hover:text-gray-950 transition-colors duration-300 
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 
    after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Home
        </a>
        <a
          href="/Category"
          className="relative inline-block text-gray-600 hover:text-gray-950 transition-colors duration-300 
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 
    after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Category
        </a>
        <a
          href="/Contact"
          className="relative inline-block text-gray-600 hover:text-gray-950 transition-colors duration-300 
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 
    after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Trending News
        </a>
        <a
          href="/Contact"
          className="relative inline-block text-gray-600 hover:text-gray-950 transition-colors duration-300 
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 
    after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Recent News
        </a>
        <a
          href="/Contact"
          className="relative inline-block text-gray-600 hover:text-gray-950 transition-colors duration-300 
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 
    after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Clubs Ranking
        </a>
        <a
          href="/Contact"
          className="relative inline-block text-gray-600 hover:text-gray-950 transition-colors duration-300 
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-800 
    after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          Sports Article
        </a>

        <div
          className="bg-[#B8C2CE] hidden lg:flex items-center text-sm border border-gray-300 px-3 rounded-md 
                focus-within:border-white-500 focus-within:shadow-md focus-within:shadow-gray-300 transition-all duration-300"
        >
          <input
            className="py-1.5 w-25 bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#7A7B7D"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          Category
        </a>
        <a href="#" className="block">
          Trending News
        </a>
        <a href="#" className="block"></a>
        Recent News
        <a href="#" className="block">
          Clubs Ranking
        </a>
        <a href="#" className="block">
          Sports Article
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
