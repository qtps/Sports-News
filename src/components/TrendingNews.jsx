// import "../styles/ripple.css";
import race_horse from "../assets/race_horse.png";
import bicycle_racing from "../assets/bicycle_racing.png";
import boxing_arena from "../assets/boxing_arena.png";
import DringkingWater from "../assets/sportsman-drinking-water.png";
import NewsCard from "./NewsCard";
import "../index.css";

const TrendingNews = () => {
  return (
    <div>
      <h2 className="text-neutral-600 text-xl xl:text-3xl  font-sequel leading-9  ">
        Trending News
      </h2>
      <div className="w-full h-auto flex flex-col md:flex-row sm:flex-col items-center justify-between mt-10 bg-[#E1E8F0] rounded-2xl overflow-hidden">
        {/* left side with continuous auto scroll */}
        <div className="w-full sm:w-1/2 scroll-container bg-[#E1E8F0] ">
          <div className="space-y-0 auto-scroll bg-[#E1E8F0] ">
            {/* তোমার সব card */}
            <NewsCard
              title="6-Year-Old Horse Dies at Belmont Park After Race Injury"
              image={race_horse}
              description="NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next weeks Triple Crown"
              date="2023-10-01"
            />

            <NewsCard
              title="Savilia Blunk Embraces Longer Season with World Cup"
              image={bicycle_racing}
              description="Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some"
              date="2023-10-01"
            />

            <NewsCard
              title="Ryan Garcia is fighting again, this time on social media"
              image={boxing_arena}
              description="Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on"
              date="2023-10-01"
            />

            <NewsCard
              title="New Marathon Record Set in Berlin"
              image={bicycle_racing}
              description="A new world record was set at the Berlin Marathon, stunning the athletics community."
              date="2023-10-02"
            />

            <NewsCard
              title="Heavyweight Title Fight Announced"
              image={boxing_arena}
              description="The heavyweight division is heating up with a new title fight scheduled for December."
              date="2023-10-03"
            />

            <NewsCard
              title="Horse Racing Sees Rising Popularity in Asia"
              image={race_horse}
              description="Horse racing events are drawing massive crowds across Asia, signaling a new era for the sport."
              date="2023-10-04"
            />

            {/* একই card গুলো আবার repeat করো যাতে loop seamless হয় */}
            <NewsCard
              title="6-Year-Old Horse Dies at Belmont Park After Race Injury"
              image={race_horse}
              description="NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next weeks Triple Crown"
              date="2023-10-01"
            />

            <NewsCard
              title="Savilia Blunk Embraces Longer Season with World Cup"
              image={bicycle_racing}
              description="Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some"
              date="2023-10-01"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative w-full sm:w-1/2 mt-10 md:mt-0 group">
          {/* Background Image */}
          <img
            src={DringkingWater}
            alt="Sportsman Drinking Water"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-125 object-cover"
          />

          {/* Transparent Overlay Layer */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>

          {/* Overlay Content */}               
          <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
            {/* Top Left Button */}
            <button
              className=" text-gray-100 font-dm px-3 py-1 sm:px-4 sm:py-2 rounded w-fit text-xs sm:text-sm md:text-base 
                 outline outline-gray-100 -outline-offset-1
                 transition duration-300 ease-in-out
                 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
                 active:scale-95 active:shadow-[0_0_15px_4px_rgba(255,255,255,0.9)]"
            >
              Cycling
            </button>

            {/* Bottom Left Texts */}
            <div className="text-left text-white max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">
                Debits - 03 June 2023
              </p>
              <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug font-sequel">
                DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
              </h2>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default TrendingNews;
