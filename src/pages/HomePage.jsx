import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      {/* header sections */}
      <header>
        <Navbar />
      </header>
      {/* main sections */}
      <main>
        <Hero />
        {/* belwo there section 1 section 2 section 3 */}
      </main>
      {/* footer sections */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default HomePage;
