import "./Banner.css";
import image from "../assets/banner.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center md:h-[600px] sm:h-[250px] mx-6 lg:mx-6 rounded-[20px] relative flex items-center justify-center"
    >
      <div className="text-white text-center md:space-y-6 space-y-2 py-6 lg:py-0">
        <h2 className="md:text-6xl ">
          Discover an exceptional cooking <br /> class tailored for you!
        </h2>
        <p className="text-xl">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding <br />
          problems to become an exceptionally well world-class Programmer.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-[#0BE58A] py-3 px-4 rounded-full ">
            Explore Now
          </button>
          <button className="outline-offset-0 border border-white py-3 px-4 rounded-full ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
