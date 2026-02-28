import overlay_img from "../assets/overlay.png";
import hero_img from "../assets/hero.png";
import runner_girl from "../assets/heroCard1.png";
import reacing_car from "../assets/heroCard2.png";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      {/* left side */}
      <div>
        {/* bakcground image */}
        <div className="relative">
          <img
            src={overlay_img}
            alt="Background"
            className="w-180 h-auto  pt-4 absolute -left-40 "
          />
          <h1 className="absolute top-70 left-1/6 transform -translate-x-1/2 -translate-y-1/2 w-117.5 justify-start bg-linear-to-t from-black/25 to-black text-transparent bg-clip-text  text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-sequel uppercase leading-20 ">
            top scorer to the final match
          </h1>
        </div>

        {/* hero card section  */}
        <div className="absolute bottom-60 right-1/4 transform -translate-x-1/3">
          <div className=" flex flex-col items-center gap-4 justify-between">
            <img src={hero_img} alt="Hero" className="w-180 h-auto" />
            <div className="absolute bottom-0 right-17">
              <p className="w-96 text-neutral-800 text-lg font-normal font-dm leading-6 pb-6">
                The EuroLeague Finals Top Scorer is the individual award for the
                player that gained the highest points in the EuroLeague Finals
              </p>
              <button className="uppercase px-8 py-3 bg-neutral-800 rounded-md inline-flex text-white">
                {" "}
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right side  two card components*/}
      <div className="absolute bottom-10 -right-26 transform -translate-x-1/3 font-dm top-12 ">
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
