import AboutUs from "../components/About/About";
import Header from "../components/Header/Header";
import Sponsors from "../components/Sponsors/Sponsors";
import Blog from "../components/Blog/Blog";
import Funding from "../components/Funding/Funding";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Sponsors />
      <AboutUs />
      <Blog/>
      <Funding/>
      <Contact/>
    </div>
  );
};

export default HomePage;
