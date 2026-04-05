import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import TrendingNews from "./components/TrendingNews";
import Carousel from "./components/Carousel";
import RecentNews from "./components/RecentNews";
import SportsArticle from "./components/SportsArticle";
import NewsSubscription from "./components/NewsSubscription";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <header>
        <Navbar />
      </header>

      <main>
        <section id="hero"><Hero /></section>
        <section id="category"><Category /></section>
        <section id="trending-news"><TrendingNews /></section>
        <section id="carousel"><Carousel /></section>
        <section id="recent-news"><RecentNews /></section>
        <section id="sports-article"><SportsArticle /></section>
        <section id="news-subscription"><NewsSubscription /></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
