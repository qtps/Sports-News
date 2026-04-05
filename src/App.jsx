import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentNews from "./components/RecentNews";
import SportsArticle from "./components/SportsArticle";
import TrendingNews from "./components/TrendingNews";

const App = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* header sections */}
      <header>
        <Navbar/>
      </header>
      {/* main sections */}
      <main>
        <Hero />
        {/* belwo there section 1 section 2 section 3 */}
        <Category  />
        <TrendingNews />
        <Carousel />
        <RecentNews />
        <SportsArticle />
        
      </main>
      {/* footer sections */}
      <footer>
        {/* <Footer /> */}
      </footer> 
    </div>
  );
};
export default App;
