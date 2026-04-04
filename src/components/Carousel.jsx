import React, { useState } from "react";
import handshake from "../assets/handshake.png";
import race_horse from "../assets/race_horse.png";
import bicycle_racing from "../assets/bicycle_racing.png";

const slides = [
  {
    image: handshake,
    tag: "Football",
    date: "Agence France-Presse – 04 June 2023",
    title:
      "Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms",
    description:
      "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals",
  },
  {
    image: race_horse,
    tag: "Horse Racing",
    date: "01 Oct 2023",
    title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
    description:
      "A 6-year-old horse died after being injured in a race at Belmont Park ahead of next weeks Triple Crown",
  },
  {
    image: bicycle_racing,
    tag: "Cycling",
    date: "02 Oct 2023",
    title: "New Marathon Record Set in Berlin",
    description:
      "A new world record was set at the Berlin Marathon, stunning the athletics community.",
  },
  {
    image: handshake,
    tag: "Football",
    date: "05 Oct 2023",
    title: "Another Football Headline",
    description: "Extra slide to test pagination.",
  },
  {
    image: race_horse,
    tag: "Horse Racing",
    date: "06 Oct 2023",
    title: "Horse Racing News",
    description: "Extra slide to test pagination.",
  },
  {
    image: bicycle_racing,
    tag: "Cycling",
    date: "07 Oct 2023",
    title: "Cycling Event Update",
    description: "Extra slide to test pagination.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [pageStart, setPageStart] = useState(0); // pagination window start

  const windowSize = 4; // সর্বোচ্চ ৪টা number দেখাবে

  const nextSlide = () => {
    const newIndex = (current + 1) % slides.length;
    setCurrent(newIndex);

    // যদি current index window এর শেষের দিকে যায়, তাহলে window shift হবে
    if (newIndex >= pageStart + windowSize) {
      setPageStart(pageStart + 1);
    }
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    setCurrent(newIndex);

    // যদি current index window এর শুরুর দিকে যায়, তাহলে window shift হবে
    if (newIndex < pageStart) {
      setPageStart(Math.max(0, pageStart - 1));
    }
  };

  const visibleNumbers = Array.from(
    { length: windowSize },
    (_, i) => pageStart + i,
  ).filter((n) => n < slides.length);

  return (
    <div className="w-full flex flex-col justify-between ">
      {/* Card Section */}
      <div className="relative w-full sm:w-11/12 md:w-full lg:w-full xl:w-full h-64 sm:h-80 md:h-96 lg:h-120 xl:h-160 group  mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12  overflow-hidden ">
        <img
          src={slides[current].image}
          alt={slides[current].tag}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
          <button
            className="text-gray-100 font-dm px-4 py-2 rounded w-fit text-sm md:text-base 
            outline outline-gray-100 -outline-offset-1
            transition duration-300 ease-in-out
            hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
            active:scale-95 active:shadow-[0_0_15px_4px_rgba(255,255,255,0.9)]"
          >
            {slides[current].tag}
          </button>

          <div className="text-left text-white max-w-[90%] md:max-w-[70%]">
            <p className="mb-2 text-sm md:text-base">{slides[current].date}</p>
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold leading-snug font-sequel">
              {slides[current].title}
            </h2>
            <p className="mt-2 text-sm md:text-base">
              {slides[current].description}
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center space-x-3 py-4 bg-white">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="w-8 h-8 flex items-center justify-center rounded-full 
                     bg-gray-300 text-black 
                     hover:bg-black hover:text-white 
                     active:bg-black active:text-white"
        >
          ←
        </button>

        {/* Number Indicators */}
        <div className="flex space-x-2 transition-all duration-500 ease-in-out">
          {visibleNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setCurrent(num)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors
                ${
                  num === current
                    ? "bg-black text-white"
                    : "bg-gray-300 text-black hover:bg-black hover:text-white active:bg-black active:text-white"
                }`}
            >
              {num + 1}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="w-8 h-8 flex items-center justify-center rounded-full 
                     bg-gray-300 text-black 
                     hover:bg-black hover:text-white 
                     active:bg-black active:text-white"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
