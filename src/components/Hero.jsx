import overlay_img from "../assets/overlay.png";
import hero_img from "../assets/hero.png";
import runner_girl from "../assets/heroCard1.png";
import reacing_car from "../assets/heroCard2.png";

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row gap-10 items-center justify-between py-10">
      {/* left side */}
      <div className="w-3/4 sm:w-2/3 md:w-3/1 lg:w-3/2 xl:w-3/4  h-full relative">
        {/* bakcground image */}
        <div className=" w-full h-full  relative ">
          <img src={overlay_img} alt="Background" />
          <div className=" absolute top-10 left-10 sm:top-15 sm:left-20 lg:top-25 lg:left-30 lg:w-1/3 md:w-1/5 sm:w-3/4 w-full">
            <h1
              className=" 
                bg-linear-to-t from-black/25 to-black 
                text-transparent bg-clip-text 
                text-4xl xl:w-2/1 sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-bold
                font-sequel uppercase xl:leading-20 sm:leading-10 md:leading-15 "
            >
              top <br />
              scorer to the final match
            </h1>
          </div>
        </div>

        {/* hero card section  */}
        <div className="absolute 2xl:top-25 2xl:left-40 xl:top-20 xl:left-30 lg:top-15 lg:left-20 md:top-10 md:left-10 sm:top-5 sm:left-5 top-0 left-0">
          <div className=" flex flex-col items-center gap-4 justify-between">
            <img src={hero_img} alt="Hero" className="w-180 h-auto" />
            <div className="w-60 sm:w-80 md:w-100 lg:w-140 xl:w-150 2xl:w-150 ">
              <p
                className="
                 text-neutral-800 
                 text-lg sm:text-xl md:text-2xl lg:text-3xl 
                 font-normal font-dm 
                 leading-6 sm:leading-7 md:leading-8 lg:leading-9 pb-4
                 "
              >
                The EuroLeague Finals Top Scorer is the individual award for the
                player that gained the highest points in the EuroLeague Finals
              </p>
              <button
                className="uppercase 
  px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-5 
  bg-neutral-800 rounded-md inline-flex 
  text-white 
  text-sm sm:text-base md:text-lg lg:text-xl"
              >
                {" "}
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right side  two card components*/}
      <div className=" bg-blue-700 w-80 h-138.5">
        <button className=" bg-slate-200 rounded-[3px] px-4 py-2 text-slate-300 text-xl font-medium font-dm mb-4">
          Today
        </button>
        <div className="flex flex-col gap-4 ">
          <div className=" shadow-lg  w-80 relative">
            <img
              src={runner_girl}
              alt="Runner Girl"
              className="w-full h-auto "
            />
            <div className="absolute bottom-4 left-4 w-50 z-50">
              <p className="text-sm text-gray-500 ">June 15, 2024</p>
              <p className="">Ethiopian runners took the top four spots.</p>
            </div>
            <div className="absolute  w-full h-33 bottom-0 left-0 bg-[linear-gradient(0deg,#F2F2F2_35.23%,rgba(242,242,242,0)_100%)]"></div>
          </div>

          <div className=" shadow-lg  w-80 relative">
            <img
              src={reacing_car}
              alt="Racing Car"
              className="w-full h-auto "
            />
            <div className="absolute bottom-4 left-4 w-50 z-50">
              <p className="text-sm text-gray-500 ">June 15, 2024</p>
              <p className="">The fastest car in the race.</p>
            </div>
            <div className="absolute  w-full h-33 bottom-0 left-0 bg-[linear-gradient(0deg,#F2F2F2_35.23%,rgba(242,242,242,0)_100%)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
