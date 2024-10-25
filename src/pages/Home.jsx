import Banner from "../components/Banner";
import Header from "../components/Header";
import OurRecipe from "../components/OurRecipe";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Banner />
      <OurRecipe />
    </div>
  );
};

export default Home;
