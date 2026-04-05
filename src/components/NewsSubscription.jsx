import { useState } from "react";
import sportsman from "../assets/sportsman.png";

function NewsSubscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <div className="w-full mt-5  bg-linear-to-br from-gray-200 to-gray-300   overflow-hidden flex flex-col sm:flex-row">
        {/* Left: Title + Form */}
        <div className="flex-1 flex flex-col justify-center gap-5 px-8 py-10 order-1 z-10">
          {/* Title */}
          <div className="leading-none font-[Bebas_Neue]">
            <span className="block  tracking-widest  sm:text-4xl lg:text-6xl font-sequel bg-linear-to-t from-black/25 to-black 
                text-transparent bg-clip-text 
                text-3xl">
              NEWSLETTER SUBSCRIPTION
            </span>
  
              
            
          </div>

          {/* Email Form */}
          <div className="flex items-center max-w-sm">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 px-4 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white/75 border border-gray-300 border-r-0 rounded-l-lg outline-none focus:border-gray-500 focus:bg-white/95 transition-all"
            />
            <button
              onClick={handleSubmit}
              aria-label="Subscribe"
              className="w-12 h-11 bg-gray-900 hover:bg-gray-800 flex items-center justify-center rounded-r-lg transition-all shrink-0 group"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-2 w-full sm:w-5/12 lg:w-1/2 shrink-0 overflow-hidden ">
          <img
            src={sportsman}
            alt="Football Player"
            className="w-full h-52 sm:h-full object-cover object-top"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80";
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NewsSubscription;
