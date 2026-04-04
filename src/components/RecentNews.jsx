
import punch from "../assets/punch.png";
import golf from "../assets/golf.png";
import cricket from "../assets/cricket.png";

const RecentNewsCard = ({ title, image, description, date }) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-slate-200 
                    hover:bg-slate-100 transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-12 h-12 object-cover rounded" />
      <div>
        <h3 className="text-md font-sequel">{title}</h3>
        <p className="text-sm text-stone-600">{description}</p>
        <span className="text-xs text-stone-400">{date}</span>
      </div>
    </div>
  );
};

const RecentNews = () => {
  const clubs = [
    { name: "Manchester City", gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73 },
    { name: "Liverpool", gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68 },
    { name: "Chelsea", gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43 },
    { name: "Tottenham Hotspur", gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29 },
    { name: "Arsenal", gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13 },
    { name: "Manchester United", gp: 38, w: 16, d: 10, l: 12, f: 57, a: 57, gd: 0 },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-5 mb-10 max-w-full">
      {/* প্রথম দুইটা div wrapper */}
      <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-1/2">
        {/* Highlight card */}
        <div className="relative rounded-md w-full sm:w-1/2 bg-[url('/src/assets/marsal.jpg')] bg-cover bg-center hover:scale-105 transition duration-300 cursor-pointer">
          <div className="w-full sm:w-1/2 h-67.5">
            <div
              className="w-full mt-3 text-center absolute left-0 bottom-0 mx-auto py-3 rounded-b-md 
                         bg-[linear-gradient(109deg,rgb(255_255_255/24%)_0%,rgb(255_255_255/6%)_100%)] 
                         backdrop-blur-[50px] 
                         transition duration-300 
                         hover:bg-[linear-gradient(109deg,rgb(255_255_255/40%)_0%,rgb(255_255_255/20%)_100%)]"
            >
              <h2 className="text-md font-sequel">Day 5 Highlights</h2>
              <p className="text-xl font-dm">
                Baku 2023 World Taekwondo Championships
              </p>
            </div>
          </div>
        </div>

        {/* News cards */}
        <div className="rounded-md bg-[#EBEEF3] flex flex-col w-full sm:w-1/2 hover:scale-105 transition duration-300">
          <RecentNewsCard
            title="Punch's Latest News"
            image={punch}
            description="Latest updates and insights from Punch's team."
            date="2023-10-02"
          />
          <RecentNewsCard
            title="Golf's Latest News"
            image={golf}
            description="Latest updates and insights from Golf's team."
            date="2023-10-03"
          />
          <RecentNewsCard
            title="Cricket's Latest News"
            image={cricket}
            description="Latest updates and insights from Cricket's team."
            date="2023-10-04"
          />
          <div className="flex justify-end pt-4 pb-4">
            <button className="text-md font-sequel text-white hover:text-black transition mx-auto px-4 py-2 bg-[#B8C2CE] rounded-sm hover:bg-[#9aa5b3] cursor-pointer">
              More →
            </button>
          </div>
        </div>
      </div>

      {/* Table div */}
      <div className="rounded-md bg-[#EBEEF3] p-4 overflow-x-auto w-full lg:w-1/2 hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer">
        <h2 className="text-lg font-sequel text-neutral-800 mb-4">
          Clubs Ranking
        </h2>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="p-2">Club</th>
              <th className="p-2">GP</th>
              <th className="p-2">W</th>
              <th className="p-2">D</th>
              <th className="p-2">L</th>
              <th className="p-2">F</th>
              <th className="p-2">A</th>
              <th className="p-2">GD</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club, index) => (
              <tr
                key={index}
                className="border-b border-slate-200 hover:bg-slate-100 transition"
              >
                <td className="p-2">
                  {index + 1}. {club.name}
                </td>
                <td className="p-2">{club.gp}</td>
                <td className="p-2">{club.w}</td>
                <td className="p-2">{club.d}</td>
                <td className="p-2">{club.l}</td>
                <td className="p-2">{club.f}</td>
                <td className="p-2">{club.a}</td>
                <td className="p-2">{club.gd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentNews;
