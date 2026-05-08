import Badge from "../components/Badge";
import Title from "../components/Title";
import StartButton from "../components/StartButton";
import StatsBar from "../components/StatsBar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <div className="page">
      {/* Hero Section */}
      <div className="home-container">
        <Badge />
        <Title />
        <p className="tagline">Test your knowledge. Challenge your mind.</p>
        <StartButton />
        <StatsBar />
      </div>

      {/* Categories Section */}
      <Categories />

      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;