import React from "react";
import logo from "../assets/SportNews.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  // smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); // mobile menu বন্ধ হয়ে যাবে click করলে
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12 bg-white shadow-md transition-all font-dm z-50">
      <button onClick={() => handleScroll("hero")}>
        <img src={logo} alt="SportNews Logo" className="h-8 pr-4" />
      </button>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <button onClick={() => handleScroll("hero")} className="nav-link">Home</button>
        <button onClick={() => handleScroll("category")} className="nav-link">Category</button>
        <button onClick={() => handleScroll("trending-news")} className="nav-link">Trending News</button>
        <button onClick={() => handleScroll("carousel")} className="nav-link">Recent News</button>
        <button onClick={() => handleScroll("recent-news")} className="nav-link">Clubs Ranking</button>
        <button onClick={() => handleScroll("sports-article")} className="nav-link">Sports Article</button>
      </div>

      {/* Search Box */}
      <div className="bg-[#B8C2CE] hidden lg:flex items-center text-sm border border-gray-300 px-3 rounded-md focus-within:border-white-500 focus-within:shadow-md focus-within:shadow-gray-300 transition-all duration-300">
        <input
          className="py-1.5 w-25 bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="Search"
        />
        {/* search icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Overlay for outside click */}
      {open && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`${open ? "flex" : "hidden"} absolute top-15 left-0 w-full bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}>
        <button onClick={() => handleScroll("hero")} className="nav-link">Home</button>
        <button onClick={() => handleScroll("category")} className="nav-link">Category</button>
        <button onClick={() => handleScroll("trending-news")} className="nav-link">Trending News</button>
        <button onClick={() => handleScroll("carousel")} className="nav-link">Recent News</button>
        <button onClick={() => handleScroll("recent-news")} className="nav-link">Clubs Ranking</button>
        <button onClick={() => handleScroll("sports-article")} className="nav-link">Sports Article</button>
      </div>
    </nav>
  );
};

export default Navbar;
