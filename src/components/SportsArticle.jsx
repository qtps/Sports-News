import { useState, useEffect, useRef } from "react";

const articles = [
  {
    id: 1,
    category: "Basketball",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
    author: "Jake Will",
    avatar: "https://i.pravatar.cc/40?img=11",
    date: "04 June 2023",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    excerpt:
      "This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn't all about a massive body mass or ripped muscles.",
  },
  {
    id: 2,
    category: "Hockey",
    image:
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=600&q=80",
    author: "Foxi.zacon",
    avatar: "https://i.pravatar.cc/40?img=22",
    date: "03 June 2023",
    title:
      "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    excerpt:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    id: 3,
    category: "Badminton",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=600&q=80",
    author: "Alex Johnson",
    avatar: "https://i.pravatar.cc/40?img=33",
    date: "02 June 2023",
    title: "'Outdoor' Badminton Gets Support From Local Federation",
    excerpt:
      "The Badminton World Federation is developing Air Badminton and the country's governing body, Philippine Badminton Association.",
  },
  {
    id: 4,
    category: "Football",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    author: "Michael Brown",
    avatar: "https://i.pravatar.cc/40?img=44",
    date: "01 June 2023",
    title: "Football Championship: Teams Battle for the Title",
    excerpt:
      "The annual football championship is in full swing, with top teams competing for the coveted championship trophy.",
  },
  {
    id: 5,
    category: "Tennis",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80",
    author: "Elena Voss",
    avatar: "https://i.pravatar.cc/40?img=55",
    date: "28 May 2023",
    title: "Roland Garros: The Clay Court Battle That Has Everyone Talking",
    excerpt:
      "With three former champions in the same quarter of the draw, this year's French Open promises to be the most competitive in a decade.",
  },
  {
    id: 6,
    category: "Swimming",
    image:
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&q=80",
    author: "Mia Chen",
    avatar: "https://i.pravatar.cc/40?img=66",
    date: "26 May 2023",
    title:
      "World Record Broken Twice in One Day at International Swimming Championship",
    excerpt:
      "Athletes shattered long-standing records in the 100m freestyle and 200m butterfly events, signaling a new era of competitive swimming.",
  },
  {
    id: 7,
    category: "Cricket",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    author: "sakib al hasan",
    avatar:
      "https://media.crictracker.com/media/attachments/1696748634550_Shakib-Al-Hasan.jpeg",

    date: "24 May 2023",
    title: "Cricket World Cup: Teams Gear Up for the Ultimate Showdown",
    excerpt:
      "As the Cricket World Cup approaches, teams from around the globe are in intense training, preparing for the ultimate showdown on the pitch.",
  },
  {
    id: 8,
    category: "Golf",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    author: "Sophia Lee",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVLAbp6jLz9Vfw__7z3eLdrMitt8uaUsNNA&s",
    date: "22 May 2023",
    title: "Golf Tournament: Stars Battle for the Title",
    excerpt:
      "The annual golf tournament is in full swing, with top players competing for the coveted championship trophy.",
  },
  {
    id: 9,
    category: "Boxing",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    author: "Liam Turner",
    avatar:
      "https://www.ultimaterugby.com/images/entities/225282-b50040b733-3/LiamTurnerrugbyplayer.jpg",
    date: "20 May 2023",
    title: "Boxing Championship: Fighters Prepare for the Big Night",
    excerpt:
      "As the boxing championship approaches, fighters are in intense training, ready to step into the ring for a night of unforgettable action.",
  },
  {
    id: 10,
    category: "Athletics",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=600&q=80",
    author: "Emma Davis",
    avatar: "https://i.pravatar.cc/40?img=10",
    date: "18 May 2023",
    title: "Athletics Meet: Athletes Compete for Glory",
    excerpt:
      "The athletics meet is underway, with athletes from around the world competing in various track and field events for glory and national pride.",
  },
];

function getVisibleCount() {
  const w = window.innerWidth;
  if (w < 540) return 1;
  if (w < 820) return 2;
  return 3;
}

function getGap(v) {
  return v === 1 ? 0 : 24;
}

export default function SportsArticle() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(getVisibleCount);
  const [cardWidth, setCardWidth] = useState(0);
  const wrapperRef = useRef(null);

  const gap = getGap(visible);

  // Measure the wrapper's real pixel width to compute exact card size
  function recalc() {
    const v = getVisibleCount();
    const g = getGap(v);
    setVisible(v);
    if (wrapperRef.current) {
      const totalW = wrapperRef.current.offsetWidth;
      setCardWidth((totalW - g * (v - 1)) / v);
    }
  }

  useEffect(() => {
    const rafId = window.requestAnimationFrame(recalc);
    window.addEventListener("resize", recalc);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", recalc);
    };
  }, []);

  // Clamp index when visible changes (e.g. rotating device)
  useEffect(() => {
    const max = articles.length - visible;
    if (index > max) setIndex(Math.max(0, max));
  }, [visible, index]);

  const maxIndex = articles.length - visible;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  // Exact pixel offset — no CSS calc rounding surprises
  const translateX = index * (cardWidth + gap);

  function slide(dir) {
    if (animating) return;
    if (dir === "left" && !canPrev) return;
    if (dir === "right" && !canNext) return;
    setAnimating(true);
    setIndex((i) => (dir === "right" ? i + 1 : i - 1));
    setTimeout(() => setAnimating(false), 440);
  }

  return (
    <>
      <style>{`
        .strip-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .card-strip {
          display: flex;
          gap: ${gap}px;
          transform: translateX(-${translateX}px);
          transition: transform 0.44s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .article-card-wrap {
          flex: 0 0 ${cardWidth > 0 ? `${cardWidth}px` : "100%"};
          min-width: 0;
        }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=Mulish:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* parent div */}

      <div
        className="w-full h-auto bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 "
        style={{ fontFamily: "'Mulish', sans-serif" }}
      >
        <div className="w-full max-w-5xl">
          <h1
            className="text-2xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Sports Article
          </h1>

          {/* Carousel */}
          <div className="strip-wrapper" ref={wrapperRef}>
            <div className="card-strip">
              {articles.map((article) => (
                <div className="article-card-wrap" key={article.id}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-8 items-center">
            <button
              onClick={() => slide("left")}
              disabled={!canPrev || animating}
              className={`w-12 h-12 rounded-md flex items-center justify-center border transition-all duration-200
                ${
                  canPrev
                    ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer"
                    : "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => slide("right")}
              disabled={!canNext || animating}
              className={`w-12 h-12 rounded-md flex items-center justify-center border transition-all duration-200
                ${
                  canNext
                    ? "bg-gray-900 border-gray-900 text-white hover:bg-gray-700 cursor-pointer"
                    : "bg-gray-200 border-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <SmartDots total={maxIndex + 1} current={index} />
          </div>
        </div>
      </div>
    </>
  );
}

const MAX_DOTS = 5;

function SmartDots({ total, current }) {
  if (total <= MAX_DOTS) {
    return (
      <div className="flex items-center gap-1.5 ml-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-5 h-2 bg-gray-900" : "w-2 h-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  }

  const half = Math.floor(MAX_DOTS / 2);
  let start = Math.max(0, current - half);
  let end = start + MAX_DOTS - 1;
  if (end >= total) {
    end = total - 1;
    start = Math.max(0, end - MAX_DOTS + 1);
  }

  return (
    <div className="flex items-center gap-1.5 ml-3">
      {start > 0 && (
        <span className="text-gray-300 text-xs leading-none pb-0.5">•••</span>
      )}
      {Array.from({ length: end - start + 1 }).map((_, i) => {
        const dotIndex = start + i;
        return (
          <div
            key={dotIndex}
            className={`rounded-full transition-all duration-300 ${
              dotIndex === current
                ? "w-5 h-2 bg-gray-900"
                : "w-2 h-2 bg-gray-300"
            }`}
          />
        );
      })}
      {end < total - 1 && (
        <span className="text-gray-300 text-xs leading-none pb-0.5">•••</span>
      )}
    </div>
  );
}

function ArticleCard({ article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden cursor-pointer group"
      style={{
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.12)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
          {article.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2.5 mb-3">
          <img
            src={article.avatar}
            alt={article.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-gray-700">
            {article.author}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-2">{article.date}</p>
        <h2
          className="text-sm font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-gray-600 transition-colors duration-200"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {article.title}
        </h2>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}
